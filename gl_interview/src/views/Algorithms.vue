<template>
  <div class="algorithms-page layout-center">
    <div class="algorithms-output">
      <div class="algorithms-output-title">Result: </div><div class="algorithms-ouput-content">{{ result }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Algorithms",
  components: {},
  data(){
    return {
      result: null
    }
  }
};
</script>
