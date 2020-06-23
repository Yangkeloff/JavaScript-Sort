const swap = require('./utils').swap

const bubbleSort = (arr) => {
  for(let i =0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        console.log(`第${i + 1}次外循环·第${j + 1}次内循环:${arr}`)
      }
    }
    console.log(`第${i + 1}次外循环结束:${arr}`)
  }
}

bubbleSort([5, 4, 3, 2, 1])
