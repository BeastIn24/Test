function createPW(passphrase) {
  let password = passphrase[0].toUpperCase();
  var specialList = "`~!@#$%^&*-_=+\\|;:'\",./?";
  for (let i = 1; i < passphrase.length; i++) {
    if (passphrase[i] == 'a') {
      password[i] = '4';
    }
    if (passphrase[i] == 'e') {
      password[i] = '3';
    }
    if (passphrase[i] == 's') {
      password[i] = '5';
    }
    if (passphrase[i] == 'l') {
      password[i] = '1' ;
    }
    if (passphrase[i] == 'o') {
      password[i] = '0'; 
    }
    if (passphrase[i] == ' ') {
      password[i] = speciallist[Math.floor(Math.random() * list.length)];
      password[i+1] = passphrase[i+1].toUpperCase();
      i++;
    }
  }
  return password;
}
export {createPW};