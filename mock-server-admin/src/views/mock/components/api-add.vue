<template>
  <div>
    <!-- request -->
    <b-card header="request" header-tag="header" no-body>
      <b-tabs card>
        <!--基础-->
        <b-tab title="base" active>
          <b-form-group label="Method" label-for="request-base-method">
            <b-form-select v-model="form.request.base.method" :options="methodOptions" required/>
          </b-form-group>
          <b-form-group label="URL" label-for="request-base-url">
            <b-input-group prepend="/">
              <b-form-input id="request-base-url" v-model="form.request.base.url" required></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group label="Description" label-for="request-base-description">
            <b-form-textarea id="request-base-description" v-model="form.request.base.description" :rows="1"
                             :max-rows="6"></b-form-textarea>
          </b-form-group>
        </b-tab>
        <!--基础 end-->
        <!--参数-->
        <b-tab title="Parameters">
          <KVEditer
            :items="form.request.parameters"
            @cell-edit-done="handleParametersCellEditDone"></KVEditer>
        </b-tab>
        <!--参数 end-->
        <!--http headers-->
        <b-tab title="Headers">
          <KVEditer
            :items="form.request.headers"
            @cell-edit-done="handleHeadersCellEditDone"></KVEditer>
        </b-tab>
        <!--http headers end-->
        <!--Body主体-->
        <b-tab title="Body">
          <b-form-group >
            <b-form-radio-group v-model="form.request.body.type"
                                :options="bodyTypeOptions"
                                name="radioBodyTypeInline">
            </b-form-radio-group>
          </b-form-group>
          <b-form-group label="format" horizontal :label-cols="1"
            v-if="form.request.body.type === '3'">
            <b-form-select v-model="form.request.body.rawType" :options="rawTypeOptions" style="width:100px" />
          </b-form-group>
          <KVEditer
            :items="form.request.body.kvData" v-if="form.request.body.type === '1' || form.request.body.type === '2'"
            @cell-edit-done="handleBodyRawKVCellEditDone"></KVEditer>
          <editor v-if="form.request.body.type === '3'" v-model="form.request.body.rawData" @init="editorInit();" lang="json" theme="chrome" width="100%" height="200"></editor>
        </b-tab>
        <!--Body主体 end-->
      </b-tabs>
    </b-card>
    <!-- request end -->
    <!-- response -->
    <b-card header="response" header-tag="header" no-body style="margin-top:10px;">
      <b-tabs card>
        <!--Body主体-->
        <b-tab title="Body">
          <editor v-model="form.response.body" @init="editorInit();" lang="json" theme="chrome" width="100%" height="200"></editor>
        </b-tab>
        <!--Body主体 end-->
        <!--http headers-->
        <b-tab title="Headers">
          <KVEditer
            :items="form.response.headers"
            @cell-edit-done="handleResponseHeadersCellEditDone"></KVEditer>
        </b-tab>
        <!--http headers end-->
      </b-tabs>
    </b-card>
    <!-- response end -->
    <b-button type="submit" variant="primary" style="margin-top:10px;">save</b-button>
  </div>
</template>

<script>
// import DucafeBsTable from "@/components/ducafe-bs-table";
import KVEditer from "./kv-edit";
import ConstAPI from "@/apis/const";

export default {
  name: "project-add",
  components: {
    KVEditer,
    editor: require('vue2-ace-editor')
  },
  data() {
    return {
      methodOptions: ConstAPI.httpMethods(),
      bodyTypeOptions: ConstAPI.httpBodyTypes(),
      rawTypeOptions: ConstAPI.httpBodyRawTypes(),
      form: {
        // 输入
        request: {
          base: {
            method: "get",
            url: "",
            description: ""
          },
          parameters: [],
          headers: [],
          body: {
            type: '1',
            kvData: [],
            rawType: '1',
            rawData: ''
          }
        },
        // 输出
        response: {
          body: '',
          headers: []
        }
      }
    };
  },
  methods: {

    editorInit:function () {
      require('vue2-ace-editor/node_modules/brace/mode/html');
      require('vue2-ace-editor/node_modules/brace/mode/javascript');
      require('vue2-ace-editor/node_modules/brace/mode/less');
      require('vue2-ace-editor/node_modules/brace/mode/json');
      require('vue2-ace-editor/node_modules/brace/mode/xml');
      require('vue2-ace-editor/node_modules/brace/theme/chrome');
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
      his.form.request.body.rawData = value
    },
    // response - headers - 单元格编辑完成
    handleResponseHeadersCellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.form.response.headers[rowIndex][field] = newValue;
    }
    //////////////////////////////////////////////////////
  },
  // 挂载结束
  mounted: function() {
    // // create the editor
    // var container = document.getElementById("jsoneditor");
    // var options = {};
    // var editor = new JSONEditor(container, options);

    // // set json
    // var json = {
    //     "Array": [1, 2, 3],
    //     "Boolean": true,
    //     "Null": null,
    //     "Number": 123,
    //     "Object": {"a": "b", "c": "d"},
    //     "String": "Hello World"
    // };
    // editor.set(json);

    // // get json
    // var json = editor.get();
  }
};
</script>

<style scoped>
.cell-edit-color {
  color: #2db7f5;
  font-weight: bold;
}
</style>
