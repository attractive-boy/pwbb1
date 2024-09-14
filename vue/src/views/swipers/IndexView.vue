<template>
  <div>
    <!-- 搜索功能 -->
    <div class="search-container">
      <el-input v-model="searchQuery" placeholder="请输入搜索关键词" clearable @input="getSwiperList" style="width: 300px">
      </el-input>
      <el-button type="primary" :icon="Search" @click="getSwiperList" class="swiperlist-search">搜索</el-button>
    </div>

    <!-- 表格 -->
    <el-table :data="swiperListData" border height="750" style="width: 100%"
      :default-sort="{ prop: 'id', order: 'ascending' }" @sort-change="handleSortChange">
      <el-table-column prop="id" label="ID" width="80" align="center" sortable fixed="left" />

      <el-table-column prop="name" label="名称" width="150" show-overflow-tooltip sortable />

      <el-table-column prop="thumb" label="缩略图" width="150">
        <template #default="{ row }">
          <el-image :src="row.thumb" style="width: 100px; height: 50px" fit="cover" />
        </template>
      </el-table-column>

      <el-table-column prop="url" label="链接" width="250" show-overflow-tooltip sortable />

      <el-table-column prop="status" label="状态" width="100" align="center" sortable />

      <el-table-column prop="priority" label="优先级" width="100" align="center" sortable />

      <el-table-column prop="category_id" label="分类ID" width="100" align="center" sortable />

      <el-table-column prop="modular" label="模块" width="150" align="center" sortable />

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
      <el-button type="primary" @click="handleAdd">新增轮播图</el-button>
    </div>

    <!-- 分页组件 -->
    <el-pagination class="pagination" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[10, 20, 50, 100]" :size="size" :disabled="false" background
      layout="total, sizes, prev, pager, next, jumper" :total="totalSwipers" @size-change="handleSizeChange"
      @current-change="handlePageChange" />
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance, nextTick } from "vue";
import { Delete, Edit, Search } from "@element-plus/icons-vue";

const swiperListData = ref([]);
const totalSwipers = ref(0); // 总轮播图数量
const pageSize = ref(10); // 每页显示的数量
const currentPage = ref(1); // 当前页码
const searchQuery = ref(""); // 搜索关键词
const sortColumn = ref(null); // 排序列
const sortOrder = ref(''); // 排序顺序
const { proxy } = getCurrentInstance();

const getSwiperList = async () => {
  try {
    await nextTick();
    const response = await proxy.$http.get("/swipers/page", {
      params: {
        page: currentPage.value,
        limit: pageSize.value,
        search: searchQuery.value, // 传递搜索关键词
        ...(sortOrder.value && sortColumn.value && { sortField: sortColumn.value }),
        ...(sortOrder.value && { sortOrder: sortOrder.value == 'ascending' ? 'asc' : 'desc' }),
      },
    });
    swiperListData.value = response.data.data.list; // 假设返回的JSON中data字段是轮播图列表
    totalSwipers.value = response.data.data.totalCount; // 假设返回的JSON中total字段是总记录数
  } catch (error) {
    console.error("获取轮播图列表数据失败:", error);
  }
};

const handlePageChange = (newPage) => {
  currentPage.value = newPage;
  getSwiperList(); // 切换页面时重新获取数据
};

const handleSizeChange = (newSize) => {
  pageSize.value = newSize;
  getSwiperList(); // 切换每页显示数量时重新获取数据
};

const handleSortChange = ({ prop, order }) => {
  sortColumn.value = prop;
  sortOrder.value = order;
  getSwiperList(); // 排序变化时重新获取数据
};

const handleAdd = () => {
  // 处理新增轮播图的逻辑
  console.log("Add new swiper");
  // 你可以导航到新增轮播图页面或者弹出新增轮播图的对话框
};

onMounted(() => {
  getSwiperList();
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

.swiperlist-search {
  float: right;
}
</style>
