<template>
    <footer>
        <div class="footer-info">
            <img src="@/assets/Adidas/logo1.png" alt="TN Group">
            <div class="footer-content">
                <p>Địa chỉ: 53 Đ.Nguyễn Trãi, Phường Phạm Ngũ Lão, Quận 1, Thành phố HCM</p>
                <p>Hotline: 0763554775</p>
                <p>Copyright © 2024 ATN SHOP</p>
                <div class="social-icons">
                    <a href="https://www.tiktok.com/@nike" target="_blank">
                        <img src="@/assets/User/tik-tok.png" alt="TikTok">
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100032077382296" target="_blank">
                        <img src="@/assets/User/FB.png" alt="Facebook">
                    </a>
                    <a href="https://www.instagram.com/tuanhs.ng_/" target="_blank">
                        <img src="@/assets/User/instagram.png" alt="Instagram">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

 
<script>
export default {
}
</script>

<style>
footer {
    background-color: #f8f9fa;
    color: #333333;
    padding: 20px 0;
    width: 100%;
    border-top: 2px solid #dedede;
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-info {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    align-items: center;
}

.footer-info img {
    max-width: 200px; /* Tăng kích thước logo */
    height: auto;
}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0 20px;
    text-align: right;
    margin-top: 10px;
}

.footer-content p {
    margin: 5px 0;
    font-size: 16px;
    color: #555555;
}

.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 10px;
}

.social-icons a {
    display: inline-block;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.social-icons a:hover {
    transform: scale(1.1);
    opacity: 0.8;
}

.social-icons img {
    width: 30px; /* Kích thước biểu tượng */
    height: auto;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}

.social-icons img:hover {
    filter: grayscale(0%);
}


</style>