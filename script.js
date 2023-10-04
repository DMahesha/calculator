let calcDisplay = document.querySelector('#calc-display')
const calcOne = document.querySelector('#calc-one')
const calcTwo = document.querySelector('#calc-two')
const calcThree = document.querySelector('#calc-three')
const calcFour = document.querySelector('#calc-four')
const calcFive = document.querySelector('#calc-five')
const calcSix = document.querySelector('#calc-six')
const calcSeven = document.querySelector('#calc-seven')
const calcEight = document.querySelector('#calc-eight')
const calcNine = document.querySelector('#calc-nine')
const calcZero = document.querySelector('#calc-zero')
const calcAdd = document.querySelector('#calc-add')
const calcSub = document.querySelector('#calc-sub')
const calcMul = document.querySelector('#calc-mul')
const calcDiv = document.querySelector('#calc-div')
const calcPeriod = document.querySelector('#calc-period')
const calcEqual = document.querySelector('#calc-equal')

let firstNumber = 0
let firstOperator = 0
let secondNumber = 0

calcOne.addEventListener('click', pushOne)

function pushOne() {
    firstNumber = 1
    calcDisplay.textContent = 1
    calcOne.style.cssText = 'background-color:red'
    evaluate()
}

calcAdd.addEventListener('click', pushAdd)

function pushAdd() {
    firstOperator = '+'
    calcDisplay.textContent = '+'
    calcAdd.style.cssText = 'background-color:yellow'
    evaluate()
}

calcTwo.addEventListener('click', pushTwo)

function pushTwo() {
    secondNumber = 2
    calcDisplay.textContent = 2
    calcTwo.style.cssText = 'background-color:green'
    evaluate()
}

function evaluate() {
    
    // if ( firstNumber != 0 && secondNumber != 0 && firstOperator === '+') {
    //     calcDisplay.textContent = firstNumber + secondNumber
    // }
}
