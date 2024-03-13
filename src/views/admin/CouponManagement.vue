<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

class Coupon {
  constructor (data) {
    this.title = data?.title ?? "";
    this.is_enabled = data?.is_enabled ?? 0;
    this.percent = data?.percent ?? 0;
    this.discount = data?.discount ?? 0;
    this.due_date = data?.due_date ?? 0;
    this.code = data?.code ?? "";
  }
}

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

// 資料定義
const coupons = ref([]);
const pagination = ref({});

// 取得訂單列表
const getCoupons = async (page = 1) => {
  const url = `${apiUrl}/api/${apiPath}/admin/coupons?page=${page}`;
  await axios.get(url).then((res) => {
    coupons.value = res.data.coupons.map(item => ({ ...item, status: "stay" }));
    pagination.value = res.data.pagination;
  })
    .catch((err) => { console.debug(err); });
};

// 新增一筆惠惠券
const addCoupon = () => {
  coupons.value.push({ ...new Coupon(), status: "new" });
};

// 儲存
const save = async () => {
  const updateList = coupons.value.filter(x => x.status === "edited");
  const newList = coupons.value.filter(x => x.status === "new");
  const deleteList = coupons.value.filter(x => x.status === "remove");
  const failedList = [];
  const updatePromises = updateList.map(async item => {
    const res = await updateCoupon(item);
    if (!res) { failedList.push(item); }
  });
  const newPromises = newList.map(async item => {
    const res = await newCoupon(item);
    if (!res) { failedList.push(item); }
  });
  const delPromises = deleteList.map(async item => {
    const res = await deleteCoupon(item);
    if (!res) { failedList.push(item); }
  });

  await Promise.all([...updatePromises, ...newPromises, ...delPromises]);
  if (failedList.length > 0) {
    alert("操作失敗，請檢查優惠卷資訊");
  } else {
    alert("儲存成功");
    getCoupons();
  }
};

// 更新優惠券
const updateCoupon = async (data) => {
  const url = `${apiUrl}/api/${apiPath}/admin/coupon/${data.id}`;
  let result = false;
  const para = {
    data: new Coupon(data)
  };
  await axios
    .put(url, para)
    .then((res) => {
      const { success } = res.data;
      result = success;
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
  return result;
};

// 新增優惠券
const newCoupon = async (data) => {
  const url = `${apiUrl}/api/${apiPath}/admin/coupon`;
  let result = false;
  const para = {
    data: new Coupon(data)
  };
  para.data.due_date = new Date(para.data.due_date).getTime();
  await axios
    .post(url, para)
    .then((res) => {
      const { success } = res.data;
      result = success;
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
  return result;
};

// 刪除產品
const deleteCoupon = async (item) => {
  const id = item.id;
  const url = `${apiUrl}/api/${apiPath}/admin/coupon/${id}`;
  let result = false;
  await axios
    .delete(url)
    .then((res) => {
      const { success } = res.data;
      result = success;
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
  return result;
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
  getCoupons();
});
</script>

<template>
  <div class="container">
      <div class="row">
          <div class="col-md-8">
              <h2 class="w50">優惠券維護列表</h2>
          </div>
          <div class="col-md-4">
            <button type="button" class="btn btn-primary" @click="save">
              儲存
            </button>
          </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-hover mt-4">
            <thead>
              <tr>
                <th>優惠券編號</th>
                <th>到期時間</th>
                <th>優惠券標題</th>
                <th>優惠券代碼</th>
                <th>折價</th>
                <th>狀態</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="item in coupons" :key="item.id">
                <tr v-if="item.status == 'stay' || item.status == 'edited'">
                  <td>{{ item.id }}</td>
                  <td>{{ timeformatter(item.due_date) }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.code }}</td>
                  <td>{{ item.discount }}</td>
                  <td>
                    <select class="form-select" aria-label="Disabled select example"
                    v-model.number="item.is_enabled" @change="item.status = 'edited'">
                      <option value=0>停用</option>
                      <option value=1>啟用</option>
                    </select>
                  </td>
                  <td>
                    <button type="button" class="btn btn-danger" @click="item.status = 'remove'">
                      移除
                    </button>
                  </td>
                </tr>
                <tr v-if="item.status == 'new'">
                  <td></td>
                  <td>
                    <input type="date" v-model="item.due_date"/>
                  </td>
                  <td>
                    <input type="text" v-model="item.title"/>
                  </td>
                  <td>
                    <input type="text" v-model="item.code"/>
                  </td>
                  <td>
                    <input type="number" v-model="item.discount"/>
                  </td>
                  <td>
                    <select class="form-select" aria-label="Disabled select example" v-model.number="item.is_enabled">
                      <option value=0>停用</option>
                      <option value=1>啟用</option>
                    </select>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button type="button" class="btn btn-primary" @click="addCoupon">
            新增
          </button>
        </div>
      </div>
  </div>
</template>
