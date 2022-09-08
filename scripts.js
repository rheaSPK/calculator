var term = ""
var result = 0

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if(b == 0){
        return "Error"
    }
    return Math.round((a / b) * 1000) / 1000
}

function evaluateTerm(term){
    let addRegex = /\d+\+\d+/
    let subRegex = /\d+\-\d+/
    let multRegex = /\d+\*\d+/
    let divRegex = /\d+\/\d+/
    let numbersRegex = /\d+/g
    let digits = term.match(numbersRegex)
    let a = parseInt(digits[0])
    let b = parseInt(digits[1])
    
    if(addRegex.test(term))
        return add(a, b)
    if(subRegex.test(term))
        return subtract(a, b)
    if(multRegex.test(term))
        return multiply(a, b)    
    if(divRegex.test(term))
        return divide(a, b)  
    return "Not a valid term"

}



const completeTermRegex = /^\-?\d+(\.\d+)?[\+\-\*\/]\-?\d+(\.\d+)?$/
const changeableOperationRegex = /^\-?\d+(\.\d+)?[\+\-\*\/]$/
const keys = document.querySelectorAll('.key')
const operatorKeys = document.querySelectorAll('.operator-key')
const specialKeys = document.querySelectorAll('.special-key')
const termDiv = document.querySelector(".term")
const resultDiv = document.querySelector(".result")



keys.forEach((key) => {
    key.addEventListener('click', () => {
        term += key.id
        termDiv.textContent = term
    })
})

operatorKeys.forEach((key) => {
    key.addEventListener('click', () => {
        if (completeTermRegex.test(term)){
            result = evaluateTerm(term)
            if(result == "Error"){
                term = ""
                result = "You can't divide by zero"
            } else {
                term = `${result}${key.id}`
            }
            termDiv.textContent = term
            resultDiv.textContent = result
            return;
        }
        if (changeableOperationRegex.test(term)){
            term = term.replace(/[\+\-\*\/]/, key.id)
            termDiv.textContent = term
            return;
        }
        term += key.id
        termDiv.textContent = term
    })
})

specialKeys.forEach((key) => {
    key.addEventListener('click', () => {
        if(key.id == "result"){
            result = evaluateTerm(term)
            if(result == "Error"){
                result = "You can't divide by zero"
            }
            term = ""
            termDiv.textContent = term
            resultDiv.textContent = result
            return;
        }
        if(key.id == "remove"){
            term = ""
            result = ""
            termDiv.textContent = term
            resultDiv.textContent = result
        }
    })
})