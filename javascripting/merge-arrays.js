//function concat(array1, array2) {
//  let answer = array1.concat(array2);
//  return answer;
//}

let merge = function (array1, array2) {
  let arr = [];
  while (array1.length && array2.length) {
    if (array1[0] < array2[0]) {
      arr.push(array1.shift());
    } else {
      arr.push(array2.shift());
    }
  }
  return [...arr, ...array1, ...array2];
};
/*
function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const array1 = array.splice(0, half);
  return merge(mergeSort(array1), mergeSort(array));
}
*/
console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
