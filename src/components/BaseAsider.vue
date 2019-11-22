<template>
  <el-aside v-if="isLogin" class="siderbar" width="auto">
    <el-menu
      class="menu "
      :style="{ width: isCollapsed ? 'auto' : '200px' }"
      :collapse="isCollapsed"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :default-active="$route.path"
    >
      <template v-for="route in navLink">
        <el-submenu :index="route.path">
          <template slot="title">
            <i :class="route.meta.icon"></i>
            <span slot="title">{{ route.meta.title }}</span>
          </template>
          <template v-if="route.children && route.children.length">
            <el-menu-item
              :index="sonRoutes.path"
              v-for="sonRoutes in route.children"
              :key="sonRoutes.path"
            >
              <i :class="sonRoutes.meta.icon"></i>
              <span slot="title">{{ sonRoutes.meta.title }}</span>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>
<script lang="ts">
import { NavArr } from "../utils/interface";
import { State } from "vuex-class";
import { Component, Vue, Prop } from "vue-property-decorator";
import allRoutes from "../router/routes";
@Component({})
export default class BaseAsider extends Vue {
  @State("isCollapsed") public isCollapsed!: boolean;
  @State("isLogin") public isLogin!: boolean;
  public navLink: object[] = allRoutes;
}
</script>
<style lang="less" scoped>
.siderbar {
  background-color: #ccc;
  .menu {
    border: none;
  }
}
</style>
