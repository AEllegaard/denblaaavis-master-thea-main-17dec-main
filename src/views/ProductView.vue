<script setup>
import ProductCard from '../components/Card.vue'
import Button from '../components/Button.vue'
import PlaceAndTime from '../components/PlaceAndTime.vue'
import ProductDescription from '../components/ProductDescription.vue'
import ProductImage from '../components/ProductImage.vue'
import ProductText from '../components/ProductText.vue'
import ProfileDescription from '../components/ProfileDescription.vue'
</script>

<template>

  <div class="flex justify-center pt-20">
    <div class="grid  gap-x-4 w-3/4">
      <div class="flex flex-row col-start-1">
        <ProductImage
          imgSrc="/img/thea.png"
        />
      </div>

      <div class="underimage col-start-1 my-4">
        <PlaceAndTime
          location="Brønshøj 2700"
          time="3 dage"
        />

        <ProductDescription class=""
          title="Thea"
          price="15.000.000"
          desciptiontext="

Roblox-figur med et sjældent og eftertragtet hotdog skin vundet i Disney Roblox game, som ikke længere kan fås i spillet – perfekt til samlere. Figuren er i god stand, lettere brugt.

Skriv for flere billeder eller spørgsmål – denne figur bliver hurtigt solgt! 😊"
        />

      </div>

      <div class="rightsection col-start-1 lg:col-start-2 lg:row-start-1 ">
        <ProductText
          product="Roblox figur"
          material="Pixels"
          stand="God, men brugt"
        />

        <ProfileDescription class="mt-4"
          name="Arne NougatGren"
          location="Brønshøj 2700"
        />

        <Button class="w-full mt-4"
        text="Skriv til sælger"
        />

        <img class="mt-4 rounded-lg" src="/img/map.png" alt="">

      </div>




      <div class="dumtgrid mt-4">



      <div class="grid grid-cols-2 col-start-2 ">
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
      title="Mus ris pose"
      price="25"
      imgSrc="/img/mus.png"
      location="Vanløse 2720"
    />
        </div>
      </div>




    </div>


  </div>

</template>
