// svolto durante la correzione a lezione

let parola = prompt("Inserisci una parola");
console.log("Hai scelto:", parola);

let parolaReverse = invertiParola(parola);
console.log("Parola invertita: ", parolaReverse);

if(parola.toLowerCase() == parolaReverse.toLowerCase()) {
    alert("La parola è palindroma! 👍🏻")
} else {
    alert("La parola non è palindroma... 👎🏻")
}

function invertiParola(parolaDaInvertire) {
    let parolaInvertita = "";

    for (let i = parolaDaInvertire.length - 1; i >= 0; i--) {
        let carattere = parolaDaInvertire[i];
        parolaInvertita += carattere;
        
    }

    return parolaInvertita;
}