const mutations = {
    SET_PRODUCT(state, products) {
        state.products = products;
    },
    DECREASE_PRODUCT_QUANTITY(state, productId) {
        const product = state.products.find(item => item.id === productId);
        if (product && product.quality > 0) {
            product.quality--; // Giảm số lượng sản phẩm
        }
    },
    DECREASE_PRODUCT_QUANTITY_BY_AMOUNT(state, { productId, amount }) {
        const product = state.products.find(item => item.id === productId);
        if (product && product.quality >= amount) {
            product.quality -= amount; // Giảm số lượng sản phẩm theo số lượng đã mua
        }
    }
};
export default mutations;
