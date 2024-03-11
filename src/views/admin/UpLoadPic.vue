<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiPath = import.meta.env.VITE_API_PATH;

const fileInput = ref(null);
const status = ref({});
const uploadFile = () => {
  const uploadedFile = fileInput.value.files[0];
  const formData = new FormData();
  formData.append('file-to-upload', uploadedFile);
  const url = `${apiUrl}/api/${apiPath}/admin/upload`;
  status.value.fileUploading = true;
  axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((response) => {
    status.value.fileUploading = false;
    fileInput.value = '';
    navigator.clipboard.writeText(response.data.imageUrl).then(() => {
      alert('連結已複製');
    });
  }).catch(() => {
    status.value.fileUploading = false;
  });
};

// 檢查登入狀態
const checkAuth = async () => {
  const url = `${apiUrl}/api/user/check`;
  let result = false;
  await axios.post(url).then((res) => {
    const { success } = res.data;
    result = success;
  }).catch((err) => { alert(err.message); });
  return result;
};

// onmounted hook
onMounted(() => {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("hextoken="))
    ?.split("=")[1];
  axios.defaults.headers.common.Authorization = cookieValue;
  console.log(cookieValue);
  checkAuth().then((res) => {
    if (!res) {
      alert("請登入");
      window.location = "#/login";
    }
  });
});
</script>

<template>
  <div class="container">
    <div class="box">
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label for="picture" class="form-label">上傳圖片
            <i class="fas fa-spinner fa-spin" v-if="status.fileUploading"></i>
            </label>
            <input type="file" id="picture" class="form-control" ref="fileInput" @change="uploadFile" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
