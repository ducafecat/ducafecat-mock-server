# 可编辑表格

## 例子

```js
<ducafe-bs-table :items="items" :columns="form.columns" @cell-edit-done="handleCellEditDone"></ducafe-bs-table>

import DucafeBsTable from "@/components/ducafe-bs-table";
export default {
  components: {
    DucafeBsTable
  },

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
```

## 属性

```js
:items="items"
:columns="form.columns"
```

## 事件

```js
@cell-edit-done="handleCellEditDone"
```
