<template>
  <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2">
    <p>For more information visit website</p>
    <b-btn variant="primary" href="#">More Info</b-btn>
  </b-jumbotron>
</template>

<script>
  import pageMixin from './../../components/mixins/pageMixin'

  export default {
    layout: 'dashboard',
    mixins: [pageMixin],
    name: 'dashboard',
    components: {},
    data() {
      return {}
    }
  }
</script>

<style scoped>
</style>
