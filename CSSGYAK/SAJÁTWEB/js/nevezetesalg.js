/*szám = következő elem
összeg = összeg + szám
CIKLUS VÉGE
*/
let számTömb = [1, 3, 2, 1, 7, 4, 9, 6];
let össz = 0;
for (let i = 0; i < számTömb.length ; i++ ) {
  össz += számTömb[i];
}
console.log ("Végösszeg :", össz);
/*






SZÁMLÁLÁS ALORITMUSA


db = 0
CIKLUS AMÍG van még szám, ADDIG
szám = következő elem
HA igaz a feltétel szám-ra, AKKOR
db = db + 1
FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let db = 0;
for (let i = 0; i < számTömb.length; i++) {
    if ( számTömb[i] % 2==0 ) {
      db++;}
}
console.log ("Páros számok összesen :", db, "darab.");
/*






SZÉLSŐÉRTÉK ALGORITNUSA


legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
szám = következő elem
HA szám < legnagyobb, AKKOR
  legnagyobb = szám
FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let legnagyobb = számTömb[0];
    for (let i = 0 ; i < számTömb.length; i++) {
    if (számTömb[i] > legnagyobb) {
      legnagyobb = számTömb[i];
    }
  }
  console.log("A legnagyobb szám :", legnagyobb);








  /*
ELDÖNTÉS ALGORITMUSA





találat = HAMIS
CIKLUS AMÍG van elem ÉS találat = HANIS
szám = következő elem
HA igaz a feltétel szám-ra, AKKOR
  találat = IGAZ
FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let találat = false;
  for (let i = 0 ; i < számTömb.length && !találat; i++) {
    if (számTömb[i] = 5) { találat = true }
  }
console.log("Van 5-ös?", találat);
