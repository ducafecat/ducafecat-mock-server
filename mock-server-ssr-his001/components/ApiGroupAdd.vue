<template>
  <b-form @submit="handleSubmit">
    <b-form-group label-size="sm" label="分组名称:" label-for="input-name">
      <b-form-input size="sm" id="input-name" v-model="item.name" required></b-form-input>
    </b-form-group>
    <b-button size="sm" type="submit" variant="primary" style="margin-top:10px;">保存</b-button>
  </b-form>
</template>

<script>
  export default {
    name: 'component-api-group-add',
    props: ['item'],
    data() {
      return {
      }
    },
    methods: {
      handleSubmit(evt) {
        evt.preventDefault()
        if (this.item.id !== undefined) {
          this.$emit('group-update-save')
        } else {
          this.$emit('group-add-save')
        }
      }
    }
  }
</script>

<style scoped>
</style>
