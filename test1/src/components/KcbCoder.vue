<template>
    <div>
        <p>header</p>
        <slot name="header" :kcb="kcb"></slot>
        <p>body</p>
        <slot></slot>
        <p>footer</p>
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
            kcb: 'coder'
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