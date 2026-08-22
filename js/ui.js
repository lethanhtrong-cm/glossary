// Module xử lý DOM và hiển thị giao diện theo chuẩn Wikipedia CÓ ĐIỂM NHẤN MÀU
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

        // Phân loại nhãn và Theme màu sắc (Giống "Bài viết chọn lọc" & "Bạn có biết")
        let badgeText = '';
        let headerTheme = '';
        let iconHtml = '';

        if (item.type === 'Sequence') {
            badgeText = 'Chuỗi xung';
            headerTheme = 'theme-yellow';
            iconHtml = '<span class="wiki-icon-box yellow"><i class="fa-solid fa-star"></i></span>';
        } else if (item.type === 'Physics') {
            badgeText = 'Nguyên lý Vật lý';
            headerTheme = 'theme-green';
            iconHtml = '<span class="wiki-icon-box green"><i class="fa-solid fa-atom"></i></span>';
        } else {
            badgeText = item.type === 'Artifact' ? 'Xảo ảnh' : (item.type === 'Hardware' ? 'Phần cứng' : 'Thông số cài đặt');
            headerTheme = 'theme-blue';
            iconHtml = '<span class="wiki-icon-box blue"><i class="fa-solid fa-question"></i></span>';
        }

        // Cấu trúc layout Wiki Box nổi bật
        entry.innerHTML = `
            <div class="wiki-entry-header ${headerTheme}">
                <h2>
                    ${iconHtml}
                    <span class="en-title">${item.en}</span>
                    <span class="vi-title">${item.vi ? '- ' + item.vi : ''}</span>
                </h2>
                <span class="wiki-edit-btn" data-id="${item.id}">[chỉnh sửa]</span>
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
