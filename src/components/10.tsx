// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

function findKthLargest(nums: number[], k: number): number {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
}
const Ten = () => {
  const nums = [3, 2, 1, 5, 6, 4];
  const k = 2;
  const res = findKthLargest([...nums], k);
  const link =
    "https://leetcode.com/problems/kth-largest-element-in-an-array/description/";
  return (
    <div>
      {`${k}nd largest element for array [${nums}] = ${res} `}(
      <span style={{ color: "green" }}>
        link of question-<a href={link}>link</a>
      </span>
      )
    </div>
  );
};

export default Ten;
