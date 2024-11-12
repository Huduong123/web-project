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


];

export default items;