<template>
  <div class="title">
    <span class="metaTitle fz20 bold">{{ $route.meta.title }}</span>
    <slot name="middle"></slot>
    <slot name="end"></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "BaseTitle"
})
export default class extends Vue {}
</script>
<style lang="less" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  position: relative;
  &::before {
    content: " ";
    width: 2px;
    height: 80%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-color: #1491cf;
  }
}
</style>
