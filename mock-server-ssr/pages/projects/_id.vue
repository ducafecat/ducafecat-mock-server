<template>
  <div class="api-list">
    <b-card bg-variant="dark" text-variant="white" :title="projectItem.name">
      <p class="card-text">
        Base URL : https://www.easy-mock.com/mock/{{projectItem.id}}/{{projectItem.base_url}}
      </p>
      <p class="card-text">
        Project ID : {{projectItem.id}}
      </p>
      <p class="card-text">
        Description : {{projectItem.desc}}
      </p>
    </b-card>
    <div style="text-align:right;width:100%;margin-top:10px;margin-bottom:10px;">
      <b-button variant="outline-success" size="sm" @click="handleShowGroupAddModal">添加分组</b-button>
    </div>

    <!-- API分组 -->
    <apiList 
      :items="dataList" 
      @group-edit="handleShowGroupUpdateModal"
      @group-delete="handleGroupDelete"
      @api-add="handleShowApiAddFullView"
      @api-edit="handleShowApiEditFullView"
      @api-preview="handleApiPreview"
      @api-delete="handleApiDelete"
      ></apiList>
    <!-- API分组 end -->

    <!-- 添加 分组 -->
    <b-modal
      ref="modalRef"
      header-bg-variant="dark"
      header-text-variant="light"
      :title="modalTitle"
      hide-footer
      @hidden="handleModalHidden"
      size="sm">
      <component 
        v-bind:is="modalComponent" 
        :item.sync="groupItem"
        @group-add-save="handleGroupAddSave"
        @group-update-save="handleGroupUpdateSave"
        ></component>
    </b-modal>
    <!-- 添加 api/分组 end -->

    <!-- 添加 api接口 -->
    <component 
      v-show="isShowApiAddView" 
      v-bind:is="fullscreenComponent" 
      :form="form" 
      @api-save="handleApiAddSave" 
      @close="handleApiAddClose"></component>
    <!--<apiAdd v-show="isShowApiAddView" :form="form" @api-save="handleApiAddSave" @close="handleApiAddClose"></apiAdd>-->
    <!-- api信息 end -->

    <Spin :visible="isSpinVisible" ></Spin>
  </div>
</template>

<script>
import axios from 'axios'
import pageMixin from '~/components/mixins/pageMixin'
import MixUtil from '~/utils/mix'
import {project, group, mock} from '~/utils/api'
import apiAdd from '~/components/apiAdd'
import apiGroupAdd from '~/components/apiGroupAdd'
import apiList from '~/components/apiList'
import Spin from '~/components/public/Spin'

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
  //   return {projectItem: data}
  //   // return { params: params }
  // },
  asyncData({params, error}) {
    return axios
      .all([project.info({id: params.id}), group.list({pid: params.id})])
      .then(
        axios.spread(function(projectItem, groupList) {
          return {
            projectItem: projectItem.data,
            dataList: groupList.data
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
    apiList,
    Spin
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
      fullscreenComponent: '',
      modalTitle: '',
      modalComponent: '',
      items: items,
      form: '',
      projectItem: {},
      dataList: [],
      groupItem: {},
      isSpinVisible: false
    }
  },
  methods: {
    // 业务
    reloadData() {
      group.list({id: this.projectItem.id}).then(res => {
        this.projectItem = res.data
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
      this.fullscreenComponent = 'apiAdd'
      this.isShowApiAddView = true
    },
    handleShowApiEditFullView(item) {
      // 修改
      this.isSpinVisible = true
      mock.info({id: item.id}).then(res => {
        this.form = res.data
        this.fullscreenComponent = 'apiAdd'
        this.isShowApiAddView = true
        this.isSpinVisible = false
      })
    },
    handleApiPreview(item) {
      // 预览
      let urlString = `/mock/${this.projectItem.id}/${
        this.projectItem.base_url
      }/${item.url}#!method=${item.method}`
      window.open(urlString)
    },
    handleApiDelete(item) {
      // 删除
      if (MixUtil.delConfirm(item.id)) {
        mock.delete({id}).then(res => {
          this.reloadData()
          this.successAlert('API删除成功.')
        })
      }
    },
    handleApiAddSave(data) {
      this.isSpinVisible = true
      if (data.id === undefined) {
        mock.create(data).then(res => {
          this.reloadData()
          this.fullscreenComponent = ''
          this.isShowApiAddView = false
          this.successAlert('API添加成功.')
          this.isSpinVisible = false
        })
      } else {
        mock.update(data).then(res => {
          this.reloadData()
          this.fullscreenComponent = ''
          this.isShowApiAddView = false
          this.successAlert('API修改成功.')
          this.isSpinVisible = false
        })
      }
    },
    handleApiAddClose() {
      this.fullscreenComponent = ''
      this.isShowApiAddView = false
    },

    // 分组
    handleShowGroupAddModal() {
      this.groupItem = {
        name: ''
      }
      this.modalTitle = '添加分组信息'
      this.modalComponent = 'apiGroupAdd'
      this.$refs.modalRef.show()
    },
    handleShowGroupUpdateModal(item, index) {
      this.groupItem = item
      this.modalTitle = '修改分组信息'
      this.modalComponent = 'apiGroupAdd'
      this.$refs.modalRef.show()
    },
    handleModalHidden() {
      this.modalTitle = ''
      this.modalComponent = ''
    },
    handleGroupAddSave() {
      this.$refs.modalRef.hide()
      group.create(this.groupItem).then(res => {
        this.reloadData()
        this.successAlert('分组添加成功.')
      })
    },
    handleGroupUpdateSave() {
      this.$refs.modalRef.hide()
      group.update(this.groupItem).then(res => {
        this.reloadData()
        this.successAlert('分组修改成功.')
      })
    },
    handleGroupDelete(item, index) {
      group.delete(item).then(res => {
        this.reloadData()
        this.successAlert('分组删除成功.')
      })
    }
  },
  mounted: function() {
    // let setupData = async () => {
    //   let { data } = await project.info({data: {id: this.params.id}})
    //   this.projectItem = data
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
