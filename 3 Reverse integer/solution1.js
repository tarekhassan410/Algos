function reverseInterger(anInteger){
  
    // check if given string if positive or negative
    var isPositive = false;
    var intAfterChecking ;
     
    // get string of number either positive or negative
    if (anInteger > 0){
      isPositive = true
      intAfterChecking = anInteger.toString()
    }else{
      isPositive = false
      intAfterChecking = anInteger.toString().slice(1)
    }
    
    // reverse string
    intAfterChecking = intAfterChecking.split('').reverse().join('') 
    
    // check if string has '0' at first after reversing
    for ( var element of intAfterChecking ) {
      if (element == 0){
        intAfterChecking = intAfterChecking.slice(1)
      }else{
        break
      }
    }
    
    // if given integer was negative return as negative
    if (isPositive == false){
      intAfterChecking = intAfterChecking * -1
    }
    return intAfterChecking
  }
  
  console.log(reverseInterger(-4580) )
  console.log(reverseInterger(-450) )

// live example
// https://codepen.io/tarekhassan/pen/JjobzBa