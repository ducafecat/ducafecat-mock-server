<template>
  <div>
    <edit-table :items="tableData" :columns="form.columns" @cell-edit-done="handleCellEditDone"></edit-table>
    <b-button-group size="sm" class="float-right">
      <b-button @click="handleAdd">add</b-button>
      <b-button @click="handleDelete">delete</b-button>
    </b-button-group>
  </div>
</template>
<script>
import EditTable from '~/components/public/EditTable'

export default {
  name: 'component-parameters-editor',
  components: {
    EditTable
  },
  props: ['items'],
  watch: {
    items(val) {
      this.tableData = val
    },
    tableData(val) {
      this.$emit('update:items', val)
    }
  },
  computed: {},
  data() {
    return {
      tableData: [],
      form: {
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
    }
  },
  methods: {
    // 添加
    handleAdd() {
      this.tableData.push({
        key: 'key',
        value: 'value',
        description: 'desc',
        type: 'string',
        must: 'yes',
        isEdit: true,
        isChecked: false
      })
    },
    // 删除
    handleDelete() {
      this.tableData = this.tableData.filter(item => {
        return !item.isChecked
      })
    },
    // 单元格编辑完成
    handleCellEditDone(newValue, oldValue, rowIndex, rowData, field) {
      this.tableData[rowIndex][field] = newValue
      // this.$emit('cell-edit-done',
      //   newValue,
      //   oldValue,
      //   rowIndex,
      //   rowData,
      //   field
      // )
    }
  }
}
</script>

<style scoped>

</style>
