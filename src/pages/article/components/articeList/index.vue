<template>
  <div class="do-artice-list">
    <ul class="content-list-left" v-if="articleDate.length > 0">
      <li v-for="(item, index) in articleDate" :key="index" @click="lookDetail(item)">
        <img class="title-img" src="@/assets/web.jpg" alt="">
        <div class="article-show">
          <div class="article-show-title">
            {{item.title}}
          </div>
          <div class="article-show-content" v-html="item.content">
          </div>
          <div class="article-show-time">
            <i class="el-icon-time"></i>
            {{new Date().format(item.updatetime)}}
          </div>
        </div>
      </li>
    </ul>
    <div v-else class="no-data">
      暂无数据
    </div>
  </div>
</template>
<script>

import './index.scss';
export default {
  props: {
    articleDate:{
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      
    }
  },
  created() {
  },
  methods: {
    lookDetail(val) {
      console.log(this)
      this.$router.push({
        name: 'detail',
        params: {
          id: val.id
        }
      })
    }
  }
}
</script>
<style scoped>

</style>
