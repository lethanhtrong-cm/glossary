// Module xử lý logic tìm kiếm
export function filterMriData(dataList, keyword) {
    if (!keyword || keyword.trim() === "") {
        return dataList;
    }
    
    const lowerKeyword = keyword.toLowerCase().trim();
    
    return dataList.filter(item => {
        const matchEn = item.en.toLowerCase().includes(lowerKeyword);
        const matchVi = item.vi.toLowerCase().includes(lowerKeyword);
        const matchDesc = item.description.toLowerCase().includes(lowerKeyword);
        
        return matchEn || matchVi || matchDesc;
    });
}
