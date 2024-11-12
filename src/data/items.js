let items = [
  {
    id: 1,
    name: "AIR JORDAN 4 RM",
    image: require("@/assets/Nike/AIR+JORDAN+4+RM.jpg"),
    description: "\n- Chúng tôi tập trung vào sự thoải mái và độ bền trong khi vẫn giữ được vẻ ngoài truyền thống mà bạn yêu thích."
                  +"\n- Max Air ở gót giày đệm cho mọi bước đi của bạn, và các thành phần của phần trên cánh, dây đeo và gót giày được kết hợp thành một chiếc lồng chắc chắn, linh hoạt bao quanh đôi giày để tăng thêm độ bền cho việc đi lại hàng ngày của bạn\n",
    price: 4109000,
    quality: 5,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 2,
    name: "Air Jordan 1 Low",
    image: require("@/assets/Nike/AIR+JORDAN+1+LOW.jpg"),
    description: "\n- Lấy cảm hứng từ phiên bản gốc ra mắt năm 1985, Air Jordan 1 Low mang đến vẻ ngoài sạch sẽ, cổ điển, quen thuộc nhưng luôn mới mẻ. Với thiết kế mang tính biểu tượng kết hợp hoàn hảo với mọi 'fit', đôi giày này đảm bảo bạn sẽ luôn đúng phong cách.\n",
    price: 3239000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 3,
    name: "Luka 3 PF",
    image: require("@/assets/Nike/JORDAN+LUKA+3+PF.jpg"),
    description: "\n- Được thiết kế để giúp bạn tạo không gian thông qua khả năng tăng tốc, Luka 3 có lớp bọt Cushlon 3.0 toàn chiều dài để chuyển tiếp từ gót chân sang ngón chân một cách mượt mà. Một tấm đế chắc chắn nhưng linh hoạt dưới chân mang lại khả năng ngăn chặn bên, giúp bạn thoát khỏi bước lùi để tấn công rổ.\n",
    price: 3829000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 4,
    name: "Air Jordan 1 Mid",
    image: require("@/assets/Nike/AIR+JORDAN+1+MID.png"),
    description: "\n- Được lấy cảm hứng từ AJ1 nguyên bản, phiên bản cổ giữa này vẫn giữ nguyên vẻ ngoài mang tính biểu tượng mà bạn yêu thích trong khi màu sắc lựa chọn và chất liệu da bền chắc mang đến cho nó bản sắc riêng biệt.\n",
    price: 3669000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 5,
    name: "Jumpman MVP",
    image: require("@/assets/Nike/JORDAN+MVP.png"),
    description: "\n- Chúng tôi đã lấy các yếu tố từ AJ6, 7 và 8, biến chúng thành một đôi giày hoàn toàn mới để kỷ niệm lần đầu tiên MJ vô địch 3 lần. Với các chi tiết bằng da, vải và da lộn, đôi giày thể thao này tôn vinh một di sản đồng thời khuyến khích bạn củng cố di sản của riêng mình.\n",
    price: 3151849,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 6,
    name: "Zion 3 'Rising' PF",
    image: require("@/assets/Nike/JORDAN+ZION+3+NRG+PF.png"),
    description: "\n- Phiên bản Zion 3 này, với hiệu ứng chuyển màu gradient mơ màng, truyền tải năng lượng đến với mỗi ngày mới. Và công nghệ hiệu suất cung cấp cho bạn sự hỗ trợ cần thiết khi xuống thấp và lên cao.\n",
    price: 3086299,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 7,
    name: "Jordan Stay Loyal 3",
    image: require("@/assets/Nike/JORDAN+STAY+LOYAL+3.jpg"),
    description: "\n-  Bên trong và bên ngoài, chúng được thiết kế để linh hoạt, với vẻ ngoài tối giản, đệm như mây và các yếu tố thiết kế giống với AJ4. Nói cách khác, phong cách với sức mạnh bền bỉ đã được chứng minh.\n",
    price: 2695199,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 8,
    name: "Air Jordan XXXIX PF",
    image: require("@/assets/Nike/AIR+JORDAN+XXXIX+PF.jpg"),
    description: "\n- Trước khi MJ bước vào sân với màu đỏ và đen, anh ấy đã thực hiện những cú nhảy giành chức vô địch khi mặc trang phục màu xanh và trắng. Chúng tôi đang kỷ niệm những ngày tháng đại học của MJ với màu xanh sắc nét đến mức có thể trông đẹp hơn ngày nay so với 40 năm trước.\n",
    price: 5869000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 9,
    name: "Jordan Max Aura 6",
    image: require("@/assets/Nike/JORDAN+MAX+AURA+6.jpg"),
    description: "\n- Đây là sản phẩm tốt nhất của AJ14, bao gồm phần trên chần bông, đế giữa không thể nhầm lẫn và lỗ xỏ dây ẩn, được phối lại thành một thiết kế mới ưu tiên sự thoải mái khi đệm. Như một nét hoàn thiện, huy hiệu Jumpman của AJ14 hợp pháp hóa vẻ ngoài của bạn.\n",
    price: 3829000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 10,
    name: "Jordan Spizike Low Paris Saint-Germain",
    image: require("@/assets/Nike/JORDAN+SPIZIKE+LOW+PSG.png"),
    description: "\n- Jordan và Paris Saint-Germain lại hợp tác lần nữa, lần này là để cập nhật Jordan Spizike Low. Lấy các yếu tố từ 5 đôi Jordan cổ điển, đôi giày cổ thấp này kết hợp các chi tiết thương hiệu di sản để tạo nên một đôi giày thể thao mang tính biểu tượng.\n",
    price: 4999000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 11,
    name: "Adidas Jabbar Low",
    image: require("@/assets/Adidas/Adidas_Jabbar_low.jpg"),
    description: "\n- Một chút retro, đậm chất nguyên bản. Khoác lên mình phong cách huyền thoại vốn được thiết kế dành cho một trong những cầu thủ bóng rổ xuất sắc nhất. Đôi giày adidas cổ thấp này làm từ chất liệu da mượt mà, dễ dàng đồng hành cùng bạn từ sân bóng rổ đến buổi đi chơi cuối tuần. \n",
    price: 2400000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 12,
    name: "Adidas CAMPUS 00S",
    image: require("@/assets/Adidas/AdidasCampusOK.jpg"),
    description: "\n- Giày Campus 00s là sự kết hợp hoàn hảo giữa phong cách cổ điển của những năm 2000 và thiết kế hiện đại, mang đến cho bạn một đôi giày thời trang đầy cá tính và tiện dụng. Được thiết kế dành riêng cho những người yêu thích sự đơn giản nhưng không kém phần nổi bật, Campus 00s hứa hẹn sẽ là lựa chọn lý tưởng để hoàn thiện bộ trang phục hàng ngày của bạn.\n",
    price: 2600000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 13,
    name: "Adidas SL 72 OG",
    image: require("@/assets/Adidas/SL72OGDen.jpg"),
    description: "\n- Tôn vinh di sản thể thao adidas, đôi giày SL 72 OG này là lựa chọn hoàn hảo để tô điểm phong cách retro cho outfit leisurewear của bạn. Thiết kế này đã được cải biên để mặc hàng ngày với kiểu dáng có chút khác biệt và phối màu mới mẻ.\n",
    price: 2400000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 14,
    name: "Adidas Superstar XLG",
    image: require("@/assets/Adidas/SuperStarRed.jpg"),
    description: "\n- Đôi giày adidas Superstar XLG này gợi nhớ phong cách bóng rổ thập niên 80 với chi tiết gót giày táo bạo lấy cảm hứng từ những chiếc áo đấu cổ điển. Miếng trang trí dây giày màu bạc tô điểm nét bóng bẩy cho thân giày hoàn toàn bằng da, mang đến cho bạn phong cách bóng rổ kể cả khi rời sân. Bạn sẽ luôn có được cảm giác thoải mái nhờ đế giữa EVA toàn phần. \n",
    price: 2100000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 15,
    name: "Adidas Stan Smith CS",
    image: require("@/assets/Adidas/Stan_Smith_Vang.jpg"),
    description: "\n-Dòng giày adidas Stan Smith tiếp tục khoe trọn thiết kế kinh điển đồng thời khoác lên mình những gam màu mới và nét biến tấu hiện đại. \n",
    price: 1250000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 16,
    name: "Adidas Giày Cổ Thấp Forum",
    image: require("@/assets/Adidas/ForumXanh.jpg"),
    description: "\n- Không chỉ là một đôi giày, mà chính là một tuyên ngôn. Dòng adidas Forum ra mắt năm 1984 và cực kỳ được ưa chuộng cả trên sân bóng rổ lẫn trong giới âm nhạc. Mẫu mới của dòng giày kinh điển này tái hiện tinh thần thập niên 80, nguồn năng lượng bùng nổ trên sân đấu cũng như thiết kế quai cổ chân chữ X đặc trưng, kết tinh thành phiên bản cổ thấp đậm chất đường phố.\n",
    price: 1820000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 17,
    name: "Adidas Handball Spezial",
    image: require("@/assets/Adidas/HandBallXanh.jpg"),
    description: "\n- Là phiên bản retro của một thiết kế cổ điển đến từ adidas, đôi giày Handball Spezial này vốn dành cho các môn thể thao trong nhà. Thân giày bằng da mượt mà mang lại cảm giác cao cấp và hơi hướng vintage, cùng đế cupsole bằng cao su tạo độ bám và độ bền. 3 Sọc răng cưa với các điểm nhấn màu sắc nâng tầm outfit của bạn.\n",
    price: 2500000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 18,
    name: "Adidas Gazelle Indoor",
    image: require("@/assets/Adidas/GazelleDo.jpg"),
    description: "\n- Đôi giày adidas Gazelle Indoor này mang đến cho bạn cảm giác thoải mái và phong cách retro, với thân giày bằng da lộn cao cấp và 3 Sọc hai màu. Ban đầu vốn là một mẫu giày tập bóng đá trong nhà, đôi giày này tôn vinh hành trình dài mà Gazelle đã chinh phục kể từ khi ra mắt.\n",
    price: 2900000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 19,
    name: "Adidas ADIZERO PR",
    image: require("@/assets/Adidas/ADIZEROWHITE.jpg"),
    description: "\n- Adidas Adizero PR là dòng giày chạy bộ cao cấp của Adidas, được thiết kế dành riêng cho những vận động viên đam mê tốc độ và hiệu suất. Với công nghệ tiên tiến và thiết kế tối ưu, Adizero PR mang đến trải nghiệm chạy bộ tuyệt vời, giúp bạn đạt được thành tích tốt nhất.\n",
    price: 3000000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 20,
    name: "Adidas Response CL",
    image: require("@/assets/Adidas/CLGrey.jpg"),
    description: "\n- Đôi giày adidas Response CL này có cấu trúc được xây dựng lấy cảm hứng từ những người chạy địa hình. Đế giữa mềm, nhẹ giúp bạn thoải mái ngay cả trong những buổi nấu ăn ngoài trời vất vả nhất.\n",
    price: 1650000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },

  {
    id: 21,
    name: "FuelCell Rebel v4",
    image: require("@/assets/NewBalance/FuelCell3.jpg"),
    description: "\n- ổi loạn theo tên gọi, nổi loạn theo bản chất, FuelCell Rebel v4 sẽ thay đổi cách bạn nhìn nhận một đôi giày tập luyện hàng ngày. Cảm giác đẩy của công nghệ FuelCell tạo ra một phản ứng đáng kinh ngạc dưới chân có thể nhanh chóng thích ứng từ những lần chạy dài, đều đặn sang những lần chạy ngắn hơn và tự phát hơn\n",
    price: 2800000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 22,
    name: "Fresh Foam X More v5",
    image: require("@/assets/NewBalance/FreshFoam3.jpg"),
    description: "\n- Được thiết kế để mang lại cảm giác êm ái nhưng vẫn ổn định khi chạm chân với sự thoải mái 360 độ.\n",
    price: 3100000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 23,
    name: "MR530",
    image: require("@/assets/NewBalance/5303.jpg"),
    description: "\n- 530 được giới thiệu lại áp dụng phong cách đương đại, hàng ngày cho thiết kế chú trọng hiệu suất này. Đế giữa ABZORB phân đoạn được kết hợp với thiết kế mặt trên bằng lưới và tổng hợp cổ điển, sử dụng các đường cong và góc quét để tạo nên vẻ ngoài công nghệ cao đặc biệt.\n",
    price: 1999000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 24,
    name: "1906R",
    image: require("@/assets/NewBalance/19063.jpg"),
    description: "\n- 906R, giống như những người anh em họ của nó là 2002R và 860v2, được dẫn dắt bởi một đơn vị duy nhất có sự kết hợp giữa đệm ACTEVA LITE linh hoạt, N-ergy hấp thụ sốc và các pod ABZORB SBS phân đoạn ở gót chân. Cách tiếp cận công nghệ cao này cũng được phản ánh trong thiết kế phần trên của 1906R, có lưới hở lỗ và một loạt các lớp phủ tổng hợp cong.\n",
    price: 3200000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 25,
    name: "990v6",
    image: require("@/assets/NewBalance/9904.jpg"),
    description: "\n- New Balance 990v6 là sự lựa chọn hoàn hảo cho những ai tìm kiếm một đôi giày vừa thời trang, vừa thoải mái và bền bỉ. Với thiết kế tinh tế, chất liệu cao cấp và công nghệ hỗ trợ tiên tiến, 990v6 không chỉ là một đôi giày thể thao mà còn là một phụ kiện thời trang đẳng cấp, phù hợp với nhiều hoàn cảnh sử dụng.\n",
    price: 3900000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 26,
    name: "480",
    image: require("@/assets/NewBalance/4802.jpg"),
    description: "\n- Lấy cảm hứng từ BB680 nguyên bản – được các vận động viên chuyên nghiệp sử dụng trong thi đấu – chúng tôi đã tái tạo một sản phẩm kinh điển vượt thời gian với vẻ ngoài đơn giản và sạch sẽ. Trên 480, da kết hợp với miếng chèn Ortholite mang lại sự thoải mái và ổn định toàn diện, suốt cả ngày dài.\n",
    price: 1800000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 27,
    name: "9060",
    image: require("@/assets/NewBalance/90602.jpg"),
    description: "\n- 9060 là một biểu hiện mới của phong cách tinh tế và thiết kế sáng tạo của dòng 99X cổ điển. 9060 tái hiện các yếu tố 99X quen thuộc với một cảm giác cong vênh lấy cảm hứng từ thẩm mỹ công nghệ tương lai, hữu hình đáng tự hào của kỷ nguyên Y2K.\n",
    price: 3210000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 28,
    name: "TCS NYC Marathon® Fresh Foam X 1080v14",
    image: require("@/assets/NewBalance/10801.jpg"),
    description: "\n- Được thiết kế cho giải TCS New York City Marathon®, Fresh Foam X 1080v14 có thiết kế hiện đại, cập nhật với công nghệ cao cấp để mang đến cảm giác lái mượt mà nhất trên đường.\n",
    price: 3500000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 29,
    name: "Fresh Foam 3000v7 Molded",
    image: require("@/assets/NewBalance/30001.jpg"),
    description: "\n- Fresh Foam 3000v7 Molded là lựa chọn lý tưởng cho những ai tìm kiếm một đôi giày thể thao vừa thoải mái, vừa hiệu suất cao và thiết kế thời trang. Với công nghệ đệm Fresh Foam tiên tiến, chất liệu cao cấp và thiết kế tinh tế, đôi giày này không chỉ hỗ trợ tối ưu cho các hoạt động thể thao mà còn là phụ kiện thời trang hoàn hảo cho mọi hoàn cảnh.\n",
    price: 1650000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 30,
    name: "Prodigy",
    image: require("@/assets/NewBalance/FB2.jpg"),
    description: "\n- Giày bóng bầu dục Prodigy hoàn toàn mới được thiết kế dành riêng cho những cầu thủ chơi ở vị trí kỹ năng của trò chơi, những người có thể biến phản ứng trong tích tắc - một sự không phù hợp về phạm vi bảo vệ hoặc một đường chuyền hỏng - thành những pha chơi thay đổi trò chơi.\n",
    price: 3330000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 31,
    name: "Biti’s Hunter X LiteDash ",
    image: require("@/assets/Bitis/HLDXanh.jpg"),
    description: "\nBộ đế LiteDash:\n"+
     "    - Cải tiến với đế 2 lớp phylon cao su êm, bền, chặt"
     + " \n - Cao 5cm hack dáng tự tin, dễ dàng phối mọi outfit."
     +"\nUpper da tổng hợp cao cấp:"
     +"\n- Form giày chắc chắn, dễ vệ sinh."     
     +"\nĐế lót Massage 6 điểm: "   
     +"\n- Kháng khuẩn, nhẹ êm.."   
     +"\nĐa dạng màu sắc:"  
     +"\n- Dễ dàng chọn lựa & phù hợp mọi phong cách."  ,
    price: 1050000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 32,
    name: "Hunter Running LiteDual",
    image: require("@/assets/Bitis/HRLDcam.jpg"),
    description: "\nCông nghệ LiteDual:\n"+
     "   - Bộ đế 2 lớp phylon kết hợp cao su cao cấp"
     + " \n . Lớp đệm (Cushioning layer) mềm nhẹ, tạo độ êm chân"
     +"\n. Lớp cứng (Stiffening layer) tăng độ cứng cho đế giữa, tạo độ nảy cho bước chạy"
     +"\n- Đế ngoài cao su cùng công nghệ co-molding tiên tiến hạn chế bong tróc."     
     +"\nLót đế nâng đỡ lòng bàn chân Active Support: "   
     +"\n- Định hình tiếp đất, ổn định bước chạy, hạn chế xô lệch cổ chân."   
     +"\nUpper Airmesh kết hợp Jacquard cùng công nghệ ép nosew: "  
     +"\n- Thoáng khí, ôm chân, chống giãn và bền chặt." 
     +"\nTrọng lượng siêu nhẹ:" 
     +"\n- Chỉ 300g mỗi chiếc, mang đến sự nhẹ nhàng, thoải mái tuyệt đối."  ,
    price: 1237000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 33,
    name: "Hunter Street",
    image: require("@/assets/Bitis/HunterStreetCam.jpg"),
    description: "\nGiày Thể Thao Nam Hunter Street DSMH10400 đang là dòng sản phẩm giày dành riêng cho phái nam được nhiều khách hàng đánh giá cao về thiết kế và chất lượng",
    price: 742000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 34,
    name: "Hunter Layered Upper",
    image: require("@/assets/Bitis/HLUDen.jpg"),
    description: "\n- Để luyện tập thể thao tốt thì chúng ta cần phải tìm được đôi giày đơn giản và phù hợp với mình. "+
    "\n- Giày thể thao cao cấp nam Biti's Hunter Layered Upper DSMH02800 là một trong mẫu giày nổi tiếng về cá tính và được sản xuất trên công nghệ hiện đại bậc nhất. Giày được thiết kế giúp hạn chế tối đa thương thích và đảm bảo sự cân bằng, độ bền bỉ khi di chuyển.",
    price: 894000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 35,
    name: "Hunter STREET FESTIVE: FERIA",
    image: require("@/assets/Bitis/HSFFNau.jpg"),
    description: "\n- Giày Thể Thao Nam Biti's Hunter Street HSM004700 là một trong những sản phẩm dành riêng cho phái mạnh được đông đảo khách hàng Việt Nam yêu thích. \n"+
    "\n- Không chỉ bởi thiết kế đẹp mắt và thời trang, đôi giày để lại ấn tượng khác biệt vì chất lượng, màu sắc và giá thành.",
    price: 673000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 36,
    name: "BSM001100",
    image: require("@/assets/Bitis/BSMTrang.jpg"),
    description: "\n- Giày Thể Thao Nam Biti's BSM001100 là một trong những mẫu thiết kế nổi bật nhất của nhà Biti’s.\n"+
    "\n- Với thiết kế sang trọng, tinh tế, ẩn chứa sự mạnh mẽ và nam tính. Thiết kế chắc chắn sẽ là mẫu giày tuyệt vời dành cho phái mạnh.",
    price: 752000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 37,
    name: "Hunter Football HSM003600",
    image: require("@/assets/Bitis/HFHSMDo.jpg"),
    description: "\n- Biti’s Hunter Football HSM003600 là đôi giày bóng đá được thiết kế đặc biệt với đế cao su chuyên dụng, mang lại độ bám và sự ổn định tuyệt vời trên sân cỏ.\n"+
    "\n- Chất liệu nhẹ, thoáng khí giúp đôi chân luôn khô ráo, trong khi phần lót êm ái bảo vệ chân khỏi chấn động",
    price: 618000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 38,
    name: "Hunter Football Futsal DSMH11100",
    image: require("@/assets/Bitis/DSMHXanh.jpg"),
    description: "\n- Biti’s Hunter Football Futsal DSMH11100 là sự lựa chọn lý tưởng cho những ai yêu thích futsal, kết hợp giữa công nghệ, thiết kế và hiệu suất, giúp bạn chơi tốt hơn và tự tin hơn trên sân.\n",
    price: 688000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 39,
    name: "Hunter Football DSMH09600 Cam",
    image: require("@/assets/Bitis/DSMHCam.jpg"),
    description: "\n- Giày bóng đá nam Biti's Hunter Football DSMH09600 là một trong những sản phẩm phục vụ các tuyển thủ ra sân với niềm đam mê và hứa hẹn sẽ làm hài lòng các chân sút. Điểm nổi bật của mẫu giày này là thiết kế cổ cao, ôm cổ chân hơn, khả năng co giãn giúp bạn di chuyển linh hoạt và phòng tránh chấn thương lật cổ chân vô cùng hiệu quả.\n",
    price: 716000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
  {
    id: 40,
    name: "Hunter Football DSMH09600 Xanh",
    image: require("@/assets/Bitis/DSMHXanh.jpg"),
    description: "\n- Giày bóng đá nam Biti's Hunter Football DSMH09600 là một trong những sản phẩm phục vụ các tuyển thủ ra sân với niềm đam mê và hứa hẹn sẽ làm hài lòng các chân sút. Điểm nổi bật của mẫu giày này là thiết kế cổ cao, ôm cổ chân hơn, khả năng co giãn giúp bạn di chuyển linh hoạt và phòng tránh chấn thương lật cổ chân vô cùng hiệu quả.\n",
    price: 716000,
    quality: 10,
    sizes: ["40", "41", "42", "43", "44"]
  },
];

export default items;
