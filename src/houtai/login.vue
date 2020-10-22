<template>
  <section>
    <div class="login" v-if="showpage">
      <h1 class="title">用户登录/User login</h1>
     <form class="loginForm">
        <div class="admin">账户：<input type="text" v-model="admin" placeholder="请输入账户" autocomplete/></div>
        <div class="password">密码：<input type="password" v-model="password" placeholder="请输入密码" autocomplete/></div>
        <input  type="button" v-on:click="loginUser" class="button" value="登录">
      </form>
      <P class="register"><span @click="showpage=!showpage">注册</span></P>
    </div>
    <register v-if="!showpage" @showpage = 'changeShowpage'/>
  </section>
</template>

<script>
import { login } from '@/axios/user.js'
import register from './register.vue'
export default {
  name: 'login',
  components: {
    register
  },
  data () {
    return {
      admin: '',
      password: '',
      showpage: true
    }
  },
  methods: {
    changeShowpage (data) {
      this.showpage = data
    },
    loginUser () {
      let form = {
        userName: this.admin,
        password: this.password
      }
      login(form)
        .then(res => {
          if (res.code === 400) {
            this.$message.error('账户或密码错误')
          } else {
            this.$router.push({path: '/'})
            this.$message({
              showClose: true,
              message: '登录成功',
              type: 'success'
            })
          }
        })
    }
  }
}
</script>

<style lang="less" scoped>
  .login {
    width: 290px;
    height: 300px;
    margin: 10% auto 0px;
    box-shadow: 0px 0px 4px #9e9e9eb3;
    border-radius: 2px;
    background-color: #ffffff6e;
    .title {
     font-size: 21px;
     line-height: 60px;
     text-align: center;
     letter-spacing: 0px;
     background: #9e9e9e33;
     color: #111111ba
    }
    .admin,.password {
      text-align: center;
      font-size: 17px;
      height: 60px;
      line-height: 70px;
      .admin-change {
        display: inline-block;
      }
      input {
        height: 33px;
        width: 197px;
        border: 1px solid #00000066;
        text-indent: 10px;
        border-radius: 2px;
        vertical-align: middle;
      }
    }
    .button {
      display: block;
      font-size: 17px;
      line-height: 35px;
      width: 220px;
      margin: 30px auto 0px;
      background: #03a9f4d9;
      box-shadow: 1px 1px 3px #9E9E9E;
      border: 0px;
      border-radius: 4px;
      cursor: pointer;
      color: white;
    }
    .register {
      text-align: right;
      font-size: 17px;
      padding-right: 20px;
      margin-top: 20px;
      cursor: pointer;
      color: #03A9F4;
      font-weight: 600;
      span:hover {
        color: #F44336
      }
    }
  }
</style>
