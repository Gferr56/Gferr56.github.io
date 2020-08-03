/*

Többdimenziós tömbök
Ezeknél egy tömböt egy másik tömbbe ágyaznak. Úgy képzeld el, mint egy Excel táblát,
 ahol a sorok a külső tömb elemei, a belső tömbök pedig a cellákat tartalmazzák.

Például:

var arr = [true, ['elso', 'masodik', 'harmadik'], 'Joe'];
A példában a tömb második eleme szintén egy tömb.
A beágyazott tömb második elemének elérése:

arr[1][1]




isArray(), tömb azonosítása
A munkád során előfordul, hogy meg kell állapítanod egy változóról, hogy Array típusú-e? A typeof utasítás a tömböket Object típusúnak ismeri fel,
ezért nem alkalmas az azonosításukra. Erre a célra 
az Array objektum isArray metódusa szolgál. Ha megadsz neki egy változót, akkor megállapítja, hogy tömb-e?

A példában a tömb esetén true értéket kapsz vissza, ami azt jelenti hogy igaz - azaz tömbbel van dolgod. Ellenkező esetben az eredmény false - hamis -
 azaz nem tömböt adtál át az isArray metódusnak:

 */


 let cars = ["Volvo", "Audi", "VW"];
 cars.push("Trabant");  
 /*
 4 elem lett, a végéhez adja.
 
 
 cars
 
 > (4)  ["Volvo", "Audi", "VW", "Trabant"];
 
 cars.pop()
 
"Trabant"

cars

> (3)  ["Volvo", "Audi", "VW"];



unshift()

A push()-hoz hasonlóan működik, csak a tömb elejére ad hozzá új elemet, 
azaz eggyel hátrébb tolja az elemeket. Hatására minden meglévő tömbelem indexe eggyel nőni fog.

FONTOS: módosítja az eredeti tömböt.


shift()

Ez pedig a pop() párja, egy elemet kivesz a tömb elejéről, és a többit eggyel előre tolja.
Hatására minden meglévő tömbelem indexe eggyel csökkenni fog.

FONTOS: módosítja az eredeti tömböt.




slice()

cars.slice(0,2)   2-ig, a 2. már nincs benne!!

>  ["Volvo", "Audi"]

cars

> (3)  ["Volvo", "Audi", "VW"];


A tömböt vágja. Két számot vár, start és end a nevük.

start: azt adja meg, hogy hol kezdje a vágást. Ha 0, akkor a tömb elején kezdi, ha mínusz szám, akkor hátulról fogja számolni.
end: azt adja meg hogy melyik elemnél fejezze be a vágást. Ugyanazok igazak rá, mint a startra.

FONTOS: nem módosítja az eredeti tömböt, hanem egy új tömbbel tér vissza.



splice()


A slice-szal ellentétben nem csak kivenni lehet elemeket vele, hanem hozzá is lehet adni a tömbhöz.

A szintaxisa a következő:

array.splice(index, howmany, item1, ....., itemX)

cars.splice(1, 0, "Trabant", "Barkas", "Wartburg")

> []

cars

> (6)  ["Volvo", "Trabant", "Barkas", "Wartburg", "Audi", "VW"];


Paraméterei:

index: kötelező, azt adja meg hogy honnan induljon a vágás, olyan mint a slice esetén.
howmany: azt adja meg, hogy hány elemet akarsz eltávolítani.
item1, ..., itemX: azok az elemek, amiket az eltávolított elemek helyére akarsz tenni. 
Nem kötelező megadni, akkor csak eltávolítás lesz, hozzáadás nem.

FONTOS: nem módosítja az eredeti tömböt, hanem egy új tömbbel tér vissza.

Megjegyzés: a splice művelet után a fruits tömb így fog kinézni: ["Banana","Orange","Lemon","Kiwi","Apple","Mango"]. 
Azért mert nem vettünk ki egy elemet sem és a 2 indexűtől (azaz a harmadiktól), "Lemon"-tól kezdődően beszúrtam két új elemet.


join()

cars.join(", ")

"Volvo, Trabant, Barkas, Wartburg, Audi, VW"


A tömbből String-et készít, az elemeket vesszővel elválasztva fűzi egymás után.

FONTOS: nem módosítja az eredeti tömböt, hanem egy új String-gel tér vissza.
*/

