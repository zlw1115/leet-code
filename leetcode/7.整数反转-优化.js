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
// 其他语言
// max:2的31次方-1：2147483647
// max:-2的31次方：-2147483648
// 12/10 = 1

// JavaScript
// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
// console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991
// 12/10 = 1.2

var reverse = function (x) {
    var res = 0
    while (x != 0) {
        // 每次取出最后一位数字
        var tmp = x % 10
        // console.log(res)

        // 判断边界情况，js不同，
        // TODO说明
        if (res > 214748364 || res < -214748364) {
            return 0
        }
        // 加入到返回值上
        res = res * 10 + tmp
        // console.log(res)
        // js除法
        // TODO:说明
        /**
        parseInt(5/2)

        Math.floor(5/2)

        '|'是位运算符，js中位运算之前会转为整数，与0位运算结果还是本身，所以也能达到取整数的目的
        5/2|0
         * 
         */
        x = x/10 | 0
        console.log(x)
    }
    // console.log(res)
    return res
};
// @lc code=end

