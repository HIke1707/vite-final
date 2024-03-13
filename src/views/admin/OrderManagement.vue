<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import orderDetailModal from '@/components/admin/OrderDetail.vue';
import deleteModal from '@/components/admin/DeleteOrderModal.vue';

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

// 資料定義
const orders = ref([]);
const pagination = ref({});
const isEdit = ref(false);
const tempOrder = ref({});

// element ref
const delOrderModal = ref(null);
const orderModalRef = ref(null);

// 取得訂單列表
const getOrders = async (page = 1) => {
  const url = `${apiUrl}/api/${apiPath}/admin/orders?page=${page}`;
  await axios.get(url).then((res) => {
    orders.value = res.data.orders;
    pagination.value = res.data.pagination;
  })
    .catch((err) => { console.debug(err); });
};

// 開窗
const openModal = (type, item) => {
  if (type === 'detail') {
    tempOrder.value = { ...item };
    orderModalRef.value.openModal();
  } else if (type === 'edit') {
    tempOrder.value = { ...item };
    isEdit.value = true;
    orderModalRef.value.openModal();
  } else if (type === 'delete') {
    tempOrder.value = item;
    delOrderModal.value.openModal();
  }
};

// 關閉跳窗
const closeModal = () => {
  getOrders();
};

// 時間格式轉換
const timeformatter = (stamp) => {
  const date = new Date(stamp);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2); // 月份从0开始，所以要加1
  const day = ('0' + date.getDate()).slice(-2);
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const seconds = ('0' + date.getSeconds()).slice(-2);
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

// onmounted hook
onMounted(() => {
  getOrders();
});
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <h2 class="w50">訂單維護列表</h2>
            </div>
        </div>
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>成立時間</th>
              <th>用戶</th>
              <th>付款狀態</th>
              <th>詳細資訊</th>
              <th>刪除訂單</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orders" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ timeformatter(item.create_at) }}</td>
              <td>{{ item.user.name }}</td>
              <td>{{ item.is_paid }}</td>
              <td>
                <button type="button" class="btn btn-primary" @click="openModal('detail', item)">詳細資訊</button>
              </td>
              <td>
                <button type="button" class="btn btn-warning" @click="openModal('delete', item)">刪除訂單</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
    <order-detail-modal :propitem="tempOrder" ref="orderModalRef" @close="closeModal"></order-detail-modal>
    <delete-modal :propitem="tempOrder" @close="closeModal" ref="delOrderModal"></delete-modal>
</template>
