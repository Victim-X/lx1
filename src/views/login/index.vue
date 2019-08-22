<template>
  <div class="login">
    <el-card class="box-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form :model="formData" :rules="rules" ref="loginForm">
        <el-form-item prop="mobile">
          <el-input v-model="formData.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="formData.code" style="width:70%" placeholder="请输入验证码"></el-input>
          <el-button style="float:right" >发送验证码</el-button>
        </el-form-item>
        <el-form-item  prop="check">
            <el-checkbox v-model="formData.check">我已阅读并同意用户协议和服务条款</el-checkbox>
        </el-form-item>
        <el-form-item>
             <el-button @click="login" style="width:100%" type="primary">立即登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 自定义函数用于进行校验
    var func = function (rule, value, callback) {
      if (value) {
        // 如果值满足校验条件
        // 同意继续向下执行
        callback()
      } else {
        // 如果不满足校验条件
        // 抛出错误
        callback(new Error('必须给我钱，懂？'))
      }
    }
    return {
      formData: {
        mobile: '',
        code: '',
        check: false
      },
      rules: {
        mobile: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        },
        // {
        //   len: 11,
        //   message: '手机号输入错误',
        //   trigger: 'blur'
        // },
        {
          pattern: /^1[3456789]\d{9}$/,
          message: '手机号格式错误'
          // trigger: 'blur'
        }],

        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }, {
          pattern: /^\d{6}$/
        }],
        check: [{
          required: true,
          message: '您必须无条件给我钱',
          validator: func
        }]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate(isOK => {
        if (isOK) {
          this.$axios({
            method: 'post',
            url: '/authorizations',
            data: this.formData // post 参数在data中写入
          }).then(resule => {
            window.localStorage.setItem('user-info', JSON.stringify(resule.data.data))
            // 跳转，使用编程式导航
            this.$router.push('/home')
          }).catch(() => {
            this.$message({
              message: '用户名或密码错误',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/img/login_bg.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 500px;
    height: 380px;

    .title {
         text-align: center;
      margin-bottom: 30px;
      img {
        width: 200px;
      }
    }
  }
}
</style>
