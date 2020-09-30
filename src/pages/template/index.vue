<template>
  <div class="do-article-detail">
    <img src="@/assets/timg.jpg" alt="">
    <div class="detail-show">
      <h3>{{title}}</h3>
      <p class="detail-show-time">
        <i class="el-icon-time"></i>
        <span>{{new Date().format(article[0].updatetime)}}</span>
      </p>
    </div>
    <div class="detail-artice">
      <div class="artice" v-html="article[0].content"></div>
    </div>
  </div>
</template>
<script>
import './index.scss';
import api from '@/api/api.js';
export default {
  name: 'detail',
  data() {
    return {
      article:[
        {}
      ]
    }
  },
  created() {
    console.log(this.$route.params)
    console.log(this.$route.params.id)
    this.getDate({id: this.$route.params.id})
  },
  methods: {
    async getDate(params) {
      let data = await api.blogListDetail(params);
      this.article = data.data;
      console.log(data)
    }
  }
}
</script>
<style scoped>


</style>
