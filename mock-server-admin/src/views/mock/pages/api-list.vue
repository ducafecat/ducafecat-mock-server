<template>
    <div>
        <b-card  bg-variant="dark" text-variant="white" title="PLab课研管理">
            <p class="card-text">
                Base URL : https://www.easy-mock.com/mock/59ed5d9a70da825a6d4c87b7/dv
            </p>
            <p class="card-text">
                Project ID : 59ed5d9a70da825a6d4c87b7
            </p>
        </b-card>
        <div style="text-align:right;width:100%;margin-top:10px;margin-bottom:10px;">
            <b-button variant="success" @click="handleShowAddModal">添加分组</b-button>
            <b-button variant="success" @click="handleShowAddModal">添加接口</b-button>
        </div>
        
        <div class="tbHeader" v-b-toggle="'collapse1'">3.1-菜单</div>
        <b-collapse id="collapse1" visible class="tbBody">
            <b-table striped hover :items="items"></b-table>
        </b-collapse>
    <b-row>

    </b-row>
    <b-modal ref="modalRef" id="addModal" title="项目信息" hide-footer @hidden="modalHidden">
        <!-- <projectAdd /> -->
        <component v-bind:is="select_component"></component> 
    </b-modal>
  </div>
</template>

<script>
import projectAdd from "./../components/project-add";

const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]

export default {
  name: "dashboard",
  components: {
    projectAdd
  },
  data() {
    return {
      select_component: "projectAdd",
      items: items
    };
  },
  methods: {
    handleShowAddModal() {
      this.select_component = "projectAdd";
      this.$refs.modalRef.show();
    },
    handleAdd() {},
    modalHidden() {
      this.select_component = "";
    }
  }
};
</script>

<style scoped>
.tbHeader {
    color: #fff;
    background-color: #6c757d;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    cursor: pointer;
}
.tbBody {
    background-color: #e9ecef;
}
</style>
