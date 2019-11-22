<template>
  <el-container class="baseCont">
    <base-asider></base-asider>
    <base-main></base-main>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getCommon } from "utils/tools";
const BaseAsider = getCommon("BaseAsider");
const BaseMain = getCommon("BaseMain");

@Component({
  components: {
    BaseAsider,
    BaseMain
  }
})
export default class App extends Vue {}
</script>

<style lang="less" scoped>
.baseCont {
  height: 100vh;
  min-width: 1024px;
}
</style>
