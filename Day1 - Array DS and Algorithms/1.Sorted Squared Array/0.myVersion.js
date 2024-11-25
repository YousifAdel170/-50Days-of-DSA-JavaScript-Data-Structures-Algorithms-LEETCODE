/**
 * @param {number[]} array
 * @return {number[]}
 *
 * time complixity: O(N) + O(N^2) = O(N^2 + N) = O(N^2)
 * space complixity: O(1)
 */
var sortedSquares = function (array) {
  //write code here.make sure to return desired array
  // get the squared values
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
  }
  // sort the array using bubble sort algorithm
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};
