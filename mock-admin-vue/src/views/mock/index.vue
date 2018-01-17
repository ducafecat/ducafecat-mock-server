<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>全部项目</span>
      <el-button style="float: right; padding: 5px 10px" type="primary" @click="handleAdd">添加</el-button>
    </div>
    <el-row>
      <el-col :span="5" v-for="(o) in 6" :key="o" style="margin:5px">
        <el-card :body-style="{ padding: '0px' }">
          <div class="card-content" @click="handleApiList">
            <span>项目名称</span>
            <div class="card-row-time">创建时间: 2018-01-12</div>
            <hr>
            <div class="card-row-item">URL: /plab/v1</div>
            <div class="card-row-item">说明: 百洋股份8415万增资火星时代，用于信息化升级和移动服务平台建设</div>
            <el-button-group>
              <el-button type="primary" plain size="mini" icon="el-icon-edit" @click.stop="handleAdd"></el-button>
              <el-button type="primary" plain size="mini" icon="el-icon-share" @click.stop="handleAdd"></el-button>
              <el-button type="primary" plain size="mini" icon="el-icon-delete" @click.stop="handleAdd"></el-button>
            </el-button-group>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'mock-index',
    mixins: [],
    props: [],
    components: {},
    data() {
      return {
        currentDate: new Date()
      }
    },
    computed: {},
    methods: {
      handleAdd() {
        this.$router.push({ path: '/mock/add' })
      },
      handleApiList() {
        this.$router.push({ path: '/mock/api-list' })
      }
    }
  }
</script>

<style scoped>
  .card-row-item {
    background-color: #fcfcfc;
    padding: 5px;
    margin-top: 5px;
  }

  .card-content {
    padding: 14px;
    cursor: pointer;
  }

  .card-row-time {
    font-size: 12px;
    color: #999;
  }

</style>
