// Dữ liệu thuộc nhóm Nguyên lý Vật lý (Physics)
export const physicsData = [
    {
        id: 101,
        en: "Net Magnetization Vector (NMV)",
        vi: "Vector từ hóa thực (M0)",
        type: "Physics",
        description: "Tổng hợp các moment từ vi mô của các proton Hydrogen trong cơ thể khi được đặt vào từ trường mạnh B0. Vector này có xu hướng định hướng song song với từ trường chính.",
        parameters: "Chính là nguồn gốc tạo ra tín hiệu MRI. Ở trạng thái cân bằng, NMV hoàn toàn nằm trên trục dọc (Mz)."
    },
    {
        id: 102,
        en: "Resonance",
        vi: "Hiện tượng cộng hưởng",
        type: "Physics",
        description: "Sự trao đổi năng lượng xảy ra khi một hệ thống vật lý bị kích thích bởi một tần số bên ngoài khớp chính xác với tần số dao động tự nhiên của nó.",
        parameters: "Trong MRI, sóng RF chỉ truyền năng lượng vào hạt nhân Hydrogen nếu phát đúng tần số Larmor của Hydrogen."
    },
    {
        id: 103,
        en: "Precession",
        vi: "Hiện tượng tiến động",
        type: "Physics",
        description: "Chuyển động xoay của trục quay hạt nhân (spin) xung quanh trục từ trường chính B0, giống như hiện tượng đảo của một con quay (top) đang quay quanh trục Trái Đất.",
        parameters: "Tốc độ tiến động này được gọi là tần số Larmor, tỉ lệ thuận với cường độ từ trường B0."
    },
    {
        id: 104,
        en: "Proton (Hydrogen Nucleus)",
        vi: "Hạt nhân Proton Hydrogen",
        type: "Physics",
        description: "Thành phần cơ bản trong nguyên tử cơ thể, có một proton duy nhất nên mang điện tích dương và có tính tự quay (spin). Sinh ra một từ trường siêu nhỏ (moment từ).",
        parameters: "Được chọn làm nền tảng của MRI vì dồi dào nhất trong cơ thể (chiếm hơn 60% từ nước và mỡ) và có hằng số từ hồi chuyển cực cao."
    },
    {
        id: 105,
        en: "Transverse Magnetization (Mxy)",
        vi: "Từ hóa ngang",
        type: "Physics",
        description: "Thành phần của vector từ hóa nằm trên mặt phẳng vuông góc với từ trường chính (mặt phẳng x-y). Chỉ sinh ra khi có xung RF kích thích kéo NMV lệch đi.",
        parameters: "Cuộn dây thu (Receiver Coil) chỉ có khả năng cảm ứng từ trường biến thiên trên mặt phẳng ngang này để tạo ra tín hiệu điện (theo định luật Faraday)."
    },
    {
        id: 106,
        en: "Longitudinal Magnetization (Mz)",
        vi: "Từ hóa dọc",
        type: "Physics",
        description: "Thành phần vector từ hóa nằm song song với trục từ trường chính (trục z). Ở trạng thái nghỉ, toàn bộ M0 = Mz.",
        parameters: "Quá trình thành phần này hồi phục lại (sau xung 90 độ) sinh ra hiện tượng T1 Relaxation (Phục hồi T1)."
    },
    {
        id: 107,
        en: "Faraday's Law of Induction",
        vi: "Định luật cảm ứng điện từ Faraday",
        type: "Physics",
        description: "Một từ trường biến thiên xuyên qua một vòng dây dẫn sẽ sinh ra trong dây dẫn đó một dòng điện cảm ứng.",
        parameters: "Là nguyên lý cốt lõi của việc thu tín hiệu MRI: Vector từ hóa ngang (Mxy) quay vòng sẽ tạo ra từ trường biến thiên, quét qua cuộn dây (Coil) sinh ra dòng điện tín hiệu thô."
    },
    {
        id: 108,
        en: "Superconductivity",
        vi: "Hiện tượng siêu dẫn",
        type: "Physics",
        description: "Trạng thái vật lý mà ở đó điện trở của vật liệu (hợp kim Niobium-Titanium) giảm xuống bằng 0 tuyệt đối khi bị làm lạnh ở nhiệt độ cực thấp (~4 Kelvin hoặc -269°C).",
        parameters: "Nhờ siêu dẫn, dòng điện khổng lồ đi qua cuộn dây MRI không bị sinh nhiệt và duy trì từ trường vĩnh cửu mà không hao tốn thêm điện năng."
    },
    {
        id: 109,
        en: "Quench",
        vi: "Sự cố mất siêu dẫn (Quench)",
        type: "Physics",
        description: "Sự kiện nguy hiểm khi hệ thống cuộn dây bị tăng nhiệt độ đột ngột, thoát khỏi trạng thái siêu dẫn. Điện trở xuất hiện gây sinh nhiệt khổng lồ, làm sôi và bốc hơi toàn bộ khí Heli lỏng ngay lập tức.",
        parameters: "Gây mất từ trường hoàn toàn. Khí Heli thoát ra có thể gây ngạt hoặc bỏng lạnh nếu đường ống xả (Quench pipe) bị nghẽn."
    },
    {
        id: 110,
        en: "Radiofrequency Excitation",
        vi: "Sự kích thích vô tuyến",
        type: "Physics",
        description: "Quá trình truyền sóng vô tuyến (RF) ở tần số cộng hưởng vào hệ thống spin. Năng lượng này khiến các spin đang ở mức thấp (cùng chiều B0) nhảy lên mức năng lượng cao (ngược chiều B0).",
        parameters: "Hệ quả vĩ mô là làm Vector từ hóa thực (NMV) lật xuống khỏi trục Z (Tạo góc lật Flip Angle)."
    },
    {
        id: 111,
        en: "Spin-Lattice Relaxation",
        vi: "Phục hồi Spin-Mạng lưới (T1)",
        type: "Physics",
        description: "Quá trình các proton nhả năng lượng dư thừa (vừa nhận từ xung RF) trả lại vào môi trường xung quanh (lattice - mạng lưới phân tử) để quay về trạng thái cân bằng năng lượng thấp.",
        parameters: "Đại lượng đo lường tốc độ nhả năng lượng này là Thời gian T1. Mỡ nhả năng lượng rất nhanh (T1 ngắn)."
    },
    {
        id: 112,
        en: "Spin-Spin Relaxation",
        vi: "Phân rã Spin-Spin (T2)",
        type: "Physics",
        description: "Quá trình các proton trao đổi năng lượng chéo với nhau. Không có năng lượng mất đi, nhưng sự tương tác từ tính nội tại làm chúng bắt đầu quay lệch nhịp nhau (Mất đồng pha).",
        parameters: "Hệ quả là làm giảm Vector từ hóa ngang (Mxy). Tốc độ giảm đi này là Thời gian T2."
    },
    {
        id: 113,
        en: "Phase Coherence",
        vi: "Sự đồng pha",
        type: "Physics",
        description: "Trạng thái khi tất cả các moment từ của hạt nhân đang quay (tiến động) cùng một vị trí góc trên quỹ đạo vào cùng một thời điểm.",
        parameters: "Tín hiệu thu được lớn nhất (tại đỉnh tín hiệu Echo) khi sự đồng pha đạt mức cao nhất (100%)."
    },
    {
        id: 114,
        en: "Dephasing",
        vi: "Sự mất đồng pha",
        type: "Physics",
        description: "Sự xé lẻ vị trí góc (phase) của các spin do tương tác từ (T2) hoặc từ trường máy không đồng nhất (T2*). Tín hiệu tổng cộng (Vector Mxy) bị triệt tiêu dần.",
        parameters: "Cần khắc phục bằng các kỹ thuật tái hội tụ (dùng Xung 180 hoặc Gradient)."
    },
    {
        id: 115,
        en: "Rephasing",
        vi: "Sự tái hội tụ (Tái đồng pha)",
        type: "Physics",
        description: "Quá trình đảo ngược sự mất đồng pha để kéo các spin quay chậm lại gần các spin quay nhanh, khiến chúng gặp nhau và đồng pha trở lại tại một thời điểm.",
        parameters: "Tạo ra một 'đỉnh' tín hiệu có thể ghi hình được, gọi là Tín hiệu dội (Echo)."
    },
    {
        id: 116,
        en: "Gradient Magnetic Field",
        vi: "Từ trường chênh lệch (Gradient)",
        type: "Physics",
        description: "Một từ trường phụ có cường độ thay đổi tuyến tính theo không gian (mạnh hơn ở đầu này và yếu hơn ở đầu kia). Được kích hoạt xen kẽ để biến đổi tần số của các spin.",
        parameters: "Đóng vai trò định vị tọa độ không gian cho điểm ảnh (Chọn lát cắt, mã hóa pha, mã hóa tần số)."
    },
    {
        id: 117,
        en: "Fourier Transform (FT)",
        vi: "Biến đổi Fourier",
        type: "Physics",
        description: "Thuật toán toán học chuyển đổi tín hiệu từ miền thời gian (sóng thô chứa đủ loại tần số) sang miền tần số không gian (ảnh hiển thị).",
        parameters: "Trong MRI, biến đổi Fourier ngược (2D hoặc 3D) sẽ giải mã dữ liệu phức tạp trong K-space thành ma trận hình ảnh giải phẫu lâm sàng."
    },
    {
        id: 118,
        en: "Excitation Pulse",
        vi: "Xung kích thích",
        type: "Physics",
        description: "Xung điện từ đầu tiên trong một chu kỳ (Thường là 90 độ trong SE). Phá vỡ trạng thái cân bằng từ hóa, đưa toàn bộ Mz chuyển thành Mxy để bắt đầu tạo tín hiệu.",
        parameters: "Nếu xung này bị lỗi hoặc băng thông truyền nhỏ, lát cắt sẽ không được chọn chính xác."
    },
    {
        id: 119,
        en: "Refocusing Pulse",
        vi: "Xung tái hội tụ (Xung 180 độ)",
        type: "Physics",
        description: "Xung điện từ mạnh gấp đôi xung 90 độ. Có vai trò lật các spin (đang bị mất đồng pha T2*) vòng sang phía đối diện như tấm gương, để chúng chạy đua ngược lại tự bắt kịp nhau.",
        parameters: "Trái tim của chuỗi xung Spin Echo và Turbo Spin Echo."
    },
    {
        id: 120,
        en: "T1 Relaxation Curve",
        vi: "Đường cong phục hồi T1",
        type: "Physics",
        description: "Đồ thị hàm số mũ biểu diễn mức độ phục hồi của Từ hóa dọc (Mz) theo thời gian. Mức 63% định nghĩa thời gian T1.",
        parameters: "Để tạo ảnh T1W có độ tương phản cao, ta phải phát xung lặp lại (TR) khi đường cong T1 của 2 mô đang chênh lệch nhau lớn nhất (TR ngắn)."
    },
    {
        id: 121,
        en: "T2 Decay Curve",
        vi: "Đường cong phân rã T2",
        type: "Physics",
        description: "Đồ thị hàm số giảm theo hàm mũ biểu diễn mức độ sụt giảm của Từ hóa ngang (Mxy). Mức giảm còn 37% định nghĩa thời gian T2.",
        parameters: "Để tạo ảnh T2W, ta thu tín hiệu (TE) ở thời điểm muộn (TE dài) để các mô có T2 ngắn (mỡ) phân rã hết, chỉ còn nước/dịch sáng."
    },
    {
        id: 122,
        en: "Echo",
        vi: "Tín hiệu dội (Echo)",
        type: "Physics",
        description: "Tín hiệu RF phát ra từ bệnh nhân đạt cường độ tối đa tại thời điểm các vector spin hoàn toàn đồng pha. Đây là dữ liệu thực tế duy nhất được anten thu nhận.",
        parameters: "Có 2 loại chính: Spin Echo (Tạo bởi xung 180) và Gradient Echo (Tạo bởi sự đảo chiều cực từ Gradient)."
    },
    {
        id: 123,
        en: "B0 Homogeneity",
        vi: "Độ đồng nhất từ trường B0",
        type: "Physics",
        description: "Mức độ bằng phẳng của từ trường B0 trên toàn bộ thể tích không gian đo lường (Đo bằng phần triệu - ppm). B0 tuyệt đối đồng nhất thì cộng hưởng mới chính xác.",
        parameters: "Chụp phổ (MRS) yêu cầu độ đồng nhất cực cao (< 0.1 ppm). Chụp xóa mỡ FatSat cũng sẽ thất bại nếu B0 kém đồng nhất."
    },
    {
        id: 124,
        en: "Magnetic Susceptibility (χ)",
        vi: "Độ nhạy từ (Từ hóa sinh)",
        type: "Physics",
        description: "Đại lượng vật lý vô hướng cho biết mức độ một vật liệu có khả năng bị nhiễm từ khi đặt trong một từ trường bên ngoài (B0).",
        parameters: "Vật liệu nghịch từ (Diamagnetic) như nước, xương có χ âm. Vật liệu thuận từ (Paramagnetic) như Gadolinium, máu khử oxy có χ dương. Sắt từ (Ferromagnetic) có χ cực kỳ lớn."
    },
    {
        id: 125,
        en: "Eddy Currents",
        vi: "Dòng điện xoáy (Foucault)",
        type: "Physics",
        description: "Dòng điện cảm ứng ngoài ý muốn sinh ra trên bề mặt các vật liệu dẫn điện bên trong thân máy MRI (VD: vỏ cuộn siêu dẫn) do sự bật tắt liên tục của cuộn chênh từ Gradient.",
        parameters: "Gây biến dạng từ trường cục bộ, làm méo ảnh nghiêm trọng, đặc biệt trong chuỗi xung EPI/DWI. Được khắc phục bằng cuộn chắn (Shielded gradients)."
    },
    {
        id: 126,
        en: "Ernst Angle",
        vi: "Góc Ernst",
        type: "Physics",
        description: "Góc lật (Flip Angle) tối ưu về mặt vật lý toán học để tạo ra Tỷ lệ Tín hiệu/Nhiễu (SNR) lớn nhất có thể đối với một thời gian TR nhất định và một mô có T1 nhất định.",
        parameters: "Thường tính bằng phương trình: cos(α) = e^(-TR/T1). Cài đặt thông số này đặc biệt quan trọng trong các xung Gradient Echo (T1 3D)."
    }
];
