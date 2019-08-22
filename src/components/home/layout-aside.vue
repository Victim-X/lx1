<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <!-- <el-menu>导航菜单 -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#353b4e"
      text-color="#adafb5"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="0">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <!-- el-submenu折叠菜单 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-s-unfold"></i>
          <span>内容管理</span>
        </template>
        <!-- <el-menu-item-group>菜单分组 -->
        <!-- el-menu-item菜单选项 -->
        <el-menu-item index="1-1">发布文章</el-menu-item>
        <el-menu-item index="1-2">内容列表</el-menu-item>
        <el-menu-item index="1-3">评论列表</el-menu-item>
        <el-menu-item index="1-4">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-marketing"></i>
          <span>粉丝管理</span>
        </template>
        <!-- <el-menu-item-group>菜单分组 -->
        <!-- el-menu-item菜单选项 -->
        <el-menu-item index="2-1">粉丝画像</el-menu-item>
        <el-menu-item index="2-2">图文数据</el-menu-item>
        <el-menu-item index="2-3">粉丝列表</el-menu-item>
        <el-menu-item index="2-3">粉丝概况</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-user
"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {}
</script>

<style lang='less' scoped>
.layout-aside {
  .title {
    padding: 15px 0;
    text-align: center;
    background-color: #2e2f32;
    img {
      width: 120px;
      height: 30px;
    }
  }
}
</style>
