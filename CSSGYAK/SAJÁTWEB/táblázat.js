/* 

 <tr
    <td>1</td>
    <td>Kiss</td>
    <td>János</td>
    td>55</td>
        <td>
            <div class="btn-group">
            <button class="btn-info btn">
                    <i class="fas fa-sync-alt"></i>
                </button>
            button class="btn-danger">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </td>
    </tr>

 */


let users = [
    {surname:"Berger", firstname:"Whitney", age: 22},
    {surname:"Nagy", firstname:"Árpád", age: 33},
    {surname:"Kiss", firstname:"Bence", age: 44},
    {surname:"Doe", firstname:"John", age: 55},
    {surname:"Jack", firstname:"Vadölő", age: 37},
    {surname:"Rostás", firstname:"Amnestia", age: 43},
    {surname:"Lukbuk", firstname:"Simon", age: 18},
    {surname:"Kolompár", firstname:"Vindiesel", age: 99},
];


let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};

let createBtnGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";
    let bInfo = document.createElement("button");
    bInfo.className = "btn-info btn";
    bInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';
    
    let bDanger = document.createElement("button");
    bDanger.className = "btn-danger";
    bDanger.innerHTML = '<i class="fas fa-trash-alt"></i>';
    
    group.appendChild(bInfo);
    group.appendChild(bDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
    };

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for (let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createBtnGroup(tr);
    tableBody.appendChild(tr);
    };



    /*
     VAGY PL.:

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
*/
