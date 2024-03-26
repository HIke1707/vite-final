<script setup>
import { ref, onMounted } from 'vue';
import { useLoveStore } from "@/stores/loveStores";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const loveStore = useLoveStore();
const { loveProducts } = loveStore;

const products = ref([]);
const pagination = ref({});

onMounted(async () => {
  getProducts();
});

const getProducts = async () => {
  await axios.get(`${apiUrl}/api/${apiPath}/products/all`).then((res) => {
    products.value = res.data.products.filter(x => loveProducts.some(y => y === x.id));
    pagination.value = res.data.pagination;
  });
};

</script>

<template>
<div class="container">
  <div class="row mt-5">
    <div class="col-md-3" v-for="product in products" :key="product.id">
      <div class="card border-0 mb-4 position-relative position-relative">
        <img :src="product.imageUrl" class="card-img-top rounded-0" alt="..." style="width: 300px; height:300px;object-fit: cover;">
        <button type="button" class="btn btn-light rounded-circle favIcon position-absolute shadow-sm"
        style="top: 5px; right: 10px;">
          <i class="far fa-heart fa-solid text-danger"></i>
        </button>
        <div class="card-body p-0">
          <h6 class="mb-0 mt-3">
            <router-link :to="'/productsdetail/'+ product.id">{{product.title}}</router-link>
          </h6>
          <span class="mt-3" style="color:#c83030;">NT${{product.price}}</span>
          <del style="padding-left: 5px;"> NT${{ product.origin_price }}</del>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
