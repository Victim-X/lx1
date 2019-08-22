<template>
<el-container>
  <el-aside style="background-color: #323745;width:200px;height:100vh">
<layout-aside></layout-aside>
  </el-aside>
  <el-container>
    <el-header>
      <layout-header></layout-header>
    </el-header>
    <el-main>主体</el-main>
  </el-container>
</el-container>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'
export default {
  name: 'home',
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader
  }
}
</script>
