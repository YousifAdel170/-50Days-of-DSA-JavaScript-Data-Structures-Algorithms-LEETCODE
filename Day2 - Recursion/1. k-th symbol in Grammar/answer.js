/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 *
 * We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row,
 * we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.
 *
 * For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
 * Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.
 *
 * time complixity: O(N)
 * space complixity: O(N)
 */
var kthGrammar = function (n, k) {
  //Write code here
  // base case
  if (n === 1) return 0;
  // recursive case
  else {
    // get the mid digit
    let mid = Math.pow(2, n - 1) / 2;
    // check if it less or equal than the mid
    if (k <= mid) {
      return kthGrammar(n - 1, k);
    } else {
      // cause if we return 0 it will return 1-0=1
      //       if we return 1 it will return 1-1=0
      return 1 - kthGrammar(n - 1, k - mid);
    }
  }
};
