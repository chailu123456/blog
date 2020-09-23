<template>
  <div class="do-blog-publish">
    <div class="publish-title">
      <span class="titles">标题</span>
      <el-input class="title-input" v-model="input" placeholder="请输入标题"></el-input>
    </div>
    <div class="publish-edit">
      <span class="publish-content">内容</span>
      <editor-bar class="publish-content-edit" v-model="detail" :isClear="isClear" @change="change"></editor-bar>  
    </div>
    <div class="submit">
      <el-button type="primary" @click="submit">发布</el-button>
      <el-button @click="cancle">取消</el-button>
    </div>
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
    submit() {
      this.$message({
        message: '你不配,因为你傻',
        type: 'warning'
      });
    },
    cancle() {
      this.$message({
        message: '你还不配,因为你蠢',
        type: 'warning'
      });
    }
  },
  components: {
    EditorBar
  }
}
</script>

<style scoped>


</style>
