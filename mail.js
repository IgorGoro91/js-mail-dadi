

/*Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). */




const mailInvitati =["igor@mail.com", "max@mail.com", "kate@mail.com", "pippo@mail.com"] ; //mail invitati


let mail =prompt( "inserisci la tua mail "); // richiesta mail

 let risultato;
for( let i = 0; i <= mailInvitati.length ; i++){
    if(mail == mailInvitati[i]){
        risultato = mail
        console.log( `${risultato} Benvenuto alla festa`);
    }
    if(risultato){
        
    }
    
    else{
        console.log("Mi dispiace la sua meal non e nella lista");
    }
    // INFO SE L'EMAIL E' STATA TROVATA O NO VIENE DA QUESTO IF

}

//QUI IL CONSOLE LOG
