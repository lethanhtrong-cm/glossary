// Module xử lý DOM và hiển thị giao diện theo chuẩn Wikipedia (Đã bỏ icon)
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

        // Phân loại nhãn và Theme màu sắc (Giữ màu chữ, bỏ icon)
        let badgeText = '';
        let headerTheme = '';

        if (item.type === 'Sequence') {
            badgeText = 'Chuỗi xung';
            headerTheme = 'theme-yellow';
        } else if (item.type === 'Physics') {
            badgeText = 'Nguyên lý Vật lý';
            headerTheme = 'theme-green';
        } else {
            badgeText = item.type === 'Artifact' ? 'Xảo ảnh' : (item.type === 'Hardware' ? 'Phần cứng' : 'Thông số cài đặt');
            headerTheme = 'theme-blue';
        }

        // Cấu trúc layout Wiki Box nổi bật (Thêm nút Copy và Chia sẻ)
        entry.innerHTML = `
            <div class="wiki-entry-header ${headerTheme}">
                <h2>
                    <span class="en-title">${item.en}</span>
                    <span class="vi-title">${item.vi ? '- ' + item.vi : ''}</span>
                </h2>
                <div class="wiki-entry-actions">
                    <span class="wiki-action-btn copy-btn" data-id="${item.id}">[copy]</span>
                    <span class="wiki-action-btn share-btn" data-id="${item.id}">[chia sẻ]</span>
                    <span class="wiki-action-btn wiki-edit-btn" data-id="${item.id}">[chỉnh sửa]</span>
                </div>
            </div>
            <div class="wiki-entry-body">
                <span class="wiki-badge">${badgeText}</span>
                <div class="wiki-content-row">
                    <strong>Nguyên lý / Định nghĩa:</strong> ${item.description}
                </div>
                <div class="wiki-content-row">
                    <strong>Chi tiết / Ứng dụng:</strong> ${item.parameters}
                </div>
            </div>
        `;

        container.appendChild(entry);
    });
}
