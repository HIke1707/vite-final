<script setup>
import { onMounted } from 'vue';
import router from '../router';
onMounted(() => {
  setTimeout(() => {
    router.push("/login");
  }, 3000);
});
</script>

<template>
    <p>頁面不存在</p>
    <p>3秒後跳轉畫面</p>
</template>
