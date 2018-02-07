import { mapGetters } from 'vuex'
import store from '@/store'

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
      store.commit('SET_ALERT', {
        variant: 'primary',
        description: description
      })
    },
    successAlert (description) {
      store.commit('SET_ALERT', {
        variant: 'success',
        description: description
      })
    },
    errAlert (description) {
      store.commit('SET_ALERT', {
        variant: 'danger',
        description: description
      })
    },
    clearAlert () {
      store.commit('SET_ALERT', {
        variant: '',
        description: ''
      })
    }
  }
}
