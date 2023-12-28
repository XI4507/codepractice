import React from "react";

function power(n: number, m: number): number {
  if (m === 0) {
    return 1;
  }
  const res = n * power(n, m - 1);
  return res;
}

const RecFour = () => {
  const n = 2;
  const m = 10;

  const res = power(n, m);
  return (
    <p>
      {n} raised to the power {m} is = {res}
    </p>
  );
};

export default RecFour;
