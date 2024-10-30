import {quiz_whoPaintThat} from './questions.js';      //Fonction qui importe le tableau de question depuis question.js 

const quiz = document.getElementById ('quiz-container');    //Declaration de variables pour récupérer chaque éléments du quiz

const titleQuestion = document.getElementById ('question-text');

const imageQuestion = document.getElementById ('image');

const responses = document.getElementById ('options-container');

const button = document.getElementById ('nextButton');

let currentQuestionIndex = 0                                            //Declaration de variable pour initialiser la question à 0 (première question)

let correctAnswer = quiz_whoPaintThat.questions[currentQuestionIndex].correct_answer       //Declaration de variable pour initialiser la bonne réponse à 0 (première réponse)

const replayButton = document.getElementById ('replayButton');                         //Declaration de variable qui récupère le bouton rejouer


function loadQuestion(){                                                   //Déclaration de fonction pour charger la question sur la page
  responses.innerHTML =" ";                                                  //Vider les champs de réponses précédentes
  const myFirstQuestion = quiz_whoPaintThat.questions[currentQuestionIndex];  //Déclaration de variable récupérant les éléments de la question en fonction de l'index
  titleQuestion.innerText = myFirstQuestion.text;                             //On injecte le texte de la question dans son emplacement

  imageQuestion.setAttribute("src", myFirstQuestion.image) ;                  //On attribue une nouvelle source a l'image en fonction de la question 
  nextButton.setAttribute('disabled','');                                      //On desactive le bouton suivant
  myFirstQuestion.options.forEach(options => {                                //Mise en place d'une boucle qui crée dynamiquement un bouton pour chaque options de réponse à la question 
    const optionsButton = document.createElement('button');
    optionsButton.innerText = options;
    optionsButton.classList.add('options-container');
    responses.appendChild(optionsButton); 
    
    checkAnswer(optionsButton)                                               //Vérification de la réponse choisie
  });
}

function checkAnswer(optionsButton){                                               //Création de la fonction permettant de vérifier la bonne réponse

  optionsButton.addEventListener("click", ()=> {                                   //On écoute le click du bouton de réponse choisi par l'utilisateur
    nextButton.removeAttribute('disabled');                                        //SUite au click d'une réponse on réactive le bouton suivant
    console.log(optionsButton.innerText)                                        
    console.log(correctAnswer)
     if (optionsButton.innerText === correctAnswer) {                             //Première condition : si le texte du bouton de réponse choisi par l'utilisateur = la bonne réponse :
      console.log(true)}      
    else {
     console.log(false )
} })}


loadQuestion()                                                                         //Appel de la fonction permettant de charger la question sur la page

nextButton.addEventListener('click', ()=> {                          //On écoute l'évènement du click sur le bouton suivant

currentQuestionIndex ++ ;                                         // Lors du click on ajoute 1 à l'index
 
if (currentQuestionIndex < quiz_whoPaintThat.questions.length) {                  //ajout d'une premièere condition qui charge la question suivante tant qu'on ne dépasse pas la limite de l'index
  correctAnswer =  quiz_whoPaintThat.questions[currentQuestionIndex].correct_answer
  loadQuestion();
} else {                                                                                //ajout d'une deuxième condition qui lors du dépassement de la limite de l'index :
  responses.innerHTML =" ";                                                             //vide les champs,de réponses
  correctAnswer = " "                                                                   //vide la bonne réponse
  titleQuestion.innerText = "Fin du Quiz";                                              //Affiche un message a la place de la question
  nextButton.style.display= 'none';                                                     //Cache le bouton suivant
  imageQuestion.setAttribute("src", " ")                                                //vide la source de l'image
  replayButton.style.display= 'inline-block';                                           //Affiche le bouton rejouer
  currentQuestionIndex = 0                                                              //Reinitialise l'index de question à 0
  correctAnswer =  quiz_whoPaintThat.questions[currentQuestionIndex].correct_answer     // Réinitialise la bonne réponse en fonction de l'index
}
});
 

replayButton.addEventListener('click', () => {                                          //On écoute le click sur le bouton rejouer
  replayButton.style.display= 'none';                                                  //Suite au click le bouton rejouer disparait 
  nextButton.style.display= 'inline-block';                                            //Le bouton suivant apparait 
 loadQuestion()                                                                        //Appel de la fonction pour charger la question
});





 
//  console.log(correctAnswer)
//  console.log(optionsButton.innerText)

// imageQuestion.innerText ="  ";
  // .button.style.display ="none";

// const myFirstQuestion = quiz_whoPaintThat.questions[2]

// titleQuestion.innerText = myFirstQuestion.text ;

// imageQuestion.setAttribute("src", myFirstQuestion.image) ;


// myFirstQuestion.options.forEach(options => {
//     const optionsButton = document.createElement('button');
//     optionsButton.innerText = options;
//     optionsButton.classList.add('options-container');
//     responses.appendChild(optionsButton);
//   });


//const optionsButton = document.createElement('button');
//const UserResponse = optionsButton.addEventListener('click') 
  
/* function ifAnswerIsCliked(){
  if (nextButton.disabled = false ) {
    optionsButton.setAttribute('disabled', true);
  } else {
    optionsButton.setAttribute('disabled', false);
  }
} */

  /* ifAnswerIsCliked(); */