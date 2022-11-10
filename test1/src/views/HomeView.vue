<template>
  <div>
    <h1>This is Home page</h1>
    <KcbCoder title="home title" name="Kcb Coder"/>
  </div>
</template>

<script>
  import KcbCoder from '@/components/KcbCoder.vue';
  export default {
    components: {
      KcbCoder
    }
  }
</script>

<style scoped>
  h1 {
    color: red;
  }
</style>