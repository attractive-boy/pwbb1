<template>
  <div style="app-header">
    <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" class="el-menu" @select="handleSelect">
      <el-menu-item index="0" class="header-title">
        <h4>{{ title }}</h4>
      </el-menu-item>
      <div class="flex-grow" />
      <el-menu-item v-for="(item, index) in routes" :key="index" :index="item.path">{{
        item.meta.title
      }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup >
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('陪玩报备管理平台')
const activeIndex = ref('')

watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    activeIndex.value = toPath
  },
  { immediate: true, deep: true }
)

const handleSelect = (key) => {
  router.push(key)
}

const routes = ref([])

const changeRoute = () => {
  routes.value = router.getRoutes().filter((route) => {
    return route.meta && route.meta.title 
  })

  routes.value = routes.value.sort((a, b) => {
    return a.meta.orderNum - b.meta.orderNum
  })
}


onMounted(() => {

  changeRoute()
})

</script>

<style scoped>
.el-menu {
  border-radius: 10px;
  overflow: hidden;
}

.flex-grow {
  flex-grow: 1;
}
</style>
