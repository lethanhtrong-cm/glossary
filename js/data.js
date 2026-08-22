// Quản lý cơ sở dữ liệu thuật ngữ
export const mriData = [
    {
        id: 1,
        en: "Spin Echo (SE)",
        vi: "Chuỗi xung Spin Echo (Xung dội spin)",
        type: "Sequence",
        description: "Sử dụng một xung kích thích 90 độ, theo sau là xung tái hội tụ 180 độ để tạo ra tín hiệu dội (echo). Giúp triệt tiêu sự mất đồng pha do từ trường không đồng nhất (T2* effect), mang lại hình ảnh có độ phân giải giải phẫu cao nhất.",
        parameters: "T1W: TR ngắn (400-600ms), TE ngắn (10-20ms). T2W: TR dài (>2000ms), TE dài (>80ms)."
    },
    {
        id: 2,
        en: "Time of Repetition (TR)",
        vi: "Thời gian lặp lại",
        type: "Parameter",
        description: "Khoảng thời gian từ lúc phát xung kích thích RF ban đầu đến lúc phát xung kích thích tiếp theo cho cùng một lát cắt. Yếu tố này quyết định mức độ phục hồi dọc (T1 relaxation).",
        parameters: "TR càng ngắn càng tăng trọng số T1. Ảnh hưởng trực tiếp đến tổng thời gian chụp (Scan time)."
    },
    {
        id: 3,
        en: "Time to Echo (TE)",
        vi: "Thời gian thu tín hiệu (Thời gian Echo)",
        type: "Parameter",
        description: "Thời gian từ lúc phát xung RF kích thích (90 độ) đến đỉnh của tín hiệu dội thu được. Quyết định mức độ phân rã ngang (T2 decay).",
        parameters: "TE ngắn (10-25ms) tối ưu cho T1W/PDW. TE dài (80-120ms) tối ưu cho T2W."
    },
    {
        id: 4,
        en: "Diffusion Weighted Imaging (DWI)",
        vi: "Chuỗi xung khuếch tán",
        type: "Sequence",
        description: "Dựa trên chuyển động Brown của các phân tử nước trong mô. Đo lường sự hạn chế khuếch tán, cực kỳ nhạy trong phát hiện nhồi máu não cấp (đột quỵ) hoặc đánh giá mật độ tế bào khối u.",
        parameters: "Giá trị b (b-value): Thường dùng b=0 và b=1000 s/mm2 (hoặc cao hơn ở tiền liệt tuyến). Bản đồ ADC (Apparent Diffusion Coefficient) được hệ thống tính toán tự động."
    },
    {
        id: 5,
        en: "Inversion Time (TI)",
        vi: "Thời gian đảo ngược",
        type: "Parameter",
        description: "Khoảng thời gian từ xung đảo ngược 180 độ ban đầu đến xung kích thích 90 độ (thường áp dụng trong các chuỗi xung Inversion Recovery như FLAIR, STIR). Dùng để triệt tiêu tín hiệu của một mô nhất định.",
        parameters: "TI = 150-170ms (ở từ trường 1.5T) để xóa mỡ (STIR). TI ~ 2000-2500ms (ở 1.5T/3T) để xóa nước (FLAIR)."
    },
    {
        id: 6,
        en: "Gradient Echo (GRE)",
        vi: "Chuỗi xung Gradient Echo",
        type: "Sequence",
        description: "Sử dụng góc lật (Flip Angle) nhỏ hơn 90 độ và dùng từ trường chênh từ (Gradient) để tạo tín hiệu dội thay vì xung 180 độ. Tốc độ chụp nhanh nhưng nhạy với độ không đồng nhất từ trường (T2*).",
        parameters: "Rất nhạy trong việc phát hiện xuất huyết vi thể (Microbleeds) hoặc vôi hóa. Thường cài đặt góc lật (FA) từ 5-30 độ tùy mục đích T1 hay T2*."
    }
];
