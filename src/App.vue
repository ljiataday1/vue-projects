
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name="fade">
      <keep-alive :include="include">
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
    <transition>
      <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      include: []
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        if (to.meta.keepAlive) {
          !this.include.includes[to.name] && this.include.push(to.name)
        }
      }
    }
  }
}
</script>

<style>
html,body{margin: 0;padding: 0;}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
/* .fade-leave-to,
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s;
  display: none;
}
.fade-leave,
.fade-enter,
.fade-leave-to {
  transform: translateX(100%);
} */

</style>
