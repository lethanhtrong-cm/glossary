// CƠ SỞ DỮ LIỆU CẮT LỚP VI TÍNH (CT SCAN)
export const ctData = [
    // ==========================================
    // NHÓM 1: THÔNG SỐ CÀI ĐẶT (PARAMETERS)
    // ==========================================
    {
        id: 5001,
        en: "Tube Voltage (kVp)",
        vi: "Điện thế bóng X-Quang (kVp)",
        type: "Parameter",
        description: "kVp (Kilovolt Peak) quyết định động năng của chùm electron bắn vào bia Anode, từ đó quyết định năng lượng và độ đâm xuyên của chùm tia X. kVp càng cao, tia X càng cứng, độ đâm xuyên càng mạnh nhưng độ tương phản hình ảnh sẽ giảm.",
        parameters: "- Ứng dụng lâm sàng / Cài đặt:\n1. Người lớn thường quy: 100 - 120 kVp.\n2. Bệnh nhân béo phì: Tăng lên 120 - 140 kVp để đủ sức đâm xuyên.\n3. Chụp mạch máu (CTA) hoặc Trẻ em: Hạ xuống 70 - 80 kVp. Việc hạ kVp giúp tăng vọt độ tương phản của I-ốt (đậm độ sáng hơn) và giảm đáng kể liều bức xạ cho bệnh nhân.",
        citations: []
    },
    {
        id: 5002,
        en: "Tube Current-Time Product (mAs)",
        vi: "Dòng hằng số bóng (mAs)",
        type: "Parameter",
        description: "mAs quyết định 'số lượng' photon tia X được phát ra. Nó tỷ lệ thuận tuyến tính với liều bức xạ mà bệnh nhân nhận vào. mAs đủ cao giúp hình ảnh mịn màng (giảm nhiễu hạt - noise), nhưng mAs quá cao sẽ gây quá liều bức xạ không cần thiết.",
        parameters: "- Ứng dụng lâm sàng / Cài đặt:\n1. Tự động điều biến liều (Auto mA / CareDose / SmartmA): Luôn luôn BẬT. Máy sẽ tự động tăng mAs ở vùng dày (vai, chậu) và giảm mAs ở vùng mỏng (cổ, phổi) để tối ưu hóa liều.\n2. Ở các máy cũ không có Auto mA, KTV phải tự ước lượng mAs dựa trên cân nặng và vùng giải phẫu.",
        citations: []
    },
    {
        id: 5003,
        en: "Pitch",
        vi: "Độ xoắn ốc (Pitch)",
        type: "Parameter",
        description: "Trong CT xoắn ốc, Pitch là tỷ lệ giữa quãng đường di chuyển của bàn bệnh nhân trong một vòng quay của bóng so với tổng bề dày chùm tia X (Collimation).",
        parameters: "- Ứng dụng lâm sàng / Cài đặt:\n1. Pitch = 1: Bàn di chuyển bằng đúng bề rộng chùm tia (Không hở, không lấp).\n2. Pitch > 1 (VD: 1.2 - 1.5): Quét thưa, bàn chạy nhanh. Dùng cho chụp ngực nín thở nhanh, giảm liều bức xạ, nhưng có thể bị xảo ảnh dải băng (windmill artifact).\n3. Pitch < 1 (VD: 0.2 - 0.3): Quét chồng lấp (overlapping). Bàn chạy chậm. Dùng trong chụp CT mạch vành (ECG-gating) để lấy hình ảnh sắc nét, nhưng liều tia X rất cao.",
        citations: []
    },
    {
        id: 5004,
        en: "Iterative Reconstruction (IR)",
        vi: "Tái tạo lặp (IR)",
        type: "Parameter",
        description: "Thuật toán xử lý ảnh số học hiện đại thay thế cho thuật toán FBP (Filtered Back Projection) cũ. IR sử dụng các vòng lặp thống kê để lọc nhiễu (noise) lặp đi lặp lại nhiều lần trước khi xuất ra hình ảnh cuối cùng.",
        parameters: "- Ứng dụng lâm sàng / Cài đặt:\n1. Tác dụng lớn nhất: Cho phép KTV chủ động HẠ LIỀU TIA X (giảm mAs) xuống mức cực thấp nhưng ảnh vẫn không bị nhiễu hạt.\n2. Các hãng có tên gọi khác nhau: Siemens (SAFIRE/ADMIRE), GE (ASiR/Veo), Philips (iDose), Canon (AIDR 3D).",
        citations: []
    },
    {
        id: 5005,
        en: "Window Width / Window Level (WW/WL)",
        vi: "Cửa sổ hiển thị (WW/WL)",
        type: "Parameter",
        description: "Kỹ thuật hậu xử lý trên trạm làm việc. Vì mắt người chỉ phân biệt được khoảng 30-40 sắc độ xám, trong khi CT có tới 4000 đơn vị Hounsfield (HU), ta phải dùng 'Cửa sổ' để kẹp dải độ xám vào đúng mô cần xem.\n- WL (Level/Center): Độ sáng trung tâm (Nên đặt bằng đúng giá trị HU của mô cần xem).\n- WW (Width): Độ rộng dải xám (WW hẹp cho tương phản cao, WW rộng cho tương phản dịu).",
        parameters: "- Ứng dụng lâm sàng / Cài đặt:\n1. Sọ não: WW 80, WL 40.\n2. Xương: WW 2000-2500, WL 400-500.\n3. Nhu mô phổi: WW 1500, WL -600.\n4. Cửa sổ gan/bụng: WW 350-400, WL 40-50.",
        citations: []
    },

    // ==========================================
    // NHÓM 2: VẬT LÝ & AN TOÀN BỨC XẠ (PHYSICS)
    // ==========================================
    {
        id: 5101,
        en: "ALARA Principle",
        vi: "[An Toàn] Nguyên tắc ALARA",
        type: "Physics",
        description: "ALARA (As Low As Reasonably Achievable) là nguyên tắc tối thượng trong an toàn bức xạ y tế. Nghĩa là: Liều bức xạ phải được giữ ở mức THẤP NHẤT có thể, nhưng vẫn phải đảm bảo mức độ hợp lý để HÌNH ẢNH ĐẠT CHẤT LƯỢNG CHẨN ĐOÁN.",
        parameters: "- Ứng dụng lâm sàng / Thực hành:\n1. Hạn chế chụp CT lại nếu không cần thiết.\n2. Luôn bọc áo chì che chắn cho các cơ quan nhạy cảm (tuyến giáp, vú, thủy tinh thể, tinh hoàn) nằm NGOÀI vùng quét.\n3. Cân nhắc kỹ việc chụp CT cho phụ nữ có thai và trẻ em. Ưu tiên Siêu âm hoặc MRI nếu có thể thay thế.",
        citations: []
    },
    {
        id: 5102,
        en: "Radiation Dose Metrics (CTDIvol & DLP)",
        vi: "[An Toàn] Chỉ số liều bức xạ CT",
        type: "Physics",
        description: "Hai chỉ số quan trọng nhất ghi nhận trên máy CT để đo lường bức xạ:\n- CTDIvol (Computed Tomography Dose Index - mGy): Phản ánh liều hấp thụ bức xạ trung bình bên trong một mặt phẳng cắt lát. Đại diện cho cường độ của chùm tia.\n- DLP (Dose Length Product - mGy.cm): Bằng CTDIvol nhân với chiều dài vùng quét. Phản ánh TỔNG NĂNG LƯỢNG bức xạ mà bệnh nhân phải chịu trong toàn bộ ca chụp.",
        parameters: "- Ứng dụng lâm sàng / Thực hành:\n1. Luôn đính kèm trang Patient Protocol/Dose Report vào hệ thống PACS để bác sĩ theo dõi liều tích lũy của bệnh nhân.\n2. KTV có thể giảm DLP bằng cách cắt gọt, thu hẹp chiều dài vùng quét (Z-axis) vừa đủ trọn vẹn cơ quan đích, không quét thừa.",
        citations: []
    },
    {
        id: 5103,
        en: "Contrast-Induced Nephropathy (CIN) Prevention",
        vi: "[An Toàn] Dự phòng bệnh lý thận do thuốc cản quang",
        type: "Physics",
        description: "Thuốc cản quang chứa I-ốt (Iodinated Contrast Media) bài tiết qua thận và có nguy cơ gây ngộ độc ống thận, co thắt mạch máu thận, dẫn đến suy thận cấp (CIN).",
        parameters: "- Ứng dụng lâm sàng / Thực hành:\n1. BẮT BUỘC kiểm tra chỉ số Creatinine máu và ước tính độ thanh thải eGFR trước khi tiêm. eGFR < 30 ml/min/1.73m2 là chống chỉ định tương đối nặng.\n2. Hydrat hóa (Truyền dịch / Uống nhiều nước) trước và sau khi tiêm 24h là phương pháp phòng ngừa hiệu quả nhất.\n3. Ưu tiên sử dụng thuốc cản quang loại áp lực thẩm thấu thấp (LOCM) hoặc đồng thẩm thấu (IOCM).",
        citations: []
    },

    // ==========================================
    // NHÓM 3: PROTOCOL CHỤP CT (PROTOCOLS)
    // ==========================================
    {
        id: 5201,
        en: "Routine Brain CT",
        vi: "[🧠 THẦN KINH] Sọ não thường quy (Không thuốc)",
        type: "Protocol",
        indications: "Chấn thương sọ não, tai biến mạch máu não (nhồi máu / xuất huyết), đau đầu đột ngột, theo dõi tụ máu dưới màng cứng.",
        basicSequences: "- FOV: 220 - 240mm.\n- Quét xoắn ốc từ lồi cầu chẩm (Foramen magnum) lên đến đỉnh sọ.\n- Lát cắt dày 5mm để giảm nhiễu, tái tạo MPR xương 1-2mm.\n- Cửa sổ nhu mô (WW: 80, WL: 40) và Cửa sổ xương (WW: 2500, WL: 500).",
        advancedSequences: "Dựng hình VRT (Volume Rendering) khối xương sọ 3D để các bác sĩ ngoại khoa dễ dàng đánh giá đường nứt sọ hoặc sụt lún sọ.",
        notes: "Góc gantry (độ nghiêng bóng) nên song song với đường lỗ tai - đuôi mắt (OML - Orbitomeatal Line) hoặc đường ổ mắt - lỗ tai (SML) để tránh tia X chiếu trực tiếp vào thủy tinh thể gây đục thủy tinh thể.",
        citations: []
    },
    {
        id: 5202,
        en: "Tri-phasic Abdomen CT",
        vi: "[🫀 BỤNG CHẬU] CT Bụng chậu 3 pha (Gan / Tụy)",
        type: "Protocol",
        indications: "Tầm soát u gan (HCC, Hemangioma), đánh giá xơ gan, viêm tụy cấp, u tụy, chấn thương tạng đặc nội tạng ổ bụng.",
        basicSequences: "1. Pha không thuốc (Non-contrast): Đánh giá vôi hóa, sỏi, mỡ, xuất huyết cấp.\n2. Pha động mạch gan (Arterial phase - 30-35s): Khối u gan HCC bắt thuốc mạnh rực rỡ.\n3. Pha tĩnh mạch cửa (Portal Venous phase - 65-75s): Nhu mô gan bắt thuốc mạnh nhất, u HCC rửa thuốc (wash-out) trở nên tối màu.\n4. Pha muộn (Delayed phase - 3-5 phút): Đánh giá u máu (Hemangioma) lấp đầy thuốc, hoặc xơ sẹo đường mật.",
        advancedSequences: "Tái tạo MPR đa mặt phẳng (Coronal, Sagittal) độ dày 2-3mm. Chụp pha tĩnh mạch cửa toàn bộ bụng chậu từ vòm hoành đến khớp mu.",
        notes: "Bắt buộc sử dụng kỹ thuật Bolus Tracking. Đặt ROI đo tỷ trọng tại động mạch chủ bụng (ngang mức cơ hoành). Đặt ngưỡng Trigger khoảng 100 - 150 HU. Tốc độ tiêm thuốc >= 3 ml/s.",
        citations: []
    },
    {
        id: 5203,
        en: "CT Pulmonary Angiography (CTPA)",
        vi: "[🫀 LỒNG NGỰC] CTA Động mạch phổi",
        type: "Protocol",
        indications: "Nghi ngờ tắc mạch phổi (Pulmonary Embolism - PE) cấp tính hoặc mạn tính, ho ra máu, khó thở đột ngột, D-Dimer tăng cao.",
        basicSequences: "- Chiều quét: Quét từ vòm hoành (dưới) lên đỉnh phổi (trên) để tránh xảo ảnh hô hấp (khi bệnh nhân không nín thở nổi, vùng đáy phổi dễ có tổn thương sẽ được quét trước).\n- Lượng thuốc: 50-70ml. Tốc độ tiêm cực nhanh (4 - 5 ml/s) kèm xả nước muối sinh lý (Saline chaser).",
        advancedSequences: "Tái tạo MIP (Maximum Intensity Projection) mỏng 3-5mm Coronal/Axial để quan sát rõ hệ thống cây động mạch phổi và các cục huyết khối xám đen kẹt bên trong lòng mạch.",
        notes: "Bolus Tracking: Đặt ROI tại TRUNG TÂM THÂN ĐỘNG MẠCH PHỔI (Main Pulmonary Trunk). \nDặn dò bệnh nhân nín thở RẤT NHẸ NHÀNG. Nếu bệnh nhân nín thở quá sức (Nghiệm pháp Valsalva), áp lực lồng ngực tăng vọt sẽ đẩy thuốc cản quang dội ngược ra tĩnh mạch chủ, làm hỏng hoàn toàn ca chụp.",
        citations: []
    },
    {
        id: 5204,
        en: "High-Resolution CT (HRCT) Lungs",
        vi: "[🫀 LỒNG NGỰC] CT Phổi phân giải cao (HRCT)",
        type: "Protocol",
        indications: "Bệnh phổi kẽ (ILD), xơ phổi, giãn phế quản, khí phế thũng, tổn thương dạng kính mờ (GGO) do Covid-19 hoặc lao.",
        basicSequences: "- KHÔNG tiêm thuốc cản quang.\n- Lát cắt siêu mỏng (1 - 1.5 mm).\n- Tái tạo bằng thuật toán sắc nét (Sharp / Edge-enhancing Kernel, VD: Siemens b80f hoặc lung kernel) để tăng tối đa chi tiết vách phế nang.\n- Cửa sổ phổi (WW: 1500, WL: -600).",
        advancedSequences: "1. Quét thì thở ra tối đa (Expiratory phase): Phát hiện bẫy khí (Air trapping) trong bệnh phổi tắc nghẽn.\n2. Nằm sấp (Prone position): Phân biệt vùng kính mờ ở đáy phổi là do ứ máu trọng lực (tư thế) hay là xơ hóa phổi kẽ thực sự.",
        notes: "Mấu chốt của HRCT là độ phân giải cực cao và nín thở tuyệt đối. Nếu bệnh nhân ho hoặc nhúc nhích, vi cấu trúc phổi sẽ bị nhòe và mất giá trị chẩn đoán.",
        citations: []
    },
    {
        id: 5205,
        en: "CT Coronary Angiography (CCTA)",
        vi: "[🫀 TIM MẠCH] CTA Mạch vành",
        type: "Protocol",
        indications: "Tầm soát hẹp mạch vành, đau thắt ngực không điển hình, nguy cơ mạch vành trung bình, đánh giá stent hoặc cầu nối chủ-vành (CABG).",
        basicSequences: "- Chụp không thuốc: Đo điểm vôi hóa mạch vành (Calcium Scoring) bằng thuật toán Agatston.\n- Chụp có thuốc: Đồng bộ nhịp tim (ECG-gating). Quét từ carina (trạc ba khí quản) đến hết đáy tim.\n- Lượng thuốc 60-80ml, tốc độ tiêm 5-6 ml/s.",
        advancedSequences: "Tái tạo cẩn thận từng pha nhịp tim (ví dụ 70% hoặc 75% R-R) để tìm pha tâm trương tim tĩnh lặng nhất. Dựng hình MPR cong (Curved MPR) dọc theo trục của LAD, LCx, RCA. Dựng hình 3D VRT cây mạch vành.",
        notes: "Yêu cầu khắt khe: \n1. Kiểm soát nhịp tim < 65 l/p, nhịp đều (Dùng thuốc chẹn Beta nếu cần).\n2. Cho bệnh nhân ngậm Nitroglycerin dưới lưỡi 3-5 phút trước khi bơm thuốc để làm giãn nở tối đa khẩu kính mạch vành.",
        citations: []
    },
    {
        id: 5206,
        en: "KUB CT (Kidneys, Ureters, Bladder)",
        vi: "[🫀 BỤNG CHẬU] CT Hệ tiết niệu không thuốc (KUB)",
        type: "Protocol",
        indications: "Cơn đau quặn thận điển hình, tìm sỏi đường tiết niệu, đánh giá thận ứ nước, niệu quản ứ nước do sỏi kẹt.",
        basicSequences: "- Quét KHÔNG thuốc cản quang toàn bộ vùng bụng chậu.\n- Giới hạn từ phía trên cực trên của thận đến hết bờ dưới khớp mu (để không sót sỏi kẹt ở bàng quang niệu đạo).\n- Lát cắt 3-5mm. Có thể giảm liều tia X (Low-dose CT) vì sỏi cản quang rất dễ nhìn thấy trên nền mỡ và cơ.",
        advancedSequences: "Tái tạo MPR mặt phẳng Coronal (Trán) và Sagittal (Đứng dọc) là bắt buộc. Mặt phẳng Coronal giúp bác sĩ nhìn thấy sự liên tục của niệu quản từ bể thận xuống bàng quang trên cùng một tấm phim.",
        notes: "Nên cho bệnh nhân uống 500ml nước và nhịn tiểu vừa phải (không quá căng) để bàng quang giãn nở. Bàng quang xẹp rất khó phân biệt sỏi kẹt ở lỗ niệu quản đổ vào bàng quang hay sỏi trong lòng bàng quang.",
        citations: []
    },
    {
        id: 5207,
        en: "Polytrauma CT (Pan-Scan)",
        vi: "[TOÀN THÂN] CT Đa chấn thương (Pan-Scan)",
        type: "Protocol",
        indications: "Tai nạn giao thông nghiêm trọng, đa chấn thương, ngã từ trên cao, sốc mất máu chưa rõ nguyên nhân.",
        basicSequences: "Chiến lược thông thường:\n1. Quét Sọ não và Cột sống cổ không thuốc (đánh giá xuất huyết sọ, gãy cổ).\n2. Tiêm thuốc cản quang (khoảng 100ml).\n3. Quét một lần duy nhất từ Đỉnh phổi xuống đến Khớp mu ở pha tĩnh mạch (khoảng 60-70s sau tiêm) để đánh giá vỡ tạng (gan, lách, thận), tràn máu màng phổi, vỡ khung chậu.",
        advancedSequences: "Tái tạo thần tốc cửa sổ Xương toàn thân (Sagittal cột sống, VRT khung chậu/sườn). Nếu có chảy máu rò rỉ (thoát mạch), có thể yêu cầu chụp thêm pha muộn 5 phút.",
        notes: "NGUYÊN TẮC 'THẦN TỐC VÀ SINH TỒN':\n- Không di chuyển bệnh nhân nhiều, chụp thẳng trên ván cứng (spine board) nếu cần.\n- Tuyệt đối KHÔNG tháo nẹp cổ khi chưa có kết quả loại trừ gãy cột sống cổ.\n- Phối hợp chặt chẽ với ekip cấp cứu hồi sức đang đứng cạnh máy.",
        citations: []
    }
];
