/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/



let numeroGiocatore = Math.floor(Math.random() * 6 ) + 1;
let numeroPc = Math.floor(Math.random() * 6 ) + 1;

console.log(numeroGiocatore, numeroPc)

if( numeroGiocatore > numeroPc ){
    console.log( `il giocatore ha vinto ${ numeroGiocatore} - ${numeroPc}`)
}else if ( numeroGiocatore < numeroPc ){
    console.log( `il PC ha vinto ${ numeroGiocatore} - ${numeroPc}`)
}else {
    console.log( `Ii giocatore e il pc hanno pareggiato ${ numeroGiocatore} - ${numeroPc}`)
}