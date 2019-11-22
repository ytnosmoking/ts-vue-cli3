<template>
  <div>
    <base-title></base-title>
    <div class="pickerCont">
      <div class="picker">
        <el-date-picker
          class="w200"
          v-model="year"
          type="year"
          value-format="yyyy"
          placeholder="选择年"
          size="small"
        ></el-date-picker>
        <el-select class="w200 ml20" size="small" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button size="small" class="ml20" type="primary">重置</el-button>
        <el-button size="small" class="ml20" type="primary">确定</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "TotalIndex"
})
export default class extends Vue {
  private year: string | number = "";
  public options: object[] = [
    {
      value: "1",
      label: "黄金糕"
    },
    {
      value: "2",
      label: "双皮奶"
    },
    {
      value: "3",
      label: "蚵仔煎"
    },
    {
      value: "4",
      label: "龙须面"
    },
    {
      value: "5",
      label: "北京烤鸭"
    }
  ];
  public value: string = "";
}
</script>
<style lang="less" scoped>
.pickerCont {
  overflow-x: auto;
}
.picker {
  display: inline-flex;
  padding: 10px 0;
}
</style>
