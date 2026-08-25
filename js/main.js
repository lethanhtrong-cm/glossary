// Khai báo Firebase SDK qua CDN (Dành cho ES6 Modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, doc, setDoc, getDoc, increment } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Module chính đóng vai trò Controller
import { mriData } from './data.js';
import { ctParamData } from './ct/dataCT_param.js'; 
import { ctProtocolData } from './ct/dataCT_protocol.js'; 
import { filterMriData } from './search.js';
import { renderMriList } from './ui.js';

// --- CẤU HÌNH FIREBASE ---
const firebaseConfig = {
    apiKey: "AIzaSyDqdo_DJIWa5iqxiCgBq-0iGX7f9sr6soo",
    authDomain: "rt-examination.firebaseapp.com",
    databaseURL: "https://rt-examination-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rt-examination",
    storageBucket: "rt-examination.firebasestorage.app",
    messagingSenderId: "920482699854",
    appId: "1:920482699854:web:44f9b0d735bdc001c6c11f",
    measurementId: "G-8N7RTTREQM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Gộp 2 mảng dữ liệu CT lại
const ctData = [...ctParamData, ...ctProtocolData];

// --- HÀM THỐNG KÊ LƯỢT TRUY CẬP ---
export function initPageStatistics(db, pageId) {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    
    const dateKey = `day_${year}_${month}_${date}`;
    const monthKey = `month_${year}_${month}`;
    const yearKey = `year_${year}`;
    
    const startDate = new Date(now.getFullYear(), 0, 1);
    const days = Math.floor((now - startDate) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((now.getDay() + 1 + days) / 7);
    const weekKey = `week_${year}_W${String(weekNumber).padStart(2, '0')}`;

    const sessionFlag = `visited_${pageId}`;

    if (!sessionStorage.getItem(sessionFlag)) {
        sessionStorage.setItem(sessionFlag, 'true');
        setTimeout(() => {
            const updates = {
                totalVisits: increment(1),
                [dateKey]: increment(1),
                [weekKey]: increment(1),
                [monthKey]: increment(1),
                [yearKey]: increment(1)
            };
            setDoc(doc(db, "statistics", pageId), updates, { merge: true }).catch(() => {});
        }, 3000);
    }

    getDoc(doc(db, "statistics", pageId))
        .then((docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                const vTotal = document.getElementById('global-visitor-count');
                const vDaily = document.getElementById('visitor-daily');
                const vWeekly = document.getElementById('visitor-weekly');
                const vMonthly = document.getElementById('visitor-monthly');
                const vYearly = document.getElementById('visitor-yearly');

                if (vTotal) vTotal.innerText = (data.totalVisits || 0).toLocaleString('vi-VN');
                if (vDaily) vDaily.innerText = (data[dateKey] || 0).toLocaleString('vi-VN');
                if (vWeekly) vWeekly.innerText = (data[weekKey] || 0).toLocaleString('vi-VN');
                if (vMonthly) vMonthly.innerText = (data[monthKey] || 0).toLocaleString('vi-VN');
                if (vYearly) vYearly.innerText = (data[yearKey] || 0).toLocaleString('vi-VN');
            }
        })
        .catch((error) => console.error(`Lỗi thống kê:`, error));
}


document.addEventListener("DOMContentLoaded", () => {
    initPageStatistics(db, "main_dictionary");

    const containerId = "mriList";
    const searchInput = document.getElementById("searchInput");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const alphabetFilter = document.getElementById("alphabetFilter");
    
    // Nút Tab cần ẩn/hiện theo hệ
    const tabSequence = document.querySelector('.tab-btn[data-tab="Sequence"]');
    const tabPhysics = document.querySelector('.tab-btn[data-tab="Physics"]');
    
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
    
    // Elements cho Dynamic Form
    const editTypeSelect = document.getElementById("editType");
    const lblDesc = document.getElementById("lblDesc");
    const lblParams = document.getElementById("lblParams");
    const protocolOnlyFields = document.querySelectorAll(".protocol-only-field");

    // View Controls
    const btnTextInc = document.getElementById("btnTextInc");
    const btnTextDec = document.getElementById("btnTextDec");
    const btnThemeLight = document.getElementById("btnThemeLight");
    const btnThemeSapphire = document.getElementById("btnThemeSapphire");
    const btnThemeDark = document.getElementById("btnThemeDark");

    // BIẾN QUẢN LÝ TRẠNG THÁI HIỆN TẠI
    let currentModule = 'MRI'; 
    let currentData = mriData; 
    let currentTab = 'Sequence'; 
    let currentKeyword = '';
    let currentAlpha = 'ALL'; 
    let currentFontSize = 14; 

    // Render Alphabet
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let alphaHTML = `<button class="alpha-btn all-btn active" data-alpha="ALL">Tất cả</button>`;
    letters.forEach(letter => {
        alphaHTML += `<button class="alpha-btn" data-alpha="${letter}">${letter}</button>`;
    });
    alphabetFilter.innerHTML = alphaHTML;

    // 1. Sidebar Nav (Hoán đổi linh hoạt giữa các Modalities)
    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            menuItems.forEach(i => i.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            const moduleName = e.currentTarget.getAttribute("data-mod");
            currentModule = moduleName;

            if (moduleName === "MRI") {
                currentData = mriData;
                document.getElementById("firstHeading").innerText = "Từ Điển Cộng Hưởng Từ (MRI)";
                
                // Trả lại các Tab MRI
                tabSequence.style.display = "inline-block"; 
                tabPhysics.style.display = "inline-block"; 
                
                mriHeaderTools.style.display = "block";
                mriList.style.display = "block";
                comingSoon.style.display = "none";
                updateDisplay();
            } else if (moduleName === "CT") {
                currentData = ctData;
                document.getElementById("firstHeading").innerText = "Từ Điển Cắt Lớp Vi Tính (CT)";
                
                // Ẩn 2 Tab dư thừa của CT
                tabSequence.style.display = "none"; 
                tabPhysics.style.display = "none"; 
                
                // Ép người dùng sang Tab "Parameter" nếu đang đứng ở 2 tab kia
                if (currentTab === 'Sequence' || currentTab === 'Physics') {
                    currentTab = 'Parameter';
                    tabBtns.forEach(b => b.classList.remove("active"));
                    document.querySelector('.tab-btn[data-tab="Parameter"]').classList.add("active");
                }
                
                mriHeaderTools.style.display = "block";
                mriList.style.display = "block";
                comingSoon.style.display = "none";
                updateDisplay();
            } else {
                mriHeaderTools.style.display = "none";
                mriList.style.display = "none";
                comingSoon.style.display = "flex";
            }
        });
    });

    // 2. Filter & Render
    function updateDisplay() {
        let filteredData = filterMriData(currentData, currentKeyword);
        
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

    // --- LOGIC FORM ĐỘNG ---
    function toggleFormFields(typeValue) {
        if (typeValue === "Protocol") {
            lblDesc.innerText = "1. Chỉ định bệnh lý: *";
            lblParams.innerText = "2. Xung cơ bản / Cài đặt:";
            protocolOnlyFields.forEach(el => el.style.display = "block");
        } else {
            lblDesc.innerText = "Nguyên lý / Định nghĩa: *";
            lblParams.innerText = "Chi tiết / Ứng dụng lâm sàng:";
            protocolOnlyFields.forEach(el => el.style.display = "none");
        }
    }

    editTypeSelect.addEventListener("change", (e) => {
        toggleFormFields(e.target.value);
    });

    // 3. Xử lý List Events
    mriList.addEventListener("click", (e) => {
        if(e.target.classList.contains("wiki-internal-link")) {
            e.preventDefault();
            const targetId = parseInt(e.target.getAttribute("data-id"));
            const targetItem = currentData.find(i => i.id === targetId);
            
            if(targetItem) {
                currentTab = (targetItem.type === 'Sequence' || targetItem.type === 'Physics' || targetItem.type === 'Protocol') ? targetItem.type : 'Parameter';
                tabBtns.forEach(b => {
                    b.classList.remove("active");
                    if(b.getAttribute("data-tab") === currentTab) b.classList.add("active");
                });

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
        const item = currentData.find(i => i.id === id);

        if (!item) return;

        let textToExport = `${item.en} (${item.vi})\n`;
        if (item.type === 'Protocol') {
            textToExport += `- Chỉ định: ${item.indications}\n- Cài đặt/Xung cơ bản: \n${item.basicSequences}\n- Nâng cao: \n${item.advancedSequences}\n- Lưu ý: ${item.notes}`;
        } else {
            textToExport += `- Định nghĩa: ${item.description}\n- Ứng dụng: ${item.parameters}`;
        }

        if(e.target.classList.contains("wiki-edit-btn")) {
            document.getElementById("modalTitle").innerText = `Đang sửa đổi "${item.en}"`;
            document.getElementById("editId").value = item.id;
            document.getElementById("editEn").value = item.en;
            document.getElementById("editVi").value = item.vi;
            document.getElementById("editType").value = item.type === 'Artifact' || item.type === 'Hardware' ? 'Parameter' : item.type; 
            
            toggleFormFields(item.type);
            document.getElementById("editDesc").value = item.description || item.indications || "";
            document.getElementById("editParams").value = item.parameters || item.basicSequences || "";
            document.getElementById("editAdvanced").value = item.advancedSequences || "";
            document.getElementById("editNotes").value = item.notes || "";
            document.getElementById("editCitation").value = (item.citations && item.citations.length > 0) ? item.citations[0] : "";
            
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
        toggleFormFields(editTypeSelect.value); 
        modal.style.display = "flex";
    });

    const closeModal = () => { modal.style.display = "none"; };
    btnCloseModal.addEventListener("click", closeModal);
    btnCancelEdit.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => { if(e.target === modal) closeModal(); });

    // --- XỬ LÝ SUBMIT LÊN FIRESTORE ---
    formContribute.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const submitBtn = formContribute.querySelector(".btn-submit");
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Đang gửi dữ liệu...";
        submitBtn.disabled = true;

        try {
            const type = document.getElementById("editType").value;
            const citationVal = document.getElementById("editCitation").value.trim();
            const payload = {
                contributor: document.getElementById("contributorName").value.trim() || "Ẩn danh",
                originalId: document.getElementById("editId").value || null, 
                en: document.getElementById("editEn").value.trim(),
                vi: document.getElementById("editVi").value.trim(),
                type: type,
                citations: citationVal ? [citationVal] : [],
                status: "pending",
                createdAt: serverTimestamp() 
            };

            if (type === "Protocol") {
                payload.indications = document.getElementById("editDesc").value.trim();
                payload.basicSequences = document.getElementById("editParams").value.trim();
                payload.advancedSequences = document.getElementById("editAdvanced").value.trim();
                payload.notes = document.getElementById("editNotes").value.trim();
            } else {
                payload.description = document.getElementById("editDesc").value.trim();
                payload.parameters = document.getElementById("editParams").value.trim();
            }

            await addDoc(collection(db, "pending_approvals"), payload);

            alert("Cảm ơn bạn! Bản sửa đổi của bạn đã được đẩy thành công lên hệ thống chờ duyệt.");
            closeModal();
            formContribute.reset();
        } catch (error) {
            console.error("Lỗi khi gửi lên Firebase: ", error);
            alert("Đã xảy ra lỗi khi kết nối với hệ thống. Vui lòng kiểm tra lại thiết lập cấu hình Database.");
        } finally {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
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
