import { mapGetters } from 'vuex'

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'routeMaps',
      'currentRoute',
      'alertVariant',
      'alertDescription'
    ])
  },
  methods: {
    primaryAlert (description) {
      this.$store.commit('SET_ALERT', {
        variant: 'primary',
        description: description
      })
    },
    successAlert (description) {
      this.$store.commit('SET_ALERT', {
        variant: 'success',
        description: description
      })
    },
    errAlert (description) {
      this.$store.commit('SET_ALERT', {
        variant: 'danger',
        description: description
      })
    },
    clearAlert () {
      this.$store.commit('SET_ALERT', {
        variant: '',
        description: ''
      })
    }
  }
}
