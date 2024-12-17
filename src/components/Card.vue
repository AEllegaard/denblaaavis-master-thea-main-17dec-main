<template>

    <div class="card p-4 pt-2 border-1 border-grey-grey-200 border-collapse">
      <img class="border-radius-full object-cover aspect-square rounded-lg" :src="imgSrc" alt="card image">
      <p class="font-proxima text-sm font-bold pt-2">{{ title }}</p>
      <h4 class="font-proxima font-bold text-xl text-text-inverse " >{{ price }} kr.</h4>
      <div class="location flex">
        <img class="pr-1" src="/icons/Verificeret.svg" alt="">
        <p class="font-proxima text-xs text-text-gray">{{ location }}</p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        price: String,
        title: String,
        imgSrc: String,
        location: String,
        link: String,
    }
}
</script>

<style scoped>

</style>
