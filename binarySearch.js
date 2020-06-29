const quickSort = require('./quick').quickSort

const binarySearch = (array, value) => {
  const sortedArray = quickSort(array)
  console.log(`sortedArray:${sortedArray}`)
  let low = 0
  let high = sortedArray.length - 1
  while (low <= high) {
    const midIndex = Math.floor((low + high) / 2)
    const midValue = sortedArray[midIndex]  // 排序后数组中间值
    console.log(`midValue:${midValue} `)
    if (midValue < value) {   // 中间值小于查找值，则将左侧指针移动到中间值右侧
      low = midIndex + 1
      console.log(`bigger than midValue,low:${low} `)
    } else if (midValue > value) {    // // 中间值大于查找值，则将右侧指针移动到中间值左侧
      high = midIndex - 1
      console.log(`less than midValue,high:${high} `)
    } else {    // 中间值等于查找值，找到
      console.log(`found it`)
      return midIndex
    }
  }
  return undefined
}

console.log(binarySearch([6, 9, 1, 0, 7, 5, 3], 2))
