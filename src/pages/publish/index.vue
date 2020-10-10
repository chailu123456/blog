<template>
  <div class="do-blog-publish">
    <div class="publish-title">
      <span class="titles">标题</span>
      <el-input class="title-input" v-model="title" placeholder="请输入标题"></el-input>
    </div>
    <div class="publish-select">
      <span class="titles">分类</span>
      <div class="select-radio">
        <el-radio v-model="radio" label="1">HTML/CSS</el-radio>
        <el-radio v-model="radio" label="2">JS(Vue/React)</el-radio>
        <el-radio v-model="radio" label="3">其它</el-radio>
      </div>
    </div>
    <div class="publish-edit">
      <span class="publish-content">内容</span>
      <editor-bar class="publish-content-edit" v-model="detail" :isClear="isClear" title="title" @change="change"></editor-bar>  
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
import api from '@/api/api.js';
export default {
  name: 'publish',
   data() {
    return {
      title: '',
      radio: '1',
      isClear: false,  
      detail: ''
    }
  },
  methods: {
    change(val) {  
      console.log(val)  
    },
    submit() {
      let val = {
        title: this.title,
        type: this.radio,
        content: this.detail,
      }
      this.getDate(val)
      
    },
    cancle() {
      this.$message({
        message: '你还不配,因为你蠢',
        type: 'warning'
      });
    },
    async getDate(params) {
      let data = await api.blogAdd(params);
      console.log(data)
      if(data.code === 200) {
        this.$message({
          message: '成功',
          type: 'success'
        });
        this.$router.push('/article')
      }
    }
  },
  components: {
    EditorBar
  }
}
</script>

<style scoped>


</style>
