/*var temperatures = [-15, 10, 30, 40, -5, 55, 110];

let tempUpLims = [0, 15, 20, 25, 50];
tempUpLims = [0, 15, 20, 25, 50];

let ajánlatok =[];
ajánlatok = [
    "Forró csoki esetleg?    ", 
    "Meleg tea, vagy GROG?       ", 
    "Finom friss süti?       ", 
    "Pár gombóc fagyi?            ",
    "Jéghideg limonádé, extra jéggel?"
];

function weatherWidget (ajánlatok, tempUpLims, temperatures) {
    const nap = document.querySelector("#napok").value;
    /*console.log(nap);*/
 /*   const hőfokDiv = document.querySelector("#hő");
    for (let i = 0; i < tempUpLims.length ; i++) {
        if ( temperatures[nap] < tempUpLims[i]) {
            continue;
        } else {
            hőfokDiv.innerHTML = temperatures[nap] + " C°" + ajánlatok[i];
            console.log(ajánlatok[i]);
        }
    }
}*/

var temperaturesWe = [];
temperaturesWe = [-50, 10, 25, 30, 50, 180, -35];

var limitTemp = [];
limitTemp = [0, 15, 20, 25, 77];

var ajánlat =[];
ajánlat = ["Forró csoki esetleg?    ", "Meleg tea, vagy GROG?       ", "Finom friss süti?       ", "Pár gombóc fagyi?            ",
"Jéghideg limonádé, extra jéggel?", "Jéghideg limonádé, extra jéggel?"];

var theSelect = 0;



function weatherWidget(tempDay) {
    var tempDay = 0;
    let jel2 = " C° :  ";/*
    var theSelect = demoForm.demoSelect;
    var value = theSelect[theSelect.selectedIndex].value;*/
    Day = document.querySelector("#napok").value;
    tempDay = temperaturesWe[Day].value;
    
    for (let i = 0 ; i <= limitTemp.length; i++) {
        if (limitTemp[i] < tempDay) {
            continue;
        } else {
            document.getElementById("hő").innerHTML = tempDay + jel2 + ajánlat[i];
            }
            break;
        }
}