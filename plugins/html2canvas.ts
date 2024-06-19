import html2canvas from "html2canvas";

// @ts-ignore
export default defineNuxtPlugin((app) => {
  return app.provide("html2canvas", html2canvas);
})