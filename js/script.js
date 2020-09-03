var menuAzienda = $(".azienda");
var aziendaHidden = $(".hidden-menu.a");
var menuTariffazione = $(".tariffazione");
var tariffazioneHidden = $(".hidden-menu.t");

menuAzienda.mouseover(function() {
  aziendaHidden.addClass("active");
});

menuAzienda.mouseout(function() {
  aziendaHidden.removeClass("active");
});

menuTariffazione.mouseover(function() {
  tariffazioneHidden.addClass("active");
});

menuTariffazione.mouseout(function() {
  tariffazioneHidden.removeClass("active");
});
