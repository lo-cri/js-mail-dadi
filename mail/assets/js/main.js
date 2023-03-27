// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


const mail = ["kaveh2023@gmail.com", "violetevergarden-des@gmail.com", "shinji-hikari@gmail.com", "tanjiro-kamado@gmail.com"]

document.getElementById("form-email").addEventListener("submit", function(event) {
    event.preventDefault();
    let inputemail = document.getElementById( 'exampleInputEmail1' ).value
    
    console.log(inputemail)
    
    if (mail.includes(inputemail)) {
        console.log("Accesso consentito.");
      } else {
        console.log("Accesso negato.");
      }
})


