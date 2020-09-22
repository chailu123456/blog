<template>
  <div class="do-blog-index">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
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
