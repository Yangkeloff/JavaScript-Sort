const minCoinChange = (coins, amount) => {
  const cache = []
  const makeChange = (value) => {
    if (!value) {
      return []
    }
    if (cache[value]) {
      return cache[value]   // 记忆化
    }
    let min = []
    let newMin
    let newAmount
    for (let i = 0; i < coins.length; i++) {  // 对每个面额计算newAmount
      const coin = coins[i]
      newAmount = value - coin
      if (newAmount >= 0) {
        newMin = makeChange(newAmount)
      }
      if (
        newAmount >= 0
        && (newMin.length < min.length - 1 || !min.length)
        && (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin)
        console.log(`new Min:${min} for ${amount}`)
      }
    }
    return (cache[value] = min)
  }
  return makeChange(amount)
}

console.log(minCoinChange([1, 2, 5], 8))