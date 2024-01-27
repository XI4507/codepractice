function trap(height: number[]): number {
  if (height.length === 0) {
    return 0;
  }

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let result = 0;

  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);

    if (height[left] < height[right]) {
      result += leftMax - height[left];
      left++;
    } else {
      result += rightMax - height[right];
      right--;
    }
  }

  return result;
}

const Eleven = () => {
  const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  const result = trap(height);
  const link = "https://leetcode.com/problems/trapping-rain-water/description/";
  return (
    <div>
      {`${result} units of rainwater can be tapped for the given height =[${height}] `}
      (
      <span style={{ color: "green" }}>
        link of question-<a href={link}>link</a>
      </span>
      )
    </div>
  );
};

export default Eleven;
