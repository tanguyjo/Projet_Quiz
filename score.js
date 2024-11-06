
const allScores = document.getElementById ('myScores');  // Declaration d'une constante qui vient recuperer l'emplacement du score de l'utilisateur 

const allTry = document.getElementById ('tryNumber')     //  Declaration d'une constante qui vient recuperer l'emplacement du nombre des tentatives 

let scoreCount = parseInt(localStorage.getItem('scoreCount') || '0');   //  Declaration d'une variable qui viens recuperer dans le local storage le nombres de tentatives ou 0

function allScoresHistory() {                                            // Declaration de la fonction qui contient l'historique des scores
     scoreCount;                                                          //  variable qui viens recuperer dans le local storage le nombres de tentatives ou 0
    for (let i = 1; i <= scoreCount; i++) {                              //  Boucle Pour Incrementer chaque nouveau score aux precedents (tentatives)
    let score = localStorage.getItem(`userScore_${i}`);                    // Declaration d'une variable qui recupere le score dans le localstorage
    allScores.innerHTML += `<br>Tentative ${i} : ‎ ‎ ‎  ${score}/4 <br>`;   // On viens injecter dans l'html le nombre de tentative et le score 
    }
}



function totalOfTry() {                                                 // Declaration de la fontion totalOfTry
    scoreCount;                                                         //  variable qui viens recuperer dans le local storage le nombres de tentatives ou 0
    allTry.innerHTML =  scoreCount + " Tentatives...";                 // VIens injecter dans l'html scorecount + tentatives 
}


allScoresHistory()                                                         // Appel la fonction allScoresHistory()

totalOfTry()                                                            // Appel la fonction totalOfTry