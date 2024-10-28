import { quiz_whoPaintThat} from './questions.js';

const quiz = document.getElementById ('quiz-container');

const question = document.getElementsByClassName ('question');

const image = document.getElementsByClassName ('img');

const reponses = document.getElementsByClassName ('options');

const button = document.getElementById ('next-button');


const myFirstQuestion = quiz_whoPaintThat.questions[1]

question.innerText = myFirstQuestion ;


myFirstQuestion.options.forEach(options => {
    const optionsButton = document.createElement('button');
    optionsButton.innerText = quiz_whoPaintThat.options;
    __________.classList.add('__________');
    __________.appendChild(__________);
  });