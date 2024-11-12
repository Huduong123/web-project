import { createWebHistory,createRouter } from "vue-router";
import Home from '@/components/ComHome.vue'
import SanPham from '@/components/ComSanPham.vue'
import GioiThieu from '@/components/GioiThieu.vue'
import LienHe from '@/components/LienHe.vue'
import TaiKhoan from "@/components/DangNhap.vue"
import DangKi from "@/components/TaiKhoan.vue"
import Cart from '@/components/GioHang.vue';
import Detail from'@/components/SanPhamDetail.vue';
import Giaohang from'@/components/GiaoHang.vue';
import LiNing from'@/components/AdidasDetail.vue';
import nike from'@/components/Nike.vue';
import Victor from "@/components/NewBalance.vue";
import Mizuno from "@/components/Bitis.vue";






// tạo một mảng chứa những đường link
const routes=[
    // đối tượng
     // trang chủ là trang load lên đầu tiên path:"/"
    {
        path:'/',
        name:'Home',
        component:Home
    },

    {
        path:'/sanpham',
        name:'SanPham',
        component:SanPham
    },
    {
        path:'/gioithieu',
        name:'GioiThieu',
        component:GioiThieu
    },
    {
        path:'/lienhe',
        name:'LienHe',
        component:LienHe
    },

    {
        path:'/taikhoan',
        name:'TaiKhoan',
        component:TaiKhoan
    }, 

    {
        path:'/dangki',
        name:'dangki',
        component:DangKi
    }, 


    {
        path: "/product/:id",
        name: 'ProductDetail',
        component: Detail
    },
    {
        path: "/cart",
        name: 'Cart',
        component: Cart
    },
    {
        path: "/giaohang",
        name: 'giaohang',
        component: Giaohang
    },
    {
        path: "/adidasdetail",
        name: 'adidasdetail',
        component:LiNing
    },
    {
        path: "/bitis",
        name: 'bitis-product',
        component:Mizuno
    },
    {
        path: "/newbalance",
        name: 'newbalance-product',
        component:Victor
    },
    {
        path: "/nike",
        name: 'nike-product',
        component:nike
    },

   
]
// tạo đối tượng
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router