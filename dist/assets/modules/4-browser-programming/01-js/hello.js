"use strict";

var globalVariable = 123;

var house = {
  rooms: 3,
  baths: 3,
  sqf: 1300
};


document.getElementById("rooms").innerHTML = house.rooms;
document.getElementById("baths").innerHTML = house.baths;
document.getElementById("squareFeet").innerHTML = house.sqf;


function addAplusB() {
  var a = document.getElementById("a").value;
  a = parseInt(a);
  var b = document.getElementById("b").value;
  b = parseInt(b);
  document.getElementById("c").innerHTML = a + b;
}


var theElement = document.getElementById("a");
var theValue = theElement.value;
console.log(theValue);


var result = document.getElementById("result");
result.innerHTML = 2 + 3;

var scores = [90,89,78,67];

document.write("<h2>Dynamic Tables</h2>");

var table = "<table border='1'>";
for(var j in scores) {
  var row = "<tr>";
  var col = "<td>"
  col += "scores["+j+"]";
  col += "</td>";
  row += col;
  col = "<td>"
  col += scores[j]
  col += "</td>";
  row += col;
  row += "</tr>";
  table += row;
}
table += "</table>";			document.write(table);


document.write("<h2>Dynamic Lists</h2>");

document.write("<ul>");
for(var i in scores) {
  document.write("<li>scores["+i+"] = " + scores[i]);
  document.write("</li>");
}
document.write("</ul>");


document.write("<h2>Arrays</h2>");
document.write("<h3>Scores</h3>")
document.write(scores);

var total = 0;
for(var i=0; i<scores.length; i++) {
  total += scores[i];
}
var average = total / scores.length;
document.write("<h3>Total and Average</h3>")
document.write("total: " + total + "<br/>");
document.write("average: " + average + "<br/>");


document.write("<h2>The Date</h2>");
var today = new Date();
document.write(today);
document.write("<h2>The Month</h2>");
document.write(today.getMonth());


var hello = document.getElementById("hello");
hello.innerHTML = "Hello from innerHTML 321!";
hello.style.color = "red";
hello.style.fontSize = "25px";
hello.style.display = "none";

function sayHello() {
  hello.style.display = "block";
}

document.write("<h2>Hello from JavaScript!</h2>");
console.log("Hello World!");
