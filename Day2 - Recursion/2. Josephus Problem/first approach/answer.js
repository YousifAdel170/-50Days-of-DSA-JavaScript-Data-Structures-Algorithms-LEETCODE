/**
 * @param {number} n
 * @param {number} k
 * @return {number} // winner
 *
 * There are n friends that are playing a game. The friends are sitting in a circle and are numbered from 1 to n in clockwise order. More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n, and moving clockwise from the nth friend brings you to the 1st friend.
 *
 * The rules of the game are as follows:
 * 1. Start at the 1st friend.
 * 2. Count the next k friends in the clockwise direction including the friend you started at.
 *    The counting wraps around the circle and may count some friends more than once.
 * 3. The last friend you counted leaves the circle and loses the game.
 * 4. If there is still more than one friend in the circle, go back to step 2 starting from the
 *    friend immediately clockwise of the friend who just lost and repeat.
 * 5. Else, the last friend in the circle wins the game.
 *
 * Given the number of friends, n, and an integer k, return the winner of the game.
 *
 * time complixity: O(N^2)
 * space complixity: O(N)
 */
var findTheWinner = function (n, k) {
  //Write code here

  // 1. create an array of n elements
  let array = Array.from({ length: n }, (_, i) => i + 1);

  // 2. get the returned value
  function helper(arr, startIndex) {
    // Base case => check if there is an only one element in the array
    if (arr.length === 1) return arr[0];
    // Recursive Case
    let removeIndex = (startIndex + k - 1) % arr.length;
    arr.splice(removeIndex, 1);
    return helper(arr, removeIndex);
  }
  return helper(array, 0);
};
