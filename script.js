function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let dia = date.getDate();
  let mes = date.getMonth()+1;
  let año = date.getFullYear();

  //hh = hh < 10 ? "0" + hh : hh;
  //mm = mm < 10 ? "0" + mm : mm;
  //ss = ss < 10 ? "0" + ss : ss;

  let fecha1 = moment("2022-10-12");
  let fecha2 = moment(año + "-" + mes + "-" + dia);
  let diferencia = fecha2.diff(fecha1, "days");
  let fecha = diferencia + " DIAS A TU LADO :3";

  //let time = hh + ":" + mm + ":" + ss;
  //let watch = document.querySelector("#watch");
  //watch.innerHTML = fecha;
}

setInterval(currentTime, 1000);
