import React from "react";

function countDigits(num: number): number {
  if (num < 10) {
    return 1;
  } else {
    return 1 + countDigits(Math.floor(num / 10));
  }
}

const RecSeven = () => {
  const numberToCount: number = 7089719;
  const digitCount: number = countDigits(numberToCount);
  return (
    <div>
      <p>
        Number of digits in {numberToCount}: {digitCount}
      </p>
    </div>
  );
};

export default RecSeven;
