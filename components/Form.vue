<template style="background: black !important;">
  <div class="w-full flex justify-center mt-8 mb-20">
    <div class="max-w-[950px] w-full">

      <!----- top side of form (description) ------>
      <div class="w-full">

        <div class="w-full flex justify-center pt-10">
          <img src="public/vandbg.svg" width="48" alt="">
        </div>

        <!------ back button ----->
        <div class="w-full text-center flex justify-center mt-4">
          <div class="px-6 py-2 bg-black text-white cursor-pointer">
            BACK TO HOME
          </div>
        </div>

        <div class="w-full flex justify-center">
          <h3 class="text-center py-8 px-10 text-zinc-800 text-[30px] border-b inline border-zinc-400">Sign the Movement
            Agreement
          </h3>
        </div>

        <div class="mt-8 w-full text-center text-[18px] text-zinc-600">
          <p>I pledge to champion ethical and noble design practices by joining the Responsible Designers Movement.
            <br>
            <br>
            I commit to actively contributing to the movement's initiatives, participating in decision-making processes,
            and collaborating with fellow members to advance the ideals of responsible design.
            <br>
            <br>
            In demonstrating my commitment, I agree to uphold the movement's values, engage in continuous learning, and
            foster a global community dedicated to reshaping the design landscape for a more compassionate and
            harmonious world.
          </p>
        </div>

      </div>

      <!------ form inputs ------>
      <div class="w-full ">
        <FormKit type="form" @submit="submitUser" :actions="false">

          <div class="mt-10" id="forms">
            <FormKit class="w-full" outer-class="w-full" type="text" name="firstName" label=""
                     input-class="w-full border-b border-zinc-300 transition-all p-2 mt-4"
                     validation="required"
                     placeholder="* First Name"
                     :validation-messages="{required: 'This Field is Required'}"
                     messages-class="text-[14px] text-red-500"
            />

            <FormKit class="w-full" outer-class="w-full" type="text" name="lastName" label=""
                     input-class="w-full border-b border-zinc-300 transition-all p-2 mt-6"
                     validation="required"
                     placeholder="* Surename"
                     :validation-messages="{required: 'This Field is Required'}"
                     messages-class="text-[14px] text-red-500"
            />

            <FormKit
                class="w-full discipline" outer-class="w-full"
                input-class="w-full border-b border-zinc-300 transition-all p-2 mt-6 placeholder-gray-100"
                type="select"
                name="category"
                placeholder="* Your Discipline"
                :options="[
            { label: 'Product & Industrial Design', value: '1'},
            { label: 'Fashion & Jewelry', value: '2'},
            { label: 'Architecture & Interior Design', value: '3'},
            { label: 'Graphic & Brand Design', value: '4'},
            { label: 'User Interface Design', value: '5'},
            ]"
            />


            <FormKit class="w-full" outer-class="w-full" type="text" name="experience" label=""
                     input-class="w-full border-b border-zinc-300 transition-all p-2 mt-6"
                     validation="required"
                     placeholder="* Years of Experience"
                     :validation-messages="{required: 'This Field is Required', number: 'This field must be a number'}"
                     messages-class="text-[14px] text-red-500"
            />


            <FormKit
                class="w-full discipline" outer-class="w-full"
                input-class="w-full border-b border-zinc-300 transition-all p-2 mt-6 placeholder-gray-100"
                type="select"
                name="country"
                placeholder="* Your Country"
                :options="[
            { label: 'Afghanistan', value: 'Afghanistan'},
            { label: 'Albania', value: 'Albania'},
            { label: 'Andorra', value: 'Andorra'},
            { label: 'Algeria', value: 'Algeria'},
            { label: 'Angola', value: 'Angola'},
            { label: 'Antigua and Barbuda', value: 'Antigua and Barbuda'},
            { label: 'Argentina', value: 'Argentina'},
            { label: 'Albania', value: 'albania'},
            { label: 'Armenia', value: 'Armenia'},
            { label: 'Australia', value: 'Australia'},
            { label: 'Austria', value: 'Austria'},
            { label: 'Azerbaijan', value: 'Azerbaijan'},
            { label: 'Bahrain', value: 'Bahrain'},
            { label: 'Bangladesh', value: 'Bangladesh'},
            { label: 'Belarus', value: 'Belarus'},
            { label: 'Belgium', value: 'Belgium'},
            { label: 'Bolivia', value: 'Bolivia'},
            { label: 'Bosnia and Herzegovina', value: 'Bosnia and Herzegovina'},
            { label: 'Belize', value: 'Belize'},
            { label: 'Bulgaria', value: 'Bulgaria'},
            { label: 'Brazil', value: 'Brazil'},
            { label: 'Bulgaria', value: 'Bulgaria'},
            { label: 'Burma', value: 'Burma'},
            { label: 'Cameroon', value: 'Cameroon'},
            { label: 'Canada', value: 'Canada'},
            { label: 'Central African Republic', value: 'Central African Republic'},
            { label: 'Chad', value: 'Chad'},
            { label: 'Chile', value: 'Chile'},
            { label: 'China', value: 'China'},
            { label: 'Colombia', value: 'Colombia'},
            { label: 'Comoros', value: 'Comoros'},
            { label: 'Costa Rica', value: 'Costa Rica'},
            { label: 'Croatia', value: 'Croatia'},
            { label: 'Cuba', value: 'Cuba'},
            { label: 'Cyprus', value: 'Cyprus'},
            { label: 'Czechia', value: 'Czechia'},
            { label: 'Djibouti', value: 'Djibouti'},
            { label: 'Denmark', value: 'Denmark'},
            { label: 'Denmark', value: 'Denmark'},
            { label: 'Ecuador', value: 'Ecuador'},
            { label: 'Egypt', value: 'Egypt'},
            { label: 'El Salvador', value: 'El Salvador'},
            { label: 'Estonia', value: 'Estonia'},
            { label: 'Finland', value: 'Finland'},
            { label: 'France', value: 'Finland'},
            { label: 'Georgia', value: 'Georgia'},
            { label: 'Germany', value: 'Germany'},
            { label: 'Greece', value: 'Greece'},
            { label: 'Haiti', value: 'Haiti'},
            { label: 'Hungary', value: 'Hungary'},
            { label: 'Iceland', value: 'Iceland'},
            { label: 'India', value: 'India'},
            { label: 'Indonesia', value: 'Indonesia'},
            { label: 'Iran', value: 'Iran'},
            { label: 'Iraq', value: 'Iraq'},
            { label: 'Ireland', value: 'Ireland'},
            { label: 'Israel', value: 'Israel'},
            { label: 'Italy', value: 'Italy'},
            { label: 'Jamaica', value: 'Jamaica'},
            { label: 'Japan', value: 'Japan'},
            { label: 'Jordan', value: 'Jordan'},
            { label: 'Korea', value: 'Korea'},
            { label: 'Lebanon', value: 'Lebanon'},
            { label: 'Libya', value: 'Libya'},
            { label: 'Luxembourg', value: 'Luxembourg'},
            { label: 'Mali', value: 'Mali'},
            { label: 'Mexico', value: 'Mexico'},
            { label: 'Monaco', value: 'Monaco'},
            { label: 'Mongolia', value: 'Mongolia'},
            { label: 'Morocco', value: 'Morocco'},
            { label: 'Nepal', value: 'Nepal'},
            { label: 'Netherlands, The', value: 'Netherlands, The'},
            { label: 'New Zealand', value: 'New Zealand'},
            { label: 'Norway', value: 'Norway'},
            { label: 'Poland', value: 'Poland'},
            { label: 'Peru', value: 'Peru'},
            { label: 'Philippines', value: 'Philippines'},
            { label: 'Poland', value: 'Poland'},
            { label: 'Portugal', value: 'Portugal'},
            { label: 'Qatar', value: 'Qatar'},
            { label: 'Romania', value: 'Romania'},
            { label: 'Russia', value: 'Russia'},
            { label: 'Saudi Arabia', value: 'Saudi Arabia'},
            { label: 'Senegal', value: 'Senegal'},
            { label: 'Serbia', value: 'Serbia'},
            { label: 'Singapore', value: 'Singapore'},
            { label: 'Slovakia', value: 'Slovakia'},
            { label: 'Slovenia', value: 'Slovenia'},
            { label: 'South Africa', value: 'South Africa'},
            { label: 'Sweden', value: 'Sweden'},
            { label: 'Switzerland', value: 'Switzerland'},
            { label: 'Spain', value: 'Spain'},
            { label: 'Tajikistan', value: 'Tajikistan'},
            { label: 'Thailand', value: 'Thailand'},
            { label: 'Turkey', value: 'Turkey'},
            { label: 'Ukraine', value: 'Ukraine'},
            { label: 'United Arab Emirates, The', value: 'United Arab Emirates, The'},
            { label: 'United Kingdom ', value: 'United Kingdom '},
            { label: 'Uruguay ', value: 'Uruguay'},
            { label: 'USA', value: 'USA'},
            ]"
            />


            <div class="flex items-end">
              <FormKit class="w-full" outer-class="w-full" type="text" name="email" label=""
                       input-class="w-full border-b border-zinc-300 transition-all p-2 mt-6"
                       validation="required"
                       placeholder="* Email"
                       :validation-messages="{required: 'This Field is Required', number: 'This field must be a number'}"
                       messages-class="text-[14px] text-red-500"
              />

              <div class="bg-black text-white whitespace-nowrap py-2 px-4 cursor-pointer" v-if="!formStore.emailToken"
                   @click.prevent="sendEmailToken">
                Send Code
              </div>
              <div class="bg-black text-white whitespace-nowrap py-2 px-4 cursor-pointer" v-else>
                Sending
              </div>

            </div>

            <!------ code confirmation ------->
            <FormKit class="w-full" outer-class="w-full" type="text" name="token" label=""
                     input-class="w-full border-b border-zinc-300 transition-all p-2 mt-6"
                     validation="required"
                     placeholder="* Email Token Confirmation"
                     :validation-messages="{required: 'This Field is Required'}"
                     messages-class="text-[14px] text-red-500"
            />


            <!------ Invitation code ------>
            <FormKit class="w-full" outer-class="w-full" type="text" name="invitation" label=""
                     input-class="w-full border-b border-zinc-300 transition-all p-2 mt-6"
                     placeholder="Invitation Code"
            />


            <!------- avatar file ------->
            <div style="z-index: 100" class="flex justify-center items-center w-full">
              <div class="rounded bg-white w-full relative p-2">


                <div class="w-full text-center mt-4">
                  <p class="w-full text-left">
                    Maximum size is 3MB
                  </p>
                  <div id="app" class="container my-3">
                    <div class="row w-full">
                      <div class="col-md-5 offset-md-1 w-full">
                        <form enctype="multipart/form-data">
                          <div class="form-group w-full">
                            <input type="file" ref="upload" @input="previewImage" class="custom-file-input w-full"
                                   id="my-file" name="buss_doc">
                            <div class=" p-2 mt-3">
                              <div class="flex justify-center gap-3 items-center" v-if="preview">
                                <img :src="preview" class="img-fluid" width="80" alt="uploaded_file"/>
                                <div>
                                  <p class="mb-0">نام فایل: {{ imageUpload.name }}</p>
                                  <p class="mb-0">سایز فایل: {{ Math.floor(imageUpload.size / 1024) }}KB</p>
                                </div>
                              </div>
                            </div>
                          </div>


                          <!--                          <div class="absolute bottom-5 w-full">-->
                          <!--                            <p class="text-red-600 text-sm" v-if="errMessage">{{ errMessage }}</p>-->
                          <!--                            <p class="text-red-600 text-sm" v-if="titleInputError">وارد کردن عنوان برای فایل الزامیست</p>-->
                          <!--                            <p class="text-red-600 text-sm" v-if="fileInputError">بارگذاری عکس الزامیست</p>-->
                          <!--                            <button class="w-10/12 mt-2 bg-indigo-900 rounded p-1 text-white" type="submit">ثبت فایل</button>-->
                          <!--                            <div class="w-10/12 mt-2 bg-zinc-200 rounded p-1 mx-auto cursor-pointer" @click="reset">پاک کردن-->
                          <!--                              فایل-->
                          <!--                            </div>-->
                          <!--                          </div>-->

                        </form>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>


            <!------ terms and policy ----->
            <label>
              <input type="checkbox" class="accent-zinc-900 w-4 h-4 mr-2" checked>
              I read the text of the professional oath of design and sign this form to confirm my commitment.
            </label>


            <!------ submit button ------->
            <FormKit type="submit"
                     input-class="w-full bg-black text-white p-2 mt-8 hover:bg-[#1B9Ea1]">
              SUBMIT
            </FormKit>


          </div>

        </FormKit>
      </div>

    </div>
  </div>
