import axios from 'axios';

const actions = {
    async fetdataProduct({ commit }) {
        try {
            const response = await axios.get('http://localhost:3000/products');
            const filteredProducts = response.data.filter(product => product.id >= 1 && product.id <= 10);
            commit('SET_PRODUCT', filteredProducts);
        } catch (error) {
            console.error("Không lấy được dữ liệu");
        }
    },
    addToCart({ commit, state }, productId) {
        const product = state.products.find(item => item.id === productId);
        if (product && product.quality > 0) {
            commit('DECREASE_PRODUCT_QUANTITY', productId); // Gọi mutation để giảm số lượng sản phẩm
        } else {
            alert('Sản phẩm đã hết hàng!');
        }
    },
    checkout({ commit, state }, cart) {
        cart.forEach(cartItem => {
            const product = state.products.find(item => item.id === cartItem.id);
            if (product && product.quality >= cartItem.quality) {
                commit('DECREASE_PRODUCT_QUANTITY_BY_AMOUNT', { productId: cartItem.id, amount: cartItem.quality });
            } else {
                alert(`Số lượng sản phẩm ${product.name} trong kho không đủ để thực hiện đơn hàng.`);
            }
        });
    }
};

export default actions;

