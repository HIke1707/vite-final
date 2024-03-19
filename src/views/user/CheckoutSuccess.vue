<script setup>
</script>
<template>
  <div class="position-relative d-flex">
    <div class="container d-flex flex-column" style="min-height: 100vh;">
      <div class="row my-auto pb-7">
        <div class="col-md-4 d-flex flex-column">
          <div class="my-auto">
            <h2>訂單已成立！</h2>
            <p>您的訂單已完成，本商場將儘速確認訂單，謝謝您的購買</p>
            <RouterLink :to="'/products'"><a class="btn btn-dark mt-4 px-5">繼續購物</a></RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="w-md-50 w-100 position-absolute opacity-1" style="z-index: -1; min-height: 100vh; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
    background-position: center center;">
    </div>
  </div>
</template>
