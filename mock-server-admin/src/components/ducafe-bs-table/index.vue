<template>
  <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col" v-for="(column, index) in columns" :field="'th-'+index">{{column.label}}</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, row) in items" :field="'tr-'+row">
      <td v-for="(column, col) in columns" :field="'tr-'+row+'-td-'+col">
        <template v-if="item.isEdit && editIndex.row === row && editIndex.field === column.field">
          <input
            v-focus
            style="width:100%"
            :name='column.field'
            v-model.lazy="items[row][column.field]"
            @change="handleCellEditChange($event, row, column.field, item)"
            @blur="tableEditClear" ></input>
        </template>
        <template v-else>
          <div @click="handleCellEdit(row, column.field)" >{{item[column.field]}}</div>
        </template>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: "ducafe-bs-table",
  props: ['columns', 'items'],
  data() {
    return {
      editIndex: {
        row: -1,
        field: ''
      }
    }
  },
  methods: {
    // 表格编辑
    handleCellEdit(row ,field) {
      this.editIndex.row = row
      this.editIndex.field = field
    },
    // 数据发生变化
    handleCellEditChange(event, row , field, rowData) {
      let oldValue = event.currentTarget._value
      let newValue = event.currentTarget.value
      this.tableEditClear()
      this.$emit('cell-edit-done',
        {
          newValue: newValue,
          oldValue: oldValue,
          rowIndex: row,
          rowData: rowData,
          field: field
        }
      )
    },
    // 清除编辑状态
    tableEditClear() {
      this.editIndex.row = -1
      this.editIndex.field = ''
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
