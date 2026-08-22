// Module xử lý DOM và hiển thị giao diện theo chuẩn Wikipedia
export function renderMriList(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Xóa dữ liệu cũ

    if (data.length === 0) {
        container.innerHTML = "<div class='no-result'>Không có bài viết nào khớp với truy vấn của bạn. Bạn có thể tạo bài viết mới.</div>";
        return;
    }

    data.forEach(item => {
        const entry = document.createElement('div');
        entry.className = 'wiki-entry';

        // Map type sang tiếng Việt
        let badgeText = '';
        if (item.type === 'Sequence') badgeText = 'Chuỗi xung';
        else if (item.type === 'Physics') badgeText = 'Nguyên lý Vật lý';
        else if (item.type === 'Artifact') badgeText = 'Xảo ảnh';
        else if (item.type === 'Hardware') badgeText = 'Phần cứng';
        else badgeText = 'Thông số cài đặt';

        // Cấu trúc layout Wiki: Header chứa Title và nút [chỉnh sửa]
        entry.innerHTML = `
            <div class="wiki-entry-header">
                <h2>
                    <span class="en-title">${item.en}</span>
                    <span class="vi-title">${item.vi ? ' / ' + item.vi : ''}</span>
                </h2>
                <!-- Data-id gắn vào nút để JS biết đang sửa bài nào -->
                <span class="wiki-edit-btn" data-id="${item.id}">[chỉnh sửa]</span>
            </div>
            <span class="wiki-badge">${badgeText}</span>
            <div class="wiki-content-row">
                <strong>Nguyên lý / Định nghĩa:</strong> ${item.description}
            </div>
            <div class="wiki-content-row">
                <strong>Chi tiết / Ứng dụng:</strong> ${item.parameters}
            </div>
        `;

        container.appendChild(entry);
    });
}
