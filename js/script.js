var menuAzienda = $(".azienda");
var aziendaHidden = $(".hidden-menu");

menuAzienda.mouseover(function() {
  aziendaHidden.addClass("active");
});

menuAzienda.mouseout(function() {
  aziendaHidden.removeClass("active");
});
