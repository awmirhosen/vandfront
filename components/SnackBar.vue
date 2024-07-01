<template>
  <v-snackbar v-model="shareStore.snackBar.show"
              :timeout="timeout"
              color="white"
              location="top">
    <p class="text-body-2"
       v-if="shareStore.snackBar.data">{{ shareStore.snackBar.message }}</p>
    <p class="text-body-2"
       v-else>{{ shareStore.snackBar.message }}</p>
    <template v-slot:actions>
      <v-btn color="primary"
             variant="text"
             @click="shareStore.closeSnackBar">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
import { useShareStore } from '~/store/share';

// intilize share store
const shareStore = useShareStore();

/** timeout show snackbar **/
const timeout = ref(5000);

</script>

<style scoped></style>