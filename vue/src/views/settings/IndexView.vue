<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    @select="handleSelect"
  >
  <template v-for="item in filteredMenuItems"
      :key="item.index" >
    <el-sub-menu
      v-if="item.children && item.children.length"
      :index="item.index"
    >
      <template #title>
        <el-icon><component :is="item.icon" /></el-icon>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item
        v-for="child in item.children"
        :key="child.index"
        :index="child.index"
      >
        {{ child.title }}
      </el-menu-item>
    </el-sub-menu>
  </template>
  <template v-for="item in filteredMenuItems"
      :key="item.index">
    <el-menu-item
      
      v-if="!item.children || !item.children.length"
      :index="item.index"
      :disabled="item.disabled"
    >
      <el-icon><component :is="item.icon" /></el-icon>
      <template #title>{{ item.title }}</template>
    </el-menu-item>
  </template>
  </el-menu>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('')
const menuItems = ref([])

const getMenuItemsFromRoutes = () => {
  const routes = router.getRoutes().filter(route => route.meta && route.meta.title)
  console.log("routes===>",routes)
  return routes.map(route => {
      const menuItem = {
        index: route.path,
        title: route.meta.title,
        icon: route.meta.icon || 'Document',
        disabled: route.meta.disabled || false,
        children: []
      }

      if (route.children && route.children.length) {
        menuItem.children = route.children
          .filter(child => child.meta && child.meta.title)
          .map(child => ({
            index: child.path,
            title: child.meta.title
          }))
      }

      return menuItem
    })
}

// 使用 computed 属性进行过滤
const filteredMenuItems = computed(() => {
  return menuItems.value.filter(item => item.children.length > 0 || !item.disabled)
})

const handleSelect = (key) => {
  router.push(key)
}

onMounted(() => {
  menuItems.value = getMenuItemsFromRoutes()
  activeIndex.value = router.currentRoute.value.path
})

watch(
  () => router.currentRoute.value.path,
  (toPath) => {
    activeIndex.value = toPath
  },
  { immediate: true }
)
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
