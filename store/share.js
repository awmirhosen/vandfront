import { defineStore } from "pinia";
//import { useToast } from "vue-toastification";

export const useShareStore = defineStore("share", () => {
  // process
  const process = reactive({
    isProgress: false,
    action: "",
  });

  //snakebar data
  const snackBar = reactive({
    show: false,
    message: "",
    data: "",
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

  function showSnackBar(message, data = "") {
    snackBar.show = true;
    snackBar.message = message;
    snackBar.data = data;
  }

  function closeSnackBar() {
    snackBar.show = false;
    snackBar.message = "";
    snackBar.data = "";
  }

  return {
    showSnackBar,
    closeSnackBar,
    snackBar,
    process,
    errorResponse,
    setProcess,
    actionProcess,
    clearProcess,
    setErrorResponse,
    clearErrorResponse,
    errorResponse,
  };
});
