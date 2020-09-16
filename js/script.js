// Generare una griglia 6x6 (36 boxes), ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.

$(document).ready(function () {

  // Definiamo l'endpoint da richiamare per ottenere i numeri random da 1 a 9.
  var endpoint = "https://flynn.boolean.careers/exercises/api/random/int"

  // Imposto una funzione al click su un box.
  $(".box").click(
    function () {

      // Salvo in una variabile il box cliccato.
      var boxCliccato = this;
      console.log(boxCliccato);

      // Utilizzo il metodo AJAX con Jquery per effettuare la chiamata al server e prendere un numero random da 1 a 9.
      $.ajax(
        {
          "url": endpoint,
          "method": "GET",
          "success": function (data, stato) {
            console.log(data);
            console.log(stato);

            // Salvo in una variabile il numero random richiamato.
            var numeroRandom = data.response;
            console.log(numeroRandom);

            // Stampo il numeroRandom nel box.
            $(boxCliccato).text(numeroRandom);

            // Se il numeroRandom è minore o uguale a 5, aggiungo la classe yellow.
            if (numeroRandom <= 5) {
              $(boxCliccato).removeClass("green");
              $(boxCliccato).addClass("yellow");
            } else {
              $(boxCliccato).removeClass("yellow");
              $(boxCliccato).addClass("green");
            }
          },
          "error": function (richiesta, stato, errori) {
            console.log(richiesta);
            console.log(stato);
            console.log(errori);
          }
        }
      );
    }
  );



});
