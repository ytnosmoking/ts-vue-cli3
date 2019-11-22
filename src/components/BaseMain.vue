<template>
  <el-container>
    <el-header class="head trans" v-show="isLogin">
      <transition
        mode="out-in"
        enter-active-class="slideInDown animated"
        leave-active-class="slideOutUp animated"
      >
        <base-head schoolName="武汉理工大学预期学习结果" v-if="isLogin">
        </base-head>
      </transition>
    </el-header>
    <el-main class="baseMain">
      <el-breadcrumb class="bread" v-if="isLogin" separator="/">
        <el-breadcrumb-item
          v-for="route in $route.matched"
          :key="route.path"
          :to="{
            name: route.name,
            query: route.name === $route.name ? $route.query : {}
          }"
        >
          {{ route.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
      <router-view class="baseView"></router-view>
    </el-main>
  </el-container>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getCommon } from "utils/tools";
import { State } from "vuex-class";
const BaseHead = getCommon("BaseHead");
@Component({
  name: "BaseMain",
  components: {
    BaseHead
  }
})
export default class extends Vue {
  @State("isLogin") public isLogin!: boolean;
  private mounted(): void {
    console.log(this.$route);
  }
}
</script>
<style lang="less" scoped>
.head {
  box-shadow: 0 1px 5px #888;
}
.baseMain {
  padding: 40px 20px;
  position: relative;

  .bread {
    position: absolute;
    left: 20px;
    top: 14px;
  }
}
.baseView {
  height: 100%;
}
</style>
