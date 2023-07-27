import { ref } from 'vue';

const questions = ref([
  {
    question: 'What is Vue?',
    answer: 0,
    options: [
      'Front-end framework',
      'Back-end server',
      'Coffee maker',
    ],
    selected: null,
  },
  {
    question: 'What is Vue Router used for?',
    answer: 1,
    options: [
      'NASA space program',
      'Routing library for Vue',
      'Connect to the internet',
      'All are incorrect',
    ],
    selected: null,
  },
  {
    question: 'What is the template syntax in Vue called?',
    answer: 2,
    options: [
      'Mustache',
      'Curly brackets',
      'Double curly braces ({{ }})',
    ],
    selected: null,
  },
  {
    question: 'What is a Vue directive?',
    answer: 1,
    options: [
      'A special component in Vue',
      'A special attribute used in templates',
      'A type of event in Vue',
    ],
    selected: null,
  },
  {
    question: 'What is computed in Vue?',
    answer: 0,
    options: [
      'A reactive property that updates automatically',
      'A way to execute asynchronous tasks',
      'A method to manipulate the DOM',
    ],
    selected: null,
  },
  {
    question: 'Which lifecycle hook is used for cleanup and unbinding?',
    answer: 2,
    options: [
      'created',
      'mounted',
      'beforeUnmount',
      'destroyed',
    ],
    selected: null,
  },
  {
    question: 'How can you pass data from a parent component to a child component?',
    answer: 3,
    options: [
      'Using computed properties',
      'Using the data attribute',
      'By emitting events',
      'Using props',
    ],
    selected: null,
  },
  {
    question: 'Which Vue CLI command is used to create a new Vue project?',
    answer: 0,
    options: [
      'vue create',
      'npm init vue-app',
      'create-vue-project',
    ],
    selected: null,
  },
  {
    question: 'What is the purpose of v-if and v-show directives?',
    answer: 1,
    options: [
      'To conditionally render elements',
      'To conditionally show or hide elements',
      'To add CSS styles conditionally',
    ],
    selected: null,
  },
  {
    question: 'How can you add a CSS class conditionally in Vue?',
    answer: 3,
    options: [
      'Using the :class attribute',
      'Using v-class directive',
      'Using the class attribute with an expression',
      'All of the above',
    ],
    selected: null,
  },
]);

export default questions;
