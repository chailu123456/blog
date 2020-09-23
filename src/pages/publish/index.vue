<template>
  <div class="do-blog-publish">
    <div class="publish-title">
      <span class="titles">标题</span>
      <el-input class="title-input" v-model="input" placeholder="请输入标题"></el-input>
    </div>
    <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar>  
  </div>
</template>
<script>
import './index.scss';
import EditorBar from '@/components/wangEnduit';

export default {
  name: 'publish',
   data() {
    return {
      input: '',
      test:'',  
      isClear: false,  
      detail:''
    }
  },
  methods: {
    change(val) {  
        console.log(val)  
    },
  },
  components: {
    EditorBar
  }
}
</script>

<style scoped>


</style>
