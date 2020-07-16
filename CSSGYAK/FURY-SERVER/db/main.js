// Adatok lekérése a szerverről : //
function getServerData (url) {
    let fetchOptions = {
        method:"GET",
        mode: "cors",
        cache: "no-cache"
    };
    return fetch(url, fetchOptions).then(
        response => response.json(),
        err => console.error(err)
    );
}


document.querySelector("#getDataBtn").addEventListener("click", function() {
    getServerData("http://localhost:3000/users").then(
    data => fillDataTable(data, "userTable")
);
});

// Szerver adatokkal való kitöltés  //

function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error(` Table "#${tableID}" is not found!`);
        return;
    }
    
    let tBody = document.querySelector("tbody");
        for (let sor of data) {
           tr = createAnyElement("tr");
           for ( let k in sor) {
                let td = createAnyElement("td");
                td.innerHTML = sor[k];
                tr.appendChild(td);
           } 
           tBody.appendChild(tr);
        };
}

function createAnyElement (name, attributes) {
    let element = document.createElement(name);
    for (let k in attributes) {
        element.setAttribute(k, attributes[k]);
    }
    return element;
}