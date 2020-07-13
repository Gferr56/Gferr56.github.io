function hambiÁr() {
    let ár = 1000;
    let darab = document.querySelector("input[name='amount-input']");
    let valósDarab = parseInt(darab.value);
    valósDarab = isNaN(valósDarab) ? 0 : valósDarab;
    ÁrTelj(ár, valósDarab);
}
function ÁrTelj(ár=1000, valósDarab=1) {

            let showTelj = document.querySelector("span.show-telj");
            if ( valósDarab > 10 ) {
                alert("Legfeljebb 10 darab rendelhető !")
                }
            else if( valósDarab < 1 ) {
                alert("Legalább 1 darabot rendelj !")
                }
            else {
                let teljes = parseInt(valósDarab * ár);
                showTelj.innerHTML = teljes;
                }

}


/*

RÉGEBBEN CSAK EZEKKEL LEHETETT KERESNI:  ELEMENT "ELEMEKET" AD VISSZA

   1.   document.getElementById("topInput");   hiba esetén null

   2.   document.getElementsByName("amount-input");  --- tömböt ad vissza!
        vagy konkrétan:   document.getElementsByName("amount-input")[0];   undifined   vagy   üres tömböt kapsz hiba esetén

   3.   document.getElementsByClassName("form-group");  -tömböket ad vissza
   
   4.   document.getElementsByTagName("h3");   tömb

   ÚJABBAN:

        document.querySelector(".form-control");   css szelektorral keresünk ez az első találatot adja vissza

        document.querySelectorAll(".form-control");   ez tömbben az összes találatot adja

        alkalmazása pl.:
        let topInput = document.querySelector("input#topInput");   objektumot hoz létre

-------------------------------------------------------------------------------------------------------------------------------
        Saját függvény alkalmazása:
        

        Element.prototype.saját = function() {
            this.style.border = "solid 2px red";
        }
        document.querySelector("input#topInput").saját();


-----------------------------------------------------------------------------------------------------------------------------------------
Ez a példa megkeresi az űrlapelemet a alkalmazásban az űrlapgyűjteményben, és megjeleníti az összes elemértéket:id="frm1"


<h2>Finding HTML Elements Using document.forms</h2>

<form id="frm1" action="/action_page.php">
  First name: <input type="text" name="fname" value="Donald"><br>
  Last name: <input type="text" name="lname" value="Duck"><br><br>
  <input type="submit" value="Submit">
</form> 

<p>Click "Try it" to display the value of each element in the form.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.forms["frm1"];
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}
</script>
-----------------------------------------------------------------------------------------------------------------------------------------------
Ez a példa a következő elemet találja meg:id="intro"



<h2>Finding HTML Elements by Id</h2>

<p id="intro">Hello World!</p>
<p>This example demonstrates the <b>getElementsById</b> method.</p>

<p id="demo"></p>

<script>
var myElement = document.getElementById("intro");
document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is " + myElement.innerHTML;
</script>



------------------------------------------------------------------------------------------------
ATTRIBÚTUMOK:

topInput.getAttribute("id"); "name"   "type" ...  mindig meg kell adni

vagy

topInput.attributes;     minden attribútumot kiír

        VÁLTOZTATÁSHOZ:

                    melyiket    mire
topInput.setAttribute("type", "email");
topInput.setAttribute("type", "password");

---------------------------------------------------------------------------------------------------
PÉLDA:

<head>
<style>
.democlass {
  color: red;
}
</style>
</head>
<body>

<h1>Hello World</h1>

<p>Click the button to add a class attribute with the value of "democlass" to the h1 element.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementsByTagName("H1")[0].setAttribute("class", "democlass"); 
}
</script>


------------------------------------------------------------------------------------------------------
TÖBB ATTRIBÚTUM MEGVÁLTOZTATÁSA:

for ciklus:
*/
let myNodes = document.querySelectorAll("input");

