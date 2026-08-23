import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// ==========================================
// 1. CẤU HÌNH FIREBASE
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyDqdo_DJIWa5iqxiCgBq-0iGX7f9sr6soo",
    authDomain: "rt-examination.firebaseapp.com",
    databaseURL: "https://rt-examination-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rt-examination",
    storageBucket: "rt-examination.firebasestorage.app",
    messagingSenderId: "920482699854",
    appId: "1:920482699854:web:44f9b0d735bdc001c6c11f",
    measurementId: "G-8N7RTTREQM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Tài khoản duy nhất được phép truy cập Admin
const ALLOWED_ADMIN_EMAIL = "thanhtrong.yds@gmail.com";

// ==========================================
// 2. KHỞI TẠO LOGIC GIAO DIỆN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const loginSection = document.getElementById("loginSection");
    const dashboardSection = document.getElementById("dashboardSection");
    const loginForm = document.getElementById("loginForm");
    const btnLogout = document.getElementById("btnLogout");
    const userLogInfo = document.getElementById("userLogInfo");
    const btnGoogleLogin = document.getElementById("btnGoogleLogin");
    const pendingTableBody = document.getElementById("pendingTableBody");

    // --- A. LẮNG NGHE TRẠNG THÁI ĐĂNG NHẬP ---
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // Xác thực phân quyền
            if (user.email !== ALLOWED_ADMIN_EMAIL) {
                await signOut(auth);
                alert("Truy cập bị từ chối: Tài khoản Gmail của bạn không có quyền Quản trị hệ thống.");
                return;
            }
            // Cho phép vào Dashboard
            loginSection.style.display = "none";
            dashboardSection.style.display = "block";
            userLogInfo.innerText = `Đang đăng nhập với quyền: ${user.email}`;
            loadPendingApprovals();
        } else {
            // Hiển thị form đăng nhập
            loginSection.style.display = "block";
            dashboardSection.style.display = "none";
        }
    });

    // --- B. ĐĂNG NHẬP BẰNG EMAIL MẶC ĐỊNH ---
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("adminEmail").value.trim();
        const password = document.getElementById("adminPassword").value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Lỗi đăng nhập:", error);
            alert("Đăng nhập thất bại! Vui lòng kiểm tra lại Email hoặc Mật khẩu.");
        }
    });

    // --- C. ĐĂNG NHẬP BẰNG GMAIL ---
    btnGoogleLogin.addEventListener("click", async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Lỗi đăng nhập Google:", error);
            alert("Quá trình đăng nhập bằng Google bị lỗi hoặc bị hủy.");
        }
    });

    // --- D. ĐĂNG XUẤT ---
    btnLogout.addEventListener("click", async () => {
        await signOut(auth);
    });

    // ==========================================
    // 3. LOGIC DASHBOARD (TẢI & DUYỆT BÀI)
    // ==========================================
    async function loadPendingApprovals() {
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
                            <button class="btn-approve" data-id="${docId}">Duyệt</button>
                            <button class="btn-reject" data-id="${docId}" style="margin-top:4px;">Từ chối</button>
                        </td>
                    </tr>
                `;
            });
            pendingTableBody.innerHTML = html;

            // Gắn sự kiện cho các nút Duyệt / Từ chối
            document.querySelectorAll('.btn-approve').forEach(btn => {
                btn.addEventListener('click', (e) => approveItem(e.target.getAttribute('data-id')));
            });
            document.querySelectorAll('.btn-reject').forEach(btn => {
                btn.addEventListener('click', (e) => rejectItem(e.target.getAttribute('data-id')));
            });

        } catch (error) {
            console.error("Lỗi tải dữ liệu:", error);
            pendingTableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: red;">Lỗi tải dữ liệu từ Firestore. Vui lòng kiểm tra quyền truy cập database.</td></tr>`;
        }
    }

    async function approveItem(docId) {
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
    }

    async function rejectItem(docId) {
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
    }
});
