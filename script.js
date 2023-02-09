function currentTime() {
  let date = new Date();
  let dia = date.getDate();
  let mes = date.getMonth() + 1;
  let año = date.getFullYear();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let fecha1 = moment("2022-10-12");
  console.log(fecha1);
  let fecha2 = moment(date);
  let diferencia = fecha2.diff(fecha1, "days");
  let time = hh + ":" + mm + ":" + ss;
  let diferenciames = fecha2.diff(fecha1, "month");
  let fecha = diferencia + " DIAS A TU LADO";
  let reloj = time;

  let watch = document.querySelector("#watch");
  let watch2 = document.querySelector("#figura");
  watch.innerHTML = fecha;
  watch2.innerHTML = reloj;

}

setInterval(currentTime, 1000);
