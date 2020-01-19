var randomNumber = randomizeRandom();
// console.log(randomNumber);
var fs = require('fs');
var lower = 'abcdefghijklmnopqrstuvwxyz'.split('');
var upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
var symbols = '|<>?]}[{=+-0)9(8*7&6%5$4#3@2!1'.split('');
var numbers = '1234567891'.split('');

generateRandomToken(5);

function randomizeRandom(){
        var random_1 = getRandomNumber(0, 1000);
        var random_2 = getRandomNumber(1000, 999999999999);
        var generatedRandomNumber = getRandomNumber(random_1, random_2);
        return generatedRandomNumber;
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function getRandomIndexOfArray(array){
    var rand = array[Math.floor(Math.random() * array.length)];
    return rand;
  }



  function generateRandomToken(characters){
        
      //   var token = lowerArr+=upperArr+=symbolsArr+=numbersArr;
      var a = getRandomNumber(1, 16);
      var token = organizeOrder(a);

    // console.log(a,b,c,d,e,f)
    for(let i = 0;i<characters;i++){
        let lowerArr = getRandomIndexOfArray(lower);
        let upperArr = getRandomIndexOfArray(upper);
        let symbolsArr = getRandomIndexOfArray(symbols);
        let numbersArr = getRandomIndexOfArray(numbers);
        token += lowerArr+=upperArr+=symbolsArr+=numbersArr;
    }

    saveTokenToFile(token);


  }

  function saveTokenToFile(token){

    
    fs.writeFile("newToken.txt", token, function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log("The token was saved!");
    }); 

}

function organizeOrder(a){

        let lowerArr = getRandomIndexOfArray(lower);
        let upperArr = getRandomIndexOfArray(upper);
        let symbolsArr = getRandomIndexOfArray(symbols);
        let numbersArr = getRandomIndexOfArray(numbers);

      if(a===1){
        return lowerArr+=upperArr+=symbolsArr+=numbersArr+=upperArr;
      }else if(a===2){
        return lowerArr+=upperArr+=symbolsArr+=upperArr+=symbolsArr+=symbolsArr;
      }else if(a===3){
        return lowerArr+=symbolsArr+=upperArr+=upperArr+=symbolsArr;
      }else if(a===4){
        return lowerArr+=upperArr+=symbolsArr+=upperArr+=upperArr+=upperArr+=upperArr+=symbolsArr;
      }else if(a===5){
        return lowerArr+=symbolsArr+=upperArr+=upperArr;
      }else if(a===6){
        return lowerArr+=upperArr+=upperArr+=symbolsArr+=upperArr+=upperArr;
      }else if(a===7){
        return lowerArr+=upperArr+=upperArr+=symbolsArr+=upperArr;
      }else if(a===8){
        return upperArr+=lowerArr+=symbolsArr+=upperArr+=lowerArr;
      }else if(a===9){
        return upperArr+=symbolsArr+=lowerArr+=upperArr+=lowerArr+=upperArr+=lowerArr;
      }else if(a===10){
        return upperArr+=upperArr+=symbolsArr+=lowerArr+=upperArr+=symbolsArr;
      }else if(a===11){
        return upperArr+=symbolsArr+=upperArr+=lowerArr+=symbolsArr+=upperArr+=symbolsArr;
      }else if(a===12){
        return upperArr+=upperArr+=lowerArr+=symbolsArr+=lowerArr+=symbolsArr;
      }else if(a===13){
        return upperArr+=lowerArr+=upperArr;
      }else if(a===14){
        return numbersArr+=lowerArr+=symbolsArr+=upperArr+=symbolsArr+=symbolsArr;
      }else if(a===15){
        return numbersArr+=symbolsArr+=lowerArr+=upperArr+=upperArr;
      }else if(a===16){
        return numbersArr+=upperArr+=symbolsArr+=lowerArr;
      }else if(a===17){
        return numbersArr+=symbolsArr+=upperArr;
      }else if(a===18){
        return numbersArr+=upperArr+=lowerArr+=symbolsArr+=lowerArr+=lowerArr;
      }else if(a===19){
        return numbersArr+=lowerArr+=upperArr+=symbolsArr+=upperArr;
      }else{
        return numbersArr+=upperArr+=numbersArr+=lowerArr+=upperArr+=symbolsArr+=upperArr;
      }

}