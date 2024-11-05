import {quiz_architecture} from './questionsArchitecture.js';      //Fonction qui importe le tableau de question depuis question.js 

const quiz = document.getElementById ('quiz-container');    //Declaration de variables pour récupérer chaque éléments du quiz

const titleQuestion = document.getElementById ('question-text');

const imageQuestion = document.getElementById ('image');

const responses = document.getElementById ('options-container');

const button = document.getElementById ('nextButton');

let currentQuestionIndex = 0                                            //Declaration de variable pour initialiser la question à 0 (première question)

let correctAnswer = quiz_architecture.questions[currentQuestionIndex].correct_answer       //Declaration de variable pour initialiser la bonne réponse à 0 (première réponse)

const replayButton = document.getElementById ('replayButton');                         //Declaration de variable qui récupère le bouton rejouer

let myFirstQuestion = quiz_architecture.questions[currentQuestionIndex]               //Déclaration de variable récupérant les éléments de la question en fonction de l'index
let optionsButton = document.createElement('button');     
let score = 0                                                                      //Declaration de la variable qui initialise le score de l'utilisateur à 0 

let timer;
let ele = document.getElementById('timer');
let sec =15;
function startTimer (){
  timer = setInterval(()=>{
    if (sec >= 0) {
    ele.innerHTML = '00:' + (sec < 10 ? '0' : '') + sec;
    if (sec < 10) {
      ele.style.color = 'orange';
    }
  sec--;
  } else{
    clearInterval(timer);
    ele.innerHTML="Time's up";
    ele.style.color = 'red';
    nextButton.disabled = false
    disableIfClicked(optionsButton)
  }
  }, 1000);}
function clear(){
  clearInterval(timer);
  sec =15;
  ele.innerHTML ='00:15'
  ele.style.color = '#5022E8';
  
}

//Déclarations de variables pour la barre de progression
let maxBar = quiz_architecture.questions.length;  //Valeur maximale de la barre de progression
let currentBar = 0;  //Progression courante (que nous initialisons à zéro)
let progressBar; //Objet javascript de la barre de progression

function initialisation(){                                        //Déclaration de fonction pour initialiser la barre de progression
  progressBar = document.getElementById('progressBar');          //On récupère l'élément HTML Barre de progression
  progressBar.value = currentBar;                                //On lui donne la valeur courante (0)
  progressBar.max = maxBar;                                      //On définit sa valeur max
}

function displayBar(){                                           //Déclaration de fonction pour faire avancer la barre de progression
  currentBar++ ;                                                 //On ajoute 1 à la valeur courante
  progressBar.value = currentBar ;                               //La nouvelle valeur de la barre devient la valeur courante
}

function loadQuestion(){ 
  startTimer()                                                  //Déclaration de fonction pour charger la question sur la page
  responses.innerHTML =" ";                                                  //Vider les champs de réponses précédentes
  myFirstQuestion = quiz_architecture.questions[currentQuestionIndex];  //Déclaration de variable récupérant les éléments de la question en fonction de l'index
  titleQuestion.innerText = myFirstQuestion.text;                             //On injecte le texte de la question dans son emplacement

  imageQuestion.setAttribute("src", myFirstQuestion.image) ;                  //On attribue une nouvelle source a l'image en fonction de la question 
  nextButton.setAttribute('disabled','');                                      //On desactive le bouton suivant
  myFirstQuestion.options.forEach(options => {                                //Mise en place d'une boucle qui crée dynamiquement un bouton pour chaque options de réponse à la question 
    optionsButton = document.createElement('button');
    optionsButton.innerText = options ;
    optionsButton.classList.add('options-container');
    responses.appendChild(optionsButton); 
    
  //  disableIfClicked(optionsButton)
    checkAnswer(optionsButton)                                               //Vérification de la réponse choisie
  });
}
  function disableIfClicked(optionsButton) {                               //Déclaration de la fonction  permettant de controler le comportement des boutons de réponse                                             
   
    let tableButtons = document.querySelectorAll('.options button')        //Declaration de la variable permettant de récupérer les boutons de réponses
    
      tableButtons.forEach(button => {                                    //Boucle parcourant chaque bouton et leur donne l'attribut disabled
      button.setAttribute('disabled', true)

    })}
    

