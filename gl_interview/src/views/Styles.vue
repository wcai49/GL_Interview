<template>
  <div class="styles-page">
    <el-container class="gl-interview">
      <el-header height="48px"><vheader :currentIndex="1"></vheader></el-header>
      <el-main>
        <div class="styles-main-area">
          <div class="online-ides">
            <div class="codemirror-container">
              <codemirror
                class="codemirror"
                v-model="htmlContent"
                :options="codemirrorHTMLOptions"
              ></codemirror>
            </div>
            <div class="codemirror-container">
              <codemirror
                class="codemirror"
                v-model="cssContent"
                :options="codemirrorCSSOptions"
              ></codemirror>
            </div>
            <div class="codemirror-container">
              <codemirror
                class="codemirror"
                v-model="javascriptContent"
                :options="codemirrorJSOptions"
              ></codemirror>
            </div>
          </div>
          <iframe id="codeResult"> </iframe>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import vheader from "../components/header.vue";
import { codemirror } from "vue-codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/css/css.js";
import "codemirror/mode/htmlembedded/htmlembedded.js";
import "codemirror/mode/javascript/javascript.js";
export default {
  name: "Styles",
  components: { vheader, codemirror },
  mounted() {
    this.compile();
  },
  computed: {
    contentChange() {
      const { htmlContent, cssContent, javascriptContent } = this;
      return {
        htmlContent,
        cssContent,
        javascriptContent,
      };
    },
  },
  watch: {
    contentChange: {
      handler: function () {
        this.compile();
      },
    },
  },
  data() {
    return {
      htmlContent: `<div class='name' id='name' onclick='myFunction()'>
  I am an idiot.
</div>`,
      cssContent: `.name{    
      color: #2c2c2c;    
      font-size: 40px;    
      text-align: center;    
      font-weight: bold;
      cursor: pointer;
}`,
      javascriptContent: `function myFunction(){
	window.alert('hi');
}`,
      codemirrorHTMLOptions: {
        lineNumbers: true,
        line: true,
        theme: "material",
        mode: "htmlembedded",
      },
      codemirrorCSSOptions: {
        lineNumbers: true,
        line: true,
        theme: "material",
        mode: "css",
      },
      codemirrorJSOptions: {
        lineNumbers: true,
        line: true,
        theme: "material",
        mode: "javascript",
        scrollbarStyle: "null",
      },
    };
  },
  methods: {
    compile() {
      let code = document.getElementById("codeResult").contentWindow.document;
      code.open();
      code.writeln(
        // eslint-disable-next-line
        `${this.htmlContent}<style>${this.cssContent}</style><script>${this.javascriptContent}<\/script>`
      );
      code.close();
    },
  },
};
</script>
