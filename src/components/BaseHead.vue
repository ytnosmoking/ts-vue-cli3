<template>
  <div class="baseHead">
    <div class="link">
      <el-switch
        v-if="isLogin"
        :value="!isCollapsed"
        @change="changeCollapsed(!isCollapsed)"
        active-color="#42b983"
        inactive-color="#ccc"
        class="collapsed"
      >
      </el-switch>
      <span class="fz24 ">{{ schoolName }}</span>
    </div>
    <slot name="content"></slot>
    <el-button type="primary" icon="el-icon-setting" @click="exitLogin"
      >EXIT</el-button
    >
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Mutation, State } from "vuex-class";
import { removeItem, getItem } from "utils/tools";
@Component({})
export default class BaseHead extends Vue {
  @State("isCollapsed") public isCollapsed!: boolean;
  @State("isLogin") public isLogin!: boolean;
  @Mutation("changeCollapsed") public changeCollapsed!: void;
  @Mutation("checkIsLogin") public checkIsLogin: any;
  @Prop() private navLink!: object[];
  @Prop() private schoolName!: string;
  public exitLogin() {
    this.checkIsLogin(false);
    removeItem("isLogin");
    this.$router.push("/");
  }

  private mounted(): void {
    console.log(" in Head");
  }
}
</script>
<style lang="less" scoped>
.baseHead {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  // padding: 0 50px;

  .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: orange;
    .collapsed {
      margin-right: 10px;
    }

    // span {
    //   height: 40px;
    //   width: 60px;
    //   text-align: center;
    //   line-height: 40px;
    //   background-color: red;
    //   margin-right: 20px;
    //   &.active {
    //     color: #fff;
    //     background-color: blue;
    //   }
    // }
  }
}
</style>
