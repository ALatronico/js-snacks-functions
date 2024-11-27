/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function initialLetter (array, lettera){
  let result = [];
  let word = lettera.toUpperCase();
  for(let i = 0; i < array.length; i++){
    if (word === array[i][0].toUpperCase()){
      result.push(array[i]);
    }
  }
  return result;
}


// Invoca la funzione qui e stampa il risultato in console

const prova = initialLetter(names, 'A');
console.log(prova);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]