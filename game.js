import { quiz_whoPaintThat} from './questions.js';

const quiz = document.getElementById ('quiz-container');

const titleQuestion = document.getElementById ('question-text');

const imageQuestion = document.getElementById ('image');

const responses = document.getElementById ('options-container');

const button = document.getElementById ('next-button');


const myFirstQuestion = quiz_whoPaintThat.questions[0]

titleQuestion.innerText = myFirstQuestion.text ;

imageQuestion.innerHTML = myFirstQuestion.image ;



 /* myFirstQuestion.image.forEach(image => {
    const paintingImage = document.createElement('img');
    paintingImage.innerText = options;
    paintingImage.classList.add('img');
    imageQuestion.appendChild(paintingImageaintingImage);
  }); */


myFirstQuestion.options.forEach(options => {
    const optionsButton = document.createElement('button');
    optionsButton.innerText = options;
    optionsButton.classList.add('options-container');
    responses.appendChild(optionsButton);
  });

 

/*   myFirstQuestion.question.forEach(question => {
    const questionText = document.createElement('string');
    questionText.innerText = question;
    questionText.classList.add('question');
    question[0].appendChild(questionText);
  }); */