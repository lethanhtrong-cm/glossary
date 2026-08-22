// Dữ liệu thuộc nhóm Chuỗi Xung (Sequence)
export const sequenceData = [
    {
        id: 1,
        en: "Spin Echo (SE)",
        vi: "Chuỗi xung Spin Echo (Xung dội spin)",
        type: "Sequence",
        description: "Sử dụng một xung kích thích 90 độ, theo sau là xung tái hội tụ 180 độ để tạo ra tín hiệu dội (echo). Giúp triệt tiêu sự mất đồng pha do từ trường không đồng nhất (T2* effect), mang lại hình ảnh có độ phân giải giải phẫu cao nhất.",
        parameters: "T1W: TR ngắn (400-600ms), TE ngắn (10-20ms). T2W: TR dài (>2000ms), TE dài (>80ms)."
    },
    {
        id: 4,
        en: "Diffusion Weighted Imaging (DWI)",
        vi: "Chuỗi xung khuếch tán",
        type: "Sequence",
        description: "Dựa trên chuyển động Brown của các phân tử nước trong mô. Đo lường sự hạn chế khuếch tán, cực kỳ nhạy trong phát hiện nhồi máu não cấp (đột quỵ) hoặc đánh giá mật độ tế bào khối u.",
        parameters: "Giá trị b (b-value): Thường dùng b=0 và b=1000 s/mm2 (hoặc cao hơn ở tiền liệt tuyến). Bản đồ ADC được hệ thống tính toán tự động."
    },
    {
        id: 6,
        en: "Gradient Echo (GRE)",
        vi: "Chuỗi xung Gradient Echo",
        type: "Sequence",
        description: "Sử dụng góc lật (Flip Angle) nhỏ hơn 90 độ và dùng từ trường chênh từ (Gradient) để tạo tín hiệu dội thay vì xung 180 độ. Tốc độ chụp nhanh nhưng nhạy với độ không đồng nhất từ trường (T2*).",
        parameters: "Rất nhạy trong việc phát hiện xuất huyết vi thể (Microbleeds) hoặc vôi hóa. Thường cài đặt góc lật (FA) từ 5-30 độ tùy mục đích T1 hay T2*."
    },
    {
        id: 7,
        en: "Fluid Attenuated Inversion Recovery (FLAIR)",
        vi: "Chuỗi xung xóa dịch não tủy",
        type: "Sequence",
        description: "Là một biến thể của chuỗi xung Inversion Recovery (IR). Sử dụng thời gian đảo ngược (TI) dài để triệt tiêu hoàn toàn tín hiệu của dịch tự do (dịch não tủy), giúp làm nổi bật các tổn thương nằm cạnh não thất hoặc rãnh cuộn não.",
        parameters: "Cài đặt TI dài (khoảng 2000-2500ms ở 1.5T và 3T). TR dài (6000-10000ms), TE dài (90-140ms)."
    },
    {
        id: 8,
        en: "Short Tau Inversion Recovery (STIR)",
        vi: "Chuỗi xung xóa mỡ STIR",
        type: "Sequence",
        description: "Chuỗi xung Inversion Recovery với thời gian TI ngắn, nhằm mục đích đồng bộ với thời gian phục hồi T1 của mỡ đi qua điểm null. Giúp xóa triệt để tín hiệu mỡ, rất hữu ích trong chẩn đoán phù tủy xương hoặc tổn thương phần mềm.",
        parameters: "TI ngắn (150-170ms ở 1.5T). Lưu ý: STIR không thể dùng sau khi tiêm thuốc đối quang từ (Gadolinium)."
    },
    {
        id: 11,
        en: "Time of Flight (TOF)",
        vi: "Chuỗi xung mạch máu thời gian bay",
        type: "Sequence",
        description: "Kỹ thuật chụp mạch máu không tiêm thuốc, dựa trên hiện tượng dòng chảy liên quan (Flow-related enhancement). Máu chảy vào lát cắt sẽ có tín hiệu cao.",
        parameters: "TOF 2D nhạy dòng chảy chậm (tĩnh mạch). TOF 3D độ phân giải cao cho động mạch sọ não."
    },
    {
        id: 15,
        en: "Susceptibility Weighted Imaging (SWI)",
        vi: "Chuỗi xung nhạy từ",
        type: "Sequence",
        description: "Chuỗi xung 3D GRE sử dụng thông tin biên độ và pha. Rất nhạy với các chất có tính từ (máu, canxi, sắt).",
        parameters: "Dùng để phát hiện xuất huyết vi thể, phân biệt vôi hóa (qua Phase map)."
    },
    {
        id: 16,
        en: "Turbo Spin Echo (TSE) / Fast Spin Echo (FSE)",
        vi: "Chuỗi xung Spin Echo nhanh",
        type: "Sequence",
        description: "Biến thể của Spin Echo giúp giảm đáng kể thời gian chụp bằng cách thu nhận nhiều tín hiệu (echo) trong cùng một khoảng thời gian TR nhờ một chuỗi các xung 180 độ.",
        parameters: "Tốc độ nhanh phụ thuộc vào chỉ số Echo Train Length (ETL). Gây hiệu ứng làm mờ ảnh (blurring) nếu ETL quá cao."
    },
    {
        id: 28,
        en: "Spectral Presaturation with Inversion Recovery (SPIR)",
        vi: "Xóa mỡ SPIR",
        type: "Sequence",
        description: "Lai tạo giữa FatSat và STIR. Sử dụng một xung đảo ngược chọn lọc phổ (chỉ tác động lên mỡ) để xóa mỡ linh hoạt.",
        parameters: "Ít nhạy với sự không đồng nhất từ trường hơn FatSat truyền thống, có thể dùng chung với thuốc cản từ (Khác với STIR)."
    },
    {
        id: 29,
        en: "Spectral Adiabatic Inversion Recovery (SPAIR)",
        vi: "Xóa mỡ SPAIR",
        type: "Sequence",
        description: "Bản nâng cấp của SPIR sử dụng xung Adiabatic. Xóa mỡ cực kỳ đồng đều, kể cả trên những vùng cơ thể giải phẫu không bằng phẳng.",
        parameters: "Cho hình ảnh T2 SPAIR hoặc T1 SPAIR rất mịn, đặc biệt ưu tiên ở MSK (Cơ xương khớp) và vú."
    },
    {
        id: 30,
        en: "Dixon Method",
        vi: "Kỹ thuật xóa mỡ Dixon",
        type: "Sequence",
        description: "Dựa trên sự lệch pha hóa học giữa nước và mỡ. Bằng cách thu nhận tín hiệu ở các thời điểm In-phase và Out-of-phase, máy tính sẽ phân tách tạo ra 4 loại ảnh: In-phase, Out-of-phase, Water-only (Xóa mỡ), Fat-only.",
        parameters: "Cực kỳ đáng tin cậy ở những vùng từ trường kém đồng nhất. Không bị ảnh hưởng nhiều bởi kim loại."
    },
    {
        id: 31,
        en: "Balanced Steady-State Free Precession (bSSFP / TrueFISP / FIESTA)",
        vi: "Chuỗi xung bSSFP",
        type: "Sequence",
        description: "Chuỗi xung Gradient Echo duy trì trạng thái ổn định (steady-state). Tạo ra độ tương phản dựa trên tỷ lệ T2/T1. Dịch (như máu, dịch não tủy) sẽ cực kỳ sáng.",
        parameters: "Tốc độ cực nhanh. Thường dùng trong chụp tim (Cine Cardiac MRI), hình thái thai nhi, hoặc mạch máu ngoại vi không tiêm thuốc."
    },
    {
        id: 32,
        en: "Half-Fourier Single-Shot TSE (HASTE / SS-FSE)",
        vi: "Chuỗi xung TSE đơn phát",
        type: "Sequence",
        description: "Thu nhận hơn một nửa k-space chỉ bằng một lần phát xung kích thích (Single-shot) và dùng thuật toán Half-Fourier nội suy phần còn lại.",
        parameters: "Chụp 1 lát cắt chỉ dưới 1 giây. Chống xảo ảnh chuyển động cực tốt, dùng nhiều trong MRI bụng, thai nhi (Fetal MRI)."
    },
    {
        id: 33,
        en: "Magnetization Prepared Rapid Gradient Echo (MPRAGE / 3D T1 TFE)",
        vi: "Chuỗi xung 3D T1 MPRAGE",
        type: "Sequence",
        description: "Sử dụng một xung chuẩn bị từ hóa (IR) theo sau là chuỗi Gradient Echo 3D thu thập nhanh. Tạo ảnh T1 3D độ phân giải cao.",
        parameters: "Tiêu chuẩn vàng trong tái tạo 3D sọ não, khảo sát vỏ não, đo thể tích não bộ (Volumetry) và thần kinh học."
    },
    {
        id: 34,
        en: "Volumetric Interpolated Breath-hold Examination (VIBE / LAVA / THRIVE)",
        vi: "Chuỗi xung 3D T1 VIBE",
        type: "Sequence",
        description: "Chuỗi xung 3D Gradient Echo T1 phá hủy tín hiệu dư (spoiled GRE) tích hợp xóa mỡ. Cho phép chụp toàn bộ ổ bụng trong 1 lần nín thở.",
        parameters: "Là xung bắt buộc trong khảo sát động học gan (Dynamic Liver MRI), tụy, thận sau tiêm Gadolinium."
    },
    {
        id: 35,
        en: "Constructive Interference in Steady State (CISS / FIESTA-C)",
        vi: "Chuỗi xung CISS 3D",
        type: "Sequence",
        description: "Chuỗi xung bSSFP 3D có độ phân giải siêu cao. Giúp quan sát các cấu trúc thần kinh rất nhỏ bao quanh bởi dịch não tủy.",
        parameters: "Chỉ định chính: Khảo sát các dây thần kinh sọ (V, VII, VIII), ống tai trong, và rò dịch não tủy."
    },
    {
        id: 36,
        en: "Arterial Spin Labeling (ASL)",
        vi: "Tưới máu không tiêm thuốc ASL",
        type: "Sequence",
        description: "Đánh dấu từ tính các proton trong dòng máu động mạch ở cổ, sau đó đo lường tín hiệu khi lượng máu này chảy lên tưới máu não.",
        parameters: "Đánh giá bản đồ tưới máu não (CBF) hoàn toàn không cần tiêm thuốc cản từ, an toàn cho bệnh nhân suy thận, trẻ em."
    },
    {
        id: 37,
        en: "Diffusion Tensor Imaging (DTI)",
        vi: "Hình ảnh sức căng khuếch tán",
        type: "Sequence",
        description: "Đo lường sự khuếch tán của nước theo nhiều hướng khác nhau (thường > 6 hướng) để dựng lại đường đi của các bó sợi thần kinh (Tractography).",
        parameters: "Ứng dụng trong lên kế hoạch phẫu thuật u não, đánh giá chấn thương sợi trục lan tỏa (DAI)."
    },
    {
        id: 38,
        en: "Magnetic Resonance Spectroscopy (MRS)",
        vi: "Cộng hưởng từ phổ (Quang phổ)",
        type: "Sequence",
        description: "Không tạo ra hình ảnh giải phẫu mà phân tích thành phần chuyển hóa sinh hóa của một vùng mô (Voxel) dựa trên sự chênh lệch tần số Larmor của các chất.",
        parameters: "Phân biệt u não ác tính (tăng Choline, giảm NAA) với viêm, áp xe, hay hoại tử sau xạ trị."
    },
    {
        id: 39,
        en: "Phase Contrast Angiography (PC-MRA)",
        vi: "Chụp mạch máu đối pha",
        type: "Sequence",
        description: "Chụp mạch không tiêm thuốc, tạo tương phản dựa trên sự dịch pha của các proton chuyển động. Có thể định lượng vận tốc dòng chảy.",
        parameters: "Yêu cầu cài đặt thông số VENC (Velocity Encoding) phù hợp với tốc độ dòng chảy dự kiến (VD: Tĩnh mạch chậm 20cm/s, động mạch nhanh 60-80cm/s)."
    },
    {
        id: 40,
        en: "Contrast-Enhanced Magnetic Resonance Angiography (CE-MRA)",
        vi: "Chụp mạch máu có tiêm thuốc (CE-MRA)",
        type: "Sequence",
        description: "Sử dụng chuỗi xung 3D T1 cực nhanh kết hợp tiêm Bolus Gadolinium tĩnh mạch để làm sáng toàn bộ lòng mạch máu.",
        parameters: "Không phụ thuộc vào chiều hay tốc độ dòng chảy như TOF/PC. Rất chính xác cho phình động mạch chủ, mạch máu chi dưới."
    },
    {
        id: 41,
        en: "Magnetic Resonance Cholangiopancreatography (MRCP)",
        vi: "Chụp mật tụy (MRCP)",
        type: "Sequence",
        description: "Sử dụng xung T2W với TE cực kỳ dài (Heavy T2W). Mô đặc sẽ mất hoàn toàn tín hiệu (đen), chỉ còn dịch lỏng tĩnh (mật, tụy) sáng rực lên.",
        parameters: "Dựng hình 3D cây đường mật hoàn toàn không xâm lấn, thay thế ERCP trong chẩn đoán sỏi mật, u đường mật."
    },
    {
        id: 42,
        en: "Functional MRI (fMRI)",
        vi: "Cộng hưởng từ chức năng",
        type: "Sequence",
        description: "Kỹ thuật lập bản đồ các vùng hoạt động của não dựa trên sự thay đổi lưu lượng máu và mức độ oxy hóa khi bệnh nhân thực hiện một nhiệm vụ (VD: nhấp ngón tay, nói).",
        parameters: "Dựa vào hiệu ứng BOLD (Blood Oxygenation Level Dependent). Thiết yếu trước phẫu thuật u não vùng chức năng."
    },
    {
        id: 72,
        en: "Dynamic Contrast Enhancement (DCE)",
        vi: "Cộng hưởng từ động học tiêm thuốc",
        type: "Sequence",
        description: "Chụp liên tục 1 vùng (như vú, gan, tuyến tiền liệt) trước và nhiều pha sau khi tiêm nhanh (bolus) Gadolinium.",
        parameters: "Sử dụng xung 3D T1 GRE có độ phân giải thời gian cao. Phân tích dựa trên đường cong cường độ-thời gian (TIC) để đánh giá mức độ ác tính."
    },
    {
        id: 73,
        en: "Dynamic Susceptibility Contrast (DSC)",
        vi: "Tưới máu nhạy từ (DSC Perfusion)",
        type: "Sequence",
        description: "Theo dõi sự rớt tín hiệu (trên ảnh T2*) do tác động nhạy từ của lượng lớn thuốc Gadolinium đi qua vi mạch máu não.",
        parameters: "Tính toán được các thông số tưới máu não: CBV, CBF, MTT, Tmax. Thiết yếu trong đột quỵ hoặc u não."
    },
    {
        id: 81,
        en: "T1rho (T1ρ)",
        vi: "T1 trong hệ tọa độ quay",
        type: "Sequence",
        description: "Phương pháp tạo độ tương phản bằng cách khóa các spin bằng một xung RF liên tục, đo lường sự tương tác phân tử ở tần số thấp.",
        parameters: "Rất nhạy trong việc phát hiện sự thay đổi cấu trúc sụn khớp sớm (hàm lượng proteoglycan) trước khi tổn thương hình thái học xuất hiện."
    },
    {
        id: 82,
        en: "T2 Mapping",
        vi: "Bản đồ T2",
        type: "Sequence",
        description: "Đo lường định lượng chính xác thời gian T2 (tính bằng milliseconds) của từng pixel sụn hoặc cơ tim, được mã hóa dưới dạng bản đồ màu.",
        parameters: "Khảo sát hàm lượng nước và sự sắp xếp collagen của sụn khớp hoặc đánh giá viêm cơ tim."
    },
    {
        id: 83,
        en: "Quantitative Susceptibility Mapping (QSM)",
        vi: "Bản đồ nhạy từ định lượng",
        type: "Sequence",
        description: "Kỹ thuật giải phương trình toán học từ dữ liệu pha của GRE để định lượng trực tiếp nồng độ chất từ tính (sắt, canxi) theo đơn vị ppm.",
        parameters: "Cung cấp độ chính xác vượt trội hơn SWI trong việc đo lường sắt ở não (Bệnh Parkinson, Alzheimer)."
    },
    {
        id: 84,
        en: "Ultrashort Echo Time (UTE)",
        vi: "Xung TE siêu ngắn",
        type: "Sequence",
        description: "Kỹ thuật thu thập tín hiệu với TE cực kỳ ngắn (< 0.1 ms), bỏ qua mã hóa pha truyền thống để thu thập K-space theo hình tia (radial).",
        parameters: "Phát hiện tín hiệu từ các cấu trúc bình thường không thấy được trên MRI do T2 phân rã quá nhanh: Xương vỏ cứng, sụn chêm, gân Achilles."
    },
    {
        id: 85,
        en: "Zero Echo Time (ZTE)",
        vi: "Xung TE bằng 0",
        type: "Sequence",
        description: "Gradient được bật ngay từ trước khi phát xung RF kích thích, thời gian TE xấp xỉ bằng 0.",
        parameters: "Thu được tín hiệu xương hoàn hảo, thường được dùng tạo ảnh \"giống CT\" trên máy MRI (Bone MRI)."
    },
    {
        id: 86,
        en: "Double Inversion Recovery (DIR)",
        vi: "Chuỗi xung DIR (Đảo ngược kép)",
        type: "Sequence",
        description: "Sử dụng 2 xung 180 độ liên tiếp với 2 thời gian TI khác nhau để xóa cùng lúc 2 loại mô (thường là xóa mỡ và xóa dịch não tủy, hoặc xóa chất trắng và xóa dịch).",
        parameters: "Làm nổi bật cực tốt tổn thương vỏ não, chất xám trong bệnh Đa xơ cứng (Multiple Sclerosis) hoặc động kinh."
    },
    {
        id: 87,
        en: "SPACE / CUBE / VISTA",
        vi: "Chuỗi xung TSE 3D tối ưu góc lật",
        type: "Sequence",
        description: "Chuỗi xung 3D TSE sử dụng góc lật thay đổi liên tục (Variable Flip Angle) trong chuỗi Echo Train dài.",
        parameters: "Tránh được mờ ảnh. Tạo được ảnh T2W hoặc FLAIR 3D đẳng hướng toàn sọ (chụp 1 lần cắt MPR mọi mặt phẳng) rất sắc nét."
    },
    {
        id: 88,
        en: "PROPELLER / BLADE / MultiVane",
        vi: "Thu thập dữ liệu dạng cánh quạt",
        type: "Sequence",
        description: "Điền k-space bằng các dải dữ liệu xoay xung quanh tâm giống cánh quạt. Dữ liệu tâm được lấy trung bình (Oversampled) liên tục.",
        parameters: "Chống xảo ảnh chuyển động (Motion artifact) bệnh nhân vô cùng hiệu quả, phù hợp chụp trẻ em, bệnh nhân kích thích không cần gây mê."
    }
];
