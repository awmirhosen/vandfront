<template>
  <div class="w-full min-h-screen bg-[#101010]" style="background-image: url('/vandbg.svg')">

  <div class="pt-20 flex w-full flex justify-center">
    <div class="text-center">
      <p class="text-[34px] text-zinc-200 font-bold">Congratulations!</p>
      <p class="text-[24px] text-zinc-200">{{ formStore.singleContributorData.first_name + ' ' + formStore.singleContributorData.last_name  }}</p>


      <div class="relative my-10 z-10" id="container">
        <img v-if="formStore.singleContributorData.avatar !== null" :src="formStore.uploadUrl+formStore.singleContributorData.avatar" class="max-w-[1080px] w-full" alt="avatar-watermark"/>
        <img v-else src="public/null_avatar.jpg" class="max-w-[1080px] w-full" alt="avatar-watermark"/>

        <div class="absolute z-10 top-[10%] left-4">
          <img src="public/vand_post_logo.png" width="122" alt="">
          <p class="text-white text-left mt-4 font-playfair text-[40px]">Certificate
            <br>
            of Professional
            <br>
            Oath
          </p>
        </div>
        <div class="w-full h-full absolute top-0 items-center" style="background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))"></div>

        <div class="absolute bottom-[10%] left-4 text-white">
          <p class="font-playfair text-[38px] text-left">
            {{ formStore.singleContributorData.first_name }}
            <br>
            {{formStore.singleContributorData.last_name }}
          </p>
          <p class="text-left font-playfair text-xl">
            as a verified designer.has <br>
            signed the professional <br>
            oath in design
          </p>

          <p class="text-left my-8 font-playfair text-xl">VAND.ORG</p>

        </div>

      </div>


      <div class="w-full py-3 font-[500] rounded-md mt-2 bg-white text-black cursor-pointer mb-10"
           @click.prevent="downloadCerti">
        Download the Post
      </div>

<!--      <div class="w-full border border-zinc-100 rounded-md py-3 mt-2 bg-inherit text-white cursor-pointer mt-8 mb-20">-->
<!--        Your Design Oath Certificate-->
<!--      </div>-->

<!--      <p class="text-zinc-200 my-4">You need to pay for your Dsign Oath Certificate</p>-->

<!--      <div class="flex w-full items-center">-->
<!--        <div class="w-full" id="paypal-checkout"></div>-->
<!--      </div>-->


    </div>

  </div>

  </div>
</template>

<script setup>

import {useFormStore} from "../../store/form.js";

const formStore = useFormStore();

const {$html2canvas} = useNuxtApp();

const route = useRoute();

formStore.getContributorData(route.params.id);

// usePaypalButton({
//
//   // element: '#paypal-checkout',
//   onApprove: (data, actions) => {
//     console.log(actions, data, "ss");
//     console.log("this is for test")
//     try {
//       const details = actions.order?.capture();
//       console.log('Payment completed successfully:', details);
//     } catch (error) {
//       console.error('Error capturing payment:', error);
//     }
//   },
// })

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

</style>