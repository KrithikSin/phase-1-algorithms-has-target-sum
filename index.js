function hasTargetSum(array, target) {
    // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return true;
            }
        }
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n^2) - Quadratic time
*/

/* 
  Add your pseudocode here
  Create a loop to iterate over each number in the array
  Then, create a second loop to iterate over each number that comes after 
  the number that I am currently iterating over in the first loop
  Then, create a if statement in the second loop to check if the sum of the
  first number and second number equal to the target number.
  
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log('Expecting: true');
    console.log('=>', hasTargetSum([3, 8, 12, 4, 11, 7], 10));

    console.log('');

    console.log('Expecting: true');
    console.log('=>', hasTargetSum([22, 19, 4, 6, 30], 25));

    console.log('');

    console.log('Expecting: false');
    console.log('=>', hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
