const state = {
    snackbar: false,
    message: '',
    type: 'success'
}
const mutations = {
    showSnackbar() {
        state.snackbar = true
    },
    hideSnackbar() {
        state.snackbar = false
    }
}
export default { namespaced: true, state, mutations }