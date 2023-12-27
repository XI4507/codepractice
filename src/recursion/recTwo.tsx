function fibonacci(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  const fib = fibonacci(n - 1) + fibonacci(n - 2);
  return fib;
}
const RecTwo = () => {
  const n = 8;
  const res = fibonacci(n);
  return (
    <p>
      {n}th term of fibonacci series is {res}
    </p>
  );
};

export default RecTwo;
