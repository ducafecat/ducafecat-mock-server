<template>
  <div id="apiAddView">
    <b-row style="height:100%;" class="p-0 m-0">
        <b-col cols="7" class="p-0">
          <editor 
            @init="editorInit"
            v-model="form.response.body"
            lang="javascript" 
            theme="solarized_light" 
            :options="aceOptions"
            width="100%" height="100%"></editor>
        </b-col>
        <b-col cols="5" class="p-1">
            <!-- 基础 -->
            <b-card
                header="api base"
                header-class="d-flex justify-content-center"
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="dark" >
                <b-card-body>
                  <b-form-group horizontal label-size="sm" label="Method" label-for="request-base-method">
                      <b-form-select size="sm" v-model="form.request.base.method" :options="methodOptions" required/>
                  </b-form-group>
                  <b-form-group horizontal label-size="sm" label="URL" label-for="request-base-url">
                      <b-input-group size="sm" prepend="/">
                      <b-form-input size="sm" id="request-base-url" v-model="form.request.base.url" required></b-form-input>
                      </b-input-group>
                  </b-form-group>
                  <b-form-group horizontal label-size="sm" label="Description" label-for="request-base-description">
                      <b-form-textarea size="sm" id="request-base-description" v-model="form.request.base.description" :rows="2"
                                      :max-rows="6"></b-form-textarea>
                  </b-form-group>
                </b-card-body>
            </b-card>
            <!-- 基础 end -->
            
            <!-- request parameters -->
            <b-card no-body>
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn size="sm" block v-b-toggle.request_parameters variant="dark">request parameters</b-btn>
                </b-card-header>
                <b-collapse id="request_parameters" role="tabpanel">
                    <b-card-body class="p-0 m-0">
                        <KVEditer
                            :items="form.request.parameters"
                            @cell-edit-done="handleParametersCellEditDone"></KVEditer>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <!-- request parameters end -->

            <!-- request headers -->
            <b-card no-body>
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn size="sm" block v-b-toggle.request_headers variant="dark">request headers</b-btn>
                </b-card-header>
                <b-collapse id="request_headers" role="tabpanel">
                    <b-card-body class="p-0 m-0">
                        <KVEditer
                          :items="form.request.headers"
                          @cell-edit-done="handleHeadersCellEditDone"></KVEditer>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <!-- request headers end -->

            <!-- request body -->
            <b-card no-body>
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn size="sm" block v-b-toggle.request_body variant="dark">request body</b-btn>
                </b-card-header>
                <b-collapse id="request_body" role="tabpanel">
                    <b-card-body class="p-0 m-0">
                        <b-form-group label-size="sm" class="m-0">
                          <!-- type -->
                          <b-form-radio-group size="sm" v-model="form.request.body.type"
                                              :options="bodyTypeOptions"
                                              name="radioBodyTypeInline">
                          </b-form-radio-group>
                          <!-- type end -->
                          <!-- form-data x-www-form-urlencoded -->
                          <KVEditer
                            :items="form.request.body.kvData" v-if="form.request.body.type === '1' || form.request.body.type === '2'"
                            @cell-edit-done="handleBodyRawKVCellEditDone"></KVEditer>
                          <!-- form-data x-www-form-urlencoded end -->
                          <!-- raw -->
                          <b-tabs v-if="form.request.body.type === '3'" small pills card>
                            <b-tab title="DATA - json" class="p-0" active>
                              <editor v-model="form.request.body.rawData" @init="editorInit();" lang="javascript" theme="solarized_light" width="100%" height="200"></editor>
                            </b-tab>
                            <b-tab title="README - md" class="p-0">
                              <editor v-model="form.request.body.rawDataMD" @init="editorInit();" lang="markdown" theme="solarized_light" width="100%" height="200"></editor>
                            </b-tab>
                          </b-tabs>
                          <!-- raw end -->
                        </b-form-group>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <!-- request body end -->

            <!-- response body -->
            <b-card no-body>
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn size="sm" block v-b-toggle.response_body variant="dark">response body - README - md</b-btn>
                </b-card-header>
                <b-collapse id="response_body" role="tabpanel">
                    <b-card-body class="p-0 m-0">
                      <editor v-model="form.response.bodyMD" @init="editorInit();" lang="markdown" theme="solarized_light" width="100%" height="200"></editor>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <!-- response body end -->

            <!-- response body -->
            <b-card no-body>
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn size="sm" block v-b-toggle.response_headers variant="dark">response headers</b-btn>
                </b-card-header>
                <b-collapse id="response_headers" role="tabpanel">
                    <b-card-body class="p-0 m-0">
                      <KVEditer
                        :items="form.response.headers"
                        @cell-edit-done="handleResponseHeadersCellEditDone"></KVEditer>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <!-- response body end -->

            <!-- 按钮 -->
            <b-button-group class="d-flex justify-content-center m-2">
                <b-btn @click="handleFormatResponseJson">格式化</b-btn>
                <b-btn @click="handleSave">保存</b-btn>
                <b-btn @click="handleClose">关闭</b-btn>
            </b-button-group>
            <!-- 按钮 end -->
        </b-col>
    </b-row>
  </div>
