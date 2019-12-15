function strReverse(aString) {
    
    var newString = [];
  
    for ( var i = 0 ; i < aString.length ; i++ ) {
      newString[i] = aString[aString.length - i - 1]
    }
  
    console.log(newString)
    
}

strReverse("yes")
