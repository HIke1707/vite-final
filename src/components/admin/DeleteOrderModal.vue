<script setup>
import { ref, onMounted, defineExpose, defineEmits } from "vue";
import axios from "axios";
import Modal from "bootstrap/js/dist/modal";

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const props = defineProps({
  propitem: null
});

const emits = defineEmits(["close"]);

const modal = ref(null);

// 打開
const openModal = () => {
  modal.value.show();
};

// 關
const hideModal = () => {
  modal.value.hide();
};

// 刪除產品
const deleteOrder = async () => {
  const id = props.propitem.id;
  const url = `${apiUrl}/api/${apiPath}/admin/order/${id}`;
  let result = false;
  await axios
    .delete(url)
    .then((res) => {
      const { success } = res.data;
      result = success;
      alert("已刪除訂單");
      hideModal();
      emits("close");
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
  return result;
};

onMounted(async () => {
  modal.value = new Modal(document.getElementById("delOrderModal"), {
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
    id="delOrderModal"
    ref="delOrderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delOrderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delOrderModalLabel" class="modal-title">
            <span>刪除訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 訂單{{
            propitem.id
          }}(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="deleteOrder()">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
