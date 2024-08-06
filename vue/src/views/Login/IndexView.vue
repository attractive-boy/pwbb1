<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-title">{{ title }}</h2>
      <el-form ref="loginForm" :model="form" label-width="0" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="form.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button class="login-btn" type="primary" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance  } from 'vue';
import { ElMessage } from 'element-plus';
import { router } from '@/router/index';

const form = ref({
  username: '',
  password: ''
});

const title = ref("视频图像处理小程序管理平台");

const { proxy } = getCurrentInstance()

// 登录方法
const login = async () => {
  try {
    const response = await proxy.$http.post('/user/manager/login', form.value);
    //本地存储token
    localStorage.setItem('token', response.data.access_token);
    console.log(response);
    ElMessage.success('登录成功');
    router.push('/AEManagement');
  } catch (error) {
    ElMessage.error(error || '登录失败');
  }
};
</script>

<style scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
}

.login-box {
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.login-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.login-form {
  margin-top: 20px;
}

.login-btn {
  text-align: center;
  margin: auto;
}

.switch-btn {
  text-align: center;
  margin-top: 10px;
}

.switch-btn :deep() .el-form-item__content .el-button {
  width: 100%;
}
</style>
