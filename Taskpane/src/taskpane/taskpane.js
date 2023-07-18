import {createPW} from "./pw.js";
document.getElementById("genPwButton").onclick = function() {getPassword(12)};
function getPassword(n) {
  var request = "https://trouve-mot.fr/api/size/";
  let passphrase = "";
  if (n <= 13) {
    var a = Math.floor(Math.random() * (n-4))+2;
    var b = n-a-1;
    var request1 = request + a;
    var request2 = request + b;
    fetch(request1.toString())
    .then((response) => response.json())
    .then((words) => {
      let str = words;
      var word = str[0]["name"];
      passphrase = passphrase  + word;
    })
  }
  else {
    var a = Math.floor(Math.random() * (n-7))+2;
    var b = Math.floor(Math.random() * (n-a-5))+2;
    var c = n-a-b-2;
    var request1 = request + a;
    var request2 = request + b;
    var request3 = request + c;
    passphrase = passphrase  + getWord(request1) + " " + getWord(request2) + " " + getWord(request3);
  }
  let password = createPW(passphrase);
  document.getElementById("password").value = passphrase;
}

function getWord(request) {
  fetch(request.toString())
    .then((response) => response.json())
    .then((words) => {
      let str = words;
      return(str[0]["name"]);
    })
}

document.getElementById("genPwButton2").onclick = function() {getPasswordfromUser()};
function getPasswordfromUser() {
  let w1 = document.getElementById("word1").value;
  let w2 = document.getElementById("word2").value;
  let w3 = document.getElementById("word3").value;
  let word1 = w1.toString();
  let word2 = w2.toString();
  let word3 = w3.toString();
  let passphrase = word1 + " " + word2 + " " + word3;
  let password = createPW(passphrase);
  document.getElementById("password2").value = password;

}
document.getElementById("copyButton").onclick = function() {copy(1)};
document.getElementById("copyButton2").onclick = function() {copy(2)};
let pwAttr = "";
let copyAttr = "";
function copy(n) {
  if (n == 1) {
    pwAttr = "password";
    copyAttr = "copyimg";
  }
  else {
    pwAttr = "password2";
    copyAttr = "copyimg2";
  }
  var pw = document.getElementById(pwAttr);
  pw.select();
  navigator.clipboard.writeText(pw.value);
  pw.blur();
  document.getElementById(copyAttr).setAttribute("src","../../assets/checkimg.png");  
  setTimeout(function(){ 
    document.getElementById(copyAttr).setAttribute("src","../../assets/copyimg.png"); 
  }, 1000);
}