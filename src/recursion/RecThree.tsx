function partialSum(arr: number[], idx: number): number {
  if (idx === 0) {
    return arr[0];
  }
  const sum = partialSum(arr, idx - 1) + arr[idx];
  return sum;
}

const RecThree = () => {
  const arr = [2, 4, 5, 6, 7, 8];
  const res = partialSum(arr, arr.length - 1);
  return (
    <p>
      sum of array = [{arr}] is = {res}
    </p>
  );
};

export default RecThree;
