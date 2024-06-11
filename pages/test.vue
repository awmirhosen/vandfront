<template>
  <div>
    <div style="position: fixed">
      <button
          style="border-radius: 0; font-size: 20px; cursor: pointer"
          @click="exportToPDF('pdf_export.pdf', pdfSection, options, {html2canvas: {scale: 1, useCORS: true}})"
      >
        Generate normal PDF
      </button>
      <br>

    </div>

    <div class="w-full w-[600px] overflow-x-scroll mx-auto mt-10 bg-black">
      <div
          ref="pdfSection"
          style="margin: auto"
          class="bg-black w-[1080px] h-[631px]"

      >
        <TestingStage />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const pdfSection = ref<HTMLElement | null>(null)

const options = {
  orientation: 'p',
  format: "a4"
}

</script>

<style scoped>

</style>