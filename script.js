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

let firstNumber = ''
let firstOperator = ''
let secondNumber = ''

calcOne.addEventListener('click', pushOne)

function pushOne() {
    //firstNumber = 1
    calcDisplay.textContent = 1
    calcOne.style.cssText = 'background-color:red'
    pushNumber(1)
}

calcAdd.addEventListener('click', pushAdd)

function pushAdd() {
    firstOperator = '+'
    calcDisplay.textContent = '+'
    calcAdd.style.cssText = 'background-color:yellow'
}

calcTwo.addEventListener('click', pushTwo)

function pushTwo() {
    //secondNumber = 2
    calcDisplay.textContent = 2
    calcTwo.style.cssText = 'background-color:green'
    pushNumber(2)
}

calcEqual.addEventListener('click', evaluate)

function pushNumber(num) {
    if (firstNumber == '') {
        firstNumber = num
    } else if ( secondNumber == '') {
        secondNumber = num
    }
}

function evaluate() {
    if (firstOperator == '+') {
        calcDisplay.textContent = firstNumber + secondNumber
    }
}