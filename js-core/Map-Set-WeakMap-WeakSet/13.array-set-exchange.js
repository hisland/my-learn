const arr1 = [1, 2, 3]
console.log('array 1', arr1)
const arr_to_set1 = new Set(arr1)
console.log('set', arr_to_set1)
const set_to_arr2 = Array.from(arr_to_set1)
console.log('array 2', set_to_arr2)
