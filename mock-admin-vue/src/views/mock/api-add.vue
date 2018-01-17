<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>接口信息</span>
      <el-button style="float: right; padding: 5px 10px" type="primary" @click="onSubmit">添加</el-button>
    </div>
    <el-form ref="form" :model="form" label-width="120px">
      <!-- request -->
      <span class="form-kind-text">request</span>
      <el-tabs type="border-card">
        <el-tab-pane label="基础">
          <el-form-item label="Method">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="URL">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="Params"></el-tab-pane>
        <el-tab-pane label="Headers"></el-tab-pane>
        <el-tab-pane label="Body"></el-tab-pane>
      </el-tabs>
      <!-- response -->
      <span class="form-kind-text">response</span>
      <el-tabs type="border-card">
        <el-tab-pane label="Body"></el-tab-pane>
        <el-tab-pane label="Cookies"></el-tab-pane>
        <el-tab-pane label="Headers"></el-tab-pane>
      </el-tabs>
    </el-form>
  </el-card>
</template>

<script>
  export default {
    name: 'mock-add',
    data() {
      return {
        form: {
          name: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message('submit!')
      },
      onCancel() {
        this.$message({
          message: 'cancel!',
          type: 'warning'
        })
      }
    }
  }
</script>

<style scoped>
  .form-kind-text {
    display: block;
    font-size: 28px;
    margin-top: 10px;
    margin-bottom: 10px;
    /*background-color: #99a9bf;*/
  }
</style>
