<template>

    <div class="PlaceAndTime flex">

        <div class="flex align-center">
        <img class="pr-1 w-5" src="/icons/Placering.svg" alt="">
      <p class="font-proxima text-base ">{{ location }}</p>
    </div>

    <div class="flex pl-6 items-center">
      <img class="pr-1 w-5" src="/icons/Watch.svg" alt="">
      <p class="font-proxima text-base ">{{ time }}</p>
    </div>
      </div>
</template>

<script>
export default {
    name: 'PlaceAndTime',
    props: {
        location: String,
        time: String,
    }
}
</script>

<style scoped>

</style>
