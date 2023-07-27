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
    updatepassword(1);
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
    updatepassword(2);
}

function updatepassword(i) {
    let password;
    if (i == 1) {
        document.getElementById("password2").value = "";
        password = document.getElementById("password");
        checkpassword(password);
    }
    else {
        document.getElementById("password").value = "";
        password = document.getElementById("password2");
        checkpassword(password);
    }
}

function checkpassword(password) {
    let len, lower, upper, special, number = false;
    if (password.length >= 8) {
        len = true;
    }
    for (let i=0; i < password.length; i++) {
        if (97 <= password.charCodeAt(i) <= 122) {
            lower = true;
        }
        if (65 <= password.charCodeAt(i) <= 90) {
            upper = true;
        }
        if (33 <= password.charCodeAt(i) <= 47 || 58 <= password.charCodeAt(i) <= 64 || 91 <= password.charCodeAt(i) <= 96) {
            special = true;
        }
        if (48 <= password.charCodeAt(i) <= 57) {
            number = true;
        }
    }
    if (len) {
        document.getElementById('checklen').style.color = "#00FF00";
    }
    else {
        document.getElementById('checklen').style.color = "FF0000";
    }
    if (lower) {
        document.getElementById('checklower').style.color = "#00FF00";
    }
    else {
        document.getElementById('checklower').style.color = "FF0000";
    }
    if (upper) {
        document.getElementById('checkupper').style.color = "#00FF00";
    }
    else {
        document.getElementById('checkupper').style.color = "FF0000";
    }
    if (special) {
        document.getElementById('checkspecial').style.color = "#00FF00";
    }
    else {
        document.getElementById('checkspecial').style.color = "FF0000";
    }
    if (number) {
        document.getElementById('checknumber').style.color = "#00FF00";
    }
    else {
        document.getElementById('checknumber').style.color = "FF0000";
    }
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
}document.getElementById("genPwButton").onclick = function() {getPassword(document.getElementById("length").value)};
async function getPassword(n) {
    document.getElementById('errorname').innerHTML="";
    let request = "https://trouve-mot.fr/api/size/";
    let passphrase = "";
    let word1,word2,word3,word4 = "";
    let a,b,c,d;
    let request1, request2, request3,request4;
    if (8 <= n && n <= 13) {
        a = Math.floor(Math.random() * (n-4))+2;
        b = n-a-1;
        request1 = request + a;
        word1 = await getWord(request1);
        request2 = request + b;
        word2 = await getWord(request2);
        passphrase = passphrase + word1 + " " + word2;
    }
    else if (14 <= n && n <= 23) {
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
    else if (24 <= n && n <= 32){
        a = Math.floor(Math.random() * (n-17))+2;
        b = Math.floor(Math.random() * (n-a-12))+2;
        c = Math.floor(Math.random() * (n-a-b-6))+2;
        d = n-a-b-c-3
        console.log(a + " " + b + " "+ c + " " + d + " total : " + (a+b+c+d+3));
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
    else {
        document.getElementById('errorname').innerHTML="La taille du mot de passe doit être comprise entre 8 et 32";
        return "";
    }
    let password = createPW(passphrase);
    document.getElementById("usedwords").value = passphrase;
    document.getElementById("password").value = password;
    updatepassword(1);
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
    updatepassword(2);
}

function updatepassword(i) {
    let password;
    if (i == 1) {
        document.getElementById("password2").value = "";
        password = document.getElementById("password").value;
        checkpassword(password);
    }
    else {
        document.getElementById("password").value = "";
        document.getElementById("usedwords").value = "";
        password = document.getElementById("password2").value;
        checkpassword(password);
    }
}

function checkpassword(password) {
    let len = 0, lower = 0, upper = 0, special = 0, number = 0;
    if (password.length >= 8) {
        len = 1;
    }
    for (let i=0; i < password.length; i++) {
        if (97 <= password[i].charCodeAt() && password[i].charCodeAt() <= 122) {
            lower = 1;
        }
        else if (65 <= password[i].charCodeAt() && password[i].charCodeAt() <= 90) {
            upper = 1;
        }
        else if (33 <= password[i].charCodeAt() && password[i].charCodeAt() <= 47 || 58 <= password.charCodeAt(i) && password[i].charCodeAt() <= 64 || 91 <= password.charCodeAt(i) && password[i].charCodeAt() <= 96 || 123 <= password[i].charCodeAt() && password[i].charCodeAt() <= 167) {
            special = 1;
        }
        else if (48 <= password[i].charCodeAt() && password[i].charCodeAt() <= 57) {
            number = 1;
        }
    }
    if (len == 1) {
        document.getElementById('checklen').style.color = "#00C000";
        document.getElementById('checklenimg').setAttribute("src","../../assets/tickimg.png");
    }
    else {
        document.getElementById('checklen').style.color = "#FF0000";
        document.getElementById('checklenimg').setAttribute("src","../../assets/crossimg.jpg");
    }
    if (lower == 1) {
        document.getElementById('checklower').style.color = "#00C000";
        document.getElementById('checklowerimg').setAttribute("src","../../assets/tickimg.png");
    }
    else {
        document.getElementById('checklower').style.color = "#FF0000";
        document.getElementById('checklowerimg').setAttribute("src","../../assets/crossimg.jpg");
    }
    if (upper == 1) {
        document.getElementById('checkupper').style.color = "#00C000";
        document.getElementById('checkupperimg').setAttribute("src","../../assets/tickimg.png");
    }
    else {
        document.getElementById('checkupper').style.color = "#FF0000";
        document.getElementById('checkupperimg').setAttribute("src","../../assets/crossimg.jpg");
    }
    if (special == 1) {
        document.getElementById('checkspecial').style.color = "#00C000";
        document.getElementById('checkspecialimg').setAttribute("src","../../assets/tickimg.png");
    }
    else {
        document.getElementById('checkspecial').style.color = "#FF0000";
        document.getElementById('checkspecialimg').setAttribute("src","../../assets/crossimg.jpg");
    }
    if (number == 1) {
        document.getElementById('checknumber').style.color = "#00C000";
        document.getElementById('checknumberimg').setAttribute("src","../../assets/tickimg.png");
    }
    else {
        document.getElementById('checknumber').style.color = "#FF0000";
        document.getElementById('checknumberimg').setAttribute("src","../../assets/crossimg.jpg");
    }
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