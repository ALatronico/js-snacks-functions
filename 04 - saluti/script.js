/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

function saluta (name){
  let saluto = "Ciao ";
  if(name.length > 0){
    saluto += name;
  }
  return saluto;
}


// Invoca la funzione qui e stampa il risultato in console

const ciao = saluta(name);
console.log(ciao);


//Risultato atteso se si passa 'Mario': // ciao Mario