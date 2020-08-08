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



Mikor mi a this?
A globalis objektumot jelenti, ami álatalában a window:
Hol: a js fájl gyökerében, függvényekben.

console.log( this ); // window
Szóval ha csak úgy simán lekéred a js dokumentum gyökeréban akkor a legfelső szintű objektum lesz, ami a böngészőben a window.

A szülő objektumot jelenti:
Hol: metódusban.

let product = {
  price: 2000,
  showPrice: function() {
    return `${this.price} Ft`;
  }
}
Azt az elemet jelenti, amelyre végbement az esemény:
Hol: az eseménykezelő függvényben.

<button onclick="this.style.display='none'"> Click to Remove Me! </button>
Itt a this a button lesz.


Objektum - Metódusok:



let user = {
  "_id": "5cda967e7dc7132184fca4c7",
  "index": 0,
  "guid": "12f9f283-c1fb-475e-9e4d-fdddb30c970c",
  "isActive": true,
  "balance": "$1.234.567.890",
  "picture": "http://placehold.it/32x32",
  "getBalance": function(currency = "$") {
    return `${currency} ${this.balance}`;
  }
}

user.balance = 1234567890;

user.minusBalance = function(minusz) {
    this.balance -= minusz;
}

user.plusBalance = function(plus) {
    this.balance += plus;
}



                   
str = user.balance.toString (); 
let array = [];         
function toArr (array) {
    for (let i = 0; i < str.length; i++) {
    array[i] = str.slice(-(i+1));
    console.log(array[i]);
}
};
toArr(array);    



/*
function formaturrency () {
    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(user.balance));

}*/

let number = 123456789;
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  formatter.format(number);
  
/*



   -----------------D   O   M------------------------


   Element bővítése
Az objektumoknál már tanultuk, hogy lehet bővíteni őket. De egy bizonyos prototype-juk, 
azaz tervrajzuk vagy prototípusuk is. Minden új elem ez alapján a prototípus alapján készül. 
Így ha szeretnéd az összes HTML elemet felruházni egy új képességgel, akkor ezt a prototype-ban kell létrehoznod.

Például lehet bővíteni az Element-et valamilyen metódussal:

let input = document.querySelector('input');
Element.prototype.setDisabled = function() {
  this.setAttribute('disabled', 'disabled');
  this.classList.add('disabled');
}

input.setDisabled();
Ez azért nem kicsit durva, nézzük át mégegyszer:

Először megkeresem az inputot és elmentem az input nevű változóba.
Bővítem az Element prototípusát egy új metódussal, a neve setDisabled lesz.
Amikor meghívják, a this az az element lesz, ami után írják a metódus nevét.
Beállítom az attribútumot és hozzáadok egy osztályt is az osztálylistához.
Végül meghívom az adott elemre.




For - a legjobb választás
Láttuk, hogy a querySelectorAll metódus visszaadja az összes elemet egy tömbben. Igen ám, de nem minden tömb, ami annak látszik.

NodeList: Ugyanis amit visszaad, az okosabb, mint egy tömb. Ezért vigyázni kell, ha végig akarsz menni az elemein, 
mert könnyen találkozhatsz olyannal, 
amelyikre nem működnek az ismert trükkök, mondjuk a setAttribute.

De a length tulajdonság a segítségünkre siet:

const myNodelist = document.querySelectorAll("p");
let i;
for (i = 0; i < myNodelist.length; i++) {
  myNodelist[i].style.backgroundColor = "red";
}
Semmi különös nem történt, csupán egy for ciklussal bejártam a NodeList elemeit, amelyek ebben a konkrét példában <p></p> elemek. 
A ciklusban pedig a háttérszínét mindegyiknek beállítottam pirosra.

For...in - ha ragaszkodsz hozzá?!
Ha mégis ragaszkodsz a jó öreg for...in ciklushoz, azzal is dolgozhatsz, de ebben az esetben precízen ellenőrizd le, 
hogy helyes HTML elemet kaptál-e!

Ebben segítek neked a példában:

var myNodelist = document.querySelectorAll("p");
for (var k in myNodelist) {
  if (myNodelist[k].style) {
    myNodelist[k].style.backgroundColor = "red";
  }
}
Leellenőriztem, hogy van-e olyan tulajdonsága a myNodelist k kulcsú elemének, hogy style. Ha van, akkor beállítom a háttérszínt, 
ha nincs akkor nem hivatkozok rá mert hibát kapnék.


*/

