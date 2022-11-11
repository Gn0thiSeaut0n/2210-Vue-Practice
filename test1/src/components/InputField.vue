<template>
    <div>
        <label for="">Name: </label>
        <input
            type="text"
            :value="value"
            style="margin: 10px; padding: 10px; border: 2px solid green;"
            @input="updateName"
        >
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        }
    },
    methods: {
        updateName(e) {
            console.log(e.target.value);
            this.$emit('input', e.target.value);
        }
    }
}
</script>
