const checkMonotonic = function (array) {
  // if the array is empty
  if (array.length === 0) {
    return true;
  }

  // check if the array[0] element equal to the array[array.length - 1] element
  if (array[0] === array[array.length - 1]) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] !== array[i + 1]) return false;
    }
  }

  // check if the array[0] element is less than the array[array.length - 1] element
  else if (array[0] < array[array.length - 1]) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) return false;
    }
  }

  // check if the array[0] element is greater than the array[array.length - 1] element  [array[0] > array[array.length - 1]]
  else {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < array[i + 1]) return false;
    }
  }

  return true;
};
