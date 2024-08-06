<template>
    <div class="authorization-management">
      <el-table :data="users" style="width: 100%">
        <el-table-column prop="id" label="用户ID"></el-table-column>
        <el-table-column prop="nickname" label="微信昵称"></el-table-column>
        <el-table-column prop="avatar" label="微信头像">
          <template #default="scope">
            <el-image :src="scope.row.avatar" fit="cover" style="width: 50px; height: 50px;"></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="state" label="授权状态">
          <template #default="scope">
            <span v-if="scope.row.state == 1">已授权</span>
            <span v-else>未授权</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              v-if="!scope.row.state == 1"
              @click="handleEnable(scope.row)"
              type="success"
              size="small"
            >启用</el-button>
            <el-button
              v-if="scope.row.state == 1"
              @click="handleDisable(scope.row)"
              type="danger"
              size="small"
            >禁用</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script setup>
  import { ref, getCurrentInstance,onMounted } from 'vue';
  import { ElMessage } from 'element-plus';
  const users = ref([]);
  const { proxy } = getCurrentInstance();

  // 模拟加载用户数据
  onMounted(async () => {
    try {
        const response = await proxy.$http.get('/user');
        users.value = response.data
    } catch (error) {
        ElMessage.error('获取 用户列表失败');
        console.log(error);
    } 
  });
  
  const handleAuthorization = (user) => {
    // 假设这里发送请求给后端更新授权状态
    ElMessage.success(`${user.nickname} 的授权状态已更新为 ${user.authorized ? '已授权' : '未授权'}`);
  };
  
  const handleEnable = async (user) => {
  try {
    await proxy.$http.put(`/user/${user.id}/state`, { state: true }); // 替换为实际的后端接口地址
    user.authorized = true;
    ElMessage.success(`${user.nickname} 已启用授权`);
  } catch (error) {
    console.error(`Failed to enable authorization for user ${user.nickname}`, error);
    ElMessage.error(`启用授权失败：${error.message}`);
  }
};

const handleDisable = async (user) => {
  try {
    await proxy.$http.put(`/user/${user.id}/state`, { state: false }); // 替换为实际的后端接口地址
    user.authorized = false;
    ElMessage.success(`${user.nickname} 已禁用授权`);
  } catch (error) {
    console.error(`Failed to disable authorization for user ${user.nickname}`, error);
    ElMessage.error(`禁用授权失败：${error.message}`);
  }
};

  </script>
  
  <style scoped>
  .authorization-management {
    padding: 20px;
  }
  </style>
  