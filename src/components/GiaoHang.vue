<template>
  <div class="checkout-page">
    <div class="cart-summary">
      <h3>Giỏ hàng của bạn</h3>
      <div v-if="cart.length === 0" class="empty-cart">
        <img src="@/assets/User/empty-cart.png" alt="Giỏ hàng trống" class="empty-cart-image">
        <router-link to="/" class="btn btn-primary">Mua sắm ngay</router-link>
      </div>
      <table v-else class="text-center table">
        <tr>
          <th>HÌNH ẢNH</th>
          <th>SẢN PHẨM</th>
          <th>Size</th>
          <th>Số lượng</th>
          <th>Giá</th>
        </tr>
        <tr v-for="item in cart" :key="item.id">
          <td><img :src="item.image" class="product-image"></td>
          <td class="align-middle">{{ item.name }}</td>
          <td class="align-middle">{{ item.size }}</td>
          <td class="align-middle">{{ item.quality }}</td>
          <td class="align-middle">{{ item.price }}</td>
        </tr>
        <tr>
          <th>Tổng tiền</th>
          <th></th>
          <th></th>
          <th>{{ totalQuantity }}</th>
          <th>{{ totalPrice }}</th>
        </tr>
      </table>
    </div>

    <div class="checkout-form">
      <h2>TN Group</h2>
      <h3>Thông tin nhận hàng</h3>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Họ và tên người nhận hàng (*)</label>
          <input type="text" class="form-control" id="name" v-model="name" required>
        </div>
        <div class="form-group">
          <label for="phone">Số điện thoại (*)</label>
          <input type="tel" class="form-control" id="phone" v-model="phone" required>
        </div>
        <div class="form-group">
          <label for="address">Địa chỉ (*)</label>
          <input type="text" class="form-control" id="address" v-model="address" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" v-model="email">
        </div>
        <h3>Thanh toán</h3>
        <div class="payment-methods">
          <label>
            <input type="radio" v-model="paymentMethod" value="COD" required>
            Thanh toán khi nhận hàng (COD)
          </label>
        </div>
        <button type="submit" class="submit">Đặt Hàng</button>
      </form>
    </div>
  </div>
</template>

<script>
import cart from '../data/GioHang'; 
import items from '@/data/items';

export default {
  data() {
    return {
      cart: cart,
      name: '',
      phone: '',
      address: '',
      email: '',
      paymentMethod: '',
    };
  },
  created() {
    const currentUser = JSON.parse(localStorage.getItem('currentuser'));
    if (currentUser) {
      this.name = currentUser.username || '';
      this.phone = currentUser.phone || '';
      this.address = currentUser.address || '';
    }
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.price * item.quality, 0);
    },
    totalQuantity() {
      return this.cart.reduce((total, item) => total + item.quality, 0);
    }
  },
  methods: {
    handleSubmit() {
  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(this.phone)) {
    alert('Số điện thoại phải là 10 chữ số.');
    return;
  }

  if (this.email && !this.email.includes('@')) {
    alert('Email phải có ký tự @.');
    return;
  }

  if (!this.name || !this.phone || !this.address || !this.paymentMethod) {
    alert('Vui lòng điền đầy đủ thông tin.');
    return;
  }

  alert(`Đặt hàng thành công!\nThông tin:\nHọ tên: ${this.name}\nSố điện thoại: ${this.phone}\nĐịa chỉ: ${this.address}\nEmail: ${this.email}\nPhương thức thanh toán: ${this.paymentMethod}`);

  // Cập nhật số lượng hàng tồn kho cho từng sản phẩm trong giỏ hàng
  this.cart.forEach(cartItem => {
    const stockItem = items.find(item => item.id === cartItem.id);
    if (stockItem) {
      if (stockItem.quality >= cartItem.quality) {
        stockItem.quality -= cartItem.quality;  // Trừ số lượng chính xác
      } else {
        alert(`Số lượng sản phẩm ${stockItem.name} trong kho không đủ để thực hiện đơn hàng.`);
      }
    }
  });

  this.cart.splice(0, this.cart.length); // Xóa giỏ hàng sau khi thanh toán thành công
  this.$router.push('/');
}


  }
};
</script>

  
  <style>
  .checkout-page {
    display: flex;
    flex-direction: column; /* Đặt theo chiều dọc */
    align-items: center; /* Căn giữa các phần tử theo chiều ngang */
    margin-top: 100px;
    

  }
  
  .cart-summary {
    flex: 1;
    width: 100%; /* Đảm bảo giỏ hàng chiếm toàn bộ chiều rộng */
    max-width: 600px; /* Kích thước tối đa của giỏ hàng */
    
  }
  
  .checkout-form {
    max-width: 500px;
    padding: 30px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    margin-top: 20px; /* Tạo khoảng cách giữa giỏ hàng và form */
    width: 100%; /* Đảm bảo form chiếm toàn bộ chiều rộng */
    background: #e0f7fa;
    margin-bottom: 80px;
  }
  
  .empty-cart {
    text-align: center;
  }
  
  .product-image {
    height: 80px; /* Kích thước hình ảnh sản phẩm */
    width: 80px; /* Kích thước hình ảnh sản phẩm */
    object-fit: contain;
    border-radius: 4px; 
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th,
  .table td {
    padding: 12px;
    border: 1px solid #ddd;
  }
  
  .btn-primary {
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #ff9800; /* Màu cam cho nút */
  border: none;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background-color: #fb8c00; /* Màu cam đậm hơn khi rê chuột qua */
  transform: scale(1.05); /* Tạo hiệu ứng phóng to nhẹ khi hover */
}

.submit {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 18px;
  background-color: #ff9800; /* Màu cam cho nút */
  color: #ffffff;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit:hover {
  background-color: #fb8c00; /* Màu cam đậm hơn khi rê chuột qua */
  transform: scale(1.05); /* Tạo hiệu ứng phóng to nhẹ khi hover */
}

  </style>