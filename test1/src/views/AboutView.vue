<template>
  <div class="about">
    <h1>This is an about page</h1>
    <KcbCoder>
      <template #header="{ kcb }">
        <p>header22 {{ kcb }}</p>
      </template>
      <template #default>
        hello22
      </template>
    </KcbCoder>
  </div>
</template>

<script>
import KcbCoder from '@/components/KcbCoder.vue';

export default {
  components: {
    KcbCoder
  },
}
</script>
