function split(wholeArray) {
  let originalLength = wholeArray.length;
  let firstHalf = wholeArray.slice(0, (originalLength) / 2);
  let secondHalf = wholeArray.slice((originalLength) / 2);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let totalLength = arr1.length + arr2.length;
  let arr3 = [];
  for (let i = 0; i < totalLength; i++) {
    if (arr1[0] === undefined) {
      arr3.push(arr2.shift());
    } else if (arr2[0] === undefined) {
      arr3.push(arr1.shift());
    } else {
      if (arr1[0] < arr2[0]) {
        arr3.push(arr1.shift());
      } else {
        arr3.push(arr2.shift());
      }
    }
  }
  return arr3;
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    const splitArr = split(array);
    return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
  }
}

