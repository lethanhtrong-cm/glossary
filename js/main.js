// Module chính đóng vai trò Controller
import { mriData } from './data.js';
import { filterMriData } from './search.js';
import { renderMriList } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    const containerId = "mriList";
    const searchInput = document.getElementById("searchInput");
    const tabBtns = document.querySelectorAll(".tab-btn");
    const alphabetFilter = document.getElementById("alphabetFilter");

    // Khởi tạo các nút Alphabet (A-Z) vào giao diện
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let alphaHTML = `<button class="alpha-btn all-btn active" data-alpha="ALL">Tất cả</button>`;
    letters.forEach(letter => {
        alphaHTML += `<button class="alpha-btn" data-alpha="${letter}">${letter}</button>`;
    });
    alphabetFilter.innerHTML = alphaHTML;

    // Biến lưu trạng thái hiện tại (Giữ nguyên logic cũ + thêm trạng thái Alphabet)
    let currentTab = 'Sequence'; // Mặc định mở tab Chuỗi xung
    let currentKeyword = '';
    let currentAlpha = 'ALL'; // Mặc định hiển thị tất cả chữ cái

    // Hàm cập nhật hiển thị tích hợp: Tìm kiếm -> Tab -> Alphabet
    function updateDisplay() {
        // Bước 1: Lọc dữ liệu theo từ khóa tìm kiếm (kế thừa module search.js)
        let filteredData = filterMriData(mriData, currentKeyword);
        
        // Bước 2: Lọc tiếp dữ liệu theo Tab đang được chọn
        filteredData = filteredData.filter(item => {
            if (currentTab === 'Sequence') {
                return item.type === 'Sequence';
            } else if (currentTab === 'Physics') {
                return item.type === 'Physics';
            } else {
                // Các nhóm còn lại đưa vào tab Thông số
                return item.type !== 'Sequence' && item.type !== 'Physics';
            }
        });

        // Bước 3: Lọc theo bảng chữ cái Alphabet
        if (currentAlpha !== 'ALL') {
            filteredData = filteredData.filter(item => {
                // Kiểm tra ký tự đầu tiên của tên tiếng Anh hoặc tiếng Việt
                const enStart = item.en.charAt(0).toUpperCase();
                const viStart = item.vi.charAt(0).toUpperCase();
                return enStart === currentAlpha || viStart === currentAlpha;
            });
        }
        
        // Bước 4: Đưa dữ liệu cuối cùng ra DOM
        renderMriList(filteredData, containerId);
    }

    // Khởi tạo hiển thị toàn bộ dữ liệu ban đầu theo cấu hình
    updateDisplay();

    // Lắng nghe sự kiện người dùng gõ vào thanh tìm kiếm (Real-time search)
    searchInput.addEventListener("input", (event) => {
        currentKeyword = event.target.value;
        updateDisplay();
    });

    // Lắng nghe sự kiện người dùng click chuyển Tab
    tabBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Xóa class active ở tất cả các tab
            tabBtns.forEach(b => b.classList.remove("active"));
            
            // Thêm class active cho tab vừa được click
            e.target.classList.add("active");
            
            // Cập nhật trạng thái Tab hiện tại và gọi lại hàm hiển thị
            currentTab = e.target.getAttribute("data-tab");
            updateDisplay();
        });
    });

    // Lắng nghe sự kiện người dùng click chọn chữ cái (Alphabet)
    const alphaBtns = document.querySelectorAll(".alpha-btn");
    alphaBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            // Xóa class active ở tất cả các nút alphabet
            alphaBtns.forEach(b => b.classList.remove("active"));
            
            // Thêm class active cho nút vừa click
            e.target.classList.add("active");
            
            // Cập nhật trạng thái chữ cái và gọi lại hàm hiển thị
            currentAlpha = e.target.getAttribute("data-alpha");
            updateDisplay();
        });
    });
});
