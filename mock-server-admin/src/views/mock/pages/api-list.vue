<template>
  <div>
    <b-card bg-variant="dark" text-variant="white" title="PLab课研管理">
      <p class="card-text">
        Base URL : https://www.easy-mock.com/mock/59ed5d9a70da825a6d4c87b7/dv
      </p>
      <p class="card-text">
        Project ID : 59ed5d9a70da825a6d4c87b7
      </p>
    </b-card>
    <div style="text-align:right;width:100%;margin-top:10px;margin-bottom:10px;">
      <b-button variant="success" @click="handleShowGroupAddModal">添加分组</b-button>
      <b-button variant="success" @click="handleShowApiAddModal">添加接口</b-button>
    </div>

    <div class="tbHeader" v-b-toggle="'collapse1'">3.1-菜单 ~ /menus</div>
    <b-collapse id="collapse1" visible class="tbBody">
      <b-table striped hover :items="items"></b-table>
    </b-collapse>

    <b-modal ref="modalRef" :title="modal_title" hide-footer @hidden="handleModalHidden" size="lg" >
      <component v-bind:is="modal_component"></component>
    </b-modal>
  </div>
</template>

<script>
  import apiAdd from './../components/api-add'
  import apiGroupAdd from './../components/api-group-add'

  const items = [
    {method: 'get', url: '/users/', description: "Dickerson", last_name: "Macdonald"},
    {isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw"},
    {isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson"},
    {isActive: true, age: 38, first_name: "Jami", last_name: "Carney"}
  ]

  export default {
    name: 'dashboard',
    components: {
      apiGroupAdd, apiAdd
    },
    data() {
      return {
        modal_title: '',
        modal_component: '',
        items: items
      }
    },
    methods: {
      handleShowApiAddModal() {
        this.modal_title = '接口信息'
        this.modal_component = 'apiAdd'
        this.$refs.modalRef.show()
      },
      handleShowGroupAddModal() {
        this.modal_title = '分组信息'
        this.modal_component = 'apiGroupAdd'
        this.$refs.modalRef.show()
      },
      handleApiAddSave() {
      },
      handleModalHidden() {
        this.modal_title = ''
        this.modal_component = ''
      }
    }
  }
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
