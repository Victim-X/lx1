<template>
  <el-row type="flex" justify="space-between" style="padding:15px 0">
    <el-col :span="6" style="display:flex;align-items:center">
      <div>
        <i class="el-icon-s-fold" style="font-size:20px;margin-right:4px"></i>
        <span>xxxxxx股份有限公司</span>
      </div>
    </el-col>
    <el-col :span="3" style="display:flex;align-items:center">
      <img style='width:40px;height:40px;border-radius:50%;margin-right:10px;align-items:center' src="../../assets/img/avatar.jpg" alt />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          用户名
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>git地址</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {}
</script>

<style>
</style>
