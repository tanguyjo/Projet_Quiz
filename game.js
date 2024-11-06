import { quiz_whoPaintThat } from './questions.js';      //Fonction qui importe le tableau de question depuis question.js 
import { quiz_cinema } from './questionscinema.js'
import { quiz_architecture } from './questionsArchitecture.js'

const quiz = document.getElementById ('quiz-container');    //Declaration de variables pour récupérer chaque éléments du quiz

const titleQuestion = document.getElementById ('question-text');

const imageQuestion = document.getElementById ('image');

const responses = document.getElementById ('options-container');

const button = document.getElementById ('nextButton');

const endText = document.getElementById ('endText');

const scoreText = document.getElementById ('scoreText');

const endMessage = document.getElementById ('endMessage');

let chosenquiz = localStorage.getItem('quiz');                                // Declaration d'une variable qui recupere dans le local storage le quiz choisis et qui la stock

const quizes = {                                                           // Declaration d'une variable qui contient les cles et valeurs des 3 quiz
  quiz_whoPaintThat : quiz_whoPaintThat,
  quiz_cinema : quiz_cinema,
  quiz_architecture : quiz_architecture
}

let currentQuestionIndex = 0                                                  //Declaration de variable pour initialiser la question à 0 (première question)

let correctAnswer = quizes[chosenquiz].questions[currentQuestionIndex].correct_answer  //Declaration de variable pour initialiser la bonne réponse a la premiere bonne reponse en fonction de l'index du quiz choisis 

const replayButton = document.getElementById ('replayButton');                         //Declaration de variable qui récupère le bouton rejouer

let myFirstQuestion = quizes[chosenquiz].questions[currentQuestionIndex]            //Déclaration de variable récupérant les éléments de la question en fonction de l'index du quiz choisis

let optionsButton = document.createElement('button');                              // Declaration de variable qui contient la fonction qui cree les boutons de reponses

let score = 0                                                                      //Declaration de la variable qui initialise le score de l'utilisateur à 0 

let timer;                                                                           // Declaration de la variable timer 
let ele = document.getElementById('timer');                                           // declare la variable ele qui elle va recuperer l'element timer du quiz
let sec =15;                                                                        //Declaration de la variable sec qui initialise le chrono a 15 secondes
  

//localStorage.clear()                                                                    // vide le localstorage

function startTimer (){                                                                   //Declaration de la fonction Timer 
  timer = setInterval(()=>{                                                              //fonction qui fait une commande a des intervalles de milliseconde donnee
    if (sec >= 0) {                                                                     // Condition tant que le timer est superieur ou egal a 0
    ele.innerHTML = '00:' + (sec < 10 ? '0' : '') + sec;                                // on affiche le temps ecouler et si les secondes sont inf a 10 on affiche 00:0(seconde) 
    if (sec < 10) {                                                                   // si il reste moins de 10s
      ele.style.color = 'orange';                                                    // Change la couleur du texte du timer pour signaler a l'utilisateur du peu de temps restant 
    }
  sec--;                                                                               // enleve 1 seconde
  } else{                                                                             // si le timer est termine
    clearInterval(timer);                                                             // on arrete la fonction interval
    ele.innerHTML="Time's up";                                                        // On affiche que le temps est écoulé 
    ele.style.color = 'red';                                                          // On affiche le message en rouge
    nextButton.disabled = false                                                        // On active le bouton suivant
    disableIfClicked(optionsButton)                                                     // on desactive les options reponses
  }
  }, 1000);}                                                                             // on choisis l'interval de 1s(1000ms) pour faire la boucle de setinterval


  function clear(){                                                                      // Declaration de la fonction clear 
  clearInterval(timer);                                                                  // clear l'interval du timer
  sec =15;                                                                                // reinitialise le timer a 15s
  ele.innerHTML ='00:15'                                                                  // reaffiche le timer a 00:15 en html
  ele.style.color = '#5022E8';                                                             // remet le timer en bonne couleur
  
}

                                                                                                   //Déclarations de variables pour la barre de progression
let maxBar = quizes[chosenquiz].questions.length;                                                 //Valeur maximale de la barre de progression
let currentBar = 0;                                                                              //Progression courante (que nous initialisons à zéro)
let progressBar;                                                                                 //Objet javascript de la barre de progression

function initialisation(){                                        //Déclaration de fonction pour initialiser la barre de progression
  progressBar = document.getElementById('progressBar');          //On récupère l'élément HTML Barre de progression
  progressBar.value = currentBar;                                //On lui donne la valeur courante (0)
  progressBar.max = maxBar;                                      //On définit sa valeur max
}

function displayBar(){                                           //Déclaration de fonction pour faire avancer la barre de progression
  currentBar++ ;                                                 //On ajoute 1 à la valeur courante
  progressBar.value = currentBar ;                               //La nouvelle valeur de la barre devient la valeur courante
}

