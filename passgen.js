var lowercaseVal = document.getElementById('lowercase')
var uppercaseVal = document.getElementById('uppercase')
var numbersVal = document.getElementById('numbers')
var symbolsVal = document.getElementById('symbol')
var lengthVal = document.getElementById('length')
var submitVal = document.getElementById('generate')


submitVal.addEventListener('click', () => {

  const containsLowercase = lowercaseVal.checked
  const containsUppercase = uppercaseVal.checked
  const containsNumber = numbersVal.checked
  const containsSymbol = symbolsVal.checked
  const length = +lengthVal.value

  if((!containsLowercase && !containsUppercase && !containsNumber && !containsSymbol) || (!length)){
    alert("You Have Not Provided Enough Information!")
  }

  document.getElementById('passOut').value = generatePassword(containsLowercase, containsUppercase, containsSymbol, containsNumber, length)

})

function generatePassword(lower, upper, symbol, numbers, length){

  const typeArr = [lower, upper, symbol, numbers]
  var currentChar = '';
  var password = '';

  for (i = 0; i < length; i++){

    const type = Math.floor(Math.random() * 4)

    if(typeArr[type]){
      switch(type){
        case 0:
          currentChar = generateLowercase()
          break
        case 1:
          currentChar = genreateUppercase()
          break
        case 2:
          currentChar = genreateSymbol()
          break
        case 3:
          currentChar = Math.floor(Math.random() * 10)
          break
      }

      password = password.concat(currentChar)
    }
    else{
      i--
    }
  }
  
  return password
}

function genreateUppercase(){
  const charArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  return charArray[Math.floor(Math.random() * charArray.length)]
}

function generateLowercase(){
  const charArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return charArray[Math.floor(Math.random() * charArray.length)]
}

function genreateSymbol() {
  const charArray = ['!', '@', '#', '$', '%', '&', '*', '(', ')']
  return charArray[Math.floor(Math.random() * charArray.length)]
}

function copyToClipboard() {
  var copyText = document.querySelector('#passOut')
  copyText.select()
  document.execCommand('copy')

  var copyButton = document.getElementById('copy')
  copyButton.innerHTML = 'Copied!'
}

document.querySelector("#copy").addEventListener("click", copy);