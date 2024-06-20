<template>
  <div class="w-full min-h-screen bg-[#101010]"
       style="background-image: url('/vandbg.svg')">

    <div class="pt-20 flex w-full flex justify-center">
      <div class="text-center">
        <p class="text-[34px] text-zinc-200 font-bold">Congratulations!</p>
        <p class="text-[24px] text-zinc-200">{{ formStore.userData.firstName + ' ' + formStore.userData.lastName }}</p>


        <div class="relative my-10 z-10"
             id="container">

          <div v-if="formStore.userData.avatar">
            <img :src="'http://202.133.88.224:8002/storage/' + formStore.userData.avatar"
                 class="max-w-[1080px] w-full"
                 alt="avatar-watermark" />
          </div>

          <div v-else>
            <img src="/null_avatar.jpg"
                 class="max-w-[1080px] w-full"
                 alt="avatar-watermark" />
          </div>

          <div class="absolute z-10 top-[10%] left-4">
            <img src="/vand_post_logo.png"
                 width="122"
                 alt="">
            <p class="text-white text-left mt-4 font-playfair text-[40px]">Certificate
              <br>
              of Professional
              <br>
              Oath
            </p>
          </div>
          <div class="w-full h-full absolute top-0 items-center"
               style="background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.8))"></div>

          <div class="absolute bottom-[10%] left-4 text-white">
            <p class="font-playfair text-[38px] text-left">
              {{ formStore.userData.firstName }}
              <br>
              {{ formStore.userData.lastName }}
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

        <div v-if="!formStore.userData.certificate">
          <div ref="paypalButton"></div>
        </div>

        <div v-else
             class="w-full py-3 font-[500] rounded-md mt-2 bg-white text-black cursor-pointer mb-10">
          <NuxtLink to="/certificate">
            Show Certificate
          </NuxtLink>
        </div>


      </div>

    </div>

  </div>
</template>

<script setup>
import { loadScript } from '@paypal/paypal-js';
import { useFormStore } from "~/store/form.js";
import { useShareStore } from '~/store/share';

const formStore = useFormStore();

const shareStore = useShareStore();

const paypalButton = ref(null);

const { $html2canvas } = useNuxtApp();

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

onMounted(async () => {

  let paypal;

  try {
    paypal = await loadScript({
      "clientId": "AXlo3BonIU04buXObrK_QVdWZ18lU_9l5K4fO3aza7tgQkGlxaPaf8uNihU0DSVRDC2uqv9CuVjcNKFx",
      "currency": "EUR"
    });
  } catch (err) {
    console.error("failed to render the PayPal Buttons", err);
  }

  if (paypal) {
    try {
      await paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: "45.00",
                currency_code: "EUR"
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(async (details) => {

            if (details.status === "COMPLETED") {
              await formStore.storePayment(
                details.purchase_units[0].payments.captures[0].amount.value,
                details.purchase_units[0].payments.captures[0].id,
                JSON.stringify(details)
              );
              return navigateTo('/certificate')
            }

          });
        },
        onCancel: () => {
          shareStore.setToast("PayPal is Cancelled!", true)
        },
        onError: (err) => {
          console.error(err);
        }
      }).render(paypalButton.value);
    } catch (err) {
      console.error("failed to render the PayPal Buttons", err);
    }
  }

});

</script>

<style>
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