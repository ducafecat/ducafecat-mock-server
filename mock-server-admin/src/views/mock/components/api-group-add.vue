<template>
    <b-form>
      <b-form-group label-size="sm" label="分组名称:" label-for="input-name">
        <b-form-input size="sm" id="input-name" v-model="form.name" required></b-form-input>
      </b-form-group>
      <b-button size="sm" type="submit" variant="primary" style="margin-top:10px;">保存</b-button>
    </b-form>
</template>

<script>
export default {
  name: 'cp-api-group-add',
  data() {
    return {
        form: {
            name: '',
            code: ''
        }
    };
  }
};
</script>

<style scoped>
</style>
