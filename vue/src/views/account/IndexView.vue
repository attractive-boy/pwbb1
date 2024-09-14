<template>
  <div class="password-change">
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="currentPassword">当前密码</label>
        <input 
          type="password" 
          id="currentPassword" 
          v-model="currentPassword" 
          required
        />
      </div>
      <div>
        <label for="newPassword">新密码</label>
        <input 
          type="password" 
          id="newPassword" 
          v-model="newPassword" 
          required
        />
      </div>
      <div>
        <label for="confirmPassword">确认密码</label>
        <input 
          type="password" 
          id="confirmPassword" 
          v-model="confirmPassword" 
          required
        />
      </div>
      <button type="submit">提交</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');

const handleSubmit = () => {
  if (newPassword.value !== confirmPassword.value) {
    errorMessage.value = '新密码和确认密码不匹配';
    return;
  }

  // 模拟密码提交逻辑
  // 实际使用中，你可能会通过 API 提交数据
  // 例如：await axios.post('/api/change-password', { currentPassword: currentPassword.value, newPassword: newPassword.value });

  successMessage.value = '密码修改成功';
  errorMessage.value = '';
  currentPassword.value = '';
  newPassword.value = '';
  confirmPassword.value = '';
};
</script>

<style scoped>
.password-change {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

form div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
}

.success {
  color: green;
}
</style>
