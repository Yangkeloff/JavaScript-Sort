const quickSort = require('./quick').quickSort

const binarySearch = (array, value) => {
  const sortedArray = quickSort(array)
  console.log(`sortedArray:${sortedArray}`)
  let low = 0
  let high = sortedArray.length - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid]
    console.log(`mid:${element} `)
    if (element < value) {
      low = mid + 1
      console.log(`bigger than mid,low:${low} `)
    } else if (element > value) {
      high = mid - 1
      console.log(`less than mid,high:${high} `)
    } else {
      console.log(`found it`)
      return mid
    }
  }
  return undefined
}

console.log(binarySearch([6, 9, 1, 0, 7, 5, 3], 2))
