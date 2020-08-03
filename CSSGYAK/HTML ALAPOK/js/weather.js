var jel = " C° :  "


var temperaturesW = [];
temperaturesW = [-18.3, 33, -5.4, 18, 74, -78, 118];

var limitTemp = [];
limitTemp = [0, 15, 20, 25, 77];

var ajánlat =[];
ajánlat = ["Forró csoki esetleg?    ", "Meleg tea, vagy GROG?       ", "Finom friss süti?       ", "Pár gombóc fagyi?            ",
 "Jéghideg limonádé, extra jéggel?", "Jéghideg limonádé, extra jéggel?"];

var theSelect = 0;

var tempDay = 0;

function getData(tempDay) {
    var theSelect = demoForm.demoSelect;
    var value = theSelect[theSelect.selectedIndex].value;
    tempDay = temperaturesW[value];
    
    for (let i = 0 ; i <= limitTemp.length; i++) {
        if (limitTemp[i] < tempDay) {
            continue;
        } else {
            document.getElementById("hő").innerHTML = tempDay + jel + ajánlat[i];
            }
            break;
        }
}

getData();







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