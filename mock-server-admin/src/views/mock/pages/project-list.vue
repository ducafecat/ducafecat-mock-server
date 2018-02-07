<template>
  <div>
    <b-row>
        <div style="text-align:right;width:98%;">
            <b-button variant="success" @click="handleShowAddModal">添加</b-button>
        </div>
    </b-row>
    <b-row>
        <b-col md="6" sm="12" style="margin-top: 10px;" >
            <b-card bg-variant="light" text-variant="dark" title="PLab课研管理">
            <p class="card-text">
                院内课程研发管控
            </p>
            <b-button to="/mock/projects/100/apis" variant="primary">进入</b-button>
            </b-card>
        </b-col>
        <b-col md="6" sm="12" style="margin-top: 10px;" >
            <b-card bg-variant="light" text-variant="dark" title="DV可视化系统">
            <p class="card-text">
                业内数据展示平台
            </p>
            <b-button href="#" variant="primary">进入</b-button>
            </b-card>
        </b-col>
        <b-col md="6" sm="12" style="margin-top: 10px;" >
            <b-card bg-variant="light" text-variant="dark" title="DV可视化系统">
            <p class="card-text">
                业内数据展示平台
            </p>
            <b-button href="#" variant="primary">进入</b-button>
            </b-card>
        </b-col>
    </b-row>
    <b-modal ref="modalRef" id="addModal" title="项目信息" hide-footer @hidden="modalHidden">
        <!-- <projectAdd /> -->
        <component v-bind:is="select_component"></component> 
    </b-modal>
  </div>
</template>

<script>
import pageMixin from '@/components/mixins/pageMixin'
import projectAdd from './../components/project-add'

export default {
  name: "dashboard",
  mixins: [pageMixin],
  components: {
      projectAdd
    },
  data() {
    return {
        select_component: 'projectAdd'
    };
  },
  methods: {
      handleShowAddModal() {
          this.select_component = 'projectAdd'
          this.$refs.modalRef.show()
      },
      handleAdd() {
      },
      modalHidden() {
          this.select_component = ''
      }
  }
};
</script>

<style scoped>
</style>
