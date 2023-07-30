<script setup>

</script>

<template>
  <main>

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

.quiz .answer {
  margin-bottom: 20px;
  color: #2cce7d;
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