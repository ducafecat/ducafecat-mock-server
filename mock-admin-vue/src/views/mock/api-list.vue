<template>
  <el-tabs v-model="activeName" type="border-card" style="margin: 10px;">
    <el-tab-pane name="first">
      <span slot="label"><i class="el-icon-date"></i> 接口列表</span>
      <el-button-group>
        <el-button type="primary" size="mini">添加分组</el-button>
        <el-button type="primary" size="mini">导出</el-button>
        <el-button type="primary" size="mini">导人</el-button>
      </el-button-group>
      <el-collapse v-model="activeNames" style="margin-top: 10px" @change="handleChange">
        <el-collapse-item name="0">
          <template slot="title">
            用户管理
          </template>
          <el-button-group>
            <el-button type="primary" size="mini" @click.stop="">修改</el-button>
            <el-button type="primary" size="mini" @click.stop="">删除</el-button>
            <el-button type="primary" size="mini" @click.stop="handleApiAdd">添加接口</el-button>
          </el-button-group>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="基础数据" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="计划数据" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="项目数据" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="系统设置" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i> 接口手册</span>
      手册
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label"><i class="el-icon-date"></i> 项目设置</span>
      配置管理
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    name: 'mock-api-list',
    data() {
      return {
        activeName: 'first',
        activeNames: ['0'],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      onSubmit() {
      },
      onCancel() {
      },
      handleChange(val) {
        console.log(val)
      },
      handleApiAdd() {
        this.$router.push({ path: '/mock/api-add' })
      }
    }
  }
</script>

<style scoped>
</style>

