// Time Comlexity of O(n)
// Space Complexity of O(1)
const findMinimum = arr => {
  let min = arr[0];
  for(const num of arr){
    num < min ? min = num : min = min;
  }

  return min;

};

//Time complexity of O(n)
//Space complexity of O(n)
const runningSum = arr => {

  let sum = 0;
  let sums = [];
  for(const num of arr){
    sum += num;
    sums = [...sums, sum];
  }
  return sums;
};

//Time complexity of O(n)
//Space complexity of O(1)
const evenNumOfChars = arr => {
  let count = 0;
  for(const string of arr){
    if(string.length % 2 === 0) count++;
  }
  return count;
};

//Time complexity of O(n^2)
//Space complexity of O(n)
const smallerThanCurr = arr => {
  let smallerArray = [];
  for(let i = 0; i < arr.length; i++){
    let current = arr[i];
    let smallerThanCurrent = 0;
    for(let j = 0;  j < arr.length; j++){
      let smallerCheckTarget = arr[j];
      if(current > smallerCheckTarget) smallerThanCurrent ++
    }
    smallerArray = [...smallerArray, smallerThanCurrent];
  }
  return smallerArray;
};

//Time complexity of O(n^2)
//Space complexity of O(1)
const twoSum = (arr, target) => {
  for(let i = 0; i < arr.length; i++){
    let arg1 = arr[i];
    for(let j = 0; j < arr.length; j++){
      if(i === j) continue;
      let arg2 = arr[j];
      if(arg1 + arg2 === target) return true;
    }
  }
  return false;
};

//Time complexity of O(n)
//Space complexity of O(3) => O(1)
const secondLargest = arr => {
  let largest = arr[0];
  let largestIdx = 0;
  let secondLargest = 0;

  if(arr.length < 2) return undefined;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
      largest = arr[i];
      largestIdx = i;
    } 
  }
  for(let j = 0; j < arr.length; j++){
    if(arr[j] > secondLargest && arr[j] <= largest && j != largestIdx) secondLargest = arr[j];
  }

  return secondLargest;
};

const shuffle = (arr) => {
  let indexesUsed = [];
  let shuffledArr = [];
  while(shuffledArr.length != arr.length){
    let randomIndex = Math.floor(Math.random() * arr.length);
    if(indexesUsed.includes(randomIndex) === false){
      shuffledArr = [...shuffledArr, arr[randomIndex]];
      indexesUsed = [...indexesUsed, randomIndex];
    }
  }
  return shuffledArr;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];