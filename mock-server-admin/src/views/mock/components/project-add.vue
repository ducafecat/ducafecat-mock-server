<template>
    <b-form>
      <b-form-group
        label="项目名称:"
        label-for="input-name">
        <b-form-input
            id="input-name"
            v-model="form.name"
            required></b-form-input>
      </b-form-group>
      <b-form-group
        label="项目基础 URL:"
        label-for="input-url">
        <b-form-input
            id="input-url"
            v-model="form.url"
            required></b-form-input>
      </b-form-group>
      <b-form-group
        label="项目描述:"
        label-for="input-description">
        <b-form-textarea
            id="input-description"
            v-model="form.description" 
            :rows="3"
            :max-rows="6" ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">保存</b-button>
    </b-form>
</template>

<script>
export default {
  name: "project-add",
  data() {
    return {
        form: {
            name: '',
            url: '',
            description: ''
        }
    };
  }
};
</script>

<style scoped>
</style>
