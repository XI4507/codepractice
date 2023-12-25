function getMaxfromArray(cols: number, rows: number, nums: number[][]): number {
  const arr = new Array(cols).fill(0);
  for (let i = 0; i < rows; i++) {
    let rowData = nums[i];
    let a = rowData[0];
    let b = rowData[1];
    let k = rowData[2];
    for (let j = a - 1; j < b; j++) {
      arr[j] += k;
    }
  }
  const max = Math.max(...arr);
  return max;
}

const FirstQue = () => {
  const n = 5;
  const m = 3;
  const nums = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100],
  ];
  const max = getMaxfromArray(n, m, nums);
  return <div>question one res = {max}</div>;
};

export default FirstQue;
