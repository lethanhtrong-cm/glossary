import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { auth } from './config.js';
import { loadPendingApprovals } from './dashboard.js';

export function initAuth() {
    const loginSection = document.getElementById("loginSection");
    const dashboardSection = document.getElementById("dashboardSection");
    const loginForm = document.getElementById("loginForm");
    const btnLogout = document.getElementById("btnLogout");
    const userLogInfo = document.getElementById("userLogInfo");

    // Lắng nghe trạng thái đăng nhập
    onAuthStateChanged(auth, (user) => {
        if (user) {
            loginSection.style.display = "none";
            dashboardSection.style.display = "block";
            userLogInfo.innerText = `Đang đăng nhập với quyền: ${user.email}`;
            loadPendingApprovals();
        } else {
            loginSection.style.display = "block";
            dashboardSection.style.display = "none";
        }
    });

    // Submit Đăng nhập
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

    // Đăng xuất
    btnLogout.addEventListener("click", async () => {
        await signOut(auth);
    });
}
