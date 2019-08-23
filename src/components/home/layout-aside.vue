<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <!-- <el-menu>导航菜单 -->
    <el-menu
      background-color="#353b4e"
      text-color="#adafb5"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/home">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <!-- el-submenu折叠菜单 -->
      <el-submenu index='content'>
        <template slot="title">
          <i class="el-icon-s-unfold"></i>
          <span>内容管理</span>
        </template>
        <!-- <el-menu-item-group>菜单分组 -->
        <!-- el-menu-item菜单选项 -->
        <el-menu-item index="/home/publish">发布文章</el-menu-item>
        <el-menu-item index="/home/articles">文章列表</el-menu-item>
        <el-menu-item index="/home/comment">评论列表</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
      <el-submenu index='fans'>
        <template slot="title">
          <i class="el-icon-s-marketing"></i>
          <span>粉丝管理</span>
        </template>
        <!-- <el-menu-item-group>菜单分组 -->
        <!-- el-menu-item菜单选项 -->
        <el-menu-item index="/home/fansimg">粉丝画像</el-menu-item>
        <el-menu-item index="/home/fansdata">图文数据</el-menu-item>
        <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
        <el-menu-item index="/home/fansinfo">粉丝概况</el-menu-item>
      </el-submenu>
      <el-menu-item index="/home/account">
        <i class="el-icon-user"></i>
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
