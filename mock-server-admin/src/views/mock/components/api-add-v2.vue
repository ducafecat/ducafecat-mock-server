<template>
  <div id="apiAddView">
    <b-row style="height:100%;" class="p-0 m-0">
        <b-col cols="7" class="p-0">
            <editor v-model="form.response.body" @init="editorInit();" lang="markdown" theme="solarized_dark" width="100%" height="100%"></editor>
        </b-col>
        <b-col cols="5" class="p-1">
            <!-- 基础 -->
            <b-card
                header="接口信息"
                header-class="d-flex justify-content-center"
                header-text-variant="white"
                header-tag="header"
                header-bg-variant="dark" >
                <b-form-group label-size="sm" label="Method" label-for="request-base-method">
                    <b-form-select size="sm" v-model="form.request.base.method" :options="methodOptions" required/>
                </b-form-group>
                <b-form-group label-size="sm" label="URL" label-for="request-base-url">
                    <b-input-group size="sm" prepend="/">
                    <b-form-input size="sm" id="request-base-url" v-model="form.request.base.url" required></b-form-input>
                    </b-input-group>
                </b-form-group>
                <b-form-group label-size="sm" label="Description" label-for="request-base-description">
                    <b-form-textarea size="sm" id="request-base-description" v-model="form.request.base.description" :rows="2"
                                    :max-rows="6"></b-form-textarea>
                </b-form-group>
            </b-card>
            <!-- 基础 end -->
            
            <!-- Parameters -->
            <b-card no-body>
                <b-card-header header-tag="header" class="p-0" role="tab">
                    <b-btn size="sm" block v-b-toggle.parameters variant="dark">提交参数</b-btn>
                </b-card-header>
                <b-collapse id="parameters" role="tabpanel">
                    <b-card-body class="p-0 m-0">
                        <KVEditer
                            :items="form.request.parameters"
                            @cell-edit-done="handleParametersCellEditDone"></KVEditer>
                    </b-card-body>
                </b-collapse>
            </b-card>
            <!-- Parameters end -->

            <!-- 按钮 -->
            <b-button-group size="sm" class="d-flex justify-content-center m-2">
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
        rawTypeOptions: ConstAPI.httpBodyRawTypes()
    };
  },
  methods: {
    editorInit:function () {
      require('vue2-ace-editor/node_modules/brace/mode/html');
      require('vue2-ace-editor/node_modules/brace/mode/javascript');
      require('vue2-ace-editor/node_modules/brace/mode/less');
      require('vue2-ace-editor/node_modules/brace/mode/json');
      require('vue2-ace-editor/node_modules/brace/mode/xml');
      require('vue2-ace-editor/node_modules/brace/mode/markdown');
      require('vue2-ace-editor/node_modules/brace/theme/solarized_dark');
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
    font: 18px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
}
#apiAddView {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;
    overflow: hidden;
    /* width: 100%; */
    /* height: 100%; */
    padding: 0px;
    margin: 0px;
    background-color: #272822;
}
.toolbar {
    margin: 10px;
    text-align: center;
}
</style>
