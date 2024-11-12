<template>
    <div class="adidas-product">
      <h2 class="menu-title">Adidas</h2>
      <div class="menu-carousel">
        <div class="menu-item" v-for="product in products" :key="product.id">
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" class="product-link">
          <img :src="product.image" alt="Hình ảnh sản phẩm">
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
  import adidasdetail from '../data/AdidasDetail'; 
  
  export default {
    data() {
      return {
        products: adidasdetail
      };
    }
  };
  </script>
  
<style scoped>
.adidas-product {
  padding: 20px;
    margin-top: 20px; /* Space the product section from the header */
}

.menu-title {
    font-size: 26px;
    color: #000; /* Black text color */
    font-weight: bold;
    letter-spacing: 1px;
    text-align: center;
    padding: 10px 20px; /* Padding inside the box */
    border: 2px solid #ddd; /* Light border around the text */
    border-radius: 8px; /* Rounded corners */
    display: inline-block; /* Makes the border wrap around the text */
    background-color: #f9f9f9; /* Light background color */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for a 3D effect */
    margin: 20px auto; /* Center and add space around the title */
}

.menu-carousel {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}

.menu-item {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    transition: transform 0.3s, box-shadow 0.3s;
}

.menu-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-link img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.menu-item-details {
    text-align: center;
    margin-top: 10px;
}

.menu-item-details h3 {
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
}

.menu-item-details p {
    font-size: 16px;
    color: #666;
}
 
/* Responsive Design */
@media (max-width: 1200px) {
    .menu-carousel {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (max-width: 992px) {
    .menu-carousel {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .menu-carousel {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .menu-carousel {
        grid-template-columns: 1fr;
    }
}
</style>