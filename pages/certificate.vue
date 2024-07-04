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

         <div class="d-flex align-center flex-column">
            <v-card variant="elevated"
                    height="600"
                    color="black"
                    flat
                    rounded="0"
                    class="w-100 w-md-50 my-10 d-flex flex-column">

               <div class="h-100 mt-12 ms-2">

                  <div class="d-flex flex-column">

                     <v-img :width="60"
                            class="mb-3"
                            style="filter: brightness(0.5);"
                            src="/vand_post_logo.png" />

                     <p class="text-h5 font-playfair"
                        style="letter-spacing: -1px !important;">Certificate</p>
                     <p class="text-h5 font-playfair"
                        style="letter-spacing: -1px !important;margin-top: -8px">of Professional</p>
                     <p class="text-h5 font-playfair"
                        style="letter-spacing: -1px !important;margin-top: -8px">Oath</p>

                  </div>

               </div>

               <div class="h-100 ms-2">

                  <div class="d-flex flex-column h-100 justify-end ">

                     <p class="text-h5 mb-0 font-playfair"
                        style="letter-spacing: -1px !important">{{ formStore.userData.firstName }}</p>

                     <p class="text-h5 mb-2 font-playfair"
                        style="letter-spacing: -1px !important;margin-top: -9px">{{ formStore.userData.lastName }}</p>

                     <p class="text-caption text-grey-lighten-1 mb-0 font-playfair"
                        style="letter-spacing: 0px !important;margin-top: -9px">as a verified designer,</p>
                     <p class="text-caption text-grey-lighten-1 mb-0 font-playfair"
                        style="letter-spacing: 0px !important;margin-top: -5px">has commited the</p>
                     <p class="text-caption text-grey-lighten-1 mb-0 font-playfair"
                        style="letter-spacing: 0px !important;margin-top: -5px">proffesional oath in design.</p>
                     <p class="text-caption text-grey-lighten-1 mb-0 font-playfair"
                        style="letter-spacing: 0px !important;margin-top: -5px">the commitment</p>
                     <p class="text-caption text-grey-lighten-1 mb-0 font-playfair"
                        style="letter-spacing: 0px !important;margin-top: -5px">signifies recognition</p>
                     <p class="text-caption text-grey-lighten-1 mb-0 font-playfair"
                        style="letter-spacing: 0px !important;margin-top: -5px">of and commitment to</p>
                     <p class="text-caption text-grey-lighten-1 mb-0 font-playfair"
                        style="letter-spacing: 0px !important;margin-top: -5px">ethical and</p>
                     <p class="text-caption text-grey-lighten-1 mb-0 font-playfair"
                        style="letter-spacing: 0px !important;margin-top: -5px">professional principles</p>
                     <p class="text-caption text-grey-lighten-1 mb-0 font-playfair"
                        style="letter-spacing: 0px !important;margin-top: -5px">and standards.</p>

                  </div>

               </div>

               <div class="h-100 ms-2">
                  <div class="d-flex flex-column h-100 justify-end">

                     <v-img :width="120"
                            style="margin-bottom: -30px;"
                            src="/sign.png" />

                     <p class="text-caption text-grey-lighten-1 mb-0">VANDINTERNATIONAL</p>
                     <p class="text-caption text-grey-lighten-1">vandorg.com</p>
                     <p class="text-caption text-grey-darken-3 mb-5"
                        style="letter-spacing: -1px !important">{{ $moment(formStore.userData.createdAt).format("MMM Y") }}</p>

                  </div>
               </div>

            </v-card>
         </div>

         <div class="d-flex align-center flex-column">
            <v-btn variant="flat"
                   rounded="10"
                   size="large"
                   class="w-100 w-md-50 text-center"
                   @click="downloadCerti"
                   color="white">
               Download Certificate
            </v-btn>
         </div>

      </v-container>

   </v-parallax>


   <div id="container"
        style="width: 210mm;height: 297mm;"
        class="d-none">

      <div class="h-100 mt-12 ms-2">

         <div style="height: 40px;"></div>

         <div class="d-flex flex-column">

            <img width="130"
                 style="margin-left:-19px;margin-bottom: -15px;"
                 src="/gray_vand.png" />

            <p class="font-playfair"
               style="letter-spacing: -2px !important;font-size: 36px !important">Certificate</p>
            <p class="font-playfair"
               style="letter-spacing: -2px !important;margin-top: -21px !important;font-size: 36px !important">of Professional</p>
            <p class="font-playfair"
               style="letter-spacing: -2px !important;margin-top: -21px !important;font-size: 36px !important">Oath</p>

         </div>

      </div>

      <div class="h-100 ms-2"
           style="margin-top: 134px;">

         <div class="d-flex flex-column h-100 justify-end ">

            <p class="text-h2 mb-0 mt-16 font-playfair"
               style="letter-spacing: -3px !important">{{ formStore.userData.firstName }}</p>

            <p class="text-h2 mb-2 font-playfair"
               style="letter-spacing: -3px !important;margin-top: -9px">{{ formStore.userData.lastName }},</p>

            <p class="text-body-1 mb-0 font-playfair"
               style="letter-spacing: 0px !important;margin-top: -4px">as a verified designer,</p>
            <p class="text-body-1 mb-0 font-playfair"
               style="letter-spacing: 0px !important;margin-top: -2px">has commited the</p>
            <p class="text-body-1 mb-0 font-playfair"
               style="letter-spacing: 0px !important;margin-top: -2px">proffesional oath in design.</p>
            <p class="text-body-1 mb-0 font-playfair"
               style="letter-spacing: 0px !important;margin-top: -2px">the commitment</p>
            <p class="text-body-1 mb-0 font-playfair"
               style="letter-spacing: 0px !important;margin-top: -2px">signifies recognition</p>
            <p class="text-body-1 mb-0 font-playfair"
               style="letter-spacing: 0px !important;margin-top: -2px">of and commitment to</p>
            <p class="text-body-1 mb-0 font-playfair"
               style="letter-spacing: 0px !important;margin-top: -2px">ethical and</p>
            <p class="text-body-1 mb-0 font-playfair"
               style="letter-spacing: 0px !important;margin-top: -2px">professional principles</p>
            <p class="text-body-1 mb-0 font-playfair"
               style="letter-spacing: 0px !important;margin-top: -2px">and standards.</p>

         </div>

      </div>

      <div class="h-100 ms-2">
         <div class="d-flex flex-column h-100 justify-end">

            <img width="170"
                 src="/sign.png" />
            <p class="text-caption text-grey-lighten-1 mb-0">VANDINTERNATIONAL</p>
            <p class="text-caption text-grey-lighten-1">vandorg.com</p>
            <p class="text-caption text-grey-darken-3 mb-5"
               style="letter-spacing: -1px !important">{{ $moment(formStore.userData.createdAt).format("MMM Y") }}</p>

         </div>
      </div>

   </div>

</template>

<script setup>
import { useFormStore } from "../../store/form.js";

const formStore = useFormStore();

const { $html2canvas, $jsPDF } = useNuxtApp();

const downloadCerti = () => {

   $html2canvas(document.getElementById("container"), {
      useCORS: true,
      onclone: function (doc, element) {
         element.classList.remove("d-none");
         element.classList.add('d-flex', 'flex-column', 'bg-black');
      }
   }).then(function (canvas) {
      var imgData = canvas.toDataURL('image/jpg');
      var doc = new $jsPDF('p', 'mm', 'a4');
      doc.addImage(imgData, 'jpg', 0, 0, 210, 297);
      doc.save('certificate.pdf');
   })

}
</script>