import { quiz_whoPaintThat} from './questions.js';

const quiz = document.getElementById ('quiz-container');

const question = document.getElementsByClassName ('question');

const image = document.getElementsByClassName ('img');

const responses = document.getElementsByClassName ('options');

const button = document.getElementById ('next-button');


const myFirstQuestion = quiz_whoPaintThat.questions[0]

question.innerText = myFirstQuestion ;


myFirstQuestion.options.forEach(options => {
    const optionsButton = document.createElement('button');
    optionsButton.innerText = options;
    optionsButton.classList.add('options');
    responses[0].appendChild(optionsButton);
  });