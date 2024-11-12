<template>
  <div class="sanpham">
    <h2 class="menu-title">Chọn Sản Phẩm</h2>
    <div class="menu-carousel">
      <div v-for="(product, index) in products" :key="index" class="menu-item">
        <router-link
          :to="{ name: 'ProductDetail', params: { id: product.id } }"
          class="product-link"
          @click="scrollToTop"
        >
          <img :src="product.image" alt="Product Image" class="product-image" />
        </router-link>
        <div class="menu-item-details">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }} VND</p>
          <p>Số lượng: {{ product.quality }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['products'])
  },
  methods: {
    ...mapActions(['fetchProducts']),
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  created() {
    this.fetchProducts(); // Gọi API để lấy danh sách sản phẩm khi component được tạo
  }
};
</script>

<style>
.sanpham {
  padding: 60px 20px 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.menu-carousel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Căn giữa các sản phẩm */
  gap: 20px; /* Tạo khoảng cách giữa các sản phẩm */
}

.menu-item {
  flex: 0 0 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  margin: 10px 0; /* Khoảng cách phía trên và dưới cho mỗi sản phẩm */
}

.menu-item img {
  width: 100%;
  height: 250px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.product-link {
  text-decoration: none; /* Loại bỏ gạch chân cho đường dẫn */
  color: inherit;
}

.menu-item-details {
  padding: 10px 0;
  background-color: #fff;
  color: #333;
}

.menu-item-details h3 {
  margin: 5px 0;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
}

.menu-item-details p {
  margin: 5px 0;
  color: #888;
  text-decoration: none;
}

.menu-item:hover img {
  transform: scale(1.1);
}

.menu-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
