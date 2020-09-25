<template>
    <div class="do-login">
      <img class="bg" src="@/assets/login_bg.jpg" alt="">
      <img class="bg-title" src="@/assets/login_title.png" alt="">
      <div class="do-login-form">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="account">
            <el-input v-model.number="ruleForm.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
import './index.scss';
import api from '@/api/api.js';
console.log(api)
export default {
   data() {
     var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
      callback();
    };
    return {
      ruleForm: {
        pass: '',
        account: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        account: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate( async (valid) => {
        if (valid) {
          let data = await api.login(this.ruleForm);
          console.log(data)
          if(data.data.length > 0) {
            this.$store.dispatch('increment', this.ruleForm.account).then(v => {
              this.$router.push({ path: '/' })
            })
          } else {
            this.$message({
              message: '账号密码有误',
              type: 'warning'
            });
          }
          
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style scoped>

</style>
