
// console.log(document);
//  //document.getElementsByTagName () -> tag nereer handah
//  var h1 = document.getElementsByTagName ('h1') [0];
//  console.log(h1);
//  //.inerText = "solih text  bichne"-> tag dotorh  text solino
//  h1.innerText = "haha"
//  console.log(document);
//  var hh = document.getElementsByTagName ('h1') [1];
//  console.log(h1);
//  h1.innerText = "hha"
//  console.log(p)
//  function click2() {
// var p = document.getElementsByTagName('p') [0]
// p.innerText = "henlolo";
 
// p.style.color="blue";
//  }

var ageInput = document.getElementsByTagName('input') [0];
var birthYear = document.getElementsByTagName('h4') [0];
var currenYear = 2023,myYear;
console.log(ageInput);
console.log(birthYear);
function age(){
    myYear=currenYear-ageInput.value;
    console.log(ageInput.value);
    birthYear.innerText = " Таны төрсөн он: " +myYear;
}