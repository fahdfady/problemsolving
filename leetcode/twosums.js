/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
const twoSum = function (nums, target) {
    let i;

    // Initialize an empty object called obj to store the mapping of each number to its index.
    let obj = {}

    // Iterate through the nums array using a loop:
    for (i = 0; i < nums.length; i++) {

        // Calculate the difference (diff) between the (target) and the current number (nums[i]).
        const diff = target - nums[i];

        // Check if diff exists as a key in the obj object:
        // If it does, return an array containing the current index i and the index stored in obj[diff].
        if (diff in obj) {
            return [i, obj[diff]];
        }
        // Otherwise, add the current number nums[i] as a key in the obj object with its value set to the current index i.
        else { 
               obj[nums[i]] = i
        }
    
    }

}
// O(n)