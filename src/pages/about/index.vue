<template>
  <div class="do-blog-about">
    <div class="about-person">
      <h3>我的介绍</h3>
      <div class="person-introduce">
        <img class="introduce-img" src="@/assets/web.jpg" alt="">
        <div class="introduce-show">
          <p>小柴</p>
          <p>18岁</p>
          <p>前端工程师，设计师</p>
          <p>爱好旅游,打篮球</p>
        </div>
      </div>
      <h3>我的技能</h3>
      <div class="person-technical">
        <div style="margin-left:30px;height: 300px;">
          <el-steps direction="vertical" :active="3">
            <el-step title="技能 1" description="熟练使用HTML，css，js"></el-step>
            <el-step title="技能 2" description="熟练使用react、vue框架"></el-step>
            <el-step title="技能 3" description="抗压能力强，有信心在不同的工作强度下进行开发工作;"></el-step>
          </el-steps>
        </div>
      </div>
      <h3>联系方式</h3>
      <div class="contact">
        <p>微信：1234567890</p>
        <p>电话：123456789</p>
      </div>
      
    </div>
  </div>
</template>
<script>
import './index.scss';
export default {
  name: 'about',
   data() {
    return {

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
