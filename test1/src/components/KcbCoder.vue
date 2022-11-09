<template>
    <div>
        <p>{{ name }}</p>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Kcb Coder',
        }
    },
    
    methods: {
        updateName() {
            this.name = 'Kcb Coder Updated';
        }
    }
}
</script>