import {createPW} from "./pw.js";
document.getElementById("genPwButton").onclick = function() {getPassword()};
function getPassword() {
  fetch("https://trouve-mot.fr/api/sizemax/6/3")
    .then((response) => response.json())
    .then((words) => {
      let str = words;
      let passphrase = str[0]["name"] + " " + str[1]["name"];
      if (passphrase.length < 8) {
        passphrase = passphrase + " " + str[2]["name"];
      }
      let password = createPW(passphrase);
      document.getElementById("password").value = password;
    })
}

document.getElementById("genPwButton2").onclick = function() {getPasswordfromUser()};
function getPasswordfromUser() {
  var word1 = document.getElementById("word1");
  var word2 = document.getElementById("word2");
  var word3 = document.getElementById("word3");
  passphrase = word1 + " " + word2 + " " + word3;
  let password = createPW(passphrase);
  document.getElementById("password2").value = word1;

}
document.getElementById("copyButton").onclick = function() {copy(1)};
document.getElementById("copyButton2").onclick = function() {copy(2)};
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
  document.getElementById(copyAttr).setAttribute("src","https://beastin24.github.io/Test/Taskpane/assets/checkimg.png");  
  setTimeout(function(){ 
    document.getElementById(copyAttr).setAttribute("src","https://beastin24.github.io/Test/Taskpane/assets/copyimg.png"); 
  }, 1000);
}