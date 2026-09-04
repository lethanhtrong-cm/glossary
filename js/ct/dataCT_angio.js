// CƠ SỞ DỮ LIỆU CT - PHẦN QUY TRÌNH CHỤP MẠCH MÁU (ANGIOGRAPHY)
export const ctAngioData = [
    {
        id: 5205,
        en: "CT Pulmonary Angiography (CTPA)",
        vi: "[🩸 MẠCH MÁU] CTA Động mạch phổi",
        type: "Angiography",
        indications: "Nghi ngờ tắc mạch phổi (Pulmonary Embolism - PE) cấp tính hoặc mạn tính, ho ra máu, khó thở đột ngột, D-Dimer tăng cao.",
        basicSequences: "- Chiều quét: Quét từ vòm hoành (dưới) lên đỉnh phổi (trên) để tránh xảo ảnh hô hấp. Nếu bệnh nhân không nín thở nổi, vùng đáy phổi (nơi dễ có huyết khối nhất) sẽ được quét trước.\n- Lượng thuốc: 50-70ml. Tốc độ tiêm cực nhanh (4.5 - 5 ml/s) kèm xả nước muối sinh lý (Saline chaser 30ml).\n- Các cách chụp khác cho cùng loại mạch:\n  + Chụp Năng lượng kép (Dual Energy CT): Giúp đánh giá bản đồ tưới máu phổi (Iodine perfusion map) để phát hiện nhồi máu vi thể.\n  + Chụp High-pitch (Flash mode): Quét toàn bộ ngực trong < 1 giây, triệt tiêu xảo ảnh hô hấp ở bệnh nhân thở máy hoặc không thể nín thở.",
        advancedSequences: "- Tái tạo MIP (Maximum Intensity Projection) mỏng 3-5mm Coronal/Axial để quan sát rõ hệ thống cây động mạch phổi và cục huyết khối xám đen kẹt bên trong lòng mạch.\n- Dựng ảnh cửa sổ phổi để đánh giá nhồi máu phổi đi kèm.",
        notes: "- Phương pháp Timing:\n  + Bolus Tracking: Đặt ROI tại TRUNG TÂM THÂN ĐỘNG MẠCH PHỔI (Main Pulmonary Trunk).\n  + Test Bolus: Tiêm nháp 10-15ml thuốc + 30ml muối sinh lý, quét nhiều lát cắt tại 1 vị trí để vẽ biểu đồ thời gian-tỷ trọng (TDC), xác định chính xác thời gian thuốc đạt đỉnh.\n- Dặn dò bệnh nhân nín thở RẤT NHẸ NHÀNG (không rặn). Nếu bệnh nhân nín thở quá sức (Nghiệm pháp Valsalva), áp lực lồng ngực tăng vọt sẽ đẩy thuốc dội ngược ra tĩnh mạch chủ, mạch phổi sẽ không có thuốc.",
        citations: []
    },
    {
        id: 5207,
        en: "CT Coronary Angiography (CCTA)",
        vi: "[🩸 MẠCH MÁU] CTA Mạch vành (CCTA)",
        type: "Angiography",
        indications: "Tầm soát hẹp mạch vành, đau thắt ngực không điển hình, nguy cơ mạch vành trung bình, đánh giá stent hoặc cầu nối chủ-vành (CABG).",
        basicSequences: "1. Chụp không thuốc: Quét đồng bộ điện tim. Đo điểm vôi hóa mạch vành (Calcium Scoring) bằng thuật toán Agatston.\n2. Chụp có thuốc: Quét từ carina (trạc ba khí quản) đến hết đáy tim. Lượng thuốc 60-80ml, tốc độ tiêm 5-6 ml/s.\n- Các cách chụp khác cho mạch vành (Tùy nhịp tim):\n  + Tiến cứu (Prospective ECG-triggering): Cắt chớp theo từng nhịp tim tại một pha cố định (thường là tâm trương). Liều tia rất thấp, yêu cầu nhịp tim < 65 l/p.\n  + Hồi cứu (Retrospective ECG-gating): Quét xoắn ốc liên tục xuyên suốt chu kỳ tim. Liều tia cao, nhưng cho phép đánh giá chức năng thất (EF) và dựng ảnh ở mọi pha khi nhịp không đều.\n  + High-pitch Spiral (Flash): Quét toàn tim trong 1 nhịp (khoảng 250ms). Nhịp tim phải cực kỳ đều và chậm.",
        advancedSequences: "- Tái tạo cẩn thận từng pha nhịp tim (ví dụ 70% hoặc 75% R-R) để tìm pha tâm trương tim tĩnh lặng nhất.\n- Dựng hình MPR cong (Curved MPR) dọc theo trục của LAD, LCx, RCA. \n- Dựng hình 3D VRT cây mạch vành rõ nét.",
        notes: "- Phương pháp Timing:\n  + Bolus Tracking: Đặt ROI tại Động mạch chủ xuống (Descending Aorta) ngang mức ngã ba khí quản, ngưỡng trigger 100-150 HU.\n  + Test Bolus: Đo thời gian tuần hoàn từ tay đến tim bằng 15ml thuốc, cực kỳ hữu ích cho bệnh nhân suy tim có cung lượng tim thấp.\n- Yêu cầu khắt khe nhất: Kiểm soát nhịp tim < 65 l/p, nhịp đều (Bác sĩ sẽ cho uống thuốc chẹn Beta nếu nhịp nhanh).\n- Cho bệnh nhân ngậm Nitroglycerin dưới lưỡi 3-5 phút trước khi bơm thuốc để làm giãn nở tối đa khẩu kính mạch vành.",
        citations: []
    },
    {
        id: 5209,
        en: "Carotid and Cerebral CTA",
        vi: "[🩸 MẠCH MÁU] CTA Động mạch cảnh & Nội sọ",
        type: "Angiography",
        indications: "Nhồi máu não cấp (tìm tắc nghẽn mạch lớn LVO), phình động mạch não (aneurysm), xơ vữa hẹp động mạch cảnh, dị dạng AVM.",
        basicSequences: "- Chiều quét: Quét từ quai động mạch chủ (Aortic arch) lên đến đỉnh sọ.\n- Lát cắt: 0.5mm - 1mm mỏng nhất có thể.\n- Tiêm thuốc: Khoảng 50-60ml, tốc độ 4-5 ml/s.\n- Các cách chụp khác cho cùng loại mạch:\n  + CT Perfusion (CT Tưới máu não): Quét lặp lại liên tục vùng não nghi ngờ trong 45-60s để đánh giá lõi nhồi máu (Core) và vùng tranh tối tranh sáng (Penumbra).\n  + 4D CTA (Động học mạch máu): Quét thành nhiều pha liên tục để quan sát chiều dòng chảy, thời gian đổ đầy của dị dạng thông động tĩnh mạch (AVM) hoặc rò màng cứng (dAVF).",
        advancedSequences: "Dựng hình VRT 3D toàn bộ hệ thống mạch máu từ tim lên não để phẫu thuật viên đánh giá tổng quan. Tái tạo MIP mỏng để đo đạc độ hẹp mạch vành hoặc kích thước cổ túi phình.",
        notes: "- Phương pháp Timing:\n  + Bolus Tracking: Đặt ROI tại cung động mạch chủ (Aortic arch) hoặc thân chung động mạch cảnh chung. Ngưỡng trigger khoảng 100 HU.\n  + Test Bolus: Hữu ích khi cần tính toán độ trễ cực kỳ chính xác giữa động mạch và tĩnh mạch sọ, tránh tĩnh mạch cảnh bắt thuốc sớm che lấp động mạch cảnh trong.\n- Giai đoạn tiêm thuốc, yêu cầu bệnh nhân tuyệt đối không nuốt nước bọt. Việc nuốt sẽ gây xảo ảnh chuyển động (motion artifact) cắt đứt hình ảnh động mạch cảnh tại vị trí ngang sụn giáp.",
        citations: []
    },
    {
        id: 5210,
        en: "Whole Aorta CTA",
        vi: "[🩸 MẠCH MÁU] CTA Động mạch chủ toàn bộ",
        type: "Angiography",
        indications: "Bóc tách động mạch chủ (Aortic dissection), phình động mạch chủ ngực-bụng, chấn thương ngực kín, theo dõi sau đặt Stent-Graft (EVAR/TEVAR).",
        basicSequences: "1. Pha không thuốc: Rất quan trọng để tìm vôi hóa nội mạc hoặc máu tụ trong vách (Intramural hematoma - IMH) tự nhiên.\n2. Pha động mạch: Quét từ đỉnh ngực (ngang mức các nhánh cảnh) xuống tới chẽ đôi động mạch chậu (khớp mu).\n- Thuốc: 70-90ml, tốc độ 4-5 ml/s.\n- Các cách chụp khác cho ĐM chủ:\n  + ECG-gated Aorta CTA: Gắn điện tim đồng bộ khi quét vùng gốc động mạch chủ (Aortic root) để triệt tiêu xảo ảnh chuyển động do nhịp đập của tim, giúp chẩn đoán bóc tách type A chính xác hơn.\n  + Triple-rule-out CT (TRO): Giao thức đặc biệt kết hợp chụp ĐM vành, ĐM chủ và ĐM phổi trong 1 lần quét để chẩn đoán phân biệt đau ngực cấp.",
        advancedSequences: "Dựng hình MPR đa mặt phẳng và VRT 3D. Cần phân biệt rõ lòng thật (bắt thuốc mạnh) và lòng giả (bắt thuốc kém hơn hoặc trễ hơn) trong bóc tách động mạch.",
        notes: "- Phương pháp Timing:\n  + Bolus Tracking: Đặt ROI tại động mạch chủ lên (Ascending Aorta) ngang mức gốc ĐM phổi.\n  + Test Bolus: Có thể sử dụng với lượng thuốc nhỏ (15-20ml) để đảm bảo không bỏ lỡ pha bắt thuốc tối đa của lòng thật ở bệnh nhân có cung lượng tim bất thường.\n- Ở các bệnh nhân theo dõi Stent-Graft, KTV có thể cần chụp thêm pha tĩnh mạch (khoảng 70-80s) để tìm các rò rỉ nội mạch (Endoleak) diễn ra chậm mà pha động mạch chưa kịp chảy tới.",
        citations: []
    },
    {
        id: 5211,
        en: "Lower Extremity CTA / Run-off",
        vi: "[🩸 MẠCH MÁU] CTA Động mạch chi dưới (Run-off)",
        type: "Angiography",
        indications: "Tắc mạch chi dưới cấp tính (huyết khối), đau cách hồi do xơ vữa hẹp mạch, chấn thương gãy xương phức tạp đứt mạch máu, đánh giá bản đồ mạch máu trước mổ vạt da.",
        basicSequences: "- Chiều quét: Từ rốn thận (trên động mạch chậu) kéo dài xuống tận ngón chân.\n- Pitch lớn: Đây là ca chụp có trường quét (Z-axis) dài nhất cơ thể (hơn 1 mét), nên cài Pitch cao để máy quét kịp trước khi thuốc trôi về tĩnh mạch.\n- Thuốc: 100-120ml (lượng nhiều), tốc độ 4 ml/s.\n- Các cách chụp khác cho chi dưới:\n  + Quét đa pha (Multiphasic CTA): Quét từ chậu xuống ngón chân 2-3 lần liên tiếp (cách nhau 10-15s). Giúp đánh giá tuần hoàn bàng hệ và mạch đùi/khoeo trong trường hợp hẹp tắc nặng, dòng chảy đến muộn.\n  + Dual-Energy CT: Dùng để loại bỏ xương bằng thuật toán (Bone removal) tốt hơn nhiều so với trừ xương thủ công (Substraction).",
        advancedSequences: "Dựng hình MIP và VRT 3D toàn bộ xương chậu và 2 chân. Đoạn mạch máu nhỏ ở cẳng chân cần quan sát trên ảnh MPR gốc dọc theo trục mạch.",
        notes: "- Phương pháp Timing:\n  + Test Bolus: ĐƯỢC KHUYẾN CÁO NHẤT cho chi dưới nếu bệnh nhân bị tắc hẹp mạn tính. Đo thời gian thuốc đến động mạch khoeo (Popliteal artery) để cộng thêm vào thời gian Delay, đảm bảo không quét vượt mặt thuốc.\n  + Bolus Tracking: Đặt ROI tại động mạch chủ bụng ngang rốn thận. KTV cần cẩn thận cài đặt thời gian trễ (Delay) vừa đủ để thuốc kịp chảy xuống ngón chân.\n- Nếu bệnh nhân bị tiểu đường nặng hoặc tắc nghẽn mạn tính, dòng máu xuống chân rất chậm, nếu máy chạy quá nhanh sẽ vượt qua mặt thuốc (bị đen lòng mạch ở đoạn xa).",
        citations: []
    }
];
