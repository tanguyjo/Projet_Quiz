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
let correctAnswer = quiz_whoPaintThat.questions[0].correct_answer
//const optionsButton = document.createElement('button');
//const UserResponse = optionsButton.addEventListener('click') 
  

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
    
    
    checkAnswer(optionsButton)
  });
 
}


nextButton.addEventListener('click', ()=> {

  currentQuestionIndex ++ ;
 
if (currentQuestionIndex < quiz_whoPaintThat.questions.length) {
  correctAnswer =  quiz_whoPaintThat.questions[currentQuestionIndex].correct_answer
  loadQuestion();
} else {
  responses.innerHTML =" ";
  correctAnswer = " "
  
  // imageQuestion.innerText ="  ";
  // .button.style.display ="none";
  titleQuestion.innerText = "Fin du Quiz";  
  nextButton.style.display= 'none';
  imageQuestion.setAttribute("src", " ")
  replayButton.style.display= 'inline-block';
  currentQuestionIndex = 0
  correctAnswer =  quiz_whoPaintThat.questions[currentQuestionIndex].correct_answer
}

});
 loadQuestion()

const replayButton = document.getElementById ('replayButton');

replayButton.addEventListener('click', () => {
  replayButton.style.display= 'none';
  nextButton.style.display= 'inline-block';
 loadQuestion()
});




function checkAnswer(optionsButton){

  optionsButton.addEventListener("click", ()=> {
    console.log(optionsButton.innerText)
    console.log(correctAnswer)
     if (optionsButton.innerText == correctAnswer) {
      console.log(true)}
      
      
    else {
    //console.log(true) ;
     console.log(false )
    //console.log(false); 
 } })}
 
//  console.log(correctAnswer)
//  console.log(optionsButton.innerText)