<template>
  <div>
    <!-- 搜索功能 -->
    <div class="search-container">
      <el-input v-model="searchQuery" placeholder="请输入搜索关键词" clearable @input="getGameList" style="width: 300px">
      </el-input>
      <el-button type="primary" :icon="Search" @click="getGameList" class="gamelist-search">搜索</el-button>
    </div>

    <!-- 表格 -->
    <el-table :data="gameListData" border height="750" style="width: 100%"
      :default-sort="{ prop: 'id', order: 'ascending' }" @sort-change="handleSortChange">
      <el-table-column prop="id" label="ID" width="80" align="center" sortable fixed="left"  />

      <el-table-column prop="name" label="名称" width="150" show-overflow-tooltip sortable fixed="left"  />

      <el-table-column prop="icon" label="图标" width="100">
        <template #default="{ row }">
          <el-image :src="row.icon" style="width: 50px; height: 50px" fit="cover" />
        </template>
      </el-table-column>

      <el-table-column prop="device" label="设备" width="80" show-overflow-tooltip sortable/>

      <el-table-column prop="indexShow" label="展示索引" width="120" show-overflow-tooltip sortable  />

      <el-table-column prop="priority" label="优先级" width="100" align="center" sortable  />

      <el-table-column prop="keyWord" label="关键字" width="150" show-overflow-tooltip sortable  />

      <el-table-column prop="summaryTips" label="摘要提示" width="200" show-overflow-tooltip sortable  />

      <el-table-column prop="taskPs" label="任务说明" width="200" show-overflow-tooltip sortable  />

      <el-table-column prop="noAddition" label="无附加" width="100" align="center" sortable  />

      <el-table-column prop="hide" label="隐藏" width="80" align="center" sortable  />

      <el-table-column prop="backImage" label="背景图片" width="100">
        <template #default="{ row }">
          <el-image :src="row.backImage" style="width: 50px; height: 50px" fit="cover" />
        </template>
      </el-table-column>

      <el-table-column prop="session_reset_time" label="会话重置时间" width="140" align="center" sortable  />

      <el-table-column prop="round_price_switch" label="轮次价格开关" width="150" align="center" sortable  />

      <el-table-column prop="default_price" label="默认价格" width="120" align="center" sortable  />

      <el-table-column prop="exchange_ratio" label="兑换比例" width="120" align="center" sortable  />

      <el-table-column prop="round_time" label="轮次时间" width="120" align="center" sortable  />

      <el-table-column prop="admin_comment_switch" label="管理员评论开关" width="150" align="center" sortable  />

      <el-table-column prop="task_limit" label="任务限制" width="120" align="center" sortable />

      <el-table-column prop="rank_example_img" label="排名示例图片" width="150">
        <template #default="{ row }">
          <el-image :src="row.rank_example_img" style="width: 50px; height: 50px" fit="cover" />
        </template>
      </el-table-column>

      <el-table-column prop="rank_example_video" label="排名示例视频" width="150" show-overflow-tooltip sortable />

      <el-table-column prop="mini_top" label="迷你顶部" width="120" align="center" sortable />

      <el-table-column prop="created_at" label="创建时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.created_at) }}
        </template>
      </el-table-column>

      <el-table-column prop="updated_at" label="更新时间" width="200" align="center" sortable>
        <template #default="{ row }">
          {{ formatDate(row.updated_at) }}
        </template>
      </el-table-column>

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
      <el-button type="primary" @click="handleAdd">新增游戏</el-button>
    </div>
    <!-- 分页组件 -->
    <el-pagination class="pagination" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100, 500]" :size="size" :disabled="false" background
      layout="total, sizes, prev, pager, next, jumper" :total="totalGames" @size-change="handleSizeChange"
      @current-change="handlePageChange" />
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, nextTick } from "vue";
import { Delete, Edit, Search, Share, Upload } from "@element-plus/icons-vue";

const gameListData = ref([]);
const totalGames = ref(0); // 总游戏数量
const pageSize = ref(10); // 每页显示的数量
const currentPage = ref(1); // 当前页码
const searchQuery = ref(""); // 搜索关键词
const sortColumn = ref(null); // 排序列
const sortOrder = ref(''); // 排序顺序
const { proxy } = getCurrentInstance();

const getGameList = async () => {
  try {
    await nextTick();
    const response = await proxy.$http.get("/games/page", {
      params: {
        page: currentPage.value,
        limit: pageSize.value,
        search: searchQuery.value, // 传递搜索关键词
        ...(sortOrder.value &&  sortColumn.value && { sortField: sortColumn.value }),
        ...(sortOrder.value && { sortOrder: sortOrder.value == 'ascending' ? 'asc' : 'desc' }),
      },
    });
    gameListData.value = response.data.data; // 假设返回的JSON中data字段是游戏列表
    totalGames.value = response.data.total; // 假设返回的JSON中total字段是总记录数
  } catch (error) {
    console.error("获取游戏列表数据失败:", error);
  }
};

const handlePageChange = (newPage) => {
  currentPage.value = newPage;
  getGameList(); // 切换页面时重新获取数据
};

const handleSizeChange = (newSize) => {
  pageSize.value = newSize;
  getGameList(); // 切换每页显示数量时重新获取数据
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
  console.log(prop, order);
  sortColumn.value = prop;
  sortOrder.value = order;
  getGameList(); // 排序变化时重新获取数据
};

const handleAdd = () => {
  // 处理新增游戏的逻辑
  console.log("Add new game");
  // 你可以导航到新增游戏页面或者弹出新增游戏的对话框
};

onMounted(() => {
  getGameList();
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

.gamelist-search {
  float: right;
}
</style>
