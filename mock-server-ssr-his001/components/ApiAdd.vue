<template>
  <div id="apiAddView">
    <b-row style="height:100%;" class="p-0 m-0">
      <b-col cols="7" class="p-0">
        <code-editor
          ref="responseBodyEditor"
          :content="this.form.response.body"
          :sync="isCodeEditorSync"
          lang="javascript"
          theme="solarized_light"
          width="100%" height="100%"></code-editor>
      </b-col>
      <b-col cols="5" class="p-1" style="overflow:auto;">
        <!-- 基础 -->
        <b-card
          header="api base"
          header-class="d-flex justify-content-center"
          header-text-variant="white"
          header-tag="header"
          header-bg-variant="dark">
          <b-card-body>
            <b-form-group horizontal label-size="sm" label="Group" label-for="request-base-group">
              <b-form-input size="sm" id="request-base-group" v-model="form.request.base.group" readonly required></b-form-input>
            </b-form-group>
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
            <b-form-group horizontal label-size="sm" label="response.body" label-for="response-mockjs">
              <b-form-checkbox id="response-mockjs" v-model="form.response.mockjs" value="1" unchecked-value="0">
                mock.js
              </b-form-checkbox>
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
              <parameters-editor
                :items.sync="form.request.parameters" ></parameters-editor>
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
              <parameters-editor
                :items.sync="form.request.headers" ></parameters-editor>
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
                <parameters-editor
                  :items.sync="form.request.body.kvData"
                  v-if="form.request.body.type === '1' || form.request.body.type === '2'" ></parameters-editor>
                <!-- form-data x-www-form-urlencoded end -->
                <!-- raw -->
                <b-tabs v-if="form.request.body.type === '3'" small pills card>
                  <b-tab title="DATA - json" class="p-0" active>
                    <code-editor
                      ref="requestBodyRawDataEditor"
                      :sync="isCodeEditorSync"
                      :content="form.request.body.rawData"
                      lang="javascript"
                      theme="solarized_light"
                      width="100%" height="200px"></code-editor>
                  </b-tab>
                  <b-tab title="README - md" class="p-0">
                    <code-editor
                      ref="requestBodyRawDataMDEditor"
                      :sync="isCodeEditorSync"
                      :content="form.request.body.rawDataMD"
                      lang="markdown"
                      theme="chrome"
                      width="100%" height="200px"></code-editor>
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
              <code-editor
                ref="responseBodyMDEditor"
                :sync="isCodeEditorSync"
                :content="form.response.bodyMD"
                lang="markdown"
                theme="chrome"
                width="100%" height="200px"></code-editor>
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
              <parameters-editor
                :items.sync="form.response.headers" ></parameters-editor>
            </b-card-body>
          </b-collapse>
        </b-card>
        <!-- response body end -->

        <!-- 按钮 -->
        <b-button-group class="d-flex justify-content-center m-2">
          <b-btn @click="handleFormatJson">格式化</b-btn>
          <b-btn @click="handleSave">保存</b-btn>
          <b-btn @click="handleClose">关闭</b-btn>
        </b-button-group>
        <!-- 按钮 end -->
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ParametersEditor from './ApiParametersEditor'
import ConstUtil from '~/utils/const'
import MixUtil from '~/utils/mix'

// ace editor
import CodeEditor from '~/components/AceCodeEditor'

export default {
  name: 'component-api-add',
  components: {
    ParametersEditor,
    CodeEditor
  },
  computed: {},
  props: ['form'],
  data() {
    return {
      methodOptions: ConstUtil.httpMethods(),
      bodyTypeOptions: ConstUtil.httpBodyTypes(),
      rawTypeOptions: ConstUtil.httpBodyRawTypes(),
      isCodeEditorSync: true
    }
  },
  methods: {
    handleSave() {
      // 更新编辑器data
      this.form.request.body.rawData =
        this.$refs.requestBodyRawDataEditor === undefined
          ? this.form.request.body.rawData
          : this.$refs.requestBodyRawDataEditor.getValue()
      this.form.request.body.rawDataMD =
        this.$refs.requestBodyRawDataMDEditor === undefined
          ? this.form.request.body.rawDataMD
          : this.$refs.requestBodyRawDataMDEditor.getValue()
      this.form.response.body =
        this.$refs.responseBodyEditor === undefined
          ? this.form.response.body
          : this.$refs.responseBodyEditor.getValue()
      this.form.response.bodyMD =
        this.$refs.responseBodyMDEditor === undefined
          ? this.form.response.bodyMD
          : this.$refs.responseBodyMDEditor.getValue()

      this.$emit('api-save', {name: 'api-add', data: this.form})
    },
    handleClose() {
      this.$emit('close')
    },

    // ---------------------------------------------------------------------------
    // json 格式化
    handleFormatJson() {
      this.form.request.body.rawData = MixUtil.formatJson(
        this.form.request.body.rawData
      )
      this.form.response.body = MixUtil.formatJson(this.form.response.body)
      this.form.request.body.rawDataMD = MixUtil.formatMarkdown(
        this.form.request.body.rawDataMD
      )
      this.form.response.bodyMD = MixUtil.formatMarkdown(
        this.form.response.bodyMD
      )
    }
    // ---------------------------------------------------------------------------
  },
  // 挂载结束
  mounted: function() {}
}
</script>

<style scoped>
/*.ace_editor {*/
/*font: 16px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;*/
/*}*/

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
