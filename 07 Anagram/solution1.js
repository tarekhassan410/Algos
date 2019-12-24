function isAnaGram(wordOne, wordTwo){
  
    // A function to convert received array to string
    function arrToObject(word){
      let arrConvertedToObject = {};
      for (element of word){
        if(arrConvertedToObject[element]){
          arrConvertedToObject[element]++
        }else{
          arrConvertedToObject[element] = 1
        }
      }
      return arrConvertedToObject 
    }
    
    // Regex to remove spaces 
    let wordOneUpdate = wordOne.replace(/[^\w]/g, "").toLowerCase()
    let wordTwoUpdate = wordTwo.replace(/[^\w]/g, "").toLowerCase()
    
    // converting to arrays and sorting 
    wordOneUpdate = arrToObject(wordOneUpdate.split('').sort() )
    wordTwoUpdate = arrToObject(wordTwoUpdate.split('').sort() )
      
    // check length of returned strings
    if ( Object.keys(wordTwoUpdate).length != Object.keys(wordOneUpdate).length ) {
      return false
    }
    
    // compare two strings
    for (element in wordOneUpdate){
      if ( wordOneUpdate[element]  != wordTwoUpdate[element] ){
        return false
      }
    } 
    return true
    
  }
  
  console.log(isAnaGram('hello','oellh') )