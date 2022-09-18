function isIsogram(str){
  str = str.toLowerCase()
  let i
  let j
  
  for ((i = 0); i < str.length; i++) {
    for (j = i+1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false
      }
    }
  }
  return true
 
}

console.log( isIsogram("fdsfsdf"))