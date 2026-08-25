// CƠ SỞ DỮ LIỆU CT - PHẦN QUY TRÌNH CHỤP (PROTOCOL)
export const ctProtocolData = [
    {
        id: 5201,
        en: "Routine Brain CT",
        vi: "[🧠 THẦN KINH] Sọ não thường quy (Không thuốc)",
        type: "Protocol",
        indications: "Chấn thương sọ não, tai biến mạch máu não (nhồi máu / xuất huyết), đau đầu đột ngột, theo dõi tụ máu dưới màng cứng, viêm màng não.",
        basicSequences: "- FOV: 220 - 240mm.\n- Hướng cắt: Quét xoắn ốc hoặc Axial tuần tự từ lồi cầu chẩm (Foramen magnum) lên đến đỉnh sọ.\n- Độ dày lát cắt: Thu nhận 0.625mm - 1mm, tái tạo 5mm để giảm nhiễu (noise) nhu mô não.\n- Tái tạo MPR: Axial (song song đường OML), Coronal, Sagittal.",
        advancedSequences: "- Dựng hình VRT 3D khối xương sọ để đánh giá lún sọ, nứt sọ.\n- Tái tạo cửa sổ xương (Bone window: WW 2500, WL 500) độ dày 1-2mm để khảo sát vỡ xương đá, thành hốc mắt.",
        notes: "Góc gantry nên nghiêng song song với đường OML (Orbitomeatal Line) hoặc SML để tránh tia X chiếu trực tiếp vào thủy tinh thể gây đục thủy tinh thể bức xạ. Bệnh nhân không được nuốt hoặc đảo mắt trong quá trình quét.",
        citations: []
    },
    {
        id: 5202,
        en: "Acute Stroke CT (NCCT + CTP + CTA)",
        vi: "[🧠 THẦN KINH] Bộ ba CT Đột quỵ (Không thuốc + Tưới máu + Mạch máu)",
        type: "Protocol",
        indications: "Bệnh nhân nghi ngờ đột quỵ thiếu máu cục bộ cấp tính trong cửa sổ thời gian vàng (< 6 giờ hoặc mở rộng đến 24 giờ).",
        basicSequences: "1. Non-contrast CT (NCCT): Loại trừ xuất huyết não. Đánh giá dấu hiệu nhồi máu sớm (Dấu hiệu ruy băng thùy đảo, dấu hiệu động mạch não giữa tăng tỷ trọng).\n2. CT Perfusion (CTP): Tiêm 40-50ml thuốc (5 ml/s). Quét lặp đi lặp lại não bộ trong 60 giây để vẽ biểu đồ tưới máu. Tính toán lõi nhồi máu (Infarct core) và vùng tranh tối tranh sáng (Penumbra).\n3. CTA (CT Angiography): Tiêm 50-60ml thuốc (5 ml/s). Quét từ quai động mạch chủ lên đỉnh sọ để tìm vị trí tắc nghẽn mạch máu lớn (LVO).",
        advancedSequences: "Dựng hình MIP mỏng (10-15mm) đa mặt phẳng để theo dõi nhánh mạch máu tắc. Sử dụng phần mềm AI (VD: RAPID, syngo.via) để tự động tính thể tích Penumbra màng màu sắc.",
        notes: "ĐÂY LÀ QUY TRÌNH KHẨN CẤP (Code Stroke). Thời gian là não. Việc setup máy và bơm tiêm điện phải được thực hiện nhanh nhất có thể. Canh Bolus Tracking tại cung động mạch chủ.",
        citations: []
    },
    {
        id: 5203,
        en: "Tri-phasic Abdomen CT (Liver/Pancreas)",
        vi: "[🫀 BỤNG CHẬU] CT Bụng chậu 3 pha (Gan / Tụy)",
        type: "Protocol",
        indications: "Tầm soát u gan (HCC, Hemangioma, FNH), đánh giá xơ gan, viêm tụy cấp, u tụy, chấn thương tạng đặc nội tạng ổ bụng.",
        basicSequences: "1. Pha không thuốc (Non-contrast): Đánh giá vôi hóa, sỏi, mỡ (gan nhiễm mỡ), xuất huyết cấp.\n2. Pha động mạch gan (Arterial phase - 30-35s): Khối u gan HCC bắt thuốc mạnh rực rỡ, u tụy kém bắt thuốc lộ rõ trên nền mô tụy bình thường.\n3. Pha tĩnh mạch cửa (Portal Venous phase - 65-75s): Nhu mô gan bắt thuốc mạnh nhất, u HCC rửa thuốc (wash-out) trở nên tối màu.\n4. Pha muộn (Delayed phase - 3-5 phút): Đánh giá u máu (Hemangioma) lấp đầy thuốc, hoặc xơ sẹo đường mật, u đường mật (Cholangiocarcinoma).",
        advancedSequences: "- Tái tạo MPR đa mặt phẳng (Coronal, Sagittal) độ dày 2-3mm. \n- Chụp pha tĩnh mạch cửa toàn bộ bụng chậu từ vòm hoành đến khớp mu.",
        notes: "- Lượng thuốc: 1.5 - 2 ml / kg cân nặng. Tốc độ tiêm: 3 - 4 ml/s.\n- Bắt buộc sử dụng kỹ thuật Bolus Tracking. Đặt ROI đo tỷ trọng tại động mạch chủ bụng (ngang mức cơ hoành). Đặt ngưỡng Trigger khoảng 100 - 150 HU.",
        citations: []
    },
    {
        id: 5204,
        en: "CT Urography (CTU)",
        vi: "[🫀 BỤNG CHẬU] CT Hệ tiết niệu đa pha (CTU)",
        type: "Protocol",
        indications: "Tiểu máu chưa rõ nguyên nhân, ung thư biểu mô đường niệu (TCC), u thận (RCC), chấn thương hệ niệu, dị dạng giải phẫu.",
        basicSequences: "1. Pha không thuốc (Toàn bụng chậu): Tìm sỏi cản quang hệ niệu.\n2. Pha vỏ tủy (Corticomedullary phase - 30-40s): Vỏ thận ngấm thuốc mạnh, tủy thận chưa ngấm. Tốt nhất để phát hiện u thận.\n3. Pha thận đồ (Nephrographic phase - 90-100s): Nhu mô thận ngấm thuốc đồng nhất. Đánh giá tổn thương nhu mô, áp xe.\n4. Pha bài xuất (Excretory phase - 5-15 phút): Thuốc bài tiết đầy đài bể thận, niệu quản, bàng quang. Tìm khuyết thuốc do u đường niệu.",
        advancedSequences: "Dựng hình VRT 3D và MIP hệ thống cây đường niệu (giống hệt phim UIV cũ nhưng với không gian 3 chiều).",
        notes: "- Nên cho bệnh nhân uống 500ml nước trước chụp 30 phút để căng bàng quang và tăng bài niệu.\n- Để giảm liều bức xạ (vì chụp nhiều lần), có thể dùng kỹ thuật 'Split-bolus': Tiêm thuốc lần 1, đợi 10 phút, tiêm thuốc lần 2, rồi chụp 1 pha duy nhất (vừa có thuốc ở nhu mô, vừa có thuốc ở đường bài xuất).",
        citations: []
    },
    {
        id: 5205,
        en: "CT Pulmonary Angiography (CTPA)",
        vi: "[🫀 LỒNG NGỰC] CTA Động mạch phổi",
        type: "Protocol",
        indications: "Nghi ngờ tắc mạch phổi (Pulmonary Embolism - PE) cấp tính hoặc mạn tính, ho ra máu, khó thở đột ngột, D-Dimer tăng cao.",
        basicSequences: "- Chiều quét: Quét từ vòm hoành (dưới) lên đỉnh phổi (trên) để tránh xảo ảnh hô hấp. Nếu bệnh nhân không nín thở nổi, vùng đáy phổi (nơi dễ có huyết khối nhất) sẽ được quét trước.\n- Lượng thuốc: 50-70ml. Tốc độ tiêm cực nhanh (4.5 - 5 ml/s) kèm xả nước muối sinh lý (Saline chaser 30ml).",
        advancedSequences: "- Tái tạo MIP (Maximum Intensity Projection) mỏng 3-5mm Coronal/Axial để quan sát rõ hệ thống cây động mạch phổi và cục huyết khối xám đen kẹt bên trong lòng mạch.\n- Dựng ảnh cửa sổ phổi để đánh giá nhồi máu phổi đi kèm.",
        notes: "- Bolus Tracking: Đặt ROI tại TRUNG TÂM THÂN ĐỘNG MẠCH PHỔI (Main Pulmonary Trunk). \n- Dặn dò bệnh nhân nín thở RẤT NHẸ NHÀNG (không rặn). Nếu bệnh nhân nín thở quá sức (Nghiệm pháp Valsalva), áp lực lồng ngực tăng vọt sẽ đẩy thuốc dội ngược ra tĩnh mạch chủ, mạch phổi sẽ không có thuốc.",
        citations: []
    },
    {
        id: 5206,
        en: "High-Resolution CT (HRCT) Lungs",
        vi: "[🫀 LỒNG NGỰC] CT Phổi phân giải cao (HRCT)",
        type: "Protocol",
        indications: "Bệnh phổi kẽ (ILD), xơ phổi, giãn phế quản, khí phế thũng, tổn thương dạng kính mờ (GGO) do Covid-19, lao.",
        basicSequences: "- KHÔNG tiêm thuốc cản quang.\n- Lát cắt siêu mỏng (1 - 1.5 mm).\n- Khẩu độ kVp/mAs có thể để cao để tăng độ sắc nét.\n- Tái tạo bằng thuật toán sắc nét cao (Sharp / Edge-enhancing Kernel, VD: Siemens b80f, GE Bone/Lung) để tăng tối đa chi tiết vách phế nang.\n- Cửa sổ phổi (WW: 1500, WL: -600).",
        advancedSequences: "1. Quét thêm thì thở ra tối đa (Expiratory phase): Giúp phát hiện bẫy khí (Air trapping) trong bệnh phổi tắc nghẽn.\n2. Nằm sấp (Prone position): Phân biệt vùng kính mờ ở đáy phổi là do ứ máu trọng lực (ứ trệ do nằm ngửa lâu) hay là xơ hóa phổi kẽ thực sự.",
        notes: "Mấu chốt của HRCT là độ phân giải cực cao và nín thở tuyệt đối. Nếu bệnh nhân ho hoặc nhúc nhích dù chỉ 1mm, vi cấu trúc phổi sẽ bị nhòe và mất giá trị chẩn đoán.",
        citations: []
    },
    {
        id: 5207,
        en: "CT Coronary Angiography (CCTA)",
        vi: "[🫀 TIM MẠCH] CTA Mạch vành",
        type: "Protocol",
        indications: "Tầm soát hẹp mạch vành, đau thắt ngực không điển hình, nguy cơ mạch vành trung bình, đánh giá stent hoặc cầu nối chủ-vành (CABG).",
        basicSequences: "1. Chụp không thuốc: Quét đồng bộ điện tim. Đo điểm vôi hóa mạch vành (Calcium Scoring) bằng thuật toán Agatston.\n2. Chụp có thuốc: Đồng bộ nhịp tim hồi cứu (Retrospective) hoặc tiến cứu (Prospective). Quét từ carina (trạc ba khí quản) đến hết đáy tim.\n- Lượng thuốc 60-80ml, tốc độ tiêm 5-6 ml/s.",
        advancedSequences: "- Tái tạo cẩn thận từng pha nhịp tim (ví dụ 70% hoặc 75% R-R) để tìm pha tâm trương tim tĩnh lặng nhất.\n- Dựng hình MPR cong (Curved MPR) dọc theo trục của LAD, LCx, RCA. \n- Dựng hình 3D VRT cây mạch vành rõ nét.",
        notes: "- Yêu cầu khắt khe nhất: Kiểm soát nhịp tim < 65 l/p, nhịp đều (Bác sĩ sẽ cho uống thuốc chẹn Beta nếu nhịp nhanh).\n- Cho bệnh nhân ngậm Nitroglycerin dưới lưỡi 3-5 phút trước khi bơm thuốc để làm giãn nở tối đa khẩu kính mạch vành.",
        citations: []
    },
    {
        id: 5208,
        en: "Polytrauma CT (Pan-Scan)",
        vi: "[TOÀN THÂN] CT Đa chấn thương (Pan-Scan)",
        type: "Protocol",
        indications: "Tai nạn giao thông nghiêm trọng, đa chấn thương, ngã từ trên cao, sốc mất máu chưa rõ nguyên nhân cần đánh giá tổn thương sinh tồn.",
        basicSequences: "Chiến lược thông thường (Split-bolus hoặc Multi-pass):\n1. Quét Sọ não và Cột sống cổ không thuốc (đánh giá xuất huyết sọ, gãy cổ ngay lập tức).\n2. Tiêm thuốc cản quang (khoảng 100-120ml).\n3. Quét một lần duy nhất từ Đỉnh phổi xuống đến Khớp mu ở pha tĩnh mạch muộn (khoảng 65-70s sau tiêm) để đánh giá vỡ tạng (gan, lách, thận), tràn máu màng phổi, vỡ khung chậu rò rỉ máu.",
        advancedSequences: "- Tái tạo thần tốc cửa sổ Xương toàn thân (Sagittal cột sống, VRT khung chậu/xương sườn).\n- Nếu nghi ngờ rách động mạch chủ bóc tách, phải tách riêng pha CTA ngực bụng trước.",
        notes: "NGUYÊN TẮC 'THẦN TỐC VÀ SINH TỒN':\n- Cấp cứu là ưu tiên. Không di chuyển bệnh nhân nhiều, chụp thẳng trên ván cứng (spine board) nếu cần.\n- Tuyệt đối KHÔNG tháo nẹp cổ khi chưa có kết quả loại trừ gãy cột sống cổ.\n- Phối hợp chặt chẽ với ekip cấp cứu hồi sức đang bóp bóng/truyền máu ngay cạnh máy.",
        citations: []
    }
];
