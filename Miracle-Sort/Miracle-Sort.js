const pivot = (arr, start = 0, end = arr.length - 1) => {
  let indexP = start,
    p = arr[start];

  for (let i = indexP + 1;i <= end; i++) {
    if (arr[i] < p) {
      indexP++;
      [arr[indexP], arr[i]] = [arr[i], arr[indexP]];
    }
  }
  [arr[start], arr[indexP]] = [arr[indexP], arr[start]];

  return indexP;
};

const miracleSort = (arr, left = 0, right = arr.length) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    miracleSort(arr, left, pivotIndex - 1); //left
    miracleSort(arr, pivotIndex + 1, right); //right
  }
  return arr;
};

console.log(miracleSort([6, 45, 2, 81, 9]));