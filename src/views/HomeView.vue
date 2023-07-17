<script setup>
import { ref, computed } from 'vue'

const questions = ref([
  {
    question: 'What is Vue?',
    answer: 0,
    options: [
      'Front-end framework',
      'Back-end server',
      'Coffee maker'
    ],
    selected: null
  },
  {
    question: 'What is Vue Router used for?',
    answer: 1,
    options: [
      'NASA space program',
      'Routing library for Vue',
      'Connect to the internet',
      'All are incorrect'
    ],
    selected: null
  },
  {
    question: 'What is Wayne favorite football team?',
    answer: 3,
    options: [
      'Bayern Levekusen',
      'PSG',
      'Manchester United',
      'Arsenal'
    ],
    selected: null
  },
])

const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
  let value = 0
  questions.value.map(q => {
    if (q.selected != null && q.answer == q.selected) {
      //console.log('correct')
      value++
    }
  })
  //console.log(value)
  return value
})

const getCurrentQuestion = computed(() => {
  let question = questions.value[currentQuestion.value]
  question.index = currentQuestion.value
  return question
})

const SetAnswer = event => {
  questions.value[currentQuestion.value].selected = event.target.value

  event.target.value = null
}

const NextQuestion = () => {
  if(currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
  } else {
    quizCompleted.value = true
  }
}

</script>

<template>
  <main class="app">
    <h1>Vue Quiz</h1>
    <section class="quiz" v-if="!quizCompleted">
      <div class="quiz-info">
        <span class="question">{{ getCurrentQuestion.question }}</span>
        <span class="score">Score {{ score }} / {{ questions.length }}</span>        
      </div>

      <div class="options">
        <label 
          v-for="(option, index) in getCurrentQuestion.options" 
          :key="index"
          :class="`option ${
            getCurrentQuestion.selected == index
              ? index == getCurrentQuestion.answer 
                ? 'correct' 
                : 'incorrect'   
              : ''          
          } ${
            getCurrentQuestion.selected != null && 
            index != getCurrentQuestion.selected
              ? 'disabled'
              : ''
          }`">
          <input 
            type="radio" 
            :name="getCurrentQuestion.index"
            :value="index"
            v-model="getCurrentQuestion.selected"
            :disabled="getCurrentQuestion.selected"
            @change="SetAnswer">
            <span>{{ option }}</span>
        </label>
      </div>
      
      <button
        @click="NextQuestion"
        :disabled="!getCurrentQuestion.selected"
      >
        {{ 
          getCurrentQuestion.index == questions.length - 1
            ? 'Finish'
            : getCurrentQuestion.selected == null 
                ? 'Select an option'
                : 'Next Question'        
        }}
      </button>
    </section>
    <section v-else>
      <h2>You have finished the quiz!</h2>
      <p>Your score is {{ score }} / {{ questions.length }}</p>

    </section>
  </main>
</template>

<style>


.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: calc(100vh - 160px);
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--orange);
}

.quiz {
  padding: 2rem;
  width: 100%;
  max-width: 640px;
  border-radius: 0.5rem;
  background-color: var(--darkgray);
}

.quiz-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.quiz-info .question {
  color: var(--lightgray);
  font-size: 1.25rem;
}

.quiz-info .score {
  color: var(--lightgray);
  font-size: 1.25rem;
}

.options {
  margin-bottom: 1rem;
}

.option {
  display: block;
  padding: 1rem;
  background-color: var(--lightorange);
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: white;
}

.option:hover {
  background-color: var(--orange);
  transform: scale(1.05);
}

.option:active {
  transform: scale(0.9);
}

.option.correct {
  background-color: var(--green);
}

.option.incorrect {
  background-color: var(--red);
}

.option:last-of-type {
  margin-bottom: 0;
}

.option.disabled {
  opacity: 0.5;
}

.option input {
  display: none;
}

button {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1rem;
	background-color: #2cce7d;
	color: white;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.2rem;
	border-radius: 0.5rem;
}

button:disabled {
	opacity: 0.5;
}

h2 {
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
}

p {
	color: #8F8F8F;
	font-size: 1.5rem;
	text-align: center;
}
</style>

<script>
export default {
  name: 'HomeView'
}
</script>