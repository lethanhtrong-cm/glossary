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
    
    // Sidebar Elements
    const menuItems = document.querySelectorAll(".menu-item[data-mod]");
    const mriHeaderTools = document.getElementById("mriHeaderTools");
    const mriList = document.getElementById("mriList");
    const comingSoon = document.getElementById("comingSoon");

    // Modal Elements (Đóng góp)
    const modal = document.getElementById("contributeModal");
    const btnCloseModal = document.getElementById("modalClose");
    const btnCancelEdit = document.getElementById("btnCancelEdit");
    const formContribute = document.getElementById("contributeForm");
    const btnContributeNew = document.getElementById("btnContributeNew");

    // Render Alphabet A-Z
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let alphaHTML = `<button class="alpha-btn all-btn active" data-alpha="ALL">Tất cả</button>`;
    letters.forEach(letter => {
        alphaHTML += `<button class="alpha-btn" data-alpha="${letter}">${letter}</button>`;
    });
    alphabetFilter.innerHTML = alphaHTML;

    // State Variables
    let currentTab = 'Sequence'; 
    let currentKeyword = '';
    let currentAlpha = 'ALL'; 

    // --- LOGIC 1: ĐIỀU HƯỚNG SIDEBAR ---
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

    // --- LOGIC 2: LỌC DỮ LIỆU ---
    function updateDisplay() {
        let filteredData = filterMriData(mriData, currentKeyword);
        filteredData = filteredData.filter(item => {
            if (currentTab === 'Sequence') return item.type === 'Sequence';
            else if (currentTab === 'Physics') return item.type === 'Physics';
            else return item.type !== 'Sequence' && item.type !== 'Physics';
        });

        if (currentAlpha !== 'ALL') {
            filteredData = filteredData.filter(item => {
                const enStart = item.en.charAt(0).toUpperCase();
                const viStart = item.vi.charAt(0).toUpperCase();
                return enStart === currentAlpha || viStart === currentAlpha;
            });
        }
        renderMriList(filteredData, containerId);
    }

    updateDisplay(); // Khởi chạy lúc load

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

    // --- LOGIC 3: XỬ LÝ MODAL ĐÓNG GÓP WIKIPEDIA ---

    // Mở modal khi bấm "Tạo bài viết mới" (Sidebar)
    btnContributeNew.addEventListener("click", () => {
        document.getElementById("modalTitle").innerText = "Tạo bài viết / Thuật ngữ mới";
        formContribute.reset();
        document.getElementById("editId").value = "";
        modal.style.display = "flex";
    });

    // Mở modal khi bấm "[chỉnh sửa]" tại từng bài viết (Dùng Event Delegation)
    mriList.addEventListener("click", (e) => {
        if(e.target.classList.contains("wiki-edit-btn")) {
            const id = parseInt(e.target.getAttribute("data-id"));
            const itemToEdit = mriData.find(item => item.id === id);
            
            if(itemToEdit) {
                document.getElementById("modalTitle").innerText = `Đang sửa đổi "${itemToEdit.en}"`;
                document.getElementById("editId").value = itemToEdit.id;
                document.getElementById("editEn").value = itemToEdit.en;
                document.getElementById("editVi").value = itemToEdit.vi;
                document.getElementById("editType").value = itemToEdit.type === 'Artifact' || itemToEdit.type === 'Hardware' ? 'Parameter' : itemToEdit.type; 
                document.getElementById("editDesc").value = itemToEdit.description;
                document.getElementById("editParams").value = itemToEdit.parameters;
                
                modal.style.display = "flex";
            }
        }
    });

    // Đóng Modal
    const closeModal = () => { modal.style.display = "none"; };
    btnCloseModal.addEventListener("click", closeModal);
    btnCancelEdit.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => { if(e.target === modal) closeModal(); });

    // Xử lý Submit Form
    formContribute.addEventListener("submit", (e) => {
        e.preventDefault(); // Ngăn load lại trang
        
        // Mô phỏng luồng gửi dữ liệu (Ở đây không lưu thật vào mriData vì chưa có Database)
        alert("Cảm ơn bạn! Bản sửa đổi/thêm mới của bạn đã được ghi nhận và gửi cho Ban Quản Trị Điện Quang phê duyệt trước khi xuất bản.");
        
        closeModal();
        formContribute.reset();
    });
});