</template>

<script>
import KVEditer from "./kv-edit";
import ConstAPI from "@/apis/const";
import MixUtil from '@/utils/mix'

export default {
  name: "cp-api-add-v2",
  components: {
    KVEditer,
    editor: require('vue2-ace-editor')
  },
  props: ['form'],
  data() {
    return {
        methodOptions: ConstAPI.httpMethods(),
        bodyTypeOptions: ConstAPI.httpBodyTypes(),
        rawTypeOptions: ConstAPI.httpBodyRawTypes(),
        aceOptions:{
          enableBasicAutocompletion: false,
          enableSnippets: false,
          enableLiveAutocompletion: false,
          enableEmmet: false
        }
    };
  },
  methods: {
    editorInit:function (editor) {
      console.log(editor)
      // if (editor !== undefined) {
      //   editor.$enableEmmet = false
      // }

      // editor.setOption({
      //   enableBasicAutocompletion: false,
      //   enableSnippets: false,
      //   enableLiveAutocompletion: false
      //   });

      // require('vue2-ace-editor/node_modules/brace/mode/html');
      require('vue2-ace-editor/node_modules/brace/mode/javascript');
      // require('vue2-ace-editor/node_modules/brace/mode/less');
      // require('vue2-ace-editor/node_modules/brace/mode/json');
      // require('vue2-ace-editor/node_modules/brace/mode/xml');
      require('vue2-ace-editor/node_modules/brace/mode/markdown');
      require('vue2-ace-editor/node_modules/brace/theme/solarized_light');
    },

    handleSave() {
      this.$emit('api-save', { name: 'api-add' ,data: this.form })
    },
    handleClose() {
      this.$emit('close')
    },

    //////////////////////////////////////////////////////
    // request - 参数 - 单元格编辑完成
    handleParametersCellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.form.request.parameters[rowIndex][field] = newValue;
    },
    // request - headers - 单元格编辑完成
    handleHeadersCellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.form.request.headers[rowIndex][field] = newValue;
    },
    // request - body raw - 单元格编辑完成
    handleBodyRawKVCellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.form.request.body.kvData[rowIndex][field] = newValue;
    },
    // request - body raw - json 编辑器修改完成
    handleRequestRawDataJsonChange(value) {
      this.form.request.body.rawData = value
    },
    // request - body raw - json 格式化
    handleFormatRequestJson() {
      this.form.request.body.rawData = MixUtil.formatJson(this.form.request.body.rawData)
    },
    // response - headers - 单元格编辑完成
    handleResponseHeadersCellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.form.response.headers[rowIndex][field] = newValue;
    },
    // response - body raw - json 格式化
    handleFormatResponseJson() {
      this.form.response.body = MixUtil.formatJson(this.form.response.body)
    },
    //////////////////////////////////////////////////////

  },
  // 挂载结束
  mounted: function() {
  }
};
</script>

<style scoped>
.ace_editor {
    font: 16px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
}
#apiAddView {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1021;
    overflow: hidden;
    /* width: 100%; */
    /* height: 100%; */
    padding: 0px;
    margin: 0px;
    background-color: #495060;
}
.toolbar {
    margin: 10px;
    text-align: center;
}
.card-body {
  padding: 2px;
  margin: 0px;
}
</style>
