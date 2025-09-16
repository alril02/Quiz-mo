import { ref } from 'vue'
import { useRouter } from 'vue-router'

export function useGame() {
  const router = useRouter()

  const questions = [
    {
      question: 'Apa nama clan Sasuke',
      choice1: 'Senju',
      choice2: 'Uchiha',
      choice3: 'Uzumaki',
      choice4: 'Otsutsuki',
      answer: 2,
    },
    {
      question: 'Apa nama monster di dalam tubuh Naruto?',
      choice1: 'Kurama',
      choice2: 'Gamabunta',
      choice3: 'Katsuyu',
      choice4: 'Juubi',
      answer: 1,
    },
    {
      question: 'Apa nama clan yang memiliki mata byakugan',
      choice1: 'Sarutobi',
      choice2: 'Uzumaki',
      choice3: 'Uchiha',
      choice4: 'Hyuuga',
      answer: 4,
    },
    {
      question: 'Kazekage adalah pemimpin desa apa?',
      choice1: 'Konohagakure',
      choice2: 'Amegakure',
      choice3: 'Sunagakura',
      choice4: 'Kumogakura',
      answer: 3,
    },
  ]

  const MAX_QUESTIONS = 4
  const CORRECT_BONUS = 25

  const currentQuestion = ref({})
  const currentChoices = ref([])
  const availableQuestions = ref([])
  const acceptingAnswers = ref(false)
  const score = ref(0)
  const questionCounter = ref(0)
  const selectedIndex = ref(null)
  const correctIndex = ref(null)
  const progressText = ref('')
  const progressPercent = ref(0)

  const startGame = () => {
    score.value = 0
    questionCounter.value = 0
    availableQuestions.value = [...questions]
    getNewQuestion()
  }

  const getNewQuestion = () => {
    if (availableQuestions.value.length === 0 || questionCounter.value >= MAX_QUESTIONS) {
      localStorage.setItem('mostRecentScore', score.value)
      router.push('/end')
      return
    }

    questionCounter.value++
    progressText.value = `Question ${questionCounter.value}/${MAX_QUESTIONS}`
    progressPercent.value = (questionCounter.value / MAX_QUESTIONS) * 100

    const index = Math.floor(Math.random() * availableQuestions.value.length)
    currentQuestion.value = availableQuestions.value[index]
    currentChoices.value = [
      currentQuestion.value.choice1,
      currentQuestion.value.choice2,
      currentQuestion.value.choice3,
      currentQuestion.value.choice4,
    ]
    correctIndex.value = currentQuestion.value.answer - 1
    availableQuestions.value.splice(index, 1)
    selectedIndex.value = null
    acceptingAnswers.value = true
  }

  const selectAnswer = (choice) => {
    if (!acceptingAnswers.value) return
    acceptingAnswers.value = false
    selectedIndex.value = choice - 1

    if (choice === currentQuestion.value.answer) {
      score.value += CORRECT_BONUS
    }

    setTimeout(() => {
      getNewQuestion()
    }, 500)
  }

  const getClass = (index) => {
    if (selectedIndex.value === null) return ''
    if (index === correctIndex.value) return 'correct'
    if (index === selectedIndex.value) return 'incorrect'
    return ''
  }

  return {
    currentQuestion,
    currentChoices,
    score,
    progressText,
    progressPercent,
    selectAnswer,
    getClass,
    startGame,
  }
}
