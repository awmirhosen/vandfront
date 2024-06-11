<template>
  <div class="w-full min-h-screen bg-[#101010]" style="background-image: url('/vandbg.svg')">

    <div class="pt-20 flex w-full flex justify-center">
      <div class="text-center">
        <p class="text-[34px] text-zinc-200 font-bold">Congratulations!
          <br>
          Here is your Certificate!
        </p>

      </div>
    </div>

    <div class="w-full max-w-[600px] h-auto overflow-x-scroll overflow-y-visible mx-auto mt-10 bg-black" id="style-1">
      <div
          ref="pdfSection"
          style="margin: auto"
          class="bg-black w-[453px] h-[637.2px]"

      >
        <TestingStage />
      </div>
    </div>

    <div class="flex justify-center mt-8">
      <button
          class="text-white px-10 py-4 rounded-md bg-zinc-900 hover:bg-zinc-700 transition-all min-w-[400px] mb-10"
          @click="exportToPDF('pdf_export.pdf', pdfSection, options, {html2canvas: {scale: 0.99, useCORS: true}})"
      >
        Download Certificate
      </button>
    </div>

  </div>
</template>

<script setup>

import {useFormStore} from "../../store/form.js";

const formStore = useFormStore();

const {$html2canvas} = useNuxtApp();

const route = useRoute();

formStore.getContributorData(route.params.id);


const pdfSection = ref(null)


const options = {
  orientation: 'p',
  format: "a4"
}


</script>

<style scoped>

@font-face {
  font-family: "Playfair Display";
  src: url("../../public/PlayfairDisplay-Regular.ttf");
}



@font-face {
  font-family: "lagu";
  src: url("../../public/Lagu Sans Regular Italic.otf");
}

.font-playfair {
  font-family: "Playfair Display";
}

.font-lagu {
  font-family: "lagu";
}


#style-1::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 3px;
  background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar
{
  background-color: #F5F5F5;
  border-radius: 3px;
  width: 4px;
  height: 4px;
}

#style-1::-webkit-scrollbar-corner {
  background: white;
}

#style-1::-webkit-scrollbar-thumb
{
  border-radius: 3px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #1f1f1f;
}


</style>