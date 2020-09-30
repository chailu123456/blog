<template>
  <div class="do-blog-header">
    <div class="do-blog-content">
      <div class="do-blog-logo">
        <h3>MY</h3>
        <h3>BLOG</h3>
        <!-- <img src="@/assets/logos.png" alt=""> -->
      </div>
      <div class="do-blog-tab">
        <el-tabs v-model="activeName" @tab-click="handleClick(activeName)">
          <el-tab-pane label="文章" name="article"></el-tab-pane>
          <el-tab-pane label="发表" name="publish"></el-tab-pane>
          <el-tab-pane label="关于" name="about"></el-tab-pane>
          <el-tab-pane label="管理" name="manage"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="do-blog-person">
        <span>Hi,{{username}}</span>
        <span @click="loginOut">退出</span>
        <span @click="loginOut" v-if="!username">Hi,请登录</span>
        <p>欢迎来到小柴的博客~</p>
      </div>
    </div>
  </div>
</template>
<script>
import './index.scss';
import { mapState, mapActions } from 'vuex';
export default {
   data() {
    return {
      activeName: 'article'
    }
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push(`/${tab}`)
    },
    loginOut() {
      localStorage.clear()
      this.$store.dispatch('increment', '')
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapState({
      username: state => state.username
    }),
    ...mapActions([
      'increment'
    ])
  }
}
</script>
<style scoped>


</style>
