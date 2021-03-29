<template>
    <div>
      {{helloText}}
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
name: "menu",
  setup:function (){
      // 欢迎词位置
      let helloText = ref('hello');
      return {
        helloText
      }
  }
})
</script>

<style scoped>

</style>