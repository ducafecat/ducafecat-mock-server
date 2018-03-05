<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info" fixed="top" sticky>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/">Mock Server</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/projects">项目</b-nav-item>
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
      <!-- 面包靴 -->
      <b-breadcrumb :items="breadcrumb" />
      <!-- 面包靴 end -->
      <!-- alert -->
      <Alert
        v-if="alertDescription !== ''"
        :variant="alertVariant"
        :description="alertDescription"
        @dismissed-done="clearAlert"></Alert>
      <!-- alert end -->
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import pageMixin from '~/components/mixins/pageMixin'
  import Alert from '~/components/public/Alert'
  // import Spin from '~/components/public/Spin'

  export default {
    name: 'dashboard-layout',
    mixins: [pageMixin],
    components: {
      Alert
      // Spin
    },
    data() {
      return {}
    },
    computed: {
      breadcrumb () {
        let breadcrumbList = []
        let nodesp = []
        function parseNodes(nodes, findId) {
          for (let it of nodes) {
            nodesp.push(it)
            let isFind = false
            if (findId === it.path) {
              isFind = true
            }
            if (it.childs !== undefined && it.childs.length > 0 && !isFind) {
              isFind = parseNodes(it.childs, findId)
            } else {
            }
            if (isFind) {
              for (let item of nodesp) {
                breadcrumbList.push({
                  text: item.name,
                  to: item.path
                })
              }
              nodesp = []
              return isFind
            }
            nodesp.pop()
          }
        }
        if (this.currentRoute !== null) {
          parseNodes(this.routeMaps, this.currentRoute)
          // for (let item of this.currentRoute.matched) {
          //   if (item.path !== '') {
          //     parseNodes(this.routeMaps, item.path)
          //   }
          // }
        }
        return breadcrumbList
      }
    },
    methods: {},
    mounted: function () {
    }
  }
</script>

<style scoped>
</style>
