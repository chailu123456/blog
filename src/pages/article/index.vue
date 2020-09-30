<template>
  <div class="do-blog-article">
    <div class="do-blog-banner">
      <div class="banner-cont">
        <div class="banner-title">
          <h3>
            MY
            <br>
            BLOG
          </h3>
          <h4>well-balanced heart</h4>
        </div>
      </div>
    </div>
    <div class="blog-article-content">
      <div class="article-content-title">
        <!-- <p>前端技术</p> -->
        <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">
          <el-tab-pane label="全部" name="0"></el-tab-pane>
          <el-tab-pane label="HTML" name="1"></el-tab-pane>
          <el-tab-pane label="JS" name="2"></el-tab-pane>
          <el-tab-pane label="其它" name="3"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="article-content-list">
        <ArticleList :articleDate = articleDate></ArticleList>
        <div class="content-list-right">
          <div class="content-list-search">
            <el-input
              placeholder="请输入内容"
              v-model="input"
              clearable>
            </el-input>
            <el-button @click="search" type="primary">搜索</el-button>
          </div>
          <div class="content-list-saying">
            <h4 class="saying-title">每日一句</h4>
            <div class="saying-content">
              <h3>{{updatetime}}</h3>
              <p>别让你不能做的事妨碍到你能做的事。</p>
            </div>
          </div> 
          <div class="hot-artice">
            <h4 class="saying-title">热门文章</h4>
            <ul class="hot-list-left">
              <li v-for="(item,index) in hotArtic" :key="index">
                <img class="title" src="@/assets/web.jpg" alt="">
                <div class="hot-show">
                  <div class="hot-show-title">
                    {{item.title}}
                  </div>
                  <div class="hot-show-updatetime">
                    <i class="el-icon-time"></i>
                    {{new Date().format(item.updatetime)}}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss';
import ArticleList from './components/articeList';
import api from '@/api/api.js';
export default {
  name: 'Article',
   data() {
    return {
      input: '',
      activeName: '0',
      articleDate: [],
      hotArtic:[],
      form:{
        type: 0
      },
      updatetime: new Date().format('Y年m月d日 星期z')
    }
  },
  created() {
    this.getDate(this.form)
  },
  methods: {
    handleClick(tab) {
     this.getDate({type:tab})
    },
    search() {
      this.$store.dispatch('increment','大家答案')
    },
    async getDate(params) {
      let data = await api.blogList(params);
      if(data.data.length > 0) {
        this.articleDate = data.data;
        this.hotArtic = JSON.parse(JSON.stringify(data.data)).slice(0, 2)
        console.log(this.hotArtic)
      }
      console.log(data)
    }
  },
  components: {
    ArticleList
  }
}
</script>

<style scoped>


</style>
