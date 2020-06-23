const swap = require('./utils').swap

const insertionSort = (arr) => {
  for(let i = 1; i < arr.length; i++){  // 从数组第二个元素开始
    let j = i
    let target = arr[j]
    while(j > 0 && arr[j - 1] > target) { // 每个元素和其前一个元素对比
      console.log(`当前目标元素:${target},对比元素:${arr[j - 1]}`)
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = target
    console.log(`第${i}次对比结束:${arr}`)
  }
}

insertionSort([5, 4, 3, 2, 1])