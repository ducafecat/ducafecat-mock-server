const getters = {
    currentRoute: state => state.routers.currentRoute,
    alertVariant: state => state.alert.variant,
    alertDescription: state => state.alert.description
}

export default getters
