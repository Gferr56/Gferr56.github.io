let users = [
    {lastname:"Simon", firstname:"Loukbuk", age: 24},
    {lastname:"Tökül", firstname:"Niakisman", age: 33},
    {lastname:"Marokbatos", firstname:"Helena", age: 44},
    {lastname:"Tistakos", firstname:"Abros", age: 24},
    {lastname:"Bei", firstname:"Shegfei", age: 17},
    {lastname:"Amnestya", firstname:"Lakatus", age: 39},
    {lastname:"Eutanasia", firstname:"Kolompár", age: 47},
];


/*
DOM ELEMEK MANIPULÁCIÓJA  

PUSKA A HTML-BŐL:


<tr>
    <td>1.</td>
    <td>Kiss</td>
    <td>János</td>
    <td>55</td>
        <td>
            <div class="btn-group offset-3">
                <button class="btn btn-info">
                <i class="fas fa-sync-alt"></i>
                 </button>
                <button class="btn btn-danger">
                <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </td>
</tr>




ELSÖ:

let table = document.querySelector("#demoTable");
for ( let i = 0; i < users.length; i++ ) {
  let tr = document.createElement("tr");
  for ( let data of Object.values(users[i]) ) {
    let td = document.createElement("td");
    td.innerHTML = data;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}



MÁSODIK:

let tableBody = document.querySelector("#userTable tbody");
for (let k in users) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = parseInt(k)+1;
    tr.appendChild(td);
    tableBody.appendChild(tr);
}


EZ KÖRÜLMÉNYES, EZÉRT FÜGGVÉNYBE SZERVEZZÜK:

*/

let tableBody = document.querySelector("#userTable tbody");

let createTd = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

for (let k in users) {
    let tr = document.createElement("tr");
    createTd (parseInt(k)+1, tr);
    for (let value of Object.values(users[k])) {
        createTd(value, tr);
    }
    tableBody.appendChild(tr);
}




