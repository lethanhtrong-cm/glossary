// Dữ liệu thuộc nhóm Protocol Chụp (MRI Protocols)
// Đã được phân nhóm giải phẫu, bổ sung thông số cài đặt và MSK Protocols
export const protocolData = [
    // ==========================================
    // NHÓM 1: THẦN KINH (NEURO)
    // ==========================================
    {
        id: 4001,
        en: "Routine Brain MRI",
        vi: "[🧠 THẦN KINH] Sọ não thường quy",
        type: "Protocol",
        indications: "Đau đầu, chóng mặt kéo dài; Động kinh, co giật; Theo dõi u não, nang sọ não; Viêm não, màng não; Bệnh lý thoái hóa chất trắng (MS, ADEM); Sàng lọc sa sút trí tuệ.",
        basicSequences: "- T1W Sagittal: (TR: 400-600, TE: 10-15, Slice: 5mm, FOV: 220) Đánh giá đường giữa, thể chai, hố sau.\n- T2W Axial: (TR: >4000, TE: 90-110, Slice: 5mm) Giải phẫu tổng quan, dịch não tủy.\n- T2 FLAIR Axial: (TR: 8000-9000, TE: 90-120, TI: 2500) Rất nhạy với tổn thương chất trắng, phù não.\n- DWI / ADC Axial: (b=0, 1000; Slice: 5mm) Phát hiện nhồi máu cấp, áp xe, u đặc.\n- T2* GRE / SWI Axial: (TR: 600-800, TE: 20-25, FA: 15-20) Phát hiện vi xuất huyết, vôi hóa, u máu.",
        advancedSequences: "- 3D TOF MRA: Sàng lọc phình/hẹp động mạch đa giác Willis.\n- 3D T1 MPRAGE (Isotropic 1mm): Dựng hình 3D đánh giá thể tích não, động kinh.\n- T1W Post-contrast (+Gd): Tiêm thuốc bắt buộc nếu nghi ngờ u não, di căn, viêm màng não.",
        notes: "Luôn đảm bảo bệnh nhân nằm yên, chèn gối cố định đầu. Dùng kỹ thuật chống rung (PROPELLER/BLADE) ở xung T2W/FLAIR nếu bệnh nhân kích thích, không hợp tác."
    },
    {
        id: 4002,
        en: "Acute Stroke MRI",
        vi: "[🧠 THẦN KINH] Đột quỵ não cấp",
        type: "Protocol",
        indications: "Yếu liệt nửa người, nói đớ, méo miệng đột ngột; Xác định nhồi máu não cấp/tối cấp; Đánh giá vùng tranh tối tranh sáng (Penumbra); Loại trừ xuất huyết não cấp.",
        basicSequences: "- DWI / ADC Axial: (b=0, 1000) QUÉT ĐẦU TIÊN. Xác định ngay lõi nhồi máu.\n- T2* GRE hoặc SWI Axial: (Slice: 5mm) Loại trừ xuất huyết não (chống chỉ định tiêu sợi huyết).\n- T2 FLAIR Axial: (TI: 2500) Tìm sự bất tương xứng (Mismatch) DWI/FLAIR để định tuổi nhồi máu.\n- 3D TOF MRA: (Slice: 0.6-0.8mm, TR: 20-25) Xác định vị trí huyết khối tắc mạch lớn (LVO).",
        advancedSequences: "- Perfusion DSC (Tưới máu não): (TR: 1500, Tiêm Gd tốc độ 4-5ml/s) Tính toán CBF, CBV, MTT, Tmax để cứu vùng Penumbra.\n- CE-MRA Cổ: Đánh giá hẹp động mạch cảnh trong.",
        notes: "Nguyên tắc 'Time is Brain'. Bộ xung cơ bản (DWI, GRE, FLAIR, TOF) phải hoàn thành dưới 8-10 phút. Báo ngay bác sĩ đọc kết quả khi thấy lõi nhồi máu trên DWI."
    },

    // ==========================================
    // NHÓM 2: CỘT SỐNG (SPINE)
    // ==========================================
    {
        id: 4003,
        en: "Cervical Spine MRI",
        vi: "[🦴 CỘT SỐNG] Cột sống cổ",
        type: "Protocol",
        indications: "Đau cổ vai gáy lan cánh tay; Tê bì, yếu cơ tay; Hội chứng chèn ép tủy; Thoát vị đĩa đệm cổ; Chấn thương cột sống; Viêm, lao, u tủy cổ.",
        basicSequences: "- T2W Sagittal: (TR: 3000-4000, TE: 100-120, Slice: 3mm, FOV: 240) Đánh giá tủy sống, hẹp ống sống.\n- T1W Sagittal: (TR: 400-600, TE: 10, Slice: 3mm) Đánh giá tủy xương, rễ thần kinh.\n- STIR Sagittal: (TR: >3500, TE: 60, TI: 150-160) Nhạy phát hiện phù tủy xương do chấn thương/viêm.\n- T2W Axial (MEDIC/MERGE 3D hoặc 2D TSE): (Slice: 3-4mm) Cắt vuông góc qua đĩa đệm tổn thương để xem chèn ép rễ.",
        advancedSequences: "- 3D T2 SPACE/VISTA: Dựng hình cây rễ thần kinh (Myelography).\n- T1W FatSat Post-contrast Sag/Ax: Bắt buộc nếu theo dõi u tủy (Ependymoma), lao cột sống.",
        notes: "Bệnh nhân rất dễ nuốt nước bọt gây nhiễu bóng ma. Đặt Saturation Band (Băng bão hòa) che phía trước cổ (vùng thanh quản) để xóa nhiễu nhịp thở và nuốt."
    },
    {
        id: 4004,
        en: "Lumbar Spine MRI",
        vi: "[🦴 CỘT SỐNG] Cột sống thắt lưng",
        type: "Protocol",
        indications: "Đau thắt lưng lan xuống mông/chân (Đau thần kinh tọa); Dấu hiệu chùm đuôi ngựa; Rối loạn cơ tròn; Thoát vị đĩa đệm; Trượt đốt sống; Viêm cột sống dính khớp.",
        basicSequences: "- T2W Sagittal: (TR: 3000-4000, TE: 100-120, Slice: 4mm, FOV: 300) Xác định thoái hóa đĩa đệm, chóp tủy.\n- T1W Sagittal: (TR: 400-600, TE: 10-15, Slice: 4mm) Đánh giá thoái hóa mỡ Modic, khối choán chỗ tủy xương.\n- STIR Sagittal: (TR: 4000, TI: 160) Tìm tổn thương rạn nứt nén ép (Compression fracture) do loãng xương.\n- T2W Axial: (Slice: 4mm, xếp block theo từng góc nghiêng đĩa đệm) Khảo sát hẹp lỗ liên hợp.",
        advancedSequences: "- T1W FatSat Post-contrast Sag/Ax: Rất quan trọng trong theo dõi SAU MỔ thoát vị để phân biệt mô sẹo xơ (bắt thuốc) và mảnh đĩa đệm tái phát (không bắt thuốc).",
        notes: "Kê gối dưới khoeo chân bệnh nhân để làm phẳng độ ưỡn sinh lý thắt lưng, giúp sát với cuộn dây Spine Coil hơn, tăng SNR."
    },

    // ==========================================
    // NHÓM 3: BỤNG - CHẬU (BODY)
    // ==========================================
    {
        id: 4005,
        en: "Dynamic Liver MRI",
        vi: "[🫀 BỤNG CHẬU] Gan mật động học",
        type: "Protocol",
        indications: "Tầm soát và phân loại u gan (HCC, Hemangioma, FNH, Adenoma); Đánh giá xơ gan, nhiễm sắt/mỡ; Theo dõi sau nút mạch (TACE) hoặc đốt sóng cao tần (RFA).",
        basicSequences: "- T2W SS-FSE / HASTE Ax & Cor: (TR: 800-1000, TE: 80, Nín thở) Quét nhanh định vị.\n- T1W In-phase & Out-of-phase (Dixon) Ax: (TR: 150, TE: 1.2 & 2.4 ở 3T) Phát hiện nhiễm mỡ.\n- DWI Ax (b=50, 400, 800): Phát hiện ung thư gan nhạy bén.\n- 3D T1W GRE FatSat (VIBE/LAVA) TRƯỚC tiêm: (TR: 4, TE: 1.5, Lát cắt 2-3mm isotropic).",
        advancedSequences: "- 3D T1W GRE FatSat ĐỘNG HỌC SAU TIÊM: Chụp liên tiếp các pha: Động mạch muộn (35s), Tĩnh mạch cửa (70s), Cân bằng (3 phút).\n- Hepatobiliary Phase (20 phút): Dùng thuốc đặc hiệu tế bào gan (Primovist) để tìm vi di căn.",
        notes: "Tất cả các chuỗi xung T1/T2 chính đều yêu cầu nín thở (15-20 giây). KTV cần huấn luyện bệnh nhân thở đều và nín thở giữ hơi bụng trước khi chụp."
    },
    {
        id: 4006,
        en: "Multiparametric Prostate MRI",
        vi: "[🫀 BỤNG CHẬU] Tiền liệt tuyến (mpMRI PI-RADS)",
        type: "Protocol",
        indications: "Tăng PSA huyết thanh; Tầm soát ung thư tiền liệt tuyến (PCa); Định vị trước sinh thiết; Phân giai đoạn ung thư tại chỗ; Theo dõi sau mổ/xạ trị.",
        basicSequences: "- T2W High Res Ax, Sag, Cor: (TR: 4000, TE: 100, Slice: 3mm, FOV: 160) Đánh giá chi tiết vùng chuyển tiếp (TZ) và vỏ bao.\n- DWI đa b-value (50, 400, 800) & b-siêu cao (b=1400-2000): (Slice: 3mm) Đánh giá vùng ngoại vi (PZ). Tính bản đồ ADC.\n- T1W Axial toàn chậu: (FOV: 300) Tìm hạch chậu và xuất huyết sau sinh thiết.",
        advancedSequences: "- DCE-MRI (Tưới máu động học): (Độ phân giải thời gian <10s/pha, tổng thời gian 3-4 phút). Đánh giá Wash-in khối u.",
        notes: "Bệnh nhân cần đi vệ sinh, thụt tháo làm sạch trực tràng và nhịn tiểu vừa phải (không căng) để giảm xảo ảnh nhu động ruột và co thắt bàng quang."
    },

    // ==========================================
    // NHÓM 4: CƠ XƯƠNG KHỚP (MSK)
    // ==========================================
    {
        id: 4007,
        en: "Shoulder MRI",
        vi: "[🦴 CƠ XƯƠNG KHỚP] Khớp vai",
        type: "Protocol",
        indications: "Hội chứng chóp xoay (Rotator cuff tear); Trật khớp vai tái diễn; Tổn thương sụn viền (SLAP, Bankart); Viêm bao hoạt dịch; Rách gân cơ nhị đầu; Đông cứng khớp vai.",
        basicSequences: "- Coronal Obl T2W / PDW FatSat: (TR: 3000, TE: 30-40, Slice: 3mm, FOV: 140) Cắt song song với gân cơ trên gai. Quan trọng nhất để xem rách gân.\n- Coronal Obl T1W: (TR: 500, TE: 10) Xem thoái hóa mỡ cơ chóp xoay.\n- Sagittal Obl T2W / PDW FatSat: (Cắt vuông góc với cơ trên gai) Xem tiết diện gân, cơ dưới vai, cơ tròn bé.\n- Axial T2W / PDW FatSat: Xem sụn viền trước/sau, gân cơ nhị đầu.",
        advancedSequences: "- MR Arthrography (Chụp có tiêm thuốc nội khớp): Tiêm hỗn hợp Gd loãng trực tiếp vào ổ khớp để làm căng bao hoạt dịch, chẩn đoán cực nhạy rách sụn viền và rách bán phần mặt khớp.",
        notes: "Cố định cánh tay bệnh nhân ở tư thế trung gian hoặc xoay ngoài nhẹ. Tránh xoay trong vì sẽ làm chùng và gấp khúc gân cơ trên gai, dễ chẩn đoán dương tính giả rách gân."
    },
    {
        id: 4008,
        en: "Elbow MRI",
        vi: "[🦴 CƠ XƯƠNG KHỚP] Khớp khuỷu",
        type: "Protocol",
        indications: "Viêm lồi cầu ngoài (Tennis elbow) / lồi cầu trong (Golfer elbow); Rách dây chằng bên trụ/bên quay (UCL/RCL); Chèn ép thần kinh trụ (Hội chứng ống cổ tay sau); Viêm sụn bóc tách (OCD).",
        basicSequences: "- Coronal T2W / PDW FatSat: (TR: 2500, TE: 30, Slice: 3mm, FOV: 120-140) Đánh giá 2 lồi cầu và dây chằng bên.\n- Coronal T1W: Xem cấu trúc tủy xương.\n- Axial T2W / PDW FatSat: (Slice: 3mm) Đánh giá thần kinh trụ ở rãnh ròng rọc, gân nhị đầu chám tận.\n- Sagittal T2W / PDW FatSat: Đánh giá mỏm khuỷu, mỏm vẹt, khớp cánh tay-trụ.",
        advancedSequences: "- FIESTA / DESS 3D: Đánh giá chi tiết bề mặt sụn khớp nếu nghi ngờ mảnh sụn vỡ bong vào ổ khớp.",
        notes: "Tư thế bệnh nhân là thách thức lớn. Có thể chụp tư thế 'Superman' (bệnh nhân nằm sấp, tay giơ cao qua đầu) để đặt khuỷu tay vào trung tâm từ trường (isocenter), giúp FatSat đồng nhất nhất."
    },
    {
        id: 4009,
        en: "Wrist MRI",
        vi: "[🦴 CƠ XƯƠNG KHỚP] Cổ tay",
        type: "Protocol",
        indications: "Hội chứng ống cổ tay (Carpal tunnel syndrome); Rách phức hợp sụn sợi tam giác (TFCC); Bệnh Kienböck (Hoại tử vô khuẩn xương thuyền/xương nguyệt); Viêm màng hoạt dịch De Quervain; Nang rễ thần kinh.",
        basicSequences: "- Coronal PDW FatSat: (TR: 2500, TE: 30, Slice: 2mm, FOV: 80-100) Cắt mỏng qua hàng xương cổ tay. Nhạy nhất cho TFCC và dây chằng thuyền-nguyệt.\n- Coronal T1W: (TR: 400, TE: 10, Slice: 2mm) Đánh giá tủy xương khối xương cổ tay.\n- Axial PDW FatSat: Đánh giá thần kinh giữa trong ống cổ tay, gân gấp/duỗi.\n- Sagittal PDW FatSat: Khảo sát trục của khớp cổ tay (lệch trục DISI/VISI).",
        advancedSequences: "- 3D T2* GRE (MEDIC/MERGE): Cắt siêu mỏng 0.5-1mm, dựng hình 3D đánh giá vi rách TFCC.\n- T1W Post-contrast (+Gd): Phát hiện viêm khớp dạng thấp (Rheumatoid arthritis) sớm.",
        notes: "Sử dụng cuộn dây chuyên dụng cổ tay (Dedicated wrist coil) hoặc Micro coil. Yêu cầu ma trận cực cao (320x320 hoặc 384x384) do các cấu trúc rất nhỏ."
    },
    {
        id: 4010,
        en: "Hand / Finger MRI",
        vi: "[🦴 CƠ XƯƠNG KHỚP] Bàn tay / Ngón tay",
        type: "Protocol",
        indications: "Đứt gân gấp / gân duỗi; Tổn thương ròng rọc (Pulley tear) ở người leo núi; U cuộn mạch (Glomus tumor) dưới móng; Nhiễm trùng sâu; Viêm khớp dạng thấp.",
        basicSequences: "- Coronal STIR / T2W FatSat: (TR: 3500, TE: 40, Slice: 2-2.5mm, FOV: 100-120) Bao quát bàn tay hoặc khu trú 1-2 ngón.\n- Coronal T1W: Đánh giá xương đốt bàn, đốt ngón.\n- Axial PDW FatSat: Cắt vuông góc ngón tay để đánh giá ròng rọc A2, A4 và gân gấp.\n- Sagittal PDW FatSat: Cắt dọc ngón tay tổn thương.",
        advancedSequences: "- T1W FatSat Post-contrast (+Gd) Axial/Coronal: Tiêu chuẩn vàng để phát hiện Glomus tumor (u cuộn mạch ngấm thuốc mạnh) dưới giường móng.",
        notes: "Nếu chỉ khảo sát 1 ngón, dùng bông/gạc băng tách ngón đó ra khỏi các ngón khác để giảm nhiễu (magic angle) và dễ định vị FOV nhỏ."
    },
    {
        id: 4011,
        en: "Knee MRI",
        vi: "[🦴 CƠ XƯƠNG KHỚP] Khớp gối",
        type: "Protocol",
        indications: "Chấn thương thể thao; Đứt dây chằng chéo trước/sau (ACL/PCL); Rách sụn chêm (Meniscus tear); Viêm xương sụn bóc tách (OCD); Trật xương bánh chè; Đau gối mạn tính.",
        basicSequences: "- Sagittal PDW FatSat: (TR: 2500-3000, TE: 30-40, Slice: 3mm, FOV: 150) Xung xương sống của MRI khớp gối. Quan sát rách sụn chêm, ACL, PCL.\n- Sagittal T1W: (TR: 500, TE: 10) Khảo sát tủy xương, rạn nứt sụn.\n- Coronal PDW FatSat: (Slice: 3mm) Đánh giá dây chằng bên (MCL/LCL), sụn chêm.\n- Axial PDW FatSat: Khảo sát khớp chè-đùi, sụn bánh chè, mạc giữ bánh chè.",
        advancedSequences: "- 3D DESS / 3D SPACE: Tái tạo sụn khớp đẳng hướng để đo đạc thể tích sụn và bề mặt.\n- T2 Mapping sụn khớp: Đánh giá thoái hóa sụn sớm bằng định lượng.",
        notes: "Kê đệm cuộn gối nghiêng 10-15 độ xoay ngoài để đưa dây chằng chéo trước (ACL) nằm song song tuyệt đối với mặt phẳng Sagittal, tránh hiệu ứng Partial Volume."
    },
    {
        id: 4012,
        en: "Ankle MRI",
        vi: "[🦴 CƠ XƯƠNG KHỚP] Cổ chân",
        type: "Protocol",
        indications: "Rách gân gót (Achilles tendon tear); Đứt dây chằng sên-mác trước (ATFL), gót-mác (CFL); Viêm gân cơ chày sau; Chấn thương vòm cổ chân; Viêm sụn xương sên.",
        basicSequences: "- Sagittal PDW FatSat: (TR: 2500, TE: 35, Slice: 3mm, FOV: 140-160) Đánh giá gân Achilles, cân gan chân.\n- Sagittal T1W: Khảo sát tủy xương sên, xương gót.\n- Axial PDW FatSat: Cắt ngang mắt cá, đánh giá các gân quanh mắt cá (gân mác, gân chày) và dây chằng ATFL/PTFL.\n- Coronal PDW FatSat: Cắt song song xương chày, khảo sát khe khớp sên-chày, dây chằng Delta.",
        advancedSequences: "- T1W FatSat Post-contrast (+Gd): Chỉ định trong các trường hợp u phần mềm, viêm bao hoạt dịch lan tỏa, nhiễm trùng gân gót.",
        notes: "Gân gót (Achilles) cong lên B0 góc 55 độ rất dễ bị 'Magic Angle Effect' (Sáng giả rách gân trên T1/PD). Cần đối chiếu với xung T2W TE dài để xác nhận."
    },
    {
        id: 4013,
        en: "Foot MRI",
        vi: "[🦴 CƠ XƯƠNG KHỚP] Bàn chân",
        type: "Protocol",
        indications: "U thần kinh Morton (Morton's neuroma); Bàn chân đái tháo đường (Diabetic foot ulcer); Gãy xương mỏi (Stress fracture) xương bàn ngón; Viêm cân gan chân; Nhiễm trùng cốt tủy.",
        basicSequences: "- Long-axis (Sagittal) STIR / PDW FatSat: (TR: 3500, TE: 40, Slice: 3mm, FOV: 160) Cắt dọc xương bàn ngón, đánh giá phù nề tủy xương/phần mềm.\n- Short-axis (Coronal cổ điển) PDW FatSat: (Cắt vuông góc với trục bàn chân) Rất nhạy phát hiện u Morton ở kẽ các ngón chân.\n- Short-axis T1W: Đánh giá giải phẫu, mô mỡ.\n- Axial (Mặt phẳng ngang bàn chân) PDW FatSat: Khảo sát hệ thống gân gấp/duỗi.",
        advancedSequences: "- T1W FatSat Post-contrast (+Gd): Bắt buộc trong biến chứng bàn chân tiểu đường để phân biệt viêm loét phần mềm đơn thuần và viêm cốt tủy xương (Osteomyelitis).",
        notes: "FOV có thể phải điều chỉnh lớn/nhỏ tùy theo kích thước bàn chân. Có thể dùng Vitamin E capsule đánh dấu vị trí đau chói nhất để bác sĩ dễ đọc."
    },
    {
        id: 4014,
        en: "Long Bone MRI (Femur, Tibia, Humerus)",
        vi: "[🦴 CƠ XƯƠNG KHỚP] Xương dài (Đùi, Chày, Cánh tay)",
        type: "Protocol",
        indications: "U xương ác tính (Osteosarcoma, Ewing sarcoma); Viêm cốt tủy (Osteomyelitis); Nhồi máu xương (Bone infarct); Gãy xương vi thể không thấy trên X-quang; Hội chứng chèn ép khoang.",
        basicSequences: "- Coronal STIR Toàn bộ xương: (TR: >4000, TE: 60, TI: 150-160, FOV: 400-480) Xung dò tìm (Scout) để định vị mọi ổ tổn thương nhảy cóc (Skip lesions) trong tủy xương.\n- Coronal T1W Toàn bộ xương: (Slice: 4-5mm) Khảo sát sự thay thế mỡ tủy xương bình thường bởi tế bào u.\n- Axial PDW FatSat: (FOV: Nhỏ, khu trú tại vị trí tổn thương) Đánh giá mức độ xâm lấn phần mềm xung quanh, sự chèn ép bó mạch thần kinh.\n- Axial T1W: (Khu trú) Đánh giá ranh giới xương vỏ - tủy.",
        advancedSequences: "- T1W FatSat Post-contrast (+Gd) Axial & Coronal: Xác định phần đặc của u, mức độ hoại tử u, theo dõi đáp ứng hóa trị liệu u xương.",
        notes: "Luôn phải chụp bao gồm ÍT NHẤT một khớp lân cận tổn thương (khớp trên hoặc dưới) để đánh giá xâm lấn khớp. Yêu cầu ghép cuộn dây (Coil combination) nếu chụp toàn bộ đùi/chày dài."
    }
];
