<template>
  <section>
    <div class="register">
      <h1 class="title">用户注册/User register</h1>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账户" prop="admin">
          <el-input v-model.number="ruleForm.admin"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <p class="login"><span @click="changeShowpage">返回登录</span></p>
    </div>
  </section>
</template>

<script>
import { register } from '@/axios/user.js'

export default {
  name: 'register',
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账户不能为空'))
      } else callback()
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        admin: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        admin: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    changeShowpage () {
      this.$emit('showpage', true)
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let form = {
            userName: this.ruleForm.admin.toString(),
            password: this.ruleForm.pass.toString()
          }
          register(form)
            .then((res) => {
              if (res.code === 400) {
                this.$message({
                  message: '账户已存在',
                  type: 'warning'
                })
              } else {
                this.$confirm('是否跳转到登录页', '提示', {
                  confirmButtonText: '确定',
                  cancelButtonText: '取消',
                  type: 'warning'
                }).then(() => {
                  this.$emit('showpage', true)
                  this.$message({
                    type: 'success',
                    message: '跳转'
                  })
                }).catch(() => {
                  this.$message({
                    type: 'info',
                    message: '已取消跳转'
                  })
                })
              }
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
  .el-form {
    margin-top: 20px;
  }
  .el-form-item {
    width: fit-content;
  }
  .el-form-item/deep/.el-form-item__label {
     width: 80px !important;
   }
  .el-form-item/deep/.el-form-item__content {
    width: 222px;
    margin-left: 80px!important;
  }
  .el-form-item/deep/.el-input__inner {
    height: 34px;
  }
  .register {
    width: 339px;
    height: 360px;
    margin: 10% auto 0px;
    box-shadow: 0px 0px 4px #9e9e9eb3;
    border-radius: 4px;
    background-color: #ffffff6e;
    .title {
     font-size: 21px;
     line-height: 60px;
     text-align: center;
     letter-spacing: 0px;
     background: #9e9e9e33;
     color: #111111ba
    }
    .login {
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
