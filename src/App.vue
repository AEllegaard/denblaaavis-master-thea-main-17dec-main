<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>


    <div class="wrapper">


      <nav class="relative flex w-full items-center justify-center top-4">
        <div class="links absolute left-0">
          <!--
          <RouterLink class="p-2" to="/">Home</RouterLink>
          <RouterLink class="" to="/about">About</RouterLink>
          -->
        </div>
        <a href="/"><img class="h-20 justify-self-center" src="/public/logo/Logo_blue.svg" alt=""> </a>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>

</style>
