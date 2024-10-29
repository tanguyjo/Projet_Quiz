import {quiz_whoPaintThat} from './questions.js';

const quiz = document.getElementById ('quiz-container');

const titleQuestion = document.getElementById ('question-text');

const imageQuestion = document.getElementById ('image');

const responses = document.getElementById ('options-container');

const button = document.getElementById ('next-button');

const myFirstQuestion = quiz_whoPaintThat.questions[2]

titleQuestion.innerText = myFirstQuestion.text ;

imageQuestion.setAttribute("src", myFirstQuestion.image) ;


myFirstQuestion.options.forEach(options => {
    const optionsButton = document.createElement('button');
    optionsButton.innerText = options;
    optionsButton.classList.add('options-container');
    responses.appendChild(optionsButton);
  });

