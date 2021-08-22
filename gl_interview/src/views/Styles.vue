<template>
  <div class="styles-page">
    <el-container>
      <el-header><vheader :currentIndex="1"></vheader></el-header>
      <el-main>
        <div class="styles-main-area">
          <div class="online-ides">
            <textarea id="html" v-model="htmlContent"></textarea>
            <textarea id="css" v-model="cssContent"></textarea>
            <textarea id="js" v-model="javascriptContent"></textarea>
          </div>
          <iframe id="style-display"></iframe>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import vheader from "../components/header.vue";
export default {
  name: "Styles",
  components: { vheader },
  data(){
    return{
      htmlContent: null,
      cssContent: null,
      javascriptContent: null,
    }
  },
  watch(){
    console.log(this.htmlContent, this.cssContent, this.javascriptContent);
  },
  methods: {
    compile(){

    }
  }
};
</script>
