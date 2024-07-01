<template>

  <v-container class="w-100 w-md-50">

    <div class="d-flex flex-column justify-center ga-7 my-10">

      <!-- logo -->
      <div class="align-self-center">
        <v-img :width="48"
               src="/vandbg.svg" />
      </div>

      <!-- back to home -->
      <div class="align-self-center">
        <v-btn variant="flat"
               rounded="0"
               size="large"
               color="black">
          Back To Home
        </v-btn>
      </div>

      <!-- title -->
      <div class="align-self-center">
        <p class="text-h4 text-center">Sign the Movement Agreement</p>
      </div>

      <div class="align-self-center">
        <v-divider width="530"
                   color="black"></v-divider>
      </div>

      <div class="d-flex flex-column ga-8">
        <p class="text-body-1 font-weight-light text-center text-grey-darken-1">I pledge to champion ethical and noble design practices by joining the Responsible Designers Movement.</p>
        <p class="text-body-1 font-weight-light text-center text-grey-darken-1">I commit to actively contributing to the movement's initiatives, participating in decision-making processes, and collaborating with fellow members to advance the ideals of responsible design.</p>
        <p class="text-body-1 font-weight-light text-center text-grey-darken-1">In demonstrating my commitment, I agree to uphold the movement's values, engage in continuous learning, and foster a global community dedicated to reshaping the design landscape for a more compassionate and harmonious world.</p>
      </div>

    </div>

    <!-- form -->
    <v-form ref="sumbit_form">
      <v-row class="ga-4 my-10">

        <!-- firstname -->
        <v-col cols="12">
          <v-text-field label="* FirstName"
                        hide-details="auto"
                        required
                        :rules="[required(formStore.formData.firstName, 'This Field is Required')]"
                        v-model="formStore.formData.firstName"
                        variant="underlined" />
        </v-col>

        <!-- surename -->
        <v-col cols="12">
          <v-text-field label="* Surename"
                        hide-details="auto"
                        v-model="formStore.formData.surename"
                        :rules="[required(formStore.formData.surename, 'This Field is Required')]"
                        variant="underlined" />
        </v-col>

        <!-- category -->
        <v-col cols="12">
          <v-select label="* Your Discipline"
                    hide-details="auto"
                    v-model="formStore.formData.discipline"
                    :rules="[required(formStore.formData.discipline, 'This Field is Required')]"
                    variant="underlined"
                    item-title="label"
                    item-value="value"
                    :items="[
                      { label: 'Product & Industrial Design', value: '1' },
                      { label: 'Fashion & Jewelry', value: '2' },
                      { label: 'Architecture & Interior Design', value: '3' },
                      { label: 'Graphic & Brand Design', value: '4' },
                      { label: 'User Interface Design', value: '5' },
                    ]"></v-select>
        </v-col>

        <!-- experience -->
        <v-col cols="12">
          <v-text-field label="Years of Experience"
                        hide-details="auto"
                        :rules="[required(formStore.formData.yearsExperience, 'This Field is Required'), number(formStore.formData.yearsExperience, 'This field must be a number')]"
                        v-model="formStore.formData.yearsExperience"
                        variant="underlined" />
        </v-col>

        <!-- country -->
        <v-col cols="12">
          <v-select label="* Your Country"
                    hide-details="auto"
                    :rules="[required(formStore.formData.country, 'This Field is Required')]"
                    v-model="formStore.formData.country"
                    variant="underlined"
                    item-title="label"
                    item-value="value"
                    :items="[
                      { label: 'Afghanistan', value: 'Afghanistan' },
                      { label: 'Albania', value: 'Albania' },
                      { label: 'Andorra', value: 'Andorra' },
                      { label: 'Algeria', value: 'Algeria' },
                      { label: 'Angola', value: 'Angola' },
                      { label: 'Antigua and Barbuda', value: 'Antigua and Barbuda' },
                      { label: 'Argentina', value: 'Argentina' },
                      { label: 'Albania', value: 'albania' },
                      { label: 'Armenia', value: 'Armenia' },
                      { label: 'Australia', value: 'Australia' },
                      { label: 'Austria', value: 'Austria' },
                      { label: 'Azerbaijan', value: 'Azerbaijan' },
                      { label: 'Bahrain', value: 'Bahrain' },
                      { label: 'Bangladesh', value: 'Bangladesh' },
                      { label: 'Belarus', value: 'Belarus' },
                      { label: 'Belgium', value: 'Belgium' },
                      { label: 'Bolivia', value: 'Bolivia' },
                      { label: 'Bosnia and Herzegovina', value: 'Bosnia and Herzegovina' },
                      { label: 'Belize', value: 'Belize' },
                      { label: 'Bulgaria', value: 'Bulgaria' },
                      { label: 'Brazil', value: 'Brazil' },
                      { label: 'Bulgaria', value: 'Bulgaria' },
                      { label: 'Burma', value: 'Burma' },
                      { label: 'Cameroon', value: 'Cameroon' },
                      { label: 'Canada', value: 'Canada' },
                      { label: 'Central African Republic', value: 'Central African Republic' },
                      { label: 'Chad', value: 'Chad' },
                      { label: 'Chile', value: 'Chile' },
                      { label: 'China', value: 'China' },
                      { label: 'Colombia', value: 'Colombia' },
                      { label: 'Comoros', value: 'Comoros' },
                      { label: 'Costa Rica', value: 'Costa Rica' },
                      { label: 'Croatia', value: 'Croatia' },
                      { label: 'Cuba', value: 'Cuba' },
                      { label: 'Cyprus', value: 'Cyprus' },
                      { label: 'Czechia', value: 'Czechia' },
                      { label: 'Djibouti', value: 'Djibouti' },
                      { label: 'Denmark', value: 'Denmark' },
                      { label: 'Denmark', value: 'Denmark' },
                      { label: 'Ecuador', value: 'Ecuador' },
                      { label: 'Egypt', value: 'Egypt' },
                      { label: 'El Salvador', value: 'El Salvador' },
                      { label: 'Estonia', value: 'Estonia' },
                      { label: 'Finland', value: 'Finland' },
                      { label: 'France', value: 'Finland' },
                      { label: 'Georgia', value: 'Georgia' },
                      { label: 'Germany', value: 'Germany' },
                      { label: 'Greece', value: 'Greece' },
                      { label: 'Haiti', value: 'Haiti' },
                      { label: 'Hungary', value: 'Hungary' },
                      { label: 'Iceland', value: 'Iceland' },
                      { label: 'India', value: 'India' },
                      { label: 'Indonesia', value: 'Indonesia' },
                      { label: 'Iran', value: 'Iran' },
                      { label: 'Iraq', value: 'Iraq' },
                      { label: 'Ireland', value: 'Ireland' },
                      { label: 'Israel', value: 'Israel' },
                      { label: 'Italy', value: 'Italy' },
                      { label: 'Jamaica', value: 'Jamaica' },
                      { label: 'Japan', value: 'Japan' },
                      { label: 'Jordan', value: 'Jordan' },
                      { label: 'Korea', value: 'Korea' },
                      { label: 'Lebanon', value: 'Lebanon' },
                      { label: 'Libya', value: 'Libya' },
                      { label: 'Luxembourg', value: 'Luxembourg' },
                      { label: 'Mali', value: 'Mali' },
                      { label: 'Mexico', value: 'Mexico' },
                      { label: 'Monaco', value: 'Monaco' },
                      { label: 'Mongolia', value: 'Mongolia' },
                      { label: 'Morocco', value: 'Morocco' },
                      { label: 'Nepal', value: 'Nepal' },
                      { label: 'Netherlands, The', value: 'Netherlands, The' },
                      { label: 'New Zealand', value: 'New Zealand' },
                      { label: 'Norway', value: 'Norway' },
                      { label: 'Poland', value: 'Poland' },
                      { label: 'Peru', value: 'Peru' },
                      { label: 'Philippines', value: 'Philippines' },
                      { label: 'Poland', value: 'Poland' },
                      { label: 'Portugal', value: 'Portugal' },
                      { label: 'Qatar', value: 'Qatar' },
                      { label: 'Romania', value: 'Romania' },
                      { label: 'Russia', value: 'Russia' },
                      { label: 'Saudi Arabia', value: 'Saudi Arabia' },
                      { label: 'Senegal', value: 'Senegal' },
                      { label: 'Serbia', value: 'Serbia' },
                      { label: 'Singapore', value: 'Singapore' },
                      { label: 'Slovakia', value: 'Slovakia' },
                      { label: 'Slovenia', value: 'Slovenia' },
                      { label: 'South Africa', value: 'South Africa' },
                      { label: 'Sweden', value: 'Sweden' },
                      { label: 'Switzerland', value: 'Switzerland' },
                      { label: 'Spain', value: 'Spain' },
                      { label: 'Tajikistan', value: 'Tajikistan' },
                      { label: 'Thailand', value: 'Thailand' },
                      { label: 'Turkey', value: 'Turkey' },
                      { label: 'Ukraine', value: 'Ukraine' },
                      { label: 'United Arab Emirates, The', value: 'United Arab Emirates, The' },
                      { label: 'United Kingdom ', value: 'United Kingdom ' },
                      { label: 'Uruguay ', value: 'Uruguay' },
                      { label: 'USA', value: 'USA' },
                    ]"></v-select>
        </v-col>

        <!-- email -->
        <v-col cols="12">
          <v-row no-gutters
                 align="end">

            <v-col>
              <v-text-field label="* Email"
                            v-model="formStore.formData.email"
                            :rules="[required(formStore.formData.email, 'This Field is Required'), email(formStore.formData.email, 'This email is not valid')]"
                            hide-details="auto"
                            density="default"
                            size="lg"
                            variant="underlined" />
            </v-col>

            <v-col cols="auto">
              <v-btn variant="flat"
                     :loading="shareStore.process.action === 'send_email_token'"
                     rounded="0"
                     size="large"
                     @click="sendEmailToken"
                     color="black">
                Send Code
              </v-btn>
            </v-col>

          </v-row>
        </v-col>

        <!-- email tokon -->
        <v-col cols="12">
          <v-text-field label="* Email Token Confirmation"
                        hide-details="auto"
                        :rules="[required(formStore.formData.emailConfirm, 'This Field is Required')]"
                        v-model="formStore.formData.emailConfirm"
                        variant="underlined" />
        </v-col>

        <!-- Invitation code -->
        <v-col cols="12">
          <v-text-field label="Invitation Code"
                        v-model="formStore.formData.invitationCode"
                        hide-details
                        variant="underlined" />
        </v-col>

        <!-- avatar file -->
        <v-col cols="12">
          <v-row>

            <v-col cols="12"> Maximum size is 3MB</v-col>

            <v-col cols="12">

              <div v-if="preview"
                   class="d-flex justify-center flex-column my-5">

                <div class="align-self-center">
                  <v-img :width="100"
                         :src="preview" />
                </div>

                <div class="align-self-center">

                  <span class="font-weight-bold">File Name: </span>
                  <span>{{ imageUpload.name }}</span>

                  <br />

                  <span class="font-weight-bold">File Size: </span>
                  <span>{{ Math.floor(imageUpload.size / 1024) }}KB</span>

                </div>

              </div>

              <input type="file"
                     @input="previewImage"
                     class="d-none"
                     ref="upload" />

              <div class="d-flex justify-center py-5 cursor-pointer"
                   @click="$refs.upload.click()"
                   style="border:1px dashed #000">
                Click to choose your picture
              </div>

            </v-col>

          </v-row>
        </v-col>


        <!-- terms and policy -->
        <v-col cols="12">
          <v-checkbox v-model="formStore.formData.policy"
                      color="black"
                      label="I read the text of the professional oath of design and sign this form to confirm my commitment."
                      hide-details>
          </v-checkbox>
        </v-col>

        <!-- submit -->
        <v-col cols="12">
          <v-btn variant="flat"
                 :loading="shareStore.process.action === 'create_user'"
                 rounded="0"
                 size="large"
                 class="w-100"
                 @click="submitForm($refs.sumbit_form)"
                 color="black">
            SUBMIT
          </v-btn>
        </v-col>

      </v-row>

    </v-form>

  </v-container>

</template>

<script setup>
import { useFormStore } from "~/store/form.js";
import { useShareStore } from "~/store/share";

// initialize share store
const shareStore = useShareStore();

// initialize form store
const formStore = useFormStore();


const preview = ref(null);
const imageUpload = ref(null);
const upload = ref(null);


// send email token
const sendEmailToken = async () => {
  await formStore.sendEmailVerifictation();
}

// preview image
const previewImage = (e) => {

  var input = e.target;
  var file = input.files[0];

  if (input.files) {
    if (Math.floor(input.files[0].size / 1024) > 4000) {
      shareStore.showSnackBar("File size is too big!");
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
          preview.value = e.target.result;
          imageUpload.value = input.files[0];
          return true;
        };

      }
    }
  }

}

// submit form
const submitForm = async (form) => {

  const { valid } = await form.validate();

  if (!valid) return;

  // check term
  if (!formStore.formData.policy) {
    shareStore.showSnackBar("Please confirm the Term.");
    return;
  }

  // check email verification
  await formStore.verifyEmailToken();
  if (shareStore.errorResponse.error) {
    return;
  }

  // check user created
  await formStore.createUser(upload.value.files[0]);

}

</script>

<style></style>