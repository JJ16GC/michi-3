function currentTime() {
  let date = new Date();
  let diae = date.getDate();
  let hh = date.getHours();
  let mm = date.getMinutes();
  hh = moment(hh).format("h");
  let ss = date.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let fecha1 = moment("2022-10-12");
  let diaespecial = fecha1.date();
  let fecha2 = moment(date);

  if (diae == diaespecial) {
    ani = "Es hoy Feliz mes mi amor <br> Me encantas vamos por toda una vida juntitos :3";
  } else {
    ani = "Y contando... ";
  }

  let diferencia = fecha2.diff(fecha1, "days");
  let time = hh + ":" + mm + ":" + ss;
  let diferenciames = fecha2.diff(fecha1, "month");
  let fecha = "" + diferenciames + " MESES<br> " + diferencia + " DÍAS ";
  let reloj = time;

  let watch = document.querySelector("#watch");
  let watch2 = document.querySelector("#figura");
  let watch3 = document.querySelector("#mensaje");

  watch.innerHTML = fecha;
  watch2.innerHTML = reloj;
  watch3.innerHTML = ani;
}

setInterval(currentTime, 1000);
