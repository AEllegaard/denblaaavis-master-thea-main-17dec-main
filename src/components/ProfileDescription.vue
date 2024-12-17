<template>
  <div class="ProfileDescription rounded-lg font-proximat bg-grey-grey-200 flex justify-between px-7 py-7">

    <div>
      <img class="pr-1 h-8 px-2" src="/icons/pb.svg" alt="">
    </div>

    <div>

      <div class="font-bold px-2">
        <h4>{{ name }}</h4>
      </div>

      <div class="flex pt-4 px-2">
        <img class="pr-1 mr-1 w-5" src="/icons/Verificeret.svg" alt="">
        <p class="font-proxima text-base text-text-gray">{{ location }}</p>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'ProfileDescription',
  props: {
    name: String,
    location: String,
  },
};
</script>

<style scoped>
</style>
