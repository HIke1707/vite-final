<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCartStore } from '../../stores/cartStores';
import axios from 'axios';
import debounce from "lodash/debounce";
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

// 變動數量
const updateItemqty = (item, type) => {
  if (type === "+") {
    item.qty = item.qty + 1;
  } else if (item.qty > 1 && type === "-") {
    item.qty = item.qty - 1;
  } else {
    return false;
  }
  updateCartItem(item.id, item.product.id, item.qty);
};

// 更新購物車
const updateCartItem = debounce((cartId, productId, qty = 1) => {
  const url = `${apiUrl}/api/${apiPath}/cart/${cartId}`;
  const data = {
    product_id: productId,
    qty: qty
  };
  axios
    .put(url, { data: data })
    .then((response) => {
      pushMessage({
        style: 'success',
        title: '系統訊息',
        content: response.data.message
      });
      cartStore.getCart();
    })
    .catch((err) => {
      pushMessage({
        style: 'error',
        title: '發生錯誤',
        content: err.response.data.message
      });
    });
}, 500);

// 清除購物車內產品
const removeCartItem = (id) => {
  const url = `${apiUrl}/api/${apiPath}/cart/${id}`;
  axios
    .delete(url)
    .then((response) => {
      pushMessage({
        style: 'success',
        title: '系統訊息',
        content: response.data.message
      });
      cartStore.getCart();
    })
    .catch((err) => {
      pushMessage({
        style: 'error',
        title: '發生錯誤',
        content: err.response.data.message
      });
    });
};

const couponCode = ref("");

// 套用優惠券
const getCoupon = () => {
  const url = `${apiUrl}/api/${apiPath}/coupon`;
  axios.post(url, { data: { code: couponCode.value } })
    .then((res) => {
      pushMessage({
        style: 'success',
        title: '系統訊息',
        content: res.data.message
      });
      cartStore.getCart();
    })
    .catch((err) => {
      pushMessage({
        style: 'error',
        title: '發生錯誤',
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
        <div class="row mt-3">
          <div class="col-8">
            <h3>購物車明細</h3>
            <table class="table" style="width: 100%;">
              <thead>
                <tr>
                  <th scope="col" class="border-0 ps-0" style="width:50%">商品名稱</th>
                  <th scope="col" class="border-0" style="width:10%">單件價格</th>
                  <th scope="col" class="border-0" style="width:20%">數量</th>
                  <th scope="col" class="border-0" style="width:10%">小計</th>
                  <th scope="col" class="border-0" style="width:10%"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom border-top" v-for="item in cart.carts" :key="item.id">
                  <td scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <div style="width:100%">
                      <img :src="item?.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover;">
                    </div>
                    <p class="mb-0 fw-bold ms-3 d-inline-block">{{ item?.product?.title }}</p>
                  </td>
                  <td class="border-0 align-middle"><p class="mb-0 ms-auto">{{ item?.product?.price }}</p></td>
                  <td class="border-0 align-middle" style="max-width: 160px;">
                    <div class="input-group pe-5">
                      <div class="input-group-prepend">
                        <button @click="updateItemqty(item, '-')" class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>
                      <input type="text"
                      class="form-control border-0 text-center my-auto shadow-none"
                      placeholder="" aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      v-model="item.qty">
                      <div class="input-group-append">
                        <button @click="updateItemqty(item, '+')" class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle"><p class="mb-0 ms-auto">{{ item?.total }}</p></td>
                  <td class="border-0 align-middle">
                    <button @click="removeCartItem(item.id)" class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                      <i class="fas fa-times"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-4">
            <div class="border p-4 mb-4">
              <h4 class="fw-bold mb-4">訂單資訊</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">總計</th>
                    <td class="text-end border-0 px-0 pt-4">{{ cart.total }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">運費</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">NT$0</td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      優惠碼 : <input type="text" v-model="couponCode" @change="getCoupon()"/>
                      <p v-if="cart?.carts"><span>已套用優惠券</span>
                        <span class="color-danger">{{ cart.carts[0]?.coupon?.code }}</span></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">Total</p>
                <p class="mb-0 h4 fw-bold">{{ cart.final_total }}</p>
              </div>
              <RouterLink :to="'/products'"><a class="btn btn-dark w-50 mt-4">返回購物</a></RouterLink>
              <RouterLink :to="'/checkout'"><a class="btn btn-dark w-50 mt-4">前往結賬</a></RouterLink>
            </div>
          </div>
        </div>
    </div>
</template>
