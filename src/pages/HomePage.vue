<template>
  <q-page class="container">
    <div class="container">
      <div id="home" class="flex flex-column flex-center">
        <h1>Tes Quiz</h1>
        <q-btn to="/game" class="btn q-mb-md">Play</q-btn>
        <q-btn to="/highscores" class="btn q-mb-md">High Scores</q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// Tidak perlu script jika hanya tampilan
</script>

<style scoped>
@import '../css/app.css';
/* atau sesuaikan jika di assets */
</style>
