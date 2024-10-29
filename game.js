import {quiz_whoPaintThat} from './questions.js';

const quiz = document.getElementById ('quiz-container');

const titleQuestion = document.getElementById ('question-text');

const imageQuestion = document.getElementById ('image');

const responses = document.getElementById ('options-container');

const button = document.getElementById ('nextButton');

// const myFirstQuestion = quiz_whoPaintThat.questions[2]

// titleQuestion.innerText = myFirstQuestion.text ;

// imageQuestion.setAttribute("src", myFirstQuestion.image) ;


// myFirstQuestion.options.forEach(options => {
//     const optionsButton = document.createElement('button');
//     optionsButton.innerText = options;
//     optionsButton.classList.add('options-container');
//     responses.appendChild(optionsButton);
//   });

let currentQuestionIndex = 0

function loadQuestion(){
  responses.innerHTML =" ";
  const myFirstQuestion = quiz_whoPaintThat.questions[currentQuestionIndex];
  titleQuestion.innerText = myFirstQuestion.text;

  imageQuestion.setAttribute("src", myFirstQuestion.image) ;
  myFirstQuestion.options.forEach(options => {
    const optionsButton = document.createElement('button');
    optionsButton.innerText = options;
    optionsButton.classList.add('options-container');
    responses.appendChild(optionsButton);
  });
}


nextButton.addEventListener('click', ()=> {

  currentQuestionIndex ++ ;

if (currentQuestionIndex < quiz_whoPaintThat.questions.length) {
  loadQuestion();
} else {
  responses.innerHTML =" ";
  // imageQuestion.innerText ="  ";
  // .button.style.display ="none";
  titleQuestion.innerText = "Fin du Quiz";  
  nextButton.style.display= 'none';
  imageQuestion.setAttribute("src", " ") 
}

});
 loadQuestion()


