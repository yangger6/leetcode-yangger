// https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/
// 674. 最长连续递增序列
//
// 给定一个未经排序的整数数组，找到最长且连续的的递增序列。
//
// 示例 1:
//
// 输入: [1,3,5,4,7]
// 输出: 3
// 解释: 最长连续递增序列是 [1,3,5], 长度为3。
// 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。
// 示例 2:
//
// 输入: [2,2,2,2,2]
// 输出: 1
// 解释: 最长连续递增序列是 [2], 长度为1。
// 注意：数组长度不会超过10000。

// 1. 遍历
// 遍历一次，因为是需求一个最长的递增数组，就只需要遇到不是递增的时候开始重置长度并且保留最长的长度
/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function(nums) {
    let max = 0
    let l = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] > nums[i]) {
            l ++
        } else {
            max = max >= l ? max : l
            l = 1
        }
    }
    return max
}
