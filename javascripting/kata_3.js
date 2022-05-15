const numberOfVowels = function (data) {
  let count = 0;
  for (let letter of data) {
    if (/[aeiou]/i.test(letter)) {
      count++;
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
