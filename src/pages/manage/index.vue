<template>
  <div class="do-blog-manage">
    <div class="manage-content">
      <p class="manage-header">标题</p>
      <ul>
        <li v-for="(item,index) in allArticle" :key="index">
          <p class="manage-list-title">{{item.title}}</p>
          <span @click="edit(item)" class="edit">编辑</span>
          <span @click="remove(item.id)" class="remove">删除</span>
        </li>
      </ul>
    </div>
    <el-dialog
      title="编辑"
      :visible.sync="dialogVisible"
      width="46%"
      :before-close="handleClose">
      <editor-bar class="publish-content-edit" v-model="detail" :title="title" :isClear="isClear" @change="change"></editor-bar>  
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import api from '@/api/api.js';
import EditorBar from '@/components/wangEnduit';
import './index.scss';
export default {
  name: 'manage',
   data() {
    return {
      allArticle: [],
      dialogVisible: false,
      isClear: false,  
      detail: '',
      title: '',
      id: 0,
      type: 0,
    }
  },
  created() {
    this.getDate({type: 0})
  },
  methods: {
    change(val) {  
      console.log(val)
    },
    edit(val) {
      this.dialogVisible = true
      this.detail = val.content
      this.title = val.title
      this.id = val.id
      this.type = val.type
    },
    submit() {
      this.dialogVisible = false
      let val = {
        id: this.id,
        title: this.title,
        type: this.type,
        content: this.detail,
      }
      console.log(val)
      this.upDate(val)
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    remove(id) {
      console.log(id)

      this.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.removeDate({id:id})
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      })
    },
    async removeDate(params) {
      let data = await api.blog_delete(params);
      console.log(data)
    },
    async upDate(params) {
      let data = await api.blog_upload(params);
      console.log(data)
    },
    async getDate(params) {
      let data = await api.blogList(params);
      if(data.data.length > 0) {
        this.allArticle = data.data;
      }
      console.log(data)
    }
  },
  components: {
    EditorBar
  }
}
</script>

<style scoped>


</style>
