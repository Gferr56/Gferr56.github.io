var temperaturesWe = [];
temperaturesWe = [-50, 10, 25, 30, 50, 180, -35];

var limitTemp = [];
limitTemp = [0, 15, 20, 25, 77];

var ajánlat =[];
ajánlat = ["Forró csoki esetleg?    ", "Meleg tea, vagy GROG?       ", "Finom friss süti?       ", "Pár gombóc fagyi?            ",
"Jéghideg limonádé, extra jéggel?", "Jéghideg limonádé, extra jéggel?"];

var dayW =[];
dayW = ["Hétfőn : ", "Kedden : ", "Szerdán : ", "Csütörtökön : ", "Pénteken : ", "Szombaton : ", "Vasárnap : "];

var theSelect = 0;

var tempDay = 0;

function getData(tempDay) {
    let jel2 = " C°  ...  ";
    var theSelect = demoForm.demoSelect;
    var value = theSelect[theSelect.selectedIndex].value;
    tempDay = temperaturesWe[value];
    weekDay = dayW[value];
    
    for (let i = 0 ; i <= limitTemp.length; i++) {
        if (limitTemp[i] < tempDay) {
            continue;
        } else {
            document.getElementById("hő").innerHTML = weekDay + tempDay + jel2 + ajánlat[i];
            }
            break;
        }
}


/*

ÁTLAG

function átlagérték () {
    let hetiÁtlag = 0;
    let átlag1 = 0;
    for (i=0 ; i<temperaturesWe.length ; i++) {
        átlag1 = átlag1 + temperaturesWe[i];
        hetiÁtlag = parseInt( átlag1 / temperaturesWe.length );
    }
    document.getElementById("átlag").innerHTML = hetiÁtlag; 
}

átlagérték();


var x = Number.MAX_VALUE;

<script>
var x = Number.MIN_VALUE;
document.getElementById("demo").innerHTML = x;
</script>




ARROW FUNCTION:



Emlékszel még erre:

let people = [
  {
    firstName: "John",
    lastName: "Doe"
  },
  {
    firstName: "Jane",
    lastName: "Doe"
  }
];
let template = `<div> ${people.map(function(person) {
  return `<p> ${person.firstName} ${person.lastName} </p>`;
}).join("")} </div>`;
Egyszerűsítsük:

let people = [
  {
    firstName: "John",
    lastName: "Doe"
  },
  {
    firstName: "Jane",
    lastName: "Doe"
  }
];
let template = `<div>
    ${people.map(person => `<p> ${person.firstName} ${person.lastName}</p>`)
    .join("")} </div>`;
console.log(template); /* <div> <p> John Doe </p><p> Jane Doe </p> </div> */








