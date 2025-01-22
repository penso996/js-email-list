// selezioniamo l'elemento di output
const emailList = document.getElementById("email-list");

// settiamo il numero di email da generare e l'endpoint
const numEmails = 10;
const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

// facciamo partire le richieste verso l'API
for (let i = 0; i < numEmails; i++) {
    axios.get(endpoint)
        .then(apiEmail => {
            // codice da eseguire in caso di SUCCESSO
            // creo la costante contenente l'email generata
            const email = apiEmail.data.response;

            // creiamo un nuovo elemento <li> con l'email ricevuta
            const emailLi = document.createElement('li');
            emailLi.textContent = email;

            // aggiungiamo l'elemento alla lista
            emailList.appendChild(emailLi);
        })
        .catch(error => {
            // codice da eseguire in caso di ERRORE
            // creiamo un nuovo elemento <li> con il messaggio di errore
            const emailLiError = document.createElement('li');
            emailLiError.textContent = "API non caricato correttamente";

            // aggiungiamo l'elemento alla lista
            emailList.appendChild(emailLiError);
        });
}