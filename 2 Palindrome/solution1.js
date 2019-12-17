function isPalindrome(testString){
  
    var reversedString = ""
    
    // reversing string to check with parameters
    for ( var element of testString ){
      reversedString = element + reversedString
    }
        
    // after reversing string, check if it the same as the string
    if( testString == reversedString){
      return true
    } else {
      return false
    }
    
  }
  
  let test = isPalindrome("saas")
  console.log(test)