import {createPW} from "./pw.js";
document.getElementById("genPwButton").onclick = function() {getPassword()};
function getPassword() {
  fetch("https://trouve-mot.fr/api/sizemin/4/3")
    .then((response) => response.json())
    .then((words) => {
      let str = words
      let passphrase = str[0]["name"] + " " + str[1]["name"] + " " + str[2]["name"]
      let password = createPW(passphrase)
      document.getElementById("password").value = password
    })
}

document.getElementById("copyButton").onclick = function() {copy()};
function copy() {
  var pw = document.getElementById("password");
  navigator.clipboard.writeText(pw.value);
}