'use strict';
// 1) Creo un array con delle e-mail iniziali (per esempio 3).
const listaMail = ["aldo-baglio@gmail.com", "giovanni_storti@yahoo.it", "giacomoporetti@agg.it"];
// stampo la lista mail 
for (let i = 0; i < listaMail.length; i++) {
    console.log(listaMail[i]);
};

// 2) Inizio un ciclo di richiesta informazioni. 
let continua = true;
for (let i = 0; continua; i++) {
    // 3) Tramite prompt chiedo all'utente di inserire la sua email. 
    const emailUtente = prompt("Inserisci la tua email");
    // stampo in console il dato inserito dall'utente 
    console.log("La tua email è: ", emailUtente);

    // 4) inizio un ciclo che scorre la lista delle email. 
    let checkLista = false;
    for (let i = 0; i < listaMail.length; i++) {
        // 5) Condizione se la mail dell'utente è presente nella lista delle email si interrompe il ciclo. 
        if (emailUtente === listaMail[i]) {
            checkLista = true;
            break;
        }
    };

    // 6) Quindi se la mail è presente apparirà un alert positivo.
    if (checkLista) {
        alert("Sei presente nell'elenco.");
        // 7) Se non presente si viene informati a riguardo e che da ora la mail farà parte della listaMail. 
    } else {
        listaMail.push(emailUtente);
        alert("Non sei presente nell'elenco ma ora aggiungiamo la tua email.");
        console.log("Lista email aggiornata: ", listaMail);
    };

    // 8) Prompt richiesto all'utente per chiuedere o meno il ciclo iniziale. 
    const risposta = prompt("Vuoi inserire un'altra email? (si o no)");
    if (risposta.toLowerCase() !== "si") {
        continua = false;
    };
};