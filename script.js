let resultat = create("p");
resultat.innerHTML = 0;

let input = create("input");
input.value = 0;

let plus = create("button");
plus.innerHTML = "+";
plus.onclick = udregnPlus;

let minus = create("button");
minus.innerHTML = "-";
minus.onclick = udregnMinus;

let gange = create("button")
gange.innerHTML = "*";
gange.onclick = udregnGange;

let dividere = create("button");
dividere.innerHTML = "/";
dividere.onclick = udregnDividere;

let kvadrat = create("button");
kvadrat.innerHTML = "kvadratrod";
kvadrat.onclick = udregnKvadrat;

let backspace = create ("button");
backspace.innerHTML = "backspace";
backspace.onclick= udregnbackspace;



function udregnPlus() {
  resultat.innerHTML = Number(resultat.innerHTML) + Number(input.value);
  check();
  input.value = 0;
}

function udregnMinus() {
  resultat.innerHTML = Number(resultat.innerHTML) - Number(input.value);
  check();
  input.value = 0;
}

function udregnGange() {
  resultat.innerHTML = Number(resultat.innerHTML) * Number(input.value);
  check();
  input.value = 0;
}

function udregnDividere() {
  resultat.innerHTML = Number(resultat.innerHTML) / Number(input.value);
  check();
  input.value = 0;
}

function udregnKvadrat() {
  resultat.innerHTML = Number(Math.sqrt(resultat.innerHTML));
  check();
  input.value = 0;
}


function check(){
  if (isNaN(resultat.innerHTML)){
    resultat.innerHTML = 0;
   }
}

function udregnbackspace (){
  resultat.innerHTML = "0" ; 

}
function create(type) {
  return document.body.appendChild(document.createElement(type));
}
