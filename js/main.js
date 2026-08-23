// Module chính đóng vai trò Controller
import { mriData } from './data.js';
import { filterMriData } from './search.js';
import { renderMriList } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    // UI Elements
    const containerId = "mriList";
    const searchInput = document.getElementById("searchInput");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const alphabetFilter = document.getElementById("alphabetFilter");
    
    // Sidebar & View
    const menuItems = document.querySelectorAll(".menu-item[data-mod]");
    const mriHeaderTools = document.getElementById("mriHeaderTools");
    const mriList = document.getElementById("mriList");
    const comingSoon = document.getElementById("comingSoon");

    // Modal
    const modal = document.getElementById("contributeModal");
    const btnCloseModal = document.getElementById("modalClose");
    const btnCancelEdit = document.getElementById("btnCancelEdit");
    const formContribute = document.getElementById("contributeForm");
    const btnContributeNew = document.getElementById("btnContributeNew");

    // View Controls
    const btnTextInc = document.getElementById("btnTextInc");
    const btnTextDec = document.getElementById("btnTextDec");
    const btnThemeLight = document.getElementById("btnThemeLight");
    const btnThemeSapphire = document.getElementById("btnThemeSapphire");
    const btnThemeDark = document.getElementById("btnThemeDark");

    // Render Alphabet
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let alphaHTML = `<button class="alpha-btn all-btn active" data-alpha="ALL">Tất cả</button>`;
    letters.forEach(letter => {
        alphaHTML += `<button class="alpha-btn" data-alpha="${letter}">${letter}</button>`;
    });
    alphabetFilter.innerHTML = alphaHTML;

    // States
    let currentTab = 'Sequence'; 
    let currentKeyword = '';
    let currentAlpha = 'ALL'; 
    let currentFontSize = 14; 

    // 1. Sidebar Nav
    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            menuItems.forEach(i => i.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            const moduleName = e.currentTarget.getAttribute("data-mod");
            if (moduleName === "MRI") {
                mriHeaderTools.style.display = "block";
                mriList.style.display = "block";
                comingSoon.style.display = "none";
            } else {
                mriHeaderTools.style.display = "none";
                mriList.style.display = "none";
                comingSoon.style.display = "flex";
            }
        });
    });

    // 2. Filter & Render
    function updateDisplay() {
        let filteredData = filterMriData(mriData, currentKeyword);
        filteredData = filteredData.filter(item => {
            if (currentTab === 'Sequence') return item.type === 'Sequence';
            else if (currentTab === 'Physics') return item.type === 'Physics';
            else if (currentTab === 'Protocol') return item.type === 'Protocol'; 
            else return item.type !== 'Sequence' && item.type !== 'Physics' && item.type !== 'Protocol';
        });

        if (currentAlpha !== 'ALL') {
            filteredData = filteredData.filter(item => {
                const enStart = item.en?.charAt(0).toUpperCase();
                const viStart = item.vi?.charAt(0).toUpperCase();
                return enStart === currentAlpha || viStart === currentAlpha;
            });
        }
        renderMriList(filteredData, containerId);
    }

    updateDisplay(); 

    searchInput.addEventListener("input", (e) => {
        currentKeyword = e.target.value;
        updateDisplay();
    });

    tabBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            tabBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentTab = e.target.getAttribute("data-tab");
            updateDisplay();
        });
    });

    const alphaBtns = document.querySelectorAll(".alpha-btn");
    alphaBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            alphaBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentAlpha = e.target.getAttribute("data-alpha");
            updateDisplay();
        });
    });

    // 3. Xử lý List Events (Edit, Copy, Share, & WIKI INTERNAL LINKS)
    mriList.addEventListener("click", (e) => {
        // --- XỬ LÝ LIÊN KẾT CHÉO WIKIPEDIA ---
        if(e.target.classList.contains("wiki-internal-link")) {
            e.preventDefault();
            const targetId = parseInt(e.target.getAttribute("data-id"));
            const targetItem = mriData.find(i => i.id === targetId);
            
            if(targetItem) {
                // Tự động set Tab phù hợp
                currentTab = (targetItem.type === 'Sequence' || targetItem.type === 'Physics' || targetItem.type === 'Protocol') ? targetItem.type : 'Parameter';
                tabBtns.forEach(b => {
                    b.classList.remove("active");
                    if(b.getAttribute("data-tab") === currentTab) b.classList.add("active");
                });

                // Xóa filter Alphabet, set Search box
                currentAlpha = 'ALL';
                document.querySelectorAll(".alpha-btn").forEach(b => {
                    b.classList.remove("active");
                    if(b.getAttribute("data-alpha") === 'ALL') b.classList.add("active");
                });
                
                searchInput.value = targetItem.en;
                currentKeyword = targetItem.en;
                
                updateDisplay();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            return;
        }

        const id = parseInt(e.target.getAttribute("data-id"));
        const item = mriData.find(i => i.id === id);

        if (!item) return;

        let textToExport = `${item.en} (${item.vi})\n`;
        if (item.type === 'Protocol') {
            textToExport += `- Chỉ định: ${item.indications}\n- Xung cơ bản: \n${item.basicSequences}\n- Nâng cao: \n${item.advancedSequences}\n- Lưu ý: ${item.notes}`;
        } else {
            textToExport += `- Định nghĩa: ${item.description}\n- Ứng dụng: ${item.parameters}`;
        }

        if(e.target.classList.contains("wiki-edit-btn")) {
            document.getElementById("modalTitle").innerText = `Đang sửa đổi "${item.en}"`;
            document.getElementById("editId").value = item.id;
            document.getElementById("editEn").value = item.en;
            document.getElementById("editVi").value = item.vi;
            document.getElementById("editType").value = item.type === 'Artifact' || item.type === 'Hardware' ? 'Parameter' : item.type; 
            document.getElementById("editDesc").value = item.description || item.indications;
            document.getElementById("editParams").value = item.parameters || item.notes;
            modal.style.display = "flex";
        }
        
        if(e.target.classList.contains("copy-btn")) {
            navigator.clipboard.writeText(textToExport).then(() => {
                alert("Đã sao chép nội dung!");
            }).catch(err => {
                console.error("Lỗi copy:", err);
            });
        }

        if(e.target.classList.contains("share-btn")) {
            if (navigator.share) {
                navigator.share({
                    title: `Wikiradiology - ${item.en}`,
                    text: textToExport,
                    url: window.location.href
                }).catch(console.error);
            } else {
                alert("Trình duyệt không hỗ trợ chia sẻ trực tiếp. Vui lòng dùng nút [copy]!");
            }
        }
    });

    // Modal Events
    btnContributeNew.addEventListener("click", () => {
        document.getElementById("modalTitle").innerText = "Tạo bài viết / Thuật ngữ mới";
        formContribute.reset();
        document.getElementById("editId").value = "";
        modal.style.display = "flex";
    });

    const closeModal = () => { modal.style.display = "none"; };
    btnCloseModal.addEventListener("click", closeModal);
    btnCancelEdit.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => { if(e.target === modal) closeModal(); });

    formContribute.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Cảm ơn bạn! Bản sửa đổi đã được ghi nhận chờ duyệt.");
        closeModal();
        formContribute.reset();
    });

    // View Controls
    if(btnTextInc && btnTextDec) {
        btnTextInc.addEventListener("click", () => {
            if (currentFontSize < 24) currentFontSize += 2;
            document.body.style.fontSize = currentFontSize + "px";
        });
        btnTextDec.addEventListener("click", () => {
            if (currentFontSize > 12) currentFontSize -= 2;
            document.body.style.fontSize = currentFontSize + "px";
        });
    }

    if(btnThemeLight && btnThemeSapphire && btnThemeDark) {
        btnThemeLight.addEventListener("click", () => document.body.className = "");
        btnThemeSapphire.addEventListener("click", () => document.body.className = "sapphire-mode");
        btnThemeDark.addEventListener("click", () => document.body.className = "dark-mode");
    }
});
