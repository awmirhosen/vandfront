<template>

  <v-parallax src="/vandbg.svg"
              style="background-color: #101010">


    <v-container class="w-100 w-md-50 my-15">

      <v-row>

        <v-col cols="12">
          <p class="text-h4 text-white font-weight-bold text-center mb-3">Congratulations!</p>
          <p class="text-h4 text-white font-weight-bold text-center">Here is your Certificate!</p>
        </v-col>

      </v-row>

      <div ref="container"
           class="d-flex align-center flex-column">
        <v-card variant="elevated"
                height="600"
                color="black"
                flat
                rounded="0"
                class="w-100 w-md-50 my-10 d-flex flex-column">

          <div class="h-100 mt-5 ms-5">

            <div class="d-flex flex-column">

              <v-img :width="50"
                     style="margin-left: -10px;"
                     src="/gray_vand.png" />

              <p class="text-caption font-playfair">Certificate</p>
              <p class="text-caption font-playfair">of Professional</p>
              <p class="text-caption font-playfair">Oath</p>
            </div>

          </div>

          <div class="h-100">

            <div class="d-flex flex-column h-100 justify-end ms-5">

              <p class="text-body-2 mb-0 font-playfair">{{ formStore.userData.firstName }}</p>

              <p class="text-body-2 mb-2 font-playfair">{{ formStore.userData.lastName }}</p>

              <p class="text-caption text-grey-lighten-1 mb-0 font-playfair">as a verified designer,</p>
              <p class="text-caption text-grey-lighten-1 mb-0 font-playfair">has commited the</p>
              <p class="text-caption text-grey-lighten-1 mb-0 font-playfair">proffesional oath in design.</p>
              <p class="text-caption text-grey-lighten-1 mb-0 font-playfair">the commitment</p>
              <p class="text-caption text-grey-lighten-1 mb-0 font-playfair">signifies recognition</p>
              <p class="text-caption text-grey-lighten-1 mb-0 font-playfair">of and commitment to</p>
              <p class="text-caption text-grey-lighten-1 mb-0 font-playfair">ethical and</p>
              <p class="text-caption text-grey-lighten-1 mb-0 font-playfair">professional principles</p>
              <p class="text-caption text-grey-lighten-1 mb-0 font-playfair">and standards.</p>

            </div>

          </div>

          <div class="h-100">
            <div class="d-flex flex-column h-100 justify-end ms-5">

              <v-img :width="120"
                     style="margin-bottom: -60px;"
                     src="/sign.png" />

              <p class="text-caption text-grey-lighten-1 mb-0">VANDINTERNATIONAL</p>
              <p class="text-caption text-grey-lighten-1 mb-5">vandorg.com</p>

            </div>
          </div>

        </v-card>
      </div>

      <div class="d-flex align-center flex-column">
        <v-btn variant="flat"
               rounded="10"
               size="large"
               class="w-100 w-md-50 text-center"
               @click="exportToPDF('pdf_export.pdf', $refs.container, options, {
                html2canvas: {
                  useCORS: true,
                  scale: 1.052,
                  onclone: function async(doc, element) {
                    element.firstElementChild.className = '';
                    element.firstElementChild.firstElementChild.classList.remove('my-10');
                  }
                }
              })"
               color="white">
          Download Certificate
        </v-btn>
      </div>

    </v-container>

  </v-parallax>

</template>

<script setup>
import { useFormStore } from "../../store/form.js";

const formStore = useFormStore();

const options = {
  orientation: 'p',
  format: "a4"
}

</script>