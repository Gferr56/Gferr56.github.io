function hambiÁr() {
    let ár = 1000;
    let darab = document.querySelector("input[name='amount-input']");
    let showTelj = document.querySelector("span.show-telj");
    let valósDarab = parseInt(darab.value);
    valósDarab = isNaN(valósDarab) ? 0 : valósDarab;
    if ( valósDarab > 10 ) {
        alert("Legfeljebb 10 darab rendelhető !")
        }
    else if( valósDarab < 1 ) {
        alert("Legalább 1 darabot rendelj !")
        }
    else {
        let teljes = parseInt(darab.value) * ár;
        showTelj.innerHTML = teljes;
        }
}







