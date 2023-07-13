export const max_sub_array = (nums: number[]) => {
  let local = 0;
  let global = -Infinity;

  for (const num of nums) {
    local = Math.max(num, local + num);
    if (local > global) {
      global = local;
    }
  }

  return global;
};
