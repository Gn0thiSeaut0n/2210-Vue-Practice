<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KcbCoder title="about title"/>
  </div>
</template>

<script>
import KcbCoder from '@/components/KcbCoder.vue';

export default {
  components: {
    KcbCoder
  },
  data() {
    return {
      title: 5
    }
  }
}
</script>
