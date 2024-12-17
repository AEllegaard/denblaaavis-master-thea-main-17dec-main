<template>

    <div class="ProductText font-proximat rounded-lg bg-grey-grey-200 text-grey-grey-300 px-7 py-2 text-sm font-bold">
        <div class="flex justify-between px-2 py-2">
            <p class="">Produkt</p>
            <h4 class="" >{{ product }}</h4>
        </div>
        <div class="flex justify-between px-2 py-2">
            <p class="">Materiale</p>
            <h4 class="" >{{ material }}</h4>
        </div>
        <div class="flex justify-between px-2 py-2">
            <p class="">Stand</p>
            <h4>{{ stand }}</h4>
        </div>

      </div>

</template>

<script>
export default {
    name: 'ProductText',
    props: {
        product: String,
        material: String,
        stand: String,
    }
}
</script>

<style scoped>

</style>
