//Keys of users //
let keys = ["id", "name", "email"];






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


    function startGetData() {
        getServerData("http://localhost:3000/users").then(
        data => fillDataTable(data, "userTable")
    );
}

document.querySelector("#getDataBtn").addEventListener("click", startGetData);

// Szerver adatokkal való kitöltés  //

function fillDataTable(data, tableID) {
    let table = document.querySelector(`#${tableID}`);
    if (!table) {
        console.error(` Table "#${tableID}" is not found!`);
        return;
    }

//  ŰJ SOR HOZZÁADÁSA  //




let tBody = document.querySelector("tbody");
tBody.innerHTML = "";
let newSor = addNUserSor();
tBody.appendChild(newSor);



        for (let sor of data) {
           tr = createAnyElement("tr");
           for ( let k of keys) {
                let td = createAnyElement("td");
                let input = createAnyElement("input", {
                    class: "form-control",
                    value: sor[k],
                    name: k
                });
                if (k == "id") {
                    input.setAttribute("readonly", true);
                }
                td.appendChild(input);
                tr.appendChild(td);
            } 
           let btnGroup = createBtnGroup();
           tr.appendChild(btnGroup);
        
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

function createBtnGroup () {
    let group = createAnyElement("div", {class: "btn btn-group"});
    let infoBtn = createAnyElement("button", {class: "btn btn-info", onclick: "setSor (this)"});
    infoBtn.innerHTML = '<i class="fa fa-refresh" aria-hidden="true"></i>';
    let delBtn = createAnyElement("button", {class: "btn btn-danger", onclick: "delInfo (this)"});
    delBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

    group.appendChild(infoBtn);
    group.appendChild(delBtn);
    let td = createAnyElement("td");
    td.appendChild(group);

    return td;
}

/*  DELETE 

", onclick: "getInfo (this)"});

", onclick: "delInfo (this)"});

FETCH-KÉRÉS 1.

Fetch kérés indítása a szerver felé:

let fetchOptions = {
  method: 'DELETE',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin'
};
fetch("http://localhost:3000/users/"+id, fetchOptions)
  .then( resp => resp.json() )
  .then( json => console.log(json) );


Lehetséges válaszok:

Az adott erőforrás nem létezik:
DELETE http://localhost:3000/users/1 404 (Not Found)
Sikeres törlés esetén üres válasz: {}


FETCH-KÉRÉS 2.


fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));


*/

function delInfo(btn) {
    let tr = btn.parentElement.parentElement.parentElement;
    let id = tr.querySelector("td:first-child").innerHTML;
    let fetchOptions = {
        method:"DELETE",
        mode: "cors",
        cache: "no-cache"
    };

    fetch (`http://localhost:3000/users/${id}`, fetchOptions).then (
        resp => resp.json(),
        err => console.error(err),    
    ).then(
        data => {
            startGetData ();
        }
    )
}


/*  

CREATE NEW USER

*/

function addNUserSor () {
    let tr = createAnyElement("tr");
    for (let k of keys) {
        let td = createAnyElement("td");
        let input = createAnyElement("input", {
            class: "form-control",
            name: k
        });
        td.appendChild(input);
        tr.appendChild(td);
    }

    let newBtn = createAnyElement("button", {
        class: "btn btn-success",
        onclick: "addUser(this)"
    });

    newBtn.innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>'
    let td = createAnyElement("td");
    td.appendChild(newBtn);
    tr.appendChild(td);

    return tr;
}

function addUser (btn) {
    let tr = btn.parentElement.parentElement;
    
    let data = getSorData(tr);
    delete data.id;
    let fetchOptions = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(`http://localhost:3000/users`, fetchOptions).then (
        resp => resp.json(),
        err => console.error(err)
    ).then (
        data => console.log(data)
    );
}

function getSorData(tr) {
    let inputs = tr.querySelectorAll("input.form-control");
    let data = {};
    for ( let i = 0 ; i < inputs.length ; i++) {
        data[inputs[i].name] = inputs[i].value;
    }
    return data
}


//  Set SOR //

function setSor(btn) {
    let tr = btn.parentElement.parentElement.parentElement;
    let data = getSorData(tr);
    let fetchOptions = {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

fetch (`http://localhost:3000/users/${data.id}`, fetchOptions).then (
    resp => resp.json(),
    err => console.error(err)
    ).then (
        data => startGetData()
    );

}



/*   GOMB PLUS
<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>
<span class="sr-only">Loading...</span>
*/


/*

POST
Ez feldolgozandó adatot küld fel a szerverre. Például HTML űrlap tartalmát, vagy egy fetch kérésben lévő adatokat. Az adatot az üzenettest tartalmazza.

Új felhasználó létrehozása
Ahhoz, hogy adatot küldj a szervernek, használhatod a POST vagy a PUT metódust is. Mindkettővel fel tudod tölteni az adatokat, a legtöbbször a szerver készítője mondja meg, hogy melyiket mikor használhatod. A mi példánkban a POST-ot használjuk a Create művelehtez, azaz új adatok létrehozásához.

let user = {
  name: "Peter Big",
  age: 21
};
let fetchOptions = {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'same-origin',
  body: JSON.stringify( user )
};
fetch( "http://localhost:3000/users/", fetchOptions )
  .then( resp => resp.json() )
  .then( json => console.log(json) );
Fontos megjegyzések!
Nézd meg jól a kódot, mert lényeges különbségek vannak benne egy GET kéréshez képest.

Létrehoztam egy user objektumot, ezt küldöm a szervernek.
A fetchOptions tartalmaz egy új tulajdonságot, headers a neve. Itt adtam meg, hogy json formátumban küldöm majd az adatokat, különben a szerver nem tudná feldolgozni őket.
body: ez a tulajdonság adja meg az adatokat, amelyeket a szervenek fogok küldeni. Mivel azt mondtam a fejlécben, hogy json lesz a formátum, ezért a user objektumot json formátumra kell alakítanom.
A válaszban az újonnan létrejött usert kapom vissza. Az id tulajdonságot nem szokták megadni, mivel azt a szerver általában automatikusan hozza létre. A válasz így néz ki az én esetemben:
{name: "Peter Big", age: 21, id: 4}







PUT kérés
A PUT kérések a megadott erőforrást feltöltik a szerverre. Ebből a szempontból nagyon hasonlóak a POST -hoz.

Adatok módosítása
Mi most a PUT kérést fogjuk az adatmódosításra használni. Ezért a body-ban, el fogjuk küldeni a szervernek a módosítandó adatokat, az url pedig az id mezőt is tartalmazni fogja, hogy meg tudja állapítani a szerver, hogy melyik felhasználót szeretnénk módosítani.

let user = {
  name: "Micky Big",
  age: 21
};
let fetchOptions = {
  method: 'PUT',
  mode: 'cors',
  cache: 'no-cache',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
  body: JSON.stringify( user )
};
fetch( "http://localhost:3000/users/3", fetchOptions )
  .then( resp => resp.json() )
  .then( json => console.log(json) );
A frissítés két dologban tér el a létrehozástól:

A metódus PUT.
A fetch url végén meg kell adni az id-t, hogy tudja a szerver hogy melyik user-t kell módosítani.
Ezt a választ kaptam: {name: "Micky Big", age: 21, id: 3}, látod, az id változatlan, az adatok viszont módosultak.

*/