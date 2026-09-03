// CƠ SỞ DỮ LIỆU X-QUANG - PHẦN THÔNG SỐ VÀ VẬT LÝ
export const xrayParamData = [
    {
        id: 8001,
        en: "Tube Voltage (kVp)",
        vi: "Điện thế bóng X-Quang (kVp)",
        type: "Parameter",
        description: "Quyết định động năng của chùm electron bắn vào Anode, từ đó quyết định chất lượng (độ đâm xuyên) của chùm tia X. kVp càng cao, độ đâm xuyên càng mạnh, độ tương phản ảnh càng giảm (thang xám dài).",
        parameters: "- Ứng dụng lâm sàng:\n1. Chụp ngực (Chest): kVp cao (100 - 120 kVp) để tia X đâm xuyên qua xương sườn, thấy rõ nhu mô phổi và trung thất.\n2. Chụp xương chi (Extremities): kVp thấp (50 - 65 kVp) để tối đa hóa độ tương phản trắng-đen, nhìn rõ bè xương và đường gãy.",
        citations: []
    },
    {
        id: 8002,
        en: "Tube Current-Time Product (mAs)",
        vi: "Dòng hằng số bóng (mAs)",
        type: "Parameter",
        description: "Quyết định số lượng photon tia X được phát ra (số lượng tia X). mAs là yếu tố chính quyết định độ đen của phim (Density) và trực tiếp quyết định liều bức xạ bệnh nhân nhận.",
        parameters: "- Ứng dụng lâm sàng:\n1. Tăng mAs sẽ làm phim đen hơn và giảm nhiễu lượng tử (Quantum mottle).\n2. Chụp các vùng dày (Bụng, Cột sống thắt lưng): Cần mAs cao (40 - 80 mAs).\n3. Chụp các vùng mỏng (Bàn tay, Bàn chân): Cần mAs thấp (2 - 5 mAs).",
        citations: []
    },
    {
        id: 8003,
        en: "Source-to-Image Distance (SID)",
        vi: "Khoảng cách Bóng - Phim (SID)",
        type: "Parameter",
        description: "Là khoảng cách từ tiêu điểm phát tia (Focal spot) đến bộ phận thu nhận ảnh (Detector/Cassette). SID ảnh hưởng đến độ phóng đại hình học và độ sắc nét của hình ảnh.",
        parameters: "- Ứng dụng lâm sàng:\n1. SID chuẩn thường quy: 100 cm (40 inches) cho hầu hết các kỹ thuật chụp xương, bụng, cột sống.\n2. SID chụp phổi (Chest PA): 180 cm (72 inches) để giảm thiểu bóng tim to giả tạo do hiện tượng phóng đại hình học.",
        citations: []
    },
    {
        id: 8004,
        en: "Object-to-Image Distance (OID)",
        vi: "Khoảng cách Vật - Phim (OID)",
        type: "Parameter",
        description: "Là khoảng cách từ bộ phận cơ thể cần chụp đến bề mặt phim/detector. Nguyên tắc cơ bản: OID càng lớn, hình ảnh càng bị phóng đại và càng bị mờ viền (Penumbra).",
        parameters: "- Ứng dụng lâm sàng:\n1. Luôn cố gắng đặt vùng cần chụp áp sát nhất có thể vào mâm detector (OID = 0).\n2. Ngoại lệ: Kỹ thuật Macroradiography (phóng đại) cố tình tăng OID để phóng to vi cấu trúc xương, kết hợp với tiêu điểm cực nhỏ để chống mờ.",
        citations: []
    },
    {
        id: 8005,
        en: "Anti-scatter Grid",
        vi: "Lưới chống mờ (Grid)",
        type: "Parameter",
        description: "Là một tấm lọc đặt giữa bệnh nhân và detector, cấu tạo bởi các lá chì xen kẽ vật liệu cản quang thấp. Mục đích là hấp thụ các tia X tán xạ (bị đổi hướng khi đi qua cơ thể), giúp tăng độ tương phản của phim.",
        parameters: "- Ứng dụng lâm sàng:\n1. BẮT BUỘC dùng khi chụp các vùng cơ thể dày > 10cm (Bụng, Sọ, Cột sống, Khung chậu).\n2. KHÔNG DÙNG khi chụp các chi nhỏ (bàn tay, cổ tay, bàn chân) để giảm liều tia, vì vùng mỏng ít sinh tia tán xạ.\n3. Lưu ý: Khi dùng Grid, bắt buộc phải tăng mAs lên (2-4 lần) để bù đắp lượng tia bị lưới hấp thụ.",
        citations: []
    },
    {
        id: 8006,
        en: "Focal Spot Size",
        vi: "Kích thước tiêu điểm phát tia",
        type: "Parameter",
        description: "Kích thước của vùng trên Anode nơi chùm electron va đập sinh ra tia X. Tiêu điểm càng nhỏ, hình ảnh càng sắc nét (giảm vùng mờ nửa tối Penumbra).",
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu điểm nhỏ (Small Focus - 0.3-0.6mm): Dùng chụp các chi tiết tinh tế (Xương bàn tay, ngón chân, vi hóa vú). Bị giới hạn mAs tối đa để tránh chảy Anode.\n2. Tiêu điểm lớn (Large Focus - 1.0-1.2mm): Dùng chụp các vùng lớn cần mAs cao (Bụng, Cột sống thắt lưng, Khung chậu, Bệnh nhân béo phì).",
        citations: []
    }
];
