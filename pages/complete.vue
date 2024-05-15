<template>
  <div class="mt-20 flex w-full flex justify-center">
    <div class="text-center">
      <p class="text-[34px] font-bold">Congratulations!</p>
      <p class="mt-2">Here is your oath avatar</p>


      <div class="relative" id="container">
        <img :src="formStore.uploadUrl+formStore.avatarUrl" alt="avatar-watermark"/>
        <div class="absolute top-10">
          test for making badge
        </div>
      </div>


      <div class="w-full border border-zinc-900 py-2 mt-2 bg-black text-white cursor-pointer"
           @click.prevent="downloadCerti">
        DOWNLOAD AVATAR
      </div>

      <div class="w-full border border-zinc-900 py-2 cursor-pointer mt-2">
        BACK TO HOME
      </div>

      <div class="w-full border border-zinc-900 py-2 mt-2 bg-black text-white cursor-pointer">
        BUY VAND CERTIFICATE FOR JUDGE
      </div>

    </div>

  </div>
</template>

<script setup>

import {useFormStore} from "../store/form.js";

const formStore = useFormStore();

const {$html2canvas} = useNuxtApp();

const downloadCerti = () => {

  $html2canvas(document.getElementById("container"), {
    proxy: "http://localhost:3000",
  }).then(function (canvas) {
    var a = document.createElement("a");
    a.href = canvas.toDataURL("image/png");
    a.download = 'avatar.jpg';
    a.click();
  })

}

</script>

<style>

</style>