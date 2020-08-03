/*
Primitívek átadása érték szerint:

Kis ismétlés:

Primitív változó típusok: Boolean, Number, String, Undefined, Null.

Tehát a következő szabályok rájuk vonatkoznak.

Paraméter átadás érték szerint: a primitív típusokat másolja a js. Azaz, amikor átadsz egy ilyen változót a függvénynek, 
akkkor egy másolatot készít az eredetiről és azzal dolgozik.
*/
let varOne = 10;
let varTwo = 20;
console.log("A függvény hívása előtt");
console.log("varOne =" + varOne +"varTwo =" +varTwo);

function callByValue(varOne, varTwo) {
    varOne = 100;
    varTwo = 200;
    console.log("A függvényen belül");
  console.log("varOne =" + varOne +"varTwo =" +varTwo);
}

callByValue(varOne, varTwo);
console.log("A függvény hívása után");
console.log("varOne =" + varOne +" varTwo =" +varTwo);



/*
Na, kitalálod mi lesz ennek a kimenete? Nem kell, én megmondom:

A függvény hívása előtt: varOne = 10, varTwo = 20
A függvényen belül: varOne = 100, varTwo = 200
A függvény hívása után: varOne = 10, varTwo = 20
Miért ez a kimenet?

Létrehoztam a varOne és varTwo változókat 10 és 20 értékekkel.

Amikor átadtam őket a függvénynek, akkor kiolvasta az értéküket, és ahogy a paraméterlistában
 megadtam callByValue(varOne, varTwo) azon a néven létrehozott két lokális változót a függvényben 
 és az eredeti értékeket bemásolta ebbe az két új változóba. Amikor kiíratom a függvényben az értékeket, látszik hogy megváltoztak.
Mégis amikor az eredeti értékeket újra kiíratom a függvényhívás után, azok változatlanok maradnak.
 Azért mert nem az eredeti változókkal dolgozik a függvény, csak a másolatukkal.

A JS a  primitív változókat érték szerint adja át a függvénynek!!!!!






Objektumok átadása referencia szerint
Mit nevezek itt objektumoknak? Azokat a változókat, amelyek nem primitív típusok. Itt elsősorban a már tanult tömbökre
gondolok és lesznek még az Object típusok, amelyeket hamarosan megismersz.

Tehát a következő szabályok rájuk vonatkoznak.

Paraméter átadás referencia szerint: az objektumokat nem másolja a js. Minden változónak van egy címe a memóriában.
Amikor egy objektumot kap a függvény, akkor létrejön egy új név a lokális váltoozónak, de a memóriacím ahova mutat, az ugyanaz lesz.
Tehát két különböző néven ugyanazt a változót éred el.*/
let varArray = [10];
console.log("Függvényhívás előtt");
console.log(varArray);

function callByReference(arr) {
    arr[0] = 100;
    console.log("Érték a függvényen belül");
    console.log(arr);
}

callByReference(varArray);
console.log("Függvényhívás után");
console.log(varArray);

/*
Na, kitalálod mi lesz ennek a kimenete? Nem kell, én megmondom:

Függvényhívás előtt: [10]
Érték a függvényen belül: [100]
Függvényhívás után: [100]
Miért ez a kimenet?

Létrehoztam a varArray tömböt [10] értékkel.
Amikor átadtam a függvénynek, szándékosan más nevet választottam a lokális változónak: arr, mivel az teljesen mindegy, 
hogy mi a neve a függvényen belül. A függvényben megváltoztattam a 0 indexű elemet és kiírtam. Látszik, hogy meg is változott.
Most jön a meglepetés: amikor az eredeti tömböt újra kiíratom a függvényhívás után, is megváltozott. Azért mert az eredeti változó
 refernciájával dolgozik, tehát ugyanazt a helyet módosítja a memóriában.
Előnyei:

A függvényre nézve globális objektumokat is könnyen tudsz módosítani.
Takarékoskodik a memóriával, mivel nem foglal új memóriaterületet mint a másolásnál.
Hátrányai:

Viszont az átadott objektumokat akaratodon kívül módosíthatod...
*/

