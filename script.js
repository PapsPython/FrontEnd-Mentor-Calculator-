let billCheque = 450;
let billEl = document.getElementById("billPple");
let numberPeople = 5;
let tipEl = document.getElementById("tip_el");
let TipPerEl = document.getElementById("totPers_el")

billEl.textContent = billCheque;

function reset(){
  tipEl.textContent = "$" + ""+ 0.00
  TipPerEl.textContent = "$" + ""+ 0.00
}

function five_percent() {
  billCheque
  numberPeople
  totalTipAmt = ((5 / 100) * billCheque)
  totalTipPerp=totalTipAmt/ numberPeople
  TipPerEl.textContent = "$" + "" + totalTipPerp 
  totalTip = totalTipAmt + billCheque 
  totalTip
  tipPerson = totalTip / numberPeople
  tipEl.textContent="$" +""+ tipPerson
  return tipPerson
}


function ten_percent() {
  billCheque
  numberPeople
  totalTipAmt = ((10 / 100) * billCheque)
  totalTipPerp=totalTipAmt/ numberPeople
  TipPerEl.textContent = "$" + "" + totalTipPerp 
  totalTip = totalTipAmt + billCheque 
  totalTip
  tipPerson = totalTip / numberPeople
  tipEl.textContent="$" +""+ tipPerson
  return tipPerson
}


function fifteen_percent() {
  billCheque
  numberPeople
  totalTipAmt = ((15 / 100) * billCheque)
  totalTipPerp=totalTipAmt/ numberPeople
  TipPerEl.textContent = "$" + "" + totalTipPerp 
  totalTip = totalTipAmt + billCheque 
  totalTip
  tipPerson = totalTip / numberPeople
  tipEl.textContent="$" +""+ tipPerson
  return tipPerson
}


function twentyfv_percent() {
  billCheque
  numberPeople
  totalTipAmt = ((25 / 100) * billCheque)
  totalTipPerp=totalTipAmt/ numberPeople
  TipPerEl.textContent = "$" + "" + totalTipPerp 
  totalTip = totalTipAmt + billCheque 
  totalTip
  tipPerson = totalTip / numberPeople
  tipEl.textContent="$" +""+ tipPerson
  return tipPerson
}


function fifty_percent() {
  billCheque
  numberPeople
  totalTipAmt = ((50 / 100) * billCheque)
  totalTipPerp=totalTipAmt/ numberPeople
  TipPerEl.textContent = "$" + "" + totalTipPerp 
  totalTip = totalTipAmt + billCheque 
  totalTip
  tipPerson = totalTip / numberPeople
  tipEl.textContent="$" +""+ tipPerson
  return tipPerson
}

