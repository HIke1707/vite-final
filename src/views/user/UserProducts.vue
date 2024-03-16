<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const productTypes = ref(["盒玩", "模型", "寶可夢 (Pokémon.)", "航海王(ONE PIECE)", "蠟筆小新"]);
const products = ref([]);

onMounted(async () => {
  await axios.get(`${apiUrl}/api/${apiPath}/products/all`).then((res) => {
    products.value = res.data.products;
  });
});
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light justify-content-center border border-start-0 border-end-0 border-top border-bottom">
  <div class="navbar-nav flex-row overflow-auto navbar-custom-scroll">
    <a v-for="item in productTypes" v-bind:key="item" class="nav-item nav-link text-nowrap px-2" href="#">{{ item }}</a>
  </div>
</nav>
<div class="container mt-md-5 mt-3 mb-7">
  <div class="row">
    <div class="col-md-3" v-for="product in products" :key="product.id">
      <div class="card border-0 mb-4 position-relative position-relative">
        <img :src="product.imageUrl" class="card-img-top rounded-0" alt="...">
        <a href="#" class="text-dark">
          <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
        </a>
        <div class="card-body p-0">
          <h4 class="mb-0 mt-3">
            <router-link :to="'/productsdetail/'+ product.id">{{product.title}}</router-link>
          </h4>
          <span class="mt-3" style="color:#c83030;">NT${{product.price}}</span>
          <del style="padding-left: 5px;"> NT${{ product.origin_price }}</del>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
