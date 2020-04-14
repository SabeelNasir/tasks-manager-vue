const state = {
    mainLoader: false
}
const mutations = {
    mainLoader(value) {
        state.mainLoader = value
    }
}
export default {
    namespaced: true,
    state,
    mutations
}