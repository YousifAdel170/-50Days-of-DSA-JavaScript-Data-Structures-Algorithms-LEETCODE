/**
 * @param {number[]} array
 * @return {number[]}
 *
 * time complixity: O(N)
 * space complixity: O(N)
 */
var sortedSquares = function (array) {
  // first create new array & add all values zeros [space compilixity = O(N) ]
  let newArray = new Array(array.length).fill(0);

  // loop on all elements then add the squared values into the array      [ time complixity: O(N)]
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
  }

  // sort the array [time complixity is O(n Log n)]
  /*
            newArray.sort() => elements of the array treated as string so they sorted 10 then 2  
            so the solution to subract the number to be treated as number then sort it
            
            - If a is smaller than b, the difference is negative (a comes first).
            - If a is equal to b, the difference is zero (order remains unchanged).
            - If a is larger than b, the difference is positive (b comes first).
        */
  newArray.sort((a, b) => a - b);
};
