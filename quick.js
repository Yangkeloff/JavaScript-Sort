const swap = require('./utils').swap

const partition = (arr = [], left, right) => {
  let pivot = arr[Math.floor((left + right) / 2)],
      il = left,
      ir = right
  while(il <= ir) {   // 左指针在右指针的左侧时（没有相互交错）
    while(arr[il] < pivot) {
      il++  // 左指针指向的元素小于主元时，向右移动
    }
    while(arr[ir] > pivot) {
      ir--  // 右指针指向的元素大于主元时，向左移动
    }
    if(il <= ir) {
      swap(arr, il, ir)   // 两侧指针均停止移动时，指针没有相互交错，则左项比右项大，交换
      il++
      ir--
    }
  }
  return il
}

const quick = (arr = [], left, right) => {
  let index
  if(arr.length > 1) {
    index = partition(arr, left, right)
    if(left < index - 1) {  // 子数组仍存在较小值的元素
      quick(arr, left, index - 1)
    }
    if(index < right) {   //// 子数组仍存在较大值的元素
      quick(arr, index, right)
    }
  }
  return arr
}

const quickSort = (arr = []) => {
  return quick(arr, 0, arr.length - 1)
}

// console.log(quickSort([3, 5, 1, 6, 4, 7, 2]))

module.exports = {
  quickSort
}
