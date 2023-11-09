# JS-MAIL-DADI
Questa repo avrà al suo interno due cartelle con due esercizi differenti, esercizio Mail e esercizio Dadi.
<br><br>

## Esercizio Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
<br>

### Svolgimento
1) Creo un array con delle e-mail iniziali (per esempio 3).
2) Inizio un ciclo di richiesta informazioni.
3) Tramite prompt chiedo all'utente di inserire la sua email.
4) Inizio un ciclo che scorre la lista delle email
5) Condizione se la mail dell'utente è presente nella lista delle email si interrompe il ciclo.
6) Quindi se la mail è presente apparirà un alert positivo.
7) Se non presente si viene informati a riguardo e che da ora la mail farà parte della listaMail.
8) Prompt richiesto all'utente per chiuedere o meno il ciclo iniziale.
<br><br>

## Esercizio Dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
<br>

### Svolgimento
1) Con un prompt chiedo il nome del giocatore e salvo il suo nome in una variabile giocatore.
2) Ho una variabile giocatorePc.
3) Genero un numero random da 1 a 6 che salvo in una variabile numeroGiocatore e mostro in console.
4) Genero un numero random da 1 a 6 che salvo in una variabile numeroPC e mostro in cosole.
5) Genero un array con dei messaggi risposta al gioco dei dadi da usare nelle condizioni.
6) Condizioni vincita:
- se numeroPc > numeroGiocatore compare il mesaggio "HAI PERSO!";
- se numeroPc < numeroGiocatore compare il mesaggio "HAI VINTO!";
- altrimenti compare il mesaggio "AVETE PAREGGIATO!";
7) Stampo i messaggi in console e alert.
