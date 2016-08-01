var sevenButton = document.getElementById("seven");
var eightButton = document.getElementById("eight");
var nineButton = document.getElementById("nine");
var multiplyButton = document.getElementById("multiply");
var fourButton = document.getElementById("four");
var fiveButton = document.getElementById("five");
var sixButton = document.getElementById("six");
var subtractButton = document.getElementById("subtract");
var oneButton = document.getElementById("one");
var twoButton = document.getElementById("two");
var threeButton = document.getElementById("three");
var addButton = document.getElementById("add");
var zeroButton = document.getElementById("zero");
var clearButton = document.getElementById("clear");
var equalButton = document.getElementById("equal");
var divideButton = document.getElementById("divide");

var numbersForCalc = [];

sevenButton.addEventListener("click", function(event){
  document.getElementById("result").value += "7";
  numbersForCalc.push(7);
  console.log(numbersForCalc);
});
eightButton.addEventListener("click", function(event){
  document.getElementById("result").value += "8";
  numbersForCalc.push(8);
  console.log(numbersForCalc);
});
nineButton.addEventListener("click", function(event){
  document.getElementById("result").value += "9";
  numbersForCalc.push(9);
});
multiplyButton.addEventListener("click", function(event){
  document.getElementById("result").value += "*";
  numbersForCalc.push("*");
});
fourButton.addEventListener("click", function(event){
  document.getElementById("result").value += "4";
  numbersForCalc.push(4);
});
fiveButton.addEventListener("click", function(event){
  document.getElementById("result").value += "5";
  numbersForCalc.push(5);
});
sixButton.addEventListener("click", function(event){
  document.getElementById("result").value += "6";
  numbersForCalc.push(6);
});
subtractButton.addEventListener("click", function(event){
  document.getElementById("result").value += "-";
  numbersForCalc.push("-");
});
oneButton.addEventListener("click", function(event){
  document.getElementById("result").value += "1";
  numbersForCalc.push(1);
});
twoButton.addEventListener("click", function(event){
  document.getElementById("result").value += "2";
  numbersForCalc.push(2);
});
threeButton.addEventListener("click", function(event){
  document.getElementById("result").value += "3";
  numbersForCalc.push(3);
});
addButton.addEventListener("click", function(event){
  document.getElementById("result").value += "+";
  numbersForCalc.push("+");
});
zeroButton.addEventListener("click", function(event){
  document.getElementById("result").value += "0";
  numbersForCalc.push(0);
});
divideButton.addEventListener("click", function(event){
  document.getElementById("result").value += "/";
  numbersForCalc.push("/");
});
equalButton.addEventListener("click", function(event){
  var a = numbersForCalc[0];
  var b = numbersForCalc[2];
  if (numbersForCalc[1] === "+") {
    var solution = a + b;
  }
  else if (numbersForCalc[1] === "-") {
    var solution = a - b;
  }
  else if (numbersForCalc[1] === "*") {
    var solution = a * b;
  }
  else if (numbersForCalc[1] === "/") {
    var solution = a / b;
  }
  document.getElementById("result").value = solution;
  numbersForCalc.push("=");
});

clearButton.addEventListener("click", function(event){
document.getElementById("result").value = "";
numbersForCalc = [];
})
