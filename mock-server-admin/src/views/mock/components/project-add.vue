<template>
    <b-form @submit="handleSubmit">
      <b-form-group 
        v-if="item.id !== undefined"
        label-size="sm"
        label="ID:"
        label-for="input-id">
        <b-form-input size="sm" 
          disabled
          id="input-id"
          v-model="item.id"></b-form-input>
      </b-form-group>
      <b-form-group
        label-size="sm"
        label="项目基础 URL:"
        label-for="input-base_url">
        <b-form-input size="sm"
            id="input-base_url"
            v-model="item.base_url"
            :disabled="item.id !== undefined"
            required></b-form-input>
      </b-form-group>
      <b-form-group
        label-size="sm"
        label="项目名称:"
        label-for="input-name">
        <b-form-input size="sm"
            id="input-name"
            v-model="item.name"
            required></b-form-input>
      </b-form-group>
      <b-form-group
        label-size="sm"
        label="项目描述:"
        label-for="input-desc">
        <b-form-textarea size="sm"
            id="input-desc"
            v-model="item.desc" 
            :rows="3"
            :max-rows="6" ></b-form-textarea>
      </b-form-group>
      <b-button size="sm" type="submit" variant="primary" style="margin-top:10px;">保存</b-button>
    </b-form>
</template>

<script>
export default {
  name: 'cp-project-add',
  props: ['item'],
  data() {
    return {
    };
  },
  methods: {
    handleSubmit (evt) {
      evt.preventDefault();
      if (this.item.id > 0) {
        this.$emit('project-update-save')
      } else {
        this.$emit('project-add-save')
      }
    }
  }
};
</script>

<style scoped>
</style>
