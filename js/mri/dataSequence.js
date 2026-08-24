// Dữ liệu thuộc nhóm Chuỗi Xung (MRI Sequences)
export const sequenceData = [
    // --- 33 THUẬT NGỮ CỐT LÕI ---
    { 
        id: 1, 
        en: "Spin Echo (SE)", 
        vi: "Chuỗi xung Spin Echo (Xung dội spin)", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Sử dụng một xung kích thích 90° để lật vector từ hóa, theo sau là xung tái hội tụ 180° để lật ngược các spin và tạo ra tín hiệu dội (echo). Xung 180° có vai trò cốt lõi giúp triệt tiêu sự mất đồng pha do từ trường không đồng nhất (hiệu ứng T2*), mang lại hình ảnh có tỷ lệ tín hiệu/nhiễu (SNR) cao nhất và ít xảo ảnh kim loại nhất. Nhược điểm là thời gian chụp rất lâu.\n\n- Tên gọi theo hãng: Siemens (SE) | GE (SE) | Philips (SE) | Canon (SE) | Fujifilm (SE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. T1W SE: Tiêu chuẩn vàng đánh giá giải phẫu chi tiết, phát hiện mỡ (u mỡ), máu bán cấp, hắc tố melanin và đánh giá ngấm thuốc đối quang từ.\n2. T2W SE: Đánh giá bệnh lý (phù, viêm, u, nhồi máu), dịch não tủy, sụn khớp.\n3. PDW SE: Đánh giá cấu trúc sụn, dây chằng, mảng xơ cứng (MS).\n\n- Thông số / Tips:\n+ T1W: TR ngắn (400-600ms), TE ngắn (10-20ms).\n+ T2W: TR dài (>2000ms), TE dài (>80ms).\n+ PDW: TR dài (>2000ms), TE ngắn (<30ms).",
        citations: []
    },
    { 
        id: 4, 
        en: "Diffusion Weighted Imaging (DWI)", 
        vi: "Chuỗi xung khuếch tán", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Dựa trên chuyển động Brown vô hướng của các phân tử nước trong vi cấu trúc mô. Sử dụng chuỗi xung EPI kết hợp hai gradient khuếch tán cực mạnh (b-values). Sự suy giảm tín hiệu trên DWI tỷ lệ thuận với khả năng khuếch tán của nước. Vùng tế bào dày đặc hoặc phù độc tế bào sẽ 'hạn chế khuếch tán', làm nước không di chuyển được, tạo ra tín hiệu sáng rực trên DWI và tối đen trên bản đồ ADC.\n\n- Tên gọi theo hãng: Siemens (DWI / ep2d_diff) | GE (DWI / EPI) | Philips (DWI / SSh-EPI) | Canon (DWI / FASE) | Fujifilm (DWI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Thần kinh: Cứu cánh trong đột quỵ nhồi máu não siêu cấp (<30 phút). Phân biệt áp xe não (hạn chế khuếch tán) và u nang hoại tử.\n2. Ung bướu: Tầm soát và phân loại độ ác tính của u (u càng ác tính, mật độ tế bào càng cao, ADC càng thấp) ở vú, gan, tuyến tiền liệt.\n3. Viêm nhiễm: Phát hiện các ổ tụ mủ sâu.\n\n- Thông số / Tips:\n+ Thường dùng 2 mức b-value: b=0 (như T2W) và b=800 hoặc 1000 s/mm2.\n+ Luôn đối chiếu DWI với bản đồ ADC để loại trừ hiệu ứng T2 Shine-through.",
        citations: []
    },
    { 
        id: 6, 
        en: "Gradient Echo (GRE)", 
        vi: "Chuỗi xung Gradient Echo", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Khác với SE, GRE không sử dụng xung 180° mà dùng một góc lật (Flip Angle - FA) nhỏ hơn 90° và dùng các cuộn chênh từ (gradient thu nhận) để đảo chiều từ hóa tạo ra tín hiệu dội. Điều này cho phép TR rất ngắn, tốc độ chụp cực nhanh. Tuy nhiên, vì thiếu xung 180°, GRE không bù đắp được sự mất đồng nhất từ trường, dẫn đến hiệu ứng T2* làm giảm tín hiệu trầm trọng khi gặp các chất có tính từ.\n\n- Tên gọi theo hãng: Siemens (GRE / FLASH) | GE (GRE / SPGR) | Philips (FFE / T1-FFE) | Canon (FE / T1-FE) | Fujifilm (GE / SARGE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Thần kinh: Rất nhạy phát hiện xuất huyết vi thể, vôi hóa, lắng đọng sắt (trong bệnh Parkinson).\n2. MSK: Đánh giá sụn khớp (3D GRE).\n3. Mạch máu: Là nền tảng của các xung MRA (TOF, Phase Contrast) và chụp động học tiêm thuốc ổ bụng (DCE).\n\n- Thông số / Tips:\n+ FA lớn (70-90°) tạo tương phản T1W; FA nhỏ (5-20°) tạo tương phản T2*W.\n+ Cực kỳ nhạy với xảo ảnh kim loại và ranh giới khí-mô. Không dùng khi bệnh nhân có nẹp vít.",
        citations: []
    },
    { 
        id: 7, 
        en: "Fluid Attenuated Inversion Recovery (FLAIR)", 
        vi: "Chuỗi xung xóa dịch não tủy", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Là chuỗi xung Inversion Recovery (IR) bắt đầu bằng một xung đảo ngược 180°. Bằng cách chọn một thời gian TI (Inversion Time) dài và chuẩn xác, xung sẽ triệt tiêu hoàn toàn tín hiệu của dịch tự do (dịch não tủy - CSF) khi nó đi qua điểm zero. Kết quả là CSF tối đen, trong khi các tổn thương bệnh lý (phù, viêm) có thời gian T1 ngắn hơn dịch sẽ giữ được tín hiệu rực sáng trên nền đen.\n\n- Tên gọi theo hãng: Siemens (FLAIR / TIRM / Dark Fluid) | GE (FLAIR) | Philips (FLAIR) | Canon (FastFLAIR) | Fujifilm (FIR-FLAIR).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Nhạy bén nhất để phát hiện mảng xơ cứng rải rác (MS), bệnh lý thoái hóa chất trắng.\n2. Phát hiện tổn thương phù nề nằm sát thành não thất hoặc rãnh cuộn não (nơi T2W thường bị lấp bóng do dịch não tủy sáng).\n3. Chẩn đoán viêm màng não, xuất huyết khoang dưới nhện (dịch CSF 'bẩn' sẽ không bị xóa đen hoàn toàn).\n\n- Thông số / Tips:\n+ TI dài (2000-2500ms tại 1.5T; dài hơn tại 3T).\n+ Ở hố sau, có thể bị xảo ảnh dòng chảy CSF (dịch sáng giả). Nên kết hợp kỹ thuật BLADE/PROPELLER.",
        citations: []
    },
    { 
        id: 8, 
        en: "Short Tau Inversion Recovery (STIR)", 
        vi: "Chuỗi xung xóa mỡ STIR", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Chuỗi xung IR với thời gian TI (Tau) cực ngắn, được căn chỉnh đúng vào thời điểm phục hồi T1 của mỡ (Fat) cắt ngang trục 0. Lúc này, xung kích thích 90° được phát ra, khiến mỡ không tạo ra tín hiệu (bị xóa đen). Kỹ thuật này xóa mỡ dựa vào T1 chứ không dựa vào tần số (chemical shift), do đó nó cực kỳ đồng đều và miễn nhiễm với sự không đồng nhất từ trường.\n\n- Tên gọi theo hãng: Siemens (STIR / TIRM) | GE (STIR) | Philips (STIR) | Canon (FastSTIR) | Fujifilm (FIR-STIR).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu chuẩn vàng đánh giá chấn thương phần mềm, rách cơ, dây chằng, phù tủy xương.\n2. Cứu cánh khi cần xóa mỡ ở các vùng từ trường phức tạp (cổ, vai, ngón tay, bàn chân) mà xung FatSat thất bại.\n3. Đánh giá gãy xương lún do loãng xương.\n\n- Thông số / Tips:\n+ TI ngắn (140-170ms ở 1.5T).\n+ TUYỆT ĐỐI KHÔNG dùng STIR sau khi tiêm thuốc đối quang từ (Gadolinium làm ngắn T1 của mô, khiến tổn thương ngấm thuốc bị xóa nhầm thành đen cùng với mỡ).",
        citations: []
    },
    { 
        id: 11, 
        en: "Time of Flight (TOF)", 
        vi: "Chuỗi xung mạch máu thời gian bay", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Dựa trên hiện tượng nâng cấp tín hiệu do dòng chảy (Flow-related enhancement). Các mô tĩnh trong lát cắt liên tục chịu xung RF nên bị bão hòa (tối đen). Trong khi đó, dòng máu mới chưa bị bão hòa chảy vào lát cắt sẽ mang theo từ hóa đầy đủ, tạo ra tín hiệu rực sáng. Kỹ thuật hoàn toàn không cần tiêm thuốc cản từ.\n\n- Tên gọi theo hãng: Siemens (TOF / FLASH 3D) | GE (TOF / SPGR 3D) | Philips (TOF / TFE 3D) | Canon (TOF / FE 3D) | Fujifilm (TOF).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đánh giá chi tiết hệ mạch máu đa giác Willis ở não, phát hiện phình động mạch (Aneurysm).\n2. TOF 2D nhạy với dòng chảy chậm, dùng để chụp hệ tĩnh mạch (MRV) não, cổ.\n3. TOF 3D cho độ phân giải không gian cao, lý tưởng cho động mạch nội sọ.\n\n- Thông số / Tips:\n+ Luôn đặt hướng cắt vuông góc với trục dòng chảy.\n+ Sử dụng Saturation Band (dải bão hòa) để chặn dòng tĩnh mạch nếu chỉ muốn xem động mạch, và ngược lại.\n+ Túi phình lớn có thể bị mất tín hiệu giả do dòng chảy xoáy (spin dephasing).",
        citations: []
    },
    { 
        id: 15, 
        en: "Susceptibility Weighted Imaging (SWI)", 
        vi: "Chuỗi xung nhạy từ", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Là bản nâng cấp toàn diện của T2* GRE. SWI kết hợp cả hình ảnh biên độ (magnitude) và thông tin pha (phase) từ tín hiệu cộng hưởng từ. Hình ảnh pha chứa thông tin cực kỳ nhạy về sự sai lệch từ trường cục bộ. Máy tính sẽ nhân chéo hai bộ dữ liệu này, tạo ra một hình ảnh khuyếch đại tối đa các vật chất có từ tính (máu khử oxy, Hemosiderin, Canxi).\n\n- Tên gọi theo hãng: Siemens (SWI) | GE (SWAN) | Philips (SWIp / VenBOLD) | Canon (FSBB) | Fujifilm (BSI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Siêu nhạy trong phát hiện chấn thương sợi trục lan tỏa (DAI) và vi xuất huyết não.\n2. Phân biệt chính xác giữa xuất huyết (máu) và vôi hóa (dựa trên bản đồ Phase Map: máu và canxi lệch pha ngược chiều nhau).\n3. Đánh giá tĩnh mạch kích thước siêu nhỏ, dị dạng mạch máu hang (Cavernoma).\n\n- Thông số / Tips:\n+ Rất nhạy với chuyển động nhỏ nhất của bệnh nhân. Tạo ảnh MinIP (Minimum Intensity Projection) để các tĩnh mạch nhỏ hiện rõ như các sợi chỉ đen.",
        citations: []
    },
    { 
        id: 16, 
        en: "Turbo Spin Echo (TSE) / Fast Spin Echo (FSE)", 
        vi: "Chuỗi xung Spin Echo nhanh", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Khắc phục nhược điểm cực chậm của Spin Echo truyền thống. Trong một khoảng thời gian TR, thay vì chỉ phát 1 xung 180° để lấy 1 đường k-space, TSE phát một chuỗi liên tiếp nhiều xung 180° (Echo Train). Mỗi xung 180° sẽ lấy một đường k-space riêng biệt. Kỹ thuật này giảm thời gian chụp xuống hàng chục lần.\n\n- Tên gọi theo hãng: Siemens (TSE) | GE (FSE) | Philips (TSE) | Canon (FastSE) | Fujifilm (FastSE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Trở thành chuỗi xung xương sống (workhorse) thay thế hoàn toàn SE truyền thống trong khảo sát T2W toàn cơ thể (não, cột sống, khớp, bụng).\n2. Giảm đáng kể xảo ảnh kim loại so với GRE.\n\n- Thông số / Tips:\n+ Chỉ số quan trọng nhất là Echo Train Length (ETL) hoặc Turbo Factor. ETL càng cao, chụp càng nhanh, nhưng ảnh T2W sẽ bị mờ (blurring) và mỡ sẽ sáng hơn bình thường (J-coupling effect).",
        citations: []
    },
    { 
        id: 28, 
        en: "Spectral Presaturation with Inversion Recovery (SPIR)", 
        vi: "Xóa mỡ SPIR", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phương pháp lai tạo sức mạnh giữa hóa học (Chemical Shift) và đảo từ (Inversion Recovery). Phát một xung đảo ngược 180° CÓ CHỌN LỌC TẦN SỐ chỉ đánh vào tần số của mỡ. Khi từ hóa của mỡ đang phục hồi và đi qua điểm 0 (null), chuỗi xung chính sẽ kích hoạt. \n\n- Tên gọi theo hãng: Siemens (FatSat / SPIR) | GE (ChemSat) | Philips (SPIR) | Canon (CHESS) | Fujifilm (FatSat).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Xóa mỡ tốt ở các khu vực giải phẫu tương đối bằng phẳng.\n2. CÓ THỂ sử dụng sau khi tiêm thuốc đối quang từ (ưu điểm vượt trội so với STIR), vì xung 180° chỉ chọn lọc tần số mỡ, không ảnh hưởng đến mô ngấm Gadolinium.\n\n- Thông số / Tips:\n+ Phụ thuộc lớn vào độ đồng nhất B0. Nên thực hiện Shimming cẩn thận trước khi chạy.",
        citations: []
    },
    { 
        id: 29, 
        en: "Spectral Adiabatic Inversion Recovery (SPAIR)", 
        vi: "Xóa mỡ SPAIR", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Bản nâng cấp cao cấp của SPIR. Sử dụng xung đảo ngược đoạn nhiệt (Adiabatic Inversion Pulse) có độ rộng băng tần đặc biệt. Xung này không chỉ chịu đựng được sự bất đồng nhất của từ trường tĩnh (B0) mà còn kháng lại sự phân bổ không đều của sóng RF (B1). Nhờ đó, hiệu quả xóa mỡ cực kỳ mạnh mẽ và đồng nhất.\n\n- Tên gọi theo hãng: Siemens (SPAIR) | GE (ASPIR) | Philips (SPAIR) | Canon (SPAIR) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Lựa chọn số 1 cho xóa mỡ ở bụng, chậu, vú và cơ xương khớp.\n2. Đánh giá ngấm thuốc (T1 SPAIR Post-contrast) rõ nét mà không sợ mảng đen xảo ảnh ở viền cơ thể.\n\n- Thông số / Tips:\n+ SNR thấp hơn một chút so với FatSat thuần túy do có thêm thời gian chờ (TI), nhưng độ đồng đều xóa mỡ bù đắp lại hoàn toàn.",
        citations: []
    },
    { 
        id: 30, 
        en: "Dixon Method", 
        vi: "Kỹ thuật xóa mỡ Dixon", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Thu thập dữ liệu tại các thời điểm TE (Echo Time) khác nhau: lúc proton mỡ và nước xoay cùng hướng (In-phase) và lúc chúng xoay ngược hướng nhau (Out-of-phase). Bằng các phép tính cộng/trừ toán học trên ma trận pixel, máy phân tách tín hiệu tạo ra 4 hình ảnh: Cùng pha, Đối pha, Chỉ Nước, Chỉ Mỡ.\n\n- Tên gọi theo hãng: Siemens (Dixon / VIBE Dixon) | GE (IDEAL / LAVA-Flex) | Philips (mDixon) | Canon (WFOP) | Fujifilm (FatSep).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu chuẩn vàng để phát hiện mỡ vi thể nội bào (adenoma tuyến thượng thận, gan nhiễm mỡ) - dựa trên sự sụt giảm tín hiệu ở ảnh Out-of-phase.\n2. Tạo ảnh Water-only để xóa mỡ hoàn hảo ở vùng cổ, cột sống độ cong lớn.\n3. Định lượng nồng độ mỡ (Dixon Quant).\n\n- Thông số / Tips:\n+ Thời gian chụp dài hơn do thu nhiều TE. Rất đáng tin cậy kể cả ở máy 1.5T và 3T.",
        citations: []
    },
    { 
        id: 31, 
        en: "Balanced Steady-State Free Precession (bSSFP / TrueFISP)", 
        vi: "Chuỗi xung bSSFP", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Chuỗi xung Gradient Echo liên tục duy trì từ hóa ngang và dọc ở trạng thái ổn định (steady-state). Nó tái sử dụng các từ hóa ngang còn dư sau mỗi TR thay vì triệt tiêu chúng. Độ tương phản hoàn toàn phụ thuộc vào tỷ lệ T2/T1 của mô. Các mô có T2 và T1 tương đương nhau (như nước, dịch não tủy, máu) sẽ phát sáng rực rỡ.\n\n- Tên gọi theo hãng: Siemens (TrueFISP) | GE (FIESTA / COSMIC) | Philips (b-FFE) | Canon (True SSFP) | Fujifilm (BASG).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tim mạch: Chụp cine đánh giá co bóp thành tim, hở van tim (máu sáng rực tương phản với cơ tim đen).\n2. Khảo sát cấu trúc cực nhỏ ngập trong dịch: Dây thần kinh sọ trong bể não, sụn chêm, ốc tai.\n3. Thai nhi: Đánh giá dị tật thai siêu nhanh.\n\n- Thông số / Tips:\n+ TR và TE phải cực ngắn. Rất dễ bị xảo ảnh sọc đen (Banding artifact) nếu từ trường không hoàn hảo. Shimming là bắt buộc.",
        citations: []
    },
    { 
        id: 32, 
        en: "Half-Fourier Single-Shot TSE (HASTE)", 
        vi: "Chuỗi xung TSE đơn phát", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Áp dụng định lý toán học Half-Fourier (sự đối xứng của k-space). Máy chỉ thu thập thực tế khoảng 50-60% các dòng k-space bằng một chuỗi Echo cực dài sau một xung 90° duy nhất. 40% dữ liệu còn lại được máy tính giả lập. Tốc độ thu nhận 1 lát cắt dưới 1 giây.\n\n- Tên gọi theo hãng: Siemens (HASTE) | GE (SS-FSE) | Philips (SSh-TSE) | Canon (FASE) | Fujifilm (SS-FSE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Công cụ rà soát (Scout) hoặc chụp T2W ổ bụng, khung chậu cho bệnh nhân không thể nín thở.\n2. Ứng dụng cốt lõi trong chụp cây đường mật (MRCP), đường niệu (MRU) với kỹ thuật lát cắt cực dày (Thick Slab).\n3. Chụp ruột non (MR Enterography).\n\n- Thông số / Tips:\n+ Tốc độ cao đánh đổi bằng độ phân giải thấp và ảnh bị mờ. Dịch rất sáng nhưng mô đặc thiếu chi tiết.",
        citations: []
    },
    { 
        id: 33, 
        en: "Magnetization Prepared Rapid Gradient Echo (MPRAGE)", 
        vi: "Chuỗi xung 3D T1 MPRAGE", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Bắt đầu bằng một xung chuẩn bị đảo ngược 180° (Magnetization Prepared) để kéo giãn tối đa sự khác biệt T1 giữa chất trắng và chất xám. Sau đó, máy sử dụng chuỗi Gradient Echo đọc liên tục dữ liệu 3D siêu nhanh để tái tạo thành các voxel đẳng hướng (isotropic).\n\n- Tên gọi theo hãng: Siemens (MPRAGE) | GE (BRAVO / 3D SPGR) | Philips (3D TFE) | Canon (3D FFE-IR) | Fujifilm (3D GEIR).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu chuẩn vàng quốc tế để chụp cấu trúc giải phẫu sọ não 3D độ phân giải cao.\n2. Dữ liệu bắt buộc cho hệ thống định vị phẫu thuật thần kinh (Neuronavigation).\n3. Phân tích AI, đo thể tích teo hồi hải mã trong bệnh Alzheimer.\n\n- Thông số / Tips:\n+ Rất nhạy với ngấm thuốc Gadolinium, thường dùng để quét toàn não bộ 3D sau tiêm.",
        citations: []
    },
    { 
        id: 34, 
        en: "Volumetric Interpolated Breath-hold Examination (VIBE)", 
        vi: "Chuỗi xung 3D T1 VIBE", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Là chuỗi xung 3D GRE T1W được thiết kế đặc biệt kết hợp với nội suy dữ liệu k-space và tích hợp xóa mỡ (FatSat hoặc Dixon). Cho phép chụp một khối 3D toàn bộ ổ bụng với lát cắt mỏng (<3mm) chỉ trong một khoảng thời gian nín thở ngắn (15-20 giây).\n\n- Tên gọi theo hãng: Siemens (VIBE) | GE (LAVA) | Philips (THRIVE) | Canon (3D Quick) | Fujifilm (TIGRE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chụp động học đa pha (Dynamic) bụng, chậu: Đánh giá ngấm thuốc gan (thì động mạch, tĩnh mạch cửa, thì muộn), tụy, thận.\n2. Chụp động học tuyến vú (DCE Breast).\n3. Tầm soát ung thư tiền liệt tuyến (PI-RADS).\n\n- Thông số / Tips:\n+ Căn chuẩn thời gian nín thở của bệnh nhân là yếu tố quyết định. Kết hợp nội suy Dixon (VIBE-Dixon / LAVA-Flex) sẽ cho chất lượng đỉnh cao.",
        citations: []
    },
    { 
        id: 35, 
        en: "Constructive Interference in Steady State (CISS / FIESTA-C)", 
        vi: "Chuỗi xung CISS 3D", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Là sự kết hợp của 2 lần quét bSSFP với chu kỳ RF lệch nhau để bù trừ triệt để xảo ảnh sọc đen (banding artifact). Kết quả là một chuỗi xung 3D có SNR cực khủng, kháng nhiễu tốt, cho thấy rõ rệt độ tương phản giữa dịch (sáng chói) và các mô thần kinh siêu nhỏ (đen).\n\n- Tên gọi theo hãng: Siemens (CISS) | GE (FIESTA-C) | Philips (3D b-FFE) | Canon (3D True SSFP) | Fujifilm (PBSG).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đánh giá xung đột mạch máu-thần kinh trong đau dây thần kinh V, co giật nửa mặt (dây VII).\n2. Khảo sát giải phẫu ốc tai, các ống bán khuyên.\n3. Rò dịch não tủy, hẹp cống não Sylvius.\n\n- Thông số / Tips:\n+ Yêu cầu bệnh nhân nằm bất động tuyệt đối (thời gian quét 4-6 phút). Có thể tái tạo đa mặt phẳng tự do (MPR).",
        citations: []
    },
    { 
        id: 36, 
        en: "Arterial Spin Labeling (ASL)", 
        vi: "Tưới máu không tiêm thuốc ASL", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Kỹ thuật sử dụng các xung RF để 'dán nhãn' từ tính (đảo ngược các spin) của dòng máu động mạch đang chảy lên não ở vị trí cổ. Đợi một khoảng thời gian (PLD) cho dòng máu này tưới vào mô não, sau đó chụp hình. Máy sẽ trừ tín hiệu này với một hình chụp khi không dán nhãn, chênh lệch tín hiệu chính là lượng máu tưới máu (CBF).\n\n- Tên gọi theo hãng: Siemens (ASL / pCASL) | GE (3D ASL) | Philips (ASL) | Canon (ASL) | Fujifilm (ASL).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Vẽ bản đồ tưới máu não (Perfusion) cho trẻ em, phụ nữ có thai, người suy thận không thể tiêm thuốc.\n2. Phân biệt u cấp độ thấp và cao, đánh giá khối u tái phát so với hoại tử sau tia xạ.\n3. Đánh giá vùng tranh tối tranh sáng trong đột quỵ bán cấp.\n\n- Thông số / Tips:\n+ Tín hiệu nội sinh rất yếu (SNR thấp), cần tích lũy nhiều lần đo. Tham số PLD (Post Labeling Delay) phải được tinh chỉnh theo độ tuổi bệnh nhân.",
        citations: []
    },
    { 
        id: 37, 
        en: "Diffusion Tensor Imaging (DTI)", 
        vi: "Hình ảnh sức căng khuếch tán", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Mở rộng từ DWI cơ bản. Nước trong các bó sợi trục thần kinh bị giới hạn màng tế bào nên chỉ có thể di chuyển theo chiều dọc của bó sợi (khuếch tán bất đẳng hướng - Anisotropy). DTI đo lường sự khuếch tán theo tối thiểu 6 hướng (thường là 20, 30 hoặc 64 hướng) để tính toán ra vector không gian 3 chiều của từng bó sợi thần kinh.\n\n- Tên gọi theo hãng: Siemens (DTI / Tractography) | GE (DTI / FiberTrak) | Philips (DTI / Fiber Trak) | Canon (DTI) | Fujifilm (DTI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Vẽ bản đồ bó sợi thần kinh (Tractography) để bác sĩ ngoại khoa lên kế hoạch mổ tránh làm liệt bệnh nhân.\n2. Chẩn đoán chấn thương sọ não vi thể (DAI) khi MRI thường quy bình thường.\n3. Đánh giá sự xâm lấn, chèn ép hay đẩy lùi bó sợi của khối u não.\n\n- Thông số / Tips:\n+ Thời gian chụp rất lâu. Bản đồ FA (Fractional Anisotropy) có màu sắc mã hóa (Đỏ: Trái-Phải; Xanh lá: Trước-Sau; Xanh lam: Trên-Dưới).",
        citations: []
    },
    { 
        id: 38, 
        en: "Magnetic Resonance Spectroscopy (MRS)", 
        vi: "Cộng hưởng từ phổ", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Kỹ thuật phân tích tín hiệu không dựa trên hình ảnh mà dựa trên 'tần số hóa học' (Chemical Shift). Dưới cùng một từ trường, các chất chuyển hóa (Choline, Creatine, NAA, Lactate) cộng hưởng ở các tần số hơi khác nhau (ppm). Máy tính chuyển đổi dữ liệu thô thành một phổ đồ thị các đỉnh sóng để định lượng nồng độ sinh hóa mô.\n\n- Tên gọi theo hãng: Siemens (MRS) | GE (PROBE) | Philips (MRS) | Canon (MRS) | Fujifilm (MRS).", 
        parameters: "- Ứng dụng lâm sàng:\n1. U não: Đỉnh Choline tăng vọt, NAA giảm sâu cảnh báo u ác tính.\n2. Áp xe não: Đỉnh Lipid/Lactate, Amino Acid nổi bật.\n3. Bệnh não gan, bệnh chuyển hóa bẩm sinh ở trẻ em.\n\n- Thông số / Tips:\n+ Single Voxel (độ chính xác cao, vùng nhỏ) hoặc Multi Voxel (lập bản đồ chuyển hóa). Phải xóa nước (Water suppression) và Shimming cực kỳ cẩn thận.",
        citations: []
    },
    { 
        id: 39, 
        en: "Phase Contrast Angiography (PC-MRA)", 
        vi: "Chụp mạch máu đối pha", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Chụp mạch không tiêm thuốc dựa trên sự dịch pha (phase shift) của các proton di chuyển qua một gradient từ trường dọc theo chiều dòng chảy. Các mô tĩnh không dịch pha sẽ bị xóa. Cần cài đặt một thông số vận tốc mã hóa (VENC - Velocity Encoding) sát với vận tốc thực tế của dòng máu.\n\n- Tên gọi theo hãng: Siemens (PC MRA) | GE (PC MRA) | Philips (PCA) | Canon (PS MRA) | Fujifilm (PC MRA).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đánh giá động mạch và tĩnh mạch sọ não mà không bị lấp bóng (shine-through) bởi máu tụ T1 ngắn như TOF.\n2. Đo lường định lượng: Vận tốc dịch não tủy qua cống Sylvius, đo phân số tống máu, hở van tim.\n\n- Thông số / Tips:\n+ Đặt VENC = 10-20 cm/s cho tĩnh mạch/CSF; VENC = 60-100 cm/s cho động mạch nội sọ. Đặt sai VENC sẽ gây xảo ảnh cuốn (Aliasing).",
        citations: []
    },
    { 
        id: 40, 
        en: "Contrast-Enhanced Magnetic Resonance Angiography (CE-MRA)", 
        vi: "Chụp mạch máu có tiêm thuốc", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Tiêm tĩnh mạch một lượng bolus thuốc đối quang từ Gadolinium (chất làm rút ngắn mạnh thời gian T1 của máu). Ngay khi thuốc tới hệ động mạch đích, hệ thống quét một chuỗi xung 3D T1 GRE siêu tốc để chớp lấy hình ảnh lồng mạch sáng rực rỡ.\n\n- Tên gọi theo hãng: Siemens (ceMRA / fl3d) | GE (TRICKS / LAVA) | Philips (ceMRA) | Canon (ceMRA) | Fujifilm (ceMRA).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Kỹ thuật xâm lấn tối thiểu chẩn đoán phình tách động mạch chủ, hẹp động mạch cảnh, động mạch thận, mạch máu chi dưới.\n2. Vượt trội hơn TOF/PC vì không bị mất tín hiệu ở các vùng dòng chảy cuộn xoáy hoặc hẹp khít.\n\n- Thông số / Tips:\n+ Thành bại nằm ở nghệ thuật Canh thuốc (Bolus Tracking/Test Bolus). Chụp đa pha liên tục (TWIST/TRICKS) giúp loại bỏ rủi ro canh trượt thuốc.",
        citations: []
    },
    { 
        id: 41, 
        en: "Magnetic Resonance Cholangiopancreatography (MRCP)", 
        vi: "Chụp mật tụy (MRCP)", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Triệt để khai thác tính chất T2 cực dài của các dịch cơ thể tĩnh. KTV cài đặt chuỗi xung 3D TSE có thời gian Echo (TE) cực khủng (lên tới 600-800ms). Tại TE này, tín hiệu của cơ, mỡ, gan, tạng đặc suy tàn về số 0 (đen kịt), trong khi ống mật chứa đầy dịch vẫn phát sáng lấp lánh rực rỡ.\n\n- Tên gọi theo hãng: Siemens (HASTE / 3D SPACE) | GE (SS-FSE / 3D MRCP) | Philips (SSh-TSE / 3D VISTA) | Canon (FASE / 3D FASE) | Fujifilm (SS-FSE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu chuẩn vàng phát hiện sỏi ống mật chủ, sỏi túi mật, viêm chít hẹp cây đường mật.\n2. Đánh giá nang giả tụy, rách ống tụy.\n3. Dựng hình 3D (MIP) trực quan thay thế phương pháp ERCP nội soi có nguy cơ biến chứng.\n\n- Thông số / Tips:\n+ Bệnh nhân bắt buộc nhịn ăn 6-8 tiếng để túi mật căng phồng. Cho uống nước dứa (ép) giúp xóa đen dịch T2 dạ dày tá tràng rải rác.",
        citations: []
    },
    { 
        id: 42, 
        en: "Functional MRI (fMRI)", 
        vi: "Cộng hưởng từ chức năng", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Dựa trên hiệu ứng BOLD (Blood Oxygenation Level Dependent). Khi một vùng não hoạt động (ví dụ: tay cử động), nó tiêu thụ nhiều oxy hơn, kích hoạt dòng máu dồi dào oxy (có tính nghịch từ) bù đắp vượt mức. Sự thay đổi tỷ lệ Oxy-Hb/Deoxy-Hb làm thay đổi độ đồng nhất từ trường cục bộ, tạo ra sự chênh lệch tín hiệu siêu nhỏ trên xung T2* EPI.\n\n- Tên gọi theo hãng: Siemens (BOLD fMRI) | GE (BrainWave) | Philips (fMRI) | Canon (fMRI) | Fujifilm (fMRI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Lập bản đồ các vùng chức năng sống còn (ngôn ngữ, vận động, thị giác) trước ca phẫu thuật cắt bỏ u não hoặc ổ động kinh để bảo tồn.\n2. Phân tích trạng thái nghỉ (Resting-state) trong nghiên cứu Alzheimer, tự kỷ.\n\n- Thông số / Tips:\n+ Yêu cầu Paradigm (bài tập) chuẩn xác cho bệnh nhân (nắm tay, nhẩm từ). Thu thập hàng trăm volumes EPI nên rất dễ bị hỏng do bệnh nhân nhúc nhích đầu.",
        citations: []
    },
    { 
        id: 72, 
        en: "Dynamic Contrast Enhancement (DCE)", 
        vi: "Cộng hưởng từ động học tiêm thuốc", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Chụp lặp đi lặp lại một vùng giải phẫu bằng chuỗi xung T1W 3D cực nhanh trước và nhiều pha ngay sau khi bơm Gadolinium. Sự gia tăng tín hiệu được phần mềm phân tích tạo thành đường cong cường độ-thời gian (Time-Intensity Curve - TIC), phản ánh tính thấm vi mạch và thể tích ngoại bào của khối u.\n\n- Tên gọi theo hãng: Siemens (DCE / TWIST) | GE (DCE / TRICKS) | Philips (DCE / 4D-TRAK) | Canon (DCE) | Fujifilm (DCE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đánh giá ung thư vú (đường cong loại 3 Wash-out là dấu hiệu ác tính điển hình).\n2. Chẩn đoán ung thư tuyến tiền liệt (PI-RADS) và các u phần mềm cơ xương khớp.\n3. Đánh giá đáp ứng điều trị thuốc kháng sinh mạch.\n\n- Thông số / Tips:\n+ Yêu cầu độ phân giải thời gian tối ưu (dưới 10 giây/pha). Kỹ thuật đo định lượng cần tính toán các tham số nâng cao Ktrans, Kep, Ve.",
        citations: []
    },
    { 
        id: 73, 
        en: "Dynamic Susceptibility Contrast (DSC)", 
        vi: "Tưới máu nhạy từ", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Quét liên tục não bộ bằng xung T2* EPI (hoặc T2 EPI) với tốc độ cao (1-2s/volume). Khi bolus Gadolinium đậm đặc đi qua vi mao mạch não, tính thuận từ mạnh của nó sẽ phá vỡ từ trường cục bộ, làm tín hiệu T2* sụt giảm đột ngột (đen lại). Sự rớt tín hiệu này được mô hình hóa để tính ra lượng máu tưới.\n\n- Tên gọi theo hãng: Siemens (DSC Perfusion) | GE (BrainStat) | Philips (DSC Perfusion) | Canon (DSC) | Fujifilm (DSC).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đột quỵ cấp: Dùng kết hợp với DWI để xác định tỷ lệ Mismatch (vùng não thiếu máu đang hấp hối nhưng vẫn cứu được - Penumbra).\n2. U não: Đánh giá CBV (thể tích máu não) tăng sinh trong u ác tính cấp độ cao (Glioblastoma).\n\n- Thông số / Tips:\n+ Tính toán các thông số: CBV, CBF, MTT (thời gian di chuyển trung bình), TTP. Cần tiêm thuốc bằng bơm tiêm điện với tốc độ cực gắt (4-5 mL/s).",
        citations: []
    },
    { 
        id: 81, 
        en: "T1rho (T1ρ)", 
        vi: "T1 trong hệ tọa độ quay", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Sau xung 90°, phát liên tục một xung RF khóa góc lật thấp (spin-lock) song song với từ hóa ngang. Spin từ từ thư duỗi trong hệ tọa độ quay theo thời gian T1rho. Phương pháp này cực kỳ nhạy với sự thay đổi của các đại phân tử như proteoglycan.\n\n- Tên gọi theo hãng: Siemens (T1rho) | GE (T1rho) | Philips (T1rho) | Canon (T1rho) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Công cụ nghiên cứu chuyên sâu về thoái hóa sụn khớp. Có khả năng phát hiện tổn thương sụn siêu sớm trước khi sụn bị bào mòn độ dày trên hình thái học T2W/PD.\n2. Phân tích đĩa đệm thoái hóa.\n\n- Thông số / Tips:\n+ Kỹ thuật cao cấp, sinh ra mức nhiệt SAR khá lớn, cần kiểm soát an toàn trên máy 3T.",
        citations: []
    },
    { 
        id: 82, 
        en: "T2 Mapping", 
        vi: "Bản đồ T2", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Quét liên tiếp cùng một lát cắt bằng một chuỗi xung Multi-Echo Spin Echo với hàng loạt thời gian TE tăng dần. Máy tính sẽ dựng đường cong phân rã tín hiệu tại từng pixel để vẽ ra bản đồ định lượng (Color Map), trong đó mỗi pixel thể hiện chính xác thời gian T2 đo bằng milli-giây.\n\n- Tên gọi theo hãng: Siemens (T2 Map / MyoMaps) | GE (CartiGram / T2 Map) | Philips (T2 Mapping) | Canon (T2 Map) | Fujifilm (T2 Map).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Sụn khớp: Đánh giá tổn thương mạng lưới Collagen và hàm lượng nước tăng do thoái hóa.\n2. Cơ tim (Myocardial T2 Mapping): Chẩn đoán viêm cơ tim, phù nề tế bào (T2 tăng sinh).\n\n- Thông số / Tips:\n+ Đọc kết quả bằng màu sắc (ví dụ: đỏ = T2 cao, xanh = T2 thấp) kết hợp định lượng số. Bệnh nhân cần nằm bất động lâu.",
        citations: []
    },
    { 
        id: 83, 
        en: "Quantitative Susceptibility Mapping (QSM)", 
        vi: "Bản đồ nhạy từ định lượng", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Một phép màu xử lý tín hiệu tiên tiến từ dữ liệu Pha (Phase) của xung 3D GRE nhiều Echo. QSM áp dụng thuật toán giải bài toán nghịch đảo Dipole để định lượng trực tiếp nồng độ vật lý (chiều dương: sắt, xuất huyết; chiều âm: canxi) tại từng điểm ảnh.\n\n- Tên gọi theo hãng: Siemens (QSM) | GE (QSM) | Philips (QSM) | Canon (QSM) | Fujifilm (QSM).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Thần kinh: Tính toán chính xác nồng độ Sắt lắng đọng trong các nhân xám sâu (dấu ấn của bệnh Alzheimer, Parkinson, Huntington).\n2. Phân biệt rõ ràng 100% giữa vôi hóa và xuất huyết vi thể não.\n\n- Thông số / Tips:\n+ Khắc phục được nhược điểm bóng đen loang lổ không định lượng được của xung SWI truyền thống.",
        citations: []
    },
    { 
        id: 84, 
        en: "Ultrashort Echo Time (UTE)", 
        vi: "Xung TE siêu ngắn", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Các cấu trúc rất cứng (như xương, gân) có T2 cực kỳ ngắn (dưới 1ms), tín hiệu tiêu biến trước cả khi máy MRI kịp mở gradient đọc (TE thông thường). UTE sử dụng quỹ đạo k-space dạng tia (Radial) bắt đầu đọc tín hiệu ngay giữa xung RF kích thích, ép TE xuống mức micro-giây (0.05-0.1ms) để chộp lấy tín hiệu sống của mô cứng.\n\n- Tên gọi theo hãng: Siemens (UTE / PETRA) | GE (UTE) | Philips (UTE) | Canon (UTE) | Fujifilm (UTE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Nhìn thấu cấu trúc vi thể của màng xương vỏ cứng (cortical bone), sụn chêm, gân Achilles, dây chằng chéo.\n2. Đánh giá nhu mô phổi (vốn chứa đầy khí, mất tín hiệu rất nhanh).\n\n- Thông số / Tips:\n+ Đòi hỏi phần cứng gradient chuyển mạch cực gắt và công nghệ tái tạo hình ảnh cao cấp.",
        citations: []
    },
    { 
        id: 85, 
        en: "Zero Echo Time (ZTE)", 
        vi: "Xung TE bằng 0", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Cực hạn của UTE. Máy MRI bật sẵn Gradient đọc (Readout) tĩnh trước cả khi phát xung RF kích thích. Tín hiệu được thu thập lập tức sau xung RF, TE về mặt lý thuyết bằng 0. Hoạt động chuyển mạch êm ái triệt tiêu tiếng gõ cơ học.\n\n- Tên gọi theo hãng: Siemens (PETRA / ZTE) | GE (ZTE / oZTE) | Philips (ZTE) | Canon (ZTE) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Bone MRI (CT-like MRI): Biến MRI sọ não thành hình ảnh tái tạo xương sắc nét y hệt chụp CT-Scanner, giúp lập kế hoạch mổ gãy xương sọ, dò hộp sọ mà không ăn tia X.\n2. Chụp MRI im lặng (Silent Scan) cho trẻ em và trẻ sơ sinh.\n\n- Thông số / Tips:\n+ Contrast mô mềm rất kém do thu thập dữ liệu trung tâm bị rỗng, được máy tính bù đắp bằng nội suy.",
        citations: []
    },
    { 
        id: 86, 
        en: "Double Inversion Recovery (DIR)", 
        vi: "Chuỗi xung DIR", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phát liên tiếp hai xung đảo ngược 180° và ấn định hai khoảng thời gian TI khác nhau được tính toán kỹ. Tại thời điểm đọc, tín hiệu của cả Dịch não tủy (CSF) và Chất trắng (White Matter) cùng rơi về mức 0 và bị xóa đen. Cấu trúc duy nhất hiển thị trên màn hình là Chất xám vỏ não và các tổn thương bệnh lý.\n\n- Tên gọi theo hãng: Siemens (DIR) | GE (DIR) | Philips (DIR) | Canon (DIR) | Fujifilm (DIR).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Nâng cao giới hạn phát hiện mảng xơ cứng rải rác (MS) nằm lẩn khuất ngay trong dải vỏ não hoặc sát vỏ não (vùng mà FLAIR thường bỏ sót).\n2. Chẩn đoán các loạn sản vỏ não khu trú (FCD) trong bệnh lý động kinh khó trị.\n\n- Thông số / Tips:\n+ Tỷ lệ SNR nội tại khá thấp, thường được thiết lập dạng 3D để tối ưu hóa hình ảnh. Bệnh nhân khó chịu dễ rung lag.",
        citations: []
    },
    { 
        id: 87, 
        en: "SPACE / CUBE / VISTA", 
        vi: "Chuỗi xung TSE 3D tối ưu góc lật", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phiên bản T2W 3D hoàn hảo nhất. Sử dụng chuỗi Echo Train siêu dài kết hợp nghệ thuật điều biến góc lật (Variable Flip Angle) giảm dần. Kỹ thuật này duy trì tín hiệu echo ổn định, ngăn chặn sự mờ nhòe (blurring) và kiểm soát nhiệt (SAR) ở máy 3T.\n\n- Tên gọi theo hãng: Siemens (SPACE) | GE (CUBE) | Philips (VISTA) | Canon (FASE3D) | Fujifilm (isoFSE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chụp cắt lớp MRI đẳng hướng (Isotropic) T2W toàn sọ não, có thể MPR ra mọi mặt phẳng mà không vỡ hạt.\n2. Khảo sát đám rối thần kinh cánh tay/thắt lưng cùng, dây thần kinh mặt siêu nhỏ.\n3. Dựng hình 3D khớp gối rách sụn chêm đa mặt phẳng thay cho bộ 3 xung 2D.\n\n- Thông số / Tips:\n+ Thời gian chụp dài (4-7 phút). Luôn chọn voxel 1x1x1 mm để đạt độ phân giải chuẩn mực.",
        citations: []
    },
    { 
        id: 88, 
        en: "PROPELLER / BLADE / MultiVane", 
        vi: "Thu thập dữ liệu dạng cánh quạt", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phương pháp thu thập không gian K (k-space) thông minh. Thay vì quét song song từng đường tịnh tiến, hệ thống thu thập các dải dữ liệu chồng chéo lên nhau đi qua tâm k-space, liên tục xoay tròn giống như cánh quạt. Phần lõi k-space được quét đi quét lại giúp thuật toán tự động nhận diện và bù trừ sự dịch chuyển/rung lắc của bệnh nhân trong thời gian thực.\n\n- Tên gọi theo hãng: Siemens (BLADE) | GE (PROPELLER) | Philips (MultiVane) | Canon (JET) | Fujifilm (RADAR).", 
        parameters: "- Ứng dụng lâm sàng:\n1. T2W/FLAIR Sọ não: Phép màu cho bệnh nhân cấp cứu, nhi khoa, sa sút trí tuệ, rung giật Parkinson.\n2. T2W Khung chậu: Chống xảo ảnh nhu động ruột, hô hấp.\n3. Khử hoàn toàn xảo ảnh đập của mạch máu và CSF ở tủy sống cổ mà không cần bật Flow Compensation.\n\n- Thông số / Tips:\n+ Tăng thời gian chụp khoảng 20-30% nhưng tỷ lệ thành công (không phải chụp lại) gần như 100%.",
        citations: []
    },

    // --- 67 THUẬT NGỮ CHUỖI XUNG CHUYÊN SÂU/BỔ SUNG ---
    { 
        id: 1001, 
        en: "Echo Planar Imaging (EPI)", 
        vi: "Hình ảnh mặt phẳng dội", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Một tuyệt tác phần cứng của MRI. EPI lật tới lui Gradient mã hóa tần số với tốc độ ánh sáng, thu thập ngoằn ngoèo toàn bộ không gian k-space của một lát cắt chỉ sau MỘT xung kích thích RF duy nhất. Lát cắt hoàn thành trong vài chục milli-giây. Nền tảng cốt lõi định hình nền tảng MRI khuếch tán và chức năng.\n\n- Tên gọi theo hãng: Siemens (EPI) | GE (EPI) | Philips (EPI) | Canon (EPI) | Fujifilm (EPI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chuỗi xung gốc rễ cho chụp Diffusion (DWI), DTI, Perfusion (DSC), và fMRI.\n2. Cho phép đông cứng mọi chuyển động sinh lý nhanh nhất (nhịp tim, hô hấp, dịch não tủy).\n\n- Thông số / Tips:\n+ Yêu cầu Gradient Slew rate cực cao. Nhược điểm chí tử là độ méo hình học (Distortion) tồi tệ tại ranh giới mô-khí và xảo ảnh Chemical shift khổng lồ. Cần FatSat triệt để.",
        citations: []
    },
    { 
        id: 1002, 
        en: "Spin Echo EPI (SE-EPI)", 
        vi: "Chuỗi xung EPI dội spin", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Kẹp một xung tái hội tụ 180° chuẩn Spin Echo vào trước cụm chuyển mạch đọc EPI. Điều này đóng vai trò như một bộ phuộc nhún giảm xóc từ tính, bù trừ bớt sự mất đồng pha do từ trường B0 lồi lõm trước khi EPI thu dữ liệu.\n\n- Tên gọi theo hãng: Siemens (SE-EPI) | GE (SE-EPI) | Philips (SE-EPI) | Canon (SE-EPI) | Fujifilm (SE-EPI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Sử dụng độc quyền cho DWI lâm sàng tiêu chuẩn.\n2. Cứu vãn độ méo hình ở các vùng giải phẫu khắc nghiệt như nền sọ (xoang bướm, xương đá), tiền liệt tuyến.\n\n- Thông số / Tips:\n+ Khác biệt so với GRE-EPI là ít bị xảo ảnh từ tính hơn nhưng bù lại cần thời gian TE dài hơn, dẫn đến SNR thấp hơn đôi chút ở cùng tốc độ.",
        citations: []
    },
    { 
        id: 1003, 
        en: "Gradient Echo EPI (GRE-EPI)", 
        vi: "Chuỗi xung EPI Gradient Echo", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: EPI nguyên thủy không có xung 180°. Thu nhận dữ liệu dựa trên sự dịch pha trực tiếp T2*. Đem lại tốc độ chụp tối đa (khung hình cực lớn/giây) với độ nhạy bén siêu việt trước sự rớt tín hiệu do vi môi trường từ tính.\n\n- Tên gọi theo hãng: Siemens (GRE-EPI) | GE (GRE-EPI) | Philips (FFE-EPI) | Canon (FE-EPI) | Fujifilm (GRE-EPI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Mũi giáo nhọn của chụp cộng hưởng từ chức năng fMRI (đo lường BOLD effect).\n2. Quét tưới máu Perfusion DSC bắt nhịp tiêm thuốc cản từ trôi qua não.\n\n- Thông số / Tips:\n+ Méo hình cực kỳ mạnh mẽ ở hố sau sọ não. Không thể sử dụng để quét DWI vì TE quá ngắn không đủ đặt gradient khuếch tán.",
        citations: []
    },
    { 
        id: 1004, 
        en: "RESOLVE / RS-EPI", 
        vi: "EPI thu nhận đa phân đoạn (Readout-Segmented EPI)", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phân rã gánh nặng của EPI. Thay vì ép máy quét một lèo toàn bộ k-space trong 1 shot (Single-Shot), RS-EPI chia k-space theo chiều ngang thành nhiều dải nhỏ (segments) qua nhiều lần kích thích TR (Multi-shot). Gắn kèm navigator echo để sửa lỗi pha.\n\n- Tên gọi theo hãng: Siemens (RESOLVE) | GE (MUSE / rs-EPI) | Philips (rs-EPI) | Canon (rs-EPI) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Cung cấp hình ảnh DWI thần kinh độ phân giải cực cao (đánh giá tổn thương trục não nhỏ).\n2. Tiêu chuẩn vàng để chụp DWI tiền liệt tuyến và cổ tử cung không bị méo lệch giải phẫu (quan trọng trong sinh thiết fusion).\n\n- Thông số / Tips:\n+ Rút ngắn thời gian TE, giảm mờ nhòe. Đánh đổi bằng thời gian chụp tăng lên từ 3-5 lần so với SS-EPI truyền thống.",
        citations: []
    },
    { 
        id: 1005, 
        en: "MUSE / Multi-Shot EPI", 
        vi: "EPI đa phát", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Tương tự RS-EPI về mục đích nhưng khác cách cắt k-space (MUSE cắt k-space theo các vệt đan xen Interleaved thay vì khối ngang). Điểm nhấn của MUSE là thuật toán xử lý dữ liệu song song và căn chỉnh pha cực mạnh ngay trên phần mềm tái tạo để loại bỏ bóng ma chuyển động sinh lý.\n\n- Tên gọi theo hãng: Siemens (ms-EPI) | GE (MUSE) | Philips (Multi-Shot EPI) | Canon (ms-EPI) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chụp DWI các tạng ổ bụng (gan, thận) có độ phân giải không gian cao mà không cần nín thở quá ngặt nghèo.\n2. Cải thiện SNR cho bản đồ sức căng bó sợi DTI.\n\n- Thông số / Tips:\n+ MUSE thường kết hợp với chụp coil đa kênh (SENSE/ASSET) để đẩy lùi xảo ảnh Aliasing tối đa.",
        citations: []
    },
    { 
        id: 1006, 
        en: "ZOOMit / FOCUS", 
        vi: "DWI trường nhìn nhỏ", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Bắn một xung RF kích thích 2D không gian kết hợp gradient để chỉ cô lập từ hóa của một dải hẹp (Reduced FOV) bên trong cơ thể, triệt tiêu hoàn toàn mô xung quanh trước khi thu nhận. Việc thu thập k-space trở nên siêu ngắn, gỡ bỏ hoàn toàn gánh nặng méo hình và xảo ảnh cuộn (Aliasing).\n\n- Tên gọi theo hãng: Siemens (ZOOMit) | GE (FOCUS) | Philips (Zoom-DWI) | Canon (ZOOM DWI) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đánh giá siêu nét rễ thần kinh tủy sống cổ/ngực.\n2. Soi cận cảnh khối u khu trú: Tuyến tiền liệt, bàng quang, tử cung, hốc mắt, dây thần kinh thị giác.\n\n- Thông số / Tips:\n+ Bắt buộc định vị vùng kích thích (excitation block) ôm trọn tổn thương. Nếu đặt lệch, tổn thương sẽ không hiển thị.",
        citations: []
    },
    { 
        id: 1007, 
        en: "Diffusion Kurtosis Imaging (DKI)", 
        vi: "Hình ảnh độ nhọn khuếch tán", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Bước tiến lượng tử từ DTI. Nước trong mô sinh học di chuyển trong vô vàn màng tế bào, bào quan nên không tuân theo định luật Gauss thuần túy. DKI sử dụng phương trình toán học bậc cao đo lường 'độ lệch chuẩn' (Kurtosis) này qua đa mức b-value khổng lồ.\n\n- Tên gọi theo hãng: Siemens (DKI) | GE (DKI) | Philips (DKI) | Canon (DKI) | Fujifilm (DKI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chỉ báo vi cấu trúc nhạy nhất trong ung thư học: Phân biệt u thần kinh đệm độ thấp (Grade II) và độ cao (Grade IV).\n2. Khảo sát vi tổn thương não giai đoạn tiền lâm sàng trong Alzheimer, xơ cứng teo cơ một bên (ALS).\n\n- Thông số / Tips:\n+ Bắt buộc chạy tối thiểu 3 mức b-value (ví dụ: b=0, 1000, 2000 hoặc 2500) trên nhiều hướng (tối thiểu 15). Cần phần mềm đặc chủng để giải phương trình tensor bậc 4.",
        citations: []
    },
    { 
        id: 1008, 
        en: "Intravoxel Incoherent Motion (IVIM)", 
        vi: "Chuyển động không đồng pha nội Voxel", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phương trình phân tách 2 nguồn gốc suy giảm tín hiệu trong DWI: Khuếch tán nước tinh khiết (phân tử) và Vi tuần hoàn máu (tưới máu mao mạch pseudodiffusion). Chụp liên tiếp 6-10 mức b-value, đặc biệt dày đặc ở dải b-value cực thấp (0-200) để bóc tách thông số D (khuếch tán thật) và f, D* (tham số tưới máu).\n\n- Tên gọi theo hãng: Siemens (IVIM) | GE (IVIM) | Philips (IVIM) | Canon (IVIM) | Fujifilm (IVIM).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu chuẩn chẩn đoán u gan, xơ gan và xơ hóa thận không cần đụng đến giọt thuốc cản từ nào.\n2. Theo dõi đáp ứng khối u với liệu pháp kháng sinh mạch (Anti-angiogenic therapy).\n\n- Thông số / Tips:\n+ Nhạy cảm với nhiễu chuyển động hô hấp. Yêu cầu bệnh nhân thở êm đều đặn. Thường chụp free-breathing kết hợp navigator.",
        citations: []
    },
    { 
        id: 1009, 
        en: "NODDI", 
        vi: "Khuếch tán định hướng nơ-ron", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Dựng mô hình toán học giải phẫu vi mô ba phần: Dịch tự do (CSF), Môi trường nội bào (trong sợi trục) và Ngoại bào. Quét DWI với kỹ thuật Multi-shell (nhiều lớp b-value như củ hành) để bóc tách mật độ đóng gói sợi trục (NDI) và độ phân tán hướng (ODI).\n\n- Tên gọi theo hãng: Siemens (NODDI) | GE (NODDI) | Philips (NODDI) | Canon (NODDI) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Phân biệt chính xác giữa sự phù nề tế bào và sự mất mát myelin/sợi trục thực sự trong não trẻ sinh non hoặc chấn thương sọ não vi thể.\n2. Đánh giá dẻo dai thần kinh trong quá trình học tập hoặc phục hồi sau đột quỵ.\n\n- Thông số / Tips:\n+ Yêu cầu thiết lập Multi-shell DTI (ví dụ b=1000 và b=2500) với >60 hướng. Protocol rất nặng đô dành riêng cho nghiên cứu cấp cao.",
        citations: []
    },
    { 
        id: 1010, 
        en: "Pseudo-Continuous ASL (pCASL)", 
        vi: "Tưới máu ASL bán liên tục", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Khắc phục nhược điểm SAR quá nhiệt của CASL và SNR thấp của PASL. Dùng hàng ngàn xung RF biên độ nhỏ, cực ngắn đánh vào động mạch cổ, 'nung' từ tính dòng máu đi qua từ từ. Đạt hiệu suất dán nhãn (labeling efficiency) trên 80% an toàn ở 3T.\n\n- Tên gọi theo hãng: Siemens (pCASL) | GE (pCASL / 3D ASL) | Philips (pCASL) | Canon (pCASL) | Fujifilm (pCASL).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Khuyến nghị số 1 (Gold standard) hiện tại cho mọi chỉ định Perfusion không thuốc sọ não.\n2. Chẩn đoán hẹp động mạch cảnh mạn tính, viêm não Herpes, bệnh Moya Moya.\n\n- Thông số / Tips:\n+ Thường được kết hợp với kỹ thuật thu nhận 3D FSE/GRASE nền đen (Background suppression) để triệt tiêu tĩnh tín hiệu mỡ cơ, làm nổi bật bản đồ màu tưới máu.",
        citations: []
    },
    { 
        id: 1011, 
        en: "Pulsed ASL (PASL)", 
        vi: "Tưới máu ASL xung", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Bắn một xung đảo ngược không gian diện rộng (dày 10-15cm) đè lên cả mảng động mạch cổ để nhuộm từ tính toàn bộ khối máu trong vùng đó cùng một lúc. Gọn nhẹ, ít sinh nhiệt SAR.\n\n- Tên gọi theo hãng: Siemens (PASL / PICORE) | GE (PASL) | Philips (PASL) | Canon (PASL) | Fujifilm (PASL).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chẩn đoán nhanh thiếu máu não ở bệnh nhân không phối hợp tốt hoặc ở các dòng máy 1.5T cũ không hỗ trợ pCASL.\n\n- Thông số / Tips:\n+ Độ tương phản tưới máu kém hơn, dễ bị sai lệch nếu mạch máu bệnh nhân quá ngoằn ngoèo do quãng đường khối máu di chuyển không đồng nhất.",
        citations: []
    },
    { 
        id: 1012, 
        en: "FAIR", 
        vi: "Kỹ thuật đảo ngược xen kẽ (ASL)", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Một chiêu thức độc đáo của PASL. Pha thứ nhất: Phát xung 180° chọn lọc chỉ đảo từ lát cắt não (ảnh Control). Pha thứ hai: Phát xung 180° không chọn lọc (đảo từ TOÀN BỘ não và cổ - ảnh Tag). Máu từ cổ chảy lên não ở pha 2 bị đảo từ, tạo ra sự chênh lệch tín hiệu.\n\n- Tên gọi theo hãng: Siemens (FAIR) | GE (FAIR) | Philips (FAIR) | Canon (FAIR) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đo dòng máu vỏ não trực tiếp.\n2. Đặc biệt hiệu quả trong đo lường tưới máu cơ tim hoặc thận (những cơ quan khó áp dụng pCASL do vị trí động mạch).\n\n- Thông số / Tips:\n+ Lát cắt thường bị hạn chế, không quét được toàn sọ vì độ rộng xung bị giới hạn bởi năng lượng cuộn dây RF.",
        citations: []
    },
    { 
        id: 1013, 
        en: "Resting-State fMRI", 
        vi: "Cộng hưởng từ chức năng trạng thái nghỉ", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Dựa trên dao động tần số thấp tự phát (<0.1 Hz) của tín hiệu BOLD. Máy tính tự động phân tích tương quan chéo (Cross-correlation) giữa các voxel để tìm ra các mạng lưới nơ-ron cùng nhấp nháy đồng bộ (Default Mode Network) trong khi bệnh nhân thư giãn nhắm mắt.\n\n- Tên gọi theo hãng: Siemens (rs-fMRI) | GE (rs-fMRI) | Philips (rs-fMRI) | Canon (rs-fMRI) | Fujifilm (rs-fMRI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tầm soát đứt gãy mạng lưới liên kết não trong bệnh Trầm cảm, Tâm thần phân liệt, Rối loạn phổ tự kỷ.\n2. Thay thế Task-fMRI ở bệnh nhân liệt, hôn mê, hoặc nhũ nhi không thể làm theo lệnh.\n\n- Thông số / Tips:\n+ Quét liên tục EPI từ 5-10 phút. Yêu cầu bệnh nhân không được ngủ gật, giữ đầu tĩnh lặng tuyệt đối.",
        citations: []
    },
    { 
        id: 1014, 
        en: "Task-based fMRI", 
        vi: "Cộng hưởng từ chức năng theo nhiệm vụ", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Thiết kế bài tập khối (Block design). Bệnh nhân thực hiện nhiệm vụ (nhịp ngón tay) trong 30 giây (ON), sau đó nghỉ 30 giây (OFF), lặp lại nhiều lần. Phân tích thống kê tìm ra các voxel có tín hiệu BOLD bùng lên bám sát theo chu kỳ đồ thị này.\n\n- Tên gọi theo hãng: Siemens (Task fMRI) | GE (BrainWave) | Philips (fMRI) | Canon (fMRI) | Fujifilm (fMRI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Xác định chính xác tọa độ vùng ngôn ngữ Broca/Wernicke, vùng vận động vỏ não sơ cấp.\n2. Dẫn đường tia xạ phẫu thuật (Gamma Knife) hoặc mổ mở sọ.\n\n- Thông số / Tips:\n+ Đòi hỏi màn hình chiếu qua gương, tai nghe chống ồn và bộ điều khiển đáp ứng (Response pad) tương tác với bệnh nhân.",
        citations: []
    },
    { 
        id: 1015, 
        en: "PROSET / Water Excitation", 
        vi: "Xung kích thích chọn lọc nước", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Thay vì dùng 1 xung 90°, hệ thống chẻ nhỏ thành các chùm xung nhị thức (ví dụ 1-2-1). Chúng được canh thời gian lệch nhau đúng bằng chu kỳ lệch pha mỡ-nước. Kết quả là tại thời điểm đánh xung cuối cùng, vector từ hóa của mỡ tự triệt tiêu lẫn nhau về 0, chỉ còn vector nước bị lật để thu tín hiệu.\n\n- Tên gọi theo hãng: Siemens (Water Excitation) | GE (Water Excitation) | Philips (PROSET) | Canon (W.E.) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Kỹ thuật tuyệt đỉnh chụp MRI sụn khớp độ phân giải cao 3D (đặc biệt khớp gối).\n2. Quét thần kinh cột sống tránh lỗi FatSat nhòe viền gây hiểu lầm bệnh lý.\n\n- Thông số / Tips:\n+ Tránh được lỗi xóa mỡ lố (phá hủy cả tín hiệu nước lân cận) thường gặp ở kỹ thuật FatSat hóa học thuần túy.",
        citations: []
    },
    { 
        id: 1016, 
        en: "eTHRIVE", 
        vi: "Xung T1 3D độ phân giải cao có nín thở", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Tên thương mại của Philips dành riêng cho kỹ thuật T1 High Resolution Isotropic Volume Examination. Kết hợp thu thập k-space trung tâm dày đặc, T1-GRE, FatSat và SENSE tăng tốc độ siêu phàm.\n\n- Tên gọi theo hãng: Siemens (VIBE) | GE (LAVA) | Philips (eTHRIVE) | Canon (3D Quick) | Fujifilm (TIGRE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Quét động học gan-mật, tụy, chụp MRI vú hai bên đồng thời với độ sắc nét từng ống tuyến.\n\n- Thông số / Tips:\n+ Là bản nâng cấp, hoạt động mượt mà với luồng tiêm tự động. Thời gian giữ hơi thở chuẩn 12-16s.",
        citations: []
    },
    { 
        id: 1017, 
        en: "LAVA-Flex / VIBE-Dixon", 
        vi: "Xung 3D T1 kết hợp Dixon", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Màn sáp nhập quyền lực nhất. Ghép nối tốc độ quét nín thở của 3D GRE (VIBE/LAVA) với sức mạnh phân tách nước-mỡ tuyệt đối bất chấp từ trường cong vênh của thuật toán Dixon 2-point.\n\n- Tên gọi theo hãng: Siemens (VIBE-Dixon) | GE (LAVA-Flex) | Philips (mDixon) | Canon (W-FOP) | Fujifilm (FatSep).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Giải quyết vĩnh viễn thảm họa chưa xóa sạch mỡ ở rìa các tổ chức như vú, cổ, hàm mặt khi chụp tiêm thuốc cản từ.\n2. Một lần nín thở sinh ra 4 bộ ảnh (In, Out, Water, Fat), chẩn đoán gan nhiễm mỡ kèm u ngấm thuốc đồng thời.\n\n- Thông số / Tips:\n+ Chỉ định thay thế hoàn toàn VIBE FatSat thông thường ở tất cả các máy MRI thế hệ mới.",
        citations: []
    },
    { 
        id: 1018, 
        en: "CAIPIRINHA", 
        vi: "Kỹ thuật chụp song song CAIPIRINHA", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Can thiệp vào cách chia lát cắt khối 3D. Các đường k-space bị bỏ qua không nằm thẳng hàng mà được dịch chuyển chéo (shift) một cách có chủ đích. Điều này ép các xảo ảnh lặp (Aliasing) trượt ra khỏi các mô cơ thể quan trọng, tận dụng 100% hình học không gian của cuộn dây mảng pha đa kênh.\n\n- Tên gọi theo hãng: Siemens (CAIPIRINHA) | GE (ARC / HyperSense) | Philips (SENSE / dS-SENSE) | Canon (SPEEDER) | Fujifilm (RAPID).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Công cụ tăng tốc độ nín thở VIBE-Dixon từ 20 giây xuống còn 10-12 giây (cứu tinh cho người già, suy hô hấp).\n2. Quét não 3D FLAIR toàn diện 1x1x1mm chỉ trong 3 phút rưỡi.\n\n- Thông số / Tips:\n+ Cài đặt hệ số gia tốc (Acceleration factor) iPAT = 4 hoặc 6 mà không gây giảm sút SNR nghiêm trọng như GRAPPA truyền thống.",
        citations: []
    },
    { 
        id: 1019, 
        en: "TWIST / TRICKS", 
        vi: "Chụp mạch máu động học (4D MRA)", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phương pháp chia sẻ không gian K (K-space sharing). Máy tính phân loại k-space thành vùng lõi (Tương phản) và vùng rìa (Chi tiết). Quét vùng lõi liên tục ở mọi pha thời gian (2s/lần), trong khi vùng rìa quét thưa thớt hơn và tái sử dụng toán học chồng chéo lên vùng lõi.\n\n- Tên gọi theo hãng: Siemens (TWIST) | GE (TRICKS) | Philips (4D-TRAK) | Canon (DRKS) | Fujifilm (TRAQ).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Phân tách rõ ràng động mạch - tĩnh mạch chạy đua qua khối u mạch máu hoành tráng ở cổ, não (AVM).\n2. Gỡ rối tưới máu bàn chân tiểu đường do máu đến muộn và rải rác.\n\n- Thông số / Tips:\n+ Thu được hàng chục pha 3D liên tiếp tạo thành Video mạch máu lồng lộng 4 chiều (3D + Thời gian).",
        citations: []
    },
    { 
        id: 1020, 
        en: "4D-TRAK", 
        vi: "4D MRA của Philips", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phiên bản MRA 4D tối thượng của Philips. Ứng dụng triệt để nguyên lý Keyhole kết hợp SENSE dập k-space liên tục. Tạo ra hàng loạt các gói 3D liên hoàn từ thì trước tiêm đến thì tĩnh mạch muộn.\n\n- Tên gọi theo hãng: Siemens (TWIST) | GE (TRICKS) | Philips (4D-TRAK) | Canon (DRKS) | Fujifilm (TRAQ).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đánh giá hoàn hảo thời gian rửa vào (Wash-in) của các shunt động-tĩnh mạch não bộ và tủy sống.\n\n- Thông số / Tips:\n+ Tránh phải dùng Test Bolus rườm rà. Máy chạy tự động, KTV chích thuốc và tiêm xả saline cùng lúc.",
        citations: []
    },
    { 
        id: 1021, 
        en: "DISCO", 
        vi: "Chụp động học đa pha siêu nhanh", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Chụp MRI tiền liệt tuyến/vú siêu đẳng. Trộn lẫn LAVA-Flex Dixon, chia sẻ k-space và lấy mẫu thưa (Compressed Sensing). Vắt kiệt thời gian quét xuống mức 3-5 giây mỗi pha phân giải cao.\n\n- Tên gọi theo hãng: Siemens (TWIST-VIBE) | GE (DISCO) | Philips (4D-THRIVE) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Vẽ chính xác đỉnh bắt thuốc dạng gai nhọn (Type 3 TIC curve) của ung thư tiền liệt tuyến (PI-RADS v2.1) mà VIBE thông thường thường bỏ sót lọt khe.\n\n- Thông số / Tips:\n+ Quét 30-40 pha liên tục, tạo cơ sở dữ liệu hoàn hảo cho phần mềm phân tích màu PKM (Pharmacokinetic Modeling).",
        citations: []
    },
    { 
        id: 1022, 
        en: "KWIC / Radial K-space", 
        vi: "Thu thập K-space hình tia (Radial)", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Một cách lấp đầy k-space. Gạt bỏ cách điền từng dòng Cartesian thẳng đứng dễ đứt gãy. Radial nạp k-space theo hình ngôi sao xuyên tâm. Trọng tâm k-space (mang độ tương phản) được lặp lại hàng nghìn lần, pha loãng mọi tín hiệu nhiễu rác từ chuyển động thở thành các sọc mờ vô hại (streak artifacts).\n\n- Tên gọi theo hãng: Siemens (Radial) | GE (KWIC) | Philips (Radial) | Canon (Radial) | Fujifilm (Radial).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chụp bụng/chậu độ phân giải mượt mà cho người hôn mê, thở máy hoặc nhi khoa không thuốc mê.\n2. Chụp tim ở bệnh nhân loạn nhịp nặng.\n\n- Thông số / Tips:\n+ Chìa khóa vàng giải cứu những ca MRI bụng thất bại do bệnh nhân không tuân thủ nín thở.",
        citations: []
    },
    { 
        id: 1023, 
        en: "Golden Angle Radial", 
        vi: "Góc vàng trong thu thập tia", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Một khám phá toán học phi thường. Máy quay các tia k-space theo một góc lệch chuẩn ~111.25 độ (Dựa trên tỷ lệ vàng). Các tia không bao giờ trùng lặp đè lên nhau vĩnh viễn. KTV có thể dừng chụp bất cứ lúc nào, máy tính vẫn phân loại và ghép được các pha Động-Tĩnh mạch riêng biệt từ dữ liệu thô ngẫu nhiên.\n\n- Tên gọi theo hãng: Siemens (StarVIBE) | GE (DISCO Star) | Philips (N/A) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Quét tưới máu thận tĩnh mạch cửa ở trẻ sơ sinh đang bú mẹ (chuyển động liên tục).\n2. Tầm soát tưới máu cơ tim dưới stress.\n\n- Thông số / Tips:\n+ Rất linh hoạt trong xử lý Re-con hậu kỳ. KTV tự quyết định gộp bao nhiêu tia để tạo thành 1 pha hình ảnh.",
        citations: []
    },
    { 
        id: 1024, 
        en: "GRASP", 
        vi: "Tái tạo GRASP", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Kết hợp 3 siêu công nghệ: Golden-angle Radial, T1-Dixon, và Compressed Sensing (nội suy nén L1-norm). Dữ liệu thu thập cực thưa thớt nhưng thuật toán tối ưu hóa toán học lặp đi lặp lại dọn sạch nhiễu và đúc kết thành hình ảnh DCE-MRI 4D.\n\n- Tên gọi theo hãng: Siemens (GRASP-VIBE) | GE (DISCO CS) | Philips (Compressed SENSE) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tuyệt kỹ quét gan ngấm thuốc liên tục 3 phút (Free-breathing). Máy tự chia nhỏ dữ liệu để tạo biểu đồ thở và loại trừ pha mờ do nhịp thở sâu.\n\n- Thông số / Tips:\n+ Quá trình tái tạo (Reconstruction) đòi hỏi Card đồ họa mạnh và mất hàng phút đến hàng chục phút sau khi bệnh nhân đã rời phòng chụp.",
        citations: []
    },
    { 
        id: 1025, 
        en: "StarVIBE", 
        vi: "VIBE thu nhận dạng sao", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Bản nâng cấp độc quyền của Siemens. Gói gọn kỹ thuật Stack-of-Stars (Radial mặt phẳng xy + Cartesian dọc trục z) vào thân xác xung T1 VIBE FatSat. Diệt sạch xảo ảnh ma (ghosting) ở các tạng nhu động nhiều.\n\n- Tên gọi theo hãng: Siemens (StarVIBE) | GE (Radial LAVA) | Philips (N/A) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Quét MRI Động học vùng Đầu - Mặt - Cổ và Đáy chậu, nơi bệnh nhân bắt buộc phải nuốt nước bọt và cơ co kéo.\n2. Chụp T1W ruột non phân giải cao.\n\n- Thông số / Tips:\n+ Trải nghiệm lâm sàng vô cùng mạnh mẽ, thay thế hoàn toàn T1 TSE chậm chạp thường quy ở vùng hầu họng.",
        citations: []
    },
    { 
        id: 1026, 
        en: "RADAR / BLADE", 
        vi: "Xung chống chuyển động RADAR", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phương án khử nhiễu chuyển động chủ đạo được tích hợp cho cả Spin Echo. Cắt k-space thành các dải (blades), mỗi dải xoay dần bao phủ vòng tròn quanh tâm. Sau khi quét, phần mềm phân tích sự lệch pha ở tâm các dải, tự động nắn chỉnh lại vị trí đầu bệnh nhân lồng vào nhau.\n\n- Tên gọi theo hãng: Siemens (BLADE) | GE (PROPELLER) | Philips (MultiVane) | Canon (JET) | Fujifilm (RADAR).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Quét T2W và FLAIR não sắc nét cho mọi bệnh nhân kích thích vật vã cấp cứu.\n2. Khảo sát tổn thương tủy sống ngực/cổ rũ sạch hoàn toàn xảo ảnh đập của tim và nuốt.\n\n- Thông số / Tips:\n+ Bề rộng của mỗi blade và tỷ lệ chồng lấp ở tâm sẽ quyết định mức độ sửa lỗi mạnh hay yếu. Tăng Blade width sẽ giảm bớt thời gian chụp.",
        citations: []
    },
    { 
        id: 1027, 
        en: "MEDIC / MERGE", 
        vi: "Xung đa tín hiệu dội (Multi-Echo GRE)", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phát một chuỗi xung kích thích GRE duy nhất có góc lật nhỏ, sau đó lật các cuộn gradient thu nhận liên tục để tạo ra chuỗi 3, 4, hoặc 6 dội (Echo) nhỏ liên tiếp. Máy tính gộp tất cả các echo này thành 1 ảnh duy nhất, cộng hưởng SNR cao ngất ngưởng với hiệu ứng T2* nặng đô.\n\n- Tên gọi theo hãng: Siemens (MEDIC) | GE (MERGE) | Philips (m-FFE) | Canon (m-FE) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chẩn đoán tuyệt hảo gai xương, hẹp lỗ liên hợp và chèn ép rễ thần kinh tủy cổ (Rễ thần kinh xám đen nổi bần bật trên nền dịch T2 sáng rực).\n2. Quét đánh giá rách vi thể sụn sợi tam giác (TFCC) ở cổ tay.\n\n- Thông số / Tips:\n+ Rất nhạy với xảo ảnh T2* (răng sứ, mảng ghép). Không dùng khi có vít tủy cổ. Góc FA thường 10-15°.",
        citations: []
    },
    { 
        id: 1028, 
        en: "COSMIC", 
        vi: "Xung bSSFP của GE", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Tùy biến từ FIESTA. Chạy chuỗi bSSFP 3D với góc lật (FA) biến thiên kết hợp dập nhiễu dải băng. Nhờ đó dồn hết năng lượng tín hiệu tương phản mô mềm sát với T2W nhưng vận tốc thu thập ở mức GRE.\n\n- Tên gọi theo hãng: Siemens (TrueFISP) | GE (COSMIC) | Philips (b-FFE) | Canon (True SSFP) | Fujifilm (BASG).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chỉ định chính trong khảo sát độ dày, bề mặt sụn khớp chè-đùi, cổ chân mỏng dính.\n2. Đánh giá rách sụn chêm, gân cơ nhỏ chi tiết 3D tái tạo góc khuất.\n\n- Thông số / Tips:\n+ Đặc thù mang lại độ tương phản Dịch/Sụn và Sụn/Xương dưới sụn nổi bật.",
        citations: []
    },
    { 
        id: 1029, 
        en: "DESS / Dual Echo Steady State", 
        vi: "Xung trạng thái ổn định dội kép", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Quét 3D trạng thái ổn định. Trong mỗi chu kỳ TR, máy thu lại 2 tín hiệu Echo: một Echo do hiệu ứng thoái hóa tự do (FID) thiên về T1W/PD, và một Echo do dư âm phục hồi (Spin-echo) thiên về T2W mạnh. Gộp 2 dữ liệu sinh ra hình sụn khớp cực sáng.\n\n- Tên gọi theo hãng: Siemens (DESS) | GE (FIESTA-C) | Philips (N/A) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chuẩn vàng đo độ dày và thể tích sụn khớp gối trong các nghiên cứu lâm sàng thoái hóa OAI toàn cầu.\n2. Thay thế chụp các lát cắt 2D phức tạp lằng nhằng ở khớp gối.\n\n- Thông số / Tips:\n+ Dựng hình MPR 3D đẳng hướng 0.6mm hoặc tích hợp Water Excitation để xóa phần mỡ tủy xương tăng sự rõ nét cho bề mặt sụn khớp.",
        citations: []
    },
    { 
        id: 1030, 
        en: "T2* MAP", 
        vi: "Bản đồ T2 sao", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Thu nhận Multi-Echo GRE nín thở, bắt tối thiểu 6-12 dội (Echo) từ cực ngắn (1.5ms) đến dài (20ms). Tại mỗi voxel, phần mềm vẽ đường cong trượt logarit của sự rớt tín hiệu, quy đổi thời gian rớt về miligiây làm bản đồ T2* hoặc nghịch đảo làm bản đồ R2* (Hz).\n\n- Tên gọi theo hãng: Siemens (T2* Map) | GE (IDEAL-IQ / T2* Map) | Philips (mDixon Quant / T2* Map) | Canon (T2* Map) | Fujifilm (T2* Map).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Định lượng khối lượng Sắt (mg/g mô khô) lắng đọng mạn tính ở Gan và Cơ Tim trong bệnh truyền máu nhiều lần Thalassemia, ứ sắt Hemochromatosis.\n\n- Thông số / Tips:\n+ Cơ tim khỏe mạnh T2* > 20ms, nguy cơ suy tim nặng khi T2* < 10ms. Cần kết hợp phần mềm báo cáo số liệu chuẩn để làm kết quả y khoa.",
        citations: []
    },
    { 
        id: 1031, 
        en: "T1 MAP / MOLLI", 
        vi: "Bản đồ T1 tim (MOLLI)", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Sơ đồ hóa hàm lượng T1 cơ tim bằng phương pháp Modified Look-Locker Inversion Recovery (MOLLI). Kẹp một xung đảo ngược mạnh rồi đọc dữ liệu SSFP qua 3 nhịp tim, nghỉ 3 nhịp, lặp lại qua 5 nhịp (Sơ đồ 3(3)5). Dựng đồ thị hồi phục T1 pixel-by-pixel.\n\n- Tên gọi theo hãng: Siemens (MyoMaps / MOLLI) | GE (CardioMaps / MOLLI) | Philips (MOLLI) | Canon (MOLLI) | Fujifilm (MOLLI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đếm độ xơ hóa lan tỏa cơ tim (Diffuse Fibrosis), thâm nhiễm Amyloidosis, bệnh cơ tim phì đại mà kỹ thuật LGE thông thường mù tịt.\n2. Tiêm thuốc để tính toán bản đồ ECV (Thể tích ngoại bào).\n\n- Thông số / Tips:\n+ Nín thở dài ~15s. Nhịp tim bệnh nhân phải ổn định. Nếu nhịp tim quá cao hoặc rối loạn, đồ thị nội suy sẽ hỏng hoàn toàn.",
        citations: []
    },
    { 
        id: 1032, 
        en: "ShMOLLI", 
        vi: "MOLLI chu kỳ ngắn", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Sửa đổi từ MOLLI truyền thống. Short-MOLLI dùng sơ đồ nhịp tim 5(1)1(1)1. Thu nhận ngắn lại, chỉ cần 9 nhịp tim (thay vì 17 nhịp). Áp dụng tính toán phi tuyến tính có điều kiện để dự đoán đỉnh hồi phục muộn T1.\n\n- Tên gọi theo hãng: Siemens (ShMOLLI) | GE (ShMOLLI) | Philips (ShMOLLI) | Canon (ShMOLLI) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Khảo sát T1 Mapping cơ tim cho các bệnh nhân suy tim nặng, già yếu, loạn nhịp hoặc chỉ có thể nín thở ngắn <10 giây.\n\n- Thông số / Tips:\n+ Khắc phục sự phụ thuộc quá mức vào tần số nhịp tim của MOLLI cổ điển. Khả năng tái lập rất ổn định.",
        citations: []
    },
    { 
        id: 1033, 
        en: "SASHA", 
        vi: "Xung bản đồ T1 bão hòa", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Thay vì dùng xung Inversion 180° gây mất thời gian chờ, Saturation Recovery Single-Shot Acquisition (SASHA) phát xung bão hòa 90° chém sạch lịch sử từ hóa, sau đó đọc T1 ngay lập tức. Đồ thị hàm mũ hồi phục xuất phát từ mức 0 lên +Mz.\n\n- Tên gọi theo hãng: Siemens (SASHA) | GE (SASHA) | Philips (SASHA) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đo T1 cơ tim tuyệt đối, độ chính xác nhỉnh hơn MOLLI trong những điều kiện loạn nhịp, nhịp nhanh.\n\n- Thông số / Tips:\n+ Nhược điểm của SASHA là dải nhạy cảm (dynamic range) hẹp hơn (từ 0 lên 1) so với MOLLI (từ -1 lên 1), nên SNR của bản đồ cuối cùng thường nhiễu hạt hơn.",
        citations: []
    },
    { 
        id: 1034, 
        en: "Cardiac Cine (SSFP)", 
        vi: "MRI Tim động học", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Bắt nhịp Điện tâm đồ (ECG gating). Quét bSSFP 2D nín thở siêu tốc. Một chu kỳ tim (R-R interval) được chia làm 25-30 mảnh (frames). Thu thập dòng k-space ở nhiều nhịp tim rồi ghép lại để tạo 1 đoạn Video 1 nhịp đập hoàn hảo ảo diệu.\n\n- Tên gọi theo hãng: Siemens (Cine TrueFISP) | GE (Cine FIESTA) | Philips (Cine b-FFE) | Canon (Cine True SSFP) | Fujifilm (Cine BASG).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu chuẩn vàng tuyệt đối thế giới trong đo đạc Thể tích tâm thất (EDV, ESV), Phân số tống máu (EF), khối lượng cơ tim (Mass).\n2. Chẩn đoán phình vách, rối loạn co bóp cơ tim cục bộ do nhồi máu.\n\n- Thông số / Tips:\n+ Quét hệ trục 2 buồng, 3 buồng, 4 buồng tim, trục ngắn (Short-axis) từ đáy đến mỏm tim. Lỗi loạn nhịp sẽ gây bóng mờ dọc video (Ghosting).",
        citations: []
    },
    { 
        id: 1035, 
        en: "CSPAMM / Tagging", 
        vi: "Kỹ thuật dán nhãn cơ tim", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Ngay tại sóng R của ECG, dập một lưới xung RF đặc biệt (SPAMM/DANTE) làm triệt tiêu tín hiệu đan chéo nhau, khắc vĩnh viễn hình sọc caro (grid lines) lên mô cơ tim. Kéo dài chu kỳ, sọc caro bị bẻ cong theo sức co bóp cơ.\n\n- Tên gọi theo hãng: Siemens (Tagging / CSPAMM) | GE (MyoTag / FastCINE) | Philips (Tagging) | Canon (Tagging) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Phân tích Sức căng cơ tim (Myocardial Strain) 2D trực quan. Chẩn đoán sớm rối loạn chức năng tâm trương trước khi EF suy giảm.\n2. Phân biệt Viêm màng ngoài tim co thắt (Pericarditis) với Bệnh cơ tim hạn chế (Lưới caro trượt hoặc dính nhau ở ranh giới màng ngoài tim).\n\n- Thông số / Tips:\n+ Dải lưới caro sẽ nhạt dần (fading) vào cuối tâm trương do sự hồi phục T1 tự nhiên.",
        citations: []
    },
    { 
        id: 1036, 
        en: "SENC (Strain Encoded)", 
        vi: "Hình ảnh mã hóa sức căng", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Biến đổi pha siêu đẳng. Không vẽ sọc caro trên mặt phẳng, SENC mã hóa biến dạng tần số theo hướng vuông góc với lát cắt (Through-plane). Khi cơ tim co ngắn lại, tần số đổi màu, máy tính lập bản đồ sức căng xuyên thành (Longitudinal strain) mã hóa bằng phổ màu đậm nhạt.\n\n- Tên gọi theo hãng: Siemens (MyoStrain / SENC) | GE (SENC) | Philips (SENC) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Công cụ chẩn đoán suy tim tiềm ẩn cực nhanh (Chỉ định Fast SENC nín thở 1 nhịp quét toàn bộ tim).\n2. Cực kỳ nhạy trong bệnh thiếu máu cơ tim vùng dưới nội tâm mạc.\n\n- Thông số / Tips:\n+ Giao diện đồ họa cung cấp đường cong biến dạng Global Longitudinal Strain (GLS) rất giống kết quả Siêu âm Speckle Tracking nhưng chuẩn MRI.",
        citations: []
    },
    { 
        id: 1037, 
        en: "4D Flow", 
        vi: "MRI mạch máu 4D", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Quét 3D Phase Contrast kích hoạt ECG đo vận tốc. Bật liên tiếp thông số VENC theo trục x, trục y, trục z. Máy tính dung hợp dữ liệu thu được ở mọi chiều dòng chảy theo từng mili-giây suốt chu kỳ tim. Tạo dòng chảy Vector dòng cuốn hạt màu (Particle Trace) không gian 3 chiều.\n\n- Tên gọi theo hãng: Siemens (4D Flow) | GE (4D Flow) | Philips (4D Flow) | Canon (4D Flow) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đánh giá luồng phụt (Jet) xoáy cuộn trong hẹp eo động mạch chủ, phình động mạch, thông liên nhĩ/liên thất, hở van phức tạp đa hướng.\n2. Phân tích áp lực thành mạch (Wall Shear Stress) tiên lượng vỡ túi phình não.\n\n- Thông số / Tips:\n+ Thời gian chụp rất dài (10-15 phút) dính nhịp thở. Tái tạo ra hàng ngàn lát ảnh, cần phần mềm hậu xử lý Cloud hạng nặng (cvi42, Arterys).",
        citations: []
    },
    { 
        id: 1038, 
        en: "QFLOW / 2D Phase Contrast", 
        vi: "Khảo sát dòng chảy định lượng", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Cắt duy nhất 1 mặt phẳng vuông góc tuyệt đối 90° với thân mạch máu/cống não. Đặt VENC theo trục xuyên mặt phẳng cắt (Through-plane). Kết quả sinh ra 2 loại video: Magnitude (Hình thể giải phẫu) và Phase (Bản đồ pha - máu lên trắng, máu lùi đen, đứng yên xám).\n\n- Tên gọi theo hãng: Siemens (Q-Flow / Flow Quant) | GE (Q-Flow) | Philips (Q-Flow) | Canon (Q-Flow) | Fujifilm (Flow Quant).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Định lượng Vận tốc đỉnh (Peak Velocity, m/s), Lưu lượng thực (Net Flow, ml/nhịp) tại van Động mạch chủ, van Phổi. Tính Shunt Qp/Qs trong tim bẩm sinh.\n2. Đo thể tích dòng phụt ngược chẩn đoán độ hở van tim.\n\n- Thông số / Tips:\n+ Mặt phẳng cắt 2D phải tuyệt đối vuông góc. Vẽ ROI bao quanh viền mạch máu cẩn thận để tích phân lưu lượng.",
        citations: []
    },
    { 
        id: 1039, 
        en: "Non-Contrast MRA (NATIVE / FBI)", 
        vi: "MRA không tiêm thuốc gating tim", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Mắc điện tâm đồ ở ngực, cổ chân hoặc ngón tay để dò sóng mạch (Peripheral Pulse). Thu thập hai bộ 3D TSE dày: Một khối ở tâm thu (Máu bơm mạnh bay đi mất, lòng mạch đen thui), một khối ở tâm trương (Máu chảy lừ đừ, tín hiệu tĩnh T2 sáng rực). Trừ 2 ảnh này sinh ra Cây mạch máu thuần khiết.\n\n- Tên gọi theo hãng: Siemens (NATIVE) | GE (Inhance Inflow) | Philips (B-TRANCE) | Canon (FBI) | Fujifilm (VASC).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tầm soát mảng xơ vữa, hẹp tắc động mạch đùi, chậu, cẳng chân cho bệnh nhân viêm thận mạn tính nghiêm trọng (chống chỉ định dùng Gadolinium).\n\n- Thông số / Tips:\n+ Quá trình Delay mạch ngoại vi (Trigger Delay) quyết định tính sống còn của xung. Phải dùng xung khảo sát Prep để tìm thời điểm tâm thu - tâm trương tối ưu của từng cá nhân.",
        citations: []
    },
    { 
        id: 1040, 
        en: "TRANCE", 
        vi: "MRA kích hoạt nhịp tim của Philips", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phương thức MRI của Philips dựa trên TSE 3D gating theo nhịp tim. Trọng tâm nhấn mạnh vào thì Tâm trương muộn khi toàn bộ dòng máu lưu thông chậm nhất để nhận được tín hiệu T2 cao nhất. \n\n- Tên gọi theo hãng: Siemens (NATIVE) | GE (Inhance) | Philips (TRANCE) | Canon (FBI) | Fujifilm (VASC).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chụp MRI tĩnh mạch sọ mặt (MRV) cực kỳ xuất sắc với nền mô bị xóa sạch.\n2. Phân tích dòng chảy Mạch máu chậu và đùi chi dưới.\n\n- Thông số / Tips:\n+ Yêu cầu nhịp tim tương đối ổn định. Bệnh nhân Rung nhĩ (AF) sẽ gây nhiễu ảnh và mất máu cục bộ giả.",
        citations: []
    },
    { 
        id: 1041, 
        en: "QISS", 
        vi: "MRA không tiêm dựa trên bSSFP", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Quiescent-Interval Single-Shot (QISS). Phát 1 xung 90° bão hòa làm đen toàn bộ cấu trúc 2D mỏng tĩnh tại. Chờ một khoảng ngắt (Quiescent Interval) đủ để dòng máu tươi tâm thu ập vào. Thu nhận cực nhanh khối đó bằng bSSFP ECG-Gating.\n\n- Tên gọi theo hãng: Siemens (QISS) | GE (N/A) | Philips (N/A) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. MRA ngoại vi chân không tiêm thuốc được xem là ưu việt nhất hiện nay (vượt trội FBI). Chẩn đoán bệnh động mạch ngoại biên (PAD).\n\n- Thông số / Tips:\n+ Miễn nhiễm với sự thay đổi của sóng mạch ngoại vi, khắc phục nhược điểm canh Delay khó khăn ở xung FBI truyền thống.",
        citations: []
    },
    { 
        id: 1042, 
        en: "REACT", 
        vi: "Xung bSSFP tái tạo không đồng bộ", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Relaxation Enhancement Angiography without Contrast and Triggering (REACT). Một đột phá mới. Bỏ qua hoàn toàn mắc dây ECG phức tạp. Phát xung đảo từ phục hồi T2 Prep mạnh mẽ ép mô nền về đen, máu T2 dài vẫn sáng. Quét tự do (Free-breathing) 3D Dixon bSSFP thu ảnh lồng mạch sắc lẹm.\n\n- Tên gọi theo hãng: Siemens (N/A) | GE (N/A) | Philips (REACT) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Giải pháp thần tốc trong cấp cứu lồng ngực: Tìm tĩnh mạch cảnh, động mạch vành dị vị ở bệnh nhân nhi khoa quấy khóc, suy hô hấp.\n\n- Thông số / Tips:\n+ Dễ làm, không phụ thuộc vào tình trạng rối loạn nhịp tim. Mất chưa tới 3 phút thiết lập và chụp thay vì 15 phút rườm rà mắc dây điện tim.",
        citations: []
    },
    { 
        id: 1043, 
        en: "SNAP (Simultaneous Non-contrast Angiography and Plaque)", 
        vi: "Hình ảnh mảng xơ vữa SNAP", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Kết hợp hai thái cực: Inversion Recovery để đảo cực xóa máu và Phase-sensitive reconstruction để lưu tín hiệu T1 ngắn tự nhiên. Trong 1 lần quét 3D tạo ra 2 series song song: MRA lòng mạch máu (sáng) rực, và Mảng bám thành mạch máu (sáng do xuất huyết nội mảng bám T1 ngắn).\n\n- Tên gọi theo hãng: Siemens (SNAP) | GE (SNAP) | Philips (SNAP) | Canon (SNAP) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đánh giá tính ổn định (vulnerable plaque) của xơ vữa động mạch cảnh.\n2. Chẩn đoán nguy cơ đột quỵ não nhồi máu cao bùng phát từ xuất huyết trong mảng vữa (IPH).\n\n- Thông số / Tips:\n+ Giải phẫu vùng cổ với cuộn dây Dedicated Carotid Coil chuyên dụng kết hợp SNAP mang lại giá trị lâm sàng đột phá.",
        citations: []
    },
    { 
        id: 1044, 
        en: "MDE / LGE (Late Gadolinium Enhancement)", 
        vi: "Ngấm thuốc muộn cơ tim", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Đợi 10-15 phút sau tiêm Gadolinium. Thuốc tan dần khỏi máu, rửa trôi khỏi cơ tim lành, nhưng mắc kẹt vĩnh viễn ở khoảng kẽ rộng lớn của dải cơ tim bị sẹo hoại tử (nhồi máu). Bắn xung Inversion đập chết từ hóa cơ tim bình thường về 0 (Đen kịt). Máu xám mờ. Tổn thương sẹo rực sáng chói lóa.\n\n- Tên gọi theo hãng: Siemens (LGE / IR-TrueFISP) | GE (MDE / MDE-FIESTA) | Philips (LGE / 3D TFE IR) | Canon (LGE) | Fujifilm (LGE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu chuẩn vàng sống còn phát hiện, định vị và định lượng % sẹo nhồi máu cơ tim (Viable myocardium).\n2. Chẩn đoán các bệnh lý cơ tim không do thiếu máu (Viêm cơ tim, Sarcoidosis, cơ tim phì đại).\n\n- Thông số / Tips:\n+ Thất bại hay không do việc chọn TI (Inversion Time) xóa cơ tim lành từ TI Scout. Chụp sai TI sẽ tạo ra ảnh mờ mịt vô giá trị.",
        citations: []
    },
    { 
        id: 1045, 
        en: "PSIR (Phase Sensitive Inversion Recovery)", 
        vi: "IR nhạy pha", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Giải quyết sự khó khăn rủi ro của LGE thường quy (lỡ chọn TI sai cơ tim không đen). PSIR thu nhận kèm thông tin pha cực tính (+ / - Mz) của từ hóa, duy trì ranh giới tương phản tuyệt đối mà không cần điểm 0 tuyệt đối.\n\n- Tên gọi theo hãng: Siemens (PSIR) | GE (PS-IR) | Philips (PSIR) | Canon (PSIR) | Fujifilm (PSIR).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tái tạo bản đồ cơ tim sẹo nhồi máu với tỷ lệ thành công 100%, khắc phục tình huống KTV chọn nhầm thời gian TI.\n2. Phân biệt rất rõ các dải ngấm thuốc vách liên thất do xơ hóa nhẹ.\n\n- Thông số / Tips:\n+ Thường sinh ra 2 loại ảnh: Ảnh Magnitude (IR thường) và Ảnh PSIR (Nền cơ tim xám tối, máu đen, sẹo trắng). Ưu tiên đọc chẩn đoán trên bộ PSIR.",
        citations: []
    },
    { 
        id: 1046, 
        en: "REAL IR", 
        vi: "Tái tạo IR thực", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Thuật toán tái tạo xử lý ảnh từ xung Inversion Recovery. Tín hiệu phục hồi cắt qua 0 thường bị thuật toán trị tuyệt đối (Magnitude) lật dương lên làm hai mô T1 khác nhau (nhưng đối xứng qua trục) có màu xám y hệt nhau. Real IR giữ nguyên giá trị âm thành màu siêu đen, tách bạch hai mô ra.\n\n- Tên gọi theo hãng: Siemens (True IR) | GE (Real IR) | Philips (Real IR) | Canon (Real IR) | Fujifilm (Real IR).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Dùng trong đánh giá tủy não trẻ sơ sinh đang phát triển (phân biệt chất xám/trắng siêu mờ).\n2. Xác nhận sụn bề mặt và các nang dịch nội tủy nhỏ li ti.\n\n- Thông số / Tips:\n+ Đặc thù màu nền của ảnh Real-IR trông hơi 'nhiễu muối tiêu' (noisy background) nhưng độ tương phản bờ viền tổn thương lại gắt và bén hơn.",
        citations: []
    },
    { 
        id: 1047, 
        en: "MP2RAGE", 
        vi: "3D T1 MPRAGE hai xung", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Gửi 1 xung chuẩn bị Inversion duy nhất nhưng đọc khối dữ liệu 3D ở 2 thời điểm TI khác nhau (Ví dụ TI1=700ms, TI2=2500ms). Ảnh 1 (T1 ngắn, nhiều nhiễu sóng RF). Ảnh 2 (PDW, ít nhiễu RF). Tích hợp toán học 2 ảnh tự triệt tiêu sự thiên lệch sóng RF B1, tạo ra một khối 3D T1 thuần khiết độc tôn.\n\n- Tên gọi theo hãng: Siemens (MP2RAGE) | GE (MP2RAGE) | Philips (MP2RAGE) | Canon (MP2RAGE) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chẩn đoán chi tiết vi cấu trúc, thể tích não bộ tại các máy MRI siêu trường (3T, 7T) - nơi xảo ảnh tối tâm/trung tâm não do sóng B1 yếu rất nghiêm trọng.\n2. Lập bản đồ T1 map sọ não phân giải cao.\n\n- Thông số / Tips:\n+ Nền khí (Air) quanh sọ não bị đẩy lên noise sáng lốm đốm, KTV cần tạo lớp mặt nạ (Masking) che nền để Bác sĩ không lóa mắt.",
        citations: []
    },
    { 
        id: 1048, 
        en: "T1-FLAIR / T1-Dark Fluid", 
        vi: "Xóa dịch T1", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Một biến tấu tinh tế của FLAIR. Thông thường xung T1 SE/TSE làm dịch não tủy có màu tối mờ (nhưng chưa đen hẳn). Bằng cách gắn thêm 1 xung Inversion với TI cực ngắn (~800-900ms tại 1.5T), dịch não tủy bị triệt tiêu hoàn toàn thành màu đen như hố sâu.\n\n- Tên gọi theo hãng: Siemens (T1-FLAIR / Dark Fluid) | GE (T1-FLAIR) | Philips (T1-FLAIR) | Canon (T1-FLAIR) | Fujifilm (T1-FLAIR).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Làm tương phản sắc nét ranh giới giữa vỏ não (chất xám), chất trắng và màng mềm, tăng khả năng phát hiện tổn thương củ viêm, loạn sản sát viền não thất.\n2. Nhìn rõ các cấu trúc mạch máu nội sọ.\n\n- Thông số / Tips:\n+ Cải thiện đánh kể độ nhạy T1W ở thì trước tiêm, nhưng ít dùng khi cần đánh giá ngấm thuốc do lo ngại xung Inversion xóa mất các tổn thương tiêm thuốc T1 ngắn.",
        citations: []
    },
    { 
        id: 1049, 
        en: "GRASE (Gradient and Spin Echo)", 
        vi: "Chuỗi xung lai GRASE", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Lai tạo hài hòa (Hybrid). Kẹp các chùm xung con Gradient Echo vào giữa các xung 180° Spin Echo trong một dãy Echo Train (TR). Nửa đầu thu k-space tốc độ siêu thanh như EPI, nửa sau thu độ sắc nét kháng nhiễu từ như FSE.\n\n- Tên gọi theo hãng: Siemens (TGSE) | GE (GRASE) | Philips (GRASE) | Canon (GRASE) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Ứng dụng chủ lực trong thu thập 3D T2W độ phân giải cao toàn não bộ/cột sống.\n2. Chụp T2 Map sụn khớp cực nhanh.\n3. Quét động học gan T2W (free-breathing).\n\n- Thông số / Tips:\n+ Có thể thay thế VISTA/SPACE trong trường hợp bệnh nhân rung lag nhẹ hoặc giới hạn SAR nhiệt cao ở máy 3T vì ít xung RF 180° hơn.",
        citations: []
    },
    { 
        id: 1050, 
        en: "EPIK", 
        vi: "EPI Keyhole", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phương pháp chia sẻ không gian k-space. Thu thập lõi tâm k-space (mang độ tương phản) dày đặc độ phân giải cao theo pha EPI, phần viền k-space (chi tiết hạt) thu thập thưa thớt (Keyhole) rồi trượt ngang qua các TR. Đạt giới hạn tốc độ và triệt tiêu méo hình.\n\n- Tên gọi theo hãng: Siemens (EPIK) | GE (N/A) | Philips (N/A) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Bước tiến mới cho Functional MRI (fMRI). Bắt dính các dải tín hiệu não mỏng manh ở nền sọ, vỏ não thái dương trước vốn thường bị nhòe bẹp trong fMRI cổ điển.\n\n- Thông số / Tips:\n+ Cho phép độ phân giải 1.5mm với thời gian quét Volume ngắn dưới 1.5 giây.",
        citations: []
    },
    { 
        id: 1051, 
        en: "PRESTO", 
        vi: "Xung chuyển dịch pha", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Principles of Echo Shifting with a Train of Observations. Phép màu đảo ngược vật lý: Cố tình kéo dãn tín hiệu dội (Echo) trượt khỏi chu kỳ RF TR hiện tại sang TR kích thích tiếp theo. Cho phép TE dài hơn TR một cách nghịch lý, đem lại hiệu ứng T2* nhạy từ khủng khiếp trên một chu kỳ TR siêu tốc độ.\n\n- Tên gọi theo hãng: Siemens (N/A) | GE (N/A) | Philips (PRESTO) | Canon (N/A) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Phân tích đặc quyền Perfusion DSC và fMRI siêu nhạy trên máy Philips. Trực quan hóa cực đỉnh sự co giãn mạch máu li ti khi suy nghĩ hoặc bơm Gado.\n\n- Thông số / Tips:\n+ Đặc sản của hệ sinh thái phần mềm Philips, cực hiếm thấy hoặc không phổ biến ở các hãng thiết bị khác.",
        citations: []
    },
    { 
        id: 1052, 
        en: "Keyhole Imaging", 
        vi: "Kỹ thuật lỗ khóa (Keyhole)", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Lõi công nghệ của mọi chuỗi động học (Dynamic). Ảnh Base (trước tiêm) được quét 100% k-space. Các pha Dynamic sau tiêm CHỈ thu thập vùng lõi (Keyhole - 20-30% giữa K-space). Phần mềm ghép rìa k-space của ảnh Base vào lõi ảnh Dynamic. Tốc độ thu nhận tăng vọt gấp 4-5 lần.\n\n- Tên gọi theo hãng: Siemens (TWIST) | GE (TRICKS) | Philips (Keyhole) | Canon (Keyhole) | Fujifilm (Keyhole).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Bí quyết đằng sau chuỗi CE-MRA bắt dính mọi pha Động mạch - Tĩnh mạch muộn trong tích tắc.\n\n- Thông số / Tips:\n+ Đòi hỏi bệnh nhân giữ nguyên một tư thế. Nếu bệnh nhân nhúc nhích sau khi chụp ảnh Base, toàn bộ các pha Keyhole ghép nối phía sau sẽ thành bức tranh ghép lỗi nhòe nhoẹt.",
        citations: []
    },
    { 
        id: 1053, 
        en: "CENTRA", 
        vi: "Lấy mẫu K-space theo đường xoắn trung tâm", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: K-space profile ordering. Trong các chuỗi quét 3D dài (20s), tín hiệu Gadolinium đạt đỉnh rồi sụt nhanh ở lòng mạch. CENTRA gom việc đọc các điểm trung tâm k-space (mang độ chói lóa nhất của mạch máu) lên đầu tiên ở thời điểm đỉnh thuốc, rồi mới từ từ quét các điểm k-space ngoại vi.\n\n- Tên gọi theo hãng: Siemens (Centric PE) | GE (Elliptic Centric) | Philips (CENTRA) | Canon (Centric) | Fujifilm (Centric).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Giải pháp vàng trong CE-MRA Động mạch nội sọ, MRA chủ chậu.\n2. Ngăn chặn hiện tượng 'mờ viền' (Venous Contamination) rò rỉ máu tĩnh mạch sớm.\n\n- Thông số / Tips:\n+ KTV phải thiết lập Smart-Prep/Test Bolus chính xác. Lệnh Trigger phát ra phải trùng sát (0s trễ) với thời điểm thuốc lấp đầy mạch máu để hưởng lợi ích của xung Centric.",
        citations: []
    },
    { 
        id: 1054, 
        en: "B-TFE / FIESTA", 
        vi: "Cân bằng TFE", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Gradient đa trục. Một nhánh riêng của bSSFP. Năng lượng được điều hòa duy trì tín hiệu từ hóa xoay vòng cân bằng ở tất cả các trục cắt X, Y, Z. Tín hiệu thu được là 'thuần khiết' dịch tự do.\n\n- Tên gọi theo hãng: Siemens (TrueFISP) | GE (FIESTA) | Philips (b-TFE) | Canon (TrueSSFP) | Fujifilm (BASG).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đặc sản của Philips, GE dùng thay thế T2W trong khảo sát thai nhi xoay trở nhanh, màng ối.\n2. Chụp MRI tim trục ngắn (Short-axis) độ phân giải cao.\n\n- Thông số / Tips:\n+ Chụp cực nhanh (0.5 giây / lát), có thể quét trôi liên tục không nín thở.",
        citations: []
    },
    { 
        id: 1055, 
        en: "Single-Shot FSE", 
        vi: "FSE đơn phát", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Quét 1 lần. Chém đứt thời gian TR chờ đợi. Tung 1 xung 90° kích thích, sau đó nã liên tục 128 - 256 xung 180° đọc trọn k-space của 1 lát cắt trong chưa tới 1 giây. Đóng đinh mọi di chuyển.\n\n- Tên gọi theo hãng: Siemens (HASTE) | GE (SS-FSE) | Philips (SSh-TSE) | Canon (FASE) | Fujifilm (SS-FSE).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Xung dẫn đường nền tảng tạo khối hình cây đường mật, cây đường niệu, dịch tủy Myelography dày.\n2. Siêu âm giả MRI cho chấn thương cấp ổ bụng trẻ nhỏ.\n\n- Thông số / Tips:\n+ Rất dễ bị hiện tượng 'J-coupling' làm mỡ tủy xương sáng rực như dịch, và 'T2 blurring' (mờ nhòe) do dải Echo dài làm rơi rụng tín hiệu T2 tự nhiên ở cuối chu kỳ.",
        citations: []
    },
    { 
        id: 1056, 
        en: "FIESTA-FatSat", 
        vi: "bSSFP xóa mỡ", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Kết dính khối bSSFP/TrueFISP với một mô-đun phá mỡ FatSat phổ hóa học lên phía trước. Ép từ hóa của mỡ rơi rụng trước khi hệ thống tạo sự cân bằng dịch, làm bật tung nền mô.\n\n- Tên gọi theo hãng: Siemens (TrueFISP FatSat) | GE (FIESTA-FatSat) | Philips (b-TFE SPIR) | Canon (TrueSSFP FatSat) | Fujifilm (BASG FatSat).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chẩn đoán viêm ruột thừa cấp tính ở thai phụ (Phân tách ruột thừa viêm trương nước giữa dải mỡ ổ bụng).\n2. Quét rễ thần kinh sọ hố sau không bị nhiễu do mỡ cạnh góc cầu tiểu não.\n\n- Thông số / Tips:\n+ Rất khó chịu khi làm việc trên môi trường từ trường yếu hoặc Shimming không tốt, dẫn đến các dải mỡ loang lổ và sọc Banding dày đặc.",
        citations: []
    },
    { 
        id: 1057, 
        en: "DRIVE / RESTORE", 
        vi: "Xung đẩy lùi (Driven Equilibrium)", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Trò ảo thuật rút ngắn thời gian TR. Chèn thêm một xung 90° 'lật ngược' ở ngay đoạn đuôi của chuỗi Echo train. Xung này bắt ép các Spin đang lang thang trở về trục Z dọc ngay lập tức (Cưỡng bức phục hồi - Driven). TR được phép thu ngắn lại cực độ.\n\n- Tên gọi theo hãng: Siemens (RESTORE) | GE (FRFSE) | Philips (DRIVE) | Canon (Fast Recovery) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Cung cấp ảnh T2W độ chói cao cho cột sống, sọ não ở tốc độ nhanh hơn, trong khi dịch não tủy vẫn trắng bóc, không bị xám xịt do TR ngắn.\n\n- Thông số / Tips:\n+ Rút ngắn thời gian quét T2 TSE thần kinh từ 3 phút xuống còn 1.5 phút với chất lượng tương đương.",
        citations: []
    },
    { 
        id: 1058, 
        en: "VISTA-SPAIR", 
        vi: "3D T2 xóa mỡ SPAIR", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Dung hợp lõi sức mạnh quét đẳng hướng VISTA (SPACE/CUBE) với khả năng chém mỡ thần sầu của xung Adiabatic Inversion SPAIR. Thách thức mọi khó khăn từ trường ở vùng cong xương bả vai, xương chậu.\n\n- Tên gọi theo hãng: Siemens (SPACE SPAIR) | GE (CUBE ASPIR) | Philips (VISTA SPAIR) | Canon (FASE3D SPAIR) | Fujifilm (isoFSE SPAIR).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tái tạo 3D rễ thần kinh đám rối cánh tay (Brachial Plexus), rễ thắt lưng chậu (Lumbosacral Plexus) xuyên thủng khối cơ bắp và mỡ dày đặc.\n2. Phân biệt tổn thương xâm lấn ung thư cổ tử cung 3D.\n\n- Thông số / Tips:\n+ Siêu nặng, chụp 6-8 phút. Yêu cầu bệnh nhân thở êm ái, bọc đệm quanh vai/chậu chống rung. MPR thần thánh giúp rà sát bó thần kinh chéo ngực.",
        citations: []
    },
    { 
        id: 1059, 
        en: "T2-MAP Cartilage", 
        vi: "Bản đồ T2 sụn khớp", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phiên bản T2 Mapping tinh chỉnh cho hệ xương sụn. Dùng cuộn dây Knee Coil nhiều kênh. Quét Multi-Echo Spin Echo phân giải cao. Sụn khỏe có hàm lượng collagen nén chặt (T2 ngắn), sụn thoái hóa đứt gãy collagen, trương nước (T2 dài hóa).\n\n- Tên gọi theo hãng: Siemens (T2 Map) | GE (CartiGram) | Philips (T2 Mapping) | Canon (T2 Map) | Fujifilm (T2 Map).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Chẩn đoán thoái hóa khớp gối siêu vi thể giai đoạn 0 (Trước khi bác sĩ thấy khuyết/mỏng bề mặt sụn trên phim MRI thường).\n\n- Thông số / Tips:\n+ Map màu: Đỏ là sụn trương nước cảnh báo thoái hóa, Xanh lục/lam là sụn rắn chắc. Hữu ích trong Y học thể thao, lập hồ sơ tiêm huyết tương giàu tiểu cầu (PRP).",
        citations: []
    },
    { 
        id: 1060, 
        en: "T1ρ (T1-rho) Cartilage", 
        vi: "Bản đồ T1-rho sụn", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Sử dụng kỹ thuật Spin-lock từ hóa. Nếu T2 Map đo lường sự tương tác Nước-Collagen, thì T1-rho nhạy bén độc quyền với sự tương tác Nước - Proteoglycan (PG) trong sụn. Suy giảm PG là phát súng đầu tiên khởi nguồn mọi thoái hóa khớp.\n\n- Tên gọi theo hãng: Siemens (T1rho) | GE (T1rho) | Philips (T1rho) | Canon (T1rho) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Công cụ chẩn đoán sớm nhất và mạnh mẽ nhất thế giới về thoái hóa sụn và tổn thương đĩa đệm cột sống, đi trước cả T2 Map.\n\n- Thông số / Tips:\n+ Chỉ ứng dụng trong nhóm dự án nghiên cứu lâm sàng (Research), chưa cấp phép rộng rãi thường quy do tốn thời gian và sinh nhiệt mô cao.",
        citations: []
    },
    { 
        id: 1061, 
        en: "Synthetic MRI (SyMRI / MAGiC)", 
        vi: "Cộng hưởng từ tổng hợp", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Phép màu của toán học lượng tử. KTV chỉ nhấn 1 nút chụp chuỗi MDME (Multi-Dynamic Multi-Echo) dài 5 phút. Máy đo 3 thuộc tính thuần túy: T1, T2 và Mật độ Proton (PD) của mỗi pixel. Từ thông số đó, phần mềm giả lập (tổng hợp) xuất ra T1W, T2W, FLAIR, STIR, PSIR theo ý muốn.\n\n- Tên gọi theo hãng: Siemens (Syngo.MRI) | GE (MAGiC) | Philips (SyntAcq) | Canon (Synthetic MRI) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Cứu rỗi bệnh nhân sợ lồng kín sọ não, nhi khoa. Thay vì chụp 5 xung mất 20 phút, nay chỉ mất 5 phút tạo ra trọn bộ MRI sọ não lâm sàng.\n2. Phân tích định lượng tự động thể tích myelin, chất trắng, chất xám.\n\n- Thông số / Tips:\n+ Bác sĩ được phép trượt thanh trượt TR, TE, TI ngay trên máy trạm để chủ động biến đổi tương phản ảnh sau khi bệnh nhân đã đi về. Xảo ảnh dòng chảy đôi lúc mờ nhòe hơn MRI thật.",
        citations: []
    },
    { 
        id: 1062, 
        en: "Myelin Water Imaging", 
        vi: "Hình ảnh nước Myelin", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Bóc tách tín hiệu nước. Trong mô thần kinh, nước tồn tại ở 3 dạng: Dịch tự do (CSF - T2 dài > 2000ms), Nước nội/ngoại bào mô (T2 ~ 80ms), Nước kẹp cực chặt giữa các lớp màng vỏ Myelin bao bọc sợi trục (T2 siêu siêu ngắn 10-20ms). MWI thu nhận Multi-Echo và trích lọc riêng tín hiệu ngắn tẹo này.\n\n- Tên gọi theo hãng: Siemens (MWI) | GE (MWI) | Philips (mDixon-MWI) | Canon (MWI) | Fujifilm (MWI).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Định lượng trực tiếp hàm lượng bao Myelin (Myelin Water Fraction - MWF). Thước đo vàng chẩn đoán xơ cứng rải rác (Multiple Sclerosis) và đo tiến độ phục hồi, sinh trưởng myelin ở trẻ em.\n\n- Thông số / Tips:\n+ Chỉ dùng cho Não và Tủy sống trung ương. Có độ tương quan trực tiếp đến sinh thiết mô bệnh học tế bào.",
        citations: []
    },
    { 
        id: 1063, 
        en: "APT (Amide Proton Transfer)", 
        vi: "Chuyển giao Proton Amide", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Kỹ thuật CEST nhắm tới các liên kết Amide trong các protein và peptide tự do lơ lửng trong mô sinh học. Máy quét RF phá vỡ bão hòa tần số (+3.5 ppm) của nhóm Amide, khiến chúng truyền proton sang nước, làm giảm tín hiệu của nước. Tạo bản đồ APT màu.\n\n- Tên gọi theo hãng: Siemens (APTw) | GE (APT) | Philips (APTw) | Canon (APT) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Phân biệt khối u thần kinh đệm tái phát (Mật độ Protein mô cực cao - APT sáng/đỏ rực) với vùng mô não hoại tử do tia xạ (Ít Protein - APT tối).\n\n- Thông số / Tips:\n+ Một trong những dấu ấn sinh học nội sinh tiên tiến nhất. Cần xử lý B0/B1 correction trên máy trạm siêu trường (3T trở lên).",
        citations: []
    },
    { 
        id: 1064, 
        en: "CEST Imaging", 
        vi: "Chuyển giao bão hòa trao đổi hóa học", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Mẹ đẻ của APT. Kỹ thuật đánh lừa cộng hưởng từ. Thay vì đo nước trực tiếp, ta dùng sóng RF dập bão hòa liên tục vào tần số của một nhóm sinh hóa (Glucose, Glutamate, Glycosaminoglycan). Proton từ nhóm đó liên tục trao đổi sang nước, làm giảm lượng từ hóa của nước. Thu lại mức sụt giảm này để nội suy ra nồng độ chất cần đo.\n\n- Tên gọi theo hãng: Siemens (CEST) | GE (CEST) | Philips (CEST) | Canon (CEST) | Fujifilm (CEST).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Đo nồng độ Glutamate ở bệnh nhân động kinh, tâm thần phân liệt.\n2. Tiêm đường Glucose vào mạch máu làm chất đối quang từ sinh học không độc thay cho Gadolinium (GlucoCEST) đo chuyển hóa u não.\n\n- Thông số / Tips:\n+ Giải quyết điểm yếu của MRS (độ phân giải kém). CEST tạo ra bản đồ hóa học chất lượng cao như ảnh MRI giải phẫu.",
        citations: []
    },
    { 
        id: 1065, 
        en: "MR Elastography (MRE)", 
        vi: "Siêu âm đàn hồi cộng hưởng từ", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Kết nối một thiết bị đánh nhịp rung (Pneumatic Driver) vào thành bụng bệnh nhân, truyền các dải sóng cơ học vào mô gan. Cùng lúc, chuỗi xung Phase Contrast (Motion-sensitized) chụp chụp sự lan truyền của sóng đàn hồi 3D này. Cấu trúc càng cứng (xơ hóa), bước sóng lan truyền càng dài và nhanh.\n\n- Tên gọi theo hãng: Siemens (MR Elastography) | GE (MR Touch) | Philips (MR Elastography) | Canon (MR Elastography) | Fujifilm (N/A).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Tiêu chuẩn vàng tuyệt đối (Không xâm lấn) chẩn đoán độ xơ gan theo thang điểm Metavir F1-F4. Tránh sinh thiết gan đẫm máu.\n2. Phân tích độ xơ hóa của ung thư biểu mô tế bào gan (HCC) hoặc thận.\n\n- Thông số / Tips:\n+ Đòi hỏi module phần cứng chuyên biệt áp sát người. Bản đồ đàn hồi định lượng Elastogram trả kết quả số liệu cực nét (Đơn vị Kilopascals - kPa).",
        citations: []
    },
    { 
        id: 1066, 
        en: "Silent Scan / Quiet Suite", 
        vi: "Chụp MRI chống ồn", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Loại bỏ thủ phạm gây tiếng gầm rú đinh tai nhức óc (110 dB) ở máy MRI: Sự bật tắt, lật chiều Gradient quá nhanh. Silent Suite ép đường cong (slew rate) gradient vận hành thật mượt mà, tĩnh lặng và chuyển sang quét UTE/ZTE 3D (thu dữ liệu bằng không TE).\n\n- Tên gọi theo hãng: Siemens (Quiet Suite) | GE (Silent Scan) | Philips (ComforTone) | Canon (Pianissimo) | Fujifilm (SoftSound).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Giải cứu chụp MRI sọ não cho trẻ em, trẻ sơ sinh đang ngủ say tự nhiên, bệnh nhân sợ tiếng ồn hoặc phụ nữ mang thai.\n2. Chụp T1W, T2W, MRA TOF sọ não trong môi trường âm thanh chỉ lớn như tiếng nói chuyện rì rào (Ambient noise ~ 75dB).\n\n- Thông số / Tips:\n+ Cứu tinh của giấc ngủ trẻ nhũ nhi. Đánh đổi lại là thời gian chụp sẽ kéo dài hơn so với xung thường quy.",
        citations: []
    },
    { 
        id: 1067, 
        en: "iPAT2 (2D GRAPPA)", 
        vi: "Chụp song song đa chiều", 
        type: "Sequence", 
        description: "Nguyên lý vật lý: Tận dụng hình học của hệ cuộn dây ma trận (Matrix Coil). Quét thưa k-space theo cả 2 trục Y (mã hóa pha) và Z (hướng cắt lát) trong một khối quét 3D. Các khoảng rỗng dữ liệu được tự nội suy lấp đầy cực đỉnh nhờ thông tin vị trí các điểm cuộn dây RF.\n\n- Tên gọi theo hãng: Siemens (iPAT2 / GRAPPA) | GE (ARC 2D) | Philips (SENSE 2D) | Canon (SPEEDER 2D) | Fujifilm (RAPID 2D).", 
        parameters: "- Ứng dụng lâm sàng:\n1. Áp dụng cốt lõi đẩy siêu tốc VIBE động học gan mật rút ngắn thời gian nín thở từ 25 giây (khó khăn) xuống chỉ còn 8-10 giây (dễ dàng).\n2. Quét MRA mạch máu độ phân giải không tưởng mà không lo bệnh nhân vặn vẹo.\n\n- Thông số / Tips:\n+ Gắn iPATx2 ở Phase và iPATx2 ở Slice = Tổng tốc độ tăng lên 4 lần. Phụ thuộc tuyệt đối vào mật độ phân bổ các mắt kênh (channel) của Cuộn thân (Body Coil).",
        citations: []
    }
];
