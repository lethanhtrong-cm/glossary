// Dữ liệu thuộc nhóm Nguyên lý Vật lý (Physics)
export const physicsData = [
    // --- 26 THUẬT NGỮ CŨ (BẢO TOÀN LOGIC, BỔ SUNG CHI TIẾT LÂM SÀNG) ---
    { 
        id: 101, 
        en: "Net Magnetization Vector (NMV)", 
        vi: "Vector từ hóa thực (M0)", 
        type: "Physics", 
        description: "Tổng hợp các moment từ vi mô của proton khi đặt vào từ trường mạnh B0. Chỉ một tỷ lệ cực nhỏ (khoảng vài phần triệu) các proton song song B0 tạo ra NMV.", 
        parameters: "Thực tế: NMV chính là nguồn gốc tạo tín hiệu MRI. Máy 3.0T có NMV gấp đôi máy 1.5T, đem lại tỷ lệ tín hiệu/nhiễu (SNR) cao vượt trội." 
    },
    { 
        id: 102, 
        en: "Resonance", 
        vi: "Hiện tượng cộng hưởng", 
        type: "Physics", 
        description: "Sự trao đổi năng lượng xảy ra khi tần số sóng vô tuyến (RF) phát vào từ bên ngoài khớp chính xác tuyệt đối với tần số dao động tự nhiên của proton.", 
        parameters: "Thực tế: Trọng tâm của quá trình Prescan. Nếu tần số trung tâm (Center Frequency) bị lệch do kim loại hoặc mỡ, hiện tượng cộng hưởng sẽ thất bại gây hỏng ảnh." 
    },
    { 
        id: 103, 
        en: "Precession", 
        vi: "Hiện tượng tiến động", 
        type: "Physics", 
        description: "Chuyển động xoay của trục quay spin xung quanh trục B0, giống hệt như một con quay đồ chơi đang đảo vòng trước khi đổ.", 
        parameters: "Thực tế: Tốc độ tiến động này chính là tần số Larmor. Từ trường B0 càng mạnh, con quay tiến động càng nhanh." 
    },
    { 
        id: 104, 
        en: "Proton (Hydrogen Nucleus)", 
        vi: "Hạt nhân Proton Hydrogen", 
        type: "Physics", 
        description: "Hạt nhân có 1 proton, mang điện tích dương và có tính tự quay (spin) sinh ra moment từ (như một nam châm vi mô).", 
        parameters: "Lâm sàng: Được chọn làm nguồn tín hiệu độc tôn trong MRI y khoa vì cơ thể chứa tới 60-70% là nước/mỡ và Hydrogen có hằng số từ hồi chuyển cực lớn." 
    },
    { 
        id: 105, 
        en: "Transverse Magnetization (Mxy)", 
        vi: "Từ hóa ngang", 
        type: "Physics", 
        description: "Thành phần vector từ hóa lật xuống và quay trên mặt phẳng vuông góc với từ trường chính B0 sau khi nhận xung kích thích RF.", 
        parameters: "Thực tế: Cuộn dây (Coil) đặt trên người bệnh nhân CHỈ CÓ THỂ thu nhận tín hiệu từ thành phần ngang này. Sự suy giảm Mxy tạo ra trọng số T2." 
    },
    { 
        id: 106, 
        en: "Longitudinal Magnetization (Mz)", 
        vi: "Từ hóa dọc", 
        type: "Physics", 
        description: "Thành phần vector từ hóa nằm song song với trục B0. Bị triệt tiêu khi phát xung 90 độ và từ từ hồi phục lại sau đó.", 
        parameters: "Thực tế: Quá trình Mz mọc dài lại gọi là Phục hồi T1. Việc cài đặt thời gian lặp lại TR chính là quyết định mức độ hồi phục của Mz để lấy tương phản." 
    },
    { 
        id: 107, 
        en: "Faraday's Law of Induction", 
        vi: "Định luật cảm ứng điện từ Faraday", 
        type: "Physics", 
        description: "Từ trường biến thiên (do NMV quay trong mặt phẳng ngang Mxy) khi quét qua vòng dây dẫn sẽ sinh ra một dòng điện xoay chiều cực nhỏ.", 
        parameters: "Thực tế: Đây là nền tảng cốt lõi giải thích vì sao tín hiệu MRI lại được truyền qua cáp cuộn dây (Coil) về tủ thu nhận dưới dạng tín hiệu điện." 
    },
    { 
        id: 108, 
        en: "Superconductivity", 
        vi: "Hiện tượng siêu dẫn", 
        type: "Physics", 
        description: "Điện trở của một số hợp kim (như Niobium-Titanium) giảm xuống bằng 0 tuyệt đối khi bị ngâm trong Helium lỏng cực lạnh (-269 độ C / 4 Kelvin).", 
        parameters: "Thực tế: Cho phép dòng điện khổng lồ chạy vòng quanh cuộn dây vĩnh viễn không sinh nhiệt, tạo ra từ trường 1.5T - 3T mạnh mẽ 24/7 mà không tốn điện lưới duy trì." 
    },
    { 
        id: 109, 
        en: "Quench", 
        vi: "Sự cố mất siêu dẫn (Quench)", 
        type: "Physics", 
        description: "Nhiệt độ tăng đột biến làm cuộn dây mất trạng thái siêu dẫn, điện trở xuất hiện đột ngột nung sôi và xả xối xả khối Helium lỏng ra ngoài qua ống khói.", 
        parameters: "An toàn tối thượng: Khí Heli có thể rò rỉ gây ngạt thở, áp suất làm kẹt cửa phòng. CHỈ nhấn nút Quench màu đỏ khi có người bị kẹt tính mạng bởi vật kim loại, tuyệt đối không nhấn khi máy báo lỗi phần mềm." 
    },
    { 
        id: 110, 
        en: "Radiofrequency Excitation", 
        vi: "Sự kích thích vô tuyến", 
        type: "Physics", 
        description: "Sóng RF truyền năng lượng khiến các spin ở trạng thái năng lượng thấp nhảy lên trạng thái năng lượng cao (chống lại B0).", 
        parameters: "Thực tế: Gây ra hiện tượng lật Vector M0 khỏi trục Z. Quá trình này sinh nhiệt trên cơ thể bệnh nhân (SAR), cần theo dõi chặt chẽ giới hạn an toàn." 
    },
    { 
        id: 111, 
        en: "Spin-Lattice Relaxation", 
        vi: "Phục hồi Spin-Mạng lưới (T1)", 
        type: "Physics", 
        description: "Quá trình Proton nhả năng lượng dư thừa hấp thụ từ sóng RF trở lại môi trường cấu trúc phân tử xung quanh (mạng lưới) để hồi phục về trục dọc Mz.", 
        parameters: "Thực tế: Mỡ nhả năng lượng cực kỳ hiệu quả nên có T1 rất ngắn (hồi phục nhanh, sáng sớm). Nước nhả năng lượng kém nên T1 dài (hồi phục chậm, tối)." 
    },
    { 
        id: 112, 
        en: "Spin-Spin Relaxation", 
        vi: "Phân rã Spin-Spin (T2)", 
        type: "Physics", 
        description: "Quá trình Proton từ hóa ngang trao đổi năng lượng từ tính chéo cho nhau (không mất năng lượng ra môi trường), làm chúng mất đồng pha và triệt tiêu nhau.", 
        parameters: "Thực tế: Làm giảm dần vector ngang Mxy sinh ra tín hiệu T2W. Nước tự do có T2 rất dài nên trên ảnh T2W dịch não tủy sáng rực." 
    },
    { 
        id: 113, 
        en: "Phase Coherence", 
        vi: "Sự đồng pha", 
        type: "Physics", 
        description: "Trạng thái khi tất cả các spin tại một vị trí đều quay và hướng mặt về cùng một góc tại cùng một thời điểm.", 
        parameters: "Thực tế: Khi đồng pha 100%, vector Mxy có độ lớn cực đại, tạo ra đỉnh của Tín hiệu dội (Echo peak) giúp hệ thống thu được hình ảnh rõ nhất." 
    },
    { 
        id: 114, 
        en: "Dephasing", 
        vi: "Sự mất đồng pha", 
        type: "Physics", 
        description: "Sự xé lẻ vị trí pha của các spin do từ trường B0 không hoàn hảo hoặc do tương tác T2 thuần túy, khiến chúng xoay như chiếc quạt giấy xòe ra.", 
        parameters: "Thực tế: Khi các spin xòe ra, chúng tự cộng gộp vec-tơ triệt tiêu lẫn nhau, làm tín hiệu thô (FID) vụt tắt chỉ trong vài milli-giây." 
    },
    { 
        id: 115, 
        en: "Rephasing", 
        vi: "Sự tái hội tụ (Tái đồng pha)", 
        type: "Physics", 
        description: "Đảo ngược sự mất pha để ép các spin chậm và nhanh chạy đua tự bắt kịp nhau tại một thời điểm nhất định.", 
        parameters: "Thực tế: Dùng xung 180 độ trong Spin Echo (như lật bánh pancake) hoặc dùng Gradient âm/dương trong Gradient Echo để gom tín hiệu tạo ảnh." 
    },
    { 
        id: 116, 
        en: "Gradient Magnetic Field", 
        vi: "Từ trường chênh lệch (Gradient)", 
        type: "Physics", 
        description: "Từ trường phụ trợ được máy cộng thêm vào B0, có cường độ thay đổi tuyến tính theo không gian (mạnh một đầu, yếu đầu kia).", 
        parameters: "Thực tế: Chìa khóa để định vị không gian 3 chiều. Nó ép proton ở mỗi tọa độ X, Y, Z phát ra một tần số riêng biệt để máy tính nhận diện vị trí (Slice, Phase, Freq)." 
    },
    { 
        id: 117, 
        en: "Fourier Transform (FT)", 
        vi: "Biến đổi Fourier", 
        type: "Physics", 
        description: "Thuật toán giải tích toán học phức tạp giúp phân tách một sóng tín hiệu hỗn hợp thành các tần số thành phần cấu tạo nên nó.", 
        parameters: "Thực tế: Phép biến đổi Fourier nghịch (iFFT) là 'trái tim' của máy tính trạm, biến ma trận tín hiệu K-space vô nghĩa thành hình ảnh giải phẫu 2D/3D nhìn thấy được." 
    },
    { 
        id: 118, 
        en: "Excitation Pulse", 
        vi: "Xung kích thích", 
        type: "Physics", 
        description: "Xung RF đầu tiên của một chu kỳ, mang năng lượng phá vỡ trạng thái cân bằng tự nhiên của mô (Thường có góc lật 90 độ hoặc thay đổi tùy ý).", 
        parameters: "Thực tế: Được phát ra đồng thời cùng với Gradient chọn lát cắt (Slice-select). Nếu xung này lỗi hoặc không phát ra, lát cắt đó sẽ hoàn toàn không có tín hiệu (đen xì)." 
    },
    { 
        id: 119, 
        en: "Refocusing Pulse", 
        vi: "Xung tái hội tụ (Xung 180)", 
        type: "Physics", 
        description: "Xung năng lượng cao bẻ lật các spin một vòng 180 độ sang phía đối diện của mặt phẳng ngang, ép spin nhanh chạy sau spin chậm để chúng gom lại.", 
        parameters: "Thực tế: Kỹ thuật bắt buộc để xóa bỏ xảo ảnh do từ trường B0 xấu. Góp mặt trong mọi chuỗi xung Spin Echo và Turbo Spin Echo, đem lại hình ảnh siêu chân thực." 
    },
    { 
        id: 120, 
        en: "T1 Relaxation Curve", 
        vi: "Đường cong phục hồi T1", 
        type: "Physics", 
        description: "Hàm số mũ biểu diễn quá trình mọc lại của vector từ hóa dọc Mz. Thời gian đạt mức phục hồi 63% được quy ước là chỉ số T1 của mô đó.", 
        parameters: "Thực tế: Cài đặt thông số TR ngắn để 'chụp hình' các mô ngay tại sườn dốc đang hồi phục này, tạo ra ảnh T1W tương phản rực rỡ nhất." 
    },
    { 
        id: 121, 
        en: "T2 Decay Curve", 
        vi: "Đường cong phân rã T2", 
        type: "Physics", 
        description: "Hàm giảm mũ tự nhiên biểu diễn sự sụp đổ sụt giảm của vector Mxy. Thời gian khi tín hiệu rơi rụng chỉ còn 37% gọi là thời gian T2.", 
        parameters: "Thực tế: Cài đặt thông số TE dài để các mô cứng bị sụt tín hiệu đen hết đi, chỉ còn dịch lỏng giữ lại tín hiệu, sinh ra ảnh đặc trưng T2W." 
    },
    { 
        id: 122, 
        en: "Echo", 
        vi: "Tín hiệu dội (Echo)", 
        type: "Physics", 
        description: "Dòng điện RF phồng lên mạnh mẽ phát ra từ cơ thể người bệnh, đạt cường độ tối đa tại đúng thời điểm tái hội tụ hoàn hảo.", 
        parameters: "Thực tế: Máy MRI không đo sóng tắt dần FID, mà dùng ăng-ten để chộp lấy đỉnh của các dội Echo này để số hóa, nhét vào K-space làm dữ liệu tạo ảnh." 
    },
    { 
        id: 123, 
        en: "B0 Homogeneity", 
        vi: "Độ đồng nhất từ trường B0", 
        type: "Physics", 
        description: "Sự hoàn hảo và bằng phẳng tuyệt đối của từ trường tĩnh trong tâm ống máy (Isocenter), được đo lường bằng đơn vị phần triệu (ppm).", 
        parameters: "Thực tế: Sự kém đồng nhất sẽ phá hủy ngay lập tức các kỹ thuật xóa mỡ hóa học (FatSat), bSSFP (nhiễu sọc đen) và chụp phổ MRS. Cần thực hiện Shimming cẩn thận." 
    },
    { 
        id: 124, 
        en: "Magnetic Susceptibility (χ)", 
        vi: "Độ nhạy từ", 
        type: "Physics", 
        description: "Đại lượng đo khả năng một chất liệu bị nhiễm từ hoặc làm cong vênh từ trường B0 khi nằm trong đó (âm = nghịch từ, dương = thuận từ/sắt từ).", 
        parameters: "Thực tế: Máu tụ (chứa sắt) làm cong vênh từ trường tạo lỗ đen trên xung SWI. Nẹp vít Titan mổ kết hợp xương gây xảo ảnh biến dạng lồi lõm cực mạnh." 
    },
    { 
        id: 125, 
        en: "Eddy Currents", 
        vi: "Dòng điện xoáy (Foucault)", 
        type: "Physics", 
        description: "Dòng điện cảm ứng ngoài ý muốn sinh ra cuộn xoáy trên lớp vỏ sắt của lồng máy do việc bật tắt sập sình các cuộn Gradient công suất cao.", 
        parameters: "Thực tế: Dòng điện này sinh ra từ trường ngược, làm méo mó nghiêm trọng tín hiệu không gian. Khắc phục bằng thiết kế Shielded Gradient và thuật toán phần mềm." 
    },
    { 
        id: 126, 
        en: "Ernst Angle", 
        vi: "Góc Ernst", 
        type: "Physics", 
        description: "Góc lật (Flip Angle) toán học tối ưu nhất tạo ra SNR cực đại cho một giá trị thời gian lặp TR cố định và một loại mô cụ thể.", 
        parameters: "Thực tế: Cực kỳ quan trọng trong cài đặt các xung Gradient Echo 3D (VD: TOF MRA, VIBE). Máy thường tự động tính toán góc này để tối ưu tín hiệu máu hoặc mô ngấm thuốc." 
    },

    // --- 74 THUẬT NGỮ VẬT LÝ MỚI (BỔ SUNG CHI TIẾT LÂM SÀNG/THỰC TẾ) ---
    { 
        id: 3001, 
        en: "Bloch Equations", 
        vi: "Hệ phương trình Bloch", 
        type: "Physics", 
        description: "Tập hợp các phương trình vi phân mô tả sự vận động của vector từ hóa (M) theo thời gian 3D dưới tác động của Phục hồi (T1, T2) và sóng RF.", 
        parameters: "Ứng dụng: Dành cho kỹ sư/nhà nghiên cứu để thiết kế chuỗi xung ảo (MRI Simulator) trước khi đưa vào ứng dụng quét trên cơ thể người thật." 
    },
    { 
        id: 3002, 
        en: "Magnetization Transfer (MT)", 
        vi: "Chuyển giao từ hóa (MT)", 
        type: "Physics", 
        description: "Sự trao đổi năng lượng chéo giữa nhóm proton của nước tự do (dễ đo) và nhóm proton bám chặt vào màng tế bào/đại phân tử (T2 cực ngắn, vô hình).", 
        parameters: "Thực tế lâm sàng: Bật xung MTC (Magnetization Transfer Contrast) trên máy để làm tối xám mờ vùng mô chất trắng và màng sụn, giúp các tổn thương tiêm thuốc (ví dụ MRA) nổi bật sáng rực hơn." 
    },
    { 
        id: 3003, 
        en: "MT Ratio (MTR)", 
        vi: "Tỷ lệ chuyển giao từ hóa", 
        type: "Physics", 
        description: "Chỉ số định lượng sự suy giảm tín hiệu MRI (%) khi áp dụng xung bão hòa MT so với khi không áp dụng xung đó.", 
        parameters: "Thực tế chẩn đoán: Dùng làm dấu ấn sinh học đo lường sự phá hủy lớp vỏ Myelin bọc sợi trục thần kinh trong bệnh Đa xơ cứng (MS)." 
    },
    { 
        id: 3004, 
        en: "T1rho (T1ρ) Dispersion", 
        vi: "Sự phân tán T1 quay", 
        type: "Physics", 
        description: "Sự biến thiên tỷ lệ nới lỏng T1ρ khi thay đổi biên độ của xung khóa spin (Spin-lock RF pulse).", 
        parameters: "Thực tế lâm sàng: Đây là thước đo định lượng độc quyền để phát hiện tình trạng mất Proteoglycan sớm nhất ở sụn khớp gối (thoái hóa giai đoạn mầm mống)." 
    },
    { 
        id: 3005, 
        en: "J-coupling", 
        vi: "Khớp nối Spin-Spin (J-coupling)", 
        type: "Physics", 
        description: "Tương tác từ trường mỏng manh giữa các hạt nhân lân cận qua trung gian các điện tử liên kết hóa học. Gây ra hiện tượng đa đỉnh (Multiplets) trong phổ MRS.", 
        parameters: "Thực tế: Chuỗi xung Turbo Spin Echo phát xung 180 liên tục làm đứt gãy khớp nối này, khiến Mỡ bất ngờ có T2 rất dài và phát sáng rực rỡ giả tạo trên T2W (thay vì tối như T2W thông thường)." 
    },
    { 
        id: 3006, 
        en: "Dipole-Dipole Interaction", 
        vi: "Tương tác lưỡng cực - lưỡng cực", 
        type: "Physics", 
        description: "Cơ chế thư giãn (Relaxation) gốc rễ của T1 và T2 đối với nước. Hai hạt nhân mang từ tính đi ngang qua nhau sẽ gây nhiễu từ trường vi mô quấy rối nhau.", 
        parameters: "Thực tế: Môi trường bán nhớt như mỡ/lipid có tần số chao đảo phân tử rất gần Larmor nên tương tác này cực mạnh -> Hồi phục T1 siêu nhanh." 
    },
    { 
        id: 3007, 
        en: "Chemical Shift (Hz)", 
        vi: "Dịch chuyển hóa học (Hz/ppm)", 
        type: "Physics", 
        description: "Đám mây điện tử bọc hydro mỡ che chắn B0 tốt hơn so với bọc hydro nước, làm tần số Larmor của mỡ quay chậm hơn nước khoảng 3.5 ppm.", 
        parameters: "Lâm sàng thực hành: Tại máy 1.5T, mỡ và nước lệch nhau ~220 Hz. Sau mỗi 2.2ms, chúng lại quay đối lập nhau (Out-phase), sinh ra xung In/Out phase chẩn đoán gan nhiễm mỡ." 
    },
    { 
        id: 3008, 
        en: "FID Envelope", 
        vi: "Đường bao phân rã cảm ứng tự do", 
        type: "Physics", 
        description: "Biên dạng dốc đứng của đường cong tắt dần sóng FID thu được từ ăng-ten ngay khi dập tắt xung kích thích RF.", 
        parameters: "Ý nghĩa kỹ thuật: Đóng vai trò là tín hiệu tinh khôi nhất, biểu diễn sự mất đồng pha siêu tốc do sự không hoàn hảo tổng hợp của từ trường (đặc trưng bởi T2*)." 
    },
    { 
        id: 3009, 
        en: "Nyquist-Shannon Theorem", 
        vi: "Định lý lấy mẫu Nyquist", 
        type: "Physics", 
        description: "Để số hóa một sóng analog mà không mất dữ liệu, bộ biến đổi số (ADC) phải lấy mẫu (sample) với tần số ít nhất gấp đôi tần số tín hiệu gốc cao nhất.", 
        parameters: "Thực tế thiết lập: Yếu tố giới hạn việc KTV mở rộng FOV. Nếu tăng FOV quá tay mà không tăng ma trận (Matrix), máy vi phạm Nyquist và sinh xảo ảnh cuộn." 
    },
    { 
        id: 3010, 
        en: "Aliasing Condition", 
        vi: "Điều kiện Aliasing (Cuộn vòng)", 
        type: "Physics", 
        description: "Hệ quả trực tiếp của việc vi phạm định lý Nyquist, một tần số không gian quá lớn ở rìa ảnh sẽ bị máy tính đánh lừa và xếp nhầm thành tần số thấp.", 
        parameters: "Cách xử lý: Xảo ảnh làm cái mũi lọt ra ngoài bị cuộn vắt ngang qua gáy sọ não sau. Bật chế độ 'No Phase Wrap' (thêm số lượng pha nội suy) để xóa bỏ." 
    },
    { 
        id: 3011, 
        en: "K-space Trajectory", 
        vi: "Quỹ đạo K-space", 
        type: "Physics", 
        description: "Bản đồ đường đi toán học mà các Gradient dẫn dắt quá trình thu nhận tín hiệu vẽ ra khi nhồi dữ liệu thô vào không gian ảo K-space.", 
        parameters: "Phân loại chuỗi xung: Quyết định hình hài của nhiễu. Quỹ đạo Linear sinh bóng ma (Ghosting), quỹ đạo hình tia Radial sinh nhiễu dạng sọc nan hoa (Streak)." 
    },
    { 
        id: 3012, 
        en: "Cartesian Trajectory", 
        vi: "Quỹ đạo Descartes", 
        type: "Physics", 
        description: "Kiểu quét K-space nguyên thủy, đọc từng dòng ngang một cách tuyến tính đan xen từ mép này sang mép kia.", 
        parameters: "Ưu nhược điểm: Tái tạo ảnh bằng biến đổi Fourier nhanh (FFT) siêu mượt, nhưng vô cùng nhạy cảm và dễ vỡ vụn nếu bệnh nhân cử động theo chiều mã hóa pha." 
    },
    { 
        id: 3013, 
        en: "Radial Trajectory", 
        vi: "Quỹ đạo hình tia (Radial)", 
        type: "Physics", 
        description: "Cách thu thập K-space thành các đường chéo xuyên tâm liên tục đan chéo nhau như bánh căm xe đạp (BLADE/PROPELLER).", 
        parameters: "Thực tế lâm sàng: Vũ khí tối thượng chụp MRI sọ não cho bệnh nhân đột quỵ, trẻ em không chịu nằm im. Tâm k-space bù trừ chuyển động theo thời gian thực." 
    },
    { 
        id: 3014, 
        en: "Spiral Trajectory", 
        vi: "Quỹ đạo xoắn ốc (Spiral)", 
        type: "Physics", 
        description: "Bắt đầu thu nhận từ tâm K-space, trượt dần và cuộn sóng mở rộng ra vòng ngoại vi, thu dọn toàn bộ k-space trong nháy mắt.", 
        parameters: "Ứng dụng kỹ thuật cao: Hiếm khi dùng lâm sàng cơ bản, thường chỉ định cho fMRI hoặc MRI chức năng tim mạch vì tốc độ khung hình siêu thanh." 
    },
    { 
        id: 3015, 
        en: "Centric Ordering", 
        vi: "Sắp xếp pha dạng trung tâm", 
        type: "Physics", 
        description: "Máy lừa K-space nhảy vào quét các đường trung tâm (mang giá trị tương phản mạnh nhất) đầu tiên, sau đó mới giãn ra quét các đường chi tiết ngoại vi.", 
        parameters: "Thực tế lâm sàng: Không thể thiếu trong chụp MRA tiêm thuốc tĩnh mạch. Bắt trúng khoảnh khắc thuốc chạy vào lòng mạch sáng lóa nhất mà không bị mờ pha tĩnh mạch." 
    },
    { 
        id: 3016, 
        en: "Linear Ordering", 
        vi: "Sắp xếp pha tuyến tính", 
        type: "Physics", 
        description: "Máy thu thập K-space chậm rãi tuần tự từng bước từ dòng -128 đến dòng trung tâm 0 rồi đến +128.", 
        parameters: "Ứng dụng: Chuẩn mực cho mọi chuỗi xung Spin Echo (T1, T2) tĩnh học thường quy vì cung cấp mức độ ổn định toán học cao nhất." 
    },
    { 
        id: 3017, 
        en: "Elliptical K-space", 
        vi: "Thu thập k-space hình elip (3D)", 
        type: "Physics", 
        description: "Trong quét khối lượng 3D, máy tính tiết kiệm sức bằng cách bỏ qua việc lấy mẫu dữ liệu ở 4 góc vuông vô giá trị của ma trận không gian k.", 
        parameters: "Thực tế KTV: Giảm mạnh tay 20% tổng thời gian nín thở quét 3D ổ bụng (VIBE/LAVA) mà hầu như không bác sĩ nào nhận ra sự suy giảm độ nét ở góc ảnh." 
    },
    { 
        id: 3018, 
        en: "Zero-filling / Fourier Interpolation", 
        vi: "Chèn số 0 K-space", 
        type: "Physics", 
        description: "Thủ thuật toán nội suy làm mịn, lấp đầy các ô dữ liệu k-space rỗng ở viền biên bằng các giá trị 0 trước khi chạy biến đổi Fourier.", 
        parameters: "Thực tế: Giúp gỡ bỏ hiện tượng răng cưa khối (pixelation) do ma trận gốc thấp. Ảnh trông nét mịn hơn dù độ phân giải không gian thực tế không hề tăng (Tăng Matrix nội suy)." 
    },
    { 
        id: 3019, 
        en: "Phase Reversal", 
        vi: "Đảo chiều mã hóa pha", 
        type: "Physics", 
        description: "Chụp hai lần 1 chuỗi xung (EPI/DWI) với chiều gradient mã hóa pha đảo nghịch nhau (Từ A->P, sau đó từ P->A).", 
        parameters: "Thực tế xử lý ảnh: Hai ảnh này sẽ có tình trạng méo lồi nhạy từ ngược nhau. Thuật toán phần mềm (TOPUP/FSL) bóp chúng lại với nhau để khôi phục hình dáng não chuẩn 100%." 
    },
    { 
        id: 3020, 
        en: "Gradient Moment Nulling (GMN)", 
        vi: "Triệt tiêu moment chênh từ", 
        type: "Physics", 
        description: "Dùng các thùy Gradient phụ (+, -, +) để uốn nắn các proton máu/dịch tủy đang chảy đồng pha trở lại ngay tại thời điểm thu Echo.", 
        parameters: "Thực tế KTV: Cài đặt nút 'Flow Compensation / FC' để xóa bỏ nhiễu sọc dòng chảy dọc tủy sống trên xung T2W, hoặc dùng tăng tín hiệu sáng rực mạch máu trong MRA TOF." 
    },
    { 
        id: 3021, 
        en: "Bipolar Gradient", 
        vi: "Gradient lưỡng cực", 
        type: "Physics", 
        description: "Cặp sóng Gradient từ trường có diện tích âm và dương hoàn toàn cân bằng, dùng để 'khảo cung' sự khuếch tán của phân tử nước.", 
        parameters: "Lõi vật lý DWI: Nước tĩnh nằm im sẽ không bị đổi pha. Nước khuếch tán chạy lộn xộn sẽ bị lệch pha hoàn toàn, làm sụt tín hiệu (tạo màu xám tối)." 
    },
    { 
        id: 3022, 
        en: "Maxwell Terms (Concomitant Fields)", 
        vi: "Từ trường Maxwell đi kèm", 
        type: "Physics", 
        description: "Theo định luật Maxwell vật lý, không thể tạo ra gradient tuyến tính hoàn hảo mà không sinh ra các trường cong phụ theo kèm.", 
        parameters: "Ảnh hưởng thực tế: Lỗi méo lồi pha này gây nhiễu nặng nề ở các hệ thống máy MRI mở hoặc máy nam châm vĩnh cửu có từ trường B0 yếu (dưới 1.5T)." 
    },
    { 
        id: 3023, 
        en: "Off-resonance Effect", 
        vi: "Hiệu ứng chệch cộng hưởng", 
        type: "Physics", 
        description: "Trạng thái một số mô có độ nhạy từ (như mô sẹo, ranh giới xương/khí) bị biến dạng tần số nội tại, lệch mốc cộng hưởng của máy phát.", 
        parameters: "Lâm sàng thực tế: Nguyên nhân số 1 làm xung xóa mỡ hóa học (FatSat) thất bại lốm đốm. Các vùng lệch tần số không nghe thấy tiếng gọi của xung 90 độ phá mỡ." 
    },
    { 
        id: 3024, 
        en: "Spoiling Mechanism", 
        vi: "Cơ chế phá hủy tín hiệu dư", 
        type: "Physics", 
        description: "Một hành động quét dọn. Sau khi thu Echo xong, máy dùng Gradient hoặc RF đánh tan tành toàn bộ phần Từ hóa ngang (Mxy) còn sót lại để TR tiếp theo sạch sẽ.", 
        parameters: "Thực tế chuỗi xung: Tạo nên gia đình xung FLASH / T1 FFE / SPGR. Cung cấp hình ảnh rặt T1W, lý tưởng chụp sụn hoặc sau tiêm Gadolinium." 
    },
    { 
        id: 3025, 
        en: "RF Spoiling", 
        vi: "Phá hủy dư pha bằng RF", 
        type: "Physics", 
        description: "Hệ thống thay đổi ngẫu nhiên pha (phase shift) của mỗi xung 90 độ kích thích khiến tín hiệu rác dư bị xoay mòng mòng tự triệt tiêu.", 
        parameters: "Đánh giá chuyên sâu: Là giải pháp diệt Mxy triệt để nhất, đảm bảo tính chất vật lý của T1W sắc nét trên mọi loại mô mà không bị pha T2* xâm nhập." 
    },
    { 
        id: 3026, 
        en: "Gradient Spoiling", 
        vi: "Phá hủy dư pha bằng Gradient", 
        type: "Physics", 
        description: "Bật một búa tạ Gradient cực mạnh dập vào cuối chu kỳ TR để xé lẻ nhanh độ đồng pha của Spin.", 
        parameters: "Ứng dụng: Dùng để làm sạch chu kỳ trên các máy tốc độ cao chụp ảnh T1 Gradient Echo nhưng chất lượng T1 thuần túy đôi lúc không bằng RF Spoiling." 
    },
    { 
        id: 3027, 
        en: "Steady State Free Precession (SSFP)", 
        vi: "Trạng thái tiến động tự do ổn định", 
        type: "Physics", 
        description: "Xảy ra khi ép TR chạy điên cuồng quá ngắn (TR < T2) khiến vector từ hóa bị giữ trên không trung, tạo sự cân bằng vĩnh cửu giữa T1 mọc lại và T2 rụng đi.", 
        parameters: "Khung sườn ứng dụng: Khai sinh ra kỷ nguyên hình ảnh siêu tốc 3D (FISP, GRASS) cho phép thu ảnh mô mềm ổ bụng với thời gian tính bằng phần giây." 
    },
    { 
        id: 3028, 
        en: "FID-SSFP / T1-like", 
        vi: "Trạng thái ổn định FID", 
        type: "Physics", 
        description: "Kỹ thuật chỉ hứng lấy phần FID tinh khôi sinh ra ở đầu mỗi chu kỳ SSFP, vứt bỏ các Echo sinh ra do tiếng vọng từ chu kỳ trước.", 
        parameters: "Tên thương mại: Siemens FISP, GE GRASS, Philips FFE. Tạo tương phản thiên về T2*W, nhạy xương sụn nhưng không sắc nét bằng T2 TSE thực." 
    },
    { 
        id: 3029, 
        en: "Echo-SSFP / T2-like", 
        vi: "Trạng thái ổn định Echo", 
        type: "Physics", 
        description: "Dời lùi cửa sổ thu nhận để vớt lại Tín hiệu Echo vọng lại từ TR liền kề phía trước, mang lượng T2 khổng lồ.", 
        parameters: "Tên thương mại: PSIF (Siemens), CE-FAST (Philips). Hữu ích trong các nghiên cứu hẹp thần kinh tạo tương phản T2 nặng nhưng hiếm dùng hơn bSSFP." 
    },
    { 
        id: 3030, 
        en: "Balanced SSFP (bSSFP)", 
        vi: "Trạng thái ổn định cân bằng hoàn toàn", 
        type: "Physics", 
        description: "Duy trì mô-men Gradient theo 3 trục ở mức cực trị 0. Ép tất cả FID và Echo hợp nhất làm một tín hiệu uy lực khổng lồ.", 
        parameters: "Tên thương mại: TrueFISP (Siemens), FIESTA (GE). Là kỹ thuật sống còn chụp MRI đánh giá cơ bóp Cơ tim (Cine) và chụp ối thai nhi (Máu/Dịch sáng chói lóa, tương phản bá đạo)." 
    },
    { 
        id: 3031, 
        en: "T2/T1 Contrast Ratio", 
        vi: "Tỷ lệ tương phản T2/T1", 
        type: "Physics", 
        description: "Trong xung bSSFP, mô nào có kết quả phép chia T2/T1 càng sát giá trị 1 thì tín hiệu bật lên càng rực rỡ.", 
        parameters: "Thực tế chẩn đoán: Dịch não tủy hoặc dịch nang có tỷ lệ gần 0.5 (cực sáng). Cơ bắp, tạng đặc có tỷ lệ nhỏ nên xám mờ (Contrast T2/T1 là độc quyền bSSFP)." 
    },
    { 
        id: 3032, 
        en: "Phase Cycling (bSSFP)", 
        vi: "Đảo pha xoay vòng", 
        type: "Physics", 
        description: "Bật tắt xung kích thích RF xen kẽ cực tính (VD: phát +60 độ xong phát -60 độ) theo từng dòng TR để ép xảo ảnh từ trường dạt ra biên.", 
        parameters: "Thực tế vận hành: Tính năng sống còn để KTV đẩy dải nhiễu Banding (sọc đen) trên bụng thai nhi trượt ra khỏi vùng bác sĩ cần xem trên xung FIESTA." 
    },
    { 
        id: 3033, 
        en: "Banding Artifact Theory", 
        vi: "Lý thuyết nhiễu dải đen bSSFP", 
        type: "Physics", 
        description: "Bất kỳ sự lồi lõm nào của từ trường (> 50Hz lệch) cũng làm xoắn 180 độ pha ngay trong lòng một voxel, biến Mxy bằng 0 sinh ra sọc đen thui vằn vện (như ngựa vằn).", 
        parameters: "Tuyệt chiêu khắc phục: Chỉ có 2 cách. Một là Shim B0 cực phẳng (chống mỡ, chống khí). Hai là rút ngắn TR đến cực hạn (< 4ms) để mô chưa kịp xoay pha." 
    },
    { 
        id: 3034, 
        en: "SAR Equation (B1^2 * FA^2 * Duty Cycle)", 
        vi: "Công thức toán học SAR", 
        type: "Physics", 
        description: "Lượng nhiệt nung nấu cơ thể bệnh nhân tăng theo bình phương cường độ B1 và góc lật RF. (vd: FA từ 90 lên 180 thì nhiệt độ tăng vọt 4 lần).", 
        parameters: "Quản lý an toàn lâm sàng: Trên máy 3T, KTV KHÔNG được phép tham lam góc lật FA lớn (chỉ 120-130 thay vì 180) trong TSE để cứu máy khỏi báo cấm quá nhiệt SAR." 
    },
    { 
        id: 3035, 
        en: "B1+ Field", 
        vi: "Từ trường phát (B1 dương)", 
        type: "Physics", 
        description: "Thành phần phân cực tròn sóng truyền từ lồng phát RF của máy xuyên thấu vào mô mỡ cơ thể để giật lật úp proton.", 
        parameters: "Vấn nạn tại 3T: Sóng B1+ tại 3T (127 MHz) rất ngắn (26cm), gặp bụng to sẽ chọi nhau tạo bóng đen loang lổ (Dielectric artifact). Khắc phục bằng đệm mặn Dielectric pad." 
    },
    { 
        id: 3036, 
        en: "B1- Field", 
        vi: "Từ trường thu (B1 âm)", 
        type: "Physics", 
        description: "Sự phân cực từ trường nhận tín hiệu RF dội ngược từ mô vào anten bề mặt (Coil).", 
        parameters: "Đánh giá chất lượng Coil: Coil đời mới đa kênh (32-64 kênh) tối ưu hóa trường B1- để bắt sóng yếu đến từng nano-volt, đem lại SNR vượt trội không tưởng." 
    },
    { 
        id: 3037, 
        en: "Circular Polarization", 
        vi: "Phân cực tròn", 
        type: "Physics", 
        description: "Công nghệ cuộn phát RF dùng hai ănten vuông góc và kích điện lệch pha 90 độ, tạo ra sóng điện từ xoáy trôn ốc 3D như bão.", 
        parameters: "Thực tế phần cứng: Tiêu chuẩn của mọi lồng Body Coil ngày nay. Tiết kiệm 50% công suất tỏa nhiệt nung người và tăng căn 2 lần độ nét so với kiểu cũ." 
    },
    { 
        id: 3038, 
        en: "Linear Polarization", 
        vi: "Phân cực thẳng", 
        type: "Physics", 
        description: "Phát hoặc nhận RF bằng một cuộn dây dạng vòng duy nhất tạo trường đơn chiều.", 
        parameters: "Hạn chế kỹ thuật: Hiệu suất thấp, rất dễ bị nhiễu do định hướng. Hiện chỉ ứng dụng trên các cuộn Flex coil hoặc Surface coil siêu nhỏ bọc da." 
    },
    { 
        id: 3039, 
        en: "Quadrature Detection", 
        vi: "Thu nhận cầu phương", 
        type: "Physics", 
        description: "Mạch điện thu tín hiệu qua 2 anten đặt vuông góc để tạo kênh Thực (Real) và kênh Ảo (Imaginary) phục vụ biến đổi số.", 
        parameters: "Nền tảng tín hiệu: Tăng SNR lên 1.41 lần (41%) bằng kỹ thuật phần cứng vật lý, giúp loại bỏ các bóng ma (ghosting) do lệch pha nhiễu động." 
    },
    { 
        id: 3040, 
        en: "Signal Equation (Spin Echo)", 
        vi: "Phương trình tín hiệu SE", 
        type: "Physics", 
        description: "S = M0 * (1 - e^(-TR/T1)) * e^(-TE/T2). Định lượng mức độ sáng dựa vào đặc tính mô và thời gian KTV cài đặt.", 
        parameters: "Ứng dụng dễ nhớ: T1 muốn ảnh khác biệt (Contrast cao) -> TR phải ngắn lại. T2 muốn khác biệt (Dịch phân hóa Xương cơ) -> TE phải dài ra." 
    },
    { 
        id: 3041, 
        en: "Signal Equation (Gradient Echo)", 
        vi: "Phương trình tín hiệu GRE", 
        type: "Physics", 
        description: "Phương trình phức hợp phụ thuộc siêu mạnh vào Góc lật FA. S = M0 * [ (1 - e^(-TR/T1)) * sin(FA) / (1 - cos(FA)*e^(-TR/T1)) ] * e^(-TE/T2*).", 
        parameters: "Thực tế thiết lập: Góc lật FA nhỏ (10-15 độ) tạo ra tín hiệu T2*W chuyên tìm xuất huyết máu. Góc lật FA lớn (70-90 độ) tạo tương phản T1W sắc cạnh." 
    },
    { 
        id: 3042, 
        en: "T2* Equation", 
        vi: "Công thức nghịch đảo T2*", 
        type: "Physics", 
        description: "1/T2* = 1/T2 + 1/T2_inhomo (Sự phá hoại đồng pha do B0 méo mó).", 
        parameters: "Bản chất vật lý: Thời gian T2* luôn luôn sụp đổ nhanh hơn hoặc bằng thời gian T2 tự nhiên. T2* là nền tảng sống còn của xung chức năng BOLD fMRI và SWI nhạy từ." 
    },
    { 
        id: 3043, 
        en: "Diamagnetism Theory", 
        vi: "Thuyết Nghịch Từ", 
        type: "Physics", 
        description: "Các phân tử không có electron độc thân. Khi vào lõi MRI, chúng miễn cưỡng sinh ra 1 lực đẩy cực vi mô chống lại B0.", 
        parameters: "Thực tế con người: Mô cơ thể người 99% (nước, chất béo, xương, canxi) là chất nghịch từ. Xương canxi nghịch từ mạnh nên luôn có màu đen kịt ở mọi xung MRI." 
    },
    { 
        id: 3044, 
        en: "Paramagnetism Theory", 
        vi: "Thuyết Thuận Từ", 
        type: "Physics", 
        description: "Phân tử có 1-7 electron độc thân xoay tự do (Oxy, phân tử Gadolinium, Máu khử oxy, Methemoglobin bầm tím). Chúng bị từ trường hút thuận theo chiều B0.", 
        parameters: "Dấu hiệu nhận biết bệnh học: Rút ngắn mãnh liệt T1 (Làm sáng rực u não ngấm thuốc Gado) hoặc phá tan nát T2* (Tạo quầng đen ngòm của vi xuất huyết nhồi máu)." 
    },
    { 
        id: 3045, 
        en: "Ferromagnetism Theory", 
        vi: "Thuyết Sắt Từ", 
        type: "Physics", 
        description: "Vật liệu duy trì từ tính vĩnh viễn với cường độ gấp hàng chục ngàn lần mô người (Sắt thép đen, Niken, Cobalt).", 
        parameters: "Sát thủ phòng MRI: Có thể bị hút bay/phóng như viên đạn xuyên thủng vách máy nát lồng kính. CẤM CHỈ ĐỊNH mọi bệnh nhân có máy tạo nhịp tim cũ, dị vật mảnh đạn sắt." 
    },
    { 
        id: 3046, 
        en: "Superparamagnetism Theory", 
        vi: "Thuyết Siêu Thuận Từ", 
        type: "Physics", 
        description: "Hạt nano ôxít sắt (SPIOs). Từ tính mạnh hơn Gadolinium 100 lần, nhưng an toàn vì tự xả từ khi ra khỏi máy.", 
        parameters: "Ứng dụng tương lai: Làm thuốc tương phản nhắm đích tế bào Kupffer (Gan). Tế bào gan khỏe sẽ nuốt SPIOs và đen thui trên T2W, trong khi u ác tính (không có Kupffer) sẽ giữ màu trắng nổi bật." 
    },
    { 
        id: 3047, 
        en: "Contrast Agent Relaxivity (R1/R2)", 
        vi: "Độ thư giãn nội tại của thuốc (Relaxivity)", 
        type: "Physics", 
        description: "Khả năng xúc tác (công suất) của một dòng hóa chất thuốc Gadolinium trong việc tăng tốc phục hồi T1 (r1) của nước xung quanh nó.", 
        parameters: "Lựa chọn đấu thầu thuốc: Thuốc cấu trúc Macrocyclic vòng đời mới có R1 cao hơn thuốc tuyến tính -> cùng 1 thể tích 10ml tiêm, thuốc R1 cao bắt sáng tổn thương gắt hơn." 
    },
    { 
        id: 3048, 
        en: "Gadolinium Chelate", 
        vi: "Phức hợp Gadolinium (Thuốc tương phản)", 
        type: "Physics", 
        description: "Độc tố tự do Gd3+ được 'bắt nhốt' giam cầm vào một lồng hóa học (Chelate) hình vòng kín siêu bền để thận đào thải an toàn.", 
        parameters: "Biến chứng y khoa hiếm: Bệnh xơ hóa màng cứng toàn thân (NSF) xảy ra nếu dùng dòng hóa chất mạch thẳng đời cũ cho bệnh nhân có eGFR suy thận nặng (< 30 mL/min)." 
    },
    { 
        id: 3049, 
        en: "Spin Echo Refocusing Theory", 
        vi: "Lý thuyết tái hội tụ spin", 
        type: "Physics", 
        description: "Xung búa tạ 180 độ lật úp mặt bánh Pancake pha của hệ spin. Spin nhanh (+5 độ) biến thành (-5 độ) và chạy đuổi sau, spin chậm biến thành đi trước.", 
        parameters: "Chất lượng hình ảnh: Nhờ sự đổi vai trò đỉnh cao này, mọi lỗi méo mó từ trường B0 và sắt nhạy từ được gột rửa sạch sẽ tại thời điểm hội tụ sinh Echo chân thật." 
    },
    { 
        id: 3050, 
        en: "Hahn Echo", 
        vi: "Tín hiệu dội Hahn", 
        type: "Physics", 
        description: "Tín hiệu dội Echo Spin nguyên thủy nhất, được đánh thức bởi 1 cặp đôi xung đơn giản [90°] ... [180°].", 
        parameters: "Lịch sử y học: Cột mốc vật lý khai sinh toàn bộ ngành MRI y học hiện đại (Phát hiện bởi Erwin Hahn năm 1950)." 
    },
    { 
        id: 3051, 
        en: "Stimulated Echo", 
        vi: "Tín hiệu dội kích thích (STE)", 
        type: "Physics", 
        description: "Tín hiệu Echo 'Ma' phát sinh rối loạn khi nã 3 xung RF trở lên liên tiếp (VD: 90-90-90). Nó lưu giữ một nửa tín hiệu ngủ đông trong trục dọc Z rồi nảy ra sau đứt quãng.", 
        parameters: "Thực tế nâng cao: Gây sọc nhiễu trên xung TSE nhanh, nhưng được cố tình khai thác làm vũ khí siêu đẳng giữ tín hiệu đo dòng nước não tủy chậm trong DWI / MRS." 
    },
    { 
        id: 3052, 
        en: "Multiple Spin Echoes", 
        vi: "Đa dội spin", 
        type: "Physics", 
        description: "Chiến thuật dội bom liên tục nhiều xung 180 độ trong 1 chu kỳ để sinh ra hàng loạt Echo xếp hàng thu k-space.", 
        parameters: "Tốc độ quét: Tối thiểu hóa thời gian chờ TR rỗng nhàm chán. Đây là cội nguồn sáng tạo ra chuỗi xung TSE / FSE nhanh gấp hàng chục lần SE cổ." 
    },
    { 
        id: 3053, 
        en: "CPMG Sequence Theory", 
        vi: "Điều kiện biên Carr-Purcell-Meiboom-Gill", 
        type: "Physics", 
        description: "Để duy trì chuỗi đa Echo dài bất tận (TSE) mà không bị rơi rụng vỡ vụn tín hiệu, xung 180 bắt buộc phải xoay lệch pha vuông góc (90 độ) so với xung 90 mở đầu.", 
        parameters: "Hậu trường lập trình xung: Nếu kỹ sư máy thiết lập sai CPMG, hình ảnh T2W TSE dài (như MRCP đường mật) sẽ bị sập đen hoàn toàn do lũy kế sai số pha qua từng xung 180." 
    },
    { 
        id: 3054, 
        en: "Echo Train Blurring", 
        vi: "Mờ ảnh chuỗi dội (TSE Blurring)", 
        type: "Physics", 
        description: "Tín hiệu Echo suy giảm tự nhiên do T2. Echo số 1 sáng rực đắp vào rìa k-space, Echo số 20 tối mù đắp vào mép. Sự sụt lún dữ liệu này làm mờ viền ảnh (Blurring).", 
        parameters: "Khắc phục của KTV lâm sàng: TUYỆT ĐỐI KHÔNG kéo chỉ số Echo Train Length (ETL/Factor) quá lớn (>30) khi chụp T2 thường quy, nó sẽ làm não và tủy bị mờ tịt biên giới." 
    },
    { 
        id: 3055, 
        en: "Point Spread Function (PSF)", 
        vi: "Hàm phân bố điểm", 
        type: "Physics", 
        description: "Biểu đồ định lượng việc một điểm chấm sáng siêu nhỏ lý tưởng bị thuật toán máy MRI làm lem mờ, nhòe rộng ra xung quanh lớn đến mức nào.", 
        parameters: "Hiệu năng: Nhiễu rung lắc bệnh nhân (Motion) hoặc xảo ảnh Blur do TSE làm giãn rộng toang hoác hàm PSF, phá hỏng độ phân giải siêu nhỏ của MRI." 
    },
    { 
        id: 3056, 
        en: "Modulation Transfer Function (MTF)", 
        vi: "Hàm chuyển đổi module", 
        type: "Physics", 
        description: "Đại lượng kỹ thuật định lượng trực tiếp năng lực 'xịn' của máy trong việc phân giải rõ hai cấu trúc trắng đen nằm kề sát nhau mà không bị dính chùm.", 
        parameters: "Góc độ đầu tư: Máy 3.0T phần cứng Coil đa kênh đời mới có đồ thị MTF cao vượt trội máy 1.5T cũ, cho phép nhìn sợi rễ dây thần kinh mắt gai sắc nét." 
    },
    { 
        id: 3057, 
        en: "Voxel Size Formula", 
        vi: "Công thức tính thể tích điểm ảnh (Voxel)", 
        type: "Physics", 
        description: "Thể tích Voxel = Kích thước Pixel (FOV / Ma trận X) * (FOV / Ma trận Y) * Bề dày lát cắt Z.", 
        parameters: "Quy tắc nằm lòng KTV: Thể tích Voxel quy định lượng Hydrogen cống hiến tín hiệu. Ép Voxel quá nhỏ (Matrix quá to, Slice quá mỏng) để tìm độ nét sẽ làm chết chìm SNR." 
    },
    { 
        id: 3058, 
        en: "SNR Proportionality", 
        vi: "Sự tỷ lệ của tỷ số tín hiệu/nhiễu", 
        type: "Physics", 
        description: "Luật bảo toàn: SNR tăng thuận tỷ lệ với B0, kích cỡ Voxel, và căn bậc 2 của Số lần chụp NEX. SNR giảm nghịch tỷ lệ với căn bậc 2 của Băng thông, Yếu tố gia tốc PI.", 
        parameters: "Thao tác gỡ lỗi: Ảnh nhiễu hạt bụi như tivi cũ, hãy tăng Bề dày cắt thêm 1mm, hoặc tăng FOV lên 2cm, tín hiệu sẽ vực dậy sống lại ngay." 
    },
    { 
        id: 3059, 
        en: "Receiver Bandwidth and SNR", 
        vi: "Tương quan Băng thông và Nhiễu", 
        type: "Physics", 
        description: "Tín hiệu cơ thể (Echo) là một lượng hằng số cố định, nhưng Nhiễu sóng RF (Noise nền) thì lây lan đều đặn rải rác trên mọi dải tần.", 
        parameters: "Đánh đổi khắc nghiệt: Để xóa mờ nhiễu viền mỡ/nước (Tăng Băng thông rBW), KTV phải mở toang cánh cửa rBW cho phép lượng lớn tạp âm lọt vào làm SNR sụt giảm nghiêm trọng." 
    },
    { 
        id: 3060, 
        en: "Parallel Imaging g-factor", 
        vi: "Hệ số hình học (g-factor)", 
        type: "Physics", 
        description: "Đại lượng trừng phạt làm suy giảm SNR khi chụp kỹ thuật tăng tốc song song, tỷ lệ thuận với sự thiết kế rời rạc lỏng lẻo của cuộn dây thu anten.", 
        parameters: "Thực tế hư hỏng: Nếu 1 mảng Coil bị gãy cáp, g-factor tại vùng đó sẽ tăng vọt > 1, sinh ra chùm nhiễu hạt khổng lồ đen kịt ở trung tâm não hoặc bụng (SENSE artifact)." 
    },
    { 
        id: 3061, 
        en: "SENSE Algorithm (SENSitivity Encoding)", 
        vi: "Thuật toán giải mã SENSE", 
        type: "Physics", 
        description: "Thuật toán tăng tốc PI giải mã toán học TRONG MIỀN HÌNH ẢNH. Máy bỏ lỡ k-space cố tình để ảnh bị cuộn méo (aliased) rồi bóc tách tháo gỡ méo đó dựa trên sự phân bổ đa coil.", 
        parameters: "Đặc điểm: Chạy tái tạo (Recon) rất nhanh nhưng vô cùng mong manh trước sự hắt hơi/nhịp thở bệnh nhân làm lệch bản đồ coil ban đầu." 
    },
    { 
        id: 3062, 
        en: "GRAPPA Algorithm", 
        vi: "Thuật toán giải mã GRAPPA", 
        type: "Physics", 
        description: "Thuật toán PI nội suy số liệu TRONG MIỀN K-SPACE (Không gian thô). Toán học giả lập lấp đầy các dòng k-space bị bỏ lọt rồi mới đun sôi Fourier.", 
        parameters: "Đặc điểm KTV ưu chuộng: Kháng chuyển động nhịp tim lồng ngực mạnh mẽ hơn hẳn SENSE, là bảo bối sống còn của chụp MRI Tim và chuỗi EPI sọ não." 
    },
    { 
        id: 3063, 
        en: "Compressed Sensing Theory", 
        vi: "Lý thuyết Cảm biến nén (CS)", 
        type: "Physics", 
        description: "Phép thuật vĩ đại của Toán tối ưu: Nếu 1 hình ảnh đủ độ 'rỗng rải rác' và cách thu nhận sóng đủ 'vô trật tự', AI có thể bói ra ảnh hoàn thiện 100% chỉ từ 10% dữ liệu mảng.", 
        parameters: "Ứng dụng tương lai: Ép thời gian chụp MRCP đường mật T2 3D từ 4 phút dài dằng dặc xuống còn 15 giây nín thở (Giảm 15 lần). Máy sẽ tính toán tái tạo suốt nhiều phút." 
    },
    { 
        id: 3064, 
        en: "Sparsity", 
        vi: "Tính thưa thớt tín hiệu", 
        type: "Physics", 
        description: "Điều kiện gốc của kỹ thuật nén CS. Bức ảnh phải có khả năng nén dẹp bỏ (JPEG) thành nền đen thui, chỉ giữ lại vài chấm trắng mang thông tin.", 
        parameters: "Lý do thành bại: CE-MRA mạch máu sáng rực trên nền mô xóa đen mờ mịt là đối tượng lý tưởng nhất cho CS. Não bộ T2W lổn nhổn mô chi tiết sẽ nén rất kém, dễ bôi giả ảnh." 
    },
    { 
        id: 3065, 
        en: "Incoherent Artifacts", 
        vi: "Nhiễu phi mạch lạc (CS)", 
        type: "Physics", 
        description: "Kỹ thuật đục lỗ thu thập tia ngẫu nhiên K-space khiến sự thiếu hụt dữ liệu không sinh ra Bóng ma bóng lặp (Ghosting) mà bị pha loãng thành nhiễu sương mù (noise).", 
        parameters: "Sức mạnh thuật toán: Máy chủ máy tính dễ dàng gọt rửa lớp nhiễu sương mù ngẫu nhiên này bằng vòng lặp chuẩn hóa L1-minimization, trả lại tĩnh mạch sắc như dao." 
    },
    { 
        id: 3066, 
        en: "Flow Compensation Velocity", 
        vi: "Bù trừ dòng chảy bậc 1", 
        type: "Physics", 
        description: "Uốn Gradient phụ trợ thiết lập lại đồng pha từ tính cho các proton di chuyển với VẬN TỐC HẰNG SỐ ỔN ĐỊNH.", 
        parameters: "Đánh giá chất lượng: Áp dụng cực tốt để bắt sáng Tĩnh mạch hoặc Dịch não tủy đang rỉ chậm. Hoàn toàn vô hiệu đối với dòng động mạch xoáy xiết." 
    },
    { 
        id: 3067, 
        en: "Acceleration Compensation", 
        vi: "Bù trừ dòng chảy bậc 2", 
        type: "Physics", 
        description: "Sử dụng chuỗi chùy gradient nhiều pha siêu phức tạp để đuổi bắt kịp pha của các khối máu đang vút gia tốc hoặc thắng phanh giảm tốc.", 
        parameters: "Đánh giá chất lượng: Triệt tiêu xảo ảnh của Động mạch chủ, dòng chảy cuộn nhưng bù lại đẩy thời gian TE lên rất dài, làm rớt tín hiệu ảnh mờ đi đáng kể." 
    },
    { 
        id: 3068, 
        en: "K-space Aliasing Filter", 
        vi: "Bộ lọc chống cuộn K-space", 
        type: "Physics", 
        description: "Mạch lọc Analog Low-pass chém lìa dứt điểm các tín hiệu tần số cao lọt vào từ vai/ngực ngoại vi trước khi cấp cho bộ giải mã số ADC.", 
        parameters: "Khắc phục vật lý: Hoạt động âm thầm dọc trục Tần số. Đây là lý do trục Tần số Frequency (dọc cơ thể) CỰC HIẾM khi nào bị xảo ảnh cuộn, KTV chỉ cần lo trục Phase hẹp ngang." 
    },
    { 
        id: 3069, 
        en: "Spin-Locking Magnetic Field", 
        vi: "Từ trường khóa spin (B1_lock)", 
        type: "Physics", 
        description: "Tia sóng RF công suất nhỏ phát liên tục rền rĩ để còng khóa các spin đang bơi ngang (Mxy), không cho chúng rơi rụng theo T2 thông thường.", 
        parameters: "Tương phản T1-rho: Trả lại hình thái tương phản T1ρ siêu dị biệt nhạy mảng Proteoglycan, giúp soi thấu tình trạng bào mòn sụn trong gai khớp sinh học." 
    },
    { 
        id: 3070, 
        en: "Macromolecular Proton Fraction", 
        vi: "Phân số proton đại phân tử", 
        type: "Physics", 
        description: "Là một đại lượng thể hiện thể tích nước đóng băng bị xiềng xích vào màng Myelin sọ não (không thể đo T2 trực tiếp).", 
        parameters: "Lâm sàng cao cấp: Khi KTV dùng kỹ thuật MT để gián tiếp phác họa đại lượng này, bác sĩ sẽ chẩn đoán được mức độ teo myelin mạn tính của một bệnh nhi chậm phát triển." 
    },
    { 
        id: 3071, 
        en: "Time-Varying Magnetic Field (dB/dt)", 
        vi: "Từ trường biến thiên thời gian", 
        type: "Physics", 
        description: "Gia tốc thay đổi (tăng vọt/sụt hố) từ trường đo bằng Tesla/giây, sinh ra dòng điện ngoại cảm ứng trong dây thần kinh cánh tay, ngực bụng người.", 
        parameters: "Cảnh báo giật cơ (PNS): Các xung EPI (Diffusion) có dB/dt quá khủng khiến bệnh nhân cảm thấy tê tê giật giật nhói như kiến đốt. Máy MRI có cảm biến cứng giới hạn việc này theo luật FDA." 
    },
    { 
        id: 3072, 
        en: "Radiofrequency Shielding (Faraday Cage)", 
        vi: "Lồng chắn vô tuyến (Lồng Faraday)", 
        type: "Physics", 
        description: "Hộp lưới đồng lá chắn nguyên khối bao bọc hầm vách, trần, kính phòng máy MRI để triệt tiêu sóng điện đài ngoài phố chọc vào tần số Larmor nhạy cảm.", 
        parameters: "Kiểm soát an toàn: Tuyệt đối KTV KHÔNG lén mở hé cửa phòng quét để nói chuyện khi máy đang chạy, sóng Wifi ngoài phòng điều khiển chui vào sẽ cày nát ảnh bằng sọc Zipper." 
    },
    { 
        id: 3073, 
        en: "Magnetic Shielding", 
        vi: "Lá chắn từ trường", 
        type: "Physics", 
        description: "Công nghệ dùng mảng sắt khối lớn (Passive) hoặc từ trường phát ngược pha (Active) để bóp nghẹt ép chật đường sức từ B0 (Giới hạn 5 Gauss) giam trong 4 bức tường phòng.", 
        parameters: "An toàn môi trường: Ngăn cản B0 không đâm xuyên tường, bảo vệ máy tính y bác sĩ và máy trợ tim của người đi bộ ngoài hành lang không bị nhiễu loạn/tắt nguồn." 
    },
    { 
        id: 3074, 
        en: "Cryocooler (Cold Head)", 
        vi: "Đầu lạnh (Máy nén Cryo)", 
        type: "Physics", 
        description: "Chiếc phuộc nhún cơ học nghe tiếng đập xình xịch (chirping) ngày đêm trên vỏ máy, ngưng tụ hơi Heli bay lên hoàn nguyên lỏng lại rỏ xuống bồn (Chu trình GM).", 
        parameters: "Vận hành duy tu: Trái tim giữ máy sống. Nếu KTV bước vào phòng mà im ắng lạ thường (mất tiếng chirping do điện lỗi), phải báo Kỹ sư cứu hộ ngay trước khi từ trường bốc hơi Quench gây thiệt hại tỷ đồng." 
    }
];
