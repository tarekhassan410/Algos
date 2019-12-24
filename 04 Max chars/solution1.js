var st = "nnnnnnnnnrr"
var arrayOfStringChars = st.split('')
var numberOfChars = {}

for (element of arrayOfStringChars){ 
   if (numberOfChars[element]) {
     numberOfChars[element]++
   }else{
     numberOfChars[element] = 1
   }
}

console.log(numberOfChars)