for (let i = 0; i < myNodes.length; i++) {
    myNodes[i].style.backgroundColor = "#eeeeee";
};
/*

for   ...   in   ciklus:

for ( element in myNodes) {
    if (element.style) {   ----     ellenőrizni kell, a color ok, de style is létezik-e?
    element.style.color = "#eeeeee";
    }
};


------
 vagy a length tulajdonság a segítségünkre siet:

let myNodes = document.querySelectorAll("input");
let i;
for (i = 0; i < myNodes.length; i++) {
  myNodes[i].style.backgroundColor = "red";
}


-----------------------------------------------------------------------------------------
MÓDOSÍTÁS FÜGGVÉNNYEL !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

1.  Készíts egy függvényt.
2.  Add át neki a szelektort, a tulajdonság nevét és értékét.
3.  A függvényben végigjárod az elemeket, és módosítod a tulajdonságot.
4.  Végül valamit vissza is adsz a kíváncsiak kedvéért.


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
-------------------------------------------------------------------------------------------

ÉN ADOM MEG          MELYIKET   MIVÉ      MIRE  ...

function sokMódosít(selector, attribute, érték) {
        let nodeList = document.querySelectorAll(selector);
        for ( let i = 0 ; i < nodeList.length ; i++) {
        nodeList[i][attribute] = érték;
        }
};

sokMódosít("input", "placeholder", "érték");   
sokMódosít("input", "title", "érték");


-------------------------------------------------------------------------------------------------
CHILDREN-----------------------------------------------------------------------------------------


document.querySelector("input#topInput").childElementCount

document.querySelector("div").childElementCount

document.querySelector("div.form-group:nth-child(2)").children   HTML elemeket jeleníti meg !!!

document.querySelector("div.form-group:nth-child(2)").childNodes  ---- ez a nem HTML elemeket is lekéri !!!!!!




firstChild|lastChild vs. firstElementChild|lastElementChild

Első vagy utolsó gyerekelem.

element.firstChild az első gyerek, komment vagy szöveg is.
element.firstElementChild csak az Element típusú első gyerek.
element.lastChild az utolsó gyerek, komment vagy szöveg is.
element.lastElementChild csak az Element típusú utolsó gyerek.





-------------------------------------------------------------------------------------------------------------------
--------------------------------------------   ELEM HOZZÁADÁSA  JS   ----------------------------------------------

*/

let helpText = document.createElement("small");    /* egy small osztályú elemet kreálok  */
helpText.className = "form-text text-muted";      /*felruházom a form-text... tulajdonságokkal  */
helpText.innerHTML = "Adja meg a feltéteket !";    /*egy HTML elemben létrehozom a tartalmát  
console.log ( helpText );   /*  ki is irathatom a konzolra    */

let parent = document.querySelector("div.form-group:nth-child(1)");  /*  kijelölöm a szülőt  */
parent.appendChild(helpText);     /*   hozzáadom  a kijelölt szülőhöz  */
/* 


--------------------------------------------------------------------------------------------------------------------------
...............................................   ELEM ELTÁVOLÍTÁSA    ...................................................
*/

/*parent.removeChild(helpText);       el is távolítottuk  */
/* 


---------------------------------------------------------------------------------------------------------------------------
--------------------------------------------  ESEMÉNYEK KEZELÉSE   --------------------------------------------------------*/
/*
let sendButton = document.querySelector("form .btn.btn-primary");         megkerestem a gombot   
sendButton.onclick = function() {                        az esemén a click, de az egyenlőség miatt kell az on előtag !!!
    alert("HEIL MYSELF !");                                    ezzel egy függvényt hajt végte  
}   
                                                        


let sendButton = document.querySelector("form .btn.btn-primary");        megkerestem a gombot   
sendButton.onclick = hambiÁr;                                  még nem hajtom végre, ezért nem kell a ()  !!!!!   


harmadik, jó megoldás:    */

/*
let sendButton = document.querySelector("form .btn.btn-primary"); 
 /* eseményfigyelő            mit    elvégzendő  
 sendButton.addEventListener("click", function() {     /*  nem = , hanem addEvent  ,  nem felülírja !!!!!  nem kell az on...
  alert("HEIL MYSELF !");                                
});
*/
/*
window.addEventListener("resize", function(){
        console.log(this.innerHeight, this.innerWidth);    /*  átméretezésnél a consol-ra kiírja  !!   
});
/*


/*-------------------------------------------------------------------------------------------------------------------
------------------------------------------------    EGÉR ESEMÉNYEK   ------------------------------------------------*/

/*
let orderForm = document.querySelector("#orderForm");   /*  kiválasztja változóba  
orderForm.addEventListener("submit", function(ev) {       /*  ev   átadja az eseményt  
  ev.preventDefault ();                      /*  megelőzi az oldal frissítését, én mondom meg, mit csináljon  
  let inputs = this.querySelectorAll("input");               /*  a this most az űrlap   
  let values = {};
  for (let i = 0 ; i < inputs.length ; i++) {
    values[inputs[i].name] = inputs[i].value;
  } 
  console.log ( values );           
});
*/

