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
  for (let i=0; i > arr.length; i++){
    for (let j=1; j > arr.length-1; j++){
      if (arr[i]+ arr[j] === sum)
    }
  }
  
}

module.exports = {
  isEven,
  sum,
  comboSum
}