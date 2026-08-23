import { signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { auth } from './config.js';
import { loadPendingApprovals } from './dashboard.js';

export function initAuth() {
    const loginSection = document.getElementById("loginSection");
    const dashboardSection = document.getElementById("dashboardSection");
    const loginForm = document.getElementById("loginForm");
    const btnLogout = document.getElementById("btnLogout");
    const userLogInfo = document.getElementById("userLogInfo");
    const btnGoogleLogin = document.getElementById("btnGoogleLogin");

    // Khai báo email được cấp quyền Admin duy nhất
    const ALLOWED_ADMIN_EMAIL = "thanhtrong.yds@gmail.com";

    // Lắng nghe trạng thái đăng nhập
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            // Xác thực Phân quyền (Authorization)
            if (user.email !== ALLOWED_ADMIN_EMAIL) {
                await signOut(auth); // Ép đăng xuất ngay lập tức
                alert("Truy cập bị từ chối: Tài khoản Gmail của bạn không có quyền Quản trị hệ thống.");
                return;
            }

            // Nếu đúng email, cho phép vào trang Admin
            loginSection.style.display = "none";
            dashboardSection.style.display = "block";
            userLogInfo.innerText = `Đang đăng nhập với quyền: ${user.email}`;
            loadPendingApprovals();
        } else {
            loginSection.style.display = "block";
            dashboardSection.style.display = "none";
        }
    });

    // Submit Đăng nhập bằng Email/Password mặc định (Phương án dự phòng)
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

    // Submit Đăng nhập bằng Google
    btnGoogleLogin.addEventListener("click", async () => {
        const provider = new GoogleAuthProvider();
        try {
            // Mở cửa sổ popup để người dùng chọn tài khoản Google
            await signInWithPopup(auth, provider);
            // Lưu ý: Không cần viết logic duyệt ở đây, vì onAuthStateChanged ở trên sẽ tự động kích hoạt và check email.
        } catch (error) {
            console.error("Lỗi đăng nhập Google:", error);
            alert("Quá trình đăng nhập bằng Google bị lỗi hoặc bị hủy.");
        }
    });

    // Đăng xuất
    btnLogout.addEventListener("click", async () => {
        await signOut(auth);
    });
}
