/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function iniziali(names) {
  let initials = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 0) {
      initials.push(names[i][0].toUpperCase());
    }
  }
  return initials;
}

// Invoca la funzione qui e stampa il risultato in console

const result = iniziali(names);
console.log(result);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]