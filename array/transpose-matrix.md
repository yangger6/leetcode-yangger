
## 来源
  https://leetcode-cn.com/problems/transpose-matrix/

## 描述
  给定一个矩阵 A， 返回 A 的转置矩阵。
  矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
  ![描述图](https://assets.leetcode.com/uploads/2019/10/20/hint_transpose.png)

## 解法

- 暴力双循环

```javascript
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let i = 0;
    let iLength = A.length;
    let j = 0;
    let returnArr = []
    for (i; i < iLength; i++) {
        let j = 0
        let jLength = A[i].length
        for (j; j < jLength;j++){
            if (i === 0) {
                returnArr[j] = [A[i][j]]
            } else {
                returnArr[j][i] = A[i][j]
            }
        }
    }
    return returnArr
};
```

- map

```javascript
// use map
var transposeMap = function(A) { 
    return A[0].map((arr, index) => {
        return A.map(item => item[index])
    })
}
```
