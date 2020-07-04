
szamok = 1;
function Tart(sel){
    
    var szamok = document.getElementById('days');
    var selindex = szamok.value;
    if (selindex=0){
        idő = "Hétfő";
    }
    else{
        idő = "Nem hétfő";
    }
}
Tart();
console.log(idő);