function createPW(passphrase) {
  let password = passphrase[0].toUpperCase();
  var specialList = "`~!@#$%^&*-_=+\\|;:,./?";
  var list = ""
  for (let i = 1; i < passphrase.length; i++) {
    if (passphrase[i] == 'a' || passphrase[i] == 'à' || passphrase[i] == 'â') {
      list = "aaaa44A";
      password = password + list[Math.floor(Math.random() * list.length)];
    }
    else if (passphrase[i] == 'e' || passphrase[i] == 'é' || passphrase[i] == 'è' || passphrase[i] == 'ê') {
      list = "eeee33E";
      password = password + list[Math.floor(Math.random() * list.length)];
    }
    else if (passphrase[i] == 's') {
      list = "ssss55S";
      password = password + list[Math.floor(Math.random() * list.length)];
    }
    else if (passphrase[i] == 'l') {
      list = "llll11L";
      password = password + list[Math.floor(Math.random() * list.length)];
    }
    else if (passphrase[i] == 'o' || passphrase[i] == 'ô') {
      list = "oooo00O";
      password = password + list[Math.floor(Math.random() * list.length)];
    }
    else if (passphrase[i] == ' ') {
      password = password + specialList[Math.floor(Math.random() * specialList.length)];
    }
    else if (passphrase[i] == 'ù' || passphrase[i] == 'û') {
      list = "uuuuU";
      password = password + list[Math.floor(Math.random() * list.length)];
    }
    else if (passphrase[i] == 'î' || passphrase[i] == 'ï') {
      list = "iiiiI";
      password = password + list[Math.floor(Math.random() * list.length)];
    }
    else {
      let n = Math.floor(Math.random() * 4);
      if (n == 0) {
        password = password + passphrase[i].toUpperCase();
      }
      else {
        password = password + passphrase[i];
      }
      
    }
  }
  return password;
}
export {createPW};