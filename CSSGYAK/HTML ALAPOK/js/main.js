function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
}


function showSumPrice (price=0, amountNumber=0) {
    amountNumber = amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");
         if ( amountNumber > 10 ) {
             alert("Maximum 10 terméket rendelhet !");
             return;
            } else if ( amountNumber < 1 ) {
             alert("Minimum 1 terméket rendelnie kell !");
            } else {
             let amount = amountNumber * price;
             if (amount < 5000) {
                 amount = amount+500;
             }
             showAmount.innerHTML = amount;
            }
}
    










/*var globalname = "Joe";
function changes () {
    globalname = "Bill";
    console.log(globalname);
}
changes();
console.log(globalname);
*/



/*
Stringek metódusai
trim() : Eltávolítja a felesleges szóközöket, amelyek a String előtt és után találhatóak.
concat() : Új karaktereket fűz hozzá a meglévő Stringhez.
toLowerCase() : Kisbetűssé alakítja az adott Stringet.
toUpperCase() : Az előzővel ellentétben nagybetűssé alakítja a karaktereket.

let title= "Dr. ";
let name = "   Pé  ter   ";
title.concat( name.trim() ).toUpperCase();

let testStr = "Hol a baba?";
testStr.indexOf("baba");
12

testStr.indexOf("kutya");
-1    ---  nincs

testStr.replace("baba", "pénz");
="Hol a pénz"



BOOLEAN

Logikai operátorok
Logikai kifejezésekben a következő operátorokat használhatod:

< kisebb,
> nagyobb,
<= kisebb vagy egyenlő,
>= nagyobb vagy egyenlő,
== megegyező érték,
=== megegyező érték és típus,
!= nem megegyező érték,
!== nem megegyező érték és típus,
! tagadás - logikai érték megfordítása,
&& és,
|| vagy.


10 + "text"     // "10text" - a számot szövegként kezelte
10 + "10"       // "1010" - a számot szövegként kezelte most is, azonban:
10 - "1"        // 9, tehát kivonás esetében számként kezelte
10 + true       // 11, a true-t 1-nek veszi
10 - true       // 9
10 + false      // 10, a false-t 0-nak tekinti
"10" + true     // "10true", a boolean értéket string-nek veszi

*/
