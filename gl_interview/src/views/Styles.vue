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
          <iframe id="codeResult"></iframe>
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
  mounted() {
    this.compile();
  },
  data() {
    return {
      htmlContent: "",
      cssContent: "",
      javascriptContent: "",
    };
  },
  methods: {
    compile() {
      let html = document.getElementById("html");
      let css = document.getElementById("css");
      let js = document.getElementById("js");
      let code = document.getElementById("codeResult").contentWindow.document;
      document.body.onkeyup = function () {
        code.open();

        code.writeln(
          // eslint-disable-next-line
          `${html.value}<style>${css.value}</style><script>${js.value}<\/script>`
        );
        code.close();
      };
    },
  },
};
</script>
