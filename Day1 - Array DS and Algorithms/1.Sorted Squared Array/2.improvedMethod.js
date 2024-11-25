/**
 * @param {number[]} array
 * @return {number[]}
 *
 * time complixity: O(N)
 * space complixity: O(N)
 */
var sortedSquares = function (array) {
  // first create new array & add all values zeros [space compilixity = O(N) ]
  const newArray = new Array(array.length).fill(0);

  // declare the pointers first point at the beginning of the array, other point at the end of the array
  let pointerLeft = 0,
    pointerRight = array.length - 1;

  // Loop on the array to square the value & sorting it
  for (let i = array.length - 1; i >= 0; i--) {
    // get the squared values [left & right]
    const leftSquaredValue = array[pointerLeft] * array[pointerLeft];
    const rightSquaredValue = array[pointerRight] * array[pointerRight];

    // check which value of them is greater then move its pointer &  save its value at the end of the new array
    if (leftSquaredValue > rightSquaredValue) {
      newArray[i] = leftSquaredValue;
      pointerLeft++;
    } else {
      newArray[i] = rightSquaredValue;
      pointerRight--;
    }
  }

  return newArray;
};
