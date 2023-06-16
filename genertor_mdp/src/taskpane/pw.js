function createPW(passphrase) {
  let password = passphrase[0].toUpperCase();
  var specialList = "`~!@#$%^&*-_=+\\|;:,./?";
  for (let i = 1; i < passphrase.length; i++) {
    if (passphrase[i] == 'a') {
      password = password + '4';
    }
    if (passphrase[i] == 'e') {
      password = password + '3';
    }
    if (passphrase[i] == 's') {
      password = password + '5';
    }
    if (passphrase[i] == 'l') {
      password = password + '1';
    }
    if (passphrase[i] == 'o') {
      password = password + '0';
    }
    if (passphrase[i] == ' ') {
      password = password + specialList[Math.floor(Math.random() * specialList.length)];
      password = password + passphrase[i+1].toUpperCase();
      i++;
    }
    else {
      password = password + passphrase[i];
    }
  }
  return password;
}
export {createPW};