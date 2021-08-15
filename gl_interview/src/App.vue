<template>
  <div>
    <vheader></vheader>
    <router-view class="view-pages"></router-view>
  </div>
</template>

<script>
import vheader from "./components/header.vue";
export default {
  name: "App",
  components: {
    vheader,
  },
  // mounted(){
  //   let currentPath = this.$route.path;
  //   switch(currentPath){
  //     case "/":
  //       vheader.currentSelect = 0;
  //       break;
  //     case "/iLearnPage":
  //       vheader.currentSelect = 1;
  //       break;
  //     case "/stylesPage":
  //       vheader.currentSelect = 2;
  //       break;
  //     case "/algorithmsPage":
  //       vheader.currentSelect = 3;
  //       break;
  //     default:
  //       vheader.currentSelect = 0;
  //       break;
  //   }
  //   vheader.selectMenu(vheader.currentSelect);
  // }
};
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
  position: relative;
  margin: 0;
  font-family: Georgia;
}
</style>
