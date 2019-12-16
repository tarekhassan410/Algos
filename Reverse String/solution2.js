function strReverse(aString) {
  
    var newString = [];
    for ( element of aString) {
      newString = element + newString
    }
  
    console.log(newString)
    return newString
}

strReverse("yes")
strReverse("apple")

// live example 
// https://codepen.io/tarekhassan/pen/WNboZKq?