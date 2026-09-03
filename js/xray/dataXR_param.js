// CƠ SỞ DỮ LIỆU X-QUANG - PHẦN THÔNG SỐ VÀ VẬT LÝ
export const xrayParamData = [
    // --- 30 THUẬT NGỮ CƠ BẢN VÀ VẬT LÝ TIA X ---
    {
        id: 8001,
        en: "Tube Voltage (kVp)",
        vi: "Điện thế bóng X-Quang (kVp)",
        type: "Parameter",
        description: "Quyết định động năng của chùm electron bắn vào Anode, từ đó quyết định chất lượng (độ đâm xuyên) của chùm tia X. kVp càng cao, độ đâm xuyên càng mạnh, độ tương phản ảnh càng giảm (thang xám dài).",
        parameters: "- Ứng dụng lâm sàng:\n1. Chụp ngực (Chest): kVp cao (100 - 120 kVp) để tia X đâm xuyên qua xương sườn, thấy rõ nhu mô phổi và trung thất.\n2. Chụp xương chi (Extremities): kVp thấp (50 - 65 kVp) để tối đa hóa độ tương phản trắng-đen, nhìn rõ bè xương và đường gãy.",
        citations: []
    },
    {
        id: 8002,
        en: "Tube Current-Time Product (mAs)",
        vi: "Dòng hằng số bóng (mAs)",
        type: "Parameter",
        description: "Quyết định số lượng photon tia X được phát ra (số lượng tia X). mAs là yếu tố chính quyết định độ đen của phim (Density) và trực tiếp quyết định liều bức xạ bệnh nhân nhận.",
        parameters: "- Ứng dụng lâm sàng:\n1. Tăng mAs sẽ làm phim đen hơn và giảm nhiễu lượng tử (Quantum mottle).\n2. Chụp các vùng dày (Bụng, Cột sống thắt lưng): Cần mAs cao (40 - 80 mAs).\n3. Chụp các vùng mỏng (Bàn tay, Bàn chân): Cần mAs thấp (2 - 5 mAs).",
        citations: []
    },
    {
        id: 8003,
        en: "Source-to-Image Distance (SID)",
        vi: "Khoảng cách Bóng - Phim (SID)",
        type: "Parameter",
        description: "Là khoảng cách từ tiêu điểm phát tia (Focal spot) đến bộ phận thu nhận ảnh (Detector/Cassette). SID ảnh hưởng đến độ phóng đại hình học và độ sắc nét của hình ảnh.",
        parameters: "- Ứng dụng lâm sàng:\n1. SID chuẩn thường quy: 100 cm (40 inches) cho hầu hết các kỹ thuật chụp xương, bụng, cột sống.\n2. SID chụp phổi (Chest PA): 180 cm (72 inches) để giảm thiểu bóng tim to giả tạo do hiện tượng phóng đại hình học.",
        citations: []
    },
    {
        id: 8004,
        en: "Object-to-Image Distance (OID)",
        vi: "Khoảng cách Vật - Phim (OID)",
        type: "Parameter",
        description: "Là khoảng cách từ bộ phận cơ thể cần chụp đến bề mặt phim/detector. Nguyên tắc cơ bản: OID càng lớn, hình ảnh càng bị phóng đại và càng bị mờ viền (Penumbra).",
        parameters: "- Ứng dụng lâm sàng:\n1. Luôn cố gắng đặt vùng cần chụp áp sát nhất có thể vào mâm detector (OID = 0).\n2. Ngoại lệ: Kỹ thuật Macroradiography (phóng đại) cố tình tăng OID để phóng to vi cấu trúc xương, kết hợp với tiêu điểm cực nhỏ để chống mờ.",
        citations: []
    },
    {
        id: 8005,
        en: "Anti-scatter Grid",
        vi: "Lưới chống mờ (Grid)",
        type: "Parameter",
        description: "Là một tấm lọc đặt giữa bệnh nhân và detector, cấu tạo bởi các lá chì xen kẽ vật liệu cản quang thấp. Mục đích là hấp thụ các tia X tán xạ (bị đổi hướng khi đi qua cơ thể), giúp tăng độ tương phản của phim.",
        parameters: "- Ứng dụng lâm sàng:\n1. BẮT BUỘC dùng khi chụp các vùng cơ thể dày > 10cm (Bụng, Sọ, Cột sống, Khung chậu).\n2. KHÔNG DÙNG khi chụp các chi nhỏ (bàn tay, cổ tay, bàn chân) để giảm liều tia, vì vùng mỏng ít sinh tia tán xạ.\n3. Lưu ý: Khi dùng Grid, bắt buộc phải tăng mAs lên (2-4 lần) để bù đắp lượng tia bị lưới hấp thụ.",
        citations: []
    },
    {
        id: 8006,
        en: "Focal Spot Size",
        vi: "Kích thước tiêu điểm phát tia",
        type: "Parameter",
        description: "Kích thước của vùng trên Anode nơi chùm electron va đập sinh ra tia X. Tiêu điểm càng nhỏ, hình ảnh càng sắc nét (giảm vùng mờ nửa tối Penumbra).",
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu điểm nhỏ (Small Focus - 0.3-0.6mm): Dùng chụp các chi tiết tinh tế (Xương bàn tay, ngón chân, vi hóa vú). Bị giới hạn mAs tối đa để tránh chảy Anode.\n2. Tiêu điểm lớn (Large Focus - 1.0-1.2mm): Dùng chụp các vùng lớn cần mAs cao (Bụng, Cột sống thắt lưng, Khung chậu, Bệnh nhân béo phì).",
        citations: []
    },
    {
        id: 8007,
        en: "Automatic Exposure Control (AEC)",
        vi: "Hệ thống kiểm soát liều tự động (AEC)",
        type: "Parameter",
        description: "Hệ thống sử dụng các buồng ion hóa (Ionization Chambers) đặt trước hoặc sau detector để tự động ngắt thời gian phát tia (Time) khi đã thu đủ lượng photon cần thiết để tạo ra hình ảnh chuẩn.",
        parameters: "- Ứng dụng lâm sàng:\n1. Bắt buộc KTV phải định vị đúng vùng giải phẫu cần chụp vào đúng buồng ion hóa (ví dụ: Chụp phổi PA chọn 2 buồng hai bên, chụp cột sống chọn buồng trung tâm).\n2. Không dùng AEC khi bệnh nhân có mảnh ghép kim loại lớn (khớp giả), vì kim loại che tia sẽ làm AEC đánh giá sai, phát tia quá lố (quá liều).",
        citations: []
    },
    {
        id: 8008,
        en: "Anode Heel Effect",
        vi: "Hiệu ứng gót Anode",
        type: "Parameter",
        description: "Hiện tượng cường độ chùm tia X không đồng đều, bị suy giảm ở phía cực dương (Anode) và mạnh hơn ở phía cực âm (Cathode) do tia X bị hấp thụ một phần bởi chính góc nghiêng của mâm Anode.",
        parameters: "- Ứng dụng lâm sàng:\n1. Nguyên tắc xếp tư thế: Luôn đặt phần cơ thể dày hơn hoặc đặc hơn về phía Cathode để lợi dụng chùm tia mạnh.\n2. Ví dụ: Chụp X-quang xương đùi (Femur), đặt gốc đùi (dày) ở phía Cathode, đầu gối (mỏng) ở phía Anode để độ đen phim đều nhau.",
        citations: []
    },
    {
        id: 8009,
        en: "Inverse Square Law",
        vi: "Định luật bình phương nghịch đảo",
        type: "Parameter",
        description: "Định luật vật lý cốt lõi: Cường độ bức xạ tỷ lệ nghịch với bình phương khoảng cách từ nguồn phát. Nếu tăng khoảng cách gấp đôi, cường độ tia X (và liều bức xạ) giảm đi 4 lần.",
        parameters: "- Ứng dụng lâm sàng:\n1. An toàn bức xạ: KTV chỉ cần lùi xa thêm một chút khỏi nguồn tia tán xạ là liều nhận được giảm đáng kể.\n2. Kỹ thuật chụp: Nếu thay đổi SID từ 100cm lên 200cm, KTV phải tăng mAs lên gấp 4 lần để giữ nguyên độ đen của phim.",
        citations: []
    },
    {
        id: 8010,
        en: "X-ray Filtration / Half-Value Layer (HVL)",
        vi: "Lọc tia X / Lớp hấp thụ một nửa (HVL)",
        type: "Parameter",
        description: "Việc sử dụng các tấm nhôm (Al) hoặc đồng (Cu) để chặn lại các tia X mang năng lượng thấp (tia mềm). Tia mềm không có khả năng đâm xuyên qua cơ thể để tạo ảnh mà chỉ bị da hấp thụ gây ung thư.",
        parameters: "- Ứng dụng lâm sàng:\n1. Làm 'cứng' chùm tia, tăng năng lượng trung bình của chùm tia X.\n2. Theo tiêu chuẩn an toàn, bóng X-quang thường quy phải có độ lọc tương đương tối thiểu 2.5 mm Nhôm (Al).\n3. HVL là độ dày của vật liệu cần thiết để giảm một nửa cường độ chùm tia, dùng để đánh giá chất lượng chùm tia trong kiểm định máy.",
        citations: []
    },
    {
        id: 8011,
        en: "Collimation",
        vi: "Khu trú chùm tia (Collimation)",
        type: "Parameter",
        description: "Việc sử dụng hệ thống cửa sổ bằng chì (Collimator) ngay dưới bóng phát tia để giới hạn trường chiếu (Field of View) vừa khít với vùng giải phẫu cần khảo sát.",
        parameters: "- Ứng dụng lâm sàng:\n1. Nguyên tắc vàng: Chỉ mở Collimator vừa đủ vùng cần chụp. Tuyệt đối không mở hết cỡ.\n2. Lợi ích kép: Vừa giảm thiểu diện tích cơ thể bị chiếu xạ (bảo vệ bệnh nhân), vừa giảm lượng tia tán xạ sinh ra (tăng độ tương phản và sắc nét cho phim).",
        citations: []
    },
    {
        id: 8012,
        en: "Quantum Mottle (Image Noise)",
        vi: "Nhiễu lượng tử (Quantum Mottle)",
        type: "Parameter",
        description: "Hiện tượng hình ảnh bị lốm đốm, nhiễu hạt (grainy) do số lượng photon tia X đập vào detector không đủ để tạo ra một tín hiệu đồng nhất.",
        parameters: "- Ứng dụng lâm sàng:\n1. Nguyên nhân chính: Đặt mAs quá thấp (thiếu tia).\n2. Cách khắc phục: Tăng mAs (tăng số lượng photon). Tuy nhiên phải đánh đổi bằng việc tăng liều bức xạ cho bệnh nhân.\n3. Thường gặp ở bệnh nhân béo phì hoặc máy DR chất lượng thấp.",
        citations: []
    },
    {
        id: 8013,
        en: "Exposure Indicator (EI / DI)",
        vi: "Chỉ số phơi nhiễm (EI)",
        type: "Parameter",
        description: "Trong X-quang kỹ thuật số (CR/DR), EI là một con số hiển thị trên màn hình cho biết lượng tia X mà detector đã nhận được. Do DR có khả năng tự động bù trừ độ sáng tối, KTV không thể nhìn bằng mắt thường để biết phim có bị dư tia (quá liều) hay không mà phải nhìn vào EI.",
        parameters: "- Ứng dụng lâm sàng:\n1. Mỗi hãng có chuẩn EI khác nhau: Agfa (S-value tỷ lệ nghịch), Fuji/Konica (S-number tỷ lệ nghịch), Carestream (lgM tỷ lệ thuận).\n2. Deviation Index (DI): Là chỉ số độ lệch chuẩn mới. DI = 0 là hoàn hảo. DI > +3 là quá liều nặng. DI < -3 là thiếu tia nặng (nhiễu hạt).",
        citations: []
    },
    {
        id: 8014,
        en: "Look-Up Table (LUT)",
        vi: "Bảng tham chiếu thuật toán (LUT)",
        type: "Parameter",
        description: "Bảng dữ liệu toán học trong phần mềm máy X-quang kỹ thuật số dùng để ánh xạ các giá trị pixel thô thành các độ sáng hiển thị cuối cùng trên màn hình.",
        parameters: "- Ứng dụng lâm sàng:\n1. LUT định hình độ tương phản đặc trưng cho từng bộ phận cơ thể. Ví dụ: LUT của X-quang Ngực sẽ tăng độ tương phản vùng mô mềm, LUT của X-quang Xương sẽ tăng độ tương phản rìa xương.\n2. KTV chọn sai quy trình (Ví dụ chụp Ngực nhưng chọn menu Bụng trên máy tính) sẽ áp dụng sai LUT, làm hình ảnh xấu đi.",
        citations: []
    },
    {
        id: 8015,
        en: "Spatial Resolution",
        vi: "Độ phân giải không gian",
        type: "Parameter",
        description: "Khả năng của hệ thống tạo ảnh trong việc phân biệt hai cấu trúc nhỏ, nằm sát nhau dưới dạng hai vật thể riêng biệt. Đơn vị đo là cặp đường/mm (lp/mm).",
        parameters: "- Ứng dụng lâm sàng:\n1. Các yếu tố làm TĂNG độ phân giải không gian: Tiêu điểm nhỏ (Small focal spot), SID dài, OID ngắn, kích thước pixel của detector nhỏ.\n2. Yếu tố làm GIẢM độ phân giải: Sự chuyển động của bệnh nhân (hô hấp, run) là nguyên nhân số 1 gây nhòe mờ không gian.",
        citations: []
    },
    {
        id: 8016,
        en: "Contrast Resolution",
        vi: "Độ phân giải tương phản",
        type: "Parameter",
        description: "Khả năng phân biệt sự khác biệt nhỏ về sắc xám giữa các mô có mật độ cản quang gần giống nhau (ví dụ: mỡ và cơ, hoặc khối u và nhu mô tuyến vú).",
        parameters: "- Ứng dụng lâm sàng:\n1. Hệ thống X-quang kỹ thuật số (DR) có độ phân giải tương phản vượt trội so với X-quang phim rửa truyền thống.\n2. kVp thấp giúp tăng độ tương phản (Contrast) rõ rệt. Sử dụng lưới Grid cũng làm tăng độ tương phản bằng cách dập tia tán xạ.",
        citations: []
    },
    {
        id: 8017,
        en: "Signal-to-Noise Ratio (SNR)",
        vi: "Tỷ số tín hiệu trên nhiễu (SNR)",
        type: "Parameter",
        description: "Tỷ lệ giữa tín hiệu hữu ích (Signal - mang thông tin chẩn đoán) và tín hiệu rác/nhiễu (Noise). SNR càng cao, hình ảnh càng mịn màng và rõ nét.",
        parameters: "- Ứng dụng lâm sàng:\n1. Tăng mAs sẽ làm tăng trực tiếp tín hiệu (Signal), do đó tăng SNR, nhưng gây tăng liều bức xạ.\n2. Hệ thống DR chất lượng cao có cảm biến xịn (như Csi - Cesium Iodide) sẽ có SNR cao hơn so với hệ thống cũ ở cùng một liều tia.",
        citations: []
    },
    {
        id: 8018,
        en: "Detective Quantum Efficiency (DQE)",
        vi: "Hiệu suất nhận diện lượng tử (DQE)",
        type: "Parameter",
        description: "Thước đo hiệu suất của hệ thống Detector DR/CR trong việc chuyển đổi năng lượng tia X thành tín hiệu hình ảnh. DQE là chỉ số kỹ thuật quan trọng nhất đánh giá chất lượng máy X-quang.",
        parameters: "- Ứng dụng lâm sàng:\n1. Máy có DQE cao (như mâm DR Flat Panel loại Cesium Iodide) cho phép KTV chụp với mức mAs rất thấp (giảm liều tia) mà hình ảnh vẫn mịn màng.\n2. DQE của DR (Digital Radiography) luôn cao hơn hệ thống CR (Computed Radiography dùng Cassette).",
        citations: []
    },
    {
        id: 8019,
        en: "Modulation Transfer Function (MTF)",
        vi: "Hàm truyền biến điệu (MTF)",
        type: "Parameter",
        description: "Một biểu đồ đánh giá độ trung thực của toàn bộ hệ thống hình ảnh. MTF đo lường mức độ bảo toàn độ tương phản của vật thể khi truyền tải thành hình ảnh kỹ thuật số ở các kích thước chi tiết khác nhau.",
        parameters: "- Ứng dụng lâm sàng:\n1. Thường dùng trong bảo trì và kiểm định chất lượng máy (QA/QC).\n2. MTF lý tưởng là 1.0 (100%). Ở tần số không gian cao (vật thể rất nhỏ), MTF luôn có xu hướng giảm về 0 (nhòe hoàn toàn).",
        citations: []
    },
    {
        id: 8020,
        en: "Matrix Size & Pixel Pitch",
        vi: "Kích thước Ma trận & Pixel",
        type: "Parameter",
        description: "Hình ảnh số được cấu tạo bởi một lưới (Ma trận) các điểm ảnh (Pixel). \n- Matrix = số hàng x số cột (VD: 2048 x 2048).\n- Pixel Pitch = khoảng cách vật lý giữa tâm của 2 pixel liền kề trên detector.",
        parameters: "- Ứng dụng lâm sàng:\n1. Ma trận càng lớn, số lượng Pixel càng nhiều, kích thước Pixel càng nhỏ -> Độ phân giải không gian càng cao, hình ảnh càng nét.\n2. Các mâm DR hiện đại thường có kích thước pixel khoảng 100 - 150 micromet.",
        citations: []
    },
    {
        id: 8021,
        en: "Bit Depth",
        vi: "Độ sâu bit màu",
        type: "Parameter",
        description: "Số lượng bit dữ liệu dùng để mã hóa màu sắc (độ xám) cho một pixel. Xác định số lượng sắc độ xám tối đa mà máy có thể hiển thị.",
        parameters: "- Ứng dụng lâm sàng:\n1. X-quang số thường dùng 12-bit (4096 sắc xám) hoặc 14-bit (16384 sắc xám).\n2. Độ sâu bit càng lớn, độ phân giải tương phản càng mượt mà, giúp phần mềm (và bác sĩ) dễ dàng điều chỉnh cửa sổ sáng tối (Windowing) để tìm tổn thương ẩn.",
        citations: []
    },
    {
        id: 8022,
        en: "Compton Scattering",
        vi: "Tán xạ Compton",
        type: "Parameter",
        description: "Là tương tác phổ biến nhất giữa tia X mang năng lượng cao và mô cơ thể. Photon tia X đập vào electron lớp ngoài, làm văng electron này ra và bản thân photon bị lệch hướng, mất một phần năng lượng.",
        parameters: "- Ứng dụng lâm sàng:\n1. Tán xạ Compton là KẺ THÙ của phim X-quang vì nó tạo ra các tia X chệch hướng đập vào phim gây mù mờ, làm giảm trầm trọng độ tương phản.\n2. Tán xạ Compton cũng là nguyên nhân CHÍNH gây phơi nhiễm bức xạ nghề nghiệp cho KTV đang đứng trong phòng chụp.",
        citations: []
    },
    {
        id: 8023,
        en: "Photoelectric Effect",
        vi: "Hiệu ứng quang điện",
        type: "Parameter",
        description: "Photon tia X đập vào electron lớp trong cùng của nguyên tử (lớp K), truyền toàn bộ năng lượng cho electron này và biến mất hoàn toàn (hấp thụ toàn phần).",
        parameters: "- Ứng dụng lâm sàng:\n1. Đây là tương tác TẠO RA SỰ TƯƠNG PHẢN hình ảnh. Xương hấp thụ tia X (quang điện) nhiều hơn mô mềm, nên xương có màu trắng trên phim.\n2. Xảy ra nhiều nhất ở dải kVp thấp (50-70 kVp) và ở các nguyên tố có số nguyên tử Z cao (như Xương, Bari, I-ốt). Tăng hiệu ứng quang điện đồng nghĩa với tăng liều hấp thụ của bệnh nhân.",
        citations: []
    },
    {
        id: 8024,
        en: "Bremsstrahlung Radiation",
        vi: "Bức xạ hãm (Bức xạ liên tục)",
        type: "Parameter",
        description: "Cơ chế sinh tia X chính trong bóng phát tia. Electron từ Cathode bay với tốc độ cao, khi đi ngang qua hạt nhân nguyên tử Tungsten (Anode), bị lực hút tĩnh điện làm bẻ cong quỹ đạo và phanh đột ngột. Năng lượng mất đi do phanh được phát ra dưới dạng photon tia X.",
        parameters: "- Ứng dụng lâm sàng:\n1. Chiếm khoảng 85-90% tổng số tia X được sinh ra trong dải điện thế thường quy.\n2. Tạo ra chùm tia X có phổ năng lượng liên tục (đa sắc), từ năng lượng 0 cho đến mức năng lượng tối đa bằng đúng chỉ số kVp KTV đã cài đặt.",
        citations: []
    },
    {
        id: 8025,
        en: "Characteristic Radiation",
        vi: "Bức xạ đặc trưng",
        type: "Parameter",
        description: "Cơ chế sinh tia thứ hai. Electron đạn đạo bắn văng một electron lớp K của nguyên tử Tungsten. Electron lớp ngoài nhảy vào lấp chỗ trống. Sự chênh lệch năng lượng giữa 2 lớp vỏ được giải phóng dưới dạng tia X có bước sóng cố định.",
        parameters: "- Ứng dụng lâm sàng:\n1. Với bóng tia X bằng Tungsten (Wolfram), bức xạ đặc trưng chỉ xuất hiện khi KTV cài đặt kVp >= 69.5 kVp.\n2. Tạo ra chùm tia đơn sắc, chiếm khoảng 10-15% tổng năng lượng chùm tia X.",
        citations: []
    },
    {
        id: 8026,
        en: "Line Focus Principle",
        vi: "Nguyên lý tiêu điểm đường",
        type: "Parameter",
        description: "Kỹ thuật vát nghiêng mặt bia Anode (thường từ 12 - 17 độ). Nhờ độ nghiêng này, 'tiêu điểm thực' (nơi electron va đập) có thể làm rất lớn để tản nhiệt tốt, nhưng 'tiêu điểm hiệu dụng' (kích thước chùm tia X hắt xuống bệnh nhân) lại thu hẹp lại, giúp tăng độ sắc nét.",
        parameters: "- Ứng dụng lâm sàng:\n1. Giải quyết bài toán đánh đổi giữa khả năng tản nhiệt của bóng và độ phân giải của hình ảnh.\n2. Tác dụng phụ của nguyên lý này chính là sinh ra Hiệu ứng gót Anode (Anode Heel Effect).",
        citations: []
    },
    {
        id: 8027,
        en: "Thermionic Emission",
        vi: "Phát xạ nhiệt điện tử",
        type: "Parameter",
        description: "Hiện tượng xảy ra tại cực âm (Cathode). Sợi dây tóc (Filament) bằng Tungsten được đun nóng bằng dòng điện phụ, làm các electron dao động mạnh và bứt ra khỏi bề mặt kim loại, tạo thành một 'đám mây electron' bay lơ lửng chờ được gia tốc.",
        parameters: "- Ứng dụng lâm sàng:\n1. KTV điều khiển quá trình này bằng cách tăng/giảm nút mAs trên bảng điều khiển. Tăng mA -> tăng dòng điện nung dây tóc -> mây electron dày đặc hơn -> sinh ra nhiều tia X hơn.",
        citations: []
    },
    {
        id: 8028,
        en: "Ionization Chamber",
        vi: "Buồng ion hóa",
        type: "Parameter",
        description: "Là các cảm biến đo lường bức xạ trống rỗng chứa khí, đặt giữa bệnh nhân và cảm biến hình ảnh DR. Khi tia X đi qua làm ion hóa khí, tạo ra dòng điện báo hiệu lượng tia đã đi qua.",
        parameters: "- Ứng dụng lâm sàng:\n1. Là trái tim của hệ thống ngắt tia tự động AEC.\n2. Tại bàn điều khiển, KTV thường thấy biểu tượng 3 ô vuông/tròn (Trái - Giữa - Phải). Phải tick chọn đúng buồng tương ứng với cơ quan cần chụp.",
        citations: []
    },
    {
        id: 8029,
        en: "Magnification (Size Distortion)",
        vi: "Phóng đại hình học",
        type: "Parameter",
        description: "Hình ảnh chiếu trên phim luôn lớn hơn kích thước vật thể thực tế do chùm tia X phát ra từ một điểm (tiêu điểm) hình nón phân kỳ.",
        parameters: "- Ứng dụng lâm sàng:\n1. Muốn hình ảnh có kích thước thật nhất (tỷ lệ 1:1): Phải kéo dài SID tối đa và rút ngắn OID tối thiểu.\n2. Ứng dụng để ước lượng kích thước tim trong phim ngực: Vì tim nằm ở lồng ngực trước, chụp PA (trước-sau) sẽ ép tim sát phim (OID nhỏ) -> Bóng tim không bị phóng đại to giả tạo như chụp AP (sau-trước).",
        citations: []
    },
    {
        id: 8030,
        en: "Shape Distortion (Elongation & Foreshortening)",
        vi: "Biến dạng hình dáng (Kéo dài & Rút ngắn)",
        type: "Parameter",
        description: "Sự thay đổi tỷ lệ hình dáng vật thể trên phim so với thực tế do lỗi định vị góc tia hoặc vị trí bệnh nhân không song song với mâm phim.",
        parameters: "- Ứng dụng lâm sàng:\n1. Foreshortening (Rút ngắn): Xảy ra khi vật thể nằm nghiêng (không song song) với phim, trong khi tia X vẫn vuông góc phim.\n2. Elongation (Kéo dài): Xảy ra khi bẻ góc bóng tia X chiếu chếch vào vật thể.\n3. KTV đôi khi chủ động bẻ góc tia (Ví dụ: Chụp xương gót Axial bẻ góc 40 độ) để tránh chồng lấp các khớp, chấp nhận sự biến dạng kéo dài.",
        citations: []
    },

    // --- 20 THUẬT NGỮ MỚI (CHỈ SỐ AN TOÀN, CÔNG NGHỆ DR/CR, XẢO ẢNH) ---
    {
        id: 8031,
        en: "Entrance Surface Dose (ESD)",
        vi: "Liều bề mặt lối vào (ESD)",
        type: "Parameter",
        description: "Liều bức xạ hấp thụ đo trực tiếp tại bề mặt da của bệnh nhân nơi chùm tia X đi vào (đã bao gồm cả tia tán xạ ngược từ cơ thể). Đây là chỉ số quan trọng để đánh giá nguy cơ tổn thương da (như bỏng rát, rụng lông) trong các thủ thuật tia X kéo dài.",
        parameters: "- Ứng dụng lâm sàng:\n1. Thường được sử dụng để thiết lập các Mức liều tham chiếu chẩn đoán (DRL) cho các thao tác X-quang thường quy.\n2. Nếu bệnh nhân béo phì, ESD sẽ tăng vọt vì máy (AEC) phải tăng liều để đâm xuyên qua lớp mỡ dày.",
        citations: []
    },
    {
        id: 8032,
        en: "Dose Area Product (DAP)",
        vi: "Tích số liều diện tích (DAP / KAP)",
        type: "Parameter",
        description: "Đại lượng đo lường tổng lượng năng lượng bức xạ phát ra từ bóng tia X hắt vào cơ thể. Bằng cách nhân liều bức xạ trong không khí (Kerma) với diện tích trường chiếu tia (Field of view). Đơn vị thường dùng: Gy.cm2.",
        parameters: "- Ứng dụng lâm sàng:\n1. Là chỉ số chuẩn mực nhất để đánh giá nguy cơ ung thư bức xạ rủi ro ngẫu nhiên (Stochastic effect) do tia X.\n2. Cách giảm DAP hiệu quả nhất không phải là giảm mAs, mà là KHÉP CỬA SỔ CHÌ (Collimation) nhỏ lại vừa khít với cơ quan cần chụp.",
        citations: []
    },
    {
        id: 8033,
        en: "Air Kerma",
        vi: "Kerma không khí",
        type: "Parameter",
        description: "Kinetic Energy Released per unit MAss (Động năng giải phóng trên mỗi đơn vị khối lượng). Đại lượng đo lường cường độ của chùm tia X trong không khí (trước khi tương tác với cơ thể), phản ánh năng lượng được chuyển giao từ photon sang các hạt mang điện trong không khí.",
        parameters: "- Ứng dụng lâm sàng:\n1. Dùng làm đại lượng chuẩn trong kiểm định thiết bị phát tia X (Calibration).\n2. Máy X-quang kỹ thuật số hiện đại và C-arm thường hiển thị thông số Air Kerma tích lũy song song với DAP trên màn hình.",
        citations: []
    },
    {
        id: 8034,
        en: "Penumbra (Geometric Unsharpness)",
        vi: "Vùng mờ nửa tối (Độ mờ hình học)",
        type: "Parameter",
        description: "Khoảng mờ nhòe ở bờ viền xung quanh hình ảnh của vật thể trên phim. Hiện tượng này xảy ra do tia X được phát ra từ một 'diện tích' tiêu điểm chứ không phải từ một 'điểm' tuyệt đối toán học.",
        parameters: "- Ứng dụng lâm sàng:\n1. Để cắt giảm vùng mờ Penumbra (tăng độ sắc nét): KTV phải chọn tiêu điểm nhỏ (Small Focus), tăng tối đa khoảng cách SID, và giảm thiểu tối đa khoảng cách OID (ép bệnh nhân sát vào mâm phim).",
        citations: []
    },
    {
        id: 8035,
        en: "Umbra",
        vi: "Vùng tối hoàn toàn",
        type: "Parameter",
        description: "Phần cốt lõi, sắc nét và đen nhất của cái bóng đổ xuống phim (Hình ảnh thực sự của bộ phận cơ thể), nơi mà bức xạ bị chặn lại hoàn toàn không thể chạm tới detector.",
        parameters: "- Ứng dụng lâm sàng:\n1. KTV hình ảnh phải luôn tối đa hóa diện tích Umbra và triệt tiêu diện tích Penumbra để thu được ảnh có độ phân giải không gian cao nhất.",
        citations: []
    },
    {
        id: 8036,
        en: "Scatter Radiation",
        vi: "Bức xạ tán xạ",
        type: "Parameter",
        description: "Các photon tia X sau khi va chạm với vật chất (chủ yếu là bệnh nhân do hiệu ứng Compton) bị đổi hướng lung tung. Tia tán xạ bay ra ngoài không mang theo thông tin hình ảnh hữu ích nào.",
        parameters: "- Ứng dụng lâm sàng:\n1. Tác hại 1: Đập vào phim gây ra màn sương mù (fog), làm suy giảm trầm trọng độ tương phản. Xử lý bằng cách dùng Lưới chống mờ (Grid).\n2. Tác hại 2: Bắn vào người KTV hoặc bác sĩ đứng gần. Xử lý bằng cách mặc áo chì, đứng sau bình phong chì.",
        citations: []
    },
    {
        id: 8037,
        en: "Leakage Radiation",
        vi: "Bức xạ rò rỉ",
        type: "Parameter",
        description: "Tia X xuyên thoát ra khỏi vỏ bọc bảo vệ của đầu bóng X-quang (Tube housing) ở các hướng không mong muốn (không đi qua cửa sổ phát tia).",
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu chuẩn an toàn quốc tế yêu cầu lượng tia rò rỉ không được vượt quá 1 mGy/giờ ở khoảng cách 1 mét từ nguồn phát, ngay cả khi phát tia ở mức công suất tối đa.\n2. Đây là lý do KTV không được tự ý ôm sát tay vào đầu bóng phát tia trong lúc máy đang hoạt động.",
        citations: []
    },
    {
        id: 8038,
        en: "Computed Radiography (CR)",
        vi: "X-quang điện toán (CR)",
        type: "Parameter",
        description: "Thế hệ X-quang số đời đầu. Sử dụng một tấm cassette (chứa màng Phosphor) để ghi nhận tia X. Sau khi chụp, KTV phải đem cassette này cắm vào máy quét (Digitizer). Tia laser trong máy quét sẽ kích thích màng Phosphor phát sáng, sau đó bộ phận quang điện sẽ chuyển ánh sáng thành ảnh số.",
        parameters: "- Ứng dụng lâm sàng:\n1. Tốc độ làm việc chậm (mất khoảng 1-2 phút quét mỗi tấm phim).\n2. Chất lượng hình ảnh (DQE, SNR) thấp hơn so với DR, dẫn đến liều tia chụp thường cao hơn DR khoảng 20-30% để đạt được độ nét tương đương.",
        citations: []
    },
    {
        id: 8039,
        en: "Digital Radiography (DR)",
        vi: "X-quang kỹ thuật số (DR)",
        type: "Parameter",
        description: "Công nghệ tiên tiến nhất. Sử dụng một mâm nhận ảnh dạng phẳng (Flat Panel Detector - FPD) cố định hoặc không dây. FPD thu nhận tia X và lập tức chuyển đổi thành tín hiệu điện tử, hiển thị hình ảnh trực tiếp lên màn hình máy tính chỉ trong 1-3 giây.",
        parameters: "- Ứng dụng lâm sàng:\n1. Tốc độ công việc cực nhanh, hoàn hảo cho cấp cứu và hồi sức.\n2. Hiệu suất nhận tia (DQE) rất cao, cho phép KTV chụp với mức liều phóng xạ thấp (Low Dose) mà hình ảnh vẫn mịn đẹp xuất sắc.",
        citations: []
    },
    {
        id: 8040,
        en: "Photostimulable Phosphor (PSP) Plate",
        vi: "Tấm lưu ảnh phosphor kích thích quang",
        type: "Parameter",
        description: "Trái tim của tấm Cassette trong hệ thống X-quang CR. Khi tia X đập vào, các electron trong lớp Phosphor (Bari Fluorohalide) sẽ nhảy lên trạng thái năng lượng cao và bị mắc kẹt lại, tạo thành 'hình ảnh tiềm tàng' (Latent image).",
        parameters: "- Ứng dụng lâm sàng:\n1. Hình ảnh tiềm tàng này sẽ mờ dần theo thời gian. Do đó KTV phải đem cassette đi quét (đọc phim) trong vòng tối đa 8 tiếng sau khi chụp.\n2. Sau khi quét xong, tấm PSP sẽ bị xóa sạch bằng ánh sáng trắng cường độ cao để tái sử dụng.",
        citations: []
    },
    {
        id: 8041,
        en: "Thin-Film Transistor (TFT) Array",
        vi: "Mảng bóng bán dẫn màng mỏng",
        type: "Parameter",
        description: "Một mạng lưới mạch điện tử ma trận được in trên nền thủy tinh, nằm ngay dưới lớp cảm biến của mâm DR. Mỗi ô vuông nhỏ trên lưới TFT tương ứng với một Pixel. Nó chịu trách nhiệm 'thu gom' và 'vận chuyển' dòng điện sinh ra từ tia X về bộ vi xử lý.",
        parameters: "- Ứng dụng lâm sàng:\n1. TFT là bộ phận cốt lõi định hình kích thước pixel (Pixel pitch) của mâm DR.\n2. Thành phần này rất nhạy cảm với va đập vật lý. Nếu làm rơi mâm DR, mảng TFT có thể bị nứt, tạo ra các đường xảo ảnh (artifact) chết điểm vĩnh viễn trên hình ảnh.",
        citations: []
    },
    {
        id: 8042,
        en: "Scintillator (Cesium Iodide / Gadolinium Oxysulfide)",
        vi: "Lớp nhấp nháy chuyển đổi ánh sáng",
        type: "Parameter",
        description: "Lớp hóa chất phủ trên mâm DR chuyển đổi gián tiếp (Indirect DR). Khi tia X đập vào, chất này sẽ lóe sáng (phát ra ánh sáng nhìn thấy). Cesium Iodide (CsI) cấu trúc tinh thể dạng ống dẫn sáng nên giữ độ sắc nét tốt hơn Gadolinium dạng hạt.",
        parameters: "- Ứng dụng lâm sàng:\n1. Máy DR sử dụng CsI là chuẩn mực cao cấp nhất hiện nay trong X-quang và Mammography nhờ hiệu suất DQE ưu việt, cho phép chụp liều tia siêu thấp.",
        citations: []
    },
    {
        id: 8043,
        en: "Direct Conversion DR (Amorphous Selenium)",
        vi: "DR chuyển đổi trực tiếp",
        type: "Parameter",
        description: "Sử dụng mâm cảm biến phủ Selenium vô định hình (a-Se). Tia X đập vào mâm sẽ lập tức bứt electron và sinh ra dòng điện ngay tại chỗ (không thông qua bước chuyển thành ánh sáng).",
        parameters: "- Ứng dụng lâm sàng:\n1. Do không có sự khuếch tán ánh sáng (nhòe ánh sáng), DR trực tiếp có độ phân giải không gian cực kỳ tuyệt vời.\n2. Tuy nhiên, Selenium kém nhạy với tia X năng lượng cao, nên công nghệ này ít dùng trong X-quang phổi/bụng mà được ứng dụng độc quyền trong Chụp Nhũ Ảnh (Mammography - dùng tia X năng lượng thấp).",
        citations: []
    },
    {
        id: 8044,
        en: "Indirect Conversion DR (Amorphous Silicon)",
        vi: "DR chuyển đổi gián tiếp",
        type: "Parameter",
        description: "Quy trình tạo ảnh qua 2 bước: Tia X đập vào lớp nhấp nháy (Scintillator) biến thành ánh sáng -> Ánh sáng đập vào lớp Silicon vô định hình (a-Si) biến thành dòng điện -> Dòng điện đi vào mảng TFT để vẽ hình.",
        parameters: "- Ứng dụng lâm sàng:\n1. Dù bị nhòe ánh sáng nhẹ ở bước 1, nhưng công nghệ này có độ bền cao, giá thành hợp lý và độ nhạy tia X xuất sắc.\n2. Gần 90% các máy X-quang DR thường quy tại các bệnh viện hiện nay đều sử dụng công nghệ chuyển đổi gián tiếp (CsI + a-Si).",
        citations: []
    },
    {
        id: 8045,
        en: "PACS (Picture Archiving and Communication System)",
        vi: "Hệ thống lưu trữ và truyền hình ảnh y tế",
        type: "Parameter",
        description: "Siêu máy chủ mạng lưới máy tính trong bệnh viện chuyên dụng để lưu trữ, quản lý, và phân phối hình ảnh X-quang, CT, MRI. Thay thế hoàn toàn cho hệ thống phim nhựa in rửa ngày xưa.",
        parameters: "- Ứng dụng lâm sàng:\n1. KTV sau khi chụp xong, bấm nút Send/Push trên máy tính trạm, hình ảnh sẽ lập tức bay lên PACS.\n2. Bác sĩ ngồi ở phòng khám hoặc ở nhà đều có thể truy cập PACS để xem phim gốc và chẩn đoán.",
        citations: []
    },
    {
        id: 8046,
        en: "DICOM (Digital Imaging and Communications in Medicine)",
        vi: "Định dạng ảnh chuẩn y tế toàn cầu",
        type: "Parameter",
        description: "Tiêu chuẩn quốc tế về định dạng tệp và giao thức truyền tải hình ảnh y khoa. Một tệp DICOM không chỉ chứa hình ảnh (ma trận điểm ảnh) mà còn chứa 'Header' cực dài ghi chép toàn bộ thông tin bệnh nhân, liều tia, thông số kVp/mAs, và ngày giờ chụp.",
        parameters: "- Ứng dụng lâm sàng:\n1. Nhờ chuẩn DICOM, máy chụp X-quang của hãng Siemens vẫn có thể gửi ảnh dễ dàng cho hệ thống PACS của hãng GE đọc hiểu.\n2. Tuyệt đối không nén ảnh DICOM sang định dạng JPEG/PNG thông thường để chẩn đoán, vì sẽ làm mất dữ liệu chìm độ sâu bit và giảm chất lượng y khoa.",
        citations: []
    },
    {
        id: 8047,
        en: "HIS / RIS (Hospital/Radiology Information System)",
        vi: "Hệ thống quản lý thông tin bệnh viện / Khoa CĐHA",
        type: "Parameter",
        description: "Hệ thống phần mềm quản lý luồng công việc hành chính. HIS quản lý toàn viện (đăng ký, viện phí). RIS quản lý riêng khoa Hình ảnh (Lịch hẹn chụp, Tên KTV thực hiện, Kết quả đọc của Bác sĩ).",
        parameters: "- Ứng dụng lâm sàng:\n1. Tính năng Worklist (Modality Worklist): Máy X-quang tự động kéo danh sách bệnh nhân từ RIS xuống. KTV không cần gõ tay tên/tuổi bệnh nhân, loại trừ hoàn toàn sai sót râu ông nọ cắm cằm bà kia.",
        citations: []
    },
    {
        id: 8048,
        en: "Motion Artifact",
        vi: "Xảo ảnh do chuyển động",
        type: "Parameter",
        description: "Kẻ thù phổ biến nhất làm hỏng phim X-quang. Xảy ra do bệnh nhân nhúc nhích, hít thở hoặc nhịp đập tim trong lúc tia X đang phát ra, làm rìa các tổ chức bị nhòe mờ, mất độ sắc nét (Loss of detail).",
        parameters: "- Ứng dụng lâm sàng:\n1. Chuyển động không tự ý (Nhịp tim, nhu động ruột): KTV khắc phục bằng cách tăng mAs và chọn thời gian (Time) cực ngắn (ví dụ 10ms).\n2. Chuyển động tự ý (Tay chân, hô hấp): KTV khắc phục bằng cách ra lệnh nín thở rõ ràng, sử dụng bao cát/dây đai cố định cho trẻ em.",
        citations: []
    },
    {
        id: 8049,
        en: "Grid Cut-off",
        vi: "Hiện tượng cắt tia của lưới (Grid Cut-off)",
        type: "Parameter",
        description: "Sự sụt giảm nghiêm trọng lượng tia X (làm một nửa hoặc toàn bộ phim bị trắng xóa/mờ tịt) do tia X nguyên thủy bị các lá chì của Lưới chống mờ (Grid) hấp thụ nhầm.",
        parameters: "- Ứng dụng lâm sàng:\n1. Lỗi Off-level: Lưới bị đặt nghiêng, không vuông góc với tia trung tâm. (Phim bị sáng/trắng toàn bộ).\n2. Lỗi Off-center: Tia trung tâm không bắn vào giữa tâm lưới mà bắn lệch sang bên. (Phim bị trắng dần về một phía).\n3. Lỗi Off-focus: Chụp sai khoảng cách SID quy định của lưới (VD: lưới hội tụ 100cm nhưng KTV kéo bóng lên 180cm).",
        citations: []
    },
    {
        id: 8050,
        en: "Fluoroscopy (Pulse Rate/Pulse Width)",
        vi: "Thông số chiếu tia soi huỳnh quang (Fluoroscopy)",
        type: "Parameter",
        description: "X-quang động (Video X-quang real-time) dùng trong chụp mạch DSA hoặc C-Arm phòng mổ. Hai thông số sinh tử để quản lý liều là Pulse Rate (Số xung tia X phát ra trong 1 giây) và Pulse Width (Độ rộng của mỗi nhịp xung).",
        parameters: "- Ứng dụng lâm sàng:\n1. Thay vì chiếu tia liên tục (Continuous Fluoro) sinh liều khổng lồ, chuẩn mực hiện nay là chiếu ngắt quãng (Pulsed Fluoro).\n2. Cài đặt Pulse Rate ở mức 7.5 fps hoặc 15 fps (khung hình/giây) giúp giảm một nửa liều bức xạ cho bác sĩ ngoại khoa so với mức 30 fps, mà mắt người vẫn thấy video đủ mượt.",
        citations: []
    }
];
