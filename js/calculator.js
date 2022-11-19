// Mathematical patterns
const NUM_REG = /-?\d+(?:\.\d+)*/; // A number with optional negative sign and demical places
const MUL_DIV_REG = new RegExp(`${NUM_REG.source}[*\\/]${NUM_REG.source}(?:[*\\/]${NUM_REG.source})*`, "g"); // Chain of multiplication/divisions
const ADD_SUB_REG = new RegExp(`${NUM_REG.source}[+-]${NUM_REG.source}(?:[+-]${NUM_REG.source})*`, "g"); // Chain of additions/subtractions
const MATH_REG = new RegExp(`^${NUM_REG.source}(?:[*\\/+-]${NUM_REG.source})*$`); // match a valid math expression

// Calculation functions
function calculate(mathExp) {
    if (mathExp === "") return "EMPTY!";

    // trim and check for syntax errors
    mathExp = mathExp.replace(/\s/g, "");
    if (!mathExp.match(MATH_REG)) return "SYNTAX ERROR!";

    // Match and evaluate all multiplications/divisions first
    mathExp = mathExp.replace(MUL_DIV_REG, multiplyDivide);

    // Evaluate additions/subtractions and return final value
    return addSubtract(mathExp);
}

function multiplyDivide(mulDivExp) {
    console.log(mulDivExp.split(/(?<=\d)(?=[*\/])/g));
    return mulDivExp.split(/(?<=\d)(?=[*\/])/g).reduce((n, opNum) => opNum[0] == "*" ? +n * Number(opNum.slice(1)) : +n / Number(opNum.slice(1)));
}

function addSubtract(addSubExp) {
    console.log(addSubExp.split(/(?<=\d)(?=[+-])/g));
    return addSubExp.split(/(?<=\d)(?=[+-])/g).reduce((n, opNum) => opNum[0] == "+" ? +n + Number(opNum.slice(1)) : +n - Number(opNum.slice(1)));
}
