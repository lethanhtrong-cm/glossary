// Dữ liệu thuộc nhóm Protocol Chụp (MRI Protocols) có bổ sung Trích dẫn chuẩn Y khoa
export const protocolData = [
    {
        id: 4001,
        en: "Routine Brain MRI",
        vi: "[🧠 THẦN KINH] Sọ não thường quy",
        type: "Protocol",
        indications: "Đau đầu, chóng mặt kéo dài; Động kinh, co giật; Theo dõi u não, nang sọ não; Viêm não, màng não; Bệnh lý thoái hóa chất trắng (MS, ADEM) [1]; Sàng lọc sa sút trí tuệ.",
        basicSequences: "- T1W Sagittal: (TR: 400-600, TE: 10-15, Slice: 5mm, FOV: 220) Đánh giá đường giữa, thể chai, hố sau.\n- T2W Axial: (TR: >4000, TE: 90-110, Slice: 5mm) Giải phẫu tổng quan, dịch não tủy.\n- T2 FLAIR Axial: (TR: 8000-9000, TE: 90-120, TI: 2500) Rất nhạy với tổn thương chất trắng, phù não.\n- DWI / ADC Axial: (b=0, 1000; Slice: 5mm) Phát hiện nhồi máu cấp, áp xe, u đặc.\n- T2* GRE / SWI Axial: (TR: 600-800, TE: 20-25, FA: 15-20) Phát hiện vi xuất huyết, vôi hóa, u máu.",
        advancedSequences: "- 3D TOF MRA: Sàng lọc phình/hẹp động mạch đa giác Willis.\n- 3D T1 MPRAGE (Isotropic 1mm): Dựng hình 3D đánh giá thể tích não, động kinh.\n- T1W Post-contrast (+Gd): Tiêm thuốc bắt buộc nếu nghi ngờ u não, di căn, viêm màng não.",
        notes: "Luôn đảm bảo bệnh nhân nằm yên, chèn gối cố định đầu. Dùng kỹ thuật chống rung (PROPELLER/BLADE) ở xung T2W/FLAIR nếu bệnh nhân kích thích, không hợp tác.",
        citations: [
            "American College of Radiology (ACR). ACR–ASNR–SPR Practice Parameter for the Performance of Magnetic Resonance Imaging (MRI) of the Brain. Revised 2023."
        ]
    },
    {
        id: 4002,
        en: "Acute Stroke MRI",
        vi: "[🧠 THẦN KINH] Đột quỵ não cấp",
        type: "Protocol",
        indications: "Yếu liệt nửa người, nói đớ, méo miệng đột ngột; Xác định nhồi máu não cấp/tối cấp; Đánh giá vùng tranh tối tranh sáng (Penumbra); Loại trừ xuất huyết não cấp [1].",
        basicSequences: "- DWI / ADC Axial: (b=0, 1000) QUÉT ĐẦU TIÊN. Xác định ngay lõi nhồi máu.\n- T2* GRE hoặc SWI Axial: (Slice: 5mm) Loại trừ xuất huyết não (chống chỉ định tiêu sợi huyết).\n- T2 FLAIR Axial: (TI: 2500) Tìm sự bất tương xứng (Mismatch) DWI/FLAIR để định tuổi nhồi máu.\n- 3D TOF MRA: (Slice: 0.6-0.8mm, TR: 20-25) Xác định vị trí huyết khối tắc mạch lớn (LVO).",
        advancedSequences: "- Perfusion DSC (Tưới máu não): (TR: 1500, Tiêm Gd tốc độ 4-5ml/s) Tính toán CBF, CBV, MTT, Tmax để cứu vùng Penumbra.\n- CE-MRA Cổ: Đánh giá hẹp động mạch cảnh trong.",
        notes: "Nguyên tắc 'Time is Brain'. Bộ xung cơ bản (DWI, GRE, FLAIR, TOF) phải hoàn thành dưới 8-10 phút. Báo ngay bác sĩ đọc kết quả khi thấy lõi nhồi máu trên DWI.",
        citations: [
            "Powers WJ, et al. 2019 Update to the 2018 Guidelines for the Early Management of Patients With Acute Ischemic Stroke: A Guideline for Healthcare Professionals From the American Heart Association/American Stroke Association. Stroke. 2019;50:e344–e418."
        ]
    },
    {
        id: 4005,
        en: "Multiparametric Prostate MRI",
        vi: "[🫀 BỤNG CHẬU] Tiền liệt tuyến (mpMRI PI-RADS)",
        type: "Protocol",
        indications: "Tăng PSA huyết thanh; Tầm soát ung thư tiền liệt tuyến (PCa); Định vị trước sinh thiết; Phân giai đoạn ung thư tại chỗ; Theo dõi sau mổ/xạ trị [1].",
        basicSequences: "- T2W High Res Ax, Sag, Cor: (TR: 4000, TE: 100, Slice: 3mm, FOV: 160) Đánh giá chi tiết vùng chuyển tiếp (TZ) và vỏ bao.\n- DWI đa b-value (50, 400, 800) & b-siêu cao (b=1400-2000): (Slice: 3mm) Đánh giá vùng ngoại vi (PZ). Tính bản đồ ADC.\n- T1W Axial toàn chậu: (FOV: 300) Tìm hạch chậu và xuất huyết sau sinh thiết.",
        advancedSequences: "- DCE-MRI (Tưới máu động học): (Độ phân giải thời gian <10s/pha, tổng thời gian 3-4 phút). Đánh giá Wash-in khối u.",
        notes: "Bệnh nhân cần đi vệ sinh, thụt tháo làm sạch trực tràng và nhịn tiểu vừa phải (không căng) để giảm xảo ảnh nhu động ruột và co thắt bàng quang.",
        citations: [
            "American College of Radiology (ACR). PI-RADS: Prostate Imaging – Reporting and Data System, Version 2.1. (2019).",
            "Barentsz, J. O., et al. ESUR prostate MR guidelines 2012. European radiology, 22(4), 746-757."
        ]
    },
    {
        id: 4006,
        en: "Dynamic Liver MRI",
        vi: "[🫀 BỤNG CHẬU] Gan mật động học",
        type: "Protocol",
        indications: "Tầm soát và phân loại u gan (HCC, Hemangioma, FNH, Adenoma) [1]; Đánh giá xơ gan, nhiễm sắt/mỡ; Theo dõi sau nút mạch (TACE) hoặc đốt sóng cao tần (RFA).",
        basicSequences: "- T2W SS-FSE / HASTE Ax & Cor: (TR: 800-1000, TE: 80, Nín thở) Quét nhanh định vị.\n- T1W In-phase & Out-of-phase (Dixon) Ax: (TR: 150, TE: 1.2 & 2.4 ở 3T) Phát hiện nhiễm mỡ.\n- DWI Ax (b=50, 400, 800): Phát hiện ung thư gan nhạy bén.\n- 3D T1W GRE FatSat (VIBE/LAVA) TRƯỚC tiêm: (TR: 4, TE: 1.5, Lát cắt 2-3mm isotropic).",
        advancedSequences: "- 3D T1W GRE FatSat ĐỘNG HỌC SAU TIÊM: Chụp các pha Động mạch muộn (35s), Tĩnh mạch cửa (70s), Cân bằng (3 phút).\n- Pha Gan Mật (Hepatobiliary Phase - 20 phút): Dùng thuốc đặc hiệu tế bào gan (Primovist) để tìm vi di căn.",
        notes: "Cực kỳ phụ thuộc vào khả năng nín thở của bệnh nhân. Cần hướng dẫn bệnh nhân tập nín thở trước chụp. Nếu bệnh nhân không nín thở được, cân nhắc dùng Radial K-space.",
        citations: [
            "American College of Radiology. Liver Imaging Reporting and Data System (LI-RADS) Version 2018."
        ]
    }
];
// LƯU Ý: Anh Phan Thường có thể tiếp tục bổ sung trường citations: ["Nguồn 1", "Nguồn 2"] vào bất kỳ ID nào trong các file data cũ theo mẫu này.// Dữ liệu thuộc nhóm Protocol Chụp (MRI Protocols) có bổ sung Trích dẫn chuẩn Y khoa
export const protocolData = [
    {
        id: 4001,
        en: "Routine Brain MRI",
        vi: "[🧠 THẦN KINH] Sọ não thường quy",
        type: "Protocol",
        indications: "Đau đầu, chóng mặt kéo dài; Động kinh, co giật; Theo dõi u não, nang sọ não; Viêm não, màng não; Bệnh lý thoái hóa chất trắng (MS, ADEM) [1]; Sàng lọc sa sút trí tuệ.",
        basicSequences: "- T1W Sagittal: (TR: 400-600, TE: 10-15, Slice: 5mm, FOV: 220) Đánh giá đường giữa, thể chai, hố sau.\n- T2W Axial: (TR: >4000, TE: 90-110, Slice: 5mm) Giải phẫu tổng quan, dịch não tủy.\n- T2 FLAIR Axial: (TR: 8000-9000, TE: 90-120, TI: 2500) Rất nhạy với tổn thương chất trắng, phù não.\n- DWI / ADC Axial: (b=0, 1000; Slice: 5mm) Phát hiện nhồi máu cấp, áp xe, u đặc.\n- T2* GRE / SWI Axial: (TR: 600-800, TE: 20-25, FA: 15-20) Phát hiện vi xuất huyết, vôi hóa, u máu.",
        advancedSequences: "- 3D TOF MRA: Sàng lọc phình/hẹp động mạch đa giác Willis.\n- 3D T1 MPRAGE (Isotropic 1mm): Dựng hình 3D đánh giá thể tích não, động kinh.\n- T1W Post-contrast (+Gd): Tiêm thuốc bắt buộc nếu nghi ngờ u não, di căn, viêm màng não.",
        notes: "Luôn đảm bảo bệnh nhân nằm yên, chèn gối cố định đầu. Dùng kỹ thuật chống rung (PROPELLER/BLADE) ở xung T2W/FLAIR nếu bệnh nhân kích thích, không hợp tác.",
        citations: [
            "American College of Radiology (ACR). ACR–ASNR–SPR Practice Parameter for the Performance of Magnetic Resonance Imaging (MRI) of the Brain. Revised 2023."
        ]
    },
    {
        id: 4002,
        en: "Acute Stroke MRI",
        vi: "[🧠 THẦN KINH] Đột quỵ não cấp",
        type: "Protocol",
        indications: "Yếu liệt nửa người, nói đớ, méo miệng đột ngột; Xác định nhồi máu não cấp/tối cấp; Đánh giá vùng tranh tối tranh sáng (Penumbra); Loại trừ xuất huyết não cấp [1].",
        basicSequences: "- DWI / ADC Axial: (b=0, 1000) QUÉT ĐẦU TIÊN. Xác định ngay lõi nhồi máu.\n- T2* GRE hoặc SWI Axial: (Slice: 5mm) Loại trừ xuất huyết não (chống chỉ định tiêu sợi huyết).\n- T2 FLAIR Axial: (TI: 2500) Tìm sự bất tương xứng (Mismatch) DWI/FLAIR để định tuổi nhồi máu.\n- 3D TOF MRA: (Slice: 0.6-0.8mm, TR: 20-25) Xác định vị trí huyết khối tắc mạch lớn (LVO).",
        advancedSequences: "- Perfusion DSC (Tưới máu não): (TR: 1500, Tiêm Gd tốc độ 4-5ml/s) Tính toán CBF, CBV, MTT, Tmax để cứu vùng Penumbra.\n- CE-MRA Cổ: Đánh giá hẹp động mạch cảnh trong.",
        notes: "Nguyên tắc 'Time is Brain'. Bộ xung cơ bản (DWI, GRE, FLAIR, TOF) phải hoàn thành dưới 8-10 phút. Báo ngay bác sĩ đọc kết quả khi thấy lõi nhồi máu trên DWI.",
        citations: [
            "Powers WJ, et al. 2019 Update to the 2018 Guidelines for the Early Management of Patients With Acute Ischemic Stroke: A Guideline for Healthcare Professionals From the American Heart Association/American Stroke Association. Stroke. 2019;50:e344–e418."
        ]
    },
    {
        id: 4005,
        en: "Multiparametric Prostate MRI",
        vi: "[🫀 BỤNG CHẬU] Tiền liệt tuyến (mpMRI PI-RADS)",
        type: "Protocol",
        indications: "Tăng PSA huyết thanh; Tầm soát ung thư tiền liệt tuyến (PCa); Định vị trước sinh thiết; Phân giai đoạn ung thư tại chỗ; Theo dõi sau mổ/xạ trị [1].",
        basicSequences: "- T2W High Res Ax, Sag, Cor: (TR: 4000, TE: 100, Slice: 3mm, FOV: 160) Đánh giá chi tiết vùng chuyển tiếp (TZ) và vỏ bao.\n- DWI đa b-value (50, 400, 800) & b-siêu cao (b=1400-2000): (Slice: 3mm) Đánh giá vùng ngoại vi (PZ). Tính bản đồ ADC.\n- T1W Axial toàn chậu: (FOV: 300) Tìm hạch chậu và xuất huyết sau sinh thiết.",
        advancedSequences: "- DCE-MRI (Tưới máu động học): (Độ phân giải thời gian <10s/pha, tổng thời gian 3-4 phút). Đánh giá Wash-in khối u.",
        notes: "Bệnh nhân cần đi vệ sinh, thụt tháo làm sạch trực tràng và nhịn tiểu vừa phải (không căng) để giảm xảo ảnh nhu động ruột và co thắt bàng quang.",
        citations: [
            "American College of Radiology (ACR). PI-RADS: Prostate Imaging – Reporting and Data System, Version 2.1. (2019).",
            "Barentsz, J. O., et al. ESUR prostate MR guidelines 2012. European radiology, 22(4), 746-757."
        ]
    },
    {
        id: 4006,
        en: "Dynamic Liver MRI",
        vi: "[🫀 BỤNG CHẬU] Gan mật động học",
        type: "Protocol",
        indications: "Tầm soát và phân loại u gan (HCC, Hemangioma, FNH, Adenoma) [1]; Đánh giá xơ gan, nhiễm sắt/mỡ; Theo dõi sau nút mạch (TACE) hoặc đốt sóng cao tần (RFA).",
        basicSequences: "- T2W SS-FSE / HASTE Ax & Cor: (TR: 800-1000, TE: 80, Nín thở) Quét nhanh định vị.\n- T1W In-phase & Out-of-phase (Dixon) Ax: (TR: 150, TE: 1.2 & 2.4 ở 3T) Phát hiện nhiễm mỡ.\n- DWI Ax (b=50, 400, 800): Phát hiện ung thư gan nhạy bén.\n- 3D T1W GRE FatSat (VIBE/LAVA) TRƯỚC tiêm: (TR: 4, TE: 1.5, Lát cắt 2-3mm isotropic).",
        advancedSequences: "- 3D T1W GRE FatSat ĐỘNG HỌC SAU TIÊM: Chụp các pha Động mạch muộn (35s), Tĩnh mạch cửa (70s), Cân bằng (3 phút).\n- Pha Gan Mật (Hepatobiliary Phase - 20 phút): Dùng thuốc đặc hiệu tế bào gan (Primovist) để tìm vi di căn.",
        notes: "Cực kỳ phụ thuộc vào khả năng nín thở của bệnh nhân. Cần hướng dẫn bệnh nhân tập nín thở trước chụp. Nếu bệnh nhân không nín thở được, cân nhắc dùng Radial K-space.",
        citations: [
            "American College of Radiology. Liver Imaging Reporting and Data System (LI-RADS) Version 2018."
        ]
    }
];
// LƯU Ý: Anh Phan Thường có thể tiếp tục bổ sung trường citations: ["Nguồn 1", "Nguồn 2"] vào bất kỳ ID nào trong các file data cũ theo mẫu này.
