import { collection, getDocs, doc, updateDoc, query, where, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { db } from './config.js'; 

export async function loadPendingApprovals() {
    const pendingTableBody = document.getElementById("pendingTableBody");
    pendingTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center;">Đang tải dữ liệu...</td></tr>`;
    
    // Tải số liệu thống kê (Song song)
    loadAdminStats();

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

// HÀM TẢI THỐNG KÊ ADMIN
function loadAdminStats() {
    const pageId = "main_dictionary";
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    
    const dateKey = `day_${year}_${month}_${date}`;
    const monthKey = `month_${year}_${month}`;
    const yearKey = `year_${year}`;
    
    const startDate = new Date(now.getFullYear(), 0, 1);
    const days = Math.floor((now - startDate) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((now.getDay() + 1 + days) / 7);
    const weekKey = `week_${year}_W${String(weekNumber).padStart(2, '0')}`;

    getDoc(doc(db, "statistics", pageId)).then((docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            document.getElementById('admin-visitor-global').innerText = (data.totalVisits || 0).toLocaleString('vi-VN');
            document.getElementById('admin-visitor-daily').innerText = (data[dateKey] || 0).toLocaleString('vi-VN');
            document.getElementById('admin-visitor-weekly').innerText = (data[weekKey] || 0).toLocaleString('vi-VN');
            document.getElementById('admin-visitor-monthly').innerText = (data[monthKey] || 0).toLocaleString('vi-VN');
            document.getElementById('admin-visitor-yearly').innerText = (data[yearKey] || 0).toLocaleString('vi-VN');
        }
    }).catch(e => console.error("Lỗi tải thống kê Admin", e));
}

// SỰ KIỆN NÚT RESET THỐNG KÊ
document.addEventListener("DOMContentLoaded", () => {
    const btnResetStats = document.getElementById("btnResetStats");
    if(btnResetStats) {
        btnResetStats.addEventListener("click", async () => {
            if(!confirm("CẢNH BÁO: Hành động này sẽ đưa TOÀN BỘ thống kê truy cập (Tổng, ngày, tháng, năm...) về số 0. Bạn có chắc chắn không?")) return;
            try {
                // Ghi đè file thống kê bằng một JSON trống hoặc chứa các số 0
                await setDoc(doc(db, "statistics", "main_dictionary"), { totalVisits: 0 });
                alert("Đã reset thống kê thành công!");
                loadAdminStats(); // Tải lại số liệu
            } catch (error) {
                console.error(error);
                alert("Có lỗi xảy ra khi Reset thống kê.");
            }
        });
    }
});


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
