// Dữ liệu thuộc nhóm Thông số cài đặt, Xảo ảnh, Phần cứng
export const parameterData = [
    // --- 67 THUẬT NGỮ CŨ (BẢO TOÀN LOGIC, BỔ SUNG CHI TIẾT THỰC TẾ) ---
    { 
        id: 2, 
        en: "Time of Repetition (TR)", 
        vi: "Thời gian lặp lại", 
        type: "Parameter", 
        description: "Khoảng thời gian từ lúc phát xung kích thích RF ban đầu đến lúc phát xung kích thích tiếp theo cho cùng một lát cắt.", 
        parameters: "Thực tế: TR ngắn (400-700ms) tối ưu tương phản T1W. TR dài (3000-5000ms) tối ưu T2W/PD. Tăng TR giúp tăng số lượng lát cắt tối đa (max slices) trong một lần quét nhưng sẽ làm tăng tuyến tính tổng thời gian chụp." 
    },
    { 
        id: 3, 
        en: "Time to Echo (TE)", 
        vi: "Thời gian thu tín hiệu (Thời gian Echo)", 
        type: "Parameter", 
        description: "Thời gian từ lúc phát xung RF kích thích đến đỉnh của tín hiệu dội thu được để tạo ảnh.", 
        parameters: "Thực tế: TE ngắn (10-25ms) giữ tín hiệu mô, tối ưu T1W. TE dài (80-120ms) giúp dịch não tủy sáng rực (T2W). TE càng dài tín hiệu tổng thể (SNR) càng giảm dần." 
    },
    { 
        id: 5, 
        en: "Inversion Time (TI)", 
        vi: "Thời gian đảo ngược", 
        type: "Parameter", 
        description: "Khoảng thời gian chờ từ xung đảo ngược 180 độ ban đầu đến xung kích thích 90 độ.", 
        parameters: "Thực tế: Tại máy 1.5T, TI ~150-170ms xóa mỡ (STIR), TI ~2000-2500ms xóa dịch (FLAIR). Cần tăng nhẹ giá trị TI này nếu chụp trên hệ thống 3.0T." 
    },
    { 
        id: 9, 
        en: "Field of View (FOV)", 
        vi: "Trường nhìn (Kích thước trường khảo sát)", 
        type: "Parameter", 
        description: "Khu vực không gian thực tế được thu nhận dữ liệu, đo bằng mm hoặc cm.", 
        parameters: "Thực tế: Thu hẹp FOV giúp tăng độ phân giải chi tiết, nhưng làm giảm mạnh SNR và rất dễ gây xảo ảnh cuộn (Aliasing). Mẹo: Luôn dùng kèm Phase Oversampling khi ép FOV nhỏ." 
    },
    { 
        id: 10, 
        en: "Matrix Size", 
        vi: "Ma trận ảnh", 
        type: "Parameter", 
        description: "Số lượng các điểm ảnh trong FOV, chia thành lưới Phase x Frequency (VD: 256x320).", 
        parameters: "Thực tế: Ma trận cao -> ảnh nét, giảm xảo ảnh cắt cụt Gibbs, nhưng kích thước Voxel nhỏ đi làm giảm SNR và có thể tăng thời gian chụp. Cần cân đối với bề dày lát cắt." 
    },
    { 
        id: 12, 
        en: "Number of Excitations (NEX) / NSA", 
        vi: "Số lần thu tín hiệu trung bình", 
        type: "Parameter", 
        description: "Số lần dữ liệu của mỗi dòng k-space được lặp lại thu nhận để trung bình hóa tín hiệu.", 
        parameters: "Thực tế: Tăng NEX (VD: 1 lên 2) giúp SNR tăng thêm ~41% (theo căn bậc 2) và giảm xảo ảnh hô hấp/chuyển động, nhưng thời gian chụp sẽ bị nhân đôi." 
    },
    { 
        id: 13, 
        en: "Slice Thickness", 
        vi: "Bề dày lát cắt", 
        type: "Parameter", 
        description: "Độ dày của phần mô được chọn để kích thích RF, tính bằng mm.", 
        parameters: "Thực tế: Mỏng (1-3mm) dựng hình 3D đẹp nhưng ảnh nhiễu (SNR thấp). Dày (5-7mm) chụp nhanh, SNR cao nhưng bị hiệu ứng thể tích bán phần, dễ che lấp tổn thương nhỏ hẹp." 
    },
    { 
        id: 14, 
        en: "Apparent Diffusion Coefficient (ADC)", 
        vi: "Bản đồ ADC", 
        type: "Parameter", 
        description: "Bản đồ tính toán toán học nhằm loại bỏ hiệu ứng T2 shine-through từ xung DWI.", 
        parameters: "Thực tế lâm sàng: Tổn thương sáng trên DWI, tối trên bản đồ ADC khẳng định là hạn chế khuếch tán thực sự (VD: Nhồi máu não cấp, áp xe, u đặc giàu tế bào)." 
    },
    { 
        id: 17, 
        en: "Flip Angle (FA)", 
        vi: "Góc lật", 
        type: "Parameter", 
        description: "Góc mà vector từ hóa dọc bị bẻ lệch khỏi trục B0 sau xung RF.", 
        parameters: "Thực tế: FA = 90 độ ở Spin Echo. FA < 90 độ (10-60 độ) dùng trong Gradient Echo giúp rút ngắn TR tối đa để chụp siêu nhanh. FA càng lớn hấp thụ nhiệt (SAR) càng cao." 
    },
    { 
        id: 18, 
        en: "Echo Train Length (ETL)", 
        vi: "Số lượng chuỗi tín hiệu dội", 
        type: "Parameter", 
        description: "Số lượng tín hiệu dội (echoes) liên tiếp được thu nhận trong một khoảng TR duy nhất (xung TSE/FSE).", 
        parameters: "Thực tế: ETL cao (16-32) rút ngắn cực mạnh thời gian chụp T2W, nhưng dễ làm mờ ảnh (blurring) và làm mỡ sáng lên bất thường. Thường giới hạn ETL < 10 cho T1W." 
    },
    { 
        id: 19, 
        en: "Receiver Bandwidth (rBW)", 
        vi: "Băng thông thu tín hiệu", 
        type: "Parameter", 
        description: "Phạm vi tần số vô tuyến được hệ thống thu nhận trong quá trình đọc tín hiệu.", 
        parameters: "Thực tế: Băng thông rộng (VD: 400 Hz/Px) giảm mạnh xảo ảnh hóa học và kim loại, cho phép TE ngắn hơn, nhưng bù lại ảnh bị nhiễu hạt nhiều hơn (giảm SNR)." 
    },
    { 
        id: 20, 
        en: "K-space", 
        vi: "Không gian K", 
        type: "Parameter", 
        description: "Ma trận không gian tần số lưu trữ dữ liệu thô trước khi biến đổi toán học Fourier thành ảnh thực.", 
        parameters: "Thực tế: Trọng tâm (Center) quyết định độ tương phản (Contrast/SNR). Vùng rìa ngoài quyết định độ sắc nét (Resolution). Bệnh nhân cựa quậy lúc thu nhận trung tâm sẽ hỏng cả ảnh." 
    },
    { 
        id: 21, 
        en: "Phase Encoding (PE)", 
        vi: "Mã hóa pha", 
        type: "Parameter", 
        description: "Gradient gán cho mỗi hàng trong không gian một pha xoay duy nhất.", 
        parameters: "Thực tế: Trục dễ bị tấn công bởi xảo ảnh cuộn (Aliasing) và bóng ma (Ghosting) do chuyển động nhất. Mẹo: Luôn cài trục Pha vuông góc với hướng cử động chính của bệnh nhân." 
    },
    { 
        id: 22, 
        en: "Frequency Encoding (FE)", 
        vi: "Mã hóa tần số", 
        type: "Parameter", 
        description: "Gradient phân biệt tín hiệu các điểm dọc theo một hàng dựa trên sự chênh lệch tần số.", 
        parameters: "Thực tế: Trục này thu nhận tín hiệu rất nhanh, không đóng góp vào thời gian chụp tổng. Thường thiết lập dọc theo trục dài của cơ thể để tận dụng tối đa FOV." 
    },
    { 
        id: 23, 
        en: "Parallel Imaging (PI) / SENSE", 
        vi: "Kỹ thuật chụp song song", 
        type: "Parameter", 
        description: "Tận dụng cấu trúc không gian của nhiều cuộn dây để bỏ qua việc thu nhận một số dòng k-space.", 
        parameters: "Thực tế: Hệ số tăng tốc (Factor R) = 2 giảm một nửa thời gian chụp. Không nên lạm dụng R > 3 nếu không có cuộn dây xịn (VD: 32 channels) vì SNR giảm rất sâu." 
    },
    { 
        id: 24, 
        en: "Specific Absorption Rate (SAR)", 
        vi: "Tỷ lệ hấp thụ riêng", 
        type: "Parameter", 
        description: "Đại lượng đo lường năng lượng sóng RF bị mô cơ thể hấp thụ và chuyển hóa thành nhiệt (W/kg).", 
        parameters: "Thực tế: Máy báo đỏ SAR thường xảy ra ở bệnh nhân to béo hoặc ở máy 3T. Cách gỡ lỗi: Tăng TR, giảm số lát cắt, giảm góc lật (FA) hoặc giảm ETL." 
    },
    { 
        id: 25, 
        en: "Signal-to-Noise Ratio (SNR)", 
        vi: "Tỷ lệ tín hiệu / nhiễu", 
        type: "Parameter", 
        description: "Thước đo độ sạch, mịn màng của bức ảnh MRI.", 
        parameters: "Thực tế tối ưu: Để tăng SNR khi ảnh bị nhiễu: Tăng FOV, tăng Bề dày lát cắt, tăng NEX, hoặc Giảm Ma trận, thu hẹp Băng thông rBW." 
    },
    { 
        id: 26, 
        en: "Contrast-to-Noise Ratio (CNR)", 
        vi: "Tỷ lệ tương phản / nhiễu", 
        type: "Parameter", 
        description: "Mức độ chênh lệch tín hiệu (dễ nhìn thấy ranh giới) giữa 2 loại mô kề nhau.", 
        parameters: "Thực tế: Tiêm thuốc đối quang từ (Gadolinium) hoặc sử dụng các kỹ thuật xóa mỡ (FatSat), xóa nước (FLAIR) là cách tăng CNR mạnh mẽ nhất trên lâm sàng." 
    },
    { 
        id: 27, 
        en: "Fat Saturation (FatSat)", 
        vi: "Xóa mỡ bão hòa", 
        type: "Parameter", 
        description: "Phát một xung RF hẹp đúng tần số của Mỡ để triệt tiêu tín hiệu mỡ trước khi phát xung chính.", 
        parameters: "Thực tế: Cực kỳ nhạy cảm với sự không đồng nhất từ trường. Hay bị xóa loang lổ ở vùng cổ, vai, gối. Mẹo: Nếu FatSat xấu, hãy chuyển sang dùng xung STIR hoặc DIXON." 
    },
    { 
        id: 43, 
        en: "Blood Oxygenation Level Dependent (BOLD)", 
        vi: "Hiệu ứng BOLD", 
        type: "Parameter", 
        description: "Cơ sở của fMRI: Máu tĩnh mạch (Deoxyhemoglobin) có tính thuận từ làm giảm T2*, máu động mạch (Oxyhemoglobin) thì không.", 
        parameters: "Thực tế: Dùng lập bản đồ chức năng não. Yêu cầu từ trường máy cực kỳ ổn định và sức mạnh lớn (khuyến nghị 3.0 Tesla trở lên để có tín hiệu rõ rệt)." 
    },
    { 
        id: 44, 
        en: "Fractional Anisotropy (FA)", 
        vi: "Bất đẳng hướng phân đoạn", 
        type: "Parameter", 
        description: "Đại lượng đo lường mức độ khuếch tán có hướng của phân tử nước, giá trị từ 0 (đẳng hướng) đến 1 (dị hướng tuyệt đối).", 
        parameters: "Thực tế: Ứng dụng trong DTI (Tractography) để vẽ bó sợi thần kinh sọ não. Nước trong chất trắng có FA cao do bị bọc bởi màng myelin." 
    },
    { 
        id: 45, 
        en: "Velocity Encoding (VENC)", 
        vi: "Mã hóa vận tốc", 
        type: "Parameter", 
        description: "Ngưỡng cài đặt vận tốc tối đa của dòng chảy trước khi xảy ra hiện tượng cuộn pha ngược (Aliasing).", 
        parameters: "Thực tế PC-MRA: Cài VENC quá thấp -> nhiễu dòng chảy, cài quá cao -> mất tín hiệu mạch máu chậm. Động mạch não (60-80 cm/s), Tĩnh mạch (20-40 cm/s)." 
    },
    { 
        id: 46, 
        en: "Spatial Resolution", 
        vi: "Độ phân giải không gian", 
        type: "Parameter", 
        description: "Khả năng phân biệt hai điểm nằm cạnh nhau trên ảnh.", 
        parameters: "Thực tế: Quyết định bởi kích thước Pixel (FOV / Matrix) và Bề dày lát cắt. Voxel càng nhỏ độ phân giải càng cao nhưng SNR càng tụt dốc." 
    },
    { 
        id: 47, 
        en: "Temporal Resolution", 
        vi: "Độ phân giải thời gian", 
        type: "Parameter", 
        description: "Tốc độ cập nhật hình ảnh, tính bằng số khung hình mỗi giây hoặc thời gian thu một thể tích.", 
        parameters: "Thực tế: Đặc biệt tối quan trọng trong MRI Tim (Cine) hoặc chụp động học tưới máu (DCE). Cần dùng kỹ thuật Parallel Imaging hoặc EPI để tối ưu." 
    },
    { 
        id: 48, 
        en: "Slice Gap / Spacing", 
        vi: "Khoảng cách lát cắt", 
        type: "Parameter", 
        description: "Khoảng trống không được thu nhận tín hiệu giữa hai lát cắt liền kề.", 
        parameters: "Thực tế: Thường đặt 10-20% bề dày lát cắt để chống nhiễu xuyên âm (Cross-talk). Với ảnh 3D, Slice Gap luôn bằng 0." 
    },
    { 
        id: 49, 
        en: "Isotropic Voxel", 
        vi: "Voxel đẳng hướng", 
        type: "Parameter", 
        description: "Kích thước điểm ảnh 3D khối lập phương (chiều x = y = z).", 
        parameters: "Thực tế: Tiêu chuẩn vàng cho xung 3D (VD: CISS, FIESTA, SPACE). Cho phép tái tạo hình ảnh đa mặt phẳng (MPR) ở bất kỳ hướng nào mà không bị mờ hay nhòe." 
    },
    { 
        id: 50, 
        en: "Anisotropic Voxel", 
        vi: "Voxel dị hướng", 
        type: "Parameter", 
        description: "Pixel 3D có một chiều (thường là Z - lát cắt) lớn hơn hẳn hai chiều kia.", 
        parameters: "Thực tế: Gặp ở các xung 2D truyền thống. Nếu cố tình dựng MPR từ ảnh dị hướng, hình ảnh sẽ bị hiện tượng bậc thang (răng cưa) rất xấu." 
    },
    { 
        id: 51, 
        en: "Free Induction Decay (FID)", 
        vi: "Phân rã cảm ứng tự do", 
        type: "Parameter", 
        description: "Tín hiệu thô ban đầu tắt dần cực nhanh ngay sau khi ngắt xung kích thích 90 độ do sự mất đồng pha tự nhiên.", 
        parameters: "Thực tế: Không thể dùng trực tiếp để tạo ảnh y khoa thông thường do suy giảm quá nhanh. Cần dùng xung 180 độ (TSE) hoặc chênh từ (GRE) để tạo dội tín hiệu (Echo) lại." 
    },
    { 
        id: 52, 
        en: "Larmor Frequency", 
        vi: "Tần số tiến động Larmor", 
        type: "Parameter", 
        description: "Tần số dao động tự nhiên của proton trong từ trường. Công thức: f = γ × B0.", 
        parameters: "Thực tế: Tại 1.5 Tesla, hydro quay ở 63.86 MHz. Hệ thống sẽ tinh chỉnh tần số trung tâm (Center Frequency) của máy xoay quanh mức này vào đầu mỗi ca chụp." 
    },
    { 
        id: 53, 
        en: "Gyromagnetic Ratio", 
        vi: "Hằng số từ hồi chuyển (γ)", 
        type: "Parameter", 
        description: "Đặc tính hằng số vật lý của từng loại hạt nhân nguyên tử. Của Hydrogen (1H) là 42.58 MHz/Tesla.", 
        parameters: "Thực tế: Hydrogen là nguyên tố có hằng số lớn nhất và phong phú nhất trong cơ thể (nước, mỡ), đây là lý do duy nhất nó được dùng làm nguồn tín hiệu cho MRI lâm sàng." 
    },
    { 
        id: 54, 
        en: "B0 (Main Magnetic Field)", 
        vi: "Từ trường chính", 
        type: "Parameter", 
        description: "Từ trường tĩnh, luôn luôn bật 24/7 của ống máy, sức mạnh tính bằng Tesla (T).", 
        parameters: "Thực tế: AN TOÀN B0 LÀ QUY TẮC SỐ 1. B0 liên tục hút mạnh các vật liệu sắt từ. Tuyệt đối cấm mang bình oxy, chìa khóa, xe lăn thông thường vào phòng máy." 
    },
    { 
        id: 55, 
        en: "B1 (Radiofrequency Field)", 
        vi: "Từ trường RF", 
        type: "Parameter", 
        description: "Từ trường dao động tần số vô tuyến được cuộn phát (Transmit Coil) đánh vào cơ thể vuông góc với B0.", 
        parameters: "Thực tế: B1 chính là thủ phạm gây sinh nhiệt trên cơ thể (SAR). Cần theo dõi nhiệt độ phòng máy để giảm tải cho bệnh nhân." 
    },
    { 
        id: 56, 
        en: "Radiofrequency (RF) Pulse", 
        vi: "Xung vô tuyến RF", 
        type: "Parameter", 
        description: "Chùm sóng điện từ phát ra trong thời gian ngắn để bơm năng lượng cộng hưởng vào spin.", 
        parameters: "Thực tế: Bao gồm xung 90 độ (lật spin xuống) và 180 độ (hội tụ spin lại). Số lượng và cách sắp xếp các xung RF này tạo nên các họ chuỗi xung khác nhau." 
    },
    { 
        id: 57, 
        en: "Shimming", 
        vi: "Tinh chỉnh đồng nhất từ trường", 
        type: "Parameter", 
        description: "Quá trình làm phẳng từ trường B0 tại vị trí vùng giải phẫu đang khảo sát.", 
        parameters: "Thực tế: Máy thường tự động Shim vài giây trước khi chụp. Bắt buộc phải Shim lại bằng tay hoặc chạy lại Prescan nếu chạy kỹ thuật xóa mỡ FatSat hoặc Chụp phổ MRS bị lỗi." 
    },
    { 
        id: 58, 
        en: "Aliasing / Wrap-around", 
        vi: "Xảo ảnh nhiễu cuộn", 
        type: "Artifact", 
        description: "Các bộ phận cơ thể nằm ngoài giới hạn FOV nhưng vẫn lọt vào cuộn dây thu, bị máy tính lộn ngược đè vào trung tâm ảnh.", 
        parameters: "Khắc phục: Mở rộng FOV bao trùm hết giải phẫu, hoặc bật thông số No Phase Wrap / Phase Oversampling lên mức 50-100%." 
    },
    { 
        id: 59, 
        en: "Chemical Shift Artifact", 
        vi: "Xảo ảnh lệch pha hóa học", 
        type: "Artifact", 
        description: "Sự dịch chuyển vị trí giữa mô nước và mỡ tạo ra vệt đen một bờ và vệt trắng bờ đối diện (dọc theo trục mã hóa tần số).", 
        parameters: "Khắc phục thực tế: Cần tăng Băng thông thu tín hiệu (rBW) lên cao, hoặc dùng các kỹ thuật xóa mỡ để làm mất vệt mỡ-nước." 
    },
    { 
        id: 60, 
        en: "Truncation / Gibbs Artifact", 
        vi: "Xảo ảnh cắt cụt Gibbs", 
        type: "Artifact", 
        description: "Nhiễu xuất hiện dưới dạng các đường vân sáng tối song song tại các ranh giới có độ chênh lệch tín hiệu đột ngột (VD: tủy sống - dịch não tủy).", 
        parameters: "Khắc phục thực tế: Chỉ có một cách hiệu quả là Tăng ma trận thu nhận (đặc biệt là ma trận trục Pha) hoặc bật bộ lọc 2D Filter tùy hãng." 
    },
    { 
        id: 61, 
        en: "Motion Artifact / Ghosting", 
        vi: "Bóng ma / Chuyển động", 
        type: "Artifact", 
        description: "Hình mờ lặp đi lặp lại dọc theo toàn bộ trục mã hóa pha do bệnh nhân nhúc nhích, hắt hơi, tim đập hoặc hít thở.", 
        parameters: "Khắc phục thực tế: Trao đổi kỹ để bệnh nhân nằm im. Dùng kỹ thuật Đồng bộ hô hấp (Triggering), nín thở, đổi Phase direction, hoặc dùng xung BLADE/PROPELLER." 
    },
    { 
        id: 62, 
        en: "Magic Angle Effect", 
        vi: "Hiệu ứng góc ma thuật", 
        type: "Artifact", 
        description: "Tín hiệu giả sáng tạo cảm giác như bị rách/viêm ở gân, dây chằng khi chúng tạo góc khoảng 55 độ so với từ trường B0.", 
        parameters: "Khắc phục thực tế: Tín hiệu giả này chỉ thấy trên chuỗi xung TE ngắn (T1W, PDW). Hãy kiểm tra đối chiếu sang xung T2W (TE dài), nếu hết sáng thì đó là góc ma thuật." 
    },
    { 
        id: 63, 
        en: "Cross-talk", 
        vi: "Xảo ảnh nhiễu xuyên âm", 
        type: "Artifact", 
        description: "Sự suy giảm tín hiệu lan truyền giữa các lát cắt kề sát nhau do phổ kích thích RF của máy không phải hình chữ nhật hoàn hảo.", 
        parameters: "Khắc phục thực tế: Cài đặt khoảng cách Slice Gap tối thiểu 10% đến 20%, hoặc chạy Interleaved (cắt ngắt quãng 1-3-5 rồi vòng lại 2-4-6)." 
    },
    { 
        id: 64, 
        en: "Magnetic Susceptibility Artifact", 
        vi: "Xảo ảnh nhạy từ tính", 
        type: "Artifact", 
        description: "Biến dạng hình học hoặc lỗ hổng đen kịt, mất hoàn toàn tín hiệu do sự hiện diện của kim loại, khí trong ruột hoặc máu tụ.", 
        parameters: "Khắc phục thực tế: Tuyệt đối tránh dùng xung Gradient Echo (nhạy từ). Chuyển sang dùng xung Spin Echo (TSE/FSE), tăng rBW tối đa, và tăng kích thước ma trận." 
    },
    { 
        id: 65, 
        en: "Saturation Bands (Sat Bands)", 
        vi: "Băng bão hòa", 
        type: "Parameter", 
        description: "Khối đồ họa màu vàng/xanh đặt lên vùng giải phẫu ngoài vùng cần chụp để phát xung 90 độ dập tắt đen thui toàn bộ tín hiệu vùng đó.", 
        parameters: "Thực tế: Dùng chặn mạch máu ở cổ họng để chống nhiễu bóng ma lên cột sống cổ, hoặc chặn nhịp thở của thành bụng đè lên gan." 
    },
    { 
        id: 66, 
        en: "Trigger Delay", 
        vi: "Độ trễ đồng bộ", 
        type: "Parameter", 
        description: "Khoảng thời gian tính bằng ms từ khi bắt được đỉnh sóng R trên điện tâm đồ (ECG) đến khi máy phát xung chụp.", 
        parameters: "Thực tế MRI Tim: Nhằm đưa thời điểm thu nhận ảnh k-space rơi trúng vào thì tâm trương (khi tim nghỉ ngơi, ít vận động nhất) để ảnh không nhòe." 
    },
    { 
        id: 67, 
        en: "R-R Interval", 
        vi: "Khoảng R-R", 
        type: "Parameter", 
        description: "Chu kỳ thời gian giữa hai nhịp đập của tim (hai đỉnh R), đóng vai trò thay thế cho tham số TR trong các chuỗi xung chụp Tim mạch.", 
        parameters: "Thực tế: Nếu bệnh nhân loạn nhịp, khoảng R-R dao động liên tục làm ảnh mờ nát. Cần dán lại điện cực thật chuẩn hoặc cho thuốc hạ nhịp tim." 
    },
    { 
        id: 68, 
        en: "Respiratory Triggering", 
        vi: "Đồng bộ hô hấp", 
        type: "Parameter", 
        description: "Máy dùng đai áp lực quấn ngang bụng, lập biểu đồ nhịp thở và chỉ ra lệnh quét khi bệnh nhân thở ra (thì thở ra tĩnh).", 
        parameters: "Thực tế: Bắt buộc dùng cho chuỗi xung T2 TSE đường mật (MRCP) hoặc Gan nếu bệnh nhân không đủ sức nín thở dài." 
    },
    { 
        id: 69, 
        en: "Navigator Echo", 
        vi: "Xung định vị hô hấp", 
        type: "Parameter", 
        description: "Một dải xung RF phụ như thanh bút chì bắn liên tục vào vòm hoành để đo đạc vị trí dịch chuyển của gan theo nhịp thở.", 
        parameters: "Thực tế: Chính xác và hiện đại hơn đai bụng rất nhiều. Máy tự động lọc bỏ các dữ liệu sai lệch khi bệnh nhân hít vào sâu, đảm bảo ảnh gan/tim sắc nét." 
    },
    { 
        id: 70, 
        en: "Breath-hold (BH)", 
        vi: "Nín thở", 
        type: "Parameter", 
        description: "Yêu cầu bệnh nhân phối hợp hít vào và nín thở tĩnh trong khoảng 10-20 giây để chụp các chuỗi xung cực nhanh.", 
        parameters: "Thực tế: Là tiêu chuẩn vàng cho chụp Bụng chậu tiêm thuốc động học (VIBE, LAVA). Kỹ thuật viên cần hô rõ ràng qua loa để bệnh nhân chuẩn bị." 
    },
    { 
        id: 71, 
        en: "Compressed Sensing (CS)", 
        vi: "Cảm biến nén", 
        type: "Parameter", 
        description: "Thuật toán tái tạo ảnh lặp phức tạp lấy cảm hứng từ học máy, cho phép cố tình thu thiếu tới 80% K-space nhưng vẫn phục hồi ảnh độ nét cao.", 
        parameters: "Thực tế: Cuộc cách mạng giảm thời gian chụp. Xung 3D MRCP giảm từ 3-4 phút xuống chỉ còn khoảng 15 giây (một lần nín thở)." 
    },
    { 
        id: 74, 
        en: "Time-Intensity Curve (TIC)", 
        vi: "Đường cong DCE", 
        type: "Parameter", 
        description: "Đồ thị thể hiện động học bắt thuốc cản từ của một khối u qua các pha thời gian (Base -> Động mạch -> Tĩnh mạch -> Muộn).", 
        parameters: "Thực tế ứng dụng MRI vú/tuyến tiền liệt: Type I (Đi lên liên tục = lành tính), Type II (Ngang = nghi ngờ), Type III (Bắt thuốc nhanh và thải thuốc nhanh wash-out = rất gợi ý ác tính)." 
    },
    { 
        id: 75, 
        en: "Maximum Intensity Projection (MIP)", 
        vi: "Hình chiếu cường độ tối đa", 
        type: "Parameter", 
        description: "Thuật toán xử lý trạm làm việc, chỉ giữ lại các Voxel sáng nhất theo các tia nhìn xuyên qua khối dữ liệu 3D để dựng hình.", 
        parameters: "Thực tế: Là thao tác hậu xử lý (post-processing) không thể thiếu để tạo ra bản đồ mạch máu MRA xoay 3D nổi bật, hoặc cây đường mật MRCP." 
    },
    { 
        id: 76, 
        en: "Multi-Planar Reconstruction (MPR)", 
        vi: "Tái tạo đa mặt phẳng", 
        type: "Parameter", 
        description: "Kỹ thuật thái mỏng lại một khối dữ liệu 3D gốc thành các lát cắt 2D theo các hướng nghiêng chéo bất kỳ (Axial, Sagittal, Coronal).", 
        parameters: "Thực tế: Yêu cầu bắt buộc là bộ dữ liệu gốc (VD: 3D TOF, 3D SPACE) phải đạt chuẩn Voxel đẳng hướng (Isotropic) thì hình cắt ngang mới không bị méo/mờ." 
    },
    { 
        id: 77, 
        en: "Subtraction", 
        vi: "Xóa nền", 
        type: "Parameter", 
        description: "Thuật toán trừ toán học lấy từng pixel của ảnh 'Sau tiêm' trừ đi ảnh 'Trước tiêm' (Baseline).", 
        parameters: "Thực tế: Cực kỳ hữu ích trong chụp MRI Vú hoặc Chậu, giúp các vùng ngấm thuốc sáng rực lên trên nền mô cũ đen kịt. Yêu cầu bệnh nhân tuyệt đối không nhúc nhích giữa các pha." 
    },
    { 
        id: 78, 
        en: "T1 Relaxation Time", 
        vi: "Thời gian phục hồi T1", 
        type: "Parameter", 
        description: "Thời gian đặc trưng của mỗi mô để vector từ hóa dọc Mz hồi phục lại được 63% độ lớn ban đầu (sau xung 90).", 
        parameters: "Thực tế cơ sở lý thuyết: Mỡ có T1 rất ngắn -> hồi phục nhanh -> sáng sớm trên T1W. Nước có T1 dài -> hồi phục chậm -> tối đen trên T1W." 
    },
    { 
        id: 79, 
        en: "T2 Relaxation Time", 
        vi: "Thời gian phân rã T2", 
        type: "Parameter", 
        description: "Thời gian đặc trưng để vector từ hóa ngang Mxy phân rã (mất đồng pha spin-spin) còn 37% giá trị tối đa ban đầu.", 
        parameters: "Thực tế cơ sở lý thuyết: Nước và chất lỏng tự do có T2 rất dài -> giữ tín hiệu lâu -> sáng rực trên T2W. Cơ và xương có T2 ngắn -> tối." 
    },
    { 
        id: 80, 
        en: "T2* (T2 star) Decay", 
        vi: "Phân rã T2 sao", 
        type: "Parameter", 
        description: "Tốc độ suy giảm tín hiệu thực tế siêu nhanh: bao gồm hiệu ứng phân rã T2 mô cộng gộp với sự mất đồng pha do từ trường B0 không đồng nhất.", 
        parameters: "Thực tế: Nền tảng để chế tạo xung Gradient Echo (GRE) nhạy máu bầm (HEMO) và xung SWI nhạy cảm từ tính (tìm vi xuất huyết não)." 
    },
    { 
        id: 89, 
        en: "Phased Array Coil", 
        vi: "Cuộn mảng pha", 
        type: "Hardware", 
        description: "Ghép nhiều cuộn thu nhỏ (channels) lại với nhau thành một mảng lưới bao bọc giải phẫu.", 
        parameters: "Thực tế phần cứng: Thu được SNR sát bề mặt lớn nhưng lại bao phủ sâu rộng. Là điều kiện bắt buộc để chạy các kỹ thuật chụp song song (SENSE/GRAPPA)." 
    },
    { 
        id: 90, 
        en: "Surface Coil", 
        vi: "Cuộn bề mặt", 
        type: "Hardware", 
        description: "Cuộn dây thu tín hiệu hình vòng nhỏ, đặt áp sát ngay trên vùng da cần khảo sát.", 
        parameters: "Thực tế phần cứng: Chỉ cung cấp SNR xuất sắc ở các vùng nông gần cuộn dây (Tuyến giáp, khớp thái dương hàm, da). Tín hiệu giảm mạnh và tối đen khi đi sâu vào trong." 
    },
    { 
        id: 91, 
        en: "Volume Coil", 
        vi: "Cuộn thể tích", 
        type: "Hardware", 
        description: "Cuộn dây lồng chim (Birdcage) hoặc yên ngựa bao trùm xung quanh toàn bộ vùng khảo sát (VD: Cuộn Sọ não tiêu chuẩn).", 
        parameters: "Thực tế phần cứng: Ưu điểm mạnh nhất là tạo ra trường thu phát tín hiệu rất đồng nhất (SNR đều) trên toàn bộ thể tích mô bên trong lòng nó." 
    },
    { 
        id: 92, 
        en: "Gradient Slew Rate", 
        vi: "Tốc độ dốc chênh từ", 
        type: "Parameter", 
        description: "Đại lượng đo tốc độ cuộn Gradient đạt được biên độ sức mạnh cực đại, tính bằng T/m/s.", 
        parameters: "Thực tế máy móc: Slew Rate càng cao, máy chụp EPI/DWI càng nhanh và mỏng. Đổi lại, bệnh nhân nghe tiếng búa gõ đập càng ồn ào và rủi ro giật cơ." 
    },
    { 
        id: 93, 
        en: "Gradient Amplitude", 
        vi: "Biên độ Gradient", 
        type: "Parameter", 
        description: "Sức mạnh từ trường dốc tối đa mà cuộn dây Gradient có thể sinh ra (mT/m).", 
        parameters: "Thực tế máy móc: Biên độ cao (ví dụ 45-80 mT/m) là chìa khóa để chạy DWI với b-value lên tới 2000-3000 hoặc cắt các lát mỏng siêu nhỏ cho độ phân giải cao." 
    },
    { 
        id: 94, 
        en: "Partial Fourier / Half Scan", 
        vi: "Thu thập k-space 1 phần", 
        type: "Parameter", 
        description: "Chiến thuật máy chỉ quét một nửa hoặc 60-70% dữ liệu K-space, phần còn lại dùng tính đối xứng toán học Hermite để điền vào.", 
        parameters: "Thực tế: Rất hiệu quả để giảm thời gian chụp những xung dài, tuy nhiên SNR sẽ bị giảm theo. Nên kết hợp với NEX=2 nếu ảnh quá nhiễu." 
    },
    { 
        id: 95, 
        en: "Phase Oversampling", 
        vi: "Thừa pha (Chống cuộn)", 
        type: "Parameter", 
        description: "Hệ thống tự động nhân đôi FOV theo chiều mã hóa pha để thu thập mô ngoài lề, sau đó cắt bỏ đi ở bước tạo ảnh.", 
        parameters: "Thực tế: Là công cụ tối thượng triệt để ngăn chặn xảo ảnh Aliasing. Bù lại nó sẽ làm tăng thời gian quét tỷ lệ thuận với số phần trăm cài đặt (trừ máy hãng GE)." 
    },
    { 
        id: 96, 
        en: "Concatenations", 
        vi: "Chia block TR", 
        type: "Parameter", 
        description: "Chia tổng số lượng Slices cần chụp ra làm 2-3 lần quét xen kẽ ghép nối với nhau.", 
        parameters: "Thực tế: Dùng bắt buộc khi TR cài đặt quá ngắn không đủ thời gian bao phủ hết số lát cắt mong muốn. Nhược điểm là làm xảo ảnh di động (nhịp thở) nhảy bậc giữa các block." 
    },
    { 
        id: 97, 
        en: "Wash-in / Wash-out", 
        vi: "Thải/Bắt thuốc", 
        type: "Parameter", 
        description: "Thuật ngữ động học tiêm thuốc: Wash-in (tốc độ ngấm vọt lên thì động mạch) và Wash-out (sự thải thuốc nhanh thoát ra ngoài khối u).", 
        parameters: "Thực tế lâm sàng: Là tiêu chí hàng đầu trong chẩn đoán hình ảnh ung thư (VD: phân loại BI-RADS vú hoặc PI-RADS tuyến tiền liệt)." 
    },
    { 
        id: 98, 
        en: "Variable Flip Angle Sweep", 
        vi: "Quét góc lật biến đổi", 
        type: "Parameter", 
        description: "Thay vì dùng xung hồi phục 180 độ liên tục, chuỗi xung TSE 3D sử dụng dãy các góc lật nhỏ dần thay đổi liên tục dọc chuỗi Echo.", 
        parameters: "Thực tế: Chìa khóa độc quyền tạo nên chuỗi xung 3D SPACE (Siemens) hay VISTA (Philips). Khắc phục hoàn toàn xảo ảnh mờ nhòe (Blurring) của xung TSE 3D." 
    },
    { 
        id: 99, 
        en: "Baseline", 
        vi: "Pha nền DCE", 
        type: "Parameter", 
        description: "Bộ ảnh gốc (Mask) quét hoàn chỉnh ngay trước khi tiêm thuốc nhưng vẫn giữ bệnh nhân nằm im.", 
        parameters: "Thực tế: Không có pha Baseline chuẩn xác, tính năng xóa nền Subtraction phía sau sẽ vô dụng vì hình nền không khớp sẽ bị loang lổ." 
    },
    { 
        id: 100, 
        en: "Specific Energy Dose (SED)", 
        vi: "Liều năng lượng riêng", 
        type: "Parameter", 
        description: "Tổng năng lượng RF lũy kế tích tụ mà bệnh nhân/kg phải gánh chịu trong cả một quy trình chụp dài (kJ/kg).", 
        parameters: "Thực tế: Quản lý gắt gao ở bệnh nhi hoặc bệnh nhân sốt cao. Quá liều SED sẽ làm bệnh nhân đổ mồ hôi và nóng rát cơ thể." 
    },

    // --- 33 THUẬT NGỮ THÔNG SỐ/XẢO ẢNH/PHẦN CỨNG MỚI (ĐẠT 100 ITEM - BỔ SUNG CHI TIẾT) ---
    { 
        id: 2001, 
        en: "Echo Spacing (ESP)", 
        vi: "Khoảng cách giữa các Echo", 
        type: "Parameter", 
        description: "Khoảng thời gian (thường tính bằng mili-giây) giữa các lần máy tính toán thu nhận tín hiệu dội (Echo) trong chuỗi Echo Train (TSE/EPI).", 
        parameters: "Thực tế: ESP càng ngắn, xảo ảnh mờ (blur) càng giảm trên xung TSE và xảo ảnh méo hình (distortion) giảm mạnh trên EPI/DWI. Tăng rBW là cách hạ ESP." 
    },
    { 
        id: 2002, 
        en: "EPI Factor", 
        vi: "Hệ số EPI", 
        type: "Parameter", 
        description: "Đại diện cho số lượng dòng k-space được thu nhận liên tục chớp nhoáng trong 1 shot kích thích của xung hình EPI (DWI/fMRI).", 
        parameters: "Thực tế: Thường cài đặt từ 64 đến 128. Cài quá cao (Single-shot) sẽ làm hình ảnh bị méo xệch ở vùng đáy sọ, cần đổi sang Multi-shot (Readout-segmented) để bù đắp." 
    },
    { 
        id: 2003, 
        en: "SENSE Factor / iPAT", 
        vi: "Hệ số tăng tốc (Parallel Imaging)", 
        type: "Parameter", 
        description: "Con số (VD: 2, 3, 4) thể hiện số dòng K-space được phép cố tình bỏ lỡ và nội suy bù đắp bằng số liệu nhạy cảm không gian của các kênh cuộn thu.", 
        parameters: "Thực tế: Factor 2 khá an toàn. Lên Factor 3 SNR giảm thê thảm và xảo ảnh cuộn song song vào tâm (SENSE artifact) xuất hiện dày đặc. Tránh dùng lớn hơn 2 ở thân mình." 
    },
    { 
        id: 2004, 
        en: "Phase Partial Fourier", 
        vi: "Thu nhận Fourier bán phần chiều pha", 
        type: "Parameter", 
        description: "Chiến thuật máy móc bỏ qua một phần mã hóa pha (thường thu 5/8, 6/8 hoặc 7/8 k-space).", 
        parameters: "Thực tế: Được ứng dụng làm 'phao cứu sinh' giảm thời gian chụp khi không thể tăng SENSE factor được nữa. Giữ nguyên FOV và ma trận độ nét." 
    },
    { 
        id: 2005, 
        en: "Slice Partial Fourier", 
        vi: "Thu nhận Fourier bán phần chiều Slice (3D)", 
        type: "Parameter", 
        description: "Kỹ thuật Partial Fourier mở rộng cho trục Z (mã hóa lát cắt) chỉ dùng trong các ứng dụng quét nguyên khối 3D.", 
        parameters: "Thực tế: Khuyên dùng cho xung 3D TOF sọ não để hãm tổng thời gian quét (thường 5-6 phút) xuống mức chấp nhận được cho bệnh nhân." 
    },
    { 
        id: 2006, 
        en: "Asymmetric Echo", 
        vi: "Thu nhận tín hiệu dội bất đối xứng", 
        type: "Parameter", 
        description: "Chỉ thu thập phần đi xuống (phần sau) của đỉnh Echo, cho phép máy đạt được TE siêu cực ngắn.", 
        parameters: "Thực tế: Kích hoạt khi cần chụp In-phase/Out-phase vùng bụng (TE ~2ms) hoặc chụp xung mạch máu 3D không ngấm thuốc hãm thời gian dội." 
    },
    { 
        id: 2007, 
        en: "Receiver Gain", 
        vi: "Độ khuếch đại tín hiệu thu", 
        type: "Parameter", 
        description: "Biến trở của máy MRI khuếch đại dòng tín hiệu thô tí hon nhận được từ cuộn dây lên cấp độ Vôn trước khi đưa vào ADC số hóa.", 
        parameters: "Thực tế bảo trì: Cài tự động. Nếu quá cao do lỗi coil, dữ liệu bị vỡ (Clipping) sinh xảo ảnh nhiễu sạn trắng. Quá thấp thì hình đen xì thui." 
    },
    { 
        id: 2008, 
        en: "Transmit Gain (TG)", 
        vi: "Độ khuếch đại phát RF", 
        type: "Parameter", 
        description: "Năng lượng điện (kV) tủ máy cần bơm vào cuộn phát để đạt được một góc lật (Flip Angle) chính xác trên một bệnh nhân cụ thể.", 
        parameters: "Thực tế thao tác: Máy tự dò dải này (Prescan). Gặp bệnh nhân cực lớn bụng/béo phì, máy đẩy TG tối đa gây cảnh báo cấm quét, cần nhờ người nhà ép nhẹ người bệnh." 
    },
    { 
        id: 2009, 
        en: "Prescan / Center Frequency Calibration", 
        vi: "Dò tần số trung tâm (Prescan)", 
        type: "Parameter", 
        description: "Quá trình máy tự động rà dải sóng để tìm chính xác tần số cộng hưởng trung tâm của phân tử nước trong bộ phận giải phẫu đó.", 
        parameters: "Thực tế lỗi lâm sàng: Quá trình này sẽ báo FAILED nếu bệnh nhân có khớp háng giả/kim loại mảng lớn, làm lệch đỉnh nước. Kỹ thuật viên phải chỉnh Center Frequency bằng tay." 
    },
    { 
        id: 2010, 
        en: "Active Shimming", 
        vi: "Chỉnh từ trường chủ động", 
        type: "Hardware", 
        description: "Hệ thống các vòng cuộn điện từ thứ cấp siêu chính xác bơm dòng DC liên tục để nắn bóp lại khối từ trường B0 cho thật phẳng.", 
        parameters: "Thực tế: Đây là tính năng Shim ta dùng hàng ngày. Tùy chỉnh cường độ trên mỗi bệnh nhân (VD: Shim vùng vai rất khó, cần kéo box Shim bao trùm rộng hơn)." 
    },
    { 
        id: 2011, 
        en: "Passive Shimming", 
        vi: "Chỉnh từ trường thụ động", 
        type: "Hardware", 
        description: "Những khối thép/kim loại nhỏ được chuyên gia cố định vĩnh viễn bên trong thân ống máy bằng các khay sắt.", 
        parameters: "Thực tế lắp ráp: Chỉ thực hiện duy nhất 1 lần khi mới lắp máy vào bệnh viện để bù trừ cho sắt thép bêtông của móng phòng. KTV không bao giờ đụng vào." 
    },
    { 
        id: 2012, 
        en: "Dielectric Pad", 
        vi: "Đệm điện môi", 
        type: "Hardware", 
        description: "Gối nhựa mềm chứa dung dịch chuyên biệt (Barium Titanate) đắp ôm sát bụng bệnh nhân ở máy 3.0 Tesla.", 
        parameters: "Thực tế sử dụng: Triệt tiêu xảo ảnh bóng đen hốc ở gan/bụng trên người lớn do sóng 3T bị cộng hưởng điện môi hụt bước sóng. Khá nặng và cồng kềnh." 
    },
    { 
        id: 2013, 
        en: "Maxwell Coils / Golay Coils", 
        vi: "Cuộn chênh từ Maxwell/Golay", 
        type: "Hardware", 
        description: "Tên thuật ngữ vật lý của thiết kế cuộn dây Gradient (Maxwell uốn từ trường cho trục Z - lát cắt Ax, Golay uốn cho trục X, Y).", 
        parameters: "Lý thuyết kiến trúc: Quyết định giới hạn hình học của hệ thống Gradient hình trụ bên trong lồng Faraday máy MRI." 
    },
    { 
        id: 2014, 
        en: "Helium Boil-off", 
        vi: "Tỷ lệ bay hơi Heli", 
        type: "Parameter", 
        description: "Tốc độ hao hụt khí Helium lỏng siêu lạnh (nhiệt độ 4 Kelvin) do bộ nén lạnh (Coldhead) không làm việc hiệu quả 100%.", 
        parameters: "Thực tế phòng chụp: Máy cũ có thể hao 0.01% mỗi ngày, cần gọi hãng châm Helium định kỳ tốn kém. Máy đời mới \"Zero-boil-off\" bít kín vòng tuần hoàn." 
    },
    { 
        id: 2015, 
        en: "Gradient Amplifier", 
        vi: "Tủ khuếch đại Gradient", 
        type: "Hardware", 
        description: "Cỗ máy điện áp cực khủng sau lưng phòng kỹ thuật, bơm dòng điện tới hàng ngàn Ampe chớp nhoáng (ms) vào cuộn gradient trong máy.", 
        parameters: "Thực tế vận hành: Tỏa nhiệt khủng khiếp. Khi chiller (nước làm mát) tủ này lỗi, tủ quá nhiệt và máy sẽ chặn không cho quét bất kỳ xung nào." 
    },
    { 
        id: 2016, 
        en: "Zipper Artifact", 
        vi: "Xảo ảnh hình kéo khóa (Zipper)", 
        type: "Artifact", 
        description: "Dải sọc nhiễu xuyên ngang toàn bộ màn hình (luôn nằm dọc theo hướng Phase) có hình nhấp nhô như răng khóa kéo.", 
        parameters: "Khắc phục thực tế: Nguyên nhân 100% do cửa lồng Faraday phòng chụp đóng chưa khít, hoặc kẹt rác ở roong đồng, làm lọt sóng FM, bộ đàm, điện thoại bên ngoài vào." 
    },
    { 
        id: 2017, 
        en: "Herringbone / Corduroy Artifact", 
        vi: "Xảo ảnh vân gỗ / Herringbone", 
        type: "Artifact", 
        description: "Toàn bộ FOV bị phủ một lớp sóng sọc chéo chằng chịt, đều đặn như vân thớ vải hoặc thớ gỗ.", 
        parameters: "Khắc phục thực tế: Đây là lỗi phần cứng chập chờn (spike điện ở cụm Receiver/Tủ thu nhận). KTV phải khởi động lại toàn bộ hệ thống máy hoặc gọi kỹ sư." 
    },
    { 
        id: 2018, 
        en: "Moire Fringes", 
        vi: "Xảo ảnh vân sóng Moire", 
        type: "Artifact", 
        description: "Các vòng sóng đen trắng vằn vện đồng tâm xếp lớp ở rìa ngoài ảnh trên các xung Gradient Echo (VD: In/Out phase) vùng bụng lớn.", 
        parameters: "Khắc phục thực tế: Sự kết hợp tai hại giữa xảo ảnh Aliasing và từ trường B0 quá tồi ở rìa máy. Cần bật Phase Oversampling lên cực đại và đắp đệm điện môi bù tín hiệu." 
    },
    { 
        id: 2019, 
        en: "Dielectric Resonance Artifact", 
        vi: "Xảo ảnh cộng hưởng điện môi", 
        type: "Artifact", 
        description: "Bóng đen hố sâu thẳm ở trung tâm ổ bụng trên máy 3T (hoặc bụng cổ trướng), do bước sóng RF tại 3T ngắn (chỉ 26cm) bị sóng đứng cản phá lẫn nhau.", 
        parameters: "Khắc phục thực tế: Xài công nghệ truyền dẫn RF đa điểm (Multi-Transmit, mDIXON) hoặc lót gối đệm điện môi mặn để kéo bước sóng tương thích cơ thể người lớn." 
    },
    { 
        id: 2020, 
        en: "RF Overflow / Clipping Artifact", 
        vi: "Xảo ảnh tràn/cắt xén dữ liệu", 
        type: "Artifact", 
        description: "Bức ảnh xám xịt nhạt nhòa, hỏng toàn bộ độ tương phản, đôi khi nhiễu mờ như kính dính nước mưa.", 
        parameters: "Khắc phục thực tế: Kênh cuộn dây (Coil element) áp ngay vùng chụp bị chập/đứt làm tín hiệu vỡ tràn bộ biến đổi số. Tắt kênh coil hỏng đó đi hoặc đổi Coil khác để thử nghiệm." 
    },
    { 
        id: 2021, 
        en: "Spike Artifact", 
        vi: "Xảo ảnh gai điện (Spike)", 
        type: "Artifact", 
        description: "Nhiễu loạn k-space tạo thành dải sóng chéo cắt đứt ngang màn hình với cường độ sáng lốm đốm.", 
        parameters: "Khắc phục thực tế: Yêu cầu bệnh nhân cởi bỏ áo len, áo thun tĩnh điện. Sóng tia lửa tĩnh điện (ma sát chăn màn) trong phòng khô máy lạnh phóng thẳng vào coil thu gây ra." 
    },
    { 
        id: 2022, 
        en: "Flow Void", 
        vi: "Hiện tượng trống dòng chảy", 
        type: "Artifact", 
        description: "Mạch máu xuất hiện màu đen nhánh trên chuỗi xung Spin Echo chậm (T1W/T2W) do máu chảy nhanh đã rời khỏi lát cắt trước khi máy phát xung 180 lấy echo.", 
        parameters: "Ứng dụng thực tế: Không phải bệnh lý, mà là dấu hiệu cực kỳ hữu ích báo hiệu lòng động mạch (VD: cảnh, nội sọ) thông suốt và không có mảng bám tắc nghẽn." 
    },
    { 
        id: 2023, 
        en: "Entry Slice Phenomenon", 
        vi: "Hiện tượng dòng chảy vào lát cắt", 
        type: "Artifact", 
        description: "Mạch máu sáng rực lên mãnh liệt ở lát cắt ĐẦU TIÊN (nơi mạch đi vào khối thu) do các proton máu chảy vào chưa từng bị bão hòa bởi xung RF trước đó.", 
        parameters: "Ứng dụng thực tế: Nguyên lý cốt lõi chế tạo xung 2D/3D TOF (Time-of-Flight) khảo sát mạch vành sọ không tiêm thuốc. Lát cắt càng sâu vào trong mạch máu sẽ càng mờ đi." 
    },
    { 
        id: 2024, 
        en: "Intra-voxel Dephasing", 
        vi: "Mất đồng pha nội Voxel", 
        type: "Artifact", 
        description: "Tín hiệu mạch máu tụt giảm mất tăm vùng ngay sau chỗ hẹp, do dòng xoáy hỗn loạn của spin tự phá hủy tín hiệu của nhau trong lòng 1 voxel nhỏ xíu.", 
        parameters: "Lâm sàng thực tế: Rất hay gặp làm chẩn đoán giả phóng đại (over-estimate) độ hẹp mạch máu trên các phim PC-MRA hoặc TOF." 
    },
    { 
        id: 2025, 
        en: "Metal Artifact Reduction Sequence (MARS)", 
        vi: "Chuỗi xung giảm nhiễu kim loại", 
        type: "Parameter", 
        description: "Tập hợp kỹ thuật kết hợp (Tăng cực cao rBW, dùng TSE Turbo Spin Echo thay vì GRE, đẩy nhỏ Voxel) để cứu vãn hình ảnh ở bệnh nhân thay khớp kim loại.", 
        parameters: "Thực tế hệ thống: Trên giao diện có tên O-MAR (Philips), SEMAC (Siemens), MAVRIC (GE). Đổi lại, sẽ làm ảnh nhiễu hạt nhẹ và kéo dài thời gian quét (Tăng NEX để bù)." 
    },
    { 
        id: 2026, 
        en: "View-Angle Tilting (VAT)", 
        vi: "Nghiêng góc nhìn (Chống kim loại)", 
        type: "Parameter", 
        description: "Trộn thêm Gradient chọn lát cắt vào cùng lúc quá trình thu thập tín hiệu băng thông (Readout) để bẻ góc nhìn cắt qua xảo ảnh kim loại lồi lõm.", 
        parameters: "Thực tế ứng dụng: Là phần lõi của thuật toán MARS. Giúp triệt tiêu dứt điểm tình trạng biến dạng hình học (In-plane distortion) làm méo mô mềm ở sát mép con ốc vít titan." 
    },
    { 
        id: 2027, 
        en: "B1 Inhomogeneity Artifact", 
        vi: "Xảo ảnh không đồng đều B1", 
        type: "Artifact", 
        description: "Bức ảnh một bên bề mặt cơ thể sáng lóa, nhưng bên kia lại tối om sụt tín hiệu, lý do sóng phát (B1) từ cuộn dây bề mặt không phủ xa được.", 
        parameters: "Khắc phục thực tế: Hãng máy luôn trang bị bộ lọc thuật toán san phẳng tín hiệu trên bề mặt. KTV cần tick chọn tính năng PURE, CLEAR, SCIC hoặc Prescan Normalize trước khi chụp." 
    },
    { 
        id: 2028, 
        en: "Gradient Warp / Distortion", 
        vi: "Biến dạng Gradient (Méo lồi)", 
        type: "Artifact", 
        description: "Cấu trúc cơ thể ở sát hai đầu lồng máy (như sọ não hay bàn chân chui sâu vào/ra khỏi Isocenter) bị kéo phình to cong vênh như nhìn qua thấu kính mắt cá.", 
        parameters: "Khắc phục thực tế: Tuyệt đối không bao giờ được tắt bộ lọc Distortion Correction (2D/3D) trên máy trạm (thường tick mặc định). Nếu tắt, bác sĩ chẩn đoán đo đạc kích thước sẽ sai hoàn toàn." 
    },
    { 
        id: 2029, 
        en: "Acoustic Noise", 
        vi: "Tiếng ồn âm học", 
        type: "Hardware", 
        description: "Lực từ Lorentz khổng lồ giật nổ các màng cuộn gradient, đập liên tục vào vỏ bảo vệ máy tạo ra tiếng búa gõ đinh tai (>100 - 120 dB).", 
        parameters: "Thực tế an toàn: Theo luật an toàn y tế, 100% bệnh nhân nhét ống tai vào cỗ máy MRI (dù chụp bộ phận chân tay) ĐỀU PHẢI đeo tai nghe hoặc nút bịt bọt biển chống điếc." 
    },
    { 
        id: 2030, 
        en: "FDA SAR Limit", 
        vi: "Giới hạn SAR an toàn (FDA)", 
        type: "Parameter", 
        description: "Cục FDA Hoa Kỳ cấm chỉ định các luồng RF làm bệnh nhân tăng quá 1 độ C (Giới hạn SAR Toàn thân Normal Mode < 2 W/kg, First Level < 4 W/kg trong 15 phút).", 
        parameters: "Thực tế hành nghề: KTV phải khai báo số Ký (kg) của bệnh nhân thật chuẩn lúc vào máy. Khai láo kg thấp đi (để chạy nhanh hơn) có thể làm bệnh nhân bỏng độ 1." 
    },
    { 
        id: 2031, 
        en: "Peripheral Nerve Stimulation (PNS)", 
        vi: "Kích thích thần kinh ngoại vi", 
        type: "Parameter", 
        description: "Từ trường biến thiên quá thần tốc (dB/dt quá lớn) cảm ứng tạo dòng điện yếu giật dây thần kinh dưới da bắp đùi, lưng, cổ tay của bệnh nhân.", 
        parameters: "Thực tế máy móc: Máy sẽ ưu tiên bảo vệ PNS trước rồi mới đến SAR. Nếu bị vướng ngưỡng PNS, máy sẽ khóa tham số và bắt kéo dài ESP hoặc bớt số lát cắt trong EPI/DWI lại." 
    },
    { 
        id: 2032, 
        en: "Slew Rate Limit", 
        vi: "Giới hạn dốc chênh từ", 
        type: "Parameter", 
        description: "Giới hạn trần an toàn của Slew Rate thiết kế (thường là 150-200 T/m/s tùy dòng máy) nhằm kiểm soát hiện tượng PNS kể trên.", 
        parameters: "Lưu ý mua sắm thiết bị: Máy quảng cáo Slew Rate cực cao (như 250) thực chất ít khi được chạy kịch trần vì đụng luật an toàn FDA về kích thích thần kinh, chủ yếu phục vụ các research pulse sequences." 
    },
    { 
        id: 2033, 
        en: "Duty Cycle", 
        vi: "Chu kỳ làm việc của Gradient", 
        type: "Parameter", 
        description: "Phần trăm thời gian mà bộ khuếch đại (Gradient Amplifier) bị bóc lột sức lao động với công suất cực đại trong khung cửa sổ TR (Time Repetition).", 
        parameters: "Thực tế chạy EPI/DWI: Nếu quét liên tục không cho máy nghỉ, Duty Cycle tiệm cận 100% -> còi báo lỗi Gradient Over-temp hụ lên, máy đứt ca chụp ngang chừng. KTV phải kéo dài TR hoặc rBW để máy xả nhiệt." 
    }
];