/*
Ugyanazt kapjuk a kimeneten. De mi is történt? A callback függvényünket átírtuk egy újfajta szintaxisra.

Elhagytuk a function kulcsszót.
Az arrow function mindig anonim lesz.
A paraméter körüli zárójeleket töröltük (EZT CSAK AKKOR TEHETJÜK MEG HA 1 PARAMÉTER VAN!).
Elhagytuk a kapcsos zárójeleket (NEM MINDIG!).
Egy => jelet írunk a paramétere(k) után.
Elhagytuk a return kulcsszót.
Nézzünk egy másik egyszerűbb példát is:

let languages = ["java", "php", "python"];

// Ezt írjuk át:
let scriptsOldStyle = languages.map(function(language) {
  return `${language} script`;
});

// Erre:
let scriptsNewStyle = languages.map(language => `${language} script`);
A fenti példán is jól láthatók a szintaxisbeli különbségek. Nézzünk meg egy példát több paraméterrel:

let languages = ["java", "php", "python"];
let languageRank = languages.map((language, i) => `${i + 1}. ${language} script`);
console.log(languageRank); //  ["1. java script", "2. php script", "3. python script"]
Láthatjuk, hogy több paraméter esetén a zárójeleket ki KELL tennünk. Nézzünk egy példát egy összetettebb függvényre:

let alertMessage = message => {
  alert(`Alert ${message}`);
  console.log(`Alert ${message}`);
};
alertMessage("Message");
Tehát ahogy említettem, ha nem csak egy egyszerű utasításunk van a függvényben, a kapcsos zárójeleket kitesszük, illetve ha nincs kapcsos zárójel az azt jelenti, hogy visszatérési értékünk lesz. Nézzünk még egy érdekes példát arra az esetre, hogy ha a függvénynek egyáltalán nem lenne paramétere:

let infoMessage = () => console.log("Arrow function");
infoMessage();
Nézzünk még egy szép összetett real life példát funkcionális programozási szemléletmóddal így a végére:

Van egy webshopunk, és a html kódból meg kell mondanunk, hogy az általunk árult szerverek összesített ára mennyi:

<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arrow Function Example</title>
  </head>
  <body>
    <ul id="price-list">
      <li>TV</li>
      <li data-company="Dell">Server</li>
      <li data-price="11.012,12">TV</li>
      <li data-price="23.243,55">Server</li>
      <li data-price="4.543,29">TV</li>
      <li data-price="230.323,32">Server</li>
      <li data-price="48.344,30">Server</li>
    </ul>
  </body>
  <script>
    const serverPrice = Array.from(
      document.querySelectorAll('#price-list li[data-price]'))
      .filter(item => item.textContent.includes('Server'))
      .map(item => parseFloat(item.dataset.price.replace('.', '')
      .replace(',', '.')))
      .reduce((total, item) => total + item);
    console.log(serverPrice);
  </script>
</html>
Mindössze annyit teszünk, hogy használjuk a tömb metódusainkat, most már Arrow function-ökkel kombinálva. (Az Array.from() szintén hamarosan kifejtésre kerül, csakúgy, mint az includes(), ami leginkább az indexOf()-ra hasonlít)

Kigyűjtjük egy konstansba a price-list id-jú elemen belül az összes li-t,aminek a data-price attribútuma meg van adva. (Az Array.from()-ról a későbbiekben részletesen.)
Leszűrjük az elemeket, hogy a "Server" szót tartalmazó elemek maradjanak, tehát csak a szerverek árai érdekelnek.
Tömböt készítünk ezen elemek áráról, mely érték már float-tá lesz alakítva (kiszedjük a pontot), és figyelünk a "," karakterekre is, melyeket "."-ra cserélünk.
A kapott összegeket összeadjuk.
Arrow function és a return utasítás
// return: undefined
// Üres blokk, implicit return
(firstName => {})()

// return: 'Hello John'
// Nincs blokk, implicit return
(firstName => 'Hello ' + firstName)('John')

// return: undefined
// explicit return kell a blokkon belül, de Hello hiányzik
(firstName => {'Hello ' + firstName})('John')

// return: 'Hello John'
// explicit return a blokkon belül
(firstName => {return 'Hello ' + firstName})('John')

// return: undefined
// a block egy label-t tartalmaz. Nincs explicit return.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
(firstName => {name: firstName})('John')

// return: {name: 'John'}
// implicit return a ( ) belül, ami egy objektum
(firstName => ({name: firstName}))('John')

// return: name: 'John'
// explicit return a blokkon belül, objektum
(firstName => {return {name: firstName}})('John')
Arrow function és a local binding
A JavaScript fejlesztők élete nem csak játék és mese. Az arrow function-nél nincs local binding. Tehát nincs arguments, this, super, new.target. Ha a arrow function-ön belül megpróbáljuk elérni, akkor a parent scope lesz használva.

Nézzünk egy példát this esetére, és hogy mikor jó nekünk az arrow function e tulajdonsága:*/

