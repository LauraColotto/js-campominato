//Il computer deve generare 16 numeri casuali tra 1 e 100.
//I numeri non possono essere duplicati
//In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//L’utente non può inserire più volte lo stesso numero.
//Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var numBombeArray = 16;
var tentativi = 100;

// Funzione che genera un numero casuale da 1 a 100

function randomNum() {
  return Math.floor(Math.random()*99+1);
}

// Funzione check numero nell'array
function checkArray(arr, num) {
  var checkPresente = false;
  for (var i=0; i< arr.length; i++){
    if (num == arr[i]){
      checkPresente = true;
    }
  }
  return checkPresente;
}

// Funzione generazione bombe
function bombGenerator() {
  var bombo = [];
  var n;
  for (var i=0; i<numBombeArray; i++){
    do {
      n = randomNum();
    } while (checkArray(bombo, n) == true);
    bombo.push(n);
  }
  return bombo;
}

// Genero le bombe
var bombe = bombGenerator();

console.log(bombe);

// Creo un array per i numeri dell'utente
var numUtenteArray = [];

// Chiedo all'utente d'inserire un numero da 1 a 100 e faccio il check e lo pusho
var bombaPresa = false;

for (var i=0; i < (tentativi-numBombeArray) && bombaPresa == false; i++) {
  console.log(tentativi-numBombeArray);
  console.log("ciclo: " + i);
  do{
    var numUtente = parseInt(prompt("Inserisci un numero da 1 a 100. Good Luck ;)"));

    if (checkArray(numUtenteArray, numUtente) == true) {
      alert("Attenzione, hai già inserito questo numero!");
    }
    // else (!isNaN(numUtente)) {
    //   alert("Attenzione, il valore che hai inserito non è un numero!");
    // }
  } while (checkArray(numUtenteArray, numUtente) == true);
  numUtenteArray.push(numUtente);
  console.log(numUtenteArray);

  // Controllo se la bomba è stata presa oppure no e vado avanti finché non vinco (forse)

  if (checkArray(bombe, numUtenteArray[numUtenteArray.length - 1])){
    alert("Hai preso una bomba!\n Hai perso :( \n Sei sfuggito alle bombe " + [numUtenteArray.length]);
    bombaPresa = true;
  } else {
    alert("Bravo! Sei stato fortunato!");
  }
}

if (numUtenteArray.length == tentativi-numBombeArray){
  alert("Complimenti! Hai vinto!\n Sei sfuggito alle bombe " + [numUtenteArray.length]);
}
console.log("gioco finito");
