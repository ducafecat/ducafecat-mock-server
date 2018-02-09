<template>
    <!-- <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2" >
        <p>For more information visit website</p>
        <b-btn variant="primary" href="#">More Info</b-btn>    
    </b-jumbotron> -->
    <!-- <CodeEditor style="width:500px;height:500px"></CodeEditor> -->
    <editor style="width:500px;height:500px" />
</template>

<script>
import CodeEditor from "@/components/code-editor"

export default {
  name: "dashboard",
  components: {
    CodeEditor,
    editor: require('vue2-ace-editor')
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
</style>
