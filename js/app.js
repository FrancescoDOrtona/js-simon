// #Js Simon
// variabili

let randomNumbersArray;

const startBtnDOMElement = document.querySelector('.start-btn');
console.log(startBtnDOMElement)


// Al click stampo i numeri in pagina

startBtnDOMElement.addEventListener('click', function(){
    randomNumbersArray = getArrayOfRandomNumberBetween(1, 100, 5)
    printInPage('.random-numbers', randomNumbersArray)
})












// funzioni
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

function getArrayOfRandomNumberBetween (min,max,range) {
    const numbersArray = [];

    while ( numbersArray.length < range){
        const randomNumber = getRandomIntInclusive(min,max);
        if (numbersArray.includes(randomNumber) === false){
            numbersArray.push(randomNumber)
        }
    }
    return numbersArray
}

function printInPage (className, text){
    const element = document.querySelector(className)
    element.innerHTML = text
}
