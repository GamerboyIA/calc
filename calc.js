
// --- Number Keys --- //

function one() {
  document.getElementById("screen").innerHTML += "1";
}


function two() {
  document.getElementById("screen").innerHTML += "2";
}


function three() {
  document.getElementById("screen").innerHTML += "3";
}


function four() {
  document.getElementById("screen").innerHTML += "4";
}


function five() {
  document.getElementById("screen").innerHTML += "5";
}


function six() {
  document.getElementById("screen").innerHTML += "6";
}


function seven() {
  document.getElementById("screen").innerHTML += "7";
}


function eight() {
  document.getElementById("screen").innerHTML += "8";
}


function nine() {
  document.getElementById("screen").innerHTML += "9";
}


function zero() {
  document.getElementById("screen").innerHTML += "0";
}

// --- Function Keys --- //

function plus() {
  document.getElementById("screen").innerHTML += "+";
}


function minus() {
  document.getElementById("screen").innerHTML += "-";
}


function divide() {
  document.getElementById("screen").innerHTML += "/";
}


function times() {
  document.getElementById("screen").innerHTML += "*";
}

function power() {
  document.getElementById("screen").innerHTML += "^";
}


function decimal() {
  document.getElementById("screen").innerHTML += ".";
}

function prcnt() {
  document.getElementById("screen").innerHTML += "%";
}

function rtprth() {
 document.getElementById("screen").innerHTML += ")";
}

function lfprth() {
  document.getElementById("screen").innerHTML += "(";
}

function dlt() {
  let screen = document.getElementById("screen");
  let text = screen.innerHTML;
  text = text.substring(0,text.length-1);
  screen.innerHTML = text;
}

function clr() {
 document.getElementById("screen").innerHTML = "";
}

function equal() {
let screen = document.getElementById("screen");
let expression = screen.innerHTML;
expression = expression.replace("^", "**");
let result = eval(expression);
screen.innerHTML += " = <span style='font-size:60px;'>" + result + "</span>";
}

