<template>
  <q-page class="flex flex-center">
    <div class="container">
      <div id="game">
        <div id="hud" class="flex column">
          <div class="hud-item">
            <p class="hud-prefix">Score</p>
            <h1 class="hud-main-text">{{ score }}</h1>
          </div>
          <div class="hud-item">
            <p id="progressText" class="hud-prefix">{{ progressText }}</p>
            <div id="progressBar">
              <div id="progressBarFull" :style="{ width: progressPercent + '%' }"></div>
            </div>
          </div>
        </div>
        <h2 id="question">{{ currentQuestion.question }}</h2>
        <hr />
        <div class="container2">
          <div
            v-for="(text, index) in currentChoices"
            :key="index"
            class="container-choice"
            :class="getClass(index)"
            @click="selectAnswer(index + 1)"
          >
            <p class="choice-prefix">{{ String.fromCharCode(65 + index) }}</p>
            <p class="choice-text">{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { onMounted } from 'vue'
import { useGame } from '../router/game'

const {
  currentQuestion,
  currentChoices,
  score,
  progressText,
  progressPercent,
  selectAnswer,
  getClass,
  startGame,
} = useGame()

onMounted(startGame)
</script>

<style scoped>
@import '../css/app.css';
@import '../css/game.css';
</style>
