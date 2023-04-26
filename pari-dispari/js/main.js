// svolto durante la correzione a lezione

let inputUtenteOk = false;
let numeroUtente;

while( inputUtenteOk==false ) {

    numeroUtente = parseInt(prompt("Scegli un numero tra 1 e 5"));
    let numeroNonENan = false;
    let numeroENelRange = false;

    if (isNaN(numeroUtente) == false) {
        numeroNonENan = true;
    }

    if( numeroUtente>=1 && numeroUtente<=5 ) {
        numeroENelRange = true;
    }

    if (numeroNonENan && numeroENelRange) {
        inputUtenteOk = true; 
    }
}

let numeroComputer = getRandomNumber(1, 5);

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min +1) + min );
}

console.log(`Numero utente: ${numeroUtente} - Numero computer: ${numeroComputer}`)


let previsioneUtente = prompt("Pari o dispari?");
previsioneUtente = previsioneUtente.toLocaleLowerCase();

console.log(`Hai scelto: ${previsioneUtente}`);


let somma = numeroUtente + numeroComputer;

let esito = getPariOrDispari(somma);

function getPariOrDispari(numero) {
   if (numero % 2 == 0)
   {
    return "pari";
   }

   return "dispari";
}

console.log(`Il numero ${somma} è ${esito}`);

if(esito.toLocaleLowerCase() == previsioneUtente) {
    alert("Hai vinto! 😎");
    console.log("Hai vinto!")
} else {
    alert("Hai perso... 😭");
    console.log("Hai perso...")
}