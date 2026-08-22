// Module xử lý DOM và hiển thị giao diện
export function renderMriList(data, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Xóa dữ liệu cũ trước khi render mới

    if (data.length === 0) {
        container.innerHTML = "<div class='no-result'>Không tìm thấy thuật ngữ hay thông số nào phù hợp. Vui lòng thử từ khóa khác!</div>";
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'mri-card';

        // Xử lý huy hiệu phân loại
        const isSeq = item.type === 'Sequence';
        const badgeClass = isSeq ? 'badge-seq' : 'badge-param';
        const badgeText = isSeq ? 'Chuỗi xung' : 'Thông số cài đặt';

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
                <strong>Chi tiết cài đặt:</strong> ${item.parameters}
            </div>
        `;

        container.appendChild(card);
    });
}
