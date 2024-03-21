<script setup>
import { ref, defineProps, onMounted } from 'vue';
import axios from 'axios';
import { useToastMessageStore } from "@/stores/toastMessage";

const toastMessageStore = useToastMessageStore();
const { pushMessage } = toastMessageStore;

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const props = defineProps(["id"]);
const product = ref({});
const amount = ref(1);

// 變動數量
const updateAmount = (type) => {
  if (amount.value <= 1 && type === "-") {
    return false;
  }
  amount.value = type === "+" ? amount.value + 1 : amount.value - 1;
};

const addToCart = (id) => {
  const url = `${apiUrl}/api/${apiPath}/cart`;
  const cartData = {
    product_id: id,
    qty: amount.value
  };
  axios.post(url, { data: cartData }).then((response) => {
    pushMessage({
      style: 'success',
      title: '系統訊息',
      content: '商品加入購物車成功'
    });
  }).catch((err) => {
    pushMessage({
      style: 'error',
      title: '發生錯誤',
      content: err.response.data.message
    });
  });
};

onMounted(async () => {
  await axios.get(`${apiUrl}/api/${apiPath}/product/${props.id}`).then((res) => {
    product.value = res.data.product;
  });
});
</script>

<template>
{{ props.id }}
<div class="container">
    <div class="row align-items-center">
        <div class="col-md-7">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img :src="product.imageUrl" class="d-block w-100" style="height:360px;object-fit: cover;" alt="...">
                </div>
                <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80" class="d-block w-100" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
        <div class="col-md-5">
            <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
            <p class="mb-0 text-muted text-start">{{ product.description }}</p>
            <p class="mb-0 text-muted text-end"><del>NT${{ product.origin_price }}</del></p>
            <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
            <div class="row align-items-center">
                <div class="col-6">
                <div class="input-group my-3 bg-light rounded">
                    <div class="input-group-prepend">
                    <button @click="updateAmount('-')" class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                        <i class="fas fa-minus"></i>
                    </button>
                    </div>
                    <input type="text"
                    class="form-control border-0 text-center my-auto shadow-none bg-light"
                    placeholder="" aria-label="Example text with button addon"
                    aria-describedby="button-addon1"
                    v-model="amount">
                    <div class="input-group-append">
                    <button @click="updateAmount('+')" class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                        <i class="fas fa-plus"></i>
                    </button>
                    </div>
                </div>
                </div>
                <div class="col-6">
                <a @click="addToCart(product.id)" class="text-nowrap btn btn-dark w-100 py-2">加入購物車</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row my-5">
        <div class="col-12" style="text-align: left;">
            <h4>購買說明</h4>
            <p>1.預購商品下單後即完成訂購程序，預購商品已過結單日/即將到貨，皆無法取消訂單。僅於預購結單日前或發生商品缺貨/斷貨狀況下，可視情形取消訂單。</p>
            <p>2.預購商品為客製化訂單，結單後不接受因瑕疵/商品損壞以外之個人因素退貨，如:不喜歡/與想像中不符/經濟短缺/尺寸不符等,皆不受理。</p>
            <p>3.預購商品圖檔僅供參考，與實際商品有些微不同之可能，最終以商品實際現況為主，不得以商品細節不同而取消訂單、退款及退換貨。</p>
            <p>4.預購商品如有細節修改情況，以廠商實際出貨商品為主，本公司將不另作通知。</p>
            <p>5.商品預計到貨日期僅為預估，實際到貨日期涉及諸多因素，可能與預估到貨日期不同，訂購人無法以延遲到貨為由取消訂單、退款及退換貨。如對延遲到貨的情況有疑問，歡迎使用客服系統查詢。</p>
        </div>
    </div>
</div>
</template>
