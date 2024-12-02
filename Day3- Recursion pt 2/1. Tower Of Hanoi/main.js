/*
 *
    S = O(N)
    T = O(2^N)
 */

function toh(N, fromm, to, aux) {
  // sample print statement below
  // console.log("move disk " + 1 + " from rod " + 1 + " to rod " + 2);
  //in the above statement consider we are moving disk 1 from rod 1 to rod 2
  //remember to return number of moves as well

  //Write code here
  let count = 0;

  function helper(N, fromm, to, aux) {
    // Base Case
    if (N === 1) {
      count++;
      console.log("move disk " + N + " from rod " + fromm + " to rod " + to);
      return;
    }

    // recursive Case

    // 1. (N-1) from fromm to aux
    helper(N - 1, fromm, aux, to);

    // 2. move disk from fromm to to
    count++;
    console.log("move disk " + N + " from rod " + fromm + " to rod " + to);

    // 3. (N-1) from aux to to
    helper(N - 1, aux, to, fromm);
  }
  helper(N, fromm, to, aux);
  return count;
}
