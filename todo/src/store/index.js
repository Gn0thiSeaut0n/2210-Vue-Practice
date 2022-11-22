import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            { id:1, text: 'buy a car', checked: false },
            { id:2, text: 'play game', checked: false },
          ],
        users: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    },
    actions: {
        async getUsers({ commit }) {
            await axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(res => {
                        commit('SET_USERS', res.data);
                    });
            console.log(this.state.users);
        },
        addTodo({ commit }, value) {
            console.log(value); // 여기서 DB작업(비동기)
            // axios를 사용하여 진행 하단의 내용은 대체 내용 (setTimeout)
            setTimeout(() => {
                commit('ADD_TODO', value);
            }, 500);
        },
        toggleTodo({ commit }, payload) {
            console.log(payload); // 여기서 DB작업(비동기)
            setTimeout(() => {
                commit('TOGGLE_TODO', payload);
            }, 500);
        },
        deleteTodo({ commit }, todoId) {
            console.log(todoId); // 여기서 DB작업(비동기)
            setTimeout(() => {
                commit('DELETE_TODO', todoId);
            }, 500);
        }
    },
    getters: {
        
    }
});