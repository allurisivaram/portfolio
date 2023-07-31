<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import NavigationTabs from './components/NavigationTabs.vue';
  import NavigationMenu from './components/NavigationMenu.vue';
</script>

<!-- <img alt="Vue logo" class="logo" src="https://nivaappstorage.blob.core.windows.net/images/house--img.png"  /> -->
<template>
  <el-row>
    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
      <el-aside class="side-nav">
        <header>
          <NavigationMenu/>
        </header>
      </el-aside>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
      <el-main>
        <RouterView />
      </el-main>
    </el-col>
  </el-row>
</template>

<style>

.el-aside {
  width:100%;
  height: 100vh;
  position: sticky;
  top:0;
  left:0;
  background-color: #F8F4EC;
}

/* .grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: antiquewhite;
} */
</style>
