/**
 * @description \#238, https://leetcode.com/problems/product-of-array-except-self/
 */
export const productExceptSelf = (nums: number[]) => {
  const result = [];
  let product = 1;
  // left product
  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }
  product = 1;
  // right product
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }
  return result;
};
