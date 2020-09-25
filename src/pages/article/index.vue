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
          <el-tab-pane label="HTML" name="HTML"></el-tab-pane>
          <el-tab-pane label="JS" name="JS"></el-tab-pane>
          <el-tab-pane label="其它" name="其它"></el-tab-pane>
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
              <h3>{{time}}</h3>
              <p>别让你不能做的事妨碍到你能做的事。</p>
            </div>
          </div> 
          <div class="hot-artice">
            <h4 class="saying-title">热门文章</h4>
            <ul class="hot-list-left">
              <li>
                <img src="@/assets/web.jpg" alt="">
                <div class="hot-show">
                  <div class="hot-show-title">
                    前端那些不能说的秘密那些不能说的秘密那些不能说的秘密
                  </div>
                  <div class="hot-show-time">
                    2020-08-15 10:29:35
                  </div>
                </div>
              </li>
              <li>
                <img src="@/assets/web.jpg" alt="">
                <div class="hot-show">
                  <div class="hot-show-title">
                    前端那些不能说说的秘密
                  </div>
                  <div class="hot-show-time">
                    2020-08-15 10:29:35
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
export default {
  name: 'Article',
   data() {
    return {
      input: '',
      activeName: 'HTML',
      articleDate: [
        {
          id:1,
          title: '前端那些不能说的秘密~~~~~~~HTML',
          content: `<p>详解vue 路由跳转四种方式 (带参数)</p>`,
          time: 1600929330281
        }
      ],
      time: new Date().format('Y年m月d日 星期z')
    }
  },
  methods: {
    handleClick(tab) {
      if(tab === 'HTML') {
        this.articleDate = [
          {
            id:2,
            title: '前端那些不能说的秘密~~~~~~~HTML',
            content: `<p>详解vue 路由跳转四种方式 (带参数)</p>`,
            time: 1600929330281
          }
        ]
      } else if(tab === 'JS') {
        this.articleDate = [
          {
            id:3,
            title: '前端那些不能说的秘密~~~~~~~JS',
            content: `<p>详解vue 路由跳转四种方式 (带参数)</p>`,
            time: 1600929330281
          },
          {
            id:5,
            title: '前端那些不能说的秘密~~~~JAVASCRIPT',
            content: `<p>详解vue 路由跳转四种方式 (带参数)</p>`,
            time: 1600929330281
          }
        ]
      } else {
        this.articleDate = [
          {
            title: '前端那些不能说的秘密~~~~~~~其它',
            content: `<p>其它一些数据</p>`,
            time: 1600929330281
          }
        ]
      }
      
      console.log(tab);
    },
    search() {
      console.log(456)
      this.$store.dispatch('increment','大家答案')
    }
  },
  components: {
    ArticleList
  }
}
</script>

<style scoped>


</style>
