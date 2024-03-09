<template>
  <div class="home">
    <h1>你現在在後台頁面</h1>
    <div id="nav">
      <RouterLink to="/admin/">登入</RouterLink> |
      <RouterLink to="/admin/products">商品管理</RouterLink> |
      <RouterLink to="/admin/uploadpic">圖片上傳</RouterLink> |
      <RouterLink to="/admin/order">訂單管理</RouterLink> |
      <RouterLink to="/admin/coupon">優惠券管理</RouterLink> |
      <RouterLink to="/admin/article">文章管理</RouterLink>
    </div>
    <RouterView />
  </div>
</template>

<script setup>
</script>
