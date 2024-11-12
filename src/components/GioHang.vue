<template>
  <div v-if="cart.length == 0" class="empty-cart">
    <img src="@/assets/User/empty-cart.png" alt="Giỏ hàng trống" class="empty-cart-image">
    <router-link to="/" class="btn btn-primary">Mua sắm ngay</router-link>
  </div>
  <div v-else class="modal-content">
    <!-- Existing cart table -->
    <div class="checkout-button-container">
      <button class="btn btn-checkout" @click="thanhtoan">Thanh Toán</button>
      <div v-if="showAlert" class="alert">
        {{ alertMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import cart from '../data/GioHang';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      cart: cart,
      showAlert: false,
      alertMessage: '',
    };
  },
  computed: {
    tongtien() {
      return this.cart.reduce((total, item) => total + item.price * item.quality, 0);
    },
    tongsoluong() {
      return this.cart.reduce((total, item) => total + item.quality, 0);
    }
  },
  methods: {
    ...mapActions(['checkout']),
    thanhtoan() {
      const user = JSON.parse(localStorage.getItem('currentuser'));

      if (!user) {
        this.alertMessage = 'Bạn cần đăng nhập trước khi đặt hàng.';
        this.showAlert = true;
        setTimeout(() => {
          this.showAlert = false;
          this.$router.push('/taikhoan');
        }, 1000);
      } else {
        // Gọi action checkout để trừ số lượng sản phẩm
        this.checkout(this.cart);
        this.cart.splice(0, this.cart.length); // Xóa giỏ hàng sau khi thanh toán thành công
        this.$router.push('/giaohang');
      }
    }
  }
};
</script>






<style>
/* Đặt lại nền modal với màu nhạt, tạo không gian thoáng đãng */
.modal-content {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 80%;
  margin: 50px auto;
  overflow-x: auto;
}

/* Giỏ hàng trống: Chỉnh sửa ảnh và nút gọi hành động */
.empty-cart-image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto 20px;
}

.empty-cart {
  text-align: center;
  padding: 50px 20px;
}

.btn-primary {
  background-color: #00bfae; /* Tông màu mát mẻ cho nút */
  color: white;
  font-size: 16px;
  padding: 12px 30px;
  border-radius: 25px;
  width: auto;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-primary:hover {
  background-color: #00a085;
  transform: scale(1.05);
}

/* Bảng giỏ hàng: Tạo thiết kế đơn giản nhưng đẹp mắt */
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.table th,
.table td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
}

.table th {
  font-weight: 600;
  color: #333;
}

.table td {
  font-size: 16px;
  color: #555;
}

/* Điều chỉnh kích thước ảnh sản phẩm */
.table td img {
  height: 150px; /* Tăng kích thước ảnh sản phẩm */
  width: 150px;  /* Tăng kích thước ảnh sản phẩm */
  object-fit: cover; /* Giữ tỷ lệ ảnh đẹp */
  border-radius: 8px; /* Bo tròn góc ảnh */
  transition: transform 0.3s ease; /* Thêm hiệu ứng khi hover */
}

/* Cải thiện ảnh sản phẩm */
.table td img {
  height: 200px; /* Tăng kích thước ảnh sản phẩm */
  width: 200px;  /* Tăng kích thước ảnh sản phẩm */
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.table td img:hover {
  transform: scale(1.1); /* Phóng to ảnh khi hover */
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: center;
}/* Cải thiện hiển thị các nút cộng và trừ */
.quantity-controls .btn-small {
  width: 50px; /* Tăng kích thước nút */
  height: 50px; /* Tăng kích thước nút */
  font-size: 24px; /* Đặt kích thước chữ to hơn */
  padding: 0;
  margin: 0 10px;
  background-color: #f8f8f8; /* Màu nền sáng */
  border: 2px solid #ddd;
  border-radius: 50%;
  color: #333; /* Đặt màu chữ */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
}

.quantity-controls .btn-small:hover {
  background-color: #e0e0e0; /* Màu nền khi hover */
  transform: scale(1.1); /* Hiệu ứng phóng to khi hover */
}

.quantity-display {
  padding: 0 15px;
  font-size: 20px; /* Làm chữ to hơn */
  color: #333;
}

/* Các nút chính */
.btn-checkout {
  background-color: #4caf50;
  color: white;
  padding: 15px 25px; /* Tăng kích thước nút */
  border-radius: 30px;
  font-size: 18px; /* Tăng kích thước chữ */
  transition: background-color 0.3s, transform 0.3s;
}

.btn-checkout:hover {
  background-color: #45a049;
  transform: scale(1.05); /* Hiệu ứng phóng to khi hover */
}

/* Các nút xóa */
.btn-danger {
  background-color: #ff4c4c;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 20px;
  transition: background-color 0.3s, transform 0.3s;
}

.btn-danger:hover {
  background-color: #d11a1a;
  transform: scale(1.05); /* Hiệu ứng phóng to khi hover */
}

/* Thông báo lỗi khi người dùng chưa đăng nhập */
.alert {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}

/* Tối giản kiểu bảng và tạo khoảng cách giữa các sản phẩm */
.table tr:last-child td {
  border-bottom: none;
}

.table th,
.table td {
  text-align: left;
  padding: 10px;
}

.checkout-button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

</style>
