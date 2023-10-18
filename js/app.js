// #Js Simon
// variabili

let randomNumbersArray;
let score = 0;
const startBtnDOMElement = document.querySelector('.start-btn');
console.log(startBtnDOMElement)

const randomNumbersDOMElement = document.querySelector('.random-numbers')

// Al click stampo i numeri in pagina

startBtnDOMElement.addEventListener('click', function(){
    randomNumbersArray = getArrayOfRandomNumberBetween(1, 100, 5)
    console.log(randomNumbersArray)
    printInPage('.random-numbers', randomNumbersArray)

    setTimeout(() =>{
        console.log('Chiedere i numeri all utente');
         // randomNumbersDOMElement.style.display = ('none')
         printInPage ('.random-numbers','Ricorda i numeri mostrati ed inseriscili')
     }, 3000)
     
     setTimeout(() => {
         const userNumber = []
     
         for (let i = 0; i < 5; i++){
             const number = parseInt(prompt('Inserisci uno dei numeri'))
             userNumber.push(number)
         }

         const correctNumbers = []
     
         for (let i = 0; i < userNumber.length; i++){
             const currentNumber = userNumber[i]
             if (randomNumbersArray.includes(currentNumber) && !correctNumbers.includes(currentNumber)){
                 correctNumbers.push(currentNumber)
             }
         }
     
         printInPage('.random-numbers', 'Hai indovinato ' + correctNumbers.length +  ' numeri! ' + correctNumbers.join(', '))
     
     }, 5000)
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
