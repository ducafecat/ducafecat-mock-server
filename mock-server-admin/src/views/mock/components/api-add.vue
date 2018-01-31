<template>
  <div>
    <b-card header="input" header-tag="header" no-body>
      <b-tabs card>
        <!--基础-->
        <b-tab title="base" active>
          <b-form-group label="Method" label-for="input-base-method">
            <b-form-select v-model="form.input.base.method" :options="methodOptions" required/>
          </b-form-group>
          <b-form-group label="URL" label-for="input-base-url">
            <b-input-group prepend="/">
              <b-form-input id="input-base-url" v-model="form.input.base.url" required></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group label="Description" label-for="input-base-description">
            <b-form-textarea id="input-base-description" v-model="form.input.base.description" :rows="3"
                             :max-rows="6"></b-form-textarea>
          </b-form-group>
        </b-tab>
        <!--参数-->
        <b-tab title="Parameters">
          <ducafe-bs-table :items="tableData" :columns="columns" @cell-edit-done="handleCellDone"></ducafe-bs-table>
        </b-tab>
        <!--http headers-->
        <b-tab title="Headers">
          <br>Disabled tab!
        </b-tab>
        <!--Body主体-->
        <b-tab title="Body">
          <br>Disabled tab!
        </b-tab>
      </b-tabs>
    </b-card>
    <b-button type="submit" variant="primary">save</b-button>
  </div>
</template>

<script>
  import DucafeBsTable from '@/components/ducafe-bs-table'

  export default {
    name: 'project-add',
    components: {
      DucafeBsTable
    },
    data() {
      return {
        methodOptions: [
          {value: 'get', text: 'get'},
          {value: 'post', text: 'post'},
          {value: 'delete', text: 'delete'},
          {value: 'put', text: 'put'},
          {value: 'patch', text: 'patch'}
        ],
        form: {
          input: {
            base: {
              method: 'get',
              url: '',
              description: ''
            }
          }
        },

        tableEditIndex: {
          row: -1
        },
        tableData: [
          {key: 'token1', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', type:'string', isEdit: true},
          {key: 'token2', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', type:'number', isEdit: true},
          {key: 'token3', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', type:'string', isEdit: true},
          {key: 'token4', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', type:'string', isEdit: true},
          {key: 'token5', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', type:'string', isEdit: true},
          {key: 'token6', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', type:'string', isEdit: true}
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
          }
        ]

      }
    },
    methods: {

      // 表格编辑
      handleCellDone(data) {
        this.tableEditIndex.row = data.index
        // this.tableData[data.index]['isEditing'] = true
      },
      handleCellEditCancel(data) {
        this.tableEditIndex.row = data.index
        // this.tableData[data.index]['isEditing'] = false
      },
      tableCancelAllEditing() {
        this.tableEditIndex.row = -1
      },

      // 单元格编辑回调
      cellEditDone(newValue, oldValue, rowIndex, rowData, field) {
        this.tableData[rowIndex][field] = newValue
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
