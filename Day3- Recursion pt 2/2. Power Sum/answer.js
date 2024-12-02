/*
    T = O(N)    since N is number of all elements in main array and all sub arrays
    S = O(d)    since d is max depth of calling stack 
        ex: [1,2, [3, 4], [[2]]]  notice here the max depth is 3 
*/

function powerSum(array, power = 1) {
  let sum = 0;

  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += powerSum(item, power + 1);
    } else sum += item;
  });

  return Math.pow(sum, power);
}
