<template>
  <div ref="codeEditor" :style="{height: height, width: width}" ></div>
</template>

<script>
  let ace
  if (typeof window !== 'undefined') {
    ace = require('brace')
    require('brace/mode/javascript')
    require('brace/mode/markdown')
    require('brace/theme/chrome')
    require('brace/theme/solarized_light')
  }

  export default {
    name: 'component-ace-editor',
    data() {
      return {
        codeEditor: null
      }
    },
    props: {
      content: {
        type: String,
        default: ''
      },
      lang: {
        type: String,
        default: 'javascript'
      },
      theme: {
        type: String,
        default: 'solarized_light'
      },
      height: {
        type: String,
        default: '400px'
      },
      width: {
        type: String,
        default: '100%'
      },
      sync: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object,
        default: function () {
          return {}
        }
      },
      readOnly: {
        type: Boolean,
        default: false
      }
    },
    mounted: function () {
      this.codeEditor = ace.edit(this.$refs.codeEditor)
      this.codeEditor.$blockScrolling = Infinity
      this.codeEditor.getSession().setMode('ace/mode/' + this.lang)
      this.codeEditor.setTheme('ace/theme/' + this.theme)
      this.codeEditor.setValue(this.content, 1)
      this.codeEditor.setOption('tabSize', 2)
      this.codeEditor.setOption('fontSize', 15)
      this.codeEditor.setHighlightActiveLine(true)
      this.codeEditor.clearSelection()
      this.codeEditor.getSession().setUseWorker(false)
      // let editor = this.codeEditor
      // this.codeEditor.on('change', function () {
      //   this.$emit('change', editor.getValue())
      // })
    },
    watch: {
      'content': function (newContent) {
        if (this.sync) {
          this.codeEditor.setValue(newContent, 1)
        }
      },
      'lang': function () {
        this.codeEditor.getSession().setMode('ace/mode/' + this.lang)
      },
      theme: function (newTheme) {
        this.codeEditor.setTheme('ace/theme/' + newTheme)
      }
    },
    methods: {
      getValue: function () {
        return this.codeEditor.getValue()
      }
    }
  }
</script>

<style scoped>
</style>
