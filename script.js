
let tipEl = document.getElementById("tip_el")
let TipPerEl = document.getElementById("totPers_el")
let x = 0;




function TipPaymnts(x) {
  let billCheque = document.getElementById("billAmt").value;
  billCheque

  let numPeople = document.getElementById("numPeople").value;
  numPeople

  totalTipAmt = ((x / 100) * billCheque)

  totalTipPerp = Math.round(totalTipAmt / numPeople)

  TipPerEl.textContent = "$" + "" + totalTipPerp

  totalcashCost = totalTipAmt + Number(billCheque)
  tipPerson = Math.round(totalcashCost / numPeople)
  tipEl.textContent = "$" + "" + tipPerson
  return tipPerson
}


function five_percent() {
  TipPaymnts(5)
}


function ten_percent() {
  TipPaymnts(10)

}



function fifteen_percent() {
  TipPaymnts(15)
}


function twentyfv_percent() {
  TipPaymnts(25)
}


function fifty_percent() {
  TipPaymnts(50)
}

function custom_percent() {
  custom_percent_value = document.getElementById("custom_percent").value;
  TipPaymnts(custom_percent_value);
} 

function reset() {
  tipEl.textContent = "$" + "" + 0.00
  TipPerEl.textContent = "$" + "" + 0.00
  document.getElementById("billAmt").value = 0

  document.getElementById("numPeople").value = 0
}

