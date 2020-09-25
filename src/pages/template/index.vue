<template>
  <div class="do-article-detail">
    <img src="@/assets/timg.jpg" alt="">
    <div class="detail-show">
      <h3>{{title}}</h3>
      <p class="detail-show-time">
        <i class="el-icon-time"></i>
        <span>{{time}}</span>
      </p>
    </div>
    <div class="detail-artice">
      <div class="artice" v-html="content"></div>
    </div>
  </div>
</template>
<script>
import './index.scss';
export default {
  name: 'detail',
  data() {
    return {
      id:2,
      title: '前端那些不能说的秘密~~~~~~~HTML',
      content: `<p>  详解vue 路由跳转四种方式 (带参数)</p><p>详解vue 路由跳转四种方式 (带参数)</p><p>详解vue 路由跳转四种方式 (带参数)</p>`,
      time: new Date().format(1600929330281) || 0,
    }
  },
  created() {
    console.log(this.$route.params)
    console.log(this.$route.params.id)
  },
  methods: {

  }
}
</script>
<style scoped>


</style>
