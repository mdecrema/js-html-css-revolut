// Metto in una variabile gli elementi html utili alle funzioni
var menuAzienda = $(".azienda");
var aziendaHidden = $(".hidden-menu.a");
var menuTariffazione = $(".tariffazione");
var tariffazioneHidden = $(".hidden-menu.t");
var menuConti = $(".conti");
var contiHidden = $(".hidden-menu.c");
var menuProdotti = $(".prodotti");
var prodottiHidden = $(".hidden-menu.p");

// Funzioni Mouse-Over e Mouse-Out per il menu 'Azienda'
menuAzienda.mouseover(function() {
  aziendaHidden.addClass("active");
});

menuAzienda.mouseout(function() {
  aziendaHidden.removeClass("active");
});

// Funzioni Mouse-Over e Mouse-Out per il menu 'Tariffazione'
menuTariffazione.mouseover(function() {
  tariffazioneHidden.addClass("active");
});

menuTariffazione.mouseout(function() {
  tariffazioneHidden.removeClass("active");
});

// Funzioni Mouse-Over e Mouse-Out per il menu 'Conti'
menuConti.mouseover(function() {
  contiHidden.addClass("active");
});

menuConti.mouseout(function() {
  contiHidden.removeClass("active");
});

// Funzioni Mouse-Over e Mouse-Out per il menu 'Prodotti'
menuProdotti.mouseover(function() {
  prodottiHidden.addClass("active");
});

menuProdotti.mouseout(function() {
  prodottiHidden.removeClass("active");
});
