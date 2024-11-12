let items = [
  
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
];

export default items;