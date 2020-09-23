<template>
  <div class="do-blog-index">
    <Header></Header>
    <div class="blog-body">
      <router-view/>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import './index.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
export default {
   data() {
    return {
      
    }
  },
  methods: {

  },
  components: {
    Footer,
    Header
  }
}
</script>

<style scoped>
.demo {
  background-color: #eee;
} 

</style>
