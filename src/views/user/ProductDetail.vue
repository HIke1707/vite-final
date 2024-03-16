<script setup>
import { ref, defineProps, onMounted } from 'vue';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const props = defineProps(["id"]);
const product = ref({});

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
                <img :src="product.imageUrl" class="d-block w-100" alt="...">
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
            <p class="mb-0 text-muted text-end"><del>NT${{ product.origin_price }}</del></p>
            <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
            <div class="row align-items-center">
                <div class="col-6">
                <div class="input-group my-3 bg-light rounded">
                    <div class="input-group-prepend">
                    <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                        <i class="fas fa-minus"></i>
                    </button>
                    </div>
                    <input type="text" class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
                    <div class="input-group-append">
                    <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                        <i class="fas fa-plus"></i>
                    </button>
                    </div>
                </div>
                </div>
                <div class="col-6">
                <a href="./checkout.html" class="text-nowrap btn btn-dark w-100 py-2">Lorem ipsum</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
