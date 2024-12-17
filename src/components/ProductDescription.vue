<template>

    <div class="ProductDescription font-proximat">
      <h4 class="font-bold text-2xl text-blue-blue-300 mt-4" >{{ price }} kr.</h4>
        <p class="font-bold text-xl">{{ title }}</p>
        <p class="text-base mt-2"> {{ desciptiontext }}</p>
      </div>

</template>

<script>
export default {
    name: 'ProductDescription',
    props: {
        price: String,
        title: String,
        desciptiontext: String,
    }
}
</script>

<style scoped>

</style>
