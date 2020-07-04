var tobbszoros = [
    ['Válassz'],
    ['Válassz',1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    ['Válassz',2,4,6,8,10,12,14,16,18,20],
    ['Válassz',3,6,9,12,15,18],
    ['Válassz',4,8,12,16,20],
    ['Válassz',5,10,15,20],
    ['Válassz',6,12,18],
    ['Válassz',7,14],
    ['Válassz',8,16],
    ['Válassz',9,18],
    ['Válassz',10, 20]
]
function setOptions(select, options)
{
    select.options.length = 0;
    var i;
    var index=0;
    for (i in options) //asszociatív tömb indexét is megtartja
    {
            if (index >= options.length)
            {
                    //objektum tulajdonságokat már ne listázza
                    break;
            }
            select.options[index++] = new Option(options[i],i);
    }
}

function modSelect()
{
    var szamok = document.getElementById('szamok');
    var selindex = szamok.selectedIndex;
    if(tobbszoros[selindex] != undefined)
    {
            setOptions(document.getElementById('tobbszoros'),tobbszoros[selindex]);
    }
}
document.getElementById('szamok').onchange = modSelect;