// CƠ SỞ DỮ LIỆU X-QUANG - PHẦN CHIỀU THẾ CHỤP (POSITION/PROJECTION)
export const xrayPositionData = [
    // --- CÁC CHIỀU THẾ CƠ BẢN ĐÃ CÓ ---
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
    },

    // --- CÁC CHIỀU THẾ BỔ SUNG (CỘT SỐNG NGỰC & CÁC KHỚP) ---
    {
        id: 8207,
        en: "Thoracic Spine AP / Lateral",
        vi: "[🦴 CỘT SỐNG] Cột sống ngực Thẳng / Nghiêng",
        type: "Position",
        indications: "Đau lưng đoạn ngực, chấn thương xẹp đốt sống, vẹo cột sống (Scoliosis), di căn xương.",
        basicSequences: "1. Thẳng (AP): Bệnh nhân nằm ngửa, gập gối để áp sát lưng xuống bàn. Tia CR thẳng đứng, điểm vào giữa xương ức (ngang T7).\n2. Nghiêng (Lateral): Bệnh nhân nằm nghiêng, hai tay đưa cao vươn ra trước mặt để không lấp vào cột sống. Tia CR thẳng đứng, điểm vào nửa sau lồng ngực ngang T7.",
        advancedSequences: "- Khoảng cách (SID): 100 cm. Có dùng Grid.\n- Hô hấp (Đặc biệt): Ở tư thế nghiêng, yêu cầu bệnh nhân HÍT THỞ NÔNG LÝ TƯỞNG (Breathing technique) trong lúc phát tia (thời gian phát tia dài 2-3 giây) để làm mờ xương sườn và bóng phổi, giúp đốt sống ngực hiện ra sắc nét.",
        notes: "Tiêu chuẩn phim: Lấy đủ từ C7 đến L1. Ở phim nghiêng, các đốt sống ngực trên (T1-T3) thường bị hai vai che lấp hoàn toàn, nếu cần thiết phải chụp thêm tư thế Swimmer.",
        citations: []
    },
    {
        id: 8208,
        en: "Shoulder AP / Y-View",
        vi: "[🦴 KHỚP] Khớp vai Thẳng / Chữ Y",
        type: "Position",
        indications: "Trật khớp vai, gãy xương chỏm xương cánh tay, vôi hóa gân chóp xoay, viêm khớp.",
        basicSequences: "1. Thẳng (AP): Bệnh nhân đứng hoặc nằm. Áp lưng bên cần chụp sát phim. Xoay ngoài cánh tay (để thấy củ lớn) hoặc xoay trong (để thấy củ bé). Tia CR thẳng đứng, điểm vào mỏm quạ (Coracoid process).\n2. Y-View (Chữ Y bả vai): Chẩn đoán trật khớp vai. Bệnh nhân đứng xoay người 45-60 độ, mặt áp giá chụp (bên vai đau chạm phim). Tia CR vuông góc, bắn qua khớp vai tổn thương.",
        advancedSequences: "- Khoảng cách (SID): 100 cm. Lưới (Grid) có hoặc không tùy độ dày vai bệnh nhân.",
        notes: "Tiêu chuẩn phim Y-View: Thân xương bả vai, mỏm cùng vai và mỏm quạ tạo thành hình chữ 'Y'. Nếu chỏm xương cánh tay nằm dưới mỏm quạ -> Trật ra trước. Nếu nằm dưới mỏm cùng vai -> Trật ra sau.",
        citations: []
    },
    {
        id: 8209,
        en: "Pelvis AP",
        vi: "[🦴 KHỚP] Khung chậu Thẳng",
        type: "Position",
        indications: "Chấn thương vỡ khung chậu, gãy cổ xương đùi, thoái hóa khớp háng, trật khớp háng bẩm sinh.",
        basicSequences: "- Tư thế bệnh nhân: Nằm ngửa cân xứng. HAI MŨI CHÂN XOAY VÀO TRONG 15-20 độ. (Rất quan trọng: Động tác xoay mũi chân này giúp bộc lộ cổ xương đùi trải dài tối đa trên phim, không bị ngắn lại do góc nghiêng sinh lý).\n- Hô hấp: Nín thở khi chụp.",
        advancedSequences: "- Tia trung tâm (CR): Hướng thẳng đứng.\n- Điểm vào: Nằm trên đường giữa bụng, ở điểm giữa gai chậu trước trên (ASIS) và bờ trên khớp mu.\n- Khoảng cách (SID): 100 cm. Bắt buộc dùng Grid.",
        notes: "Tiêu chuẩn phim: Khung chậu phải đối xứng (2 lỗ bịt to bằng nhau, gai ngồi cân xứng). Thấy rõ hai khớp háng và 1/3 trên hai xương đùi. Cổ xương đùi không bị lấp bởi mấu chuyển lớn.",
        citations: []
    },
    {
        id: 8210,
        en: "Knee AP / Lateral",
        vi: "[🦴 KHỚP] Khớp gối Thẳng / Nghiêng",
        type: "Position",
        indications: "Chấn thương gãy xương, đứt dây chằng (gây bóc tách xương), thoái hóa khớp gối (Gai xương, hẹp khe khớp), tràn dịch khớp.",
        basicSequences: "1. Thẳng (AP): Bệnh nhân nằm ngửa, chân duỗi thẳng. Tia CR có thể phải bẻ góc 3-5 độ LÊN ĐẦU (nếu hông to) hoặc VUÔNG GÓC (nếu đùi gầy) để tia đi trúng song song với mâm chày. Điểm vào cách cực dưới xương bánh chè 1cm.\n2. Nghiêng (Lateral): Bệnh nhân nằm nghiêng về bên cần chụp. Gập gối 20-30 độ (Giúp các dây chằng chéo thư giãn, lộ rõ bánh chè). Tia CR bẻ góc LÊN ĐẦU 5-7 độ để làm chồng khít 2 lồi cầu đùi.",
        advancedSequences: "- Khoảng cách (SID): 100 cm. Thường KHÔNG dùng lưới (hoặc dùng lưới tùy máy DR).",
        notes: "Tiêu chuẩn phim nghiêng: Xương bánh chè nhìn nghiêng rõ nét. Khe khớp chè-đùi mở rộng. Lồi cầu trong và lồi cầu ngoài xương đùi chồng khít lên nhau hoàn toàn.",
        citations: []
    },
    {
        id: 8211,
        en: "Ankle AP / Mortise / Lateral",
        vi: "[🦴 KHỚP] Khớp cổ chân Thẳng / Gọng Kìm / Nghiêng",
        type: "Position",
        indications: "Lật sơ mi (trật mắt cá), gãy mắt cá trong/ngoài, vỡ xương sên, thoái hóa khớp.",
        basicSequences: "1. Thẳng (AP): Nằm ngửa, gập mu chân vuông góc. Mũi chân hướng thẳng lên trần nhà.\n2. Mortise view (Thẳng Gọng kìm): Nằm ngửa, XOAY TOÀN BỘ CẲNG CHÂN VÀ BÀN CHÂN VÀO TRONG 15-20 độ. Tư thế này làm song song trục 2 mắt cá, giúp khe khớp cổ chân mở rộng toàn bộ.\n3. Nghiêng (Lateral): Nằm nghiêng về phía chân đau, áp sát mắt cá ngoài xuống phim.",
        advancedSequences: "- Tia trung tâm (CR): Vuông góc mặt phim, điểm vào giữa đường nối 2 mắt cá chân.\n- Khoảng cách (SID): 100 cm. Không dùng Grid.",
        notes: "Tiêu chuẩn phim Mortise: Toàn bộ khe khớp chày-sên và mác-sên (hình chữ U đảo ngược / gọng kìm) phải trong suốt, không bị chồng lấp xương. Đây là tư thế quan trọng nhất để bắt bệnh đứt dây chằng chày-mác.",
        citations: []
    },
    {
        id: 8212,
        en: "Wrist PA / Lateral",
        vi: "[🦴 KHỚP] Khớp cổ tay Thẳng / Nghiêng",
        type: "Position",
        indications: "Ngã chống tay, gãy xương quay (Colles' fracture), gãy xương thuyền (Scaphoid), trật khớp bán nguyệt.",
        basicSequences: "1. Thẳng (PA): Bệnh nhân ngồi cạnh bàn. Úp sấp cẳng tay và bàn tay xuống mâm phim. Nắm nhẹ các ngón tay lại (giúp cổ tay sát phim hơn).\n2. Nghiêng (Lateral): Xoay bàn tay dựng đứng lên (mặt ngón út áp phim). Đảm bảo cẳng tay và bàn tay trên một đường thẳng, xương quay và xương trụ chồng khít.",
        advancedSequences: "- Tia trung tâm (CR): Vuông góc mặt phim.\n- Điểm vào: Giữa nếp lấp cổ tay (điểm giữa xương quay và xương trụ).\n- Khoảng cách (SID): 100 cm. Không dùng Grid.",
        notes: "Tiêu chuẩn phim nghiêng: Rất quan trọng để chẩn đoán trật khớp. Trục của xương quay, xương bán nguyệt (Lunate), xương cả (Capitate) và xương bàn ngón 3 phải nằm trên một đường thẳng.",
        citations: []
    }
];
