<script setup>
import ProductCard from '../components/Card.vue'
</script>

<template>
  <div class="pt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mt-20">

    <RouterLink to="/ProductView">
      <ProductCard
      title="Thea"
      price="15.000.000"
      imgSrc="/img/thea.png"
      location="Brønshøj 2700"
      />
    </RouterLink>

    <ProductCard
      title="Missekat"
      price="30"
      imgSrc="/img/kat.png"
      location="Ringe 5750"
    />

    <ProductCard
      title="VW Gold VI, 1,4 TSi Highline, Benzin"
      price="44.800"
      imgSrc="/img/bil.png"
      location="Odense NV 5210"
    />

    <ProductCard
      title="Selvkørende, Texas multiclipper"
      price="650"
      imgSrc="/img/grassmaskine.png"
      location="Herlev 2730"
    />
    <ProductCard
      title="Kommode med 3 skuffer, egetræ"
      price="1.400"
      imgSrc="/img/kommode.png"
      location="Farum 3520"
    />
    <ProductCard
      title="Smukt skakbræt, brætspil"
      price="500"
      imgSrc="/img/skak.png"
      location="Herlev 2730"
    />
    <ProductCard
      title="Romaskine, Masterfit tp900, Masterfit"
      price="4.900"
      imgSrc="/img/romaskine.png"
      location="Kolding 6000"
    />
    <ProductCard
      title="Thompson , Motorbåd, 31 fod"
      price="195.000"
      imgSrc="/img/boat.png"
      location="Brøndby Strand 2660"
    />
    <ProductCard
      title="Samlekort, Magic kort"
      price="500"
      imgSrc="/img/magic.png"
      location="Odense NV 5210"
    />
    <ProductCard
      title="Arkade spillekonsol"
      price="4.495"
      imgSrc="/img/arkade.png"
      location="Lundby 4750"
    />
    <ProductCard
      title="DJ pult + decksaver, Pioneer XDJ-XZ"
      price="18.000"
      imgSrc="/img/dj.png"
      location="Rødovre 2610"
    />
    <ProductCard
      title="Corvus DX4 CAB UTV"
      price="185.000"
      imgSrc="/img/ting.png"
      location="Vinderup 7830"
    />
    <ProductCard
      title="Fadølsamlæg"
      price="3.000"
      imgSrc="/img/beer.png"
      location="København NV 2400"
    />
    <ProductCard
      title="Mus ris pose"
      price="25"
      imgSrc="/img/mus.png"
      location="Vanløse 2720"
    />
    <ProductCard
      title="Betalingsterminal"
      price="1.700"
      imgSrc="/img/terminal.png"
      location="Kokkedal 2980"
    />
  </div>
</template>
