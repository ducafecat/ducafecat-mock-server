<template>
  <div>
      <div v-for="(it, index) in items" :key="'g-'+index">
        <div class="tbHeader" v-b-toggle="'collapse-'+index">
            {{it.gCode}} ~ {{it.gName}}
            <b-button-group class="float-right" size="sm">
                <b-button @click.stop="handleApiAdd(it)">+</b-button>
                <b-button :id="'exPopover'+index" @click.stop="" >...</b-button>
                <b-popover :ref="'popover'+index" :target="'exPopover'+index" triggers="click" placement="top" style="padding:0px;">
                <!-- <template slot="title">Content via Slots</template> -->
                <b-button-group size="sm" vertical>
                    <b-button @click="handleGroupEdit(it, index)" variant="link">修改</b-button>
                    <b-button @click="handleGroupDelete(it, index)" variant="link">删除</b-button>
                </b-button-group>
                </b-popover>
            </b-button-group>
        </div>
        <b-collapse :id="'collapse-'+index" :visible="index === 0" class="tbBody">
            <b-table striped hover :fields="fields" :items="it.items">
            </b-table>
        </b-collapse>
      </div>
  </div>
</template>

<script>
export default {
  name: "cp-api-list",
  components: {
  },
  props: ['items'],
  data() {
    return {
        popoverShow: [],
        fields: [
                {
                    key: "method",
                    label: "method"
                },
                {
                    key: "url",
                    label: "url"
                },
                {
                    key: "description",
                    label: "description"
                }
            ]
    };
  },
  methods: {
    //   group
    handleGroupEdit(item, index) {
        this.$emit('event-group-edit', item)
        this.$refs['popover'+index][0].$emit('close')
    },
    handleGroupDelete(item, index) {
        this.$emit('event-group-delete', item)
        this.$refs['popover'+index][0].$emit('close')
    },
    //   api
    handleApiAdd(item) {
        this.$emit('event-api-add', item)
    },
    handleApiEdit(item) {
        this.$emit('event-api-edit', item)
    },
    handleApiDelete(item) {
        this.$emit('event-api-delete', item)
    }
  },
  // 挂载结束
  mounted: function() {
  }
};
</script>

<style scoped>
  .tbHeader {
    color: #fff;
    background-color: #6c757d;
    height: 40px;
    line-height: 30px;
    padding: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  .tbBody {
    background-color: #e9ecef;
  }
</style>
