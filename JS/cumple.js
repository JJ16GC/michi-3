$(function () {
  var flame = $("#flame");
  var txt = $("h1");

  flame.on({
    click: function () {
      flame.removeClass("burn").addClass("puff");
      $(".smoke").each(function () {
        $(this).addClass("puff-bubble");
      });
      $("#glow").remove();
      txt.html("Feliz <b>Cumpleaños</b> Michi... <a href='cartacumple.html'>Ver Carta 💌</a>");
      $("#candle").animate(
        {
          //'opacity': '.5'
        },
        100
      );
    },
  });
});
