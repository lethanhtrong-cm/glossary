// CƠ SỞ DỮ LIỆU CT - PHẦN QUY TRÌNH CHỤP MẠCH MÁU (ANGIOGRAPHY)
export const ctAngioData = [
    {
        id: 5205,
        en: "CT Pulmonary Angiography (CTPA)",
        vi: "[🩸 MẠCH MÁU] CTA Động mạch phổi",
        type: "Angiography",
        indications: "Nghi ngờ tắc mạch phổi (Pulmonary Embolism - PE) cấp tính hoặc mạn tính, ho ra máu, khó thở đột ngột, D-Dimer tăng cao.",
        basicSequences: "- Chiều quét: Quét từ vòm hoành (dưới) lên đỉnh phổi (trên) để tránh xảo ảnh hô hấp. Nếu bệnh nhân không nín thở nổi, vùng đáy phổi (nơi dễ có huyết khối nhất) sẽ được quét trước.\n- Lượng thuốc: 50-70ml. Tốc độ tiêm cực nhanh (4.5 - 5 ml/s) kèm xả nước muối sinh lý (Saline chaser 30ml).",
        advancedSequences: "- Tái tạo MIP (Maximum Intensity Projection) mỏng 3-5mm Coronal/Axial để quan sát rõ hệ thống cây động mạch phổi và cục huyết khối xám đen kẹt bên trong lòng mạch.\n- Dựng ảnh cửa sổ phổi để đánh giá nhồi máu phổi đi kèm.",
        notes: "- Bolus Tracking: Đặt ROI tại TRUNG TÂM THÂN ĐỘNG MẠCH PHỔI (Main Pulmonary Trunk). \n- Dặn dò bệnh nhân nín thở RẤT NHẸ NHÀNG (không rặn). Nếu bệnh nhân nín thở quá sức (Nghiệm pháp Valsalva), áp lực lồng ngực tăng vọt sẽ đẩy thuốc dội ngược ra tĩnh mạch chủ, mạch phổi sẽ không có thuốc.",
        citations: []
    },
    {
        id: 5207,
        en: "CT Coronary Angiography (CCTA)",
        vi: "[🩸 MẠCH MÁU] CTA Mạch vành (CCTA)",
        type: "Angiography",
        indications: "Tầm soát hẹp mạch vành, đau thắt ngực không điển hình, nguy cơ mạch vành trung bình, đánh giá stent hoặc cầu nối chủ-vành (CABG).",
        basicSequences: "1. Chụp không thuốc: Quét đồng bộ điện tim. Đo điểm vôi hóa mạch vành (Calcium Scoring) bằng thuật toán Agatston.\n2. Chụp có thuốc: Đồng bộ nhịp tim hồi cứu (Retrospective) hoặc tiến cứu (Prospective). Quét từ carina (trạc ba khí quản) đến hết đáy tim.\n- Lượng thuốc 60-80ml, tốc độ tiêm 5-6 ml/s.",
        advancedSequences: "- Tái tạo cẩn thận từng pha nhịp tim (ví dụ 70% hoặc 75% R-R) để tìm pha tâm trương tim tĩnh lặng nhất.\n- Dựng hình MPR cong (Curved MPR) dọc theo trục của LAD, LCx, RCA. \n- Dựng hình 3D VRT cây mạch vành rõ nét.",
        notes: "- Yêu cầu khắt khe nhất: Kiểm soát nhịp tim < 65 l/p, nhịp đều (Bác sĩ sẽ cho uống thuốc chẹn Beta nếu nhịp nhanh).\n- Cho bệnh nhân ngậm Nitroglycerin dưới lưỡi 3-5 phút trước khi bơm thuốc để làm giãn nở tối đa khẩu kính mạch vành.",
        citations: []
    },
    {
        id: 5209,
        en: "Carotid and Cerebral CTA",
        vi: "[🩸 MẠCH MÁU] CTA Động mạch cảnh & Nội sọ",
        type: "Angiography",
        indications: "Nhồi máu não cấp (tìm tắc nghẽn mạch lớn LVO), phình động mạch não (aneurysm), xơ vữa hẹp động mạch cảnh, dị dạng AVM.",
        basicSequences: "- Chiều quét: Quét từ quai động mạch chủ (Aortic arch) lên đến đỉnh sọ.\n- Lát cắt: 0.5mm - 1mm mỏng nhất có thể.\n- Tiêm thuốc: Khoảng 50-60ml, tốc độ 4-5 ml/s. \n- Theo dõi Bolus (Bolus Tracking): Đặt ROI tại cung động mạch chủ hoặc thân chung động mạch cảnh chung. Ngưỡng trigger khoảng 100 HU.",
        advancedSequences: "Dựng hình VRT 3D toàn bộ hệ thống mạch máu từ tim lên não để phẫu thuật viên đánh giá tổng quan. Tái tạo MIP mỏng để đo đạc độ hẹp mạch vành hoặc kích thước cổ túi phình.",
        notes: "Giai đoạn tiêm thuốc, yêu cầu bệnh nhân tuyệt đối không nuốt nước bọt. Việc nuốt sẽ gây xảo ảnh chuyển động (motion artifact) cắt đứt hình ảnh động mạch cảnh tại vị trí ngang sụn giáp.",
        citations: []
    },
    {
        id: 5210,
        en: "Whole Aorta CTA",
        vi: "[🩸 MẠCH MÁU] CTA Động mạch chủ toàn bộ",
        type: "Angiography",
        indications: "Bóc tách động mạch chủ (Aortic dissection), phình động mạch chủ ngực-bụng, chấn thương ngực kín, theo dõi sau đặt Stent-Graft (EVAR/TEVAR).",
        basicSequences: "1. Pha không thuốc: Rất quan trọng để tìm vôi hóa nội mạc hoặc máu tụ trong vách (Intramural hematoma - IMH) tự nhiên.\n2. Pha động mạch: Quét từ đỉnh ngực (ngang mức các nhánh cảnh) xuống tới chẽ đôi động mạch chậu (khớp mu).\n- Thuốc: 70-90ml, tốc độ 4-5 ml/s. Đặt ROI tại động mạch chủ lên (Ascending Aorta).",
        advancedSequences: "Dựng hình MPR đa mặt phẳng và VRT 3D. Cần phân biệt rõ lòng thật (bắt thuốc mạnh) và lòng giả (bắt thuốc kém hơn hoặc trễ hơn) trong bóc tách động mạch.",
        notes: "Ở các bệnh nhân theo dõi Stent-Graft, KTV có thể cần chụp thêm pha tĩnh mạch (khoảng 70-80s) để tìm các rò rỉ nội mạch (Endoleak) diễn ra chậm mà pha động mạch chưa kịp chảy tới.",
        citations: []
    },
    {
        id: 5211,
        en: "Lower Extremity CTA / Run-off",
        vi: "[🩸 MẠCH MÁU] CTA Động mạch chi dưới (Run-off)",
        type: "Angiography",
        indications: "Tắc mạch chi dưới cấp tính (huyết khối), đau cách hồi do xơ vữa hẹp mạch, chấn thương gãy xương phức tạp đứt mạch máu, đánh giá bản đồ mạch máu trước mổ vạt da.",
        basicSequences: "- Chiều quét: Từ rốn thận (trên động mạch chậu) kéo dài xuống tận ngón chân.\n- Pitch lớn: Đây là ca chụp có trường quét (Z-axis) dài nhất cơ thể (hơn 1 mét), nên cài Pitch cao để máy quét kịp trước khi thuốc trôi về tĩnh mạch.\n- Thuốc: 100-120ml (lượng nhiều), tốc độ 4 ml/s.",
        advancedSequences: "Dựng hình MIP và VRT 3D toàn bộ xương chậu và 2 chân. Đoạn mạch máu nhỏ ở cẳng chân cần quan sát trên ảnh MPR gốc dọc theo trục mạch.",
        notes: "- Đặt ROI tại động mạch chủ bụng ngang rốn thận. KTV cần cẩn thận cài đặt thời gian trễ (Delay) vừa đủ để thuốc kịp chảy xuống ngón chân.\n- Nếu bệnh nhân bị tiểu đường nặng hoặc tắc nghẽn mạn tính, dòng máu xuống chân rất chậm, nếu máy chạy quá nhanh sẽ vượt qua mặt thuốc (bị đen lòng mạch ở đoạn xa).",
        citations: []
    }
];
