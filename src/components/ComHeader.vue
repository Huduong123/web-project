<template>
  <header>
    <div class="container">
      <div class="logo" @click="scrollToTop">
        <img src="@/assets/Adidas/logo1.png" alt="TN Group">
      </div>
      <nav>
        <ul>
          <li><router-link to="/" @click="scrollToTop">Trang Chủ</router-link></li>
          <li>
            <router-link to="/sanpham" @click="scrollToTop">Sản Phẩm</router-link>
            <ul class="dropdown-menu">
              <li><router-link to="/nike" @click="scrollToTop">Nike</router-link></li>
              <li><router-link to="/adidasdetail" @click="scrollToTop">Adidas</router-link></li>
              <li><router-link to="/newbalance" @click="scrollToTop">NewBalance</router-link></li>
              <li><router-link to="/bitis" @click="scrollToTop">Biti's</router-link></li>
            </ul>
          </li>
          <li><router-link to="/gioithieu" @click="scrollToTop">Giới Thiệu</router-link></li>
          <li><router-link to="/lienhe" @click="scrollToTop">Liên Hệ</router-link></li>
        </ul>
      </nav>
      <div class="search-bar">
        <input type="text" placeholder="Tìm kiếm..." v-model="searchTerm">
        <button @click="searchProducts">Tìm</button>
      </div>
      <div v-if="user">
        <p>Xin chào, {{ user.username }}</p>
        <button class="logout-button" @click="logout">Đăng xuất</button>
      </div>
      <div class="account-cart">
        <router-link to="/taikhoan" class="account-link" @click="scrollToTop" v-if="!user"> 
          <img src="@/assets/User/user.png" alt="Tài khoản"> 
          <span class="tooltip">Login</span>  
        </router-link>
        <router-link to="/cart" class="cart-link" @click="scrollToTop">
          <img src="@/assets/User/cart.png" alt="Giỏ hàng">
          <span class="tooltip">Giỏ Hàng</span>  
        </router-link>
      </div>
    </div>
  </header>
  
  <div class="SANPHAM-list" v-if="showResults">
    <div v-if="filteredProducts.length > 0" class="products-container">
      <div v-for="product in filteredProducts" :key="product.id" class="SANPHAM-item">
        <img :src="product.image" :alt="product.name">
        <h3>{{ product.name }}</h3>
        <p>Giá: {{ product.price }}đ</p>
      </div>
    </div>
    <div v-else class="no-results">
      <h3>Không tìm thấy sản phẩm phù hợp</h3>
    </div>
  </div>
  
  <router-view />
</template>

<script>
import items from '@/data/items';
import eventBus from '@/eventBus';


export default {
  data() {
    return {
      searchTerm: '',
      products: items,
      showResults: false,
      user: JSON.parse(localStorage.getItem('currentuser')) || null
    };
  },
  computed: {
    filteredProducts() {
      if (!this.searchTerm) {
        return [];
      }
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  },
  watch: {
    searchTerm(newTerm) {
      this.showResults = newTerm.length > 0;
    }
  },
  methods: {
    clearSearch() {
      this.searchTerm = '';
      this.showResults = false;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    logout() {
      localStorage.removeItem('currentuser');
      this.user = null;
      this.$router.push('/');
    }
  },
  created() {
    eventBus.on('loginSuccess', (user) => {
      this.user = user;
    });
  },
  beforeUnmount() {
    eventBus.off('loginSuccess');
  }
};
</script>


<style>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: #ffffff; /* Nền trắng cho header */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Thêm bóng cho header */
}

.container {
  max-width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  width: 280px; /* Tăng kích thước logo */
  height: auto;
  max-height: 100px;
  object-fit: contain;
  transition: transform 0.3s ease; /* Thêm hiệu ứng cho logo */
}

.logo img:hover {
  transform: scale(1.1); /* Tăng kích thước logo khi hover */
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

nav ul li {
  position: relative;
  margin: 0 30px;
}

nav ul li a {
  text-decoration: none;
  color: #333; /* Màu chữ đậm và dễ nhìn */
  font-weight: 600;
  padding: 12px;
  display: block;
  font-size: 18px; /* Tăng kích thước chữ */
  letter-spacing: 1px; /* Thêm khoảng cách giữa các chữ */
  transition: color 0.3s ease, transform 0.3s ease; /* Thêm hiệu ứng chuyển màu */
}

nav ul li a:hover {
  color: #f56a00; /* Màu chữ khi hover */
  transform: translateY(-2px); /* Đẩy lên một chút khi hover */
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f7f7f7;
  padding: 12px 0;
  display: none;
  z-index: 1000;
  min-width: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav ul li:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li {
  padding: 12px 25px;
  white-space: nowrap;
}

.dropdown-menu li a {
  color: #333;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  color: #f56a00; /* Màu chữ khi hover */
}

.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 0px;
}

.search-bar input {
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 30px;
  margin-right: 15px;
  width: 280px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.search-bar input:focus {
  border-color: #f56a00;
  outline: none;
}

.search-bar button {
  background-color: #f56a00;
  color: #fff;
  border: none;
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 16px;
}

.search-bar button:hover {
  background-color: #0c32da;
}

.account-cart {
  display: flex;
  align-items: center;
  position: relative;
}

.account-cart a {
  margin-left: 30px;
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 18px;
}

.account-cart a i {
  margin-right: 5px;
}

.account-cart img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.logout-button {
  background-color: #ff4d4d; /* Màu nền đỏ tươi */
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #d11a1a; /* Đổi sang màu đỏ đậm khi hover */
}

.tooltip {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f2f2f2;
  color: #333;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
}

.account-link:hover .tooltip,
.cart-link:hover .tooltip {
  display: block;
}

.SANPHAM-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.SANPHAM-item {
  min-width: 220px;
  max-width: 220px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;
  background-color: #f1f1f1;
  transition: transform 0.3s ease;
}

.SANPHAM-item:hover {
  transform: scale(1.05);
}

.SANPHAM-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.SANPHAM-item h3 {
  margin: 10px 0 5px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.no-results {
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #ff3333;
}
</style>
