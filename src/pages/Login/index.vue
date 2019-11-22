<template>
  <div class="loginCont">
    <img class="logo" :src="'./img/school.png'" alt="" />
    <el-form :model="loginForm" ref="loginForm" :rules="rules" class="">
      <el-form-item prop="username">
        <el-input
          prefix-icon="el-icon-user"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          prefix-icon="el-icon-lock"
          v-model="loginForm.password"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="width:100%" type="primary" @click="Login"
          >Login</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Mutation, Action } from "vuex-class";
import { Form as ElForm, Input } from "element-ui";
@Component({})
export default class Login extends Vue {
  public loginForm = {
    username: "",
    password: ""
  };
  public rules = {
    username: [
      {
        required: true,
        message: "输入用户名",
        trigger: "blur"
      }
    ],
    password: [{ required: true, message: "输入密码", trigger: "blur" }]
  };
  // public username: string = "";
  // public password: string = "";
  @Action("Login") public LoginSystem: any;

  public async Login() {
    (this.$refs.loginForm as ElForm).validate(async valid => {
      if (valid) {
        const { username: teacherNo, password } = this.loginForm;
        const params = {
          teacher_no: teacherNo,
          password
        };
        const res = await this.LoginSystem(params);

        if (res.errcode === 0) {
          this.$router.push({ name: "total" });
        }
      }
    });
  }
}
</script>
<style lang="less" scoped>
.loginCont {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    width: 500px;
    margin-top: -100px;
    margin-bottom: 20px;
  }
}
</style>
