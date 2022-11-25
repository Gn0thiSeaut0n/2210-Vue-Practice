import axios from "axios";

export default {
    namespaced: true,
    state: {
        users: [],
    },

    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
    },

    actions: {
        async getUsers({ commit }) {
            await axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(res => {
                        commit('SET_USERS', res.data);
                    });
            console.log(this.state.users);
        },
    }
}