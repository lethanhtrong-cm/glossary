// Module xử lý logic tìm kiếm an toàn
export function filterMriData(dataList, keyword) {
    if (!keyword || keyword.trim() === "") {
        return dataList;
    }
    
    const lowerKeyword = keyword.toLowerCase().trim();
    
    return dataList.filter(item => {
        // Sử dụng optional chaining (?.) để tránh lỗi null/undefined ở các trường không tồn tại
        const matchEn = item.en?.toLowerCase().includes(lowerKeyword) || false;
        const matchVi = item.vi?.toLowerCase().includes(lowerKeyword) || false;
        
        // Dành cho dữ liệu Thuật ngữ thường
        const matchDesc = item.description?.toLowerCase().includes(lowerKeyword) || false;
        const matchParam = item.parameters?.toLowerCase().includes(lowerKeyword) || false;
        
        // Dành cho dữ liệu Protocol chụp
        const matchInd = item.indications?.toLowerCase().includes(lowerKeyword) || false;
        const matchBasic = item.basicSequences?.toLowerCase().includes(lowerKeyword) || false;
        const matchAdv = item.advancedSequences?.toLowerCase().includes(lowerKeyword) || false;
        const matchNotes = item.notes?.toLowerCase().includes(lowerKeyword) || false;
        
        return matchEn || matchVi || matchDesc || matchParam || matchInd || matchBasic || matchAdv || matchNotes;
    });
}
