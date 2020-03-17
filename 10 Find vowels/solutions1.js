function findVowels(word){
    let countVowels = 0
    for (element of word){
      if (element == "a" || element ==  "e" || element ==  "i" || element ==  "u" || element ==  "o") {
        countVowels++
      }
    }
    return countVowels
  }
  
  console.log(findVowels('viouytr'))