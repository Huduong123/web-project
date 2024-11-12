<template>
  <div class="dangki">
    <h2>ĐĂNG KÝ</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Nhập tên của bạn (*)</label>
        <input type="text" class="form-control" id="name" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="address">Nhập địa chỉ của bạn (*)</label>
        <input type="text" class="form-control" id="address" v-model="address" required>
      </div>
      <div class="form-group">
        <label for="phone">Số điện thoại</label>
        <input type="tel" class="form-control" id="phone" v-model="phone">
        <div v-if="error" class="error">{{ error }}</div>
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu (*)</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
        <div v-if="error" class="error">{{ error }}</div>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Nhập lại mật khẩu (*)</label>
        <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
        <div v-if="password !== confirmPassword" class="error">Mật khẩu không khớp!</div>
      </div>
      <button type="submit" class="btnSubmit" :disabled="error || password !== confirmPassword">ĐĂNG KÝ</button>
      <div class="login">
        <p>Đã có tài khoản? <router-link to="/taikhoan">Đăng nhập</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
import users from '@/data/users';

export default {
  data() {
    return {
      username: '',
      address: '', 
      phone: '', 
      password: '',
      confirmPassword: '',
      error: '',
      users: users, // Giữ nguyên kiểm tra từ users
    };
  },
  methods: {
    register() {
      this.error = '';

      // Kiểm tra mật khẩu và username
      if (this.password !== this.confirmPassword) {
        this.error = "Mật khẩu không trùng";
        return;
      }

      // Kiểm tra danh sách người dùng trong localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const existingUser = storedUsers.find(user => user.username === this.username);
      if (existingUser) {
        this.error = "Tên đã có";
        return;
      }

      // Tạo ID người dùng mới
      const newUserId = storedUsers.length > 0 ? Math.max(...storedUsers.map(user => user.id)) + 1 : 1;

      // Tạo đối tượng người dùng mới
      const newUser = {
        id: newUserId, // Sử dụng ID mới
        username: this.username,
        address: this.address, 
        phone: this.phone,
        password: this.password,
      };

      // Thêm người dùng mới vào danh sách `users`
      storedUsers.push(newUser);
      // Lưu danh sách `users` vào `localStorage`
      localStorage.setItem('users', JSON.stringify(storedUsers));

      alert('Đăng ký thành công!');
      this.$router.push('/taikhoan');
      
      // Reset các trường sau khi đăng ký thành công
      this.username = '';
      this.address = ''; // Reset địa chỉ
      this.phone = ''; // Reset số điện thoại
      this.password = '';
      this.confirmPassword = '';
    },
  },
}
</script>






<style>
.dangki {
 
  max-width: 600px; /* Kéo dài chiều ngang của form */
  margin: 40px auto;
  padding: 30px;
  background: #e0f7fa; /* Màu nền sáng */
  border: 1px solid #e0e0e0; /* Đường viền nhẹ */
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Bóng nhẹ */
}
@keyframes slideIn {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.dangki h2 {
  text-align: center;
  color: #00796b; /* Màu xanh tươi sáng */
}

.form-group {
  margin-bottom: 20px;
  display: flex; /* Sử dụng Flexbox */
  flex-direction: column; /* Xếp theo chiều dọc */
  align-items: center; /* Căn giữa theo chiều ngang */
}

.form-control {
  display: block;
  width: 100%;
  max-width: 400px; /* Giới hạn chiều rộng tối đa cho input */
  padding: 15px; /* Tăng độ cao của trường nhập */
  font-size: 16px;
  border: 2px solid #00796b; /* Đường viền xanh */
  border-radius: 6px;
  transition: all 0.3s ease;
  background-color: #f9f9f9; /* Màu nền nhạt */
}

.form-control:focus {
  border-color: #004d40; /* Màu viền khi focus */
  outline: none;
  box-shadow: 0 0 5px rgba(0, 77, 64, 0.7);
}

.error {
  color: red; /* Màu đỏ cho thông báo lỗi */
  font-size: 14px;
  margin-top: 5px;
}

.btnSubmit {
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 400px; /* Giới hạn chiều rộng tối đa cho nút */
  padding: 12px;
  font-size: 16px;
  background-color: #59a24c; /* Màu xanh */
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Hiệu ứng hover và nhấn */
}

.btnSubmit:hover {
  background-color: #004d40; /* Màu khi hover */
  transform: translateY(-2px); /* Hiệu ứng nổi khi hover */
}

.login {
  text-align: center;
  margin-top: 20px;
  color: #00796b;
}

.login a {
  color: #d71992; /* Màu chữ nổi bật cho liên kết Đăng nhập */
  text-decoration: none;
}

.login a:hover {
  text-decoration: underline;
}

.error {
  color: red; /* Màu đỏ cho thông báo lỗi */
  font-size: 14px;
  margin-top: 5px;
}


</style>
