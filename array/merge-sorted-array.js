// https://leetcode-cn.com/problems/merge-sorted-array/
// 88. 合并两个有序数组
// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 说明:
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
//
// 示例:
//     输入:
//         nums1 = [1,2,3,0,0,0], m = 3
//         nums2 = [2,5,6],       n = 3
// 输出: [1,2,2,3,5,6]

// 1. for 循环 思路是遍历数组 因为是有序数组 最后面的肯定都是0 然后遇到小于等于的值就插入
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
    let i = 0, l = nums1.length
    let nInsertIndex = 0 // 最多插入多少个
    let newArray = []
    for (i; i < l; i++) {
        if (nInsertIndex < n) {
            if (nums1[i] === 0) { // 下标为0 直接替换 此时 nums1 已经走完了
                newArray.push(nums2[nInsertIndex])
                nInsertIndex++
                continue
            } else if (nums1[i] === nums2[nInsertIndex]) { // 相同家在后面
                newArray.push(nums1[i])
                newArray.push(nums2[nInsertIndex])
                nInsertIndex++
                continue
            } else if (nums1 < nums2[nInsertIndex] && nums1[i + 1] > nums2[nInsertIndex]) { // 因为是有序数组 所以只要下一位数大于它 那就一定可以加在当前nums【i】后面 因为下一个循环会命中===的规则
                newArray.push(nums2[nInsertIndex])
                nInsertIndex++
                continue
            }
        }
        nums1[i] !== 0 &&newArray.push(nums1[i])
    }
    console.log(newArray)
    return newArray
};
merge([1,2,3,0,0,0], 3, [2,5,6], 3)
