import React from "react";

function reverseWord(str: string): string {
  //Your code here
  let arr = str.split("");
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  str = arr.join("");
  return str;
}
const QueThree = () => {
  const link = "https://www.geeksforgeeks.org/problems/reverse-a-string/1";
  const res = reverseWord("rakesh");
  return (
    <div>
      question three result = {res} (
      <span style={{ color: "green" }}>
        link of question-<a href={link}>link</a>
      </span>
      )
    </div>
  );
};

export default QueThree;
