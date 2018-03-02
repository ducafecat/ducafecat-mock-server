const alert = {
    state: {
        variant: '',
        description: ''
    },

    mutations: {
        SET_ALERT: (state, obj) => {
            state.variant = obj.variant
            state.description = obj.description
        }
    }
}

export default alert
