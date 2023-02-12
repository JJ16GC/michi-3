function currentTime() {
  let date = new Date();
  let diae = date.getDate();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let fecha = "Errorxd";
  let reloj = "Errorxd";
  let fecha1 = moment("2022-10-12");
  let diaespecial = fecha1.date();
  let fecha2 = moment(date);
  let diferencia = fecha2.diff(fecha1, "days");
  let time = hh + ":" + mm + ":" + ss;
  let diferenciames = fecha2.diff(fecha1, "month");

  /* DIA ESPECIAL */

  if (10 == 10) {
    ani =
      "<button id='boton'><a href='mensaje.html'>Ver Carta 💌</a></button>";
    fecha = "Holi Amor Felices " + diferenciames + " meses!!!<br> ";
    reloj = "<a href='mensaje.html'>Ver Galeria 7u7</a>";
  } else {
    /* */
    ani = "Y contando... ";
    fecha = "" + diferenciames + " MESES<br> " + diferencia + " DÍAS ";
    reloj = time;
  }

  let watch = document.querySelector("#watch");
  let watch2 = document.querySelector("#figura");
  let watch3 = document.querySelector("#mensaje");

  watch.innerHTML = fecha;
  watch2.innerHTML = reloj;
  watch3.innerHTML = ani;
}

setInterval(currentTime, 1000);
