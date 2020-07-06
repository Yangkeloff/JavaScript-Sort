const swap = require('./utils').swap

const selectionSort = (arr) => {
  let minIndex
  for(let i = 0; i < arr.length; i++) {
    minIndex = i    // 设置当前位置i为最小值
    for(let j = i; j < arr.length; j++) {   // 从当前位置i向后查找
      if(arr[minIndex] > arr[j]) {
        minIndex = j  // 发现更小值，更新最小值
      }
    }
    if(minIndex !== i) {
      swap(arr, i, minIndex)  // 若最小值非当前位置i则交换
    }
  }
}

selectionSort([5, 4, 3, 2, 1])
