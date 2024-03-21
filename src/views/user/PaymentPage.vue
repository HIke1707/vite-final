<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import router from '../../router';
import { useToastMessageStore } from "@/stores/toastMessage";

const toastMessageStore = useToastMessageStore();
const { pushMessage } = toastMessageStore;

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const props = defineProps(["id"]);

const order = ref({});

// 表單
const form = ref({
  creditcard: ""
});

const formRef = ref(null);

const getOrder = () => {
  const url = `${apiUrl}/api/${apiPath}/order/${props.id}`;
  axios
    .get(url)
    .then((response) => {
      order.value = response.data.order;
    })
    .catch((err) => {
      pushMessage({
        style: 'error',
        title: '系統訊息',
        content: err.response.data.message
      });
    });
};

const paypay = () => {
  const url = `${apiUrl}/api/${apiPath}/pay/${props.id}`;
  axios
    .post(url)
    .then((response) => {
      router.push('/checkout_success');
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
  getOrder();
});
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <nav class="navbar navbar-expand-lg navbar-light px-0">
          <a class="navbar-brand" href="./index.html">payment</a>
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
        <h3 class="fw-bold mb-4 pt-3">Payment</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <div class="border p-4 mb-4">
          <div v-for="item in order?.products" :key="item.id" class="d-flex mt-2">
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
                <td class="text-end border-0 px-0 pt-4">NT${{ order?.total }}</td>
              </tr>
              <tr>
                <td colspan="2">
                  <p v-if="order?.coupon"><span>已套用優惠券</span>
                    <span class="color-danger">{{ order?.coupon.code }}</span></p>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">Total</p>
            <p class="mb-0 h4 fw-bold">NT${{ order?.total }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <v-form ref="formRef" v-slot="{ errors }" @submit="paypay">
          <p>payment information</p>
          <div class="mb-0">
            <label for="creditcard" class="form-label">信用卡卡號</label>
            <v-field id="creditcard" name="creditcard" type="text" class="form-control"
                    :class="{ 'is-invalid': errors['creditcard'] }" placeholder="請輸入信用卡"
                    rules="required|min:11|max:13" v-model="form.creditcard"
                    ></v-field>
            <error-message name="creditcard" class="invalid-feedback"></error-message>
          </div>
          <div class="text-center mt-2">
            <button type="submit" class="btn btn-danger">進行結帳</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>
