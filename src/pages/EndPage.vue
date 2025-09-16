<template>
  <q-page class="flex flex-center">
    <div class="container">
      <div id="end" class="flex flex-center column">
        <h1>{{ finalScore }}</h1>
        <q-form @submit.prevent="saveHighScore">
          <q-input
            v-model="username"
            placeholder="Nama Kamu"
            class="q-mt-md q-mb-xl"
            outlined
            dense
          />
          <q-btn
            label="Save"
            color="primary"
            class="btn q-mb-md"
            :disable="!username"
            @click="saveHighScore"
            style="margin-top: 2rem"
          />
        </q-form>
        <div class="form-end row justify-center q-gutter-md">
          <q-btn to="/game" label="Play Again" class="btn" />
          <q-btn to="/" label="Go Home" class="btn" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const finalScore = ref(0)
const MAX_HIGH_SCORES = 5

onMounted(() => {
  finalScore.value = localStorage.getItem('mostRecentScore') || 0
})

const saveHighScore = () => {
  if (!username.value) return

  const score = {
    score: Number(finalScore.value),
    name: username.value,
  }

  const highScores = JSON.parse(localStorage.getItem('highScores') || '[]')
  highScores.push(score)
  highScores.sort((a, b) => b.score - a.score)
  highScores.splice(MAX_HIGH_SCORES)

  localStorage.setItem('highScores', JSON.stringify(highScores))
  username.value = ''
  router.push('/highscores')
}
</script>

<style scoped>
@import '../css/app.css';
@import '../css/game.css';
</style>
