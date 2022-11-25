export default {
    namespaced: true,
    state: {
        todos: [
            { id:1, text: 'buy a car', checked: false },
            { id:2, text: 'play game', checked: false },
          ],
    },
    mutations: {
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
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
}