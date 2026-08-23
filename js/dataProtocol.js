// Dữ liệu thuộc nhóm Protocol Chụp (MRI Protocols)
export const protocolData = [
    {
        id: 4001,
        en: "Routine Brain MRI",
        vi: "Protocol Sọ não thường quy",
        type: "Protocol",
        indications: "Đau đầu, chóng mặt kéo dài; Sàng lọc u não, viêm não; Động kinh mới khởi phát; Theo dõi sau chấn thương sọ não.",
        basicSequences: "- T1W Sagittal (Đánh giá đường giữa, thể chai, tuyến yên)\n- T2W Axial (Đánh giá giải phẫu tổng quan, dịch não tủy)\n- T2 FLAIR Axial hoặc Coronal (Đánh giá chất trắng, tổn thương sát dịch não tủy)\n- DWI / ADC Axial (Phát hiện nhồi máu cấp, áp xe, u có mật độ tế bào cao)\n- T2* GRE hoặc SWI Axial (Phát hiện vi xuất huyết, canxi hóa)",
        advancedSequences: "- 3D TOF MRA: Sàng lọc phình mạch hoặc hẹp hẹp động mạch đa giác Willis.\n- 3D T1 MPRAGE: Đánh giá thể tích não, động kinh, teo hồi hải mã.\n- T1W Post-contrast (Tiêm thuốc Gadolinium): Bắt buộc nếu nghi ngờ u não, viêm não-màng não, di căn.",
        notes: "Luôn đảm bảo bệnh nhân nằm yên tuyệt đối. Sử dụng các kỹ thuật chống rung (PROPELLER/BLADE) nếu bệnh nhân kích thích hoặc trẻ em."
    },
    {
        id: 4002,
        en: "Acute Stroke MRI",
        vi: "Protocol Đột quỵ não cấp",
        type: "Protocol",
        indications: "Chẩn đoán xác định nhồi máu não cấp/tối cấp, đánh giá vùng tranh tối tranh sáng (Penumbra), loại trừ xuất huyết não.",
        basicSequences: "- DWI / ADC Axial (Quan trọng nhất - Quét đầu tiên để xác định nhồi máu cấp)\n- T2* GRE hoặc SWI Axial (Loại trừ xuất huyết não chảy máu cấp)\n- T2 FLAIR Axial (Xác định thời điểm đột quỵ - Mismatch DWI/FLAIR)\n- 3D TOF MRA sọ não (Đánh giá vị trí tắc nghẽn động mạch lớn)",
        advancedSequences: "- Perfusion DSC (Tưới máu não): Đánh giá CBF, CBV, MTT, Tmax để xác định vùng tranh tối tranh sáng có khả năng cứu vãn.\n- CEMRA cổ: Đánh giá hẹp động mạch cảnh.",
        notes: "Thời gian là não (Time is Brain). Cần thực hiện bộ xung cơ bản nhanh nhất có thể (dưới 10 phút) để ra quyết định tiêu huyết khối hoặc can thiệp lấy huyết khối."
    },
    {
        id: 4003,
        en: "Cervical Spine MRI",
        vi: "Protocol Cột sống cổ",
        type: "Protocol",
        indications: "Đau cổ vai gáy lan xuống tay; Tê/yếu tay; Nghi ngờ thoát vị đĩa đệm, hẹp ống sống, u tủy, viêm tủy, chấn thương.",
        basicSequences: "- T2W Sagittal (Đánh giá tổng quan tủy sống, đĩa đệm, ống sống)\n- T1W Sagittal (Đánh giá tủy xương, rễ thần kinh)\n- STIR Sagittal (Phát hiện phù tủy xương do chấn thương/viêm/u)\n- T2W Axial (Cắt ngang qua các khe khớp đĩa đệm nghi ngờ thoát vị/hẹp lỗ liên hợp) hoặc T2W Axial 3D (MEDIC/MERGE)",
        advancedSequences: "- 3D T2 SPACE/VISTA: Dựng hình cây rễ thần kinh.\n- T1W FatSat Sagittal/Axial Post-contrast: Nếu nghi ngờ u tủy, u bao dây thần kinh, viêm đĩa đệm đốt sống.",
        notes: "Sử dụng cuộn dây (Coil) chuyên dụng cho cổ-ngực. Đặt Saturation Band phía trước cổ để xóa xảo ảnh nuốt/hô hấp và nhịp đập động mạch cảnh."
    },
    {
        id: 4004,
        en: "Lumbar Spine MRI",
        vi: "Protocol Cột sống thắt lưng",
        type: "Protocol",
        indications: "Đau thắt lưng lan xuống chân (đau thần kinh tọa); Dấu hiệu chùm đuôi ngựa; Chấn thương, theo dõi sau mổ thoát vị đĩa đệm.",
        basicSequences: "- T2W Sagittal (Xác định mức độ thoái hóa đĩa đệm, hẹp ống sống)\n- T1W Sagittal (Tủy xương, thoái hóa mỡ Modic)\n- STIR Sagittal (Đánh giá phù tủy xương, gãy lún xẹp đốt sống do loãng xương/di căn)\n- T2W Axial (Cắt góc khu trú theo góc nghiêng của 3-4 đĩa đệm tổn thương)",
        advancedSequences: "- T1W FatSat Post-contrast: Rất quan trọng trong theo dõi SAU MỔ để phân biệt mô sẹo xơ (bắt thuốc) và mảnh đĩa đệm tái phát (không bắt thuốc).",
        notes: "Đảm bảo bệnh nhân kê gối dưới khoeo chân để làm phẳng bớt độ ưỡn sinh lý của cột sống thắt lưng, giúp sát với cuộn dây bề mặt hơn."
    },
    {
        id: 4005,
        en: "Multiparametric Prostate MRI (mpMRI)",
        vi: "Protocol Tiền liệt tuyến (PI-RADS v2.1)",
        type: "Protocol",
        indications: "Tăng PSA huyết thanh; Tầm soát ung thư tiền liệt tuyến (PCa); Định vị sinh thiết; Đánh giá giai đoạn ung thư.",
        basicSequences: "- T2W High Resolution Axial, Sagittal, Coronal (Trọng tâm để đánh giá vùng chuyển tiếp - TZ)\n- DWI đa b-value (VD: 50, 400, 800) và b-value siêu cao (b ≥ 1400) + Bản đồ ADC (Trọng tâm đánh giá vùng ngoại vi - PZ)\n- T1W Axial toàn chậu (Phát hiện hạch di căn hoặc chảy máu sau sinh thiết)",
        advancedSequences: "- Dynamic Contrast Enhancement (DCE) Axial: Tiêm thuốc động học nhanh để xác định vùng Wash-in mạnh, hỗ trợ phân loại PI-RADS 3 lên 4 ở vùng ngoại vi.",
        notes: "Bắt buộc chụp trước khi sinh thiết hoặc sau sinh thiết ít nhất 6-8 tuần để tránh xảo ảnh chảy máu. Nên thụt tháo trực tràng nhẹ và làm xẹp bàng quang trước chụp."
    },
    {
        id: 4006,
        en: "Dynamic Liver MRI",
        vi: "Protocol Gan mật động học",
        type: "Protocol",
        indications: "Khối u gan phát hiện trên siêu âm/CT; Phân biệt HCC (Ung thư biểu mô tế bào gan) với u máu, FNH; Đánh giá xơ gan, nhiễm sắt.",
        basicSequences: "- T2W SS-FSE / HASTE Axial và Coronal (Có và không xóa mỡ)\n- T1W In-phase và Out-of-phase (Kỹ thuật Dixon) Axial (Phát hiện nhiễm mỡ nội bào)\n- DWI đa b-value (VD: 50, 400, 800) Axial\n- 3D T1W GRE FatSat (VIBE/LAVA/eTHRIVE) Axial TRƯỚC tiêm",
        advancedSequences: "- 3D T1W GRE FatSat ĐỘNG HỌC SAU TIÊM: Chụp các pha Động mạch trễ (Late Arterial 35s), Tĩnh mạch cửa (Portal Venous 70s), Cân bằng (Equilibrium 3 phút).\n- Hepatobiliary Phase (Pha gan mật 20 phút): Nếu sử dụng thuốc đặc hiệu tế bào gan (Primovist/Gadoxetate).",
        notes: "Cực kỳ phụ thuộc vào khả năng nín thở của bệnh nhân. Cần hướng dẫn bệnh nhân tập nín thở trước chụp. Nếu bệnh nhân không nín thở được, cân nhắc dùng Radial K-space (StarVIBE/GRASP)."
    },
    {
        id: 4007,
        en: "Knee MRI",
        vi: "Protocol Khớp gối",
        type: "Protocol",
        indications: "Chấn thương thể thao; Đứt dây chằng chéo (ACL/PCL); Rách sụn chêm; Đau khớp gối mạn tính; Tổn thương sụn khớp.",
        basicSequences: "- T2W hoặc PDW FatSat / STIR Sagittal (Quan trọng nhất: Xem ACL, PCL, sụn chêm)\n- T1W Sagittal (Xem cấu trúc giải phẫu, tủy xương)\n- T2W / PDW FatSat Coronal (Xem dây chằng bên MCL/LCL, sụn chêm)\n- T2W / PDW FatSat Axial (Xem khớp chè-đùi, sụn bánh chè)",
        advancedSequences: "- 3D DESS hoặc 3D SPACE: Tái tạo sụn khớp đẳng hướng để đo đạc thể tích sụn.\n- T2 Mapping sụn khớp: Đánh giá thoái hóa sụn sớm.",
        notes: "Cần xoay mũi chân bệnh nhân ra ngoài khoảng 10-15 độ để đưa dây chằng chéo trước (ACL) song song với mặt phẳng Sagittal."
    },
    {
        id: 4008,
        en: "Magnetic Resonance Cholangiopancreatography (MRCP)",
        vi: "Protocol Chụp Mật Tụy (MRCP)",
        type: "Protocol",
        indications: "Sỏi đường mật; Sỏi ống mật chủ; Viêm tụy cấp/mạn; Tắc nghẽn đường mật; U đầu tụy, u đường mật (Cholangiocarcinoma).",
        basicSequences: "- T2W SS-FSE / HASTE Axial và Coronal (Định vị tổng quan ổ bụng)\n- T2W FatSat Axial (Đánh giá nhu mô tụy và gan)\n- 2D MRCP Thick Slice (Lát cắt rất dày 40-50mm, TE cực dài >600ms) chụp nhiều góc quanh trục ống mật chủ.\n- 3D MRCP (SPACE / VISTA / CUBE) Triggering hô hấp: Dựng hình cây đường mật độ phân giải cao 3D.",
        advancedSequences: "- Kết hợp Protocol Gan mật động học (DCE) nếu phát hiện có khối u chèn ép đường mật.",
        notes: "Yêu cầu nhịn ăn tối thiểu 4-6 giờ trước chụp. Nên cho bệnh nhân uống nước dứa (ứa) hoặc thuốc đối quang từ âm tính (sắt/mangan) để xóa tín hiệu dịch lỏng trong dạ dày/tá tràng."
    }
];
