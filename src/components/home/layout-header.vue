<template>
  <el-row type="flex" justify="space-between" style="padding:15px 0">
    <el-col :span="6" style="display:flex;align-items:center">
      <div>
        <i class="el-icon-s-fold" style="font-size:20px;margin-right:4px"></i>
        <span>xxxxxx股份有限公司</span>
      </div>
    </el-col>
    <el-col :span="3" style="display:flex;align-items:center">
      <!-- 头像图片未设置需要给一个默认值 -->
      <img
        style="width:40px;height:40px;border-radius:50%;margin-right:10px;align-items:center"
        :src="user.photo ? user.photo:defaultImg"
        alt
      />
      <el-dropdown @command='commandAction'>
        <span class="el-dropdown-link">
          {{ user.name }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command='account'>个人信息</el-dropdown-item>
          <el-dropdown-item command='git'>git地址</el-dropdown-item>
          <el-dropdown-item command='out'>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      defaultImg: require('../../assets/img/avatar.jpg')// require的图片编程base64
    }
  },
  methods: {
    // 参数中的command是点击的菜单项的属性值
    commandAction (command) {
      if (command === 'account') {
        // this.$router.push('/home/account')
      } else if (command === 'git') {
        window.location.href = 'https://github.com/Victim-X/lx1'
      } else {
        window.localStorage.clear()// 擦除本项目在浏览器中的所有缓存
        this.$router.push('/login')
      }
    },
    getUserInfo () {
      this.$axios({
        // method: 'get'//默认是get  可以不用写
        url: '/user/profile'
      }).then(result => {
        this.user = result.data // 获取到用户的最新的个人资料
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style>
</style>
