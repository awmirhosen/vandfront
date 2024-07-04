import moment from "moment";

// @ts-ignore
export default defineNuxtPlugin((app) => {
  return app.provide("moment", moment);
});
