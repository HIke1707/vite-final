<script setup>
import ToastMessages from '@/components/ToastMessage.vue';
import { useLoveStore } from "@/stores/loveStores";
import { useCartStore } from '../../stores/cartStores';
import router from '../../router';
import { ref, computed } from 'vue';

const loveStore = useLoveStore();
const { loveProducts } = loveStore;

const cartStore = useCartStore();

const cart = computed({
  get () {
    return cartStore.cart;
  }
});

const routename = ref(router.currentRoute);

const pageSettings = {
  UserHome: {
    url: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `<h2>探索無限可能性的玩具世界</h2>
          <p class="text-muted mb-0">
            歡迎來到我們的玩具天地！您將發現無盡的驚喜與樂趣。
          </p>
          <p class="text-muted mb-0">
            我們相信，玩具不僅是娛樂，更是啟發創意和夢想的工具。讓我們一同啟動夢想，探索未知的世界！
          </p>`,
    minheight: "100vh"
  },
  UserProducts: {
    url: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `<h2>Products</h2>`,
    minheight: "50vh"
  },
  love: {
    url: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `<h2>My Favorites</h2>
          <p class="text-muted mb-0">
            這裡是您的個人收藏室，展示您心愛的玩具、模型和盒玩。每一件商品都承載著您的獨特回憶和情感，是您玩具世界的精華所在。
          </p>`,
    minheight: "50vh"
  },
  default: {
    url: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `<h2>探索無限可能性的玩具世界</h2>
          <p class="text-muted mb-0">
            歡迎來到我們的玩具天地！您將發現無盡的驚喜與樂趣。
          </p>
          <p class="text-muted mb-0">
            我們相信，玩具不僅是娛樂，更是啟發創意和夢想的工具。讓我們一同啟動夢想，探索未知的世界！
          </p>`,
    minheight: "50vh"
  }
};

const curSetting = computed(() => pageSettings[routename.value.name] ?? pageSettings.default);
</script>

<template>
  <ToastMessages />
  <div class="position-relative">
    <div class="position-absolute" style="top:0; bottom:0; left:0; right:0;
    background-position: center center; opacity: 0.3;"
    :style ="{backgroundImage:`url( ${curSetting.url} )`}"
    ></div>
    <div class="container d-flex flex-column" :style ="{'min-height': curSetting.minheight}">
      <nav class="navbar px-0 navbar-expand-lg navbar-light">
        <RouterLink :to="'/'" class="navbar-brand">
          <img style="height:50px;" src="https://storage.googleapis.com/vue-course-api.appspot.com/yangapi/1710167769200.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2BP4%2BD13kdkZ8%2Bg9eeCZ5yNGQVElb6Wbi%2BLbIMeMm6ADxKgpd%2FK8qyCaz%2BILAfaCInt6%2Ft8Bjip3%2FQMxX1Z6fxpzaqdXTgjtBSWpInXrWfmDVqeUKxS7GNcpRBYVW0KvORXyyDLebAL2kC5H0zzXjhQolYK4VUVLTCHGt82vPRNBZITxleKTIlYdvic7xgDV4KVyTS%2F70ZnwqiELuD8Jtb1ZCqJklvjHF3kW5iNz1469a7%2FmV%2BRbHlN7XWl%2F4hqPj47tGBuJzwG3tYt%2BfDtp4DwB%2BtB5JpQaLINSwVQWXg%2F%2FOCWY9v5WHpXSSD8L3osCWMZ%2Fe3cwBqv%2F6Srd2%2BVX9g%3D%3D">
          ToysLand
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <RouterLink class="nav-item nav-link me-4 active" :to="'/'">Home <span class="sr-only">(current)</span></RouterLink>
            <RouterLink class="nav-item nav-link me-4" :to="'/products'">所有商品</RouterLink>
            <RouterLink class="nav-item nav-link me-4" :to="'/love'">
              <i class="fa-regular fa-heart fa-xl"></i>
              <span class="d-flex justify-content-center align-items-center rounded-circle text-white bg-primary h7"
              style="width: 20px;position: relative;top: -37px;right: -15px;height: 20px;">{{ loveProducts.length }}</span>
            </RouterLink>
            <RouterLink class="nav-item nav-link me-4" :to="'/cart'">
              <i class="fas fa-shopping-cart fa-xl"></i>
              <span class="d-flex justify-content-center align-items-center rounded-circle text-white bg-primary h7"
              style="width: 20px;position: relative;top: -37px;right: -15px;height: 20px;">{{ cart.carts?.length ?? 0 }}</span>
            </RouterLink>
          </div>
        </div>
      </nav>
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center" v-html="curSetting.content">
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="bg-white sticky-top">
    <div class="container">
      <nav class="navbar px-0 navbar-expand-lg navbar-light bg-white">
        <RouterLink :to="'/'">
          <img style="height:50px;" src="https://storage.googleapis.com/vue-course-api.appspot.com/yangapi/1710167769200.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2BP4%2BD13kdkZ8%2Bg9eeCZ5yNGQVElb6Wbi%2BLbIMeMm6ADxKgpd%2FK8qyCaz%2BILAfaCInt6%2Ft8Bjip3%2FQMxX1Z6fxpzaqdXTgjtBSWpInXrWfmDVqeUKxS7GNcpRBYVW0KvORXyyDLebAL2kC5H0zzXjhQolYK4VUVLTCHGt82vPRNBZITxleKTIlYdvic7xgDV4KVyTS%2F70ZnwqiELuD8Jtb1ZCqJklvjHF3kW5iNz1469a7%2FmV%2BRbHlN7XWl%2F4hqPj47tGBuJzwG3tYt%2BfDtp4DwB%2BtB5JpQaLINSwVQWXg%2F%2FOCWY9v5WHpXSSD8L3osCWMZ%2Fe3cwBqv%2F6Srd2%2BVX9g%3D%3D">
          <a class="navbar-brand" style="margin-left: 5px;">ToysLand</a>
        </RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bg-white custom-header-md-open" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <RouterLink :to="'/products'">
                <a class="nav-link ps-0" href="./product.html">所有商品</a>
              </RouterLink>
            </li>
          </ul>
        </div>
        <div class="d-flex">
          <RouterLink :to="'/cart'">
            <a href="./cart-2.html"><i class="fas fa-shopping-cart"></i></a>
          </RouterLink>
        </div>
      </nav>
    </div>
  </div> -->
  <RouterView />
</template>
