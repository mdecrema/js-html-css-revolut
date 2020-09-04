// Metto in una variabile gli elementi html utili alle funzioni
var menuAzienda = $(".azienda");
var aziendaHidden = $(".hidden-menu.a");
var menuTariffazione = $(".tariffazione");
var tariffazioneHidden = $(".hidden-menu.t");
var menuConti = $(".conti");
var contiHidden = $(".hidden-menu.c");
var menuProdotti = $(".prodotti");
var prodottiHidden = $(".hidden-menu.p");


// Funzione Mouse-Over e Mouse-Out
$(document).ready(function() {
  $(".grey").mouseover(function() {
    $(this).find(">.hidden-menu").addClass("active");
  });
  $(".grey").mouseout(function() {
    $(this).find(">.hidden-menu").removeClass("active");
  });
});
