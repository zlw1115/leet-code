/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var strx = x + ""
    // 将输入转换成数组，在进行反转
    var arrx = [...strx]
    var rightIndex = arrx.length - 1
    var leftIndex = 0
    // 判断符号位，赋予左指针的值
    if (arrx[0] === '-') {
        leftIndex = 1
    } else {
        leftIndex = 0
    }
    // 遍历，反转赋值
    var tmp = ""
    for (; leftIndex < rightIndex; leftIndex++, rightIndex--) {
        tmp = arrx[leftIndex]
        arrx[leftIndex] = arrx[rightIndex]
        arrx[rightIndex] = tmp
    }
    // 在转回成字符
    strx = arrx.join("")
    strx = Number(strx)
    if (strx > (Math.pow(2, 31) - 1) || strx < Math.pow(-2, 31)) {
        return 0
    }
    return strx
};
// @lc code=end

