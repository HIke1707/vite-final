<script setup>
import ToastMessages from '@/components/ToastMessage.vue';
</script>

<template>
  <ToastMessages />
  <div class="bg-white sticky-top">
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
  </div>
  <RouterView />
</template>
