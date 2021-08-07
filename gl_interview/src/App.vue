<template>
  <router-view>
    <vheader></vheader>
  </router-view>
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
body {
  margin: 0;
  font-family: Georgia;
}
</style>