</template>

<script setup>
import {useFormStore} from "~/store/form.js";
import {useToast} from "vue-toastification";
//import {usePaypalButton} from "nuxt-paypal/dist/runtime/composables/usePaypal.js";


const preview = ref(null);
const imageUpload = ref(null);
const upload = ref(null);
const formStore = useFormStore();
const imageFlag = ref(true);

// useHead({
//   script : [
//     { async: true,
//       src: '<https://www.paypal.com/sdk/js?client-id=>',
//       dataAdClient: "ca-pub-yourId"
//     },
//   ]
// })


const sendEmailToken = (e) => {

  // find email input value and send it to server
  const formkit = e.currentTarget.parentNode.children[0];
  const emailValue = formkit.querySelector(".formkit-input").value;
  // sending email method in store
  formStore.sendEmailVerifictation(emailValue);

}


const submitUser = (formData) => {

  formStore.verifyEmailToken(formData.token, formData.email, formData.firstName, formData.lastName, formData.category, formData.experience, formData.country, upload.value.files[0])

}


const previewImage = (e) => {
  var input = e.target;
  var file = input.files[0];

  const toast = useToast();

  //
  // const img = new Image();
  // img.onload = function () {
  //   file.width = this.width;
  //   file.height = this.height;
  //   console.log("file" ,file);
  //   console.log(this.width);
  // }

  var reader = new FileReader();


  reader.onload = function (e) {


  };


  if (input.files) {
    if (Math.floor(input.files[0].size / 1024) > 4000) {
      toast.error("File size is too big!");
    } else {
      let reader = new FileReader();
      //Read the contents of Image File.
      reader.readAsDataURL(file);
      reader.onload = (e) => {

        //Initiate the JavaScript Image object.
        var image = new Image();

        //Set the Base64 string return from FileReader as source.
        image.src = e.target.result;

        //Validate the File Height and Width.
        image.onload = function () {
          var height = this.height;
          var width = this.width;
          console.log("this is height and width", height, width);
          preview.value = e.target.result;
          imageUpload.value = input.files[0];
          return true;
        };

      }

    }
  }


}


</script>

<style>

#forms input:focus {
  outline: none !important;
  border-bottom: 1px solid #757575 !important;
}


.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}

.custom-file-input {
  width: 100%;
}

.custom-file-input::before {
  text-align: center;
  line-height: 65px;
  content: 'Click to choose your picture';
  display: inline-block;
  background: white;
  border: 1px dashed #999;
  color: #999;
  border-radius: 3px;
  width: 100%;
  height: 80px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}

.custom-file-input:hover::before {
  border-color: black;
}

.wrapper {
  max-width: 500px;
  margin: 0 auto;
}

</style>