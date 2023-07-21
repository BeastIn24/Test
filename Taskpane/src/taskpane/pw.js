function createPW(passphrase) {
  var specialList = "`~!@#$%^&*-_=+\\|;:,./?";
  var list = "";
  var password ="";
  for (let i = 0; i < passphrase.length; i++) {
  if (passphrase[i] == 'a' || passphrase[i] == 'à' || passphrase[i] == 'â') {
      list = "aaaaa44A@";
      password = password + list[Math.floor(Math.random() * list.length)];
  }
  else if (passphrase[i] == 'e' || passphrase[i] == 'é' || passphrase[i] == 'è' || passphrase[i] == 'ê') {
      list = "eeeee33E&£";
      password = password + list[Math.floor(Math.random() * list.length)];
  }
  else if (passphrase[i] == 's') {
      list = "sssss55S$";
      password = password + list[Math.floor(Math.random() * list.length)];
  }
  else if (passphrase[i] == 'l') {
      list = "lllll11L";
      password = password + list[Math.floor(Math.random() * list.length)];
  }
  else if (passphrase[i] == 'o' || passphrase[i] == 'ô') {
      list = "ooooo00O";
      password = password + list[Math.floor(Math.random() * list.length)];
  }
  else if (passphrase[i] == ' ') {
      password = password + specialList[Math.floor(Math.random() * specialList.length)];
  }
  else if (passphrase[i] == 'ù' || passphrase[i] == 'û') {
      list = "uuuuuU";
      password = password + list[Math.floor(Math.random() * list.length)];
  }
  else if (passphrase[i] == 'i' ||passphrase[i] == 'î' || passphrase[i] == 'ï') {
      list = "iiiiiI!;";
      password = password + list[Math.floor(Math.random() * list.length)];
  }
  else if (passphrase[i] == 't') {
    list = "ttttt77T";
    password = password + list[Math.floor(Math.random() * list.length)];
  }
  else if (passphrase[i] == 'q') {
    list = "qqqqq99Q";
    password = password + list[Math.floor(Math.random() * list.length)];
  }
  else if (passphrase[i] == 'b') {
    list = "bbbbb66B";
    password = password + list[Math.floor(Math.random() * list.length)];
  }
  else if (passphrase[i] == 'z') {
    list = "zzzz22Z";
    password = password + list[Math.floor(Math.random() * list.length)];
  }
  else {
      let n = Math.floor(Math.random() * 8);
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