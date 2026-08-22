// Dữ liệu thuộc nhóm Thông số cài đặt, Xảo ảnh, Phần cứng
export const parameterData = [
    {
        id: 2,
        en: "Time of Repetition (TR)",
        vi: "Thời gian lặp lại",
        type: "Parameter",
        description: "Khoảng thời gian từ lúc phát xung kích thích RF ban đầu đến lúc phát xung kích thích tiếp theo cho cùng một lát cắt. Yếu tố này quyết định mức độ phục hồi dọc (T1 relaxation).",
        parameters: "TR càng ngắn càng tăng trọng số T1. Ảnh hưởng trực tiếp đến tổng thời gian chụp (Scan time)."
    },
    {
        id: 3,
        en: "Time to Echo (TE)",
        vi: "Thời gian thu tín hiệu (Thời gian Echo)",
        type: "Parameter",
        description: "Thời gian từ lúc phát xung RF kích thích (90 độ) đến đỉnh của tín hiệu dội thu được. Quyết định mức độ phân rã ngang (T2 decay).",
        parameters: "TE ngắn (10-25ms) tối ưu cho T1W/PDW. TE dài (80-120ms) tối ưu cho T2W."
    },
    {
        id: 5,
        en: "Inversion Time (TI)",
        vi: "Thời gian đảo ngược",
        type: "Parameter",
        description: "Khoảng thời gian từ xung đảo ngược 180 độ ban đầu đến xung kích thích 90 độ (thường áp dụng trong các chuỗi xung Inversion Recovery như FLAIR, STIR). Dùng để triệt tiêu tín hiệu của một mô nhất định.",
        parameters: "TI = 150-170ms (ở từ trường 1.5T) để xóa mỡ (STIR). TI ~ 2000-2500ms (ở 1.5T/3T) để xóa nước (FLAIR)."
    },
    {
        id: 9,
        en: "Field of View (FOV)",
        vi: "Trường nhìn (Kích thước trường khảo sát)",
        type: "Parameter",
        description: "Khu vực không gian được thu nhận dữ liệu để tạo ảnh, tính bằng mm hoặc cm. FOV quyết định kích thước vùng giải phẫu hiển thị trên màn hình.",
        parameters: "Giảm FOV làm tăng độ phân giải không gian nhưng giảm SNR và tăng nguy cơ nhiễu cuộn (Aliasing/Wrap-around)."
    },
    {
        id: 10,
        en: "Matrix Size",
        vi: "Ma trận ảnh",
        type: "Parameter",
        description: "Số lượng các điểm ảnh (Pixel/Voxel) trong FOV, biểu diễn bằng lưới các hàng (Phase) và cột (Frequency).",
        parameters: "Tăng ma trận làm tăng độ phân giải không gian, nhưng giảm kích thước Voxel dẫn đến giảm SNR và tăng thời gian chụp."
    },
    {
        id: 12,
        en: "Number of Excitations (NEX) / NSA",
        vi: "Số lần thu tín hiệu trung bình",
        type: "Parameter",
        description: "Số lần dữ liệu của mỗi dòng trong không gian k (k-space) được thu nhận lại. Giúp loại bỏ nhiễu ngẫu nhiên.",
        parameters: "Tăng NEX gấp đôi làm tăng SNR lên khoảng 1.41 lần, nhưng thời gian chụp tăng gấp đôi."
    },
    {
        id: 13,
        en: "Slice Thickness",
        vi: "Bề dày lát cắt",
        type: "Parameter",
        description: "Độ dày của phần mô được chọn để kích thích. Xác định chiều thứ 3 của Voxel.",
        parameters: "Lát cắt mỏng tăng độ phân giải, giảm hiệu ứng thể tích bán phần, nhưng làm giảm SNR."
    },
    {
        id: 14,
        en: "Apparent Diffusion Coefficient (ADC)",
        vi: "Bản đồ hệ số khuếch tán biểu kiến",
        type: "Parameter",
        description: "Bản đồ toán học tạo từ chuỗi xung DWI. Loại bỏ hiệu ứng T2 shine-through để xác định chính xác sự hạn chế khuếch tán.",
        parameters: "Tổn thương hạn chế khuếch tán thực sự: sáng trên DWI, tối trên ADC."
    },
    {
        id: 17,
        en: "Flip Angle (FA)",
        vi: "Góc lật",
        type: "Parameter",
        description: "Góc mà vector từ hóa thực bị lệch khỏi trục dọc (B0) sau khi áp dụng xung RF. ",
        parameters: "FA = 90 độ cho tín hiệu lớn nhất. FA nhỏ (<90) thường dùng trong Gradient Echo để giảm thời gian TR và T1 recovery."
    },
    {
        id: 18,
        en: "Echo Train Length (ETL) / Turbo Factor",
        vi: "Số lượng chuỗi tín hiệu dội",
        type: "Parameter",
        description: "Số lượng tín hiệu dội (echo) được thu nhận trong mỗi khoảng thời gian TR ở chuỗi xung TSE/FSE.",
        parameters: "ETL cao giúp giảm mạnh thời gian chụp nhưng có thể làm giảm chất lượng ảnh và tăng mờ (blur) ở mô mềm."
    },
    {
        id: 19,
        en: "Receiver Bandwidth (rBW)",
        vi: "Băng thông thu tín hiệu",
        type: "Parameter",
        description: "Phạm vi các tần số vô tuyến được hệ thống thu nhận để tạo ảnh. Liên quan trực tiếp đến việc số hóa tín hiệu.",
        parameters: "BW rộng: giảm SNR, giảm xảo ảnh hóa học (Chemical shift), thu thập nhanh (giảm TE). BW hẹp: tăng SNR, tăng xảo ảnh."
    },
    {
        id: 20,
        en: "K-space",
        vi: "Không gian K",
        type: "Parameter",
        description: "Ma trận lưu trữ dữ liệu tần số không gian thô trước khi biến đổi toán học (Fourier Transform) để trở thành hình ảnh lâm sàng.",
        parameters: "Vùng trung tâm K-space quyết định độ tương phản (Contrast/SNR). Vùng ngoại vi quyết định độ phân giải không gian chi tiết (Resolution)."
    },
    {
        id: 21,
        en: "Phase Encoding (PE)",
        vi: "Mã hóa pha",
        type: "Parameter",
        description: "Quá trình áp dụng từ trường chênh (gradient) để gán cho mỗi hàng (hoặc cột) của ma trận một pha tín hiệu duy nhất, xác định vị trí theo một trục.",
        parameters: "Hướng mã hóa pha là hướng dễ xảy ra xảo ảnh chuyển động (Motion artifact) và xảo ảnh cuộn (Aliasing) nhất."
    },
    {
        id: 22,
        en: "Frequency Encoding (FE)",
        vi: "Mã hóa tần số",
        type: "Parameter",
        description: "Áp dụng gradient trong lúc thu nhận tín hiệu dội (echo) để phân biệt các tín hiệu theo vị trí dựa trên tần số của chúng.",
        parameters: "Thường thiết lập dọc theo trục dài nhất của giải phẫu để tối ưu hóa hình ảnh. Không gây nhiễu cuộn (Wrap-around)."
    },
    {
        id: 23,
        en: "Parallel Imaging (PI) / SENSE / GRAPPA",
        vi: "Kỹ thuật chụp song song",
        type: "Parameter",
        description: "Sử dụng độ nhạy không gian của nhiều cuộn dây (Coil) thu tín hiệu để điền khuyết dữ liệu vào K-space, giúp giảm mạnh thời gian chụp.",
        parameters: "Acceleration factor (R hoặc iPAT) thường cài = 2 hoặc 3. Tăng R làm giảm thời gian tỷ lệ thuận nhưng giảm SNR."
    },
    {
        id: 24,
        en: "Specific Absorption Rate (SAR)",
        vi: "Tỷ lệ hấp thụ riêng",
        type: "Parameter",
        description: "Mức năng lượng vô tuyến (RF) bị mô cơ thể hấp thụ, sinh ra nhiệt độ. SAR giới hạn bởi quy chuẩn an toàn FDA và IEC.",
        parameters: "Nếu cảnh báo vượt SAR: Cần tăng TR, giảm Flip Angle, giảm số lát cắt (Slices) hoặc giảm ETL."
    },
    {
        id: 25,
        en: "Signal-to-Noise Ratio (SNR)",
        vi: "Tỷ lệ tín hiệu trên nhiễu",
        type: "Parameter",
        description: "Thước đo chất lượng hình ảnh, tỷ lệ giữa tín hiệu thực tế của mô (Signal) so với nhiễu nền (Noise).",
        parameters: "Cách tăng SNR: Tăng FOV, tăng bề dày lát cắt, tăng NEX/NSA, giảm ma trận (Matrix), giảm băng thông (Bandwidth)."
    },
    {
        id: 26,
        en: "Contrast-to-Noise Ratio (CNR)",
        vi: "Tỷ lệ tương phản trên nhiễu",
        type: "Parameter",
        description: "Sự khác biệt về tỷ lệ tín hiệu trên nhiễu (SNR) giữa hai mô nằm cạnh nhau. Quyết định khả năng phân biệt tổn thương.",
        parameters: "Sử dụng thuốc tương phản (Gadolinium) hoặc các chuỗi xung T2W/FLAIR là cách để tối ưu hóa CNR."
    },
    {
        id: 27,
        en: "Fat Saturation (FatSat / FS)",
        vi: "Xóa mỡ (Bão hòa mỡ)",
        type: "Parameter",
        description: "Kỹ thuật phát một xung RF chuyên biệt ở tần số cộng hưởng của mỡ trước xung kích thích chính để triệt tiêu hoàn toàn tín hiệu mô mỡ.",
        parameters: "Cần độ đồng nhất từ trường (B0) cao. Thường bị lỗi (xóa mỡ không đều) ở vùng cổ, bàn chân hoặc khi có kim loại cấy ghép."
    },
    {
        id: 43,
        en: "Blood Oxygenation Level Dependent (BOLD)",
        vi: "Hiệu ứng BOLD",
        type: "Parameter",
        description: "Cơ sở vật lý của fMRI. Máu khử oxy (Deoxyhemoglobin) có tính thuận từ làm giảm tín hiệu T2*, máu giàu oxy (Oxyhemoglobin) có tính nghịch từ không làm giảm T2*.",
        parameters: "Sự thay đổi tín hiệu BOLD rất nhỏ (1-5%), đòi hỏi hệ thống máy >= 1.5T (tốt nhất là 3T) và thu thập liên tục."
    },
    {
        id: 44,
        en: "Fractional Anisotropy (FA - DTI)",
        vi: "Hệ số bất đẳng hướng phân đoạn",
        type: "Parameter",
        description: "Giá trị định lượng (từ 0 đến 1) trong DTI, thể hiện mức độ hướng của sự khuếch tán. FA = 0: khuếch tán đẳng hướng (như dịch não tủy). FA ~ 1: khuếch tán định hướng mạnh (bó sợi thần kinh).",
        parameters: "Được dùng để tô màu bản đồ Tractography (Đỏ = trái/phải, Lục = trước/sau, Lam = trên/dưới)."
    },
    {
        id: 45,
        en: "Velocity Encoding (VENC)",
        vi: "Mã hóa vận tốc",
        type: "Parameter",
        description: "Thông số tối quan trọng trong xung PC-MRA. VENC (cm/s) xác định giới hạn vận tốc tối đa được thu thập trước khi xảy ra hiện tượng cuộn pha (aliasing).",
        parameters: "Cài VENC quá cao: mất tín hiệu mạch chậm. Cài VENC quá thấp: xảo ảnh aliasing dòng chảy."
    },
    {
        id: 46,
        en: "Spatial Resolution",
        vi: "Độ phân giải không gian",
        type: "Parameter",
        description: "Khả năng phân biệt hai điểm nằm gần nhau trên hình ảnh thành hai cấu trúc riêng biệt. Phụ thuộc vào kích thước Voxel.",
        parameters: "Voxel càng nhỏ (FOV nhỏ, ma trận lớn, lát cắt mỏng) -> Độ phân giải không gian càng cao."
    },
    {
        id: 47,
        en: "Temporal Resolution",
        vi: "Độ phân giải thời gian",
        type: "Parameter",
        description: "Khả năng thu nhận hình ảnh liên tục theo thời gian thực (frames per second). Rất quan trọng trong chụp động học (Dynamic/Cine).",
        parameters: "Cần hi sinh độ phân giải không gian (hoặc dùng PI, Compressed Sensing) để tối ưu độ phân giải thời gian."
    },
    {
        id: 48,
        en: "Slice Gap / Spacing",
        vi: "Khoảng cách giữa các lát cắt",
        type: "Parameter",
        description: "Khoảng không gian trống (không thu tín hiệu) giữa hai lát cắt liền kề. Giúp tránh hiện tượng nhiễu xuyên âm (Cross-talk).",
        parameters: "Thường cài đặt ở mức 10% - 30% bề dày lát cắt. Tránh cài 0% ở xung 2D truyền thống."
    },
    {
        id: 49,
        en: "Isotropic Voxel",
        vi: "Voxel đẳng hướng",
        type: "Parameter",
        description: "Một khối pixel 3D có kích thước bằng nhau ở cả 3 chiều (x = y = z). Thường đạt được trong các xung 3D (như 3D T1, CISS).",
        parameters: "Cho phép tái tạo đa mặt phẳng (MPR) theo bất kỳ hướng nào mà hình ảnh không bị mờ hỏng."
    },
    {
        id: 50,
        en: "Anisotropic Voxel",
        vi: "Voxel dị hướng",
        type: "Parameter",
        description: "Kích thước 3 chiều của voxel không bằng nhau (ví dụ: bề dày lát cắt lớn hơn nhiều so với kích thước in-plane). Thường gặp ở ảnh 2D.",
        parameters: "Nếu dùng dữ liệu này để tái tạo mặt phẳng khác (MPR), hình ảnh sẽ bị mờ và răng cưa."
    },
    {
        id: 51,
        en: "Free Induction Decay (FID)",
        vi: "Phân rã cảm ứng tự do",
        type: "Parameter",
        description: "Tín hiệu cộng hưởng từ nguyên bản nhất, sinh ra ngay lập tức sau khi ngắt xung RF 90 độ, tắt dần cực nhanh do mất đồng pha (T2*).",
        parameters: "FID phân rã quá nhanh nên không thể trực tiếp ghi hình, cần dùng xung 180 (Spin Echo) hoặc gradient để tạo lại tín hiệu (Echo)."
    },
    {
        id: 52,
        en: "Larmor Frequency",
        vi: "Tần số tiến động Larmor",
        type: "Parameter",
        description: "Tần số dao động đảo (như con quay) của các proton xung quanh trục từ trường chính B0. Được tính bằng pt: f = γ × B0.",
        parameters: "Tại từ trường 1.5 Tesla, tần số Larmor của Hydrogen là khoảng 63.86 MHz. Ở 3.0T là ~ 127.7 MHz."
    },
    {
        id: 53,
        en: "Gyromagnetic Ratio",
        vi: "Hằng số từ hồi chuyển",
        type: "Parameter",
        description: "Một hằng số vật lý đặc trưng cho mỗi loại hạt nhân (Ký hiệu γ).",
        parameters: "Của Hydrogen (1H) là 42.58 MHz/Tesla. Nhờ có γ cao nhất và độ dồi dào lớn trong cơ thể nên 1H được dùng chính trong MRI."
    },
    {
        id: 54,
        en: "B0 (Main Magnetic Field)",
        vi: "Từ trường chính",
        type: "Parameter",
        description: "Từ trường tĩnh, liên tục, đồng nhất được tạo ra bởi cuộn dây siêu dẫn của máy chụp MRI (tính bằng Tesla).",
        parameters: "Luôn hoạt động 24/7 kể cả khi không quét bệnh nhân. Quy tắc an toàn B0 là nghiêm ngặt tuyệt đối (Không mang vật kim loại từ tính)."
    },
    {
        id: 55,
        en: "B1 (Radiofrequency Field)",
        vi: "Từ trường RF",
        type: "Parameter",
        description: "Từ trường dao động thứ cấp vuông góc với B0, được phát ra bởi cuộn dây phát (Transmit coil) dưới dạng xung RF ngắn.",
        parameters: "Mục đích là kích thích các proton lệch khỏi trục dọc (B0) để tạo ra từ hóa ngang (Transverse magnetization)."
    },
    {
        id: 56,
        en: "Radiofrequency (RF) Pulse",
        vi: "Xung vô tuyến RF",
        type: "Parameter",
        description: "Dải sóng điện từ ngắn phát ra ở tần số Larmor chính xác để cộng hưởng năng lượng cho hệ thống proton.",
        parameters: "Các loại chính: Xung 90 độ (Xung kích thích), Xung 180 độ (Xung đảo ngược hoặc tái hội tụ)."
    },
    {
        id: 57,
        en: "Shimming",
        vi: "Tinh chỉnh đồng nhất từ trường",
        type: "Parameter",
        description: "Quá trình hiệu chỉnh bằng phần cứng (miếng kim loại) hoặc phần mềm (cuộn shim điện từ) để làm cho B0 đồng nhất tuyệt đối tại vùng khảo sát.",
        parameters: "Bắt buộc trước mỗi chuỗi xung Xóa mỡ (FatSat) hoặc Chụp phổ (MRS) để tránh thất bại."
    },
    {
        id: 58,
        en: "Aliasing / Wrap-around Artifact",
        vi: "Xảo ảnh nhiễu cuộn",
        type: "Artifact",
        description: "Xảy ra khi các cấu trúc giải phẫu nằm ngoài trường khảo sát (FOV) nhưng vẫn nằm trong vùng kích thích của cuộn dây, bị cuộn ngược đè vào phía đối diện của ảnh.",
        parameters: "Cách khắc phục: Tăng FOV, dùng băng bão hòa (Sat band) hoặc bật Oversampling (Phase wrap/No phase wrap)."
    },
    {
        id: 59,
        en: "Chemical Shift Artifact",
        vi: "Xảo ảnh lệch pha hóa học",
        type: "Artifact",
        description: "Dải sáng/tối dọc theo ranh giới giữa mô mỡ và mô chứa nước dọc theo trục mã hóa tần số, do sự chênh lệch nhỏ về tần số cộng hưởng của nước và mỡ.",
        parameters: "Thường thấy ở thận hoặc thần kinh thị. Cách khắc phục: Tăng băng thông thu tín hiệu (rBW) hoặc dùng FatSat."
    },
    {
        id: 60,
        en: "Truncation / Gibbs Artifact",
        vi: "Xảo ảnh cắt cụt Gibbs",
        type: "Artifact",
        description: "Các vệt/đường viền giả song song tại những vùng ranh giới có độ tương phản thay đổi đột ngột cao (Ví dụ: giữa tủy sống và dịch não tủy).",
        parameters: "Do ma trận quá thấp. Cách khắc phục: Tăng ma trận mã hóa pha (từ 128 lên 256) hoặc áp dụng thuật toán lọc filter."
    },
    {
        id: 61,
        en: "Motion Artifact / Ghosting",
        vi: "Xảo ảnh chuyển động (Bóng ma)",
        type: "Artifact",
        description: "Xảy ra do chuyển động hô hấp, nhịp tim, mạch đập, hoặc cử động của bệnh nhân. Trải dài dọc theo trục mã hóa pha.",
        parameters: "Khắc phục: Gating/Triggering hô hấp-nhịp tim, nín thở, hoặc dùng chuỗi xung bù trừ chuyển động (PROPELLER/BLADE)."
    },
    {
        id: 62,
        en: "Magic Angle Effect",
        vi: "Hiệu ứng góc ma thuật",
        type: "Artifact",
        description: "Hiện tượng tăng tín hiệu giả trên ảnh T1W, PDW, GRE (TE ngắn) ở các cấu trúc sụn, gân, dây chằng khi chúng hợp với từ trường B0 một góc khoảng 55 độ.",
        parameters: "Dễ nhầm lẫn với viêm hoặc rách gân. Khắc phục: Xem trên ảnh T2W (TE dài) thì xảo ảnh này biến mất."
    },
    {
        id: 63,
        en: "Cross-talk / Cross-excitation",
        vi: "Xảo ảnh nhiễu xuyên âm",
        type: "Artifact",
        description: "Sự sụt giảm tín hiệu của các lát cắt kề nhau do xung kích thích RF không vuông vức hoàn hảo, chèn ép sang lát lân cận.",
        parameters: "Khắc phục: Tăng khoảng cách lát cắt (Gap >= 10-20%) hoặc sử dụng tính năng thu nhận xen kẽ (Interleaved acquisition)."
    },
    {
        id: 64,
        en: "Magnetic Susceptibility Artifact",
        vi: "Xảo ảnh nhạy từ tính",
        type: "Artifact",
        description: "Biến dạng hình học cực lớn kèm khoảng trống tín hiệu (đóng đen) do kim loại hoặc không khí làm phá vỡ từ trường B0 tại chỗ.",
        parameters: "Xung GRE nhạy nhất với xảo ảnh này. Xung SE hoặc TSE với TE ngắn ít bị ảnh hưởng (dùng tốt nhất cho bệnh nhân có vít kim loại)."
    },
    {
        id: 65,
        en: "Saturation Bands (Sat Bands)",
        vi: "Băng bão hòa",
        type: "Parameter",
        description: "Các khối đồ họa cài đặt thêm một xung RF 90 độ vào mô (bên ngoài hoặc bên trong FOV) trước chuỗi xung chính nhằm đóng hoàn toàn tín hiệu của vùng đó.",
        parameters: "Thường dùng để xóa nhịp đập của mạch máu, chuyển động của tim lên vùng ngực/cột sống, hoặc chống Aliasing."
    },
    {
        id: 66,
        en: "Trigger Delay",
        vi: "Độ trễ đồng bộ (ECG)",
        type: "Parameter",
        description: "Thời gian máy chờ từ đỉnh sóng R (trên điện tâm đồ) cho đến khi bắt đầu thu tín hiệu MRI.",
        parameters: "Dùng trong MRI Tim (Cardiac MRI) để chụp đúng vào pha tâm trương (Diastolic) khi tim nghỉ, giảm xảo ảnh rung."
    },
    {
        id: 67,
        en: "R-R Interval",
        vi: "Khoảng R-R (Chu kỳ tim)",
        type: "Parameter",
        description: "Khoảng thời gian giữa hai đỉnh sóng R liên tiếp trên ECG. Ở MRI tim, R-R đóng vai trò tương đương như TR (Time of Repetition).",
        parameters: "Ảnh hưởng trực tiếp đến thời gian chụp và trọng số T1. Bệnh nhân rối loạn nhịp rất khó chụp Cardiac MRI."
    },
    {
        id: 68,
        en: "Respiratory Triggering / Gating",
        vi: "Đồng bộ hô hấp",
        type: "Parameter",
        description: "Sử dụng đai hô hấp hoặc Navigator để máy chỉ phát xung chụp vào khoảng thở ra (Expiration) của bệnh nhân khi cơ hoành tĩnh nhất.",
        parameters: "Tăng mạnh thời gian chụp (vì máy nghỉ lúc hít vào). Dùng bắt buộc trong MRCP, MRI bụng nếu bệnh nhân không nín thở được."
    },
    {
        id: 69,
        en: "Navigator Echo",
        vi: "Xung dội định vị (Navigator)",
        type: "Parameter",
        description: "Một xung đánh dấu đặt vắt ngang qua vòm hoành phải, liên tục theo dõi vị trí cơ hoành theo thời gian thực để máy quyết định lúc nào chụp.",
        parameters: "Chính xác hơn đai hô hấp. Hay dùng trong MRI tim hoặc MRCP 3D."
    },
    {
        id: 70,
        en: "Breath-hold (BH)",
        vi: "Kỹ thuật nín thở",
        type: "Parameter",
        description: "Yêu cầu bệnh nhân nín thở từ 10 - 20 giây để chụp xong một chuỗi xung tĩnh (Thường là bụng, ngực).",
        parameters: "Thường ứng dụng với các chuỗi xung cực nhanh như VIBE, HASTE, bSSFP."
    },
    {
        id: 71,
        en: "Compressed Sensing (CS)",
        vi: "Cảm biến nén (Thu thập dữ liệu nén)",
        type: "Parameter",
        description: "Thuật toán học máy (và toán học tái tạo lặp) cho phép bỏ qua (undersampling) một lượng khổng lồ k-space (lên tới 80%) nhưng vẫn dựng lại ảnh nét hoàn toàn.",
        parameters: "Đột phá mới giúp giảm thời gian MRI xuống vài phút. Chụp 3D MRCP chỉ mất 15-20s thay vì 3 phút."
    },
    {
        id: 74,
        en: "Time-Intensity Curve (TIC)",
        vi: "Đường cong cường độ - thời gian",
        type: "Parameter",
        description: "Đồ thị đánh giá sự hấp thu thuốc của tổn thương qua thời gian (trong DCE).",
        parameters: "Type I (tăng dần): thường lành tính. Type II (cao nguyên/Plateau): nghi ngờ. Type III (Wash-out/thải thuốc nhanh): ác tính cao."
    },
    {
        id: 75,
        en: "Maximum Intensity Projection (MIP)",
        vi: "Hình chiếu cường độ tối đa",
        type: "Parameter",
        description: "Thuật toán xử lý hậu kỳ 3D. Máy chiếu một tia qua khối dữ liệu và chỉ giữ lại điểm ảnh sáng nhất (tín hiệu cao nhất) trên mỗi tia.",
        parameters: "Luôn dùng để dựng hình cây mạch máu (MRA, MRV) từ dữ liệu gốc."
    },
    {
        id: 76,
        en: "Multi-Planar Reconstruction (MPR)",
        vi: "Tái tạo đa mặt phẳng",
        type: "Parameter",
        description: "Kỹ thuật cắt lát dữ liệu 3D ban đầu thành bất kỳ mặt phẳng nào khác (Trán, dọc, ngang, hoặc chéo).",
        parameters: "Đòi hỏi dữ liệu gốc phải chụp mỏng, tối ưu nhất là voxel đẳng hướng (Isotropic)."
    },
    {
        id: 77,
        en: "Subtraction",
        vi: "Xóa nền (Trừ ảnh)",
        type: "Parameter",
        description: "Lấy hình ảnh sau tiêm thuốc (Post-contrast) trừ đi từng pixel của hình trước tiêm (Pre-contrast).",
        parameters: "Những cấu trúc có bắt thuốc sẽ sáng lên, các mô không bắt thuốc bị triệt tiêu hoàn toàn (đen). Rất hay dùng trong MRI vú."
    },
    {
        id: 78,
        en: "T1 Relaxation Time",
        vi: "Thời gian phục hồi T1 (Spin-Lattice)",
        type: "Parameter",
        description: "Thời gian cần thiết để từ hóa dọc hồi phục được 63% so với trạng thái cân bằng ban đầu sau xung 90 độ.",
        parameters: "Mỡ có T1 ngắn (sáng trên T1W). Nước/Dịch có T1 dài (tối trên T1W)."
    },
    {
        id: 79,
        en: "T2 Relaxation Time",
        vi: "Thời gian phân rã T2 (Spin-Spin)",
        type: "Parameter",
        description: "Thời gian cần thiết để từ hóa ngang bị phân rã chỉ còn 37% giá trị ban đầu do tương tác trao đổi năng lượng giữa các spin.",
        parameters: "Mỡ có T2 ngắn (tối trên T2W). Nước/Dịch có T2 dài (sáng trên T2W)."
    },
    {
        id: 80,
        en: "T2* (T2 star) Decay",
        vi: "Phân rã T2 sao",
        type: "Parameter",
        description: "Sự mất đồng pha thực tế (luôn diễn ra nhanh hơn T2) bao gồm hiệu ứng T2 thuần túy cộng thêm sự mất đồng pha do từ trường B0 không đồng nhất tại chỗ.",
        parameters: "Chính là nền tảng của chuỗi xung Gradient Echo và ảnh hưởng BOLD/xuất huyết."
    },
    {
        id: 89,
        en: "Phased Array Coil",
        vi: "Cuộn dây Phased Array (Mảng pha)",
        type: "Hardware",
        description: "Tập hợp nhiều cuộn dây nhỏ độc lập được ghép lại với nhau. Kết hợp FOV rộng của cuộn lớn với SNR cực cao của cuộn nhỏ.",
        parameters: "Là nền tảng bắt buộc để chạy được kỹ thuật chụp song song (Parallel Imaging - PI)."
    },
    {
        id: 90,
        en: "Surface Coil",
        vi: "Cuộn dây bề mặt",
        type: "Hardware",
        description: "Cuộn thu tín hiệu áp sát trực tiếp vào vị trí cần chụp (VD: khớp thái dương hàm, bề mặt da).",
        parameters: "SNR rất lớn ở bề mặt nhưng giảm cực nhanh theo chiều sâu. Hữu ích chụp tổn thương nông nhỏ."
    },
    {
        id: 91,
        en: "Volume Coil",
        vi: "Cuộn dây thể tích",
        type: "Hardware",
        description: "Cuộn dây bao quanh toàn bộ vùng giải phẫu (như cuộn Sọ Não lõi tứ - Quadrature head coil).",
        parameters: "SNR đồng đều ở mọi điểm bên trong thể tích cuộn nhưng SNR tổng thể không cao bằng Phased Array."
    },
    {
        id: 92,
        en: "Gradient Slew Rate",
        vi: "Tốc độ dốc chênh từ",
        type: "Parameter",
        description: "Tốc độ mà một cuộn gradient có thể đạt tới sức mạnh tối đa từ con số 0 (T/m/s).",
        parameters: "Slew rate càng cao, máy đo được TE/TR càng ngắn, chụp EPI (DWI/fMRI) càng nhanh và sắc nét. Tạo ra tiếng ồn (Noise) cực lớn."
    },
    {
        id: 93,
        en: "Gradient Amplitude",
        vi: "Biên độ Gradient",
        type: "Parameter",
        description: "Sức mạnh tối đa (từ trường chênh lệch) mà gradient có thể tạo ra (mT/m).",
        parameters: "Biên độ lớn cho phép cắt lát cắt siêu mỏng, độ phân giải cao và tạo ảnh DWI với b-value khổng lồ dễ dàng."
    },
    {
        id: 94,
        en: "Partial Fourier / Half Scan",
        vi: "Thu thập k-space một phần",
        type: "Parameter",
        description: "Thu thập chỉ hơn một nửa số dòng mã hóa pha (> 50%, thường là 62.5% hoặc 75%), sau đó dùng tính đối xứng toán học của k-space để bù đắp phần còn lại.",
        parameters: "Giảm thời gian chụp đáng kể nhưng hi sinh một phần SNR. Không ảnh hưởng độ phân giải không gian."
    },
    {
        id: 95,
        en: "Phase Oversampling (No Phase Wrap)",
        vi: "Thu nhận thừa pha (Chống cuộn pha)",
        type: "Parameter",
        description: "Tăng FOV theo hướng mã hóa pha (thường gấp đôi) bằng cách tăng số bước mã hóa, nhưng máy sẽ tự động cắt bỏ phần dư khi hiển thị.",
        parameters: "Xóa bỏ triệt để xảo ảnh cuộn (Aliasing) nhưng sẽ làm tăng thời gian chụp tỷ lệ thuận nếu không bù trừ bằng kỹ thuật khác."
    },
    {
        id: 96,
        en: "Concatenations / Acquisitions",
        vi: "Số khối thu nhận (Chia TR)",
        type: "Parameter",
        description: "Chia tổng số lát cắt (Slices) cần chụp của một block thành 2 hoặc nhiều khối nhỏ hơn thu nhận xen kẽ.",
        parameters: "Cho phép dùng TR nhỏ hơn để bao phủ số lượng lát cắt lớn hoặc giảm hiệu ứng Magnetization Transfer."
    },
    {
        id: 97,
        en: "Wash-in / Wash-out",
        vi: "Thải thuốc / Bắt thuốc (DCE)",
        type: "Parameter",
        description: "Đánh giá động học bắt thuốc cản từ. U ác tính thường tăng sinh vi mạch lỗi, gây ra bắt thuốc cực kỳ nhanh (Wash-in mạnh) và đào thải cũng nhanh (Wash-out).",
        parameters: "Là dấu hiệu quan trọng trong phân loại BI-RADS (Vú) và PI-RADS (Tiền liệt tuyến)."
    },
    {
        id: 98,
        en: "Variable Flip Angle Sweep",
        vi: "Quét góc lật biến đổi",
        type: "Parameter",
        description: "Mỗi tín hiệu dội (echo) trong chuỗi TSE 3D được sử dụng một Flip Angle khác nhau được tính toán kỹ bằng máy tính.",
        parameters: "Duy trì tín hiệu ổn định suốt Echo train dài, giúp xung 3D TSE (SPACE/VISTA) không bị mờ ảnh."
    },
    {
        id: 99,
        en: "Baseline",
        vi: "Pha nền trước tiêm (DCE/DSC)",
        type: "Parameter",
        description: "Các ảnh (hoặc khối 3D) đầu tiên được chụp lập lại liên tục trước khi bơm thuốc đối quang từ.",
        parameters: "Thiết lập đường tham chiếu cơ sở để máy tính so sánh và tính toán độ chênh lệch tín hiệu (Subtraction hoặc Perfusion maps)."
    },
    {
        id: 100,
        en: "Specific Energy Dose (SED)",
        vi: "Liều năng lượng riêng",
        type: "Parameter",
        description: "Tổng năng lượng RF mà bệnh nhân phải chịu trong suốt toàn bộ quá trình chụp một giao thức (protocol), tính bằng kJ/kg.",
        parameters: "Khác với SAR (chỉ là mức công suất tức thời). SED quản lý chặt để tránh việc bệnh nhân bị tăng thân nhiệt cốt lõi (Core temp) quá mức trong phiên quét dài."
    }
];
