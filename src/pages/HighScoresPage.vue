<template>
  <q-page class="flex flex-center">
    <div class="container">
      <div id="highScores" class="flex flex-column">
        <h1>High Scores</h1>
        <q-btn to="/" label="Go Home" class="btn q-mb-md" />

        <q-list bordered separator>
          <q-item v-for="(score, index) in highScores" :key="index">
            <q-item-section>
              <div class="high-score">{{ index + 1 }}. {{ score.name }} - {{ score.score }}</div>
            </q-item-section>
          </q-item>
        </q-list>

        <q-btn
          label="Clear High Scores"
          @click="clearScores"
          color="negative"
          class="btn q-mt-md"
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const highScores = ref([])

const loadScores = () => {
  highScores.value = JSON.parse(localStorage.getItem('highScores') || '[]')
}

const clearScores = () => {
  localStorage.removeItem('highScores')
  loadScores()
}

onMounted(loadScores)
</script>

<style scoped>
@import '../css/app.css';
</style>
