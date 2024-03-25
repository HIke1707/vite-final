<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { useToastMessageStore } from "@/stores/toastMessage";
import { useLoveStore } from "@/stores/loveStores";
import PaginationVue from '@/components/admin/PaginationVue.vue';

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const toastMessageStore = useToastMessageStore();
const { pushMessage } = toastMessageStore;

const loveStore = useLoveStore();
const { toggleLove, loveProducts } = loveStore;

const productTypes = ref(["所有商品", "盒玩", "模型", "寶可夢 (Pokémon.)", "航海王(ONE PIECE)", "蠟筆小新"]);
const products = ref([]);
const focusCategory = ref("");
const pagination = ref({});

onMounted(async () => {
  getProducts();
});

const getProducts = async (page = 1) => {
  await axios.get(`${apiUrl}/api/${apiPath}/products?category=${focusCategory.value}&page=${page}`).then((res) => {
    products.value = res.data.products;
    pagination.value = res.data.pagination;
    pushMessage({
      style: 'success',
      title: '系統訊息',
      content: `取得商品分類:${focusCategory.value === '' ? '所有商品' : focusCategory.value}`
    });
  });
};

const setLoved = (product) => {
  toggleLove(product);
};

const checkLove = (id) => {
  const ans = loveProducts.some(x => x === id);
  return ans;
};

watch(focusCategory, async (value) => {
  await axios.get(`${apiUrl}/api/${apiPath}/products?category=${value}`).then((res) => {
    products.value = res.data.products;
    pagination.value = res.data.pagination;
    pushMessage({
      style: 'success',
      title: '系統訊息',
      content: `取得商品分類:${value === '' ? '所有商品' : value}`
    });
  });
});
</script>

<template>
<nav class="navbar navbar-expand-lg navbar-light justify-content-center border border-start-0 border-end-0 border-top border-bottom">
  <div class="navbar-nav flex-row overflow-auto navbar-custom-scroll">
    <a v-for="item in productTypes" v-bind:key="item" class="nav-item nav-link text-nowrap px-2" @click="focusCategory = item === '所有商品' ? '' : item">{{ item }}</a>
  </div>
</nav>
<div class="container mt-md-5 mt-3 mb-7">
  <div class="row">
    <div class="col-md-3" v-for="product in products" :key="product.id">
      <div class="card border-0 mb-4 position-relative position-relative">
        <img :src="product.imageUrl" class="card-img-top rounded-0" alt="..." style="width: 300px; height:300px;object-fit: cover;">
        <button type="button" class="btn btn-light rounded-circle favIcon position-absolute shadow-sm"
        @click="setLoved(product)" style="top: 5px; right: 10px;">
          <i v-if="!checkLove(product.id)" class="far fa-heart"></i>
          <i v-else class="far fa-heart fa-solid text-danger"></i>
        </button>
        <!-- <a href="#" class="text-dark">
          <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
        </a> -->
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
  <!-- 分頁元件 -->
  <PaginationVue :pages="pagination" @emit-pages="getProducts"></PaginationVue>
</div>
</template>
