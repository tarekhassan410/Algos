function capitalizeSentence(sentence){
    let sentArray = [];
    for (element of sentence.split(' ')){
      let capitalizedElement = element.charAt(0).toUpperCase() + element.slice(1)
      sentArray.push(capitalizedElement)
    }
    console.log(sentArray.join(' '))
    return sentArray.join(' ')
  }
  
  capitalizeSentence("new cairo City")
  capitalizeSentence("hello world")
  capitalizeSentence("a lazy guy")