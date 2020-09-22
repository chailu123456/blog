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
        <p>前端技术</p>
      </div>
      <div class="article-content-list">
        <ul class="content-list-left">
          <li>
            <img src="@/assets/web.jpg" alt="">
            <div class="article-show">
              <div class="article-show-title">
                前端那些不能说的秘密~~~~~~~
              </div>
              <div class="article-show-content">
                详解vue 路由跳转四种方式 (带参数)
              </div>
              <div class="article-show-time">
                2020-08-15 10:29:35
              </div>
            </div>
          </li>
          <li>
            <img src="@/assets/web.jpg" alt="">
            <div class="article-show">
              <div class="article-show-title">
                前端那些不能说的秘密~~~~~~~
              </div>
              <div class="article-show-content">
                详解vue 路由跳转四种方式 (带参数)
              </div>
              <div class="article-show-time">
                2020-08-15 10:29:35
              </div>
            </div>
          </li>
          <li>
            <img src="@/assets/web.jpg" alt="">
            <div class="article-show">
              <div class="article-show-title">
                前端那些不能说的秘密~~~~~~~
              </div>
              <div class="article-show-content">
                详解vue 路由跳转四种方式 (带参数)
              </div>
              <div class="article-show-time">
                2020-08-15 10:29:35
              </div>
            </div>
          </li>
        </ul>
        <div class="content-list-right">
          <div class="content-list-search">
            <el-input
              placeholder="请输入内容"
              v-model="input"
              clearable>
            </el-input>
            <el-button type="primary">搜索</el-button>
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
export default {
  name: 'Article',
   data() {
    return {
      input: '',
      time: new Date().format('Y年m月d日 星期z')
    }
  },
  methods: {

  },
  components: {
    
  }
}
</script>

<style scoped>


</style>
