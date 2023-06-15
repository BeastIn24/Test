/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office */

Office.onReady((info) => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  console.log(test);
  import createPW from "./pw.js";
  document.getElementById("button").onclick = function() {getPassword()};
  function getPassword() {
    fetch("https://trouve-mot.fr/api/random/3")
      .then((response) => response.json())
      .then((words) => {
        let str = words
        let passphrase = str[0]["name"] + " " + str[1]["name"] + " " + str[2]["name"]
        let password = createPW(passphrase)
        console.log(password)
      })
  }
}
