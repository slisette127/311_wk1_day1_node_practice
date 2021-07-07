const isEven = (num) => {
  // write code for numbers.isEven
  if (num % 2 == 0){
  return true
  }
}

const sum = (arr) => {
  // write code for numbers.sum
  const newVar = arr.reduce(function(accumulator, current){
    return accumulator + current;
  }
  )
  return newVar;
}


const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  for(let x in arr){
    for(let y in arr){
      
      if (arr[x] + arr[y] === sum){
        return true
        } else {return false}
      
    }
  }  	

}

module.exports = {
  isEven,
  sum,
  comboSum
}