import { useFormStore } from "~/store/form";

export default defineNuxtRouteMiddleware(async (to) => {
  // intilize form store
  const formStore = useFormStore();

  await formStore.getUser();

  if (to.name === "contributor") {
    if (formStore.userData.Id === 0) {
      return navigateTo("/");
    }
  }

  if (to.name === "certificate") {
    if (!formStore.userData.certificate) {
      return navigateTo("/");
    }
  }
});
