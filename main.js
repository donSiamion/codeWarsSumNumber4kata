function sumStrings(a,b) { 
  if (a.length > 15 ||  b.length > 15) {
    let aSplit = a.split('').reverse()
    let bSplit = b.split('').reverse()
    let maxLength = Math.max(aSplit.length, bSplit.length)
    let result = []
    let addDec = 0
    for (let i =0; i < maxLength; i++) {
      let sum = (+aSplit[i] || 0) + (+bSplit[i] || 0) + addDec
      addDec = sum > 9 ? 1 : 0
      result.push(sum - (sum > 9 ? 10 : 0) )
    }    
    return result.reverse().join('')
  } else {
    return +a + +b + ''
  }
}

let sumStr = sumStrings('712569312664357328695151392', '8100824045303269669937')
console.log(sumStr)