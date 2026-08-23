import { collection, getDocs, doc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { db } from './config.js'; // Đường dẫn tương đối ES6 chuẩn

export async function loadPendingApprovals() {
    const pendingTableBody = document.getElementById("pendingTableBody");
    pendingTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center;">Đang tải dữ liệu...</td></tr>`;
    
    try {
        const q = query(collection(db, "pending_approvals"), where("status", "==", "pending"));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            pendingTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--wiki-text-muted);">Hiện không có bài viết nào đang chờ duyệt.</td></tr>`;
            return;
        }

        let html = "";
        querySnapshot.forEach((documentSnap) => {
            const data = documentSnap.data();
            const docId = documentSnap.id;
            const dateStr = data.createdAt ? new Date(data.createdAt.seconds * 1000).toLocaleString('vi-VN') : "Vừa xong";
            
            html += `
                <tr id="row-${docId}">
                    <td>${dateStr}</td>
                    <td><strong>${data.contributor || 'Ẩn danh'}</strong></td>
                    <td><span class="wiki-badge">${data.type}</span></td>
                    <td><strong>${data.en}</strong><br/><span style="color:var(--wiki-text-muted);">${data.vi || ''}</span></td>
                    <td><div style="max-height: 100px; overflow-y: auto;">${data.description || data.indications || ''}</div></td>
                    <td>${data.citations && data.citations.length > 0 ? data.citations[0] : 'Không có'}</td>
                    <td>
                        <button class="btn-approve" onclick="window.approveItem('${docId}')">Duyệt</button>
                        <button class="btn-reject" onclick="window.rejectItem('${docId}')" style="margin-top:4px;">Từ chối</button>
                    </td>
                </tr>
            `;
        });
        pendingTableBody.innerHTML = html;
    } catch (error) {
        console.error("Lỗi tải dữ liệu:", error);
        pendingTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: red;">Lỗi tải dữ liệu từ Firestore. Vui lòng kiểm tra quyền truy cập database.</td></tr>`;
    }
}

// Gắn hàm vào window để gọi từ chuỗi HTML nội tuyến (inline onclick)
window.approveItem = async function(docId) {
    if(!confirm("Bạn có chắc chắn muốn duyệt và xuất bản bài viết này?")) return;
    try {
        const docRef = doc(db, "pending_approvals", docId);
        await updateDoc(docRef, { status: "approved" });
        alert("Đã duyệt bài viết thành công!");
        loadPendingApprovals(); 
    } catch (error) {
        console.error("Lỗi duyệt bài:", error);
        alert("Không thể duyệt bài viết này.");
    }
};

window.rejectItem = async function(docId) {
    if(!confirm("Bạn có chắc chắn muốn từ chối và xóa bản đóng góp này?")) return;
    try {
        const docRef = doc(db, "pending_approvals", docId);
        await updateDoc(docRef, { status: "rejected" });
        alert("Đã từ chối bản đóng góp.");
        loadPendingApprovals(); 
    } catch (error) {
        console.error("Lỗi từ chối bài:", error);
        alert("Không thể thực hiện thao tác.");
    }
};
