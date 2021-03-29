<template>
  <div class="OperationButton">
  选择图片:
  <input type="file" @click="handleClick($event)" @change="handleChange($event)" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'OperationButton',
  setup: () => {
    // 点击处理事件
    const handleClick = function (e){
      console.log('handleClick',e)
    }
    // 上传文件事件
    const handleChange = function (e){
      const input  = e.target as HTMLInputElement;
      let files = input.files;
      if(files){
        console.log(files[0])
      }
    }
    return { handleClick,handleChange }
  }
})
</script>

<style lang="scss">
.OperationButton{
  display: flex;
  justify-content: start;
}
</style>