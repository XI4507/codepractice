//sorted an array using recursion

function insert(arr: number[], temp: number): number[] {
  if (arr.length === 0 || arr[0] >= temp) {
    arr.unshift(temp);
    return arr;
  } else if (arr[arr.length - 1] <= temp) {
    arr.push(temp);
    return arr;
  }
  const temp1: number = arr.pop()!;
  arr = insert(arr, temp);
  arr.push(temp1);
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