/*
  A régi módszer, a this-t beletettük a that-be,
  hogy a setInterval-on belüli callback-ben is elérjük

function People() {
  var that = this;
  that.age = 0;
  setInterval(function setAge() {
    that.age = 30;
  }, 1000);
}

// És most:
function PeopleWithAF() {
  this.age = 0;
  setInterval(() => {
    this.age = 30;
  }, 1000);
}










CURRENCY FORMAT
----------------------------------------------------------------------------------------
Syntax:

FormatCurrency(Expression[,NumDigAfterDec[,
IncLeadingDig[,UseParForNegNum[,GroupDig]]]])



<%

response.write(FormatCurrency(20000,2) & "<br>")
response.write(FormatCurrency(20000,5))

%>

$20,000.00
$20,000.00000

-------------------------------------------------------------------------------------------

*/







/*


0 °C alatt: forró csoki
0 °C - 15 °C: meleg tea
15 °C - 20 °C: finom süti
20 °C - 25 °C: fagyi
25 °C-tól: jéghideg limonádé
Vegyél fel két új tömböt a JavaScript fájlodba! Az első tartalmazza a hőmérséklet kategóriák felső határait,
a második a megjelenítendő ajánlatokat.
 Ez utóbbiakat tedd vendégcsalogató mondatokba!

<form name="demoForm">
            <select name="demoSelect" onchange="showData()">

                <option value="0">Hétfő</option>
                <option value="1">Kedd</option>
                <option value="2">Szerda</option>
                <option value="3">Csütörtök</option>
                <option value="4">Péntek</option>
                <option value="5">Szombat</option>
                <option value="6">Vasárnap</option>
            </select>

            <script>
                function showData() {
                    var theSelect = demoForm.demoSelect;
                    var value = theSelect[theSelect.selectedIndex].value;
                    alert(value);
                }
            </script>
</form>                


*/

/*
CONTINUE  és BREAK



continue : ha valamiért úgy döntesz, hogy mégsem akarod lefuttatni a teljes ciklusmagot,
 akkor a continue utasítással tovább tudsz ugrani a következő iterációra.

break : a break utasítás nem a következő iterációra ugrik, hanem megszakítja a ciklust, 
azaz a ciklusmag többet nem kerül végrehajtásra, úgy is mondhatnánk, a program továbbmegy.

*/


/*

ÖSSZEVONT OPERÁTOROK:


A fontosak, amiket gyakran használsz majd
Hozzáadás: x = x + 10  helyett x += 10
Kivonás: x = x - 10  helyett x -= 10
Osztás: x = x / 2 helyett x /= 2
Modulus (maradék): x = x % 2 helyett x %= 2
Szorzás: x = x * 10  helyett x *= 10
Exotikum (nem kötelező tudni, csak agybővítésre)
Nézzünk egy példát a bitwise azaz bitenkénti és műveletekre. Át kell váltani 2-es számrendszerbe és 32 biten ábrázolni a számokat majd elvégezni rajtuk az and & műveletet:

a 9: 00000000000000000000000000001001
a 14: 00000000000000000000000000001110
ott lesz egy, ahol mindkettőben egy van: 00000000000000000000000000001000
ha ezt visszaváltod 10-es számrendszerbe akkor az eredmény: 8
leírva ha x = 9 és y = 14: x &= y az 8 lesz. Ennyi.





TERNARY OPERATOR


let age = 33;
let voteable = (age < 18) ? "Too young": "Old enough";
console.log( voteable );

Ezt magyarul három operandusos kifejezésnek is szokták hívni.

Szintaxis:
let variablename = (condition) ? value1: value2
Szóval ha a kondíció igaz, akkor az első, ha nem akkor a második érték kerül bele a változóba.

Részei
változó neve: a változó neve
értékadás: = ezt ismered, értéket adunk egy változónak
feltétel: 4 > 5 lehet bármilyen kifejezés, amit Boolean-ként ki lehet értékelni
? a kérdőjel után jön az az érték, ami a kifejezés true értékéhez tartozik
: a kettőspont után épedig az, ami a false értékhez tartozik

            */