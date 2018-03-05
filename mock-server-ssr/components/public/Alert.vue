<template>
  <b-alert
    :variant="variant"
    :show="dismissSecs"
    dismissible
    @dismissed="dismissed"
    @dismiss-count-down="countDownChanged"
  >
    {{description}} ~ {{dismissCountDown}} seconds...
  </b-alert>
</template>

<script>
  export default {
    name: 'component-alert',
    props: ['variant', 'description'],
    computed: {},
    data() {
      return {
        dismissSecs: 5,
        dismissCountDown: 0
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      dismissed() {
        this.dismissCountdown = 0
        this.$emit('dismissed-done')
      }
    }
  }
</script>

<style scoped>
</style>