function checkAnswer(optionsButton){                                               //Création de la fonction permettant de vérifier la bonne réponse

  optionsButton.addEventListener("click", ()=> {                                   //On écoute le click du bouton de réponse choisi par l'utilisateur
    nextButton.removeAttribute('disabled');                                       //Suite au click d'une réponse on réactive le bouton suivant
   
     disableIfClicked(optionsButton)                                              //Appel de la fonction qui désactive les boutons de réponses suite a un click 
   
    console.log(optionsButton.innerText)                                        
    console.log(correctAnswer)
     if (optionsButton.innerText === correctAnswer) {                             //Première condition : si le texte du bouton de réponse choisi par l'utilisateur = la bonne réponse :
      optionsButton.style.border = '3px solid green';                             //Les bordures du bouton deviennent vertes 
      score ++,                                                                   //Le score augmente 
      console.log(true)}      
    else {                                                                        //Deuxiéme condition : si le texte du bouton de réponse choisi par l'utilisateur != la bonne réponse :
      optionsButton.style.border = '3px solid red';                               //Les bordures du bouton deviennent rouges
     console.log(false )
}

 })}

 initialisation()                                                     //Appel de la fonction qui réinitialise la barre de progression
loadQuestion()                                                       //Appel de la fonction permettant de charger la question sur la page


nextButton.addEventListener('click', ()=> {                          //On écoute l'évènement du click sur le bouton suivant
displayBar() ;                                                     //On appelle la fonction qui ajoute 1 à la barre de progression
currentQuestionIndex ++ ;                                         // Lors du click on ajoute 1 à l'index
clear(); 

if (currentQuestionIndex < quiz_architecture.questions.length) {                  //ajout d'une première condition qui charge la question suivante tant qu'on ne dépasse pas la limite de l'index
  correctAnswer =  quiz_architecture.questions[currentQuestionIndex].correct_answer
  loadQuestion();
} else {                                                                                //ajout d'une deuxième condition qui lors du dépassement de la limite de l'index :
  responses.innerHTML =" ";                                                             //vide les champs,de réponses
  correctAnswer = " "                                                                   //vide la bonne réponse
  //titleQuestion.innerText = "Fin du Quiz, votre score est: " + score+"/4"  ;            //Affiche un message a la place de la question
  if (score>2){titleQuestion.innerText = "Fin du Quiz, votre score est: " + score+"/4" + " Bien joué !"}
  else {titleQuestion.innerText = "Fin du Quiz, votre score est: " + score+"/4"+ " Essaie Encore"}                                                                                     
 
  /* let scores = JSON.parse(localStorage.getItem('userScores')) || [];
  scores.push(score);
  localStorage.setItem('userScores', JSON.stringify(scores)); */

  // Récupère le nombre total de scores enregistrés
  let scoreCount = parseInt(localStorage.getItem('scoreCount') || '0');

  // Sauvegarder le score actuel avec une clé unique
  localStorage.setItem(`userScore_${scoreCount + 1}`, score);

  // Incrémenter le compteur de scores et le sauvegarder
  localStorage.setItem('scoreCount', scoreCount + 1);

  nextButton.style.display= 'none';                                                     //Cache le bouton suivant
  imageQuestion.setAttribute("src", " ")                                                //vide la source de l'image
  ele.innerHTML =" "
  replayButton.style.display= 'inline-block';                                           //Affiche le bouton rejouer
  currentQuestionIndex = 0                                           //Reinitialise l'index de question à 0
  score=0                                                            //Reinitialise le score à 0
  currentBar = 0                                                     //Reinitialise la barre de progression à 0
  correctAnswer =  quiz_architecture.questions[currentQuestionIndex].correct_answer     // Réinitialise la bonne réponse en fonction de l'index
}
});
 

replayButton.addEventListener('click', () => {                                          //On écoute le click sur le bouton rejouer
  replayButton.style.display= 'none';                                                  //Suite au click le bouton rejouer disparait 
  nextButton.style.display= 'inline-block';                                            //Le bouton suivant apparait 
  clear()
 initialisation()                                                                      //Appel de la fonction pour réinitialiser la barre de progression
 loadQuestion()                                                                        //Appel de la fonction pour charger la question

});


