import {createPW} from "./pw.js";
document.getElementById("genPwButton").onclick = function() {getPassword(document.getElementById("length").value)};
async function getPassword(n) {
    let request = "https://trouve-mot.fr/api/size/";
    let passphrase = "";
    let word1,word2,word3,word4 = "";
    let a,b,c,d;
    let request1, request2, request3,request4;
    if (n <= 13) {
        a = Math.floor(Math.random() * (n-4))+2;
        b = n-a-1;
        request1 = request + a;
        word1 = await getWord(request1);
        console.log("word1 = " + word1);
        request2 = request + b;
        word2 = await getWord(request2);
        passphrase = passphrase + word1 + " " + word2;
    }
    else if (14 <= n <= 23) {
        a = Math.floor(Math.random() * (n-7))+2;
        b = Math.floor(Math.random() * (n-a-5))+2;
        c = n-a-b-2;
        request1 = request + a;
        word1 = await getWord(request1);
        request2 = request + b;
        word2 = await getWord(request2);
        request3 = request + c;
        word3 = await getWord(request3);
        passphrase = passphrase  + word1 + " " + word2 + " " + word3;
    }
    else {
        a = Math.floor(Math.random() * (n-10))+2;
        b = Math.floor(Math.random() * (n-a-8))+2;
        c = Math.floor(Math.random() * (n-a-b-6))+2;
        d = n-a-b-c-3
        request1 = request + a;
        word1 = await getWord(request1);
        request2 = request + b;
        word2 = await getWord(request2);
        request3 = request + c;
        word3 = await getWord(request3);
        request4 = request + d;
        word4 = await getWord(request4);
        passphrase = passphrase  + word1 + " " + word2 + " " + word3 + " " + word4;
    }
    let password = createPW(passphrase);
    document.getElementById("usedwords").value = passphrase;
    document.getElementById("password").value = password;
}

async function getWord(request) {
const result = await fetch(request)
const words = await result.json()
return words[0]["name"];
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