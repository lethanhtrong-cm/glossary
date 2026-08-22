// Module xử lý DOM và hiển thị giao diện
export function renderMriList(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Xóa dữ liệu cũ trước khi render mới

    if (data.length === 0) {
        container.innerHTML = "<div class='no-result'>Không tìm thấy thuật ngữ nào phù hợp trong danh mục này. Vui lòng thử từ khóa khác!</div>";
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'mri-card';

        // Xử lý huy hiệu phân loại linh hoạt cho 3 nhóm Tab
        let badgeClass = '';
        let badgeText = '';

        if (item.type === 'Sequence') {
            badgeClass = 'badge-seq';
            badgeText = 'Chuỗi xung';
        } else if (item.type === 'Physics') {
            badgeClass = 'badge-phys';
            badgeText = 'Nguyên lý Vật lý';
        } else {
            badgeClass = 'badge-param';
            badgeText = 'Thông số cài đặt';
            
            // Đổi tên nhãn phụ cho chính xác
            if (item.type === 'Artifact') {
                badgeText = 'Xảo ảnh';
            } else if (item.type === 'Hardware') {
                badgeText = 'Phần cứng';
            }
        }

        card.innerHTML = `
            <h2>
                <span class="en-title">${item.en}</span> / 
                <span class="vi-title">${item.vi}</span>
            </h2>
            <span class="badge ${badgeClass}">${badgeText}</span>
            <div class="content-row">
                <strong>Nguyên lý / Định nghĩa:</strong> ${item.description}
            </div>
            <div class="content-row">
                <strong>Chi tiết / Ứng dụng:</strong> ${item.parameters}
            </div>
        `;

        container.appendChild(card);
    });
}
