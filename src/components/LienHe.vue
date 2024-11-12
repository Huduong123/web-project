<template>
  <div class="contact-form">
    <h2>
      <span class="highlight">
        <br />
        Hotline: 0763554775<br />
        Email: ATNSHOP@gmail.com
      </span>
      <br />
    </h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Họ và tên:</label>
        <input type="text" id="name" v-model="formData.name" placeholder="Nhập họ và tên" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" placeholder="Nhập email" required>
      </div>
      <div class="form-group">
        <label for="message">Nội dung:</label>
        <textarea id="message" v-model="formData.message" rows="5" placeholder="Nhập nội dung" required></textarea>
      </div>
      <button type="submit">Gửi</button>
    </form>
    <div v-if="showThankYouMessage" class="thank-you-message">
      Cảm ơn bạn đã gửi ý kiến, ý kiến của bạn đã được ghi nhận!
    </div>

    <!-- Larger Embedded Google Map -->
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.697237239112!2d106.6895052!3d10.7702533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a6b5f139%3A0x42d95c44b2a85ae!2s53%20Nguyen%20Trai%2C%20Pham%20Ngu%20Lao%2C%20District%201%2C%20Ho%20Chi%20Minh%20City!5e0!3m2!1sen!2s!4v1699489142655!5m2!1sen!2s"
        width="100%"
        height="600" 
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LienHe',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      showThankYouMessage: false
    };
  },
  methods: {
    handleSubmit() {
      this.showThankYouMessage = true;

      // Reset form after submission
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';

      // Hide thank you message after 5 seconds
      setTimeout(() => {
        this.showThankYouMessage = false;
      }, 5000);
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  padding: 20px;
}

.contact-form {
  max-width: 800px;
  margin: 0 auto;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.highlight {
  color: #FF5733;
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-bottom: 15px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  color: #333;
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  border-color: #4CAF50;
  outline: none;
}

button {
  width: 100%;
  background-color: #4CAF50;
  color: #ffffff;
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;
}

button:hover {
  background-color: #45a049;
}

.thank-you-message {
  margin-top: 20px;
  color: green;
  font-weight: bold;
  text-align: center;
}

.map-container {
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

@media (max-width: 576px) {
  .contact-form {
    padding: 20px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    font-size: 14px;
    padding: 10px;
  }

  button {
    font-size: 14px;
    padding: 10px;
  }
}
</style>
