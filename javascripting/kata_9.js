const camelCase = function (input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      output = output + input[i + 1].toUpperCase();
      i = i + 1;
    } else {
      output = output + input[i];
    }
  }
  return output;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
