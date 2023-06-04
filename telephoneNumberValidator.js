function telephoneCheck(str) {
  let reg1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
    reg2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

  if (reg1.test(str)) {
    return true;
  } else {
    return reg2.test(str) ? true : false;
  }
}

console.log(telephoneCheck("555-555-5555"));
