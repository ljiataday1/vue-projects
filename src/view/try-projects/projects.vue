<!--
 * @Author: Aidan
 * @Date: 2020-08-27 10:56:16
 * @LastEditTime: 2020-09-03 11:39:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \projectname\src\view\try-projects\projects.vue
-->
<template>
  <div class="content">
    <div class="text">my first Vue projects</div>
    <router-link to="/HelloWorld">
      <div>11111{{ projectsName }}</div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Projects',
  data() {
    return {
      projectsName: 'Hey Brother'
    }
  },
  computed: {
    ...mapState(['token'])

  },
  created() {
    this.csh()
  },
  methods: {
    csh() {
      this.$store.commit('SET_TOKEN', '1111111111')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/base.scss";
.content {
  @include flexdw(space-between);
  flex-wrap: wrap;
  background-color: #f6f6f6;
  font-size:20px ;
  .text {
    width: 100%;
    font-size: 32px;
  }
  a{display: block;}
}
</style>
