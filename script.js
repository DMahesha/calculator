let calcDisplay = document.querySelector('#calc-display')
const calcEqual = document.querySelector('#calc-equal')
const oprt = document.querySelectorAll('.oprt')
const num = document.querySelectorAll('.num')
const calcReset = document.querySelector('#calc-reset')

let firstNumber = ''
let firstOperator = ''
let secondNumber = ''

num.forEach(item => {
    item.addEventListener('click', (e => {
        let selNum = Number(e.target.textContent)
        calcDisplay.textContent = selNum
        pushNumber(selNum)
    }))
})

function pushNumber(num) {
    if (firstNumber == '') {
        firstNumber = num
    } else if ( secondNumber == '') {
        secondNumber = num
    }
}

oprt.forEach(item => {
    item.addEventListener('click', (e => {
        firstOperator = e.target.textContent
        calcDisplay.textContent = firstOperator
    }))
});

calcReset.addEventListener('click', resetCalc)

function resetCalc() {
    firstNumber = '';
    firstOperator = '';
    secondNumber = '';
    calcDisplay.textContent = 0
}

calcEqual.addEventListener('click', evaluate)

function evaluate() {
    if (firstOperator == '+') {
        calcDisplay.textContent = firstNumber + secondNumber
    } else if (firstOperator == '-') {
        calcDisplay.textContent = firstNumber - secondNumber
    } else if (firstOperator == '*') {
        calcDisplay.textContent = firstNumber * secondNumber
    } else if (firstOperator == '/') {
        calcDisplay.textContent = firstNumber / secondNumber
    }
}