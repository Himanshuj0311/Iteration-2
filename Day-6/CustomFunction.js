// Custom map function
function customMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
}

// Custom filter function
function customFilter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Example usage
const nums = [1, 2, 3, 4];
console.log(customMap(nums, x => x * 2));       // [2, 4, 6, 8]
console.log(customFilter(nums, x => x % 2));    // [1, 3]
