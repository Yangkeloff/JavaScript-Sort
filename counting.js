const findMaxValue = (arr = []) => {
  let max = arr[0]
  arr.forEach((ele) => {
    if(ele > max) {
      max = ele
    }
  })
  return max
}

const countingSort = (arr = []) => {
  if(arr.length < 2) return arr
  const maxValue = findMaxValue(arr)
  const countsArr = new Array(maxValue + 1)

  arr.forEach((ele) => {
    if(!countsArr[ele]) {
      countsArr[ele] = 0
    }
    countsArr[ele]++
  })
  // 迭代计数数组构建排序后数组
  let sortedIndex = 0
  countsArr.forEach((count, i) => {
    console.log(`i:${i} count:${count}`)
    while(count > 0) {
      arr[sortedIndex] = i
      sortedIndex++
      count-- // 多个元素相同时，多次添加，直到计数为0
    }
  })
  return arr
}

console.log(countingSort([2, 8, 5, 1, 3, 2, 2, 1, 3]))