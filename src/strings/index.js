const split = (str, delim) => {
  // write code for strings.split
  const newString = str.split(delim);

    return newString;
}

const pairs = (str) => {
  // write code for strings.pairs
  // let str=[];
  //   for (let i =0; i<a.length-1; i++) {
  //   str.push(Number(a[i]+''+a[i+1]));
//}
}

const reverse = (str) => {
  // write code for strings.reverse

//   function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
     let splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]
 
//     // Step 2. Use the reverse() method to reverse the new created array
     let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]
 
//     // Step 3. Use the join() method to join all elements of the array into a string
     let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"
    
//     //Step 4. Return the reversed string
     return joinArray; // "olleh"
// }
 

}

module.exports = {
  split,
  pairs,
  reverse
}