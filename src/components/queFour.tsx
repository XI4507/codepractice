import React from 'react'

var maxSubArray = function(nums:number[]):number {
    let max=nums[0];
    for(let i=0;i<nums.length;i++){
        let subArraySum=0;
        for(let j=i;j<nums.length;j++){
           subArraySum+=nums[j];
           max=Math.max(max,subArraySum);
        }   
    }
    return max;
};

const QueFour = () => {
 const link:string='https://leetcode.com/problems/maximum-subarray/'
 const nums:number[] = [-2,1,-3,4,-1,2,1,-5,4]
 const bruteForceRes:number=maxSubArray(nums)
  return (
    <div>
      question four result  using BruteForce approach= {bruteForceRes} (
      <span style={{ color: "green" }}>
        link of question-<a href={link}>link</a>
      </span>
      )
    </div>
  )
}

export default QueFour