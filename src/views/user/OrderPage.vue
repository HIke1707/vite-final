<script setup>
import { computed, onMounted, ref } from 'vue';
import { useCartStore } from '../../stores/cartStores';
import axios from 'axios';
import router from '../../router';
import { useToastMessageStore } from "@/stores/toastMessage";

const toastMessageStore = useToastMessageStore();
const { pushMessage } = toastMessageStore;

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
    pushMessage({
      style: 'warning',
      title: '系統訊息',
      content: '購物車內沒有商品'
    });
    return;
  }
  const url = `${apiUrl}/api/${apiPath}/order`;
  const order = form.value;
  axios
    .post(url, { data: order })
    .then((response) => {
      cartStore.getCart();
      router.push(`/payment/${response.data.orderId}`);
      form.value.message = "";
      formRef.value.resetForm();
    })
    .catch((err) => {
      pushMessage({
        style: 'error',
        title: '系統訊息',
        content: err.response.data.message
      });
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
              <p class="mb-0">NT${{ item?.total }}</p>
            </div>
            <p class="mb-0 fw-bold">x{{ item?.qty }}</p>
          </div>
        </div>
        <table class="table mt-4 border-top border-bottom text-muted">
          <tbody>
            <tr>
              <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">total</th>
              <td class="text-end border-0 px-0 pt-4">NT${{ cart.total }}</td>
            </tr>
            <tr>
              <td colspan="2">
                <p v-if="cart.carts"><span>已套用優惠券</span>
                  <span class="color-danger">{{ cart.carts[0]?.coupon.code }}</span></p>
              </td>
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
