<template>
<el-container>
  <el-aside style="background-color: #323745;width:200px;height:100vh">
<layout-aside></layout-aside>
  </el-aside>
  <el-container>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <!-- 二级路由容器 -->
    <router-view></router-view>
  </el-container>
</el-container>
</template>

<script>

export default {

}
</script>
