<script setup>
import { computed, onMounted, ref } from 'vue';
import { useCartStore } from '../../stores/cartStores';
import axios from 'axios';
import router from '../../router';

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const cartStore = useCartStore();

const cart = computed({
  get () {
    return cartStore.cart;
  }
});

// 表單
const form = ref({
  user: {
    name: "",
    email: "",
    tel: "",
    address: ""
  },
  message: ""
});

const formRef = ref(null);

const createOrder = () => {
  if (cart.value.carts.length === 0) {
    alert('購物車內沒有商品');
    return;
  }
  const url = `${apiUrl}/api/${apiPath}/order`;
  const order = form.value;
  axios
    .post(url, { data: order })
    .then((response) => {
      cartStore.getCart();
      router.push('/checkout_success');
      form.value.message = "";
      formRef.value.resetForm();
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

onMounted(() => {
  cartStore.getCart();
});

</script>
<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-10">
      <nav class="navbar navbar-expand-lg navbar-light px-0">
        <a class="navbar-brand" href="./index.html">Checkout</a>
        <ul class="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4">
          <li class="me-md-6 me-3 position-relative custom-step-line"><i class="fas fa-check-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">Lorem ipsum</span></li>
          <li class="me-md-6 me-3 position-relative custom-step-line"><i class="fas fa-check-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">Lorem ipsum</span></li>
          <li><i class="fas fa-dot-circle d-md-inline d-block text-center"></i> <span class="text-nowrap">Lorem ipsum</span></li>
        </ul>
      </nav>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-10">
      <h3 class="fw-bold mb-4 pt-3">Checkout</h3>
    </div>
  </div>
  <div class="row flex-row-reverse justify-content-center pb-5">
    <div class="col-md-4">
      <div class="border p-4 mb-4">
        <div v-for="item in cart.carts" :key="item.id" class="d-flex mt-2">
          <img :src="item?.product.imageUrl" alt="" class="me-2" style="width: 48px; height: 48px; object-fit: cover">
          <div class="w-100">
            <div class="d-flex justify-content-between">
              <p class="mb-0 fw-bold">{{ item?.product?.title }}</p>
              <p class="mb-0">NT${{ item?.final_total }}</p>
            </div>
            <p class="mb-0 fw-bold">x{{ item?.qty }}</p>
          </div>
        </div>
        <table class="table mt-4 border-top border-bottom text-muted">
          <tbody>
            <tr>
              <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">total</th>
              <td class="text-end border-0 px-0 pt-4">NT${{ cart.final_total }}</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-between mt-4">
          <p class="mb-0 h4 fw-bold">Total</p>
          <p class="mb-0 h4 fw-bold">NT${{ cart.final_total }}</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <v-form ref="formRef" v-slot="{ errors }" @submit="createOrder">
        <p>Contact information</p>
        <div class="mb-0">
          <label for="email" class="form-label">Email</label>
          <v-field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email"
                  rules="email|required" v-model="form.user.email"
                  ></v-field>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>
        <p class="mt-4">Shipping address</p>
        <div class="mb-2">
          <label for="name" class="form-label">收件人姓名</label>
          <v-field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-2">
          <label for="tel" class="form-label">收件人電話</label>
          <v-field id="tel" name="電話" type="text" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話" rules="required|min:8|max:10"
            v-model="form.user.tel"></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-2">
          <label for="address" class="form-label">收件人地址</label>
          <v-field id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址" rules="required"
            v-model="form.user.address"></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea id="message" class="form-control" cols="30" rows="10"
          v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </v-form>
    </div>
  </div>
</div>
</template>
