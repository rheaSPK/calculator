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
    return a / b
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