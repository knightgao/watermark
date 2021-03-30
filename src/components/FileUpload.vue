<template>
  <el-upload
  class="upload-demo"
  action="#"
  list-type="picture-card"
  :auto-upload="false"
  :on-change="handleChange"
>
  <el-button size="small" type="primary">点击上传</el-button>
  <template #tip>
    <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
  </template>
</el-upload>
</template>

<script lang="ts">
import {  defineComponent } from 'vue'
export default defineComponent({
  name: 'FileUpload',
  setup: () => {
    // 上传文件事件
    const handleChange = function (file:any,fileList:any){
      console.log(file)
      console.log(fileList[0])
    }
    return { handleChange }
  }
})
</script>

<style lang="scss">
.FileUpload{
  display: flex;
  justify-content: start;
}
</style>