function gioca() {
    // Genera un numero casuale da 1 a 6 per il giocatore e il computer
    var giocatore = Math.floor(Math.random() * 6) + 1;
    var computer = Math.floor(Math.random() * 6) + 1;

    // Mostra i risultati sullo schermo
    document.getElementById("giocatore").innerHTML = giocatore;
    document.getElementById("computer").innerHTML = computer;

    // Determina il vincitore in base al punteggio più alto
    if (giocatore > computer) {
      document.getElementById("vincitore").innerHTML = "Giocatore";
    } else if (computer > giocatore) {
      document.getElementById("vincitore").innerHTML = "Computer";
    } else {
      document.getElementById("vincitore").innerHTML = "Parità";
    }
  }