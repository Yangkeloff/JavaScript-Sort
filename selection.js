const swap = require('./utils').swap

const selectionSort = (arr) => {
  let minIndex
  for(let i = 0; i < arr.length; i++) {
    minIndex = i
    for(let j = i; j < arr.length; j++) {
      if(arr[minIndex] > arr[j]) {
        minIndex = j
      }
    }
    if(minIndex !== i) {
      swap(arr, i, minIndex)
    }
    console.log(`第${i + 1}次外循环结束:${arr}`)
  }
}

selectionSort([5, 4, 3, 2, 1])
