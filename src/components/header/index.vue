<template>
  <div class="do-blog-header">
    <div class="do-blog-content">
      <div class="do-blog-logo">
        <img src="@/assets/logos.png" alt="">
      </div>
      <div class="do-blog-tab">
        <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">
          <el-tab-pane label="文章" name="article"></el-tab-pane>
          <el-tab-pane label="发表" name="publish"></el-tab-pane>
          <el-tab-pane label="关于" name="about"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="do-blog-person">
        <p>欢迎来到小柴的博客~</p>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss'
export default {
   data() {
    return {
      activeName: 'article'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab);
      this.$router.push(`/${tab}`)
    }
  }
}
</script>
<style scoped>


</style>
