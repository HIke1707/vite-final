<template>
  <div class="home">
    <div class="position-relative">
      <div class="position-absolute" style="top:0; bottom:0; left:0; right:0;
      background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?
      ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
      background-position: center center; opacity: 0.1;"></div>
      <div class="container d-flex flex-column" style="min-height: 20vh;">
        <nav class="navbar navbar-expand-lg navbar-light">
          <img style="height:50px;" src="https://storage.googleapis.com/vue-course-api.appspot.com/yangapi/1710167769200.jpeg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J%2BP4%2BD13kdkZ8%2Bg9eeCZ5yNGQVElb6Wbi%2BLbIMeMm6ADxKgpd%2FK8qyCaz%2BILAfaCInt6%2Ft8Bjip3%2FQMxX1Z6fxpzaqdXTgjtBSWpInXrWfmDVqeUKxS7GNcpRBYVW0KvORXyyDLebAL2kC5H0zzXjhQolYK4VUVLTCHGt82vPRNBZITxleKTIlYdvic7xgDV4KVyTS%2F70ZnwqiELuD8Jtb1ZCqJklvjHF3kW5iNz1469a7%2FmV%2BRbHlN7XWl%2F4hqPj47tGBuJzwG3tYt%2BfDtp4DwB%2BtB5JpQaLINSwVQWXg%2F%2FOCWY9v5WHpXSSD8L3osCWMZ%2Fe3cwBqv%2F6Srd2%2BVX9g%3D%3D">
          <a class="navbar-brand" href="./index.html" style="margin-left: 5px;">ToysLand</a>
          <button class="navbar-toggler" type="button"
           data-bs-toggle="collapse"
           data-bs-target="#navbarNavAltMarkup"
           aria-controls="navbarNavAltMarkup"
           aria-expanded="false"
           aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link me-4" href="./product.html"><RouterLink to="/admin/products">商品管理</RouterLink></a>
              <a class="nav-item nav-link me-4" href="./detail.html"><RouterLink to="/admin/order">訂單管理</RouterLink></a>
              <a class="nav-item nav-link me-4" href="./detail.html"><RouterLink to="/admin/coupon">優惠券管理</RouterLink></a>
              <a class="nav-item nav-link" href="./cart.html"><i class="fas fa-shopping-cart"></i></a>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- <div id="nav">
      <RouterLink to="/admin/">登入</RouterLink> |
      <RouterLink to="/admin/products">商品管理</RouterLink> |
      <RouterLink to="/admin/uploadpic">圖片上傳</RouterLink> |
      <RouterLink to="/admin/order">訂單管理</RouterLink> |
      <RouterLink to="/admin/coupon">優惠券管理</RouterLink> |
    </div> -->
    <RouterView />
  </div>
</template>

<script setup>
</script>
