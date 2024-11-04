
const allScores = document.getElementById ('myScores');

const allTry = document.getElementById ('tryNumber')

let scoreCount = parseInt(localStorage.getItem('scoreCount') || '0');

function allScoresHistory() {
    /* let scores = JSON.parse(localStorage.getItem(`userScore_${i}`)) || []; */
    let scoreCount = parseInt(localStorage.getItem('scoreCount') || '0');
    for (let i = 1; i <= scoreCount; i++) {
    let score = localStorage.getItem(`userScore_${i}`);
    allScores.innerHTML += `Tentative ${i} : ${score}/4 `;
    }
}

allScoresHistory()

function totalOfTry() {
    scoreCount
    allTry.innerHTML =  scoreCount + " Tentatives";
}

totalOfTry()