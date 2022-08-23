/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var left = 0;
  var right = height.length - 1
  var lMax = 0;
  var rMax = 0
  var res = 0;
  while (left < right) {
    var cur_area = Math.min(height[left], height[right]) * (right - left);
    res = cur_area > res ? cur_area : res;
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return res;

};
// @lc code=end

