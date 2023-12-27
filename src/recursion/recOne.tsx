function factiorial(num: number): number {
  if (num === 0) {
    return 1;
  }
  const fact = num * factiorial(num - 1);
  return fact;
}

const n = 5;
const res: number = factiorial(n);
const RecOne = () => {
  return (
    <p>
      factorial of {n} is : {res}
    </p>
  );
};

export default RecOne;
