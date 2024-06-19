<template>
  <div class="w-full bg-black">
    <div class="relative">
      <img src="/gray_vand.png"
           alt="vand_logo"
           width="90px">

      <p class="fff text-white text-[28px] px-4 absolute top-[10%]"
         style="line-height: 26px">
        Certificate
        <br>
        of Profesional
        <br>
        Oath
      </p>

      <span class="mt-[170px] block"></span>


      <p class="fff text-white mt-3 text-[26px] px-4"
         style="line-height: 26px">
        {{ formStore.userData.firstName }}
        <br>
        {{ formStore.userData.lastName }}
      </p>

      <p class="mt-2 fff text-zinc-400 text-[12px] px-4"
         style="line-height: 18px">
        as a verified designer,
        <br>
        has commited the
        <br>
        proffesional oath in design.
        <br>
        the commitment
        <br>
        signifies recognition
        <br>
        of and commitment to
        <br>
        ethical and
        <br>
        professional principles
        <br>
        and standards.
      </p>

      <span class="mt-12 block"></span>

      <div class="relative">
        <img src="public/sign.png"
             class="px-4"
             alt="sign"
             width="130">

        <div class="px-6 absolute top-[54%]">
          <p class="text-zinc-400 text-[10px]">VANDINTERNATIONAL.</p>
          <p class="text-zinc-400 pb-10 text-[10px]">
            vandorg.com
          </p>
        </div>

        <div class="px-2">
          <hr class="mt-6 border-zinc-600">
        </div>

      </div>



    </div>
  </div>
</template>

<script setup>
import { useFormStore } from "../../store/form.js";

const formStore = useFormStore();


</script>

<style scoped>
@font-face {
  src: url("../public/PlayfairDisplay-Regular.ttf");
  font-family: "Playfair Display";
}

.fff {
  font-family: "Playfair Display";
}
</style>