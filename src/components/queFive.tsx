function findMinDiff(arr: number[], n: number, m: number): number {
  arr.sort((a, b) => a - b);
  let i = 0;
  let j = m - 1;
  let min = arr[j] - arr[i];
  while (j < n) {
    if (arr[j] - arr[i] < min) {
      min = arr[j] - arr[i];
    }
    i++;
    j++;
  }
  return min;
}

const QueFive = () => {
  const link: string =
    "https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1?utm_source=geeksforgeeks&utm_medium=ml_article_practice_tab&utm_campaign=article_practice_tab";
  const arr = [7, 3, 2, 4, 9, 12, 56];
  const res = findMinDiff(arr, 7, 3);
  return (
    <div>
      question five result = {res} (
      <span style={{ color: "green" }}>
        link of question-<a href={link}>link</a>
      </span>
      )
    </div>
  );
};

export default QueFive;
