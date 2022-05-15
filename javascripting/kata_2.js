const conditionalSum = function (values, condition) {
  let sum = 0;
  let matchedNumbers = [];
  if (condition === "even") {
    for (let i of values) {
      if (i % 2 === 0) {
        matchedNumbers.push(i);
    }
  } else if (condition === "odd") {
    for (let i of values) {
      if (i % 2 !== 0) {
        matchedNumbers.push(i);
    }
  }
  for (let j of matchedNumbers) {
    sum += j;
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
