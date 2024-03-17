<script setup>
import { computed, onMounted } from 'vue';
import { useCartStore } from '../../stores/cartStores';

const cartStore = useCartStore();

const cart = computed({
  get () {
    return cartStore.cart;
  }
});

onMounted(() => {
  console.log(cart.value);
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
                  <th scope="col" class="border-0 ps-0">商品名稱</th>
                  <th scope="col" class="border-0">單件價格</th>
                  <th scope="col" class="border-0">數量</th>
                  <th scope="col" class="border-0">小計</th>
                  <th scope="col" class="border-0"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-bottom border-top" v-for="item in cart.carts" :key="item.id">
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                    <img :src="item?.product.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover;">
                    <p class="mb-0 fw-bold ms-3 d-inline-block">{{ item?.product?.title }}</p>
                  </th>
                  <td class="border-0 align-middle"><p class="mb-0 ms-auto">{{ item?.product?.price }}</p></td>
                  <td class="border-0 align-middle" style="max-width: 160px;">
                    <div class="input-group pe-5">
                      <div class="input-group-prepend">
                        <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                          <i class="fas fa-minus"></i>
                        </button>
                      </div>
                      <input type="text"
                      class="form-control border-0 text-center my-auto shadow-none"
                      placeholder="" aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      v-model="item.qty">
                      <div class="input-group-append">
                        <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle"><p class="mb-0 ms-auto">{{ item?.total }}</p></td>
                  <td class="border-0 align-middle"><i class="fas fa-times"></i></td>
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
                    <td class="text-end border-0 px-0 pt-4">{{ cart.final_total }}</td>
                  </tr>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">運費</th>
                    <td class="text-end border-0 px-0 pt-0 pb-4">NT$0</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">Total</p>
                <p class="mb-0 h4 fw-bold">{{ cart.final_total }}</p>
              </div>
              <RouterLink :to="'/products'"><a class="btn btn-dark w-50 mt-4">返回購物</a></RouterLink>
              <a class="btn btn-dark w-50 mt-4 ml-1">前往結賬</a>
            </div>
          </div>
        </div>
    </div>
</template>
