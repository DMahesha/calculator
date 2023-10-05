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
        let selNum = e.target.textContent
        pushNumber(selNum)
    }))
})

function pushNumber(num) {
    if (firstOperator == '') {
        firstNumber += num
        calcDisplay.textContent = firstNumber
    } else if ( firstOperator != '') {
        secondNumber += num
        calcDisplay.textContent = secondNumber
    }
}

oprt.forEach(item => {
    item.addEventListener('click', (e => {
        firstOperator = e.target.textContent
        calcDisplay.textContent = firstOperator
    }))
});

calcReset.addEventListener('click', () => {
    numReset()
    calcDisplay.textContent = 0
})

function numReset() {
    firstNumber = ''
    firstOperator = ''
    secondNumber = ''
}

calcEqual.addEventListener('click', () => {
    if (firstOperator == '+') {
        calcDisplay.textContent = Number(firstNumber) + Number(secondNumber)
        numReset()
    } else if (firstOperator == '-') {
        calcDisplay.textContent = Number(firstNumber) - Number(secondNumber)
        numReset()
    } else if (firstOperator == '*') {
        calcDisplay.textContent = Number(firstNumber) * Number(secondNumber)
        numReset()
    } else if (firstOperator == '/') {
        calcDisplay.textContent = Number(firstNumber) / Number(secondNumber)
        numReset()
    }
})