<template>

      <img class=" object-cover aspect-square rounded-lg" :src="imgSrc" alt="card image">
</template>

<script>
export default {
    name: 'ProductImage',
    props: {
        imgSrc: String,
    }
}
</script>

<style scoped>

</style>
