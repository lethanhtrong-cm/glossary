import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, doc, setDoc, getDoc, increment } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Module chính
import { mriData } from './data.js';
import { ctParamData } from './ct/dataCT_param.js'; 
import { ctProtocolData } from './ct/dataCT_protocol.js'; 
import { ctAngioData } from './ct/dataCT_angio.js'; 
import { xrayParamData } from './xray/dataXR_param.js'; 
import { xrayPositionData } from './xray/dataXR_position.js'; 

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

// Gộp mảng dữ liệu
const ctData = [...ctParamData, ...ctProtocolData, ...ctAngioData];
const xrayData = [...xrayParamData, ...xrayPositionData];

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

    getDoc(doc(db, "statistics", pageId)).then((docSnap) => {
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
    }).catch((error) => console.error(`Lỗi thống kê:`, error));
}

document.addEventListener("DOMContentLoaded", () => {
    initPageStatistics(db, "main_dictionary");

    const containerId = "mriList";
    const searchInput = document.getElementById("searchInput");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const alphabetFilter = document.getElementById("alphabetFilter");
    
    // Nút Tab thao tác
    const tabSequence = document.querySelector('.tab-btn[data-tab="Sequence"]');
    const tabPhysics = document.querySelector('.tab-btn[data-tab="Physics"]');
    const tabProtocol = document.querySelector('.tab-btn[data-tab="Protocol"]');
    const tabAngio = document.querySelector('.tab-btn[data-tab="Angiography"]');
    const tabPosition = document.querySelector('.tab-btn[data-tab="Position"]');
    
    // Sidebar & View
    const menuItems = document.querySelectorAll(".menu-item[data-mod]");
    const mriHeaderTools = document.getElementById("mriHeaderTools");
    const mriList = document.getElementById("mriList");
    const comingSoon = document.getElementById("comingSoon");

    // Modal & Form
    const modal = document.getElementById("contributeModal");
    const btnCloseModal = document.getElementById("modalClose");
    const btnCancelEdit = document.getElementById("btnCancelEdit");
    const formContribute = document.getElementById("contributeForm");
    const btnContributeNew = document.getElementById("btnContributeNew");
    
    const editTypeSelect = document.getElementById("editType");
    const lblDesc = document.getElementById("lblDesc");
    const lblParams = document.getElementById("lblParams");
    const protocolOnlyFields = document.querySelectorAll(".protocol-only-field");

    const btnTextInc = document.getElementById("btnTextInc");
    const btnTextDec = document.getElementById("btnTextDec");
    const btnThemeLight = document.getElementById("btnThemeLight");
    const btnThemeSapphire = document.getElementById("btnThemeSapphire");
    const btnThemeDark = document.getElementById("btnThemeDark");

    // --- XỬ LÝ GIAO DIỆN MOBILE & DỜI KHỐI XUỐNG BOTTOM ---
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mainSidebar = document.getElementById("mainSidebar");
    const sidebarOverlay = document.getElementById("sidebarOverlay");
    const statisticsSection = document.getElementById("statisticsSection");
    const ratingSection = document.getElementById("ratingSection");
    const mainContentWrapper = document.querySelector(".main-content-wrapper");
    const wikiFooter = document.querySelector(".wiki-footer");

    // Bật/tắt ngăn kéo Hamburger
    if(hamburgerBtn && mainSidebar && sidebarOverlay) {
        hamburgerBtn.addEventListener("click", () => {
            mainSidebar.classList.add("open");
            sidebarOverlay.classList.add("active");
        });
        sidebarOverlay.addEventListener("click", () => {
            mainSidebar.classList.remove("open");
            sidebarOverlay.classList.remove("active");
        });
    }

    // Logic di chuyển khối thống kê & Rating khi đổi kích thước màn hình
    function handleMobileLayout() {
        if (window.innerWidth <= 768) {
            // Nhét khối Thống kê và Rating vào ngay trên Footer
            if(statisticsSection && wikiFooter && statisticsSection.parentNode !== mainContentWrapper) {
                mainContentWrapper.insertBefore(statisticsSection, wikiFooter);
                statisticsSection.style.padding = "0 15px"; 
            }
            if(ratingSection && wikiFooter && ratingSection.parentNode !== mainContentWrapper) {
                mainContentWrapper.insertBefore(ratingSection, wikiFooter);
                ratingSection.style.padding = "0 15px";
            }
        } else {
            // Trả Thống kê và Rating về thanh menu bên trái
            if(statisticsSection && mainSidebar && statisticsSection.parentNode !== mainSidebar) {
                mainSidebar.appendChild(statisticsSection);
                statisticsSection.style.padding = "0";
            }
            if(ratingSection && mainSidebar && ratingSection.parentNode !== mainSidebar) {
                mainSidebar.appendChild(ratingSection);
                ratingSection.style.padding = "0";
            }
        }
    }
    window.addEventListener("resize", handleMobileLayout);
    handleMobileLayout();

    // --- LOGIC HỆ THỐNG RATING (5 SAO) ---
    const stars = document.querySelectorAll("#starRating i");
    const ratingMessage = document.getElementById("ratingMessage");
    const hasRated = localStorage.getItem("wiki_rated");

    if (hasRated) {
        const ratedValue = parseInt(hasRated);
        stars.forEach(s => {
            if (parseInt(s.getAttribute("data-value")) <= ratedValue) {
                s.classList.add("selected");
            }
        });
        ratingMessage.innerText = `Bạn đã đánh giá ${ratedValue} sao.`;
        ratingMessage.style.display = "block";
    } else {
        stars.forEach(star => {
            star.addEventListener("mouseover", function() {
                const val = parseInt(this.getAttribute("data-value"));
                stars.forEach(s => {
                    if (parseInt(s.getAttribute("data-value")) <= val) s.classList.add("hovered");
                    else s.classList.remove("hovered");
                });
            });
            
            star.addEventListener("mouseout", function() {
                stars.forEach(s => s.classList.remove("hovered"));
            });

            star.addEventListener("click", async function() {
                const val = parseInt(this.getAttribute("data-value"));
                
                stars.forEach(s => {
                    if (parseInt(s.getAttribute("data-value")) <= val) s.classList.add("selected");
                    else s.classList.remove("selected");
                });
                
                localStorage.setItem("wiki_rated", val);
                ratingMessage.innerText = "Đang lưu đánh giá...";
                ratingMessage.style.color = "var(--wiki-text-muted)";
                ratingMessage.style.display = "block";
                
                try {
                    await addDoc(collection(db, "ratings"), {
                        score: val,
                        createdAt: serverTimestamp(),
                        userAgent: navigator.userAgent
                    });
                    ratingMessage.innerText = `Cảm ơn bạn đã đánh giá ${val} sao!`;
                    ratingMessage.style.color = "var(--theme-green-text, #059669)";
                } catch (err) {
                    console.error("Lỗi gửi đánh giá: ", err);
                    ratingMessage.innerText = `Lỗi hệ thống. Vẫn ghi nhận ${val} sao ở thiết bị này.`;
                }

                // Vô hiệu hóa hover/click sau khi đã vote xong (bằng cách clone và thay thế node)
                const clone = document.getElementById("starRating").cloneNode(true);
                document.getElementById("starRating").replaceWith(clone);
            });
        });
    }

    // BIẾN QUẢN LÝ TRẠNG THÁI HIỆN TẠI CỦA TỪ ĐIỂN
    let currentModule = 'MRI'; 
    let currentData = mriData; 
    let currentTab = 'Sequence'; 
    let currentKeyword = '';
    let currentAlpha = 'ALL'; 
    let currentFontSize = 14; 

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let alphaHTML = `<button class="alpha-btn all-btn active" data-alpha="ALL">Tất cả</button>`;
    letters.forEach(letter => {
        alphaHTML += `<button class="alpha-btn" data-alpha="${letter}">${letter}</button>`;
    });
    alphabetFilter.innerHTML = alphaHTML;

    // 1. Sidebar Nav (Hoán đổi linh hoạt giữa MRI, CT, X-Quang)
    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            menuItems.forEach(i => i.classList.remove("active"));
            e.currentTarget.classList.add("active");
            
            // Tự động đóng Menu Hamburger nếu đang mở trên điện thoại
            if (window.innerWidth <= 768 && mainSidebar.classList.contains("open")) {
                mainSidebar.classList.remove("open");
                sidebarOverlay.classList.remove("active");
            }
            
            const moduleName = e.currentTarget.getAttribute("data-mod");
            currentModule = moduleName;

            if (moduleName === "MRI") {
                currentData = mriData;
                document.getElementById("firstHeading").innerText = "Từ Điển Cộng Hưởng Từ (MRI)";
                
                tabSequence.style.display = "inline-block"; 
                tabPhysics.style.display = "inline-block"; 
                tabProtocol.style.display = "inline-block";
                tabAngio.style.display = "none";
                tabPosition.style.display = "none";
                tabProtocol.innerText = "Protocol Chụp"; 
                
                if (currentTab === 'Angiography' || currentTab === 'Position') {
                    currentTab = 'Sequence';
                    tabBtns.forEach(b => b.classList.remove("active"));
                    tabSequence.classList.add("active");
                }
                
                mriHeaderTools.style.display = "block";
                mriList.style.display = "block";
                comingSoon.style.display = "none";
                updateDisplay();
                
            } else if (moduleName === "CT") {
                currentData = ctData;
                document.getElementById("firstHeading").innerText = "Từ Điển Cắt Lớp Vi Tính (CT)";
                
                tabSequence.style.display = "none"; 
                tabPhysics.style.display = "none"; 
                tabPosition.style.display = "none";
                tabProtocol.style.display = "inline-block";
                tabAngio.style.display = "inline-block";
                tabProtocol.innerText = "Protocol thường"; 
                
                if (currentTab === 'Sequence' || currentTab === 'Physics' || currentTab === 'Position') {
                    currentTab = 'Parameter';
                    tabBtns.forEach(b => b.classList.remove("active"));
                    document.querySelector('.tab-btn[data-tab="Parameter"]').classList.add("active");
                }
                
                mriHeaderTools.style.display = "block";
                mriList.style.display = "block";
                comingSoon.style.display = "none";
                updateDisplay();
                
            } else if (moduleName === "XRAY") {
                currentData = xrayData;
                document.getElementById("firstHeading").innerText = "Từ Điển X-Quang (X-Ray)";
                
                tabSequence.style.display = "none"; 
                tabPhysics.style.display = "none"; 
                tabProtocol.style.display = "none";
                tabAngio.style.display = "none";
                tabPosition.style.display = "inline-block"; 
                
                if (currentTab !== 'Parameter' && currentTab !== 'Position') {
                    currentTab = 'Position';
                    tabBtns.forEach(b => b.classList.remove("active"));
                    tabPosition.classList.add("active");
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
            else if (currentTab === 'Angiography') return item.type === 'Angiography'; 
            else if (currentTab === 'Position') return item.type === 'Position'; 
            else return item.type !== 'Sequence' && item.type !== 'Physics' && item.type !== 'Protocol' && item.type !== 'Angiography' && item.type !== 'Position'; 
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
        if (typeValue === "Protocol" || typeValue === "Angiography" || typeValue === "Position") {
            lblDesc.innerText = "1. Chỉ định bệnh lý: *";
            lblParams.innerText = typeValue === "Position" ? "2. Tư thế bệnh nhân / Chuẩn bị:" : "2. Xung cơ bản / Cài đặt:";
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
                currentTab = (targetItem.type === 'Sequence' || targetItem.type === 'Physics' || targetItem.type === 'Protocol' || targetItem.type === 'Angiography' || targetItem.type === 'Position') ? targetItem.type : 'Parameter';
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
        if (item.type === 'Protocol' || item.type === 'Angiography' || item.type === 'Position') {
            textToExport += `- Chỉ định: ${item.indications}\n- Cài đặt/Tư thế cơ bản: \n${item.basicSequences}\n- Nâng cao: \n${item.advancedSequences}\n- Lưu ý: ${item.notes}`;
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

    btnContributeNew.addEventListener("click", () => {
        document.getElementById("modalTitle").innerText = "Tạo bài viết / Thuật ngữ mới";
        formContribute.reset();
        document.getElementById("editId").value = "";
        toggleFormFields(editTypeSelect.value); 
        modal.style.display = "flex";
        // Tự động đóng menu Hamburger khi nhấn "Tạo bài mới" trên mobile
        if (window.innerWidth <= 768 && mainSidebar.classList.contains("open")) {
            mainSidebar.classList.remove("open");
            sidebarOverlay.classList.remove("active");
        }
    });

    const closeModal = () => { modal.style.display = "none"; };
    btnCloseModal.addEventListener("click", closeModal);
    btnCancelEdit.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => { if(e.target === modal) closeModal(); });

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

            if (type === "Protocol" || type === "Angiography" || type === "Position") {
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
