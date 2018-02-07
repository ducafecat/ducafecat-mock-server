<template>
  <div>
    <ducafe-bs-table :items="items" :columns="form.columns" @cell-edit-done="handleCellEditDone"></ducafe-bs-table>
    <b-button-group size="sm" class="float-right">
      <b-button @click="handleAdd">add</b-button>
      <b-button @click="handleDelete">delete</b-button>
    </b-button-group>
  </div>
</template>

<script>
import DucafeBsTable from "@/components/ducafe-bs-table";
export default {
  name: "cp-kv-edit",
  components: {
    DucafeBsTable
  },
  props: ["items"],
  computed: {
  },
  data() {
    return {
      form: {
        columns: [
            {
                field: "key",
                label: "key"
            },
            {
                field: "value",
                label: "value"
            },
            {
                field: "description",
                label: "description"
            },
            {
                field: "type",
                label: "type"
            },
            {
                field: "must",
                label: "must"
            }
        ]
      }
    };
  },
  methods: {
    // 添加
    handleAdd() {
        this.items.push({
            key: "key",
            value: "value",
            description: "desc",
            type: "string",
            must: "yes",
            isEdit: true,
            isChecked: false
        });
    },
    // 删除
    handleDelete() {
        this.items = this.items.filter(
            item => {
            return !item.isChecked;
            }
        );
    },
    // 单元格编辑完成
    handleCellEditDone(newValue, oldValue, rowIndex, rowData, field) {
        this.items[rowIndex][field] = newValue;
        this.$emit("cell-edit-done", 
            newValue,
            oldValue,
            rowIndex,
            rowData,
            field
        );
    }
  }
};
</script>

<style scoped>

</style>
