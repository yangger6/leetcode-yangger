// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。
// 示例 1:
// 输入: [0,1,3]
// 输出: 2
// 示例 2:
// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

// 1. 遍历

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber1 = function(nums) {
    let i = 0, l = nums.length
    for (i; i < l; i++) {
        if (nums[i] !== i) {
            return i
        }
    }
    return nums.length
}

// 2. 二分

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber2 = function(nums) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        mid === nums[mid] ? left = mid + 1 : right = mid - 1
    }
    return left
};