function loadQuestion(){                                                   //Déclaration de fonction pour charger la question sur la page
  startTimer()                                                              // Appel la fonction qui demare le timer
  responses.innerHTML =" ";                                                  //Vider les champs de réponses précédentes
  myFirstQuestion = quizes[chosenquiz].questions[currentQuestionIndex];      // variable récupérant les éléments de la question en fonction de l'index du quiz choisis
  titleQuestion.innerText = myFirstQuestion.text;                             //On injecte le texte de la question dans son emplacement

  imageQuestion.setAttribute("src", myFirstQuestion.image) ;                  //On attribue une nouvelle source a l'image en fonction de la question 
  nextButton.setAttribute('disabled','');                                      //On desactive le bouton suivant
  myFirstQuestion.options.forEach(options => {                                //Mise en place d'une boucle qui crée dynamiquement un bouton pour chaque options de réponse à la question 
    optionsButton = document.createElement('button');
    optionsButton.innerText = options ;
    optionsButton.classList.add('options-container');
    responses.appendChild(optionsButton); 

    endText.innerText = " ";                                                       //On vide les elements suivants: endText, scoreText et endMessage
    scoreText.innerText = " "; 
    endMessage.innerText = " ";
  
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
     if (optionsButton.innerText === correctAnswer) {                             //Première condition : si le texte du bouton de réponse choisi par l'utilisateur = la bonne réponse :
      optionsButton.style.border = '3px solid green';                             //Les bordures du bouton deviennent vertes 
      score ++;                                                                   //Le score augmente                     
     } else {                                                                        //Deuxiéme condition : si le texte du bouton de réponse choisi par l'utilisateur != la bonne réponse :
      optionsButton.style.border = '3px solid red';}                               //Les bordures du bouton deviennent rouges
     })}

 initialisation()                                                     //Appel de la fonction qui réinitialise la barre de progression
loadQuestion()                                                       //Appel de la fonction permettant de charger la question sur la page


nextButton.addEventListener('click', ()=> {                          //On écoute l'évènement du click sur le bouton suivant
          displayBar() ;                                                     //On appelle la fonction qui ajoute 1 à la barre de progression
          currentQuestionIndex ++ ;                                         // Lors du click on ajoute 1 à l'index
          clear();                                                          // reinitialise le timer 

          if (currentQuestionIndex < quizes[chosenquiz].questions.length) {                     //ajout d'une première condition qui charge la question suivante tant qu'on ne dépasse pas la limite de l'index du quiz chosis
            correctAnswer =  quizes[chosenquiz].questions[currentQuestionIndex].correct_answer
            loadQuestion();
          } else {                                                                                //ajout d'une deuxième condition qui lors du dépassement de la limite de l'index :
            responses.innerHTML =" ";                                                             //vide les champs de réponses
            correctAnswer = " "                                                                   //vide la bonne réponse
            
            if (score>2){                                                               //Si le quiz est finit et que le score est superieur a 2
              titleQuestion.innerText = " ";                                            // on vide le champ de question
              endText.innerText = "Fin du quiz";                                        // on injecte le text de Fin du quiz
              scoreText.innerText = "Votre score est de " + score + "/4 !";            // on injecte le score dans une phrase
              endMessage.innerText = "Bien joué !"                                    // on injecte un message 
            }
          else {                                                                     // Sinon si le score est inferieur a 2
            titleQuestion.innerText = " ";                                           // on vide le champ de question                 
            endText.innerText = "Fin du quiz";                                      // on injecte le text fin du quiz
            scoreText.innerText = "Votre score est de " + score + "/4 !";           // on injecte le score dans une phrase
            endMessage.innerText = " Essaie encore :)"}                            // on injecte un message
          
            let scoreCount = parseInt(localStorage.getItem('scoreCount') || '0');                    // Récupère le nombre total de scores enregistrés
            localStorage.setItem(`userScore_${scoreCount + 1}`, score);                              // Sauvegarder le score actuel avec une clé unique
            localStorage.setItem('scoreCount', scoreCount + 1);                                      // Incrémenter le compteur de scores et le sauvegarder

            nextButton.style.display= 'none';                                                     //Cache le bouton suivant
            imageQuestion.setAttribute("src", " ")                                                //vide la source de l'image
            ele.innerHTML =" "                                                                    // vide le Timer
            replayButton.style.display= 'inline-block';                                           //Affiche le bouton rejouer
            currentQuestionIndex = 0                                                              //Reinitialise l'index de question à 0
            score=0                                                                               //Reinitialise le score à 0
            currentBar = 0                                                                        //Reinitialise la barre de progression à 0
            correctAnswer = quizes[chosenquiz].questions[currentQuestionIndex].correct_answer     //Réinitialise la bonne réponse en fonction de l'index
          }
});
 

replayButton.addEventListener('click', () => {                                          //On écoute le click sur le bouton rejouer
  replayButton.style.display= 'none';                                                  //Suite au click le bouton rejouer disparait 
  nextButton.style.display= 'inline-block';                                            //Le bouton suivant apparait 
  clear()                                                                              // CLear le timer
 initialisation()                                                                      //Appel de la fonction pour réinitialiser la barre de progression
loadQuestion()                                                                        //Appel de la fonction pour charger la question

});





 