function massModify (selector, attribute, value) {
      nodeList = document.querySelectorAll(selector);
      for (let i = 0 ; i < nodeList.length; i++) {
        nodeList[i][attribute] = value;
      }
}
massModify("input", "title", "Rendelsz, vagy renderelsz ?");

/*
Módosítás függvénnyel - a helyzet fokozódik
Lépések:

Készíts egy függvényt.
Add át neki a szelektort, a tulajdonság nevét és értékét.
A függvényben végigjárod az elemeket, és módosítod a tulajdonságot.
Végül valamit vissza is adsz a kíváncsiak kedvéért.
function massModify(selector) {
  var divs = document.querySelectorAll(selector);
  for (var k in divs) {
    if (divs[k].setAttribute) {
      divs[k].setAttribute('style', 'color: red');
    }
  }
  return true;
}

massModify('.mass');





MAP
*/


var numbers = [4, 0, 16, 25];

function myFunction() {
  x = numbers.map(Math.sqrt);
  console.log(x);
  console.log(numbers[2]);
}



var persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];


function getFullName(item) {
  var fullname = [item.firstname,item.lastname].join(" ");
  console.log(fullname);
  return fullname;
}


/*

FILTER

*/

var ages = [32, 33, 17, 40, 20, 16];

function checkAdult(age) {
  return age >= 18;
}
console.log(ages.filter(checkAdult));


function checkAdult2(age2) {
  return age2 %2;
}
console.log(ages.filter(checkAdult2));

let helptext = document.createElement("small");
helptext.className = "form-text text-muted";
helptext.innerHTML = "Kérem, adjon meg feltétet!";
let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helptext);
/*
parent.removeChild(helptext);
*/



/*
let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.onclick = function () {
  alert("Hello JS!");
}*/

/*
let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.onclick = calcAmount;   /*  nem kell mehívni a függvényt ()  !!!!!!    */


let sendButton = document.querySelector("form .btn.btn-primary");
sendButton.addEventListener("click", function () {
  alert("Hello JS!");
});                                /*    hozzáad egy újabb függvényt, a többi is lefut !!!!  */



/*

window.addEventListener("resize", function () {
    console.log(this.innerHeight, this.innerWidth);          /* nem = jel, ezért nem kell az "on" előtag !!!  
});



Window események

A közös bennük, hogy nem felhasználói beavatkozásra történnek meg, 
hanem a böngésző működése váltja ki őket. Nem csak a window -ra lehet őket megadni, a legtöbb elem esetén használhatóak.

A fontosabbak:

onload az objektum betöltődött
onresize az objektumot átméretezték
onscroll scrolloztak az objektumon





EGÉR   ÉS   ÚRLAP ESEMÉNYEK
*/

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener ("submit", function(ev) {              /*gombot is "submit"-re állítani !!!!  */
  ev.preventDefault();
  
  let inputs = this.querySelectorAll("input");
  let values = {};
  for ( let i = 0 ; i < inputs.length; i++) {
    values[inputs[i].name] = inputs[i].value;
  }
  console.log(values)
});




/*  ELTÜNTETI AZ ELEMET 

Ebból kiemelve a függvényt

let alertCloseButtons = document.querySelectorAll('.close[data-dismiss="alert"]');
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", function(ev) {
        this.parentElement.style.display = "none";
    }); 
  }
    kapom pl. ezt:
  */
  
  
  let alertCloseButtons = document.querySelectorAll('.close[data-dismiss="alert"]');
  
  let alertCloseEvent = function(ev) {
          this.parentElement.style.display = "none";
  };
    

  for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEvent);
  }

  /*

  parentNode vs. parentElement
parentNode: az adott elem szülő node-ját adja vissza, mely lehet Element vagy gyökérelem esetén a document.

parentElement: az adott elem szülő elemét adja vissza, mely mindig egy Element, vagy gyökérelem esetén null.

Fontos különbség van a node és az element között. A Node egy csomópont a dokumentumban, lehet egy egyszerű textNode is, 
ami nem valódi HTML Element. Mert minden Element node, de nem minden node element :)

document.body.parentNode; // <html>
document.body.parentElement; // <html> element
Munka a szülőkkel
A példában elrejtem a span szülőjét a kíváncsi tekintetek elől:

<div>
  <span onclick="this.parentElement.style.display = 'none';">x</span>
</div>
Kattintásra a div-nek fogja a style.display tulajdonságát "none"-ra állítani. Tehát a kattintott elem szülőjének.

*/

