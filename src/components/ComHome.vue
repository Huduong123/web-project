<template>
  <div class="home-container">
    <h1 class="home-title">Chạm đến đam mê - Giày đẹp, bước chất</h1>
    <p class="home-description">Khám phá các sản phẩm thể thao tuyệt vời.</p>
    <div class="carousel">
      <img v-for="(image, index) in carouselImages" :key="index" :src="image" alt="Carousel Image" class="carousel-image" />
    </div>
    
    <div class="products-container">
      <div v-for="item in filterproduct" :key="item.id" class="product">
        <router-link 
          :to="{ name: 'ProductDetail', params: { id: item.id } }" 
          class="product-link" 
          @click="scrollToTop"
        >
          <img :src="item.image" alt="Hình sản phẩm" class="product-image" /> 
          <h2>{{ item.name }}</h2> 
          <p>{{ item.price }} VND</p> 
          <p>Số lượng: {{ item.quality }}</p>
        </router-link>
      </div>
    </div>

    <p>{{ currentpage }} of {{ totalpage }}</p>

    <div class="pagination-buttons">
      <button @click="changepage(currentpage - 1)" :disabled="currentpage === 1">Trang trước</button>
      <button @click="changepage(currentpage + 1)" :disabled="currentpage === totalpage">Trang tiếp theo</button>
    </div>
  </div>
</template>

<script>
import banner1 from '@/assets/Home/bannerNike.jpg';
import banner2 from '@/assets/Home/banner22.jpg';
import banner3 from '@/assets/Home/Banner3.jpg';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      carouselImages: [banner1, banner2, banner3],
      currentpage: 1,
      limit: 10
    };
  },
  computed: {
    ...mapGetters(['products']),
    totalpage() {
      return Math.ceil(this.products.length / this.limit);
    },
    filterproduct() {
      const start = (this.currentpage - 1) * this.limit;
      const end = start + this.limit;
      return this.products.slice(start, end);
    }
  },
  methods: {
    ...mapActions(['fetdataProduct']),
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    changepage(page) {
      if (page >= 1 && page <= this.totalpage) {
        this.currentpage = page;
      }
    }
  },
  created() {
    this.fetdataProduct();
  }
};
</script>


<style>
.home-container {
  padding: 60px 20px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #f4f4f9;
  font-family: 'Arial', sans-serif;
}

.pagination-buttons {
  display: flex;
  justify-content: center;
  gap: 1400px; /* Khoảng cách giữa hai nút */
  align-items: center;
  margin-top: 20px;
  padding: 0 100px;
}


.carousel {
  display: flex;
  overflow-x: auto; 
  scroll-snap-type: x mandatory; 
  margin-bottom: 30px; /* Khoảng cách dưới carousel */
  position: relative; /* Để chứa hình ảnh một cách chính xác */
}

.carousel-image {
  width: 100vw; /* Chiều rộng hình ảnh là 100% chiều rộng màn hình */
  height: auto; /* Giới hạn chiều cao hình ảnh để ngắn lại */
  object-fit: cover; /* Đảm bảo hình ảnh bao phủ đầy khung nhưng vẫn giữ cân đối */
  flex-shrink: 0; /* Ngăn hình ảnh co lại */
}
.home-title {
  font-size: 2.4rem;
  font-weight: bold;
  color: #333; /* Màu đen đậm */
  margin-bottom: 20px;

  letter-spacing: 2px; /* Tăng khoảng cách giữa các chữ */
}

.home-description {
  font-size: 1.2rem;
  color: #444; /* Màu đen nhạt hơn cho phần mô tả */
  margin-bottom: 30px;
  font-style: italic; /* Chữ nghiêng tạo cảm giác nhẹ nhàng */
}
.products-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5 sản phẩm mỗi hàng */
  gap: 20px; /* Khoảng cách giữa các sản phẩm */
  justify-items: center; /* Căn giữa các sản phẩm trong mỗi ô */
}

.product {
  flex: 0 0 200px;
  width: 100%; /* Để sản phẩm chiếm hết chiều rộng cột */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  background-color: #fff;
}

.product img {
  width: 100%;
  height: 280px; /* Tăng kích thước hình ảnh sản phẩm */
  object-fit: contain;
  transition: transform 0.3s ease;
}


.product-link {
  text-decoration: none; /* Bỏ gạch chân cho đường dẫn */
  color: inherit;
}

.menu-item-details {
  padding: 10px 0;
  background-color: #fff;
  color: #333;
}

.product h2 {
  margin: 5px 0;
  font-size: 18px;
  font-weight: bold;
}

.product p {
  margin: 5px 0;
  color: #888;
}

.product:hover img {
  transform: scale(1.1); /* Hiệu ứng phóng to hình ảnh khi hover */
}

.menu-title {
  text-align: center;
  font-size: 24px; /* Đồng bộ với font-size của menu-title */
}


button {
  padding: 10px;
  border: none;
  border-radius: 8px; /* Bo góc */
  background-color: #ffa500; /* Màu cam */
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  width: 100px; /* Kích thước nút hình vuông nhỏ hơn */
  height: 40px;
  transition: background-color 0.3s ease;
}

button:disabled {
  background-color: #cccccc; /* Màu xám khi nút bị vô hiệu hóa */
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #e69500; /* Màu cam đậm hơn khi hover */
}

button:first-of-type {
  float: left; /* Đặt nút "Trang trước" bên trái */
}

button:last-of-type {
  float: right; /* Đặt nút "Trang tiếp theo" bên phải */
}

</style>
