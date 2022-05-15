const urlEncode = function (text) {
  let newString = "";
  for (let letter of text) {
    if (letter === " ") {
      //letter = "%20";
      newString += "%20";
    } else {
      newString += letter;
    }
  }
  return newString.trim();
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
