const merge = (leftArr = [], rightArr = []) => {
  let l = 0, r = 0, res = []
  while(l < leftArr.length && r < rightArr.length) {
    res.push(leftArr[l] < rightArr[r] ? leftArr[l++] : rightArr[r++]) // 对比左右将较小者加入结果，并递增控制变量
  }
  return res.concat(l < leftArr.length ? leftArr.slice(l, leftArr.length) : rightArr.slice(r, rightArr.length))
  // 此时l或r数组只有一个还有剩余元素且较大,将其并入结果
}

const mergeSort = (arr = []) => {
  if(arr.length > 1) {
    const { length } = arr
    const mid = Math.floor(length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid, length))
    arr = merge(left, right)
  }
  return arr
}

console.log(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]))
