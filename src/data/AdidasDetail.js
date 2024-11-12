let items = [
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
];

export default items;