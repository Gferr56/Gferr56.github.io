function hambiÁr() {
    let ár = 1000;
    let darab = document.querySelector("input[name='amount-input']");
    let showTelj = document.querySelector("span.show-telj");
    let teljes = parseInt(darab.value) * ár;
    showTelj.innerHTML = teljes;
    
}






