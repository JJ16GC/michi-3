function currentTime() {
  let date = new Date();
  let diae = date.getDate();
  let mese = date.getMonth()+1;
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let fecha = "Errorxd";
  let reloj = "Errorxd";
  titulo = "Error";
  let fecha1 = moment("2022-10-12");
  let diaespecial = fecha1.date();
  let fecha2 = moment(date);
  let diferencia = fecha2.diff(fecha1, "days");
  let time = hh + ":" + mm + ":" + ss;
  let diferenciames = fecha2.diff(fecha1, "month");

  /* DIA ESPECIAL */

  if (diae == diaespecial) {
    ani = "<button id='boton'><a href='#'>No disponible</a></button>";
    fecha = "Feliz año :'3<br> ";
    //fecha = "Felices " + diferenciames + " meses :'3<br> ";
    titulo = "Feliz Aniversariooo :3";
    reloj = "<a href='galeria.html'>Ver Galeria 7u7</a>";
  } else {
    /* */
    ani = "Y contando... ";
    fecha = "" + diferenciames + " MESES<br> " + diferencia + " DÍAS ";
    reloj = time;
    titulo = "<a style='color:cyan'>Te Amo Tontaaaa 7u7 ❤️</a>";
  }

  if (9 == diae && 3 == mese ) {
    ani = "<button id='boton'><a href='cartacumple.html'>Ver Carta Cumpleaños💌</a></button>";
    fecha = "<a style='color:cyan;' href='cubo.html'>Regalo:3</a>";
    titulo = "Feliz Cumpleaños mi amoooor!!!";
    reloj = "<a href='galeria.html'>Ver Galeria 7u7</a>";
  }

  let watch = document.querySelector("#watch");
  let watch2 = document.querySelector("#figura");
  let watch3 = document.querySelector("#mensaje");
  let watch4 = document.querySelector("#titulo");

  watch.innerHTML = fecha;
  watch2.innerHTML = reloj;
  watch3.innerHTML = ani;
  watch4.innerHTML = titulo;
}

setInterval(currentTime, 1000);
