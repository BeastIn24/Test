import {createPW} from "./pw.js";
document.getElementById("genPwButton").onclick = function() {getPassword(document.getElementById("length").value)};
document.getElementById("password").addEventListener("input", () => updatepassword(1));
document.getElementById("password2").addEventListener("input", () => updatepassword(2));
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
        a = Math.floor(Math.random() * (n-10))+3;
        b = Math.floor(Math.random() * (n-a-6))+2;
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
        a = Math.floor(Math.random() * (n-21))+5;
        b = Math.floor(Math.random() * (n-a-15))+4;
        c = Math.floor(Math.random() * (n-a-b-11))+4;
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
    else {
        document.getElementById('errorname').innerHTML="La taille du mot de passe doit être comprise entre 8 et 32.";
        return "";
    }
    let r = conformPW(passphrase);
    let password = r[0];
    let ans = r[1];
    document.getElementById("password2").value = "";
    document.getElementById("usedwords").value = passphrase;
    document.getElementById("password").value = password;
    updateBoard(ans);
}

document.getElementById("genPwButton2").onclick = function() {getPasswordfromUser()};
function getPasswordfromUser() {
    document.getElementById('errorname2').innerHTML="";
    let w1 = document.getElementById("word1").value;
    let w2 = document.getElementById("word2").value;
    let w3 = document.getElementById("word3").value;
    let word1 = w1.toString();
    let word2 = w2.toString();
    let word3 = w3.toString();
    let passphrase;
    let password;
    if (word1 != ""){
        if (word2 != ""){
            if (word3 == "") {
                passphrase = word1 + " " + word2 + " ";
                if (passphrase.length >= 8) {
                    let r = conformPW(passphrase);
                    let password = r[0];
                    let ans = r[1];
                    document.getElementById("password").value = "";
                    document.getElementById("password2").value = password;
                    updateBoard(ans);
                }
                else {
                    document.getElementById('errorname2').innerHTML="Les champs doivent contenir au moins 6 caractères.";
                }
            }
            else {
                passphrase = word1 + " " + word2 + " " + word3;
                if (passphrase.length >= 8) {
                    let r = conformPW(passphrase);
                    let password = r[0];
                    let ans = r[1];
                    document.getElementById("password").value = "";
                    document.getElementById("password2").value = password;
                    updateBoard(ans);
                }
                else {
                    document.getElementById('errorname2').innerHTML="Les champs doivent contenir au moins 6 caractères.";
                }
            }
        }
        else {
            document.getElementById('errorname2').innerHTML="Les deux premiers champs doivent être remplis.";
        }
    }
    else {
        document.getElementById('errorname2').innerHTML="Les deux premiers champs doivent être remplis.";
    }
}

function conformPW(passphrase) {
    let char = 0, len = 0;
    let password = "";
    let ans = [];
    while (char < 4 || len != 1) {
        password = createPW(passphrase);
        ans = checkpassword(password);
        len = ans[0];
        char = ans[5];
    }
    ans.pop();
    return [password, ans];
}

async function getWord(request) {
const result = await fetch(request)
const words = await result.json()
return words[0]["name"];
}



function updatepassword(i) {
    let password;
    if (i == 1) {
        document.getElementById("password2").value = "";
        password = document.getElementById("password").value;
        let r = checkpassword(password);
        updateBoard(r);
    }
    else {
        document.getElementById("password").value = "";
        document.getElementById("usedwords").value = "";
        password = document.getElementById("password2").value;
        let r = checkpassword(password);
        updateBoard(r);
    }
}

function checkpassword(password) {
    let len = 0, lower = 0, upper = 0, special = 0, number = 0, char = 0;
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
    char = lower + upper + special + number;
    return [len, lower, upper, special, number, char];
}

function updateBoard(list) {
    let opt = list;
    let id = ["checklen", "checklower", "checkupper", "checkspecial", "checknumber"];
    let idimg = ["checklenimg", "checklowerimg", "checkupperimg", "checkspecialimg", "checknumberimg"];
    let green = "#00C000", red = "#FF0000";
    let tick = "../../assets/tickimg.png", cross = "../../assets/crossimg.jpg";
    for (let i = 0; i<5; i++)
        if (opt[i] == 1) {
            document.getElementById(id[i]).style.color = green;
            document.getElementById(idimg[i]).setAttribute("src",tick);
        }
        else {
            document.getElementById(id[i]).style.color = red;
            document.getElementById(idimg[i]).setAttribute("src",cross);
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