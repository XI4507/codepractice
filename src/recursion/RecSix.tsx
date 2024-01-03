function binarySearchRecursive(
  arr: number[],
  target: number,
  start: number,
  end: number
): number {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, start, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, end);
  }
}

const RecSix = () => {
  const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const targetElement = 70;
  const result = binarySearchRecursive(
    sortedArray,
    targetElement,
    0,
    sortedArray.length - 1
  );
  return (
    <div>
      <p>
        {result !== -1
          ? `Element ${targetElement} found at index ${result}`
          : `Element ${targetElement} not found in the array`}
      </p>
    </div>
  );
};

export default RecSix;
