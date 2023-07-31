<script setup lang="ts">
    import { RouterLink, useRoute, useRouter } from 'vue-router'
    import { ref } from 'vue'

    const router = useRouter()
    const route = useRoute()
    const tabPosition = ref('left')

    function toHome(){
        router.push('/home')
    }

    function toAbout(){
        router.push('/about')
    }

</script>

<template>
    <el-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
        <el-tab-pane label="Home"></el-tab-pane>
        <el-tab-pane label="About"></el-tab-pane>
    </el-tabs>
</template>

<style scoped>
    .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
    }

    .el-tabs--right .el-tabs__content,
    .el-tabs--left .el-tabs__content {
    height: 100%;
    }
</style>