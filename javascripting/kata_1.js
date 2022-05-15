const sumLargestNumbers = function (data) {
  let largestNumbers = [0, 0];
  for (let number of data) {
    if (number > largestNumbers[0]) {
      largestNumbers[1] = largestNumbers[0];
      largestNumbers[0] = number;
    } else if (number > largestNumbers[1]) {
      largestNumbers[1] = number;
    }
  }
  return largestNumbers[0] + largestNumbers[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
