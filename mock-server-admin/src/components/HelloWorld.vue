<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Mock Server</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#">项目</b-nav-item>
          <b-nav-item href="#">关于</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="语言" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>用户</em>
            </template>
            <b-dropdown-item href="#">个人信息</b-dropdown-item>
            <b-dropdown-item href="#">退出</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
    <main role="main" class="container">
      <b-breadcrumb :items="breadcrumb" />
      <b-row>
        <div style="text-align:right">
          <b-button variant="success">添加</b-button>
        </div>
      </b-row>
      <b-row>
        <b-col md="6" sm="12" style="margin-top: 10px;" >
          <b-card bg-variant="light" text-variant="dark" title="PLab课研管理">
            <p class="card-text">
              院内课程研发管控
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
        <b-col md="6" sm="12" style="margin-top: 10px;" >
          <b-card bg-variant="light" text-variant="dark" title="DV可视化系统">
            <p class="card-text">
              业内数据展示平台
            </p>
            <b-button href="#" variant="primary">进入</b-button>
          </b-card>
        </b-col>
      </b-row>
    </main>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      breadcrumb: [
        {
          text: "Admin",
          href: "#"
        },
        {
          text: "Manage",
          href: "#"
        },
        {
          text: "Library",
          active: true
        }
      ]
    };
  }
};
</script>

<style scoped>
main {
  margin-top: 10px;
}
</style>
