$(function()
{
  var flame = $('#flame');
  var txt = $('h1');

  flame.on(
  {
    click: function()
    {
      flame.removeClass('burn').addClass('puff');
      $('.smoke').each(function()
      {
        $(this).addClass('puff-bubble');
      });
      $('#glow').remove();
      txt.html("Feliz <b>Cumpleaños</b> Tupida...").delay(2750).fadeOut(300);
      $('#candle').animate(
      {
        //'opacity': '.5'
      }, 100);
    }
  })   
});