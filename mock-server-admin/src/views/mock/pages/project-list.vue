<template>
  <div>
    <b-row>
      <div style="text-align:right;width:98%;">
        <b-button variant="outline-success" @click="handleShowAddModal">添加</b-button>
      </div>
    </b-row>
    <b-row>
      <b-col v-for="(it, index) in items" :key="index" md="6" sm="12" style="margin-top: 10px;">
        <b-card bg-variant="light" text-variant="dark" :title="it.name">
          <p class="card-text">
            {{it.desc}}
          </p>
          <b-button-group size="sm" class="float-right">
            <b-button variant="link" :to="`/mock/projects/${it.id}/apis`" title="进入">
              <span class="oi oi-list"></span>
            </b-button>
            <b-button variant="link" title="修改" @click="handleShowEditModal(it)">
              <span class="oi oi-pencil"></span>
            </b-button>
            <b-button variant="link" title="删除" @click="handleDelete(it.id)">
              <span class="oi oi-delete"></span>
            </b-button>
          </b-button-group>
        </b-card>
      </b-col>
    </b-row>
    <b-modal header-bg-variant="dark" header-text-variant="light" ref="modalRef" id="addModal" title="项目信息" hide-footer @hidden="modalHidden">
      <!-- <projectAdd /> -->
      <component v-bind:is="select_component" :item.sync="data_item" @project-add-save="handleAddSave" @project-update-save="handleUpdateSave"></component>
    </b-modal>
  </div>
</template>

<script>
import pageMixin from '@/components/mixins/pageMixin'
import projectAdd from './../components/project-add'
import MixUtil from '@/utils/mix'
import * as Api from '@/apis'

export default {
  name: 'dashboard',
  mixins: [pageMixin],
  components: {
    projectAdd
  },
  data() {
    return {
      select_component: 'projectAdd',
      items: [],
      data_item: {}
    }
  },
  methods: {
    handleShowAddModal() {
      this.data_item = {
        name: '',
        base_url: '',
        desc: ''
      }
      this.select_component = 'projectAdd'
      this.$refs.modalRef.show()
    },
    handleAddSave() {
      this.$refs.modalRef.hide()
      Api.project.create({ data: this.data_item }).then(res => {
        this.successAlert('项目添加成功.')
      })
    },
    handleShowEditModal(data) {
      this.data_item = data
      this.select_component = 'projectAdd'
      this.$refs.modalRef.show()
    },
    handleUpdateSave() {
      this.$refs.modalRef.hide()
      Api.project.update({ data: this.data_item }).then(res => {
        this.successAlert('项目修改成功.')
      })
    },
    handleDelete(pid) {
      if (MixUtil.delConfirm(pid)) {
        let data = {
          id: pid
        }
        Api.project.delete({ data }).then(res => {
          this.successAlert('项目删除成功.')
        })
      }
    },
    modalHidden() {
      this.select_component = ''
    }
  },
  // 挂载结束
  mounted: function() {
    Api.project.list().then(res => {
      this.items = res.data
    })
  }
}
</script>

<style scoped>

</style>
