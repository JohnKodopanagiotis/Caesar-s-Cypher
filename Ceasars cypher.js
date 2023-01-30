function rot13(str) {
  let m = "";
  for (let i=0; i<str.length; i++){
    let asciiN = str[i].charCodeAt();
    if (asciiN>=65 && asciiN<=77){
      m += String.fromCharCode(asciiN +13);
    }else if (asciiN>=78 && asciiN<=90){
      m += String.fromCharCode(asciiN -13);
    }else {
      m += str[i];
    }
  }
  return m;
}

rot13("SERR PBQR PNZC");