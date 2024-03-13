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

// onmounted hook
onMounted(() => {
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
