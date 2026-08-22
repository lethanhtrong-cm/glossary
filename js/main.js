// Module chính đóng vai trò Controller
import { mriData } from './data.js';
import { filterMriData } from './search.js';
import { renderMriList } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    const containerId = "mriList";
    const searchInput = document.getElementById("searchInput");

    // Khởi tạo hiển thị toàn bộ dữ liệu ban đầu
    renderMriList(mriData, containerId);

    // Lắng nghe sự kiện người dùng gõ vào thanh tìm kiếm (Real-time search)
    searchInput.addEventListener("input", (event) => {
        const keyword = event.target.value;
        
        // Gọi module xử lý tìm kiếm
        const filteredData = filterMriData(mriData, keyword);
        
        // Cập nhật lại giao diện
        renderMriList(filteredData, containerId);
    });
});
