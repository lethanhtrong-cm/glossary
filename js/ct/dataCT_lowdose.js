// CƠ SỞ DỮ LIỆU CT - PHẦN CT LIỀU THẤP (LOW-DOSE CT)
export const ctLowDoseData = [
    {
        id: 5301,
        en: "Low-Dose CT for Lung Cancer Screening (LDCT)",
        vi: "[☢️ LIỀU THẤP] CT Ngực liều thấp tầm soát ung thư",
        type: "LowDose",
        indications: "Tầm soát ung thư phổi ở người có nguy cơ cao (độ tuổi 50-80, hút thuốc >= 20 bao-năm). Theo dõi các nốt mờ phổi (lung nodules) theo Fleischner Society.",
        basicSequences: "- Tư thế: Nằm ngửa, hai tay đưa lên cao. Hít vào sâu và nín thở.\n- Thông số chuẩn (Cho BMI bình thường): 100 - 120 kVp, 20 - 40 mAs.\n- Mức liều (Dose): Trung bình yêu cầu CTDIvol <= 3.0 mGy (với bệnh nhân tiêu chuẩn ~70kg). Liều hiệu dụng (Effective Dose) thường ở mức 1.0 - 1.5 mSv (Bình thường là ~7 mSv).",
        advancedSequences: "- Bệnh nhân gầy (BMI < 20): Giảm xuống 80-100 kVp, < 20 mAs.\n- Bệnh nhân béo phì (BMI > 30): Giữ 120 kVp, tăng mAs lên tối đa 60 mAs để giảm nhiễu hạt.\n- Tái tạo ảnh (Reconstruction): Bắt buộc sử dụng thuật toán tái tạo lặp (Iterative Reconstruction - IR) ở mức trung bình/cao (ví dụ: SAFIRE 3, ASiR 50%, AIDR 3D) để lọc nhiễu.",
        notes: "- Độ dày lát cắt: Thu nhận <= 1mm, tái tạo xem nhu mô 1-1.5mm, tái tạo xem MIP 3-5mm.\n- Tuyệt đối không tiêm thuốc cản quang.\n- Tránh chụp lặp lại nhiều lần nếu bệnh nhân lỡ nhúc nhích, trừ khi hình ảnh mất hoàn toàn giá trị chẩn đoán.",
        citations: ["ACR-STR Practice Parameter for the Performance and Reporting of Low-Dose CT Lung Cancer Screening", "Fleischner Society Guidelines"]
    },
    {
        id: 5302,
        en: "Low-Dose Non-Contrast CT for Renal Colic",
        vi: "[☢️ LIỀU THẤP] CT Bụng chậu liều thấp tìm sỏi niệu",
        type: "LowDose",
        indications: "Bệnh nhân có cơn đau quặn thận cấp tính nghi ngờ do sỏi hệ tiết niệu. Theo dõi kích thước sỏi sau tán sỏi. Rất hữu ích ở bệnh nhân trẻ tuổi hoặc thai phụ (chỉ dùng khi siêu âm và MRI không giải quyết được).",
        basicSequences: "- Trường quét (FOV): Từ vòm hoành đến khớp mu.\n- Thông số chuẩn: 100 kVp, 30-50 mAs (sử dụng biến điệu liều tự động AEC). \n- Mức liều: CTDIvol khoảng 2.0 - 3.0 mGy. Liều hiệu dụng khoảng 1.5 - 2.5 mSv (Giảm 70-80% liều so với chụp KUB CT thường quy).",
        advancedSequences: "- Tái tạo MPR: Coronal mỏng (2-3mm) rất quan trọng để dò đường đi của sỏi dọc theo niệu quản.\n- Cài đặt AEC: KTV có thể cố tình tăng mức độ chịu nhiễu (Noise Index cao hơn) vì sỏi cản quang (đậm độ canxi) rất sáng và dễ nhìn thấy ngay cả trên nền ảnh bị nhiễu hạt (noise).",
        notes: "Hạn chế lớn nhất của LDCT hệ niệu: Rất khó đánh giá các tổn thương mô mềm đi kèm (như viêm ruột thừa non, u đặc kích thước nhỏ) do độ phân giải tương phản (Contrast resolution) bị suy giảm nặng.",
        citations: []
    },
    {
        id: 5303,
        en: "Pediatric Low-Dose CT Protocols",
        vi: "[☢️ LIỀU THẤP] CT Nhi khoa liều thấp",
        type: "LowDose",
        indications: "Đánh giá chấn thương, dị tật bẩm sinh, viêm nhiễm ở trẻ em. NGUYÊN TẮC: Trẻ em nhạy cảm với bức xạ phân hạch gấp 3-5 lần người lớn, rủi ro tích lũy ung thư bức xạ rất cao.",
        basicSequences: "- Cài đặt nghiêm ngặt theo cân nặng (Weight-based protocol):\n+ Trẻ sơ sinh (<5kg): 70-80 kVp, 10-15 mAs.\n+ Trẻ 5-15kg: 80 kVp, 15-30 mAs.\n+ Trẻ 15-30kg: 80-100 kVp, 30-50 mAs.\n- Hạn chế vùng quét (Collimation): Quét cực kỳ khu trú, tuyệt đối không mở tia quét thừa ra ngoài vùng giải phẫu cần xem.",
        advancedSequences: "- Sử dụng Pitch cao (>1.2 hoặc Flash mode) để quét thần tốc, tránh hiện tượng rung lắc/khóc lóc do trẻ không hợp tác nín thở.\n- Tái tạo IR ở mức độ cao nhất (Level 4, Level 5) mà phần mềm máy hỗ trợ.",
        notes: "- LUÔN LUÔN che chắn (Shielding) tuyến giáp, vú, và tinh hoàn/buồng trứng bằng áo chì/kính chì khi các cơ quan này nằm ngoài vùng quét.\n- Tuân thủ tuyệt đối chiến dịch 'Image Gently' toàn cầu.",
        citations: ["Image Gently Alliance Guidelines"]
    }
];
