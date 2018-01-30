<template>
  <b-form>
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
        <b-tab title="Params">
          <b-table striped hover :items="tableData" :fields="columns">
            <template slot="key" slot-scope="data">
              <div @click="handleCellCanEdit(data)" v-if="!data.item.isEditing">{{data.item.key}}</div>
              <input v-model="tableData[data.index].key" v-if="data.item.isEditing" @blur="handleCellCancelEdit(data)"></input>
            </template>
          </b-table>
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
  </b-form>
</template>

<script>
  export default {
    name: 'project-add',
    components: {},
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
        tableData: [
          {key: 'token1', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', isEditing: false},
          {key: 'token2', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', isEditing: false},
          {key: 'token3', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', isEditing: false},
          {key: 'token4', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', isEditing: false},
          {key: 'token5', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', isEditing: false},
          {key: 'token6', value: 'fsdfxcvasdfsdfewrweds', description: 'aaaaaaabbbbbbbccccccc', isEditing: false}
        ],
        columns: [
          {
            key: 'key',
            label: 'key'
          },
          {
            key: 'value',
            label: 'value'
          },
          {
            key: 'description',
            label: 'description'
          }
        ]
      }
    },
    methods: {

      // 点击单元格可以编辑
      handleCellCanEdit(data) {
        this.tableData[data.index]['isEditing'] = true
      },
      // 取消编辑状态
      handleCellCancelEdit(data) {
        this.tableData[data.index]['isEditing'] = false
      },
      tableCancelAllEditing() {
        this.tableData = this.tableData.forEach()
      }

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
