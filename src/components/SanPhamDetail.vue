<template>
  <div class="product-detail">
    <div class="product-image-container">
      <h3 class="product-detail-title">Chi tiết sản phẩm</h3>
      <img :src="product.image" :alt="product.name" class="product-image">
    </div>
    <div class="product-info">
      <h2 class="product-title">{{ product.name }}</h2>
      <div class="description-container">
        <p :style="{ whiteSpace: 'pre-line' }">Mô Tả: {{ product.description }}</p>
      </div>
      <div class="price-quantity">
        <p class="price">Giá: {{ product.price }} VND</p>
        <p class="quantity">Số lượng trong kho: {{ product.quality }}</p>
      </div>
      
      <!-- Thêm lựa chọn size -->
      <div class="size-selection">
        <p>Chọn kích cỡ:</p>
        <div class="size-buttons">
          <button 
            v-for="size in product.sizes" 
            :key="size" 
            @click="selectSize(size)" 
            :class="{ selected: selectedSize === size }"
          >{{ size }}</button>
        </div>
      </div>

      <div v-if="product.quality === 0" class="out-of-stock">
        <p>Hết hàng</p>
      </div>
      <div v-else>
        <button @click="addToCart(product)" class="add-to-cart-button">Thêm vào giỏ</button>
      </div>
    </div>
  </div>
</template>

<script>
import items from '../data/items';
import cart from '../data/GioHang';

export default {
  data() {
    return {
      product: {},
      cart: cart,
      selectedSize: null
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.product = items.find(item => item.id == id);
  },
  methods: {
  addToCart(product) {
    if (!this.selectedSize) {
      alert("Vui lòng chọn kích cỡ trước khi thêm vào giỏ hàng!");
      return;
    }

    const cartItem = this.cart.find(item => item.id === product.id && item.size === this.selectedSize);
    if (product.quality > 0) {
      if (cartItem) {
        cartItem.quality += 1;
      } else {
        this.cart.push({ ...product, quality: 1, size: this.selectedSize });
      }
      this.product.quality -= 1;
      alert("Đã thêm vào giỏ hàng!");
    }
  },
  selectSize(size) {
    this.selectedSize = size;
  }
},

};
</script>

<style scoped>
.product-detail {
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #f0f0f0;
}

.product-detail-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.product-image-container {
  flex: 1;
  margin-right: 20px;
}

.product-image {
  width: 100%;
  height: 250px;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-title {
  margin-bottom: 10px;
  color: #000;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
}

.description-container {
  text-align: left;
}

.price-quantity {
  text-align: center; 
  display: flex;
  flex-direction: column; 
  margin-bottom: 10px;
  width: 100%;
}

.price, .quantity {
  padding: 10px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 5px;
}

.size-selection {
  margin-bottom: 20px;
  text-align: center; /* Căn giữa toàn bộ phần chọn kích cỡ */
}

.size-buttons {
  display: flex;
  gap: 10px;
  justify-content: center; /* Căn giữa các nút chọn size */
}

.size-buttons button {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 0; /* Hình vuông */
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: #fff;
  color: #000; /* Màu chữ đen */
}

.size-buttons button.selected {
  border: 2px solid #333; /* Viền đậm hơn khi được chọn */
  color: #000; /* Màu chữ đen khi được chọn */
}


.add-to-cart-button {
  padding: 15px 40px; /* Chiều dọc to lên và chiều rộng nhỏ lại */
  background-color: #000;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: auto; /* Chiều rộng tự động */
  display: block;
  margin: 0 auto; /* Căn giữa */
  font-size: 16px;
  transition: all 0.3s ease;
}

.add-to-cart-button:hover {
  background-color: #444;
}

.out-of-stock p {
  color: red;
  font-weight: bold;
}

@media (max-width: 600px) {
  .product-detail {
    flex-direction: column;
  }
  .product-image-container {
    margin-bottom: 20px;
  }
  .price-quantity {
    flex-direction: column;
  }
}
</style>
