<template>

  <v-parallax src="/vandbg.svg"
              style="background-color: #101010">

    <v-container class="w-100 w-md-50 my-15">

      <v-row>

        <v-col cols="12">
          <p class="text-h4 text-white font-weight-bold text-center mb-3">Congratulations!</p>
          <p class="text-h5 text-white text-center">{{ formStore.userData.firstName + ' ' + formStore.userData.lastName }}</p>
        </v-col>

      </v-row>


      <v-card id="container"
              width="1080"
              height="750"
              variant="elevated"
              color="black"
              flat
              rounded="0"
              class="w-100 my-10 d-flex flex-column">

        <template v-slot:image
                  v-if="formStore.userData.avatar">
          <v-img :src="'http://202.133.88.224:8002/storage/' + formStore.userData.avatar"
                 class="opacity-90"
                 cover />
        </template>

        <div class="h-100 ms-3">

          <div style="height: 100px;"></div>

          <div class="d-flex flex-column">

            <v-img :width="100"
                   :style="!formStore.userData.avatar ? 'filter: brightness(0.5);' : ''"
                   class="mb-7"
                   src="/vand_post_logo.png" />

            <span class="text-h3 font-playfair"
                  style="letter-spacing: -3px !important;">Certificate</span>

            <span class="text-h3 font-playfair"
                  style="margin-top: -3px;letter-spacing: -3px !important;">of Professional</span>

            <span class="text-h3 font-playfair"
                  style="margin-top: -3px;letter-spacing: -3px !important;">Oath</span>

          </div>

        </div>

        <div class="h-100 ms-3">

          <div class="d-flex flex-column h-100 justify-end ">

            <p class="text-h2 mb-0 font-playfair"
               style="margin-top: -3px;letter-spacing: -3px !important;">{{ formStore.userData.firstName }}</p>

            <p class="text-h2 mb-5 font-playfair"
               style="margin-top: -10px;letter-spacing: -3px !important;">{{ formStore.userData.lastName }}</p>

            <p class="text-h6 font-playfair"
               style="margin-top: -15px;letter-spacing: 0px !important;">as a verified designer.has</p>

            <p class="text-h6 font-playfair"
               style="margin-top: -8px;letter-spacing: 0px !important;">signed the professional</p>

            <p class="text-h6 mb-5 font-playfair"
               style="margin-top: -8px;letter-spacing: 0px !important;">oath in design.</p>

            <p class="text-h5 mb-16 mt-5 font-playfair"
               style="letter-spacing: -1px !important;">VAND.ORG</p>

          </div>

        </div>

      </v-card>


      <v-btn variant="flat"
             rounded="10"
             size="large"
             class="w-100"
             @click.prevent="downloadCerti"
             color="white">
        Download the Post
      </v-btn>


      <div v-if="!formStore.userData.certificate"
           class="d-flex flex-column mt-10 ga-10">

        <div class="text-h6 text-white  align-self-center">
          Payment for the certificate
        </div>

        <div class="align-self-center w-75"
             ref="paypalButton"></div>

      </div>

      <div v-else>
        <v-btn variant="flat"
               rounded="10"
               size="large"
               class="w-100 mt-5"
               to="/certificate"
               color="white">
          Show Certificate
        </v-btn>
      </div>

    </v-container>

  </v-parallax>

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
    useCORS: true,
    onclone: function async(doc, element) {
      element.style.width = '800px';
      element.style.height = '800px';
      element.classList.remove("w-100");
    }
  }).then(function (canvas) {
    var a = document.createElement("a");
    a.href = canvas.toDataURL("image/jpg");
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
          shareStore.showSnackBar("PayPal is Cancelled!")
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