/*

    SWITCH

    */

    
    let weekDay = new Date().getDay();
    let dayName = "";
    /*    weekDay=8;    ---   ismeretlen   */
    switch (weekDay) {
      case 0: dayName="Vas";
      break;
      case 1: dayName="Hét";
      break;
      case 2: dayName="Ked";
      break;
      case 3: dayName="Sze";
      break;                               /*   break kell, mert az első egyezéstől végrehajtja a többit is !!!!  */
      case 4: dayName="Csü";
      break;
      case 5: dayName="Pén";
      break;
      case 6: dayName="Szo";
      break;
      default: dayName="ismeretlen"
    }

    console.log(dayName);



    /*
       WHILE        DO    ...    WHILE

While ciklus
Ahogy a neve is mutatja, mindaddig fut amíg a megadott feltétel igaz. Egy paramétere van, ami egy logikai kifejezés, 
ennek kell igaznak lennie, hogy a ciklus újra lefusson.

Használata
Paraméterei:

feltétel: egy logikai kifejezés.


      Végtelen ciklus
A while ciklus használata esetén gyakran előfordul, hogy a feltételt nem figyeljük megfelelően. Ekkor fordul elő, 
hogy a feltétel mindig igaz marad, és a ciklus végtelen hurokba kerül. A különböző értelmezők általában bizonyos számú futás után hibát adnak 
és leállnak, vagy lefagy a felület, mint például az alábbi esetben is.

Mindig figyelj oda a feltétel megfelelő frissítésére!
Az alábbi példa egy végtelen ciklust mutat be.

A probléma az, hogy a feltételt elfelejtettem módosítani a ciklusmagban (persze direkt):

      Kollekciók bejárása
      Természetesen a while ciklus is alkalmas arra, hogy tömböket vagy objektumokat járj be a segítségével. 
      Itt viszont nem kapsz semmi segítséget ehhez, 
      neked kell leprogramoznod a kulcsok léptetését.
      
      A példában kiolvasom a kulcsokat, majd bejárom az objektumot, közben pedig növelem az iterátort, 
      ami alapján előállítom a kulcsokat:
      
      While iterator
      
      do while - hátultesztelő ciklus
      Az elöltesztelős ciklusoknál megfigyelhettük, hogy először a feltétel vizsgálata történik meg, 
      majd utána a kiértékelés eredményétől függően a ciklusmag futtatása. Ezzel szemben a hátultesztelős ciklus először lefuttatja a ciklusmagot, 
      és csak utána vizsgálja meg a feltételt. A gyakorlatban ez a következőképp fest:
      
      var i = 10; do {
        console.log(i);
        i++;
      }
      while ( i < 0 );
      A fenti esetben a konzolra kiírja a program, hogy 10, ugyanis a hátultesztelős ciklus lényege, hogy akár igaz a feltétel, 
      akár hamis, egy alkalommal biztosan le fog futni.
      */
     let i = 10;
     do {
       console.log(i);
       i++;
     }
     while (i<0);


     /*

     FIX SELECT BEVITELI MEZŐ

     */

     toppings = [
       "Szalonna",
       "Extra hagyma",
       "Tükörtojás",
       "Libamáj",
       "Extra sonka"
     ];

     toppingSelect = document.querySelector("#topInput");
     let index = 0;
     while (index < toppings.length) {
       let option = document.createElement("option");
       option.value = index;
       option.innerHTML = toppings[index];
       toppingSelect.appendChild(option);
       index ++;
     };






