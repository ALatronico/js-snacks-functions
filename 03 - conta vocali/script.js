/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contaVocali(string){
  const vocali = ["a","e","i","o","u","A","E","I","O","U"];
  let num = 0;
  for(let i = 0; i < string.length; i++){
    if (vocali.includes(string[i])){
      num++;
    }
  }
  return num;
}

// Invoca la funzione qui e stampa il risultato in console

const ris = contaVocali(word);
console.log(ris);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)