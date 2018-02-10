<template>
  <div class="api-list">
    <b-card bg-variant="dark" text-variant="white" title="PLab课研管理">
      <p class="card-text">
        Base URL : https://www.easy-mock.com/mock/59ed5d9a70da825a6d4c87b7/dv
      </p>
      <p class="card-text">
        Project ID : 59ed5d9a70da825a6d4c87b7
      </p>
    </b-card>
    <div style="text-align:right;width:100%;margin-top:10px;margin-bottom:10px;">
      <b-button variant="outline-success" size="sm" @click="handleShowGroupAddModal">添加分组</b-button>
    </div>

    <!-- API分组 -->
    <apiList :items="data_list" @event-api-add="handleShowApiAddFullView"></apiList>
    <!-- API分组 end -->

    <!-- 添加 api/分组 -->
    <b-modal 
      ref="modalRef" 
      header-bg-variant="dark"
      header-text-variant="light"
      :title="modal_title" 
      hide-footer 
      @hidden="handleModalHidden" 
      size="sm" >
      <component v-bind:is="modal_component" :form="form" @data-save="handleDataSave"></component>
    </b-modal>
    <!-- 添加 api/分组 end -->
    
    <!-- api信息 -->
    <apiAdd v-if="isShowApiAddView" :form="form" @api-save="handleApiAddSave" @close="handleApiAddClose"></apiAdd>
    <!-- api信息 end -->
  </div>
</template>

<script>
import pageMixin from '@/components/mixins/pageMixin'
import MixUtil from '@/utils/mix'
import apiAdd from './../components/api-add'
import apiGroupAdd from './../components/api-group-add'
import apiList from './../components/api-list'

const items = [
  {method: 'get', url: '/users/', description: "Dickerson", last_name: "Macdonald"},
  {isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw"},
  {isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson"},
  {isActive: true, age: 38, first_name: "Jami", last_name: "Carney"}
]

export default {
  name: 'api-list-page',
  mixins: [pageMixin],
  components: {
    apiGroupAdd, apiAdd, apiList
  },
  data() {
    return {
      isShowApiAddView: false,
      modal_title: '',
      modal_component: '',
      items: items,
      form: '',
      data_list: [
        {
          _id: 1232132132312,
          gCode: 'menus',
          gName: '3.1-菜单',
          items: [
            { method: 'get', url: '/menus/', description: "数据列表", _id: 1232132132312 },
            { method: 'post', url: '/menus/', description: "数据添加", _id: 1232132132312 },
            { method: 'put', url: '/menus/:id', description: "数据修改", _id: 1232132132312 },
            { method: 'delete', url: '/menus/:id', description: "数据删除", _id: 1232132132312 }
          ]
        },
        {
          _id: 1232132132312,
          gCode: 'menus2',
          gName: '3.2-菜单',
          items: [
            { method: 'get', url: '/menus/', description: "数据列表", _id: 1232132132312 },
            { method: 'post', url: '/menus/', description: "数据添加", _id: 1232132132312 },
            { method: 'put', url: '/menus/:id', description: "数据修改", _id: 1232132132312 },
            { method: 'delete', url: '/menus/:id', description: "数据删除", _id: 1232132132312 }
          ]
        }
      ]
    }
  },
  methods: {
    handleShowApiAddFullView() {
      this.form = {
        // 输入
        request: {
          base: {
            method: "get",
            url: "",
            description: ""
          },
          parameters: [],
          headers: [],
          body: {
            type: '1',
            kvData: [],
            rawType: '1',
            rawData: '',
            rawDataMD: ''
          }
        },
        // 输出
        response: {
          body: '{"data":""}',
          bodyMD: '', 
          mockjs: 0,
          headers: []
        }
      }
      this.isShowApiAddView = true
    },
    handleApiAddSave(data) {
      console.log(data)
      this.isShowApiAddView = false
    },
    handleApiAddClose() {
      this.isShowApiAddView = false
    },

    handleShowApiAddModal2() {
      this.modal_title = '接口信息'
      this.modal_component = 'apiAdd'
      this.form = {
        // 输入
        request: {
          base: {
            method: "get",
            url: "",
            description: ""
          },
          parameters: [],
          headers: [],
          body: {
            type: '1',
            kvData: [],
            rawType: '1',
            rawData: '',
            rawDataMD: ''
          }
        },
        // 输出
        response: {
          body: '{"data":""}',
          bodyMD: '', 
          mockjs: 0,
          headers: []
        }
      }
      this.form.response.body = MixUtil.formatJson(this.form.response.body)
      this.$refs.modalRef.show()
    },
    handleShowGroupAddModal() {
      this.modal_title = '分组信息'
      this.modal_component = 'apiGroupAdd'
      this.$refs.modalRef.show()
    },
    handleModalHidden() {
      this.modal_title = ''
      this.modal_component = ''
    },
    handleDataSave(data) {
      console.log(data)
      this.$refs.modalRef.hide()
      this.successAlert('api接口添加成功')
    }
  }
}
</script>

<style>
  /* .api-list .popover-body {
    padding: 0px;
  } */
</style>

<style scoped>
</style>
