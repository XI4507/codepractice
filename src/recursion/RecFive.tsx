//sorted an array using recursion

import React from "react";

function insert(arr: number[], temp: number): number[] {
  let i = arr.length - 1;
  while (i >= 0 && arr[i] > temp) {
    arr[i + 1] = arr[i];
    i--;
  }
  arr[i + 1] = temp;
  return arr;
}

function sort(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr;
  }
  const temp: number = arr.pop()!;
  arr = sort(arr);
  arr = insert(arr, temp);
  return arr;
}

const RecFive = () => {
  const arr: number[] = [2, 3, 7, 6, 4, 5, 9];
  const res = sort(arr);
  return (
    <div>
      <p>
        Sorted an array [{arr}] using recursion - {res}
      </p>
    </div>
  );
};

export default RecFive;
