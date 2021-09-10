<template>
  <div class="hljs" ref="hlDiv" v-html="data"></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import marked from "marked";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/monokai-sublime.css";
import { getCommonAccount } from '../api/article'
export default defineComponent({
  setup() {
  
    getCommonAccount().then(res => console.log(res))
    const data = ref(
      marked("```javascript\nfunction(){\n\tconsole.log(123)\n}\n```")
    );
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function (data:any) {
        return hljs.highlightAuto(data).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });

    return { data };
  },
});
</script>

<style lang="scss" scoped>
</style>