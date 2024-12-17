<template>
        <button class="bg-blue-blue-300 hover:bg-blue-blue-200 rounded-lg content-center justify-center inlign-flex font-proxima font-bold text-xl px-5 py-2 text-grey-grey-100">{{ text }}</button>

</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
    }
}
</script>

<style scoped>

</style>
