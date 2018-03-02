<template>
  <div class="api-list">
    <b-card bg-variant="dark" text-variant="white" :title="project_item.name">
      <p class="card-text">
        Base URL : https://www.easy-mock.com/mock/{{project_item.id}}/{{project_item.base_url}}
      </p>
      <p class="card-text">
        Project ID : {{project_item.id}}
      </p>
      <p class="card-text">
        Description : {{project_item.desc}}
      </p>
    </b-card>
    <div style="text-align:right;width:100%;margin-top:10px;margin-bottom:10px;">
      <b-button variant="outline-success" size="sm" @click="handleShowGroupAddModal">添加分组</b-button>
    </div>

    <!-- API分组 -->
    <apiList 
      :items="data_list" 
      @group-edit="handleShowGroupUpdateModal"
      @group-delete="handelGroupDelete"
      @api-preview="handleApiPreview"
      @api-add="handleShowApiAddFullView"
      @api-edit="handleShowApiEditFullView"
      @api-delete="handleApiDelete"
      ></apiList>
    <!-- API分组 end -->

    <!-- 添加 分组 -->
    <b-modal
      ref="modalRef"
      header-bg-variant="dark"
      header-text-variant="light"
      :title="modal_title"
      hide-footer
      @hidden="handleModalHidden"
      size="sm">
      <component 
        v-bind:is="modal_component" 
        :item.sync="group_item"
        @group-add-save="handleGroupAddSave"
        @group-update-save="handleGroupUpdateSave" ></component>
    </b-modal>
    <!-- 添加 api/分组 end -->

    <!-- 添加 api接口 -->
    <component 
      v-show="isShowApiAddView" 
      v-bind:is="fullscreen_component" 
      :form="form" 
      @api-save="handleApiAddSave" 
      @close="handleApiAddClose"></component>
    <!--<apiAdd v-show="isShowApiAddView" :form="form" @api-save="handleApiAddSave" @close="handleApiAddClose"></apiAdd>-->
    <!-- api信息 end -->
  </div>
</template>

<script>
import axios from 'axios'
import pageMixin from '~/components/mixins/pageMixin'
import MixUtil from '~/utils/mix'
import {mock, project, group} from '~/utils/api'
import apiAdd from '~/components/apiAdd'
import apiGroupAdd from '~/components/apiGroupAdd'
import apiList from '~/components/apiList'

const items = [
  {
    method: 'get',
    url: '/users/',
    description: 'Dickerson',
    last_name: 'Macdonald'
  },
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'}
]

export default {
  // async asyncData({params}) {
  //   let {data} = await project.info({data: {id: params.id}})
  //   return {project_item: data}
  //   // return { params: params }
  // },
  asyncData({params, error}) {
    return axios
      .all([project.info({id: params.id}), group.list({pid: params.id})])
      .then(
        axios.spread(function(project_item, groupList) {
          return {
            project_item: project_item.data,
            data_list: groupList.data
          }
        })
      )
      .catch(error => console.log(error))
  },
  name: 'project-detail',
  layout: 'dashboard',
  mixins: [pageMixin],
  components: {
    apiGroupAdd,
    apiAdd,
    apiList
  },
  watch: {
    isShowApiAddView(show) {
      document.body.style.overflow = show ? 'hidden' : 'auto'
    }
  },
  data() {
    return {
      params: {},
      isShowApiAddView: false,
      fullscreen_component: '',
      modal_title: '',
      modal_component: '',
      items: items,
      form: '',
      project_item: {},
      data_list: [],
      group_item: {}
    }
  },
  methods: {
    // 业务
    reloadData() {
      group.list({id: this.project_item.id}).then(res => {
        this.data_list = res.data
      })
    },

    // api
    handleShowApiAddFullView(item) {
      this.form = {
        // 输入
        request: {
          base: {
            group: item.name,
            method: 'get',
            url: '',
            description: ''
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
      this.fullscreen_component = 'apiAdd'
      this.isShowApiAddView = true
    },
    handleShowApiEditFullView(id) {
      mock.info({id}).then(res => {
        this.form = res.data
        this.fullscreen_component = 'apiAdd'
        this.isShowApiAddView = true
      })
    },
    handleApiPreview(url) {
      let urlString = `/mock/${this.project_item.id}/${this.project_item.base_url}/${url}`
      console.log(urlString)
    },
    handleApiDelete(id) {
      if (!MixUtil.delConfirm()) {
        return
      }
      mock.delete({id}).then(res => {
        this.reloadData()
        this.successAlert('API删除成功.')
      })
    },
    handleApiAddSave(data) {
      console.log(data)
      this.fullscreen_component = ''
      this.isShowApiAddView = false
      if (data.id === undefined) {
        mock.create(data).then(res => {
          this.reloadData()
          this.successAlert('API添加成功.')
        })
      } else {
        mock.update(data).then(res => {
          this.reloadData()
          this.successAlert('API修改成功.')
        })
      }
    },
    handleApiAddClose() {
      this.fullscreen_component = ''
      this.isShowApiAddView = false
    },

    // 分组
    handleShowGroupAddModal() {
      this.group_item = {
        name: ''
      }
      this.modal_title = '添加分组信息'
      this.modal_component = 'apiGroupAdd'
      this.$refs.modalRef.show()
    },
    handleShowGroupUpdateModal(item, index) {
      this.group_item = item
      this.modal_title = '修改分组信息'
      this.modal_component = 'apiGroupAdd'
      this.$refs.modalRef.show()
    },
    handleModalHidden() {
      this.modal_title = ''
      this.modal_component = ''
    },
    handleGroupAddSave() {
      this.$refs.modalRef.hide()
      group.create(this.group_item).then(res => {
        this.reloadData()
        this.successAlert('分组添加成功.')
      })
    },
    handleGroupUpdateSave() {
      this.$refs.modalRef.hide()
      group.update(this.group_item).then(res => {
        this.reloadData()
        this.successAlert('分组修改成功.')
      })
    },
    handelGroupDelete(item, index) {
      if (!MixUtil.delConfirm()) {
        return
      }
      group.delete(item).then(res => {
        this.reloadData()
        this.successAlert('分组删除成功.')
      })
    }
  },
  mounted: function() {
    // let setupData = async () => {
    //   let { data } = await project.info({data: {id: this.params.id}})
    //   this.project_item = data
    // }
    // setupData()
  }
}
</script>

<style>
/* .api-list .popover-body {
    padding: 0px
  } */
</style>

<style scoped>

</style>
