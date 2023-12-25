function containsDuplicate(nums: number[]): boolean {
  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return flag;
}

const QueFour = () => {
  const link: string = "https://leetcode.com/problems/contains-duplicate/";
  const nums: number[] = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const res = containsDuplicate(nums);
  return (
    <div>
      question four result = {res ? "dupicates found" : "No duplicates"} (
      <span style={{ color: "green" }}>
        link of question-<a href={link}>link</a>
      </span>
      )
    </div>
  );
};

export default QueFour;
