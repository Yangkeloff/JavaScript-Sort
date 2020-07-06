const flatten = (arr) => {
  while(arr.some(arrItem => Array.isArray(arrItem))) {
    arr = [].concat(...arr)
  }
  return arr
}