<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <AddTodo />
    <hr>
    <TodoList />
    <UserList />
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import CompletedTodo from '@/components/CompletedTodo.vue';
export default {
  components: {
    UserList,
    TodoList,
    AddTodo,
    CompletedTodo
  }
}
</script>