import router from '@/router/router'
const state = {
    user: {
        token: localStorage.getItem('token') || null,
        email: null,
        role: null
    }
}
const mutations = {
    setUser(state, data) {
        localStorage.setItem('userKey', JSON.stringify(data))
        localStorage.setItem('token', data.token)
        state.user = data
    },
    logout(state) {
        localStorage.removeItem('userKey')
        localStorage.removeItem('token')
        state.user = {
            token: null,
            email: null,
            role: null
        }
        router.push({ name: 'login' })
    }
}
const getters = {
    getUser: () => {
        const data = JSON.parse(localStorage.getItem('userKey')) || state.user
        return data
    },
    isLoggedIn: () => {
        return state.user.token != null
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters
}