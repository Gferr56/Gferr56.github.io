function hambiÁr() {
  let ár = 1000;
  let darab = document.querySelector("input[name='amount-input']");
  let valósDarab = parseInt(darab.value);
  valósDarab = isNaN(valósDarab) ? 0 : valósDarab;
  ÁrTelj(ár, valósDarab);
}
function ÁrTelj(ár=1000, valósDarab=1) {

          let showTelj = document.querySelector("span.show-telj");
          if ( valósDarab > 10 ) {
              alert("Legfeljebb 10 darab rendelhető !")
              }
          else if( valósDarab < 1 ) {
              alert("Legalább 1 darabot rendelj !")
              }
          else {
              let teljes = parseInt(valósDarab * ár);
              showTelj.innerHTML = teljes;
              }

}



/*
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket !";
let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);

/*

ADD A CHILD:


<ul id="myList">
  <li>Coffee</li>
  <li>Tea</li>
</ul>

<p>Click the button to append an item to the end of the list.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
</script>

<p><strong>Note:</strong><br>First create an LI node,<br> then create a Text node,<br> then append the Text node to the LI node.<br>Finally append the LI node to the list.</p>




REMOVE A CHILD:


<!-- Note that the <li> elements inside <ul> are not indented (whitespaces). 
If they were, the first child node of <ul> would be a text node 
-->
<ul id="myList"><li>Coffee</li><li>Tea</li><li>Milk</li></ul>

<p>Click the button to remove the first item from the list.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var list = document.getElementById("myList");
  list.removeChild(list.childNodes[0]);
}
</script>



*/