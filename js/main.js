// Module chính đóng vai trò Controller
import { mriData } from './data.js';
import { filterMriData } from './search.js';
import { renderMriList } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    const containerId = "mriList";
    const searchInput = document.getElementById("searchInput");
    const tabBtns = document.querySelectorAll(".tab-btn");

    // Biến lưu trạng thái hiện tại
    let currentTab = 'Sequence'; // Mặc định mở tab Chuỗi xung
    let currentKeyword = '';

    // Hàm cập nhật hiển thị tích hợp cả Tìm kiếm và Tab
    function updateDisplay() {
        // Bước 1: Lọc dữ liệu theo từ khóa tìm kiếm (kế thừa module search.js)
        let filteredData = filterMriData(mriData, currentKeyword);
        
        // Bước 2: Lọc tiếp dữ liệu theo Tab đang được chọn
        filteredData = filteredData.filter(item => {
            if (currentTab === 'Sequence') {
                return item.type === 'Sequence';
            } else {
                // Các nhóm còn lại (Parameter, Artifact, Hardware...) đưa vào tab Thông số
                return item.type !== 'Sequence';
            }
        });
        
        // Bước 3: Đưa dữ liệu cuối cùng ra DOM
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
});
