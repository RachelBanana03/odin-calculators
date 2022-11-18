// Mathematical patterns
const NUM_REG = /\d+(?:\.\d+)*/; // A number with optional demical places
const MUL_DIV_REG = new RegExp(`${NUM_REG.source}[*\\/]${NUM_REG.source}(?:[*\\/]${NUM_REG.source})*`, "g"); // Chain of multiplication/divisions
const ADD_SUB_REG = new RegExp(`${NUM_REG.source}[+-]${NUM_REG.source}(?:[+-]${NUM_REG.source})*`, "g"); // Chain of additions/subtractions

// /**
//  * Evaluate a mathematical expression
//  * @param {string} mathExp 
//  * @returns {number} 
//  */
function calculate(mathExp) {
    // check for syntax errors
    // check for overflow

    // Match and evaluate all multiplications/divisions first
    mathExp = mathExp.replace(MUL_DIV_REG, multiplyDivide);

    // Evaluate additions/subtractions and return final value
    return addSubtract(mathExp);
}

function multiplyDivide(mulDivExp) {
    return mulDivExp.split(/(?=[*\/])/g).reduce((n, opNum) => opNum[0]=="*"? +n*Number(opNum.slice(1)): +n/Number(opNum.slice(1)));
}

function addSubtract(addSubExp) {
    return addSubExp.split(/(?=[+-])/g).reduce((n, opNum) => opNum[0]=="+"? +n+Number(opNum.slice(1)): +n-Number(opNum.slice(1)));
}


const a = calculate("9342+3243*5242/6545-5454/4545/34/45");
console.log(a);