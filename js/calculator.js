// Mathematical patterns
const NUM_REG = /\d+(?:\.\d+)*/; // A number with optional demical places
const MUL_DIV_REG = new RegExp(`${NUM_REG.source}[*\\/]${NUM_REG.source}(?:[*\\/]${NUM_REG.source})*`, "g"); // Chain of multiplication/divisions
const ADD_SUB_REG = new RegExp(`${NUM_REG.source}[+-]${NUM_REG.source}(?:[+-]${NUM_REG.source})*`, "g"); // Chain of additions/subtractions
const MATH_REG = new RegExp(`^${NUM_REG.source}(?:[*\\/+-]${NUM_REG.source})*$`); // match a valid math expression

// /**
//  * Evaluate a mathematical expression
//  * @param {string} mathExp 
//  * @returns {number} 
//  */
function calculate(mathExp) {
    // trim and check for syntax errors
    mathExp = mathExp.replace(/\s/g, "");
    if (!mathExp.match(MATH_REG)) return "SYNTAX ERROR!";

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


// test
const a = "*9342+3243*5242/6545-5454/4545/34/45";
const b = "3/0*2";
const c = "2+2";
const d = "24342.3";
console.log(calculate(d));