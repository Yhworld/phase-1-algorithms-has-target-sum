function hasTargetSum(array, target) {
  // Write your algorithm here
   for (let i = 0; i < array.length ; i++) {
     for (let j = i + 1; j < array.length ; j++) {
       if (array[i] + array[j] == target) return true;
}
   }
return false;
}
console.log(hasTargetSum([1,2,5], 4))


/* 
  Write the Big O time complexity of your function here
     
        0(n)
*/


/* 
  Add your pseudocode here
  1. function hasTargetSum(array, target)
  2. for (let i = 0; i < array.length /2 for loop to loop over the arrays in the array parameter
  3. array.length -1 -i (to get the last element in the array)
  4. if(array[i] + array[j] == target) to return true if the first element and last element in the array sums up to the value of target
  5. else to return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
