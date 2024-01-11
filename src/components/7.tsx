function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i === -1) {
    reverse(nums, 0, nums.length - 1);
    return;
  }

  let j = nums.length - 1;
  while (nums[j] <= nums[i]) {
    j--;
  }
  swap(nums, i, j);
  reverse(nums, i + 1, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    swap(nums, start, end);
    start++;
    end--;
  }
}

function swap(nums: number[], i: number, j: number): void {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
const Seven = () => {
  const link: string = `https://leetcode.com/problems/search-in-rotated-sorted-array/`;
  let nums: number[] = [1, 2, 3];
  nextPermutation(nums);
  return (
    <div>
      result - (
      <span style={{ color: "green" }}>
        link of question-<a href={link}>link</a>
      </span>
      )
    </div>
  );
};

export default Seven;
