<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ name }}</p><br>
        <button @click="updateName">Change Name</button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'default title'
        },
        name: {
            type: String,
            default: 'default name'
        },
    },
    data() {
        return {
            // name: 'Kcb Coder',
        }
    },
    
    methods: {
        updateName() {
            // this.name = 'Kcb Coder Updated';
        }
    }
}
</script>