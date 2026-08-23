// Dữ liệu thuộc nhóm Chuỗi Xung (MRI Sequences)
export const sequenceData = [
    // --- 33 THUẬT NGỮ CŨ ---
    { 
        id: 1, 
        en: "Spin Echo (SE)", 
        vi: "Chuỗi xung Spin Echo (Xung dội spin)", 
        type: "Sequence", 
        description: "Sử dụng một xung kích thích 90 độ, theo sau là xung tái hội tụ 180 độ để tạo ra tín hiệu dội (echo). Giúp triệt tiêu sự mất đồng pha do từ trường không đồng nhất (T2* effect), mang lại hình ảnh có độ phân giải giải phẫu cao nhất.\n\n- Tên gọi theo hãng: Siemens (SE) | GE (SE) | Philips (SE) | Canon (SE) | Fujifilm (SE).", 
        parameters: "T1W: TR ngắn (400-600ms), TE ngắn (10-20ms). T2W: TR dài (>2000ms), TE dài (>80ms).",
        citations: []
    },
    { 
        id: 4, 
        en: "Diffusion Weighted Imaging (DWI)", 
        vi: "Chuỗi xung khuếch tán", 
        type: "Sequence", 
        description: "Dựa trên chuyển động Brown của các phân tử nước trong mô. Đo lường sự hạn chế khuếch tán, cực kỳ nhạy trong phát hiện nhồi máu não cấp (đột quỵ) hoặc đánh giá mật độ tế bào khối u.\n\n- Tên gọi theo hãng: Siemens (DWI / ep2d_diff) | GE (DWI / EPI) | Philips (DWI / SSh-EPI) | Canon (DWI / FASE) | Fujifilm (DWI).", 
        parameters: "Giá trị b (b-value): Thường dùng b=0 và b=1000 s/mm2. Bản đồ ADC được tính toán tự động.",
        citations: []
    },
    { 
        id: 6, 
        en: "Gradient Echo (GRE)", 
        vi: "Chuỗi xung Gradient Echo", 
        type: "Sequence", 
        description: "Sử dụng góc lật nhỏ hơn 90 độ và dùng từ trường chênh từ để tạo tín hiệu dội thay vì xung 180 độ. Tốc độ chụp nhanh nhưng nhạy với độ không đồng nhất từ trường (T2*).\n\n- Tên gọi theo hãng: Siemens (GRE / FLASH) | GE (GRE / SPGR) | Philips (FFE / T1-FFE) | Canon (FE / T1-FE) | Fujifilm (GE / SARGE).", 
        parameters: "Rất nhạy trong việc phát hiện xuất huyết vi thể hoặc vôi hóa. Cài đặt góc lật (FA) từ 5-30 độ.",
        citations: []
    },
    { 
        id: 7, 
        en: "Fluid Attenuated Inversion Recovery (FLAIR)", 
        vi: "Chuỗi xung xóa dịch não tủy", 
        type: "Sequence", 
        description: "Sử dụng thời gian đảo ngược (TI) dài để triệt tiêu hoàn toàn tín hiệu của dịch tự do (dịch não tủy), giúp làm nổi bật các tổn thương nằm cạnh não thất hoặc rãnh cuộn não.\n\n- Tên gọi theo hãng: Siemens (FLAIR / TIRM / Dark Fluid) | GE (FLAIR) | Philips (FLAIR) | Canon (FastFLAIR) | Fujifilm (FIR-FLAIR).", 
        parameters: "Cài đặt TI dài (khoảng 2000-2500ms). TR dài (6000-10000ms), TE dài (90-140ms).",
        citations: []
    },
    { 
        id: 8, 
        en: "Short Tau Inversion Recovery (STIR)", 
        vi: "Chuỗi xung xóa mỡ STIR", 
        type: "Sequence", 
        description: "Chuỗi xung IR với thời gian TI ngắn để đồng bộ với thời gian phục hồi T1 của mỡ đi qua điểm null. Xóa triệt để tín hiệu mỡ.\n\n- Tên gọi theo hãng: Siemens (STIR / TIRM) | GE (STIR) | Philips (STIR) | Canon (FastSTIR) | Fujifilm (FIR-STIR).", 
        parameters: "TI ngắn (150-170ms ở 1.5T). Không thể dùng sau khi tiêm thuốc đối quang từ.",
        citations: []
    },
    { 
        id: 11, 
        en: "Time of Flight (TOF)", 
        vi: "Chuỗi xung mạch máu thời gian bay", 
        type: "Sequence", 
        description: "Kỹ thuật chụp mạch máu không tiêm thuốc, dựa trên hiện tượng dòng chảy liên quan. Máu chảy vào lát cắt sẽ có tín hiệu cao.\n\n- Tên gọi theo hãng: Siemens (TOF / FLASH 3D) | GE (TOF / SPGR 3D) | Philips (TOF / TFE 3D) | Canon (TOF / FE 3D) | Fujifilm (TOF).", 
        parameters: "TOF 2D nhạy dòng chảy chậm. TOF 3D độ phân giải cao cho động mạch sọ não.",
        citations: []
    },
    { 
        id: 15, 
        en: "Susceptibility Weighted Imaging (SWI)", 
        vi: "Chuỗi xung nhạy từ", 
        type: "Sequence", 
        description: "Chuỗi xung 3D GRE sử dụng thông tin biên độ và pha. Rất nhạy với các chất có tính từ (máu, canxi, sắt).\n\n- Tên gọi theo hãng: Siemens (SWI) | GE (SWAN) | Philips (SWIp / VenBOLD) | Canon (FSBB) | Fujifilm (BSI).", 
        parameters: "Dùng để phát hiện xuất huyết vi thể, phân biệt vôi hóa (qua Phase map).",
        citations: []
    },
    { 
        id: 16, 
        en: "Turbo Spin Echo (TSE) / Fast Spin Echo (FSE)", 
        vi: "Chuỗi xung Spin Echo nhanh", 
        type: "Sequence", 
        description: "Biến thể của Spin Echo giúp giảm đáng kể thời gian chụp bằng cách thu nhận nhiều tín hiệu (echo) trong cùng một khoảng thời gian TR nhờ một chuỗi các xung 180 độ.\n\n- Tên gọi theo hãng: Siemens (TSE) | GE (FSE) | Philips (TSE) | Canon (FastSE) | Fujifilm (FastSE).", 
        parameters: "Tốc độ nhanh phụ thuộc vào chỉ số Echo Train Length (ETL). Gây mờ ảnh nếu ETL quá cao.",
        citations: []
    },
    { 
        id: 28, 
        en: "Spectral Presaturation with Inversion Recovery (SPIR)", 
        vi: "Xóa mỡ SPIR", 
        type: "Sequence", 
        description: "Lai tạo giữa FatSat và STIR. Sử dụng một xung đảo ngược chọn lọc phổ để xóa mỡ linh hoạt.\n\n- Tên gọi theo hãng: Siemens (FatSat / SPIR) | GE (ChemSat) | Philips (SPIR) | Canon (CHESS) | Fujifilm (FatSat).", 
        parameters: "Có thể dùng chung với thuốc cản từ (Khác với STIR).",
        citations: []
    },
    { 
        id: 29, 
        en: "Spectral Adiabatic Inversion Recovery (SPAIR)", 
        vi: "Xóa mỡ SPAIR", 
        type: "Sequence", 
        description: "Bản nâng cấp của SPIR sử dụng xung Adiabatic. Xóa mỡ cực kỳ đồng đều, kể cả trên những vùng cơ thể giải phẫu không bằng phẳng.\n\n- Tên gọi theo hãng: Siemens (SPAIR) | GE (ASPIR) | Philips (SPAIR) | Canon (SPAIR) | Fujifilm (N/A).", 
        parameters: "Cho hình ảnh T2 SPAIR hoặc T1 SPAIR rất mịn, ưu tiên ở MSK và vú.",
        citations: []
    },
    { 
        id: 30, 
        en: "Dixon Method", 
        vi: "Kỹ thuật xóa mỡ Dixon", 
        type: "Sequence", 
        description: "Dựa trên sự lệch pha hóa học giữa nước và mỡ. Phân tách tạo ra 4 loại ảnh: In-phase, Out-of-phase, Water-only, Fat-only.\n\n- Tên gọi theo hãng: Siemens (Dixon / VIBE Dixon) | GE (IDEAL / LAVA-Flex) | Philips (mDixon) | Canon (WFOP) | Fujifilm (FatSep).", 
        parameters: "Cực kỳ đáng tin cậy ở những vùng từ trường kém đồng nhất.",
        citations: []
    },
    { 
        id: 31, 
        en: "Balanced Steady-State Free Precession (bSSFP / TrueFISP)", 
        vi: "Chuỗi xung bSSFP", 
        type: "Sequence", 
        description: "Chuỗi xung Gradient Echo duy trì trạng thái ổn định. Tạo ra độ tương phản dựa trên tỷ lệ T2/T1. Dịch sẽ cực kỳ sáng.\n\n- Tên gọi theo hãng: Siemens (TrueFISP) | GE (FIESTA / COSMIC) | Philips (b-FFE) | Canon (True SSFP) | Fujifilm (BASG).", 
        parameters: "Thường dùng trong chụp tim (Cine), thai nhi, hoặc mạch máu ngoại vi không tiêm thuốc.",
        citations: []
    },
    { 
        id: 32, 
        en: "Half-Fourier Single-Shot TSE (HASTE)", 
        vi: "Chuỗi xung TSE đơn phát", 
        type: "Sequence", 
        description: "Thu nhận hơn một nửa k-space chỉ bằng một lần phát xung kích thích và dùng thuật toán Half-Fourier nội suy phần còn lại.\n\n- Tên gọi theo hãng: Siemens (HASTE) | GE (SS-FSE) | Philips (SSh-TSE) | Canon (FASE) | Fujifilm (SS-FSE).", 
        parameters: "Chống xảo ảnh chuyển động cực tốt, dùng nhiều trong MRI bụng.",
        citations: []
    },
    { 
        id: 33, 
        en: "Magnetization Prepared Rapid Gradient Echo (MPRAGE)", 
        vi: "Chuỗi xung 3D T1 MPRAGE", 
        type: "Sequence", 
        description: "Sử dụng một xung chuẩn bị từ hóa (IR) theo sau là chuỗi Gradient Echo 3D thu thập nhanh.\n\n- Tên gọi theo hãng: Siemens (MPRAGE) | GE (BRAVO / 3D SPGR) | Philips (3D TFE) | Canon (3D FFE-IR) | Fujifilm (3D GEIR).", 
        parameters: "Tiêu chuẩn vàng trong tái tạo 3D sọ não, đo thể tích não bộ.",
        citations: []
    },
    { 
        id: 34, 
        en: "Volumetric Interpolated Breath-hold Examination (VIBE)", 
        vi: "Chuỗi xung 3D T1 VIBE", 
        type: "Sequence", 
        description: "Chuỗi xung 3D GRE T1 phá hủy tín hiệu dư tích hợp xóa mỡ. Cho phép chụp toàn bộ ổ bụng trong 1 lần nín thở.\n\n- Tên gọi theo hãng: Siemens (VIBE) | GE (LAVA) | Philips (THRIVE) | Canon (3D Quick) | Fujifilm (TIGRE).", 
        parameters: "Xung bắt buộc trong khảo sát động học gan, tụy, thận sau tiêm.",
        citations: []
    },
    { 
        id: 35, 
        en: "Constructive Interference in Steady State (CISS / FIESTA-C)", 
        vi: "Chuỗi xung CISS 3D", 
        type: "Sequence", 
        description: "Chuỗi xung bSSFP 3D có độ phân giải siêu cao. Giúp quan sát cấu trúc thần kinh nhỏ trong dịch não tủy.\n\n- Tên gọi theo hãng: Siemens (CISS) | GE (FIESTA-C) | Philips (3D b-FFE) | Canon (3D True SSFP) | Fujifilm (PBSG).", 
        parameters: "Khảo sát các dây thần kinh sọ, ống tai trong, và rò dịch não tủy.",
        citations: []
    },
    { 
        id: 36, 
        en: "Arterial Spin Labeling (ASL)", 
        vi: "Tưới máu không tiêm thuốc ASL", 
        type: "Sequence", 
        description: "Đánh dấu từ tính các proton trong máu động mạch cổ, đo lường tín hiệu khi máu chảy lên tưới máu não.\n\n- Tên gọi theo hãng: Siemens (ASL / pCASL) | GE (3D ASL) | Philips (ASL) | Canon (ASL) | Fujifilm (ASL).", 
        parameters: "Đánh giá bản đồ tưới máu não (CBF) hoàn toàn không cần tiêm thuốc.",
        citations: []
    },
    { 
        id: 37, 
        en: "Diffusion Tensor Imaging (DTI)", 
        vi: "Hình ảnh sức căng khuếch tán", 
        type: "Sequence", 
        description: "Đo lường sự khuếch tán của nước theo nhiều hướng để dựng lại đường đi của các bó sợi thần kinh.\n\n- Tên gọi theo hãng: Siemens (DTI / Tractography) | GE (DTI / FiberTrak) | Philips (DTI / Fiber Trak) | Canon (DTI) | Fujifilm (DTI).", 
        parameters: "Ứng dụng trong lên kế hoạch phẫu thuật u não.",
        citations: []
    },
    { 
        id: 38, 
        en: "Magnetic Resonance Spectroscopy (MRS)", 
        vi: "Cộng hưởng từ phổ", 
        type: "Sequence", 
        description: "Phân tích thành phần chuyển hóa sinh hóa của một vùng mô dựa trên sự chênh lệch tần số Larmor của các chất.\n\n- Tên gọi theo hãng: Siemens (MRS) | GE (PROBE) | Philips (MRS) | Canon (MRS) | Fujifilm (MRS).", 
        parameters: "Phân biệt u não ác tính với viêm, hoại tử sau xạ trị.",
        citations: []
    },
    { 
        id: 39, 
        en: "Phase Contrast Angiography (PC-MRA)", 
        vi: "Chụp mạch máu đối pha", 
        type: "Sequence", 
        description: "Chụp mạch không tiêm thuốc, tạo tương phản dựa trên sự dịch pha của các proton chuyển động.\n\n- Tên gọi theo hãng: Siemens (PC MRA) | GE (PC MRA) | Philips (PCA) | Canon (PS MRA) | Fujifilm (PC MRA).", 
        parameters: "Yêu cầu cài đặt thông số VENC phù hợp với tốc độ dòng chảy.",
        citations: []
    },
    { 
        id: 40, 
        en: "Contrast-Enhanced Magnetic Resonance Angiography (CE-MRA)", 
        vi: "Chụp mạch máu có tiêm thuốc", 
        type: "Sequence", 
        description: "Sử dụng chuỗi xung 3D T1 cực nhanh kết hợp tiêm Bolus Gadolinium.\n\n- Tên gọi theo hãng: Siemens (ceMRA / fl3d) | GE (TRICKS / LAVA) | Philips (ceMRA) | Canon (ceMRA) | Fujifilm (ceMRA).", 
        parameters: "Không phụ thuộc vào chiều hay tốc độ dòng chảy, rất chính xác cho phình động mạch chủ.",
        citations: []
    },
    { 
        id: 41, 
        en: "Magnetic Resonance Cholangiopancreatography (MRCP)", 
        vi: "Chụp mật tụy (MRCP)", 
        type: "Sequence", 
        description: "Sử dụng xung T2W với TE cực kỳ dài. Mô đặc sẽ mất hoàn toàn tín hiệu, dịch tĩnh rực sáng.\n\n- Tên gọi theo hãng: Siemens (HASTE / 3D SPACE) | GE (SS-FSE / 3D MRCP) | Philips (SSh-TSE / 3D VISTA) | Canon (FASE / 3D FASE) | Fujifilm (SS-FSE).", 
        parameters: "Dựng hình 3D cây đường mật hoàn toàn không xâm lấn.",
        citations: []
    },
    { 
        id: 42, 
        en: "Functional MRI (fMRI)", 
        vi: "Cộng hưởng từ chức năng", 
        type: "Sequence", 
        description: "Kỹ thuật lập bản đồ các vùng hoạt động của não dựa trên sự thay đổi lưu lượng máu và oxy.\n\n- Tên gọi theo hãng: Siemens (BOLD fMRI) | GE (BrainWave) | Philips (fMRI) | Canon (fMRI) | Fujifilm (fMRI).", 
        parameters: "Dựa vào hiệu ứng BOLD. Thiết yếu trước phẫu thuật u não vùng chức năng.",
        citations: []
    },
    { 
        id: 72, 
        en: "Dynamic Contrast Enhancement (DCE)", 
        vi: "Cộng hưởng từ động học tiêm thuốc", 
        type: "Sequence", 
        description: "Chụp liên tục 1 vùng trước và nhiều pha sau khi tiêm nhanh Gadolinium.\n\n- Tên gọi theo hãng: Siemens (DCE / TWIST) | GE (DCE / TRICKS) | Philips (DCE / 4D-TRAK) | Canon (DCE) | Fujifilm (DCE).", 
        parameters: "Phân tích dựa trên đường cong cường độ-thời gian (TIC).",
        citations: []
    },
    { 
        id: 73, 
        en: "Dynamic Susceptibility Contrast (DSC)", 
        vi: "Tưới máu nhạy từ", 
        type: "Sequence", 
        description: "Theo dõi sự rớt tín hiệu do tác động nhạy từ của thuốc Gadolinium đi qua vi mạch máu não.\n\n- Tên gọi theo hãng: Siemens (DSC Perfusion) | GE (BrainStat) | Philips (DSC Perfusion) | Canon (DSC) | Fujifilm (DSC).", 
        parameters: "Tính toán CBV, CBF, MTT, Tmax.",
        citations: []
    },
    { 
        id: 81, 
        en: "T1rho (T1ρ)", 
        vi: "T1 trong hệ tọa độ quay", 
        type: "Sequence", 
        description: "Tạo độ tương phản bằng cách khóa các spin bằng một xung RF liên tục.\n\n- Tên gọi theo hãng: Siemens (T1rho) | GE (T1rho) | Philips (T1rho) | Canon (T1rho) | Fujifilm (N/A).", 
        parameters: "Nhạy phát hiện sự thay đổi cấu trúc sụn khớp sớm.",
        citations: []
    },
    { 
        id: 82, 
        en: "T2 Mapping", 
        vi: "Bản đồ T2", 
        type: "Sequence", 
        description: "Đo lường định lượng chính xác thời gian T2 của từng pixel sụn hoặc cơ tim.\n\n- Tên gọi theo hãng: Siemens (T2 Map / MyoMaps) | GE (CartiGram / T2 Map) | Philips (T2 Mapping) | Canon (T2 Map) | Fujifilm (T2 Map).", 
        parameters: "Khảo sát hàm lượng nước của sụn khớp hoặc viêm cơ tim.",
        citations: []
    },
    { 
        id: 83, 
        en: "Quantitative Susceptibility Mapping (QSM)", 
        vi: "Bản đồ nhạy từ định lượng", 
        type: "Sequence", 
        description: "Giải phương trình toán học từ dữ liệu pha để định lượng trực tiếp nồng độ chất từ tính (sắt, canxi).\n\n- Tên gọi theo hãng: Siemens (QSM) | GE (QSM) | Philips (QSM) | Canon (QSM) | Fujifilm (QSM).", 
        parameters: "Đo lường sắt ở não trong Parkinson, Alzheimer.",
        citations: []
    },
    { 
        id: 84, 
        en: "Ultrashort Echo Time (UTE)", 
        vi: "Xung TE siêu ngắn", 
        type: "Sequence", 
        description: "Thu thập tín hiệu với TE cực kỳ ngắn (< 0.1 ms), bỏ qua mã hóa pha truyền thống.\n\n- Tên gọi theo hãng: Siemens (UTE / PETRA) | GE (UTE) | Philips (UTE) | Canon (UTE) | Fujifilm (UTE).", 
        parameters: "Phát hiện tín hiệu từ xương vỏ cứng, sụn chêm, gân Achilles.",
        citations: []
    },
    { 
        id: 85, 
        en: "Zero Echo Time (ZTE)", 
        vi: "Xung TE bằng 0", 
        type: "Sequence", 
        description: "Gradient bật ngay từ trước khi phát xung RF kích thích, TE xấp xỉ bằng 0.\n\n- Tên gọi theo hãng: Siemens (PETRA / ZTE) | GE (ZTE / oZTE) | Philips (ZTE) | Canon (ZTE) | Fujifilm (N/A).", 
        parameters: "Thu được tín hiệu xương hoàn hảo (Bone MRI).",
        citations: []
    },
    { 
        id: 86, 
        en: "Double Inversion Recovery (DIR)", 
        vi: "Chuỗi xung DIR", 
        type: "Sequence", 
        description: "Sử dụng 2 xung 180 độ liên tiếp với 2 thời gian TI khác nhau để xóa cùng lúc 2 loại mô.\n\n- Tên gọi theo hãng: Siemens (DIR) | GE (DIR) | Philips (DIR) | Canon (DIR) | Fujifilm (DIR).", 
        parameters: "Làm nổi bật tổn thương vỏ não trong bệnh Đa xơ cứng.",
        citations: []
    },
    { 
        id: 87, 
        en: "SPACE / CUBE / VISTA", 
        vi: "Chuỗi xung TSE 3D tối ưu góc lật", 
        type: "Sequence", 
        description: "Chuỗi xung 3D TSE sử dụng góc lật thay đổi liên tục trong chuỗi Echo Train dài.\n\n- Tên gọi theo hãng: Siemens (SPACE) | GE (CUBE) | Philips (VISTA) | Canon (FASE3D) | Fujifilm (isoFSE).", 
        parameters: "Tạo ảnh T2W/FLAIR 3D đẳng hướng toàn sọ rất sắc nét.",
        citations: []
    },
    { 
        id: 88, 
        en: "PROPELLER / BLADE / MultiVane", 
        vi: "Thu thập dữ liệu dạng cánh quạt", 
        type: "Sequence", 
        description: "Điền k-space bằng các dải dữ liệu xoay xung quanh tâm giống cánh quạt.\n\n- Tên gọi theo hãng: Siemens (BLADE) | GE (PROPELLER) | Philips (MultiVane) | Canon (JET) | Fujifilm (RADAR).", 
        parameters: "Chống xảo ảnh chuyển động cực kỳ hiệu quả.",
        citations: []
    },

    // --- 67 THUẬT NGỮ CHUỖI XUNG MỚI ---
    { 
        id: 1001, 
        en: "Echo Planar Imaging (EPI)", 
        vi: "Hình ảnh mặt phẳng dội", 
        type: "Sequence", 
        description: "Thu nhận toàn bộ dữ liệu K-space sau một xung kích thích duy nhất thông qua sự đảo chiều liên tục của gradient.\n\n- Tên gọi theo hãng: Siemens (EPI) | GE (EPI) | Philips (EPI) | Canon (EPI) | Fujifilm (EPI).", 
        parameters: "Tốc độ siêu nhanh, là nền tảng bắt buộc cho DWI và fMRI.",
        citations: []
    },
    { 
        id: 1002, 
        en: "Spin Echo EPI (SE-EPI)", 
        vi: "Chuỗi xung EPI dội spin", 
        type: "Sequence", 
        description: "Kết hợp xung 180 độ của Spin Echo trước khi thu nhận EPI để giảm bớt xảo ảnh nhạy từ so với EPI thuần.\n\n- Tên gọi theo hãng: Siemens (SE-EPI) | GE (SE-EPI) | Philips (SE-EPI) | Canon (SE-EPI) | Fujifilm (SE-EPI).", 
        parameters: "Chuyên dùng trong DWI não để tránh méo hình nặng ở vùng nền sọ.",
        citations: []
    },
    { 
        id: 1003, 
        en: "Gradient Echo EPI (GRE-EPI)", 
        vi: "Chuỗi xung EPI Gradient Echo", 
        type: "Sequence", 
        description: "Sử dụng GRE để bắt đầu thu nhận EPI, tốc độ nhanh nhất nhưng nhạy từ tính nhất.\n\n- Tên gọi theo hãng: Siemens (GRE-EPI) | GE (GRE-EPI) | Philips (FFE-EPI) | Canon (FE-EPI) | Fujifilm (GRE-EPI).", 
        parameters: "Ứng dụng tuyệt đối trong fMRI và perfusion DSC.",
        citations: []
    },
    { 
        id: 1004, 
        en: "RESOLVE / RS-EPI", 
        vi: "EPI thu nhận đa phân đoạn (Readout-Segmented EPI)", 
        type: "Sequence", 
        description: "Thu thập K-space thành nhiều dải nhỏ thay vì một lần quét dài, giúp giảm méo hình và mờ ảnh.\n\n- Tên gọi theo hãng: Siemens (RESOLVE) | GE (MUSE / rs-EPI) | Philips (rs-EPI) | Canon (rs-EPI) | Fujifilm (N/A).", 
        parameters: "Cung cấp hình ảnh DWI độ phân giải cao cho thần kinh và tuyến tiền liệt.",
        citations: []
    },
    { 
        id: 1005, 
        en: "MUSE / Multi-Shot EPI", 
        vi: "EPI đa phát", 
        type: "Sequence", 
        description: "Tương tự RESOLVE, nhưng kết hợp thuật toán tính toán pha để triệt tiêu xảo ảnh chuyển động.\n\n- Tên gọi theo hãng: Siemens (ms-EPI) | GE (MUSE) | Philips (Multi-Shot EPI) | Canon (ms-EPI) | Fujifilm (N/A).", 
        parameters: "Cải thiện SNR và độ phân giải không gian cho Diffusion.",
        citations: []
    },
    { 
        id: 1006, 
        en: "ZOOMit / FOCUS", 
        vi: "DWI trường nhìn nhỏ", 
        type: "Sequence", 
        description: "Sử dụng xung kích thích RF đặc biệt để chỉ kích thích một vùng FOV nhỏ, không thu tín hiệu các vùng xung quanh.\n\n- Tên gọi theo hãng: Siemens (ZOOMit) | GE (FOCUS) | Philips (Zoom-DWI) | Canon (ZOOM DWI) | Fujifilm (N/A).", 
        parameters: "DWI cột sống và tiền liệt tuyến sắc nét, không bị nhiễu cuộn.",
        citations: []
    },
    { 
        id: 1007, 
        en: "Diffusion Kurtosis Imaging (DKI)", 
        vi: "Hình ảnh độ nhọn khuếch tán", 
        type: "Sequence", 
        description: "Kỹ thuật cao cấp của DWI, đo lường sự khuếch tán nước không tuân theo phân phối Gauss trong vi cấu trúc mô phức tạp.\n\n- Tên gọi theo hãng: Siemens (DKI) | GE (DKI) | Philips (DKI) | Canon (DKI) | Fujifilm (DKI).", 
        parameters: "Cần chụp nhiều b-value cao (b=2000) để đánh giá cấp độ khối u.",
        citations: []
    },
    { 
        id: 1008, 
        en: "Intravoxel Incoherent Motion (IVIM)", 
        vi: "Chuyển động không đồng pha nội Voxel", 
        type: "Sequence", 
        description: "Phân tách tín hiệu khuếch tán thực sự và tín hiệu tưới máu vi mạch thông qua nhiều mức b-value thấp và cao.\n\n- Tên gọi theo hãng: Siemens (IVIM) | GE (IVIM) | Philips (IVIM) | Canon (IVIM) | Fujifilm (IVIM).", 
        parameters: "Đánh giá tưới máu không cần tiêm thuốc cản từ.",
        citations: []
    },
    { 
        id: 1009, 
        en: "NODDI", 
        vi: "Khuếch tán định hướng nơ-ron", 
        type: "Sequence", 
        description: "Mô hình khuếch tán đa vỏ (multi-shell) giúp ước tính mật độ và sự phân tán của sợi trục thần kinh.\n\n- Tên gọi theo hãng: Siemens (NODDI) | GE (NODDI) | Philips (NODDI) | Canon (NODDI) | Fujifilm (N/A).", 
        parameters: "Ứng dụng trong nghiên cứu vi cấu trúc não sâu.",
        citations: []
    },
    { 
        id: 1010, 
        en: "Pseudo-Continuous ASL (pCASL)", 
        vi: "Tưới máu ASL bán liên tục", 
        type: "Sequence", 
        description: "Kết hợp ưu điểm của xung ASL liên tục và ASL ngắt quãng, dùng một chuỗi các xung RF ngắn để đánh dấu dòng máu.\n\n- Tên gọi theo hãng: Siemens (pCASL) | GE (pCASL / 3D ASL) | Philips (pCASL) | Canon (pCASL) | Fujifilm (pCASL).", 
        parameters: "Là tiêu chuẩn lâm sàng hiện tại cho Perfusion không tiêm thuốc.",
        citations: []
    },
    { 
        id: 1011, 
        en: "Pulsed ASL (PASL)", 
        vi: "Tưới máu ASL xung", 
        type: "Sequence", 
        description: "Sử dụng một xung RF đảo ngược duy nhất diện rộng để đánh dấu một khối máu lớn trước khi nó chảy vào não.\n\n- Tên gọi theo hãng: Siemens (PASL / PICORE) | GE (PASL) | Philips (PASL) | Canon (PASL) | Fujifilm (PASL).", 
        parameters: "Nhanh hơn nhưng SNR thấp hơn so với pCASL.",
        citations: []
    },
    { 
        id: 1012, 
        en: "FAIR", 
        vi: "Kỹ thuật đảo ngược xen kẽ (ASL)", 
        type: "Sequence", 
        description: "Một loại PASL dùng xung đảo ngược không chọn lọc và chọn lọc lát cắt để tạo hai bộ dữ liệu trừ nhau.\n\n- Tên gọi theo hãng: Siemens (FAIR) | GE (FAIR) | Philips (FAIR) | Canon (FAIR) | Fujifilm (N/A).", 
        parameters: "Dùng để khảo sát tưới máu vỏ não.",
        citations: []
    },
    { 
        id: 1013, 
        en: "Resting-State fMRI", 
        vi: "Cộng hưởng từ chức năng trạng thái nghỉ", 
        type: "Sequence", 
        description: "Đo lường hoạt động mạng lưới thần kinh tự nhiên khi bệnh nhân nằm yên không thực hiện nhiệm vụ gì.\n\n- Tên gọi theo hãng: Siemens (rs-fMRI) | GE (rs-fMRI) | Philips (rs-fMRI) | Canon (rs-fMRI) | Fujifilm (rs-fMRI).", 
        parameters: "Ứng dụng nghiên cứu Alzheimer, tự kỷ, trầm cảm.",
        citations: []
    },
    { 
        id: 1014, 
        en: "Task-based fMRI", 
        vi: "Cộng hưởng từ chức năng theo nhiệm vụ", 
        type: "Sequence", 
        description: "Ghi nhận tín hiệu BOLD trong khi bệnh nhân đang đọc, nghe, hoặc cử động tay chân.\n\n- Tên gọi theo hãng: Siemens (Task fMRI) | GE (BrainWave) | Philips (fMRI) | Canon (fMRI) | Fujifilm (fMRI).", 
        parameters: "Lập bản đồ vùng vận động/ngôn ngữ trước mổ não.",
        citations: []
    },
    { 
        id: 1015, 
        en: "PROSET / Water Excitation", 
        vi: "Xung kích thích chọn lọc nước", 
        type: "Sequence", 
        description: "Xung RF đặc biệt lợi dụng sự lệch pha hóa học để chỉ kích thích proton của nước, bỏ qua mỡ hoàn toàn.\n\n- Tên gọi theo hãng: Siemens (Water Excitation) | GE (Water Excitation) | Philips (PROSET) | Canon (W.E.) | Fujifilm (N/A).", 
        parameters: "Xóa mỡ cực tốt ở sụn khớp mà không bị lỗi vùng viền.",
        citations: []
    },
    { 
        id: 1016, 
        en: "eTHRIVE", 
        vi: "Xung T1 3D độ phân giải cao có nín thở", 
        type: "Sequence", 
        description: "Tên gọi của Philips cho xung 3D GRE T1 FatSat cực nhanh dùng chụp động học bụng.\n\n- Tên gọi theo hãng: Siemens (VIBE) | GE (LAVA) | Philips (eTHRIVE) | Canon (3D Quick) | Fujifilm (TIGRE).", 
        parameters: "Tương đương với VIBE (Siemens) và LAVA (GE).",
        citations: []
    },
    { 
        id: 1017, 
        en: "LAVA-Flex / VIBE-Dixon", 
        vi: "Xung 3D T1 kết hợp Dixon", 
        type: "Sequence", 
        description: "Chụp ổ bụng động học nhưng sử dụng thuật toán Dixon để tạo ảnh Xóa mỡ hoàn hảo ở mọi góc cạnh.\n\n- Tên gọi theo hãng: Siemens (VIBE-Dixon) | GE (LAVA-Flex) | Philips (mDixon) | Canon (W-FOP) | Fujifilm (FatSep).", 
        parameters: "Tiêu chuẩn vàng mới trong chụp MRI gan và vú.",
        citations: []
    },
    { 
        id: 1018, 
        en: "CAIPIRINHA", 
        vi: "Kỹ thuật chụp song song CAIPIRINHA", 
        type: "Sequence", 
        description: "Dịch chuyển pha của k-space để tối ưu hóa hình học cuộn dây, cho phép tăng tốc độ chụp (PI) lên rất cao mà không bị nhiễu aliasing nội tại.\n\n- Tên gọi theo hãng: Siemens (CAIPIRINHA) | GE (ARC / HyperSense) | Philips (SENSE / dS-SENSE) | Canon (SPEEDER) | Fujifilm (RAPID).", 
        parameters: "Ứng dụng đột phá trong chụp bụng nín thở siêu tốc.",
        citations: []
    },
    { 
        id: 1019, 
        en: "TWIST / TRICKS", 
        vi: "Chụp mạch máu động học (4D MRA)", 
        type: "Sequence", 
        description: "Chia k-space thành các vùng trung tâm và ngoại vi, cập nhật liên tục vùng trung tâm để đạt tốc độ <2 giây/khối 3D.\n\n- Tên gọi theo hãng: Siemens (TWIST) | GE (TRICKS) | Philips (4D-TRAK) | Canon (DRKS) | Fujifilm (TRAQ).", 
        parameters: "Dùng để xem dòng chảy từ động mạch sang tĩnh mạch (dị dạng AVM).",
        citations: []
    },
    { 
        id: 1020, 
        en: "4D-TRAK", 
        vi: "4D MRA của Philips", 
        type: "Sequence", 
        description: "Xung T1 3D siêu tốc quay liên tục để bắt các pha của thuốc cản từ trôi qua mạch máu.\n\n- Tên gọi theo hãng: Siemens (TWIST) | GE (TRICKS) | Philips (4D-TRAK) | Canon (DRKS) | Fujifilm (TRAQ).", 
        parameters: "Tạo video 4D dòng chảy mạch máu chi hoặc não.",
        citations: []
    },
    { 
        id: 1021, 
        en: "DISCO", 
        vi: "Chụp động học đa pha siêu nhanh", 
        type: "Sequence", 
        description: "Xung VIBE/LAVA kết hợp thu thập view-sharing, chụp tuyến tiền liệt hoặc vú với tốc độ 3-5 giây/pha.\n\n- Tên gọi theo hãng: Siemens (TWIST-VIBE) | GE (DISCO) | Philips (4D-THRIVE) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Xác định chính xác thời điểm Wash-in của u.",
        citations: []
    },
    { 
        id: 1022, 
        en: "KWIC / Radial K-space", 
        vi: "Thu thập K-space hình tia (Radial)", 
        type: "Sequence", 
        description: "Thay vì thu nhận k-space theo đường thẳng, kỹ thuật này thu theo các đường chéo đi qua tâm liên tục.\n\n- Tên gọi theo hãng: Siemens (Radial) | GE (KWIC) | Philips (Radial) | Canon (Radial) | Fujifilm (Radial).", 
        parameters: "Miễn nhiễm với xảo ảnh chuyển động hô hấp, không cần nín thở.",
        citations: []
    },
    { 
        id: 1023, 
        en: "Golden Angle Radial", 
        vi: "Góc vàng trong thu thập tia", 
        type: "Sequence", 
        description: "Các tia k-space được xoay theo một góc lệch chuẩn ~111.25 độ, cho phép phân chia dữ liệu động học (DCE) bất cứ lúc nào sau khi chụp.\n\n- Tên gọi theo hãng: Siemens (StarVIBE) | GE (DISCO Star) | Philips (N/A) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Rất mạnh cho MRI bụng trẻ em.",
        citations: []
    },
    { 
        id: 1024, 
        en: "GRASP", 
        vi: "Tái tạo GRASP", 
        type: "Sequence", 
        description: "Kết hợp thu nhận Golden Angle Radial và Compressed Sensing, tạo ra ảnh MRI động học hô hấp tự do.\n\n- Tên gọi theo hãng: Siemens (GRASP-VIBE) | GE (DISCO CS) | Philips (Compressed SENSE) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Giải pháp cho bệnh nhân hôn mê không thể nín thở.",
        citations: []
    },
    { 
        id: 1025, 
        en: "StarVIBE", 
        vi: "VIBE thu nhận dạng sao", 
        type: "Sequence", 
        description: "Tên gọi Siemens cho kỹ thuật Radial 3D T1, cho phép quét MRI tĩnh mạch hoặc đầu mặt cổ chống nhiễu nuốt bọt/chuyển động.\n\n- Tên gọi theo hãng: Siemens (StarVIBE) | GE (Radial LAVA) | Philips (N/A) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Tương phản T1 rõ nét mà không sợ rung.",
        citations: []
    },
    { 
        id: 1026, 
        en: "RADAR / BLADE", 
        vi: "Xung chống chuyển động RADAR", 
        type: "Sequence", 
        description: "Biến thể của PROPELLER (Hitachi/Siemens) quay các dải k-space để sửa lỗi cử động bệnh nhân.\n\n- Tên gọi theo hãng: Siemens (BLADE) | GE (PROPELLER) | Philips (MultiVane) | Canon (JET) | Fujifilm (RADAR).", 
        parameters: "Hoạt động tốt ở các chuỗi xung T2W, FLAIR sọ não.",
        citations: []
    },
    { 
        id: 1027, 
        en: "MEDIC / MERGE", 
        vi: "Xung đa tín hiệu dội (Multi-Echo GRE)", 
        type: "Sequence", 
        description: "Phát nhiều xung Gradient trong một TR và cộng dồn các Echo lại để tăng SNR cho mô sụn, rễ thần kinh cổ.\n\n- Tên gọi theo hãng: Siemens (MEDIC) | GE (MERGE) | Philips (m-FFE) | Canon (m-FE) | Fujifilm (N/A).", 
        parameters: "Hiển thị rễ thần kinh cực đẹp trên nền dịch tủy sáng.",
        citations: []
    },
    { 
        id: 1028, 
        en: "COSMIC", 
        vi: "Xung bSSFP của GE", 
        type: "Sequence", 
        description: "Xung Gradient trạng thái ổn định tối ưu hóa cho cột sống và khớp cổ chân.\n\n- Tên gọi theo hãng: Siemens (TrueFISP) | GE (COSMIC) | Philips (b-FFE) | Canon (True SSFP) | Fujifilm (BASG).", 
        parameters: "Cho ảnh sụn, dịch, tủy xương tương phản xuất sắc.",
        citations: []
    },
    { 
        id: 1029, 
        en: "DESS / Dual Echo Steady State", 
        vi: "Xung trạng thái ổn định dội kép", 
        type: "Sequence", 
        description: "Thu nhận cả tín hiệu FID và Echo trong một TR duy nhất, tạo ảnh 3D cực mỏng.\n\n- Tên gọi theo hãng: Siemens (DESS) | GE (FIESTA-C) | Philips (N/A) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Chuẩn vàng cho tái tạo sụn khớp gối (Knee Cartilage).",
        citations: []
    },
    { 
        id: 1030, 
        en: "T2* MAP", 
        vi: "Bản đồ T2 sao", 
        type: "Sequence", 
        description: "Thu nhận đa dội (Multi-echo GRE) ở các khoảng TE khác nhau để vẽ đường cong phân rã T2*.\n\n- Tên gọi theo hãng: Siemens (T2* Map) | GE (IDEAL-IQ / T2* Map) | Philips (mDixon Quant / T2* Map) | Canon (T2* Map) | Fujifilm (T2* Map).", 
        parameters: "Dùng tính nồng độ sắt tích tụ trong gan và cơ tim.",
        citations: []
    },
    { 
        id: 1031, 
        en: "T1 MAP / MOLLI", 
        vi: "Bản đồ T1 tim (MOLLI)", 
        type: "Sequence", 
        description: "Xung Modified Look-Locker Inversion recovery thu thập nhiều hình ảnh ở các mức hồi phục T1 khác nhau.\n\n- Tên gọi theo hãng: Siemens (MyoMaps / MOLLI) | GE (CardioMaps / MOLLI) | Philips (MOLLI) | Canon (MOLLI) | Fujifilm (MOLLI).", 
        parameters: "Định lượng xơ hóa cơ tim hoặc thâm nhiễm Amyloid.",
        citations: []
    },
    { 
        id: 1032, 
        en: "ShMOLLI", 
        vi: "MOLLI chu kỳ ngắn", 
        type: "Sequence", 
        description: "Rút ngắn số nhịp tim cần thiết để thu thập bản đồ T1 tim.\n\n- Tên gọi theo hãng: Siemens (ShMOLLI) | GE (ShMOLLI) | Philips (ShMOLLI) | Canon (ShMOLLI) | Fujifilm (N/A).", 
        parameters: "Phù hợp bệnh nhân khó nín thở dài.",
        citations: []
    },
    { 
        id: 1033, 
        en: "SASHA", 
        vi: "Xung bản đồ T1 bão hòa", 
        type: "Sequence", 
        description: "Dùng xung bão hòa (Saturation Recovery) thay vì đảo ngược (IR) để vẽ T1 map tim.\n\n- Tên gọi theo hãng: Siemens (SASHA) | GE (SASHA) | Philips (SASHA) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Ít bị ảnh hưởng bởi nhịp tim hơn MOLLI.",
        citations: []
    },
    { 
        id: 1034, 
        en: "Cardiac Cine (SSFP)", 
        vi: "MRI Tim động học", 
        type: "Sequence", 
        description: "Sử dụng bSSFP siêu nhanh được đồng bộ ECG để thu thập 25-30 frame trên một chu kỳ tim.\n\n- Tên gọi theo hãng: Siemens (Cine TrueFISP) | GE (Cine FIESTA) | Philips (Cine b-FFE) | Canon (Cine True SSFP) | Fujifilm (Cine BASG).", 
        parameters: "Đánh giá chức năng bơm máu (EF), vận động vùng thành tim.",
        citations: []
    },
    { 
        id: 1035, 
        en: "CSPAMM / Tagging", 
        vi: "Kỹ thuật dán nhãn cơ tim", 
        type: "Sequence", 
        description: "Dùng các dải xung RF bão hòa kẻ thành hình sọc caro trên cơ tim trước khi chụp Cine.\n\n- Tên gọi theo hãng: Siemens (Tagging / CSPAMM) | GE (MyoTag / FastCINE) | Philips (Tagging) | Canon (Tagging) | Fujifilm (N/A).", 
        parameters: "Theo dõi biến dạng lưới caro để phân tích sức căng cơ tim (Strain).",
        citations: []
    },
    { 
        id: 1036, 
        en: "SENC (Strain Encoded)", 
        vi: "Hình ảnh mã hóa sức căng", 
        type: "Sequence", 
        description: "Phân tích trực tiếp biến dạng cơ tim qua chiều dọc (Z-axis) mã hóa pha.\n\n- Tên gọi theo hãng: Siemens (MyoStrain / SENC) | GE (SENC) | Philips (SENC) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Nhạy hơn Tagging thông thường.",
        citations: []
    },
    { 
        id: 1037, 
        en: "4D Flow", 
        vi: "MRI mạch máu 4D", 
        type: "Sequence", 
        description: "Kỹ thuật Phase Contrast mở rộng mã hóa vận tốc (VENC) ở cả 3 trục x,y,z kết hợp với chu kỳ tim.\n\n- Tên gọi theo hãng: Siemens (4D Flow) | GE (4D Flow) | Philips (4D Flow) | Canon (4D Flow) | Fujifilm (N/A).", 
        parameters: "Dựng vector dòng chảy không gian 3 chiều của van tim, động mạch chủ.",
        citations: []
    },
    { 
        id: 1038, 
        en: "QFLOW / 2D Phase Contrast", 
        vi: "Khảo sát dòng chảy định lượng", 
        type: "Sequence", 
        description: "Đo lưu lượng (ml/s) hoặc vận tốc (cm/s) đi qua van tim hoặc cống não.\n\n- Tên gọi theo hãng: Siemens (Q-Flow / Flow Quant) | GE (Q-Flow) | Philips (Q-Flow) | Canon (Q-Flow) | Fujifilm (Flow Quant).", 
        parameters: "Chẩn đoán hẹp van tim, trào ngược, áp lực dịch não tủy.",
        citations: []
    },
    { 
        id: 1039, 
        en: "Non-Contrast MRA (NATIVE / FBI)", 
        vi: "MRA không tiêm thuốc gating tim", 
        type: "Sequence", 
        description: "Chụp 2 bộ dữ liệu: một lúc tâm thu (tín hiệu máu bị mất), một lúc tâm trương (máu sáng), rồi trừ đi nhau.\n\n- Tên gọi theo hãng: Siemens (NATIVE) | GE (Inhance Inflow) | Philips (B-TRANCE) | Canon (FBI) | Fujifilm (VASC).", 
        parameters: "Dùng chụp động mạch chi dưới cho bệnh nhân suy thận.",
        citations: []
    },
    { 
        id: 1040, 
        en: "TRANCE", 
        vi: "MRA kích hoạt nhịp tim của Philips", 
        type: "Sequence", 
        description: "Sử dụng xung TSE 3D gating theo nhịp tim để thu nhận tĩnh mạch sọ mặt không tiêm thuốc.\n\n- Tên gọi theo hãng: Siemens (NATIVE) | GE (Inhance) | Philips (TRANCE) | Canon (FBI) | Fujifilm (VASC).", 
        parameters: "Thay thế TOF rất hiệu quả.",
        citations: []
    },
    { 
        id: 1041, 
        en: "QISS", 
        vi: "MRA không tiêm dựa trên bSSFP", 
        type: "Sequence", 
        description: "Sử dụng lát cắt bSSFP cực nhanh kích hoạt ECG kết hợp xung bão hòa mô tĩnh.\n\n- Tên gọi theo hãng: Siemens (QISS) | GE (N/A) | Philips (N/A) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Được coi là kỹ thuật không tiêm thuốc chi dưới tốt nhất hiện nay.",
        citations: []
    },
    { 
        id: 1042, 
        en: "REACT", 
        vi: "Xung bSSFP tái tạo không đồng bộ", 
        type: "Sequence", 
        description: "Kỹ thuật mới tạo ảnh mạch máu không cần tiêm thuốc và không cần đo ECG rườm rà.\n\n- Tên gọi theo hãng: Siemens (N/A) | GE (N/A) | Philips (REACT) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Nhanh chóng trong cấp cứu.",
        citations: []
    },
    { 
        id: 1043, 
        en: "SNAP (Simultaneous Non-contrast Angiography and Plaque)", 
        vi: "Hình ảnh mảng xơ vữa SNAP", 
        type: "Sequence", 
        description: "Chuỗi xung đặc biệt tạo ra hình ảnh lồng mạch và mảng xơ vữa (chảy máu mảng bám) đồng thời.\n\n- Tên gọi theo hãng: Siemens (SNAP) | GE (SNAP) | Philips (SNAP) | Canon (SNAP) | Fujifilm (N/A).", 
        parameters: "Đánh giá nguy cơ đột quỵ từ hẹp mạch cảnh.",
        citations: []
    },
    { 
        id: 1044, 
        en: "MDE / LGE (Late Gadolinium Enhancement)", 
        vi: "Ngấm thuốc muộn cơ tim", 
        type: "Sequence", 
        description: "Chụp 10-15 phút sau khi tiêm thuốc. Dùng xung IR đảo ngược để \"xóa\" hoàn toàn cơ tim bình thường thành màu đen.\n\n- Tên gọi theo hãng: Siemens (LGE / IR-TrueFISP) | GE (MDE / MDE-FIESTA) | Philips (LGE / 3D TFE IR) | Canon (LGE) | Fujifilm (LGE).", 
        parameters: "Dấu hiệu sẹo nhồi máu hoặc xơ hóa cơ tim sẽ bắt thuốc sáng rực.",
        citations: []
    },
    { 
        id: 1045, 
        en: "PSIR (Phase Sensitive Inversion Recovery)", 
        vi: "IR nhạy pha", 
        type: "Sequence", 
        description: "Cải tiến của LGE, sử dụng thuật toán giữ lại thông tin pha (âm/dương) của tín hiệu phục hồi T1.\n\n- Tên gọi theo hãng: Siemens (PSIR) | GE (PS-IR) | Philips (PSIR) | Canon (PSIR) | Fujifilm (PSIR).", 
        parameters: "Không cần căn thời gian TI hoàn hảo mà cơ tim vẫn đen nhánh.",
        citations: []
    },
    { 
        id: 1046, 
        en: "REAL IR", 
        vi: "Tái tạo IR thực", 
        type: "Sequence", 
        description: "Hiển thị giá trị tín hiệu thực (-Mz đến +Mz) thay vì giá trị tuyệt đối trong xung Inversion.\n\n- Tên gọi theo hãng: Siemens (True IR) | GE (Real IR) | Philips (Real IR) | Canon (Real IR) | Fujifilm (Real IR).", 
        parameters: "Tăng độ tương phản ranh giới mô.",
        citations: []
    },
    { 
        id: 1047, 
        en: "MP2RAGE", 
        vi: "3D T1 MPRAGE hai xung", 
        type: "Sequence", 
        description: "Thu thập hai hình ảnh MPRAGE tại hai thời điểm TI khác nhau rồi kết hợp tính toán.\n\n- Tên gọi theo hãng: Siemens (MP2RAGE) | GE (MP2RAGE) | Philips (MP2RAGE) | Canon (MP2RAGE) | Fujifilm (N/A).", 
        parameters: "Xóa bỏ hoàn toàn nhiễu từ trường (B1 bias), tạo ảnh vỏ não siêu mịn cho AI phân tích.",
        citations: []
    },
    { 
        id: 1048, 
        en: "T1-FLAIR / T1-Dark Fluid", 
        vi: "Xóa dịch T1", 
        type: "Sequence", 
        description: "Sử dụng TI ngắn (~800ms) để xóa tín hiệu dịch não tủy trên ảnh T1W, thay vì T2W.\n\n- Tên gọi theo hãng: Siemens (T1-FLAIR / Dark Fluid) | GE (T1-FLAIR) | Philips (T1-FLAIR) | Canon (T1-FLAIR) | Fujifilm (T1-FLAIR).", 
        parameters: "Tăng khả năng phát hiện tổn thương viền não thất.",
        citations: []
    },
    { 
        id: 1049, 
        en: "GRASE (Gradient and Spin Echo)", 
        vi: "Chuỗi xung lai GRASE", 
        type: "Sequence", 
        description: "Kẹp các xung Gradient Echo vào giữa các xung Spin Echo trong một TR.\n\n- Tên gọi theo hãng: Siemens (TGSE) | GE (GRASE) | Philips (GRASE) | Canon (GRASE) | Fujifilm (N/A).", 
        parameters: "Tốc độ nhanh như EPI nhưng ít xảo ảnh từ tính hơn, hay dùng cho 3D T2W.",
        citations: []
    },
    { 
        id: 1050, 
        en: "EPIK", 
        vi: "EPI Keyhole", 
        type: "Sequence", 
        description: "Kỹ thuật kết hợp thu thập trung tâm k-space độ phân giải cao và ngoại vi nhanh.\n\n- Tên gọi theo hãng: Siemens (EPIK) | GE (N/A) | Philips (N/A) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Dùng cho fMRI để giảm biến dạng hình học.",
        citations: []
    },
    { 
        id: 1051, 
        en: "PRESTO", 
        vi: "Xung chuyển dịch pha", 
        type: "Sequence", 
        description: "Kỹ thuật TE dài hơn TR bằng cách dời tín hiệu dội sang chu kỳ kích thích tiếp theo.\n\n- Tên gọi theo hãng: Siemens (N/A) | GE (N/A) | Philips (PRESTO) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "Rất nhạy trong khảo sát tưới máu não fMRI.",
        citations: []
    },
    { 
        id: 1052, 
        en: "Keyhole Imaging", 
        vi: "Kỹ thuật lỗ khóa (Keyhole)", 
        type: "Sequence", 
        description: "Chỉ thu thập phần trung tâm k-space trong các pha động học tiêm thuốc, phần ngoại vi mượn từ pha trước tiêm.\n\n- Tên gọi theo hãng: Siemens (TWIST) | GE (TRICKS) | Philips (Keyhole) | Canon (Keyhole) | Fujifilm (Keyhole).", 
        parameters: "Tăng cực đại độ phân giải thời gian.",
        citations: []
    },
    { 
        id: 1053, 
        en: "CENTRA", 
        vi: "Lấy mẫu K-space theo đường xoắn trung tâm", 
        type: "Sequence", 
        description: "Đảm bảo tín hiệu trung tâm k-space được thu đúng lúc đỉnh thuốc đối quang từ đi qua.\n\n- Tên gọi theo hãng: Siemens (Centric PE) | GE (Elliptic Centric) | Philips (CENTRA) | Canon (Centric) | Fujifilm (Centric).", 
        parameters: "Tuyệt đối quan trọng trong CE-MRA.",
        citations: []
    },
    { 
        id: 1054, 
        en: "B-TFE / FIESTA", 
        vi: "Cân bằng TFE", 
        type: "Sequence", 
        description: "Biến thể của bSSFP tập trung vào sự cân bằng từ trường gradient 3 trục.\n\n- Tên gọi theo hãng: Siemens (TrueFISP) | GE (FIESTA) | Philips (b-TFE) | Canon (TrueSSFP) | Fujifilm (BASG).", 
        parameters: "Cho độ sáng tối đa đối với dịch lỏng tĩnh.",
        citations: []
    },
    { 
        id: 1055, 
        en: "Single-Shot FSE", 
        vi: "FSE đơn phát", 
        type: "Sequence", 
        description: "Khởi tạo một xung 90 độ và hàng trăm xung 180 độ để thu trọn 1 lát cắt trong <1 giây.\n\n- Tên gọi theo hãng: Siemens (HASTE) | GE (SS-FSE) | Philips (SSh-TSE) | Canon (FASE) | Fujifilm (SS-FSE).", 
        parameters: "MRCP, MRU, Myelography không thể thiếu xung này.",
        citations: []
    },
    { 
        id: 1056, 
        en: "FIESTA-FatSat", 
        vi: "bSSFP xóa mỡ", 
        type: "Sequence", 
        description: "Kết hợp bSSFP với xung xóa mỡ chuyên biệt.\n\n- Tên gọi theo hãng: Siemens (TrueFISP FatSat) | GE (FIESTA-FatSat) | Philips (b-TFE SPIR) | Canon (TrueSSFP FatSat) | Fujifilm (BASG FatSat).", 
        parameters: "Hình ảnh ruột thừa hoặc thần kinh sọ nổi bật hơn.",
        citations: []
    },
    { 
        id: 1057, 
        en: "DRIVE / RESTORE", 
        vi: "Xung đẩy lùi (Driven Equilibrium)", 
        type: "Sequence", 
        description: "Thêm một xung 90 độ ở cuối Echo train để ép từ hóa dọc (Mz) phục hồi ngay lập tức.\n\n- Tên gọi theo hãng: Siemens (RESTORE) | GE (FRFSE) | Philips (DRIVE) | Canon (Fast Recovery) | Fujifilm (N/A).", 
        parameters: "Tăng cường độ sáng của dịch trên ảnh T2W TSE với TR ngắn.",
        citations: []
    },
    { 
        id: 1058, 
        en: "VISTA-SPAIR", 
        vi: "3D T2 xóa mỡ SPAIR", 
        type: "Sequence", 
        description: "Tích hợp SPAIR vào khối 3D độ phân giải cao.\n\n- Tên gọi theo hãng: Siemens (SPACE SPAIR) | GE (CUBE ASPIR) | Philips (VISTA SPAIR) | Canon (FASE3D SPAIR) | Fujifilm (isoFSE SPAIR).", 
        parameters: "Tái tạo hoàn hảo các rễ thần kinh đám rối cánh tay.",
        citations: []
    },
    { 
        id: 1059, 
        en: "T2-MAP Cartilage", 
        vi: "Bản đồ T2 sụn khớp", 
        type: "Sequence", 
        description: "Chuỗi xung đa dội (multi-echo SE) vẽ bản đồ màu tương quan hàm lượng nước.\n\n- Tên gọi theo hãng: Siemens (T2 Map) | GE (CartiGram) | Philips (T2 Mapping) | Canon (T2 Map) | Fujifilm (T2 Map).", 
        parameters: "Phát hiện thoái hóa sụn trước khi mất độ dày sụn.",
        citations: []
    },
    { 
        id: 1060, 
        en: "T1ρ (T1-rho) Cartilage", 
        vi: "Bản đồ T1-rho sụn", 
        type: "Sequence", 
        description: "Đánh giá lượng Proteoglycan bị mất trong sụn khớp sớm.\n\n- Tên gọi theo hãng: Siemens (T1rho) | GE (T1rho) | Philips (T1rho) | Canon (T1rho) | Fujifilm (N/A).", 
        parameters: "Công cụ nghiên cứu mạnh mẽ cho viêm khớp xương.",
        citations: []
    },
    { 
        id: 1061, 
        en: "Synthetic MRI (SyMRI / MAGiC)", 
        vi: "Cộng hưởng từ tổng hợp", 
        type: "Sequence", 
        description: "Một lần chụp 5 phút thu thập dữ liệu gốc, phần mềm tự tạo ra T1W, T2W, FLAIR, STIR, PSIR.\n\n- Tên gọi theo hãng: Siemens (Syngo.MRI) | GE (MAGiC) | Philips (SyntAcq) | Canon (Synthetic MRI) | Fujifilm (N/A).", 
        parameters: "Tiết kiệm thời gian chụp não đáng kể, cung cấp luôn định lượng mô.",
        citations: []
    },
    { 
        id: 1062, 
        en: "Myelin Water Imaging", 
        vi: "Hình ảnh nước Myelin", 
        type: "Sequence", 
        description: "Tách tín hiệu T2 cực ngắn của nước bám trong vỏ myelin thần kinh.\n\n- Tên gọi theo hãng: Siemens (MWI) | GE (MWI) | Philips (mDixon-MWI) | Canon (MWI) | Fujifilm (MWI).", 
        parameters: "Đo lường lượng Myelin bị mất trong bệnh xơ cứng rải rác (MS).",
        citations: []
    },
    { 
        id: 1063, 
        en: "APT (Amide Proton Transfer)", 
        vi: "Chuyển giao Proton Amide", 
        type: "Sequence", 
        description: "Dựa trên CEST (Chemical Exchange Saturation Transfer) để đo nồng độ protein tế bào.\n\n- Tên gọi theo hãng: Siemens (APTw) | GE (APT) | Philips (APTw) | Canon (APT) | Fujifilm (N/A).", 
        parameters: "Phân biệt u não cấp độ cao (nhiều protein) và hoại tử tia xạ.",
        citations: []
    },
    { 
        id: 1064, 
        en: "CEST Imaging", 
        vi: "Chuyển giao bão hòa trao đổi hóa học", 
        type: "Sequence", 
        description: "Bão hòa một nhóm chất hóa học đặc biệt, đợi chúng trao đổi proton với nước rồi đo sự giảm tín hiệu nước.\n\n- Tên gọi theo hãng: Siemens (CEST) | GE (CEST) | Philips (CEST) | Canon (CEST) | Fujifilm (CEST).", 
        parameters: "Được ứng dụng như một chất tương phản nội sinh (Glucose, Glutamate).",
        citations: []
    },
    { 
        id: 1065, 
        en: "MR Elastography (MRE)", 
        vi: "Siêu âm đàn hồi cộng hưởng từ", 
        type: "Sequence", 
        description: "Máy tạo rung động sóng cơ học truyền vào gan, xung MRI Phase Contrast đo tốc độ sóng lan truyền.\n\n- Tên gọi theo hãng: Siemens (MR Elastography) | GE (MR Touch) | Philips (MR Elastography) | Canon (MR Elastography) | Fujifilm (N/A).", 
        parameters: "Tiêu chuẩn vàng đánh giá xơ gan định lượng (kPa) không xâm lấn.",
        citations: []
    },
    { 
        id: 1066, 
        en: "Silent Scan / Quiet Suite", 
        vi: "Chụp MRI chống ồn", 
        type: "Sequence", 
        description: "Sử dụng UTE/ZTE và tối ưu hóa đường dốc gradient (Slew rate mượt mà) để loại bỏ tiếng ồn máy MRI.\n\n- Tên gọi theo hãng: Siemens (Quiet Suite) | GE (Silent Scan) | Philips (ComforTone) | Canon (Pianissimo) | Fujifilm (SoftSound).", 
        parameters: "Tuyệt vời cho trẻ em, giảm ồn từ >100dB xuống sát tiếng ồn môi trường.",
        citations: []
    },
    { 
        id: 1067, 
        en: "iPAT2 (2D GRAPPA)", 
        vi: "Chụp song song đa chiều", 
        type: "Sequence", 
        description: "Tăng tốc độ thu thập ở cả hướng mã hóa pha và hướng chia lát cắt (trong 3D).\n\n- Tên gọi theo hãng: Siemens (iPAT2 / GRAPPA) | GE (ARC 2D) | Philips (SENSE 2D) | Canon (SPEEDER 2D) | Fujifilm (RAPID 2D).", 
        parameters: "Giảm thời gian xung VIBE từ 25s xuống 10s nín thở cực nhẹ.",
        citations: []
    }
];
