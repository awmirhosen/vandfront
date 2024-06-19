import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

export const useShareStore = defineStore("share", () => {
  // use toast
  const toast = useToast();

  // process
  const process = reactive({
    isProgress: false,
    action: "",
  });

  // error responses
  const errorResponse = reactive({
    error: false,
  });

  // action process
  const actionProcess = {
    users: {
      send_email_token: "send_email_token",
      verify_email_token: "verify_email_token",
      get_user: "get_user",
      create_user: "create_user",
    },
    payment: {
      store_payment: "store_payment",
    },
  };

  function setProcess(action) {
    process.isProgress = true;
    process.action = action;
  }

  function clearProcess() {
    process.isProgress = false;
    process.action = "";
  }

  function setErrorResponse() {
    errorResponse.error = true;
  }

  function clearErrorResponse() {
    errorResponse.error = false;
  }

  function setToast(message, error = false) {
    if (error) {
      toast.error(message);
    } else {
      toast.success(message);
    }
  }

  return {
    process,
    errorResponse,
    setProcess,
    actionProcess,
    clearProcess,
    setToast,
    setErrorResponse,
    clearErrorResponse,
    errorResponse,
  };
});
