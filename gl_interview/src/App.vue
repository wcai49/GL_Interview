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
