// CƠ SỞ DỮ LIỆU X-QUANG - PHẦN CHIỀU THẾ CHỤP (POSITION/PROJECTION)
export const xrayPositionData = [
    {
        id: 8201,
        en: "Chest PA (Posteroanterior)",
        vi: "[🫀 LỒNG NGỰC] Ngực thẳng PA",
        type: "Position",
        indications: "Tầm soát bệnh lý phổi, viêm phổi, tràn dịch/tràn khí màng phổi, lao, u phổi, đánh giá bóng tim.",
        basicSequences: "- Tư thế bệnh nhân: Đứng áp ngực vào giá chụp (Bucky). Cằm tỳ lên đỉnh giá. Hai tay chống hông, ép hai vai và khuỷu tay ra trước để tách xương bả vai ra khỏi trường phổi.\n- Chuẩn bị: Tháo áo lót có gọng kim loại, vòng cổ.\n- Hô hấp: Hít vào sâu và nín thở lúc phát tia.",
        advancedSequences: "- Tia trung tâm (Central Ray - CR): Hướng nằm ngang, vuông góc với phim.\n- Điểm vào: Ngang mức đốt sống ngực T7 (dưới lồi đốt sống cổ C7 khoảng 18-20 cm).\n- Khoảng cách (SID): Bắt buộc 180 cm (72 inches).",
        notes: "Tiêu chuẩn phim: Phải thấy rõ 10 cung sau xương sườn trên vòm hoành. Hai xương đòn tách hoàn toàn ra khỏi phế trường. Khớp ức đòn hai bên đối xứng qua gai sau đốt sống ngực.",
        citations: []
    },
    {
        id: 8202,
        en: "Chest Lateral",
        vi: "[🫀 LỒNG NGỰC] Ngực nghiêng",
        type: "Position",
        indications: "Đánh giá các tổn thương khuất sau bóng tim, sau vòm hoành hoặc trong trung thất. Khảo sát các rãnh liên thùy phổi.",
        basicSequences: "- Tư thế bệnh nhân: Đứng nghiêng, áp mạn sườn trái vào giá chụp (để tim gần phim nhất, giảm bóng tim to). Hai tay giơ cao ôm lấy đầu để xương cánh tay không lấp vào vùng đỉnh phổi.\n- Hô hấp: Hít vào sâu và nín thở.",
        advancedSequences: "- Tia trung tâm (CR): Hướng nằm ngang, vuông góc với phim.\n- Điểm vào: Đường nách giữa, ngang mức T7.\n- Khoảng cách (SID): 180 cm (72 inches).",
        notes: "Tiêu chuẩn phim: Các cung sau xương sườn bên phải và trái chồng lên nhau (không lẹch quá 1-2cm). Góc sườn hoành hai bên và góc tâm hoành hiển thị rõ.",
        citations: []
    },
    {
        id: 8203,
        en: "Abdomen AP Supine (KUB)",
        vi: "[🫀 BỤNG CHẬU] Bụng nằm ngửa (KUB)",
        type: "Position",
        indications: "Tìm sỏi cản quang hệ tiết niệu (Thận-Niệu quản-Bàng quang), theo dõi dị vật đường tiêu hóa, đánh giá phân/hơi trong ruột.",
        basicSequences: "- Tư thế bệnh nhân: Nằm ngửa ngay ngắn trên bàn chụp. Hai tay để lên ngực hoặc vươn qua đầu. Hai chân duỗi thẳng.\n- Chuẩn bị: Tháo thắt lưng, khuy quần kim loại.\n- Hô hấp: Thở ra hết sức và nín thở (để đẩy cơ hoành lên cao, không che lấp tạng bụng).",
        advancedSequences: "- Tia trung tâm (CR): Hướng thẳng đứng, vuông góc với mặt bàn.\n- Điểm vào: Ngay đường giữa bụng, ngang mức mào chậu (Iliac crest) hoặc cao hơn mào chậu 5cm nếu bệnh nhân cao.\n- Khoảng cách (SID): 100 cm. DÙNG LƯỚI CHỐNG MỜ (Grid).",
        notes: "Tiêu chuẩn phim: Phải lấy được từ vòm hoành (ở trên) đến hết khớp mu (Symphysis pubis - ở dưới). Thấy rõ bóng cơ đái chậu (Psoas muscle) hai bên.",
        citations: []
    },
    {
        id: 8204,
        en: "Abdomen AP Upright",
        vi: "[🫀 BỤNG CHẬU] Bụng đứng (Tìm liềm hơi/Mức nước hơi)",
        type: "Position",
        indications: "Cấp cứu bụng ngoại khoa: Tìm liềm hơi dưới hoành (thủng tạng rỗng), đánh giá các mức nước-hơi (tắc ruột).",
        basicSequences: "- Tư thế bệnh nhân: Đứng áp lưng vào giá chụp. Hai tay để hai bên hoặc ôm đầu.\n- Bệnh nhân cần đứng yên ít nhất 5 phút trước khi chụp để khí tự do (nếu có) bay lên tụ lại dưới cơ hoành.\n- Hô hấp: Thở ra hết sức và nín thở.",
        advancedSequences: "- Tia trung tâm (CR): Hướng nằm ngang.\n- Điểm vào: Đường giữa bụng, cao hơn mào chậu 5cm (khoảng ngang rốn) để đảm bảo lấy được cơ hoành.\n- Khoảng cách (SID): 100 cm. Có dùng Grid.",
        notes: "Tiêu chuẩn phim: QUAN TRỌNG NHẤT là phải lấy được 2 vòm hoành. Khác với KUB, bụng đứng có thể chấp nhận mất khớp mu nhưng tuyệt đối không được mất cơ hoành.",
        citations: []
    },
    {
        id: 8205,
        en: "Cervical Spine AP / Lateral",
        vi: "[🦴 CỘT SỐNG] Cột sống cổ Thẳng / Nghiêng",
        type: "Position",
        indications: "Chấn thương cổ, thoái hóa đốt sống cổ, thoát vị đĩa đệm, đau mỏi gáy.",
        basicSequences: "1. Thẳng (AP): Bệnh nhân nằm ngửa hoặc đứng. Hơi ngửa cằm lên để hàm dưới và xương chẩm tạo thành đường thẳng không che lấp đốt sống cổ C3. Tia trung tâm (CR) nghiêng LÊN đầu 15-20 độ, điểm vào ở sụn giáp (C4).\n2. Nghiêng (Lateral): Bệnh nhân đứng nghiêng vai áp vào phim. Hạ thấp hai vai tối đa (có thể cầm tạ nhẹ). Tia trung tâm nằm ngang, điểm vào C4.",
        advancedSequences: "- Khoảng cách (SID):\n+ Cổ thẳng: 100 cm.\n+ Cổ nghiêng: 180 cm (để giảm phóng đại do khoảng cách từ cổ đến phim lớn vì vướng vai).",
        notes: "Tiêu chuẩn phim nghiêng: Phải thấy được rõ ràng từ khe khớp C1/C2 cho đến hết bờ trên đốt sống ngực T1. Nếu vai che lấp C7-T1, phải chụp thêm tư thế bơi lội (Swimmer's view).",
        citations: []
    },
    {
        id: 8206,
        en: "Lumbar Spine AP / Lateral",
        vi: "[🦴 CỘT SỐNG] Cột sống thắt lưng Thẳng / Nghiêng",
        type: "Position",
        indications: "Đau thắt lưng, chấn thương, thoái hóa, trượt đốt sống (Spondylolisthesis), xẹp đốt sống do loãng xương.",
        basicSequences: "1. Thẳng (AP): Nằm ngửa, gập cong hai gối chống lên bàn để làm phẳng đường cong sinh lý thắt lưng, giúp các khe khớp mở rộng. Tia CR thẳng đứng vào ngang rốn (L3).\n2. Nghiêng (Lateral): Nằm nghiêng, co gối để giữ thăng bằng. Lót xốp dưới thắt lưng để trục cột sống song song với mặt bàn. Tia CR thẳng đứng vào L3.",
        advancedSequences: "- Khoảng cách (SID): 100 cm. BẮT BUỘC dùng lưới chống mờ (Grid).\n- Cài đặt kVp cao (75 - 85 kVp), mAs cao.",
        notes: "Tiêu chuẩn phim: Lấy được từ D12 đến hết khối xương cùng (Sacrum). Chụp nghiêng cần chỉnh để bờ sau các thân đốt sống không bị chồng lấp (chụp nghiêng khu trú L5-S1 tia CR góc xuống 5-8 độ nếu hông to).",
        citations: []
    }
];
