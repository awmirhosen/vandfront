import jsPDF from "jspdf";

// @ts-ignore
export default defineNuxtPlugin((app) => {
  return app.provide("jsPDF", jsPDF);
});
