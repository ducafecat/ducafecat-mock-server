<template>
  <div>
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
            <b-form-textarea id="request-base-description" v-model="form.request.base.description" :rows="3"
                             :max-rows="6"></b-form-textarea>
          </b-form-group>
        </b-tab>
        <!--基础 end-->
        <!--参数-->
        <b-tab title="Parameters">
          <ducafe-bs-table
            :items="form.request.parameters.data"
            :columns="form.request.parameters.columns"
            @cell-edit-done="handleParametersCellEditDone"></ducafe-bs-table>
          <b-button-group size="sm">
           <b-button>add</b-button>
           <b-button>delete</b-button>
          </b-button-group>
        </b-tab>
        <!--参数 end-->
        <!--http headers-->
        <b-tab title="Headers">
          <br>Disabled tab!
        </b-tab>
        <!--http headers end-->
        <!--Body主体-->
        <b-tab title="Body">
          <br>Disabled tab!
        </b-tab>
        <!--Body主体 end-->
      </b-tabs>
    </b-card>
    <b-button type="submit" variant="primary">save</b-button>
  </div>
</template>

<script>
  import DucafeBsTable from '@/components/ducafe-bs-table'
  import ConstAPI from '@/apis/const'

  export default {
    name: 'project-add',
    components: {
      DucafeBsTable
    },
    data() {
      return {
        methodOptions: ConstAPI.httpMethods(),
        form: {
          // 输入
          request: {
            base: {
              method: 'get',
              url: '',
              description: ''
            },
            parameters: {
              data: [
                {key: 'token1', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', type:'string', must: 'yes', isEdit: true, isChecked: false},
                {key: 'token2', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', type:'string', must: 'yes', isEdit: true, isChecked: false}
              ],
              columns: [
                {
                  field: 'key',
                  label: 'key'
                },
                {
                  field: 'value',
                  label: 'value'
                },
                {
                  field: 'description',
                  label: 'description'
                },
                {
                  field: 'type',
                  label: 'type'
                },
                {
                  field: 'must',
                  label: 'must'
                }
              ]
            }
          },
          // 输出
          response: {

          }
        },
      }
    },
    methods: {

      // Parameters 单元格编辑完成
      handleParametersCellEditDone(newValue, oldValue, rowIndex, rowData, field) {
        this.form.request.parameters.data[rowIndex][field] = newValue
      }

    }
  }
</script>

<style scoped>
  .cell-edit-color {
    color: #2db7f5;
    font-weight: bold;
  }
</style>
