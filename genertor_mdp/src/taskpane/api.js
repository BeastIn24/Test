import {createPW} from "./pw.js";
document.getElementById("button").onclick = function() {getPassword()};
function getPassword() {
  fetch("https://trouve-mot.fr/api/size/3/3")
    .then((response) => response.json())
    .then((words) => {
      let str = words
      let passphrase = str[0]["name"] + " " + str[1]["name"] + " " + str[2]["name"]
      let password = createPW(passphrase)
      console.log(password)
    })
}