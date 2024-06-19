import { defineStore } from "pinia";
import { useShareStore } from "./share";

export const useFormStore = defineStore("form", () => {
  // share store
  const shareStore = useShareStore();

  // form data
  const formData = reactive({
    firstName: "",
    surename: "",
    discipline: 0,
    yearsExperience: "",
    country: "",
    email: "",
    emailConfirm: "",
    invitationCode: "",
    policy: false,
  });

  // user data
  const userData = reactive({
    Id: 0,
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
    category: "",
    country: "",
    experienceYears: "",
    invitedBy: "",
    certificate: null,
  });

  async function sendEmailVerifictation() {
    try {
      shareStore.setProcess(shareStore.actionProcess.users.send_email_token);
      const request = await $fetch("/api/users/send-email-token", {
        method: "POST",
        body: { email: formData.email },
      });
      if (!request.error) {
        shareStore.setToast("Email sent successfully");
      }
    } catch (error) {
      shareStore.setToast(error.data.data.message, true);
    } finally {
      shareStore.clearProcess();
    }
  }

  async function verifyEmailToken() {
    try {
      shareStore.setProcess(shareStore.actionProcess.users.verify_email_token);
      const request = await $fetch("/api/users/verify-email-token", {
        method: "POST",
        body: {
          email: formData.email,
          token: formData.emailConfirm,
        },
      });
      if (!request.error) {
        shareStore.clearErrorResponse();
      }
    } catch (error) {
      shareStore.setErrorResponse();
      if (error.statusCode === 400) {
        shareStore.setToast("Token Email is Not Valid!", true);
      }
    } finally {
      shareStore.clearProcess();
    }
  }

  async function createUser(avatar) {
    try {
      shareStore.setProcess(shareStore.actionProcess.users.create_user);
      const formDataInstance = new FormData();
      formDataInstance.append("first_name", formData.firstName);
      formDataInstance.append("last_name", formData.surename);
      formDataInstance.append("category", formData.discipline);
      formDataInstance.append("experience_years", formData.yearsExperience);
      formDataInstance.append("country", formData.country);
      formDataInstance.append("email", formData.email);
      formDataInstance.append("invited_by", formData.invitationCode);
      formDataInstance.append("avatar", avatar);
      await $fetch("/api/users/create-user", {
        method: "POST",
        body: formDataInstance,
      });
      return navigateTo("/contributor");
    } catch (error) {
      shareStore.setToast(error.data.data.message, true);
    } finally {
      shareStore.clearProcess();
    }
  }

  async function getUser() {
    try {
      shareStore.setProcess(shareStore.actionProcess.users.get_user);
      const headers = useRequestHeaders(["cookie"]);
      const request = await $fetch("/api/users/get-user", {
        method: "GET",
        headers,
      });
      userData.Id = request.id;
      userData.firstName = request.first_name;
      userData.lastName = request.last_name;
      userData.email = request.email;
      userData.avatar = request.avatar;
      userData.category = request.category;
      userData.country = request.country;
      userData.experienceYears = request.experience_years;
      userData.invitedBy = request.invited_by;
      userData.certificate = request.certificate;
    } catch (error) {
    } finally {
      shareStore.clearProcess();
    }
  }

  async function storePayment(amount, paymentRefID, paymentData) {
    try {
      shareStore.setProcess(shareStore.actionProcess.payment.store_payment);
      await $fetch("/api/payment/store-payment", {
        method: "POST",
        body: {
          amount,
          paymentRefID,
          paymentData,
        },
      });
    } catch (error) {
      shareStore.setToast(error.data.data.message, true);
      console.log(error);
    } finally {
      shareStore.clearProcess();
    }
  }

  return {
    formData,
    userData,
    sendEmailVerifictation,
    verifyEmailToken,
    createUser,
    getUser,
    userData,
    storePayment,
  };
});
