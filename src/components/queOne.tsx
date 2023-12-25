// Given an array A of size N of integers. Your task is to find the sum of minimum and maximum element in the array.

function getSumOfMinMax(A: number[]): number {
  let max = A[0];
  let min = A[0];
  for (let val of A) {
    if (val > max) {
      max = val;
    }
    if (val < min) {
      min = val;
    }
  }

  return max + min;
}

const QueOne = () => {
  const link =
    "https://www.geeksforgeeks.org/problems/max-min/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article";
  const nums: number[] = [4, 17, -5, 6, -8];
  const res = getSumOfMinMax(nums);
  return (
    <div>
      question one result = {res} (
      <span style={{ color: "green" }}>
        link of question-<a href={link}>link</a>
      </span>
      )
    </div>
  );
};

export default QueOne;
