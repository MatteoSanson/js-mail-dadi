'use strict';

// 1) Con un prompt chiedo il nome del giocatore e salvo il suo nome in una variabile giocatore. 
const nomeGiocatore = prompt ('stai giocando a dadi contro il computer; inserisci il tuo nome');
console.log('Il tuo nome: ', nomeGiocatore);

// 2) Ho una variabile giocatorePc. 
const giocatorePc = 'Pc diabolico';
console.log('giochi contro ', giocatorePc);

// 3) genero un numero random da 1 a 6 che salvo in una variabile numeroGiocatore e mostro in console. 
let numeroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log('Numero dado di ' + nomeGiocatore + ' è ', numeroGiocatore);

// 4) genero un numero random da 1 a 6 che salvo in una variabile numeroPC e mostro in console. 
let numeroPc = Math.floor(Math.random() * 6) + 1;
console.log('Numero dado di ' + giocatorePc + ' è ', numeroPc);

// 5) condizioni vincita: 
if (numeroPc > numeroGiocatore) {
    const risultato = nomeGiocatore + (' HAI PERSO!');
    console.log(risultato);
    let multiRiga = (nomeGiocatore + " " + numeroGiocatore + " -VS- " + giocatorePc + " " + numeroPc + '\n'+'\n' + risultato);
    alert (multiRiga);
} else if (numeroPc < numeroGiocatore) {
    const risultato = nomeGiocatore + (' HAI VINTO!');
    console.log(risultato);
    let multiRiga = (nomeGiocatore + " " + numeroGiocatore + " -VS- " + giocatorePc + " " + numeroPc + '\n' + risultato);
    alert (multiRiga);
} else {
    const risultato = ('AVETE PAREGGIATO!');
    console.log(risultato);
    let multiRiga = (nomeGiocatore + " " + numeroGiocatore + " -VS- " + giocatorePc + " " + numeroPc + '\n' + risultato);
    alert (multiRiga);
}