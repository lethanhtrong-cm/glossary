// Module xử lý DOM và hiển thị giao diện theo chuẩn Wikipedia
import { mriData } from './data.js';

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const dictionaryMap = mriData
    .filter(item => item.en)
    .map(item => ({ id: item.id, term: item.en }))
    .sort((a, b) => b.term.length - a.term.length);

function formatWikiText(text, currentId) {
    if (!text) return "";
    let formattedText = text;

    dictionaryMap.forEach(linkObj => {
        if (linkObj.id === currentId) return; 
        const regex = new RegExp(`(?![^<]*>)\\b(${escapeRegExp(linkObj.term)})\\b`, 'gi');
        formattedText = formattedText.replace(regex, `<a href="#" class="wiki-internal-link" data-id="${linkObj.id}">$1</a>`);
    });

    formattedText = formattedText.replace(/\[(\d+)\]/g, `<sup class="reference" title="Xem tài liệu tham khảo số $1">[$1]</sup>`);
    return formattedText.replace(/\n/g, '<br/>');
}

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
            headerTheme = 'theme-blue'; 
        } else if (item.type === 'Angiography') {
            badgeText = 'CT Angiography';
            headerTheme = 'theme-blue'; 
        } else if (item.type === 'Position') {
            badgeText = 'Chiều thế chụp';
            headerTheme = 'theme-blue'; 
        } else if (item.type === 'LowDose') {
            badgeText = 'CT Liều Thấp';
            headerTheme = 'theme-green'; 
        } else if (item.type === 'Perfusion') {
            badgeText = 'CT Tưới Máu';
            headerTheme = 'theme-blue'; 
        } else {
            badgeText = item.type === 'Artifact' ? 'Xảo ảnh' : (item.type === 'Hardware' ? 'Phần cứng' : 'Thông số cài đặt');
            headerTheme = 'theme-blue';
        }

        let bodyHtml = '';
        
        // Nhóm quy trình 4 bước (Bao gồm cả Perfusion)
        if (item.type === 'Protocol' || item.type === 'Angiography' || item.type === 'Position' || item.type === 'LowDose' || item.type === 'Perfusion') {
            bodyHtml = `
                <div class="wiki-content-row">
                    <strong>1. Chỉ định bệnh lý:</strong> ${formatWikiText(item.indications, item.id)}
                </div>
                <div class="wiki-content-row">
                    <strong>${item.type === 'Position' ? '2. Tư thế bệnh nhân / Chuẩn bị:' : '2. Xung cơ bản tối thiểu / Cài đặt:'}</strong><br/> ${formatWikiText(item.basicSequences, item.id)}
                </div>
                <div class="wiki-content-row">
                    <strong>${item.type === 'Position' ? '3. Tia trung tâm / SID:' : '3. Xung nâng cao bổ sung / Phân tích:'}</strong><br/> ${formatWikiText(item.advancedSequences, item.id)}
                </div>
                <div class="wiki-content-row">
                    <strong>4. Lưu ý quan trọng / Tiêu chuẩn:</strong> ${formatWikiText(item.notes, item.id)}
                </div>
            `;
        } else {
            bodyHtml = `
                <div class="wiki-content-row">
                    <strong>Nguyên lý / Định nghĩa:</strong> ${formatWikiText(item.description, item.id)}
                </div>
                <div class="wiki-content-row">
                    <strong>Chi tiết / Ứng dụng:</strong> ${formatWikiText(item.parameters, item.id)}
                </div>
            `;
        }

        let citationsHtml = '';
        if (item.citations && item.citations.length > 0) {
            let listItems = item.citations.map((cite, index) => `<li>${cite}</li>`).join('');
            citationsHtml = `
                <div class="wiki-references-block">
                    <h4>Tài liệu tham khảo</h4>
                    <ol class="references-list">
                        ${listItems}
                    </ol>
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
                ${citationsHtml}
            </div>
        `;

        container.appendChild(entry);
    });
}
