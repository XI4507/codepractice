function reverseString(input: string): string {
  if (input.length <= 1) {
    return input;
  } else {
    return reverseString(input.slice(1)) + input[0];
  }
}

const RecEight = () => {
  const originalString = "Rakesh Singh";
  const reversedString = reverseString(originalString);
  return (
    <div>
      <p>{`original string  ${originalString} and reverse is ${reversedString}`}</p>
    </div>
  );
};

export default RecEight;
