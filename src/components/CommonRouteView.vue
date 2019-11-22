<template>
  <transition
    mode="out-in"
    enter-active-class="slideInLeft animated"
    leave-active-class="slideOutRight animated"
  >
    <router-view></router-view>
  </transition>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "CommonRouterView"
})
export default class extends Vue {}
</script>
<style lang="less" scoped></style>
