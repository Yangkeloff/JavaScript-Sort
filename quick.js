const swap = require('./utils').swap

const partition = (arr = [], left, right) => {
  let pivot = arr[Math.floor((left + right) / 2)],
      il = left,
      ir = right
  console.log(`pivot:${pivot}`)
  while(il <= ir) {
    while(arr[il] < pivot) {
      il++
    }
    while(arr[ir] > pivot) {
      ir--
    }
    if(il <= ir) {
      swap(arr, il, ir)
      il++
      ir--
    }
  }
  console.log(`il:${il} ir:${ir}`)
  return il
}

const quick = (arr = [], left, right) => {
  console.log(`数组:${arr},  左:${left},右:${right}`)
  let index
  if(arr.length > 1) {
    index = partition(arr, left, right)
    if(left < index - 1) {
      quick(arr, left, index - 1)
    }
    if(index < right) {
      quick(arr, index, right)
    }
  }
  return arr
}

const quickSort = (arr = []) => {
  return quick(arr, 0, arr.length - 1)
}

console.log(quickSort([3, 5, 1, 6, 4, 7, 2]))
