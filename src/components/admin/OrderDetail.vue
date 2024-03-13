<script setup>
import { ref, onMounted, defineExpose, computed } from "vue";
import axios from "axios";
import Modal from "bootstrap/js/dist/modal";

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const props = defineProps({
  propitem: null
});

const emits = defineEmits(["close"]);

const modal = ref(null);
const data = computed(() => props.propitem);
const isEdit = ref(false);
// 有沒有編輯過（有得話關閉modal後，需要刷新列表）
const edited = ref(false);

// 打開
const openModal = () => {
  modal.value.show();
};

// 關
const hideModal = () => {
  modal.value.hide();
  if (edited.value) {
    emits("close");
  }
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

const updateModal = async () => {
  const url = `${apiUrl}/api/${apiPath}/admin/order/${data.value.id}`;
  let result = false;
  const para = {
    data: data.value
  };
  await axios
    .put(url, para)
    .then((res) => {
      const { success } = res.data;
      result = success;
      edited.value = true;
      alert("訂單更新成功！");
      isEdit.value = false;
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
  return result;
};

onMounted(async () => {
  modal.value = new Modal(document.getElementById("orderDetailModal"), {
    keyboard: false
  });
});

defineExpose({
  openModal,
  hideModal
});
</script>

<template>
  <div
    id="orderDetailModal"
    ref="orderDetailModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="orderDetailModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="orderDetailModalLabel" class="modal-title">
            <span>訂單資訊</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-12">
              <table class="table table-bordered">
                <thead>
                    <tr>
                      <th class="t-title" colspan="4">
                        訂單資訊
                        <button v-if="!isEdit" type="button" class="btn btn-primary" style="float: right;" @click="isEdit = true">
                          編輯
                        </button>
                        <button v-else type="button" class="btn btn-primary" style="float: right;" @click="updateModal">
                          儲存
                        </button>
                      </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td class="t-title">訂單編號</td>
                      <td>{{ data?.id }}</td>
                      <td class="t-title">訂單時間</td>
                      <td>{{ timeformatter(data?.create_at) }}</td>
                    </tr>
                    <tr>
                      <td class="t-title">總價格</td>
                      <td>{{ data?.total }}</td>
                      <td class="t-title">付款狀態</td>
                      <td v-if="isEdit">
                        <input type="checkbox" v-model="data.is_paid"/>已付款
                      </td>
                      <td v-else>
                        <button v-if="data.is_paid" type="button" class="btn btn-success btn-sm">已付款</button>
                        <button v-else type="button" class="btn btn-secondary btn-sm">未付款</button>
                      </td>
                    </tr>
                    <tr>
                      <td class="t-title">用戶</td>
                      <td>{{ data?.user?.name }}</td>
                      <td class="t-title">電話號碼</td>
                      <td>{{ data?.user?.tel }}</td>
                    </tr>
                    <tr>
                      <td class="t-title">地址</td>
                      <td>{{ data?.user?.address }}</td>
                      <td class="t-title">email</td>
                      <td>{{ data?.user?.email }}</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <span>商品明細</span>
            </div>
            <div class="col-md-12">
              <table class="table">
                <thead>
                  <tr>
                    <th>商品名稱</th>
                    <th>數量</th>
                    <th>價格</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in data?.products" :key="item.id">
                    <td>{{ item?.product?.title }}</td>
                    <td>{{ item?.qty }}</td>
                    <td>{{ item?.product?.price }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="hideModal()"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="hideModal()">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .t-title {
    background-color: #88d7ff2b;
  }
</style>
