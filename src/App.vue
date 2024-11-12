<template>
 
  <Header/>
   <!-- <Product/> -->
   <Footer/>
 
 
 </template>
 
 <script>
 
 import Footer from'./components/ComFooter.vue'
 import Header from'./components/ComHeader.vue'
 export default {
   name: 'App',
   components: {
      Header,
     Footer,
   }
 }
 </script>
 
 <style>
 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
 }
 </style>
 