/*

onclick kattintás vagy tappintás, ha mobileszközről van szó

onmouseover az elem fölé viszik az egérmutatót (mobilon értelmetlen)

onmouseout az elemről elhúzzák az egérmutatót (mobilon értelmetlen)

Mindegyiket valamilyen konkrét HTML elemre, azaz Element típusú objektumra lehet beállítani, a fent részletezett három mód valamelyikével:

function fillPre(content) {
  document.querySelector('pre').innerHTML = content;
}
let button = document.querySelector('.click-button');
button.addEventListener('click', function(event) {
  var className = this.className;
  fillPre('clicked: ' + className);
});
*/



/*
onchange és onsubmit - form elemek
Fontos értesülnöd róla, ha valaki piszkálja a formot.

onchange input elemek értékének változását figyelheted.
onsubmit a form (űrlap) elküldése előtt fut le, ezt figyelheted vele. Ha az eseménykezelő függvény visszatérési értéke false, akkor az űrlap nem kerül elküldésre.


function fillPre(content) {
  document.querySelector('pre').innerHTML = content;
}
var inputList = document.querySelectorAll('input');
for (var i = 0; i < inputList.length; i++) {
  if (inputList[i].addEventListener) {
    inputList[i].addEventListener('change', function(event) {
      fillPre( this.className + ': ' + this.value );
    });
  }
}
*/





/*--------------------------------------------------------------------------------------------
-------------------------   PARENT ELEMEK   PL ELTÜNTETÉS   --------------------------------*/


let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");   /*  close osztály , data... attribútum  */
let closeFunction = function (ev) {
  this.parentElement.style.display = "none";
};
for (let i = 0 ; i < alertCloseButtons.length ; i++) {
alertCloseButtons[i].addEventListener("click", closeFunction);
}


/*--------------------------WEB PÉLDA-----------------

<p>Example list:</p>

<ul>
  <li id="myLI">Coffee</li>
  <li>Tea</li>
</ul>

<p>Click the button to get the node name of the parent element of the li element in the list.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myLI").parentElement.nodeName;
  document.getElementById("demo").innerHTML = x;
}
</script>
*/


/*-------------------------------------------------------------------------------------
----------------------------    SWITCH     --------------------------------------------


let weekDay = new Date().getDay();
let dayName ='';
switch(weekDay) {
    case 0: dayName = "Vasárnap";
    break;
    case 1: dayName = "Hétfő";
    break;
    case 2: dayName = "Kedd";
    break;
    case 3: dayName = "Szerda";
    break;
    case 4: dayName = "Csütörtök";
    break;
    case 5: dayName = "Péntek";
    break;
    case 6: dayName = "Szombat";
    break;
    default: dayName = "Unknown";
}

*/
/*--------------------------------------------------------------------------------------------
---------------------------------------   WHILE   ------------------------------------------*/

/*

let i = 0;
while( i < 10 ) {
  i++;
  console.log( i ); 
}



vagy pl.

let keys = Object.keys (animal);
i = 0;
while (i < keys.length ) {
    console.log(animal[keys[i]]);
    i++;
}

*/


/*

-------------------------------------------------------------------------------------------------------------------
----------------------------------------------------   DOM  ÉS  CIKLUSOK   --------------------------------------*/

let toppings = [
  "Szalonna",
  "Hagyma",
  "Tükörtojás",
  "Libamáj",
  "Extra sonka"
];
let toppingSelect = document.querySelector("#topInput");  /*kiolvas*/
let index = 0;                            
while(index < toppings.length ) {                     
  let option = document.createElement("option");         /* minden ciklusban egy HTML elem "option" */
  option.value = toppings[index];         /* ennek az elemnek az értéke a feltétek megfelelő indexű eleme */
  option.innerHTML = toppings[index];     /* jelenítse is meg a weboldalban */
  toppingSelect.appendChild(option);    /* hozzáadjuk a toppingSelect változóhoz, mint gyerek */
  index++;      /* növelem a végtelen ciklus miatt */
}


/*
más:

let numbers = [1,2,3,4,5,6];
let i = 0;
let container = document.querySelector("div");
while(i < numbers.length) {
  let p = document.createElement("p");
  p.innerHTML = numbers[i];
  container.appendChild(p);
  i++;
}

*/




