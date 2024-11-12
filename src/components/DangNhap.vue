<template>
  <div class="dangnhap">
    <h2>ĐĂNG NHẬP</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Tên đăng nhập (*)</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Mật khẩu (*)</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <div class="form-options">
        <label for="remember" class="remember-option">
          <input type="checkbox" id="remember" v-model="remember"> Ghi nhớ tôi
        </label>
        <a href="#" class="forgot-password" @click.prevent="showForgotPasswordAlert">Quên mật khẩu?</a>
      </div>
      <button type="submit" class="btn">ĐĂNG NHẬP</button>
      <div class="social-login">
        <p class="login-text">Hoặc đăng nhập bằng:</p>
        <div class="social-buttons">
          <button class="btn google-btn" @click.prevent="loginWithGoogle">
            <img src="@/assets/User/google.png" alt="Google" class="social-icon"> Đăng nhập bằng Google
          </button>
          <button class="btn facebook-btn" @click.prevent="loginWithFacebook">
            <img src="@/assets/User/FB.png" alt="Facebook" class="social-icon"> Đăng nhập bằng Facebook
          </button>
        </div>
      </div>
      <div class="register">
        <p>Chưa có tài khoản? <router-link to="/dangki">Đăng ký</router-link></p>
      </div>
    </form>
    
    <!-- Phần thông báo -->
    <div v-if="showAlert" class="alert alert-warning">
      {{ alertMessage }}
      <button @click="closeAlert">OK</button>
    </div>
    <div v-if="error" class="alert alert-danger">
      {{ error }}
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventBus'

export default {
  data() {
    return {
      username: '', 
      password: '',
      remember: false,
      showAlert: false,
      alertMessage: 'Quên thì khỏi xài',
      error: '', 
    };
  },
  methods: {
    login() {
      // Lấy danh sách người dùng từ localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

      // Tìm kiếm user trong danh sách người dùng
      const user = storedUsers.find(x => x.username === this.username && x.password === this.password);
      if (user) {
        // Lưu thông tin vào localStorage nếu đăng nhập thành công
        console.log('Lưu người dùng:', user);
        localStorage.setItem('currentuser', JSON.stringify(user));

        // Lưu thông tin người dùng nếu được chọn ghi nhớ
        if (this.remember) {
          localStorage.setItem('rememberedUser', JSON.stringify({ username: this.username, password: this.password }));
        } else {
          localStorage.removeItem('rememberedUser');
        }

        eventBus.emit('loginSuccess', user);
        this.$router.push('/'); // Chuyển hướng sau khi đăng nhập thành công
      } else {
        this.error = "Đăng nhập không thành công"; // Hiển thị thông báo lỗi nếu đăng nhập thất bại
      }
    },
    loginWithGoogle() {
      // Cần tích hợp OAuth cho Google
      window.open("https://www.google.com/", "_blank");
    },
    loginWithFacebook() {
      // Cần tích hợp OAuth cho Facebook
      window.open("https://www.facebook.com/", "_blank");
    },
    showForgotPasswordAlert() {
      this.showAlert = true; // Hiển thị thông báo quên mật khẩu
    },
    closeAlert() {
      this.showAlert = false; // Ẩn thông báo quên mật khẩu
    }
  }
}
</script>





<style>
.dangnhap {
  max-width: 400px;
  margin: 40px auto;
  min-height: 400px;
  padding: 30px;
  background: #e0f7fa;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  animation: slideIn 0.5s ease-out;
  margin-top: 100px;
  margin-bottom: 20px;
}

.alert {
  position: fixed; /* Đặt vị trí cố định để thông báo ở giữa màn hình */
  top: 50%; /* Đặt từ trên xuống giữa */
  left: 50%; /* Đặt từ trái sang giữa */
  transform: translate(-50%, -50%); /* Di chuyển để căn giữa chính xác */
  background-color: #ffffff; /* Màu nền cho thông báo */
  color: #eb2020; /* Màu chữ */
  padding: 20px; /* Khoảng cách bên trong */
  border: 1px solid #ffeeba; /* Đường viền cho thông báo */
  border-radius: 8px; /* Bo góc cho thông báo */
  z-index: 1000; /* Đảm bảo thông báo hiển thị ở trên cùng */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Đổ bóng cho thông báo */
  text-align: center; /* Căn giữa chữ */
}

.alert button {
  margin-top: 15px; /* Khoảng cách phía trên nút OK để nó nằm dưới thông báo */
  display: block; /* Đặt nút dưới dạng block để nó nằm riêng biệt */
  width: 100%; /* Đặt chiều rộng nút 100% để phù hợp với thông báo */
  padding: 10px; /* Thêm khoảng cách bên trong cho nút */
  background-color: #00796b; /* Màu nền cho nút OK */
  color: white; /* Màu chữ trắng */
  border: none; /* Bỏ viền cho nút */
  border-radius: 6px; /* Bo góc cho nút */
  cursor: pointer; /* Đổi con trỏ khi di chuột vào nút */
  transition: background-color 0.3s ease; /* Thêm hiệu ứng chuyển đổi màu */
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

h2 {
  text-align: center;
  color: #00796b;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #00796b;
  border-radius: 6px;
  transition: all 0.3s ease;
  background-color: #ffffff;
}

.form-control:focus {
  border-color: #004d40;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 77, 64, 0.7);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.remember-option {
  color: #00796b;
}

.forgot-password {
  color: #00796b;
  text-decoration: underline;
}

.forgot-password:hover {
  color: #004d40;
}

.btn {
  display: block;
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #1fcd47;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #10b516;
}

.register {
  text-align: center;
  margin-top: 20px;
  color: #00796b;
}

.register a {
  color: #ff4081; /* Màu chữ nổi bật hơn cho liên kết Đăng ký */
  text-decoration: none;
}

.register a:hover {
  text-decoration: underline;
}

.social-login {
  margin-top: 20px;
  text-align: center; /* Căn giữa chữ */
}

.login-text {
  margin-bottom: 10px; /* Khoảng cách giữa chữ và nút */
  font-weight: bold; /* Chữ đậm */
  color: #00796b; /* Màu chữ */
}

.social-buttons {
  display: flex;
  justify-content: center; /* Căn giữa các nút */
}

.social-icon {
  width: 20px; /* Kích thước chiều rộng cho biểu tượng */
  height: 20px; /* Kích thước chiều cao cho biểu tượng */
  margin-right: 8px; /* Khoảng cách giữa biểu tượng và văn bản */
  vertical-align: middle; /* Căn chỉnh hình ảnh theo chiều dọc */
}

.google-btn,
.facebook-btn {
  width: 150px; /* Đặt chiều rộng cụ thể cho nút */
  padding: 12px;
  font-size: 16px;
  margin: 0 5px; /* Thêm khoảng cách giữa các nút */
  border: none; /* Bỏ đường viền nếu có */
  display: flex; /* Sử dụng flex để căn chỉnh hình ảnh và văn bản */
  align-items: center; /* Căn giữa nội dung theo chiều dọc */
  justify-content: center; /* Căn giữa nội dung theo chiều ngang */
}

.google-btn {
  background-color: #cd645a; /* Màu đỏ cho Google */
  color: #fff;
}

.facebook-btn {
  background-color: #4267B2; /* Màu xanh cho Facebook */
  color: #fff;
}

.google-btn:hover {
  background-color: #ce0e0e; /* Màu tối hơn khi hover */
}

.facebook-btn:hover {
  background-color: #1306cd; /* Màu tối hơn khi hover */
}
</style>