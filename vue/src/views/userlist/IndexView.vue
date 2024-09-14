<template>
  <div>
    <!-- 搜索功能 -->
    <div class="search-container">
      <el-input v-model="searchQuery" placeholder="请输入搜索关键词" clearable @input="getUserList" style="width: 300px">
      </el-input>
      <el-button type="primary" :icon="Search" @click="getUserList" class="userlist-search">搜索</el-button>
    </div>

    <!-- 表格 -->
    <el-table :data="userListData" border height="750" style="width: 100%"
      :default-sort="{ prop: 'id', order: 'ascending' }" @sort-change="handleSortChange">
      <el-table-column prop="id" label="ID" width="80" align="center" sortable fixed="left"  />

      <el-table-column prop="uid" label="UID" width="150" show-overflow-tooltip sortable fixed="left"  />

      <el-table-column prop="nickname" label="昵称" width="150" show-overflow-tooltip sortable />

      <el-table-column prop="avatar" label="头像" width="100">
        <template #default="{ row }">
          <el-image :src="row.avatar" style="width: 50px; height: 50px" fit="cover" />
        </template>
      </el-table-column>

      <el-table-column prop="type" label="类型" width="100" align="center" sortable  />

      <el-table-column prop="unit" label="单位" width="100" show-overflow-tooltip sortable  />

      <el-table-column prop="lv" label="等级" width="100" align="center" sortable  />

      <el-table-column prop="pct" label="百分比" width="100" align="center" sortable  />

      <el-table-column prop="price" label="价格" width="100" align="center" sortable  />

      <el-table-column prop="summary" label="摘要" width="200" show-overflow-tooltip sortable  />

      <el-table-column prop="voice" label="语音" width="200" show-overflow-tooltip sortable  />

      <el-table-column prop="details" label="详情" width="200" show-overflow-tooltip sortable  />

      <el-table-column prop="done_num" label="完成数" width="100" align="center" sortable  />

      <el-table-column prop="sex" label="性别" width="80" align="center" sortable  />

      <el-table-column prop="exp" label="经验" width="100" align="center" sortable  />

      <el-table-column prop="status" label="状态" width="100" align="center" sortable  />

      <el-table-column prop="push" label="推送" width="100" align="center" sortable  />

      <el-table-column prop="addtime" label="添加时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.addtime) }}
        </template>
      </el-table-column>

      <el-table-column prop="idletime" label="空闲时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.idletime) }}
        </template>
      </el-table-column>

      <el-table-column prop="worktime" label="工作时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.worktime) }}
        </template>
      </el-table-column>

      <el-table-column prop="offtime" label="离线时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.offtime) }}
        </template>
      </el-table-column>

      <el-table-column prop="actuid" label="操作UID" width="150" show-overflow-tooltip sortable />

      <el-table-column prop="edittime" label="编辑时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.edittime) }}
        </template>
      </el-table-column>

      <el-table-column prop="acttime" label="操作时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.acttime) }}
        </template>
      </el-table-column>

      <el-table-column prop="turnback_rate" label="回头率" width="120" align="center" sortable  />

      <el-table-column prop="lately_turnback_rate" label="最近回头率" width="120" align="center" sortable  />

      <el-table-column prop="group_id" label="组ID" width="100" align="center" sortable />

      <el-table-column prop="group_identity" label="组身份" width="120" align="center" sortable />

      <el-table-column prop="is_recommend" label="推荐" width="100" align="center" sortable  />

      <el-table-column prop="recommend_expire_time" label="推荐过期时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.recommend_expire_time) }}
        </template>
      </el-table-column>

      <el-table-column prop="round_price" label="轮次价格" width="120" align="center" sortable />

      <el-table-column prop="admin_comment" label="管理员评论" width="200" show-overflow-tooltip sortable />

      <el-table-column prop="admin_comment_uid" label="评论管理员UID" width="150" show-overflow-tooltip sortable />

      <el-table-column prop="admin_comment_video" label="评论管理员视频" width="150" show-overflow-tooltip sortable />

      <el-table-column prop="reject_reason" label="拒绝理由" width="200" show-overflow-tooltip sortable />

      <el-table-column prop="audit_time" label="审核时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.audit_time) }}
        </template>
      </el-table-column>

      <el-table-column prop="admin_comment_level" label="管理员评论等级" width="150" align="center" sortable />

      <el-table-column prop="is_busy" label="忙碌状态" width="100" align="center" sortable />

      <el-table-column prop="refund_rate" label="退款率" width="120" align="center" sortable  />

      <el-table-column prop="refund_num" label="退款数量" width="120" align="center" sortable  />

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
      <el-button type="primary" @click="handleAdd">新增用户</el-button>
    </div>

    <!-- 分页组件 -->
    <el-pagination class="pagination" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100, 500]" :size="size" :disabled="false" background
      layout="total, sizes, prev, pager, next, jumper" :total="totalUsers" @size-change="handleSizeChange"
      @current-change="handlePageChange" />
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, nextTick } from "vue";
import { Delete, Edit, Search } from "@element-plus/icons-vue";

const userListData = ref([]);
const totalUsers = ref(0); // 总用户数量
const pageSize = ref(10); // 每页显示的数量
const currentPage = ref(1); // 当前页码
const searchQuery = ref(""); // 搜索关键词
const sortColumn = ref(null); // 排序列
const sortOrder = ref(''); // 排序顺序
const { proxy } = getCurrentInstance();

const getUserList = async () => {
  try {
    await nextTick();
    const response = await proxy.$http.get("/users/page", {
      params: {
        page: currentPage.value,
        limit: pageSize.value,
        search: searchQuery.value, // 传递搜索关键词
        ...(sortOrder.value &&  sortColumn.value && { sortField: sortColumn.value }),
        ...(sortOrder.value && { sortOrder: sortOrder.value == 'ascending' ? 'asc' : 'desc' }),
      },
    });
    userListData.value = response.data.data.users; // 假设返回的JSON中data字段是用户列表
    totalUsers.value = response.data.data.totalRecords; // 假设返回的JSON中total字段是总记录数
    console.log("userlistdata===>",userListData.value);
  } catch (error) {
    console.error("获取用户列表数据失败:", error);
  }
};

const handlePageChange = (newPage) => {
  currentPage.value = newPage;
  getUserList(); // 切换页面时重新获取数据
};

const handleSizeChange = (newSize) => {
  pageSize.value = newSize;
  getUserList(); // 切换每页显示数量时重新获取数据
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
  getUserList(); // 排序变化时重新获取数据
};

const handleAdd = () => {
  // 处理新增用户的逻辑
  console.log("Add new user");
  // 你可以导航到新增用户页面或者弹出新增用户的对话框
};

onMounted(() => {
  getUserList();
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

.userlist-search {
  float: right;
}
</style>
