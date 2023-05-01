/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML =
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " " +
    obj[objIndex] +
    " " +
    when[whenIndex];
  //write your code here
};

  let who = ['Mi Perro','Mi Gata','El Vecino','Mi suegra'];
  let action = ['botó','perdió','quebró','mojó'];
  let what = ['el auto', 'los lentes', 'la cama'];
  let when = ['anoche','antes de ayer','en el almuerzo','en la tarde','a la hora del té'];
  
  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let objIndex = Math.floor(Math.random() * obj.length);
  let whenIndex = Math.floor(Math.random() * when.length);
