/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function salutaOra(name){
  let message = "";
  const oraAttuale = new Date();
  const ore = oraAttuale.getHours();
  if (ore < 13){
    message = "Buongiorno " + name;
  } else if(ore < 17){
    message = "Buon pomeriggio " + name;
  } else {
    message = "Buonasera " + name;
  }
  return message;
}


// Invoca la funzione qui e stampa il risultato in console

let ciao = salutaOra(name);
console.log(ciao);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.