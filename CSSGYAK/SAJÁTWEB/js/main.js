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
/*






*/



