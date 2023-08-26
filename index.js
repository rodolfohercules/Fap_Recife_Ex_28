// First Soft

var noteOne = parseFloat(prompt('Qual sua primeira nota: '));
var noteTwo = parseFloat(prompt('Qual sua segunda nota: '));
var noteThree = parseFloat(prompt('Qual sua terceira nota: ')); 

var sum = (noteOne + noteTwo + noteThree) / 3; 

var result = (sum >= 7) ? 'Parabéns caro aluno,voce está Aprovado.' : 'Tente novamente caro aluno, voce está reprovado.'


console.log('=========================================================')
console.log(`Com base em suas notas informadas, sua média foi: ${sum}`)
console.log(`E com está nota seu resultado anual foi: ${result}`)
console.log('=========================================================')


// Secound soft

var noteOne = parseFloat(prompt('Qual sua primeira nota: '));
var noteTwo = parseFloat(prompt('Qual sua segunda nota: ')); 

var average = (noteOne + noteTwo) / 2;

var minimumNote = 7 * 2 - average; 

if (minimumNote < 0) {
    console.log("Você já possui média suficiente para passar com 7!");
} else {
    console.log("Você precisa tirar pelo menos " + minimumNote.toFixed(2) + " na próxima prova para passar com média 7.");
}

console.log(minimumNote)