<template>
  <div>
    <!-- 搜索功能 -->
    <div class="search-container">
      <el-input v-model="searchQuery" placeholder="请输入搜索关键词" clearable @input="getChatRecords" style="width: 300px">
      </el-input>
      <el-button type="primary" :icon="Search" @click="getChatRecords" class="chat-search">搜索</el-button>
    </div>

    <!-- 表格 -->
    <el-table :data="chatRecordsData" border height="750" style="width: 100%"
      :default-sort="{ prop: 'id', order: 'ascending' }" @sort-change="handleSortChange">
      <el-table-column prop="id" label="ID" width="80" align="center" sortable fixed="left" />

      <el-table-column prop="uid" label="用户ID" width="150" show-overflow-tooltip sortable fixed="left" />

      <el-table-column prop="from_uid" label="发送者ID" width="150" show-overflow-tooltip sortable />

      <el-table-column prop="last_msg" label="最后消息" width="300" show-overflow-tooltip sortable />

      <el-table-column prop="last_time" label="最后时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.last_time) }}
        </template>
      </el-table-column>

      <el-table-column prop="is_top" label="置顶" width="100" align="center" sortable>
        <template #default="{ row }">
          <el-tag type="success" v-if="row.is_top">是</el-tag>
          <el-tag v-else>否</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="unread" label="未读数" width="100" align="center" sortable />

      <el-table-column prop="tnickname" label="昵称" width="150" show-overflow-tooltip sortable />

      <el-table-column prop="tsex" label="性别" width="100" align="center" sortable />

      <el-table-column prop="ol_status" label="在线状态" width="100" align="center" sortable>
        <template #default="{ row }">
          <el-tag type="success" v-if="row.ol_status">在线</el-tag>
          <el-tag v-else>离线</el-tag>
        </template>
      </el-table-column>

      <el-table-column prop="ol_last_time" label="最后在线时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.ol_last_time) }}
        </template>
      </el-table-column>

      <el-table-column prop="tuser_status" label="用户状态" width="100" align="center" sortable />

      <el-table-column label="操作" width="150" fixed="right">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
            编辑
          </el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增按钮 -->
    <div class="add-button-container">
      <el-button type="primary" @click="handleAdd">新增聊天记录</el-button>
    </div>

    <!-- 分页组件 -->
    <el-pagination class="pagination" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100, 500]" :size="size" :disabled="false" background
      layout="total, sizes, prev, pager, next, jumper" :total="totalRecords" @size-change="handleSizeChange"
      @current-change="handlePageChange" />
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, nextTick } from "vue";
import { Delete, Edit, Search } from "@element-plus/icons-vue";

const chatRecordsData = ref([]);
const totalRecords = ref(0); // 总聊天记录数
const pageSize = ref(10); // 每页显示的数量
const currentPage = ref(1); // 当前页码
const searchQuery = ref(""); // 搜索关键词
const sortColumn = ref(null); // 排序列
const sortOrder = ref(''); // 排序顺序
const { proxy } = getCurrentInstance();

const getChatRecords = async () => {
  try {
    await nextTick();
    const response = await proxy.$http.get("/message/page", {
      params: {
        page: currentPage.value,
        limit: pageSize.value,
        search: searchQuery.value, // 传递搜索关键词
        ...(sortOrder.value && sortColumn.value && { sortField: sortColumn.value }),
        ...(sortOrder.value && { sortOrder: sortOrder.value == 'ascending' ? 'asc' : 'desc' }),
      },
    });
    chatRecordsData.value = response.data.data.messages; // 假设返回的JSON中data字段是聊天记录列表
    totalRecords.value = response.data.data.totalRecords; // 假设返回的JSON中total字段是总记录数
  } catch (error) {
    console.error("获取聊天记录数据失败:", error);
  }
};

const handlePageChange = (newPage) => {
  currentPage.value = newPage;
  getChatRecords(); // 切换页面时重新获取数据
};

const handleSizeChange = (newSize) => {
  pageSize.value = newSize;
  getChatRecords(); // 切换每页显示数量时重新获取数据
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${year}年 ${month}月 ${day}日 ${hours}:${minutes}:${seconds}`;
};

const handleSortChange = ({ prop, order }) => {
  sortColumn.value = prop;
  sortOrder.value = order;
  getChatRecords(); // 排序变化时重新获取数据
};

const handleAdd = () => {
  // 处理新增聊天记录的逻辑
  console.log("Add new chat record");
  // 你可以导航到新增聊天记录页面或者弹出新增聊天记录的对话框
};

onMounted(() => {
  getChatRecords();
});

</script>

<style scoped>
/* 自定义样式 */
.el-table {
  font-size: 14px;
}

.el-image {
  border-radius: 4px;
}

.pagination {
  margin-top: 1vw;
  float: right;
}

.search-container {
  margin-bottom: 16px;
}

.add-button-container {
  margin-top: 1vw;
  float: left;
}

.chat-search {
  float: right;
}
</style>
