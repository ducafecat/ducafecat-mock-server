<template>
  <div v-if="isVisible" class="tooltip-popper">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'component-spin',
  props: ['visible'],
  computed: {},
  data() {
    return {
      isVisible: false
    }
  },
  methods: {},
  watch: {
    visible(val) {
      this.isVisible = val
    }
  }
}
</script>

<style scoped>
.tooltip-popper {
  display: block;
  visibility: visible;
  font-size: 12px;
  line-height: 1.5;
  position: absolute;
  z-index: 1060;
  margin: 0;
  padding: 0;
  background-color: hsla(0, 0%, 100%, 0.9);
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
}

.spinner {
  width: 40px;
  height: 40px;
  /* margin: 100px auto; */
  background-color: #2d8cf0;
 
  border-radius: 100%; 
  -webkit-animation: scaleout 1.0s infinite ease-in-out;
  animation: scaleout 1.0s infinite ease-in-out;

  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
 
@-webkit-keyframes scaleout {
  0% { -webkit-transform: scale(0.0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
 
@keyframes scaleout {
  0% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 100% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}
</style>
