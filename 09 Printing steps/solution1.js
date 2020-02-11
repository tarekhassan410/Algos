function printSteps(n){
    for (var i = 1; i <= n; i++){
      var step = '#'.repeat(i) + ' '.repeat(n-i)
      console.info(step)
    }
  } 
  
printSteps(7)