<script lang="ts" setup>
    import { ref } from 'vue'
    import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    } from '@element-plus/icons-vue'

    import { useRouter } from 'vue-router'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const router = useRouter()

const goToAbout = () => {
    router.push('/about')
}

const goToHome = () => {
    router.push('/')
}
</script>

<template>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1">
        <el-icon><icon-menu @click="goToAbout"/></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><document @click="goToHome"/></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>