// Module xử lý DOM và hiển thị giao diện theo chuẩn Wikipedia
export function renderMriList(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; 

    if (data.length === 0) {
        container.innerHTML = "<div class='no-result'>Không có bài viết nào khớp với truy vấn của bạn. Bạn có thể tạo bài viết mới.</div>";
        return;
    }

    data.forEach(item => {
        const entry = document.createElement('div');
        entry.className = 'wiki-entry';

        let badgeText = '';
        let headerTheme = '';

        if (item.type === 'Sequence') {
            badgeText = 'Chuỗi xung';
            headerTheme = 'theme-yellow';
        } else if (item.type === 'Physics') {
            badgeText = 'Nguyên lý Vật lý';
            headerTheme = 'theme-green';
        } else if (item.type === 'Protocol') {
            badgeText = 'Hướng dẫn Protocol';
            headerTheme = 'theme-blue'; // Hoặc màu bạn thích, ở đây mượn class blue cho đẹp
        } else {
            badgeText = item.type === 'Artifact' ? 'Xảo ảnh' : (item.type === 'Hardware' ? 'Phần cứng' : 'Thông số cài đặt');
            headerTheme = 'theme-blue';
        }

        // TẠO NỘI DUNG (BODY) TÙY THEO LOẠI DỮ LIỆU
        let bodyHtml = '';
        
        if (item.type === 'Protocol') {
            // Render 4 trường chuyên biệt của Protocol
            bodyHtml = `
                <div class="wiki-content-row">
                    <strong>1. Chỉ định bệnh lý:</strong> ${item.indications}
                </div>
                <div class="wiki-content-row">
                    <strong>2. Xung cơ bản tối thiểu:</strong><br/> ${item.basicSequences ? item.basicSequences.replace(/\n/g, '<br/>') : ''}
                </div>
                <div class="wiki-content-row">
                    <strong>3. Xung nâng cao bổ sung:</strong><br/> ${item.advancedSequences ? item.advancedSequences.replace(/\n/g, '<br/>') : ''}
                </div>
                <div class="wiki-content-row">
                    <strong>4. Lưu ý quan trọng:</strong> ${item.notes}
                </div>
            `;
        } else {
            // Render 2 trường của Thuật ngữ truyền thống
            bodyHtml = `
                <div class="wiki-content-row">
                    <strong>Nguyên lý / Định nghĩa:</strong> ${item.description}
                </div>
                <div class="wiki-content-row">
                    <strong>Chi tiết / Ứng dụng:</strong> ${item.parameters}
                </div>
            `;
        }

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
                ${bodyHtml}
            </div>
        `;

        container.appendChild(entry);
    });
}
