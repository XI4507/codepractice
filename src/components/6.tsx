function search(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
}

const Six = () => {
  const link: string = `https://leetcode.com/problems/search-in-rotated-sorted-array/`;
  const arr: number[] = [4, 5, 6, 7, 0, 1, 2];
  const res = search(arr, 1);
  return (
    <div>
      question six result = {res} (
      <span style={{ color: "green" }}>
        link of question-<a href={link}>link</a>
      </span>
      )
    </div>
  );
};

export default Six;
