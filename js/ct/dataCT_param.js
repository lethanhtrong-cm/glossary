// CƠ SỞ DỮ LIỆU CT - PHẦN THÔNG SỐ VÀ VẬT LÝ/AN TOÀN BỨC XẠ
export const ctParamData = [
    {
        id: 5001,
        en: "Tube Voltage (kVp)",
        vi: "Điện thế bóng X-Quang (kVp)",
        type: "Parameter",
        description: "kVp (Kilovolt Peak) quyết định động năng của chùm electron bắn vào bia Anode, từ đó quyết định năng lượng và độ đâm xuyên của chùm tia X. kVp càng cao, tia X càng cứng, độ đâm xuyên càng mạnh nhưng độ tương phản hình ảnh sẽ giảm.",
        parameters: "- Ứng dụng lâm sàng / Cài đặt:\n1. Người lớn thường quy: 100 - 120 kVp.\n2. Bệnh nhân béo phì: Tăng lên 120 - 140 kVp để đủ sức đâm xuyên.\n3. Chụp mạch máu (CTA) hoặc Trẻ em: Hạ xuống 70 - 80 kVp. Việc hạ kVp giúp tăng vọt độ tương phản của I-ốt (đậm độ sáng hơn) và giảm đáng kể liều bức xạ cho bệnh nhân.",
        citations: []
    },
    {
        id: 5002,
        en: "Tube Current-Time Product (mAs)",
        vi: "Dòng hằng số bóng (mAs)",
        type: "Parameter",
        description: "mAs quyết định 'số lượng' photon tia X được phát ra. Nó tỷ lệ thuận tuyến tính với liều bức xạ mà bệnh nhân nhận vào. mAs đủ cao giúp hình ảnh mịn màng (giảm nhiễu hạt - noise), nhưng mAs quá cao sẽ gây quá liều bức xạ không cần thiết.",
        parameters: "- Ứng dụng lâm sàng / Cài đặt:\n1. Tự động điều biến liều (Auto mA / CareDose / SmartmA): Luôn luôn BẬT. Máy sẽ tự động tăng mAs ở vùng dày (vai, chậu) và giảm mAs ở vùng mỏng (cổ, phổi) để tối ưu hóa liều.\n2. Ở các máy cũ không có Auto mA, KTV phải tự ước lượng mAs dựa trên cân nặng và vùng giải phẫu.",
        citations: []
    },
    {
        id: 5003,
        en: "Pitch",
        vi: "Độ xoắn ốc (Pitch)",
        type: "Parameter",
        description: "Trong CT xoắn ốc, Pitch là tỷ lệ giữa quãng đường di chuyển của bàn bệnh nhân trong một vòng quay của bóng so với tổng bề dày chùm tia X (Collimation).",
        parameters: "- Ứng dụng lâm sàng / Cài đặt:\n1. Pitch = 1: Bàn di chuyển bằng đúng bề rộng chùm tia (Không hở, không lấp).\n2. Pitch > 1 (VD: 1.2 - 1.5): Quét thưa, bàn chạy nhanh. Dùng cho chụp ngực nín thở nhanh, giảm liều bức xạ, nhưng có thể bị xảo ảnh dải băng (windmill artifact).\n3. Pitch < 1 (VD: 0.2 - 0.3): Quét chồng lấp (overlapping). Bàn chạy chậm. Dùng trong chụp CT mạch vành (ECG-gating) để lấy hình ảnh sắc nét, nhưng liều tia X rất cao.",
        citations: []
    },
    {
        id: 5004,
        en: "Iterative Reconstruction (IR)",
        vi: "Tái tạo lặp (IR)",
        type: "Parameter",
        description: "Thuật toán xử lý ảnh số học hiện đại thay thế cho thuật toán FBP (Filtered Back Projection) cũ. IR sử dụng các vòng lặp thống kê để lọc nhiễu (noise) lặp đi lặp lại nhiều lần trước khi xuất ra hình ảnh cuối cùng.",
        parameters: "- Ứng dụng lâm sàng / Cài đặt:\n1. Tác dụng lớn nhất: Cho phép KTV chủ động HẠ LIỀU TIA X (giảm mAs) xuống mức cực thấp nhưng ảnh vẫn không bị nhiễu hạt.\n2. Các hãng có tên gọi khác nhau: Siemens (SAFIRE/ADMIRE), GE (ASiR/Veo), Philips (iDose), Canon (AIDR 3D).",
        citations: []
    },
    {
        id: 5005,
        en: "Window Width / Window Level (WW/WL)",
        vi: "Cửa sổ hiển thị (WW/WL)",
        type: "Parameter",
        description: "Kỹ thuật hậu xử lý trên trạm làm việc. Vì mắt người chỉ phân biệt được khoảng 30-40 sắc độ xám, trong khi CT có tới 4000 đơn vị Hounsfield (HU), ta phải dùng 'Cửa sổ' để kẹp dải độ xám vào đúng mô cần xem.\n- WL (Level/Center): Độ sáng trung tâm (Nên đặt bằng đúng giá trị HU của mô cần xem).\n- WW (Width): Độ rộng dải xám (WW hẹp cho tương phản cao, WW rộng cho tương phản dịu).",
        parameters: "- Ứng dụng lâm sàng / Cài đặt:\n1. Sọ não: WW 80, WL 40.\n2. Xương: WW 2000-2500, WL 400-500.\n3. Nhu mô phổi: WW 1500, WL -600.\n4. Cửa sổ gan/bụng: WW 350-400, WL 40-50.",
        citations: []
    },
    {
        id: 5101,
        en: "ALARA Principle",
        vi: "[An Toàn] Nguyên tắc ALARA",
        type: "Parameter", // Đã đổi thành Parameter để gộp tab
        description: "ALARA (As Low As Reasonably Achievable) là nguyên tắc tối thượng trong an toàn bức xạ y tế. Nghĩa là: Liều bức xạ phải được giữ ở mức THẤP NHẤT có thể, nhưng vẫn phải đảm bảo mức độ hợp lý để HÌNH ẢNH ĐẠT CHẤT LƯỢNG CHẨN ĐOÁN.",
        parameters: "- Ứng dụng lâm sàng / Thực hành:\n1. Hạn chế chụp CT lại nếu không cần thiết.\n2. Luôn bọc áo chì che chắn cho các cơ quan nhạy cảm (tuyến giáp, vú, thủy tinh thể, tinh hoàn) nằm NGOÀI vùng quét.\n3. Cân nhắc kỹ việc chụp CT cho phụ nữ có thai và trẻ em. Ưu tiên Siêu âm hoặc MRI nếu có thể thay thế.",
        citations: []
    },
    {
        id: 5102,
        en: "Radiation Dose Metrics (CTDIvol & DLP)",
        vi: "[An Toàn] Chỉ số liều bức xạ CT",
        type: "Parameter", // Đã đổi thành Parameter
        description: "Hai chỉ số quan trọng nhất ghi nhận trên máy CT để đo lường bức xạ:\n- CTDIvol (Computed Tomography Dose Index - mGy): Phản ánh liều hấp thụ bức xạ trung bình bên trong một mặt phẳng cắt lát. Đại diện cho cường độ của chùm tia.\n- DLP (Dose Length Product - mGy.cm): Bằng CTDIvol nhân với chiều dài vùng quét. Phản ánh TỔNG NĂNG LƯỢNG bức xạ mà bệnh nhân phải chịu trong toàn bộ ca chụp.",
        parameters: "- Ứng dụng lâm sàng / Thực hành:\n1. Luôn đính kèm trang Patient Protocol/Dose Report vào hệ thống PACS để bác sĩ theo dõi liều tích lũy của bệnh nhân.\n2. KTV có thể giảm DLP bằng cách cắt gọt, thu hẹp chiều dài vùng quét (Z-axis) vừa đủ trọn vẹn cơ quan đích, không quét thừa.",
        citations: []
    },
    {
        id: 5103,
        en: "Contrast-Induced Nephropathy (CIN) Prevention",
        vi: "[An Toàn] Dự phòng bệnh lý thận do thuốc cản quang",
        type: "Parameter", // Đã đổi thành Parameter
        description: "Thuốc cản quang chứa I-ốt (Iodinated Contrast Media) bài tiết qua thận và có nguy cơ gây ngộ độc ống thận, co thắt mạch máu thận, dẫn đến suy thận cấp (CIN).",
        parameters: "- Ứng dụng lâm sàng / Thực hành:\n1. BẮT BUỘC kiểm tra chỉ số Creatinine máu và ước tính độ thanh thải eGFR trước khi tiêm. eGFR < 30 ml/min/1.73m2 là chống chỉ định tương đối nặng.\n2. Hydrat hóa (Truyền dịch / Uống nhiều nước) trước và sau khi tiêm 24h là phương pháp phòng ngừa hiệu quả nhất.\n3. Ưu tiên sử dụng thuốc cản quang loại áp lực thẩm thấu thấp (LOCM) hoặc đồng thẩm thấu (IOCM).",
        citations: []
    }
];
