<template>
  <table class="table small table-striped table-hover">
    <thead>
    <tr>
      <th>
        <input type="checkbox" v-model="chkAll" @click="handleChkAll">
      </th>
      <th scope="col" v-for="(column, index) in columns" :key="'th-'+index">{{column.label}}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(item, row) in items" :key="'tr-'+row">
      <th>
        <input type="checkbox" v-model="items[row].isChecked">
      </th>
      <td v-for="(column, col) in columns" :key="'tr-'+row+'-td-'+col">
        <template v-if="item.isEdit && editIndex.row === row && editIndex.field === column.field">
          <input
            v-focus
            style="width:100%"
            :name="column.field"
            v-model.lazy="items[row][column.field]"
            @change="handleCellEditChange($event, row, column.field, item)"
            @blur="tableEditClear"></input>
        </template>
        <template v-else>
          <div @click="handleCellEdit(row, column.field)">{{item[column.field]}}</div>
        </template>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  export default {
    name: 'component-edit-table',
    props: ['columns', 'items'],
    computed: {},
    data() {
      return {
        chkAll: false,
        editIndex: {
          row: -1,
          field: ''
        }
      }
    },
    methods: {
      // 表格编辑
      handleCellEdit(row, field) {
        this.editIndex.row = row
        this.editIndex.field = field
      },
      // 数据发生变化
      handleCellEditChange(event, rowIndex, field, rowData) {
        let newValue = event.currentTarget.value
        let oldValue = event.currentTarget._value
        this.tableEditClear()
        this.$emit('cell-edit-done',
          newValue,
          oldValue,
          rowIndex,
          rowData,
          field
        )
      },
      // 清除编辑状态
      tableEditClear() {
        this.editIndex.row = -1
        this.editIndex.field = ''
      },
      // 全选
      handleChkAll() {
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].isChecked = !this.chkAll
        }
      }
    },
    directives: {
      focus: {
        inserted: function (el, {value}) {
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>
</style>
