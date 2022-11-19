// Mathematical patterns
const NUM_REG = /-?\d+(?:\.\d+)*/; // A number with optional negative sign and demical places
const MUL_DIV_REG = new RegExp(`${NUM_REG.source}[*\\/]${NUM_REG.source}(?:[*\\/]${NUM_REG.source})*`, "g"); // Chain of multiplication/divisions
const ADD_SUB_REG = new RegExp(`${NUM_REG.source}[+-]${NUM_REG.source}(?:[+-]${NUM_REG.source})*`, "g"); // Chain of additions/subtractions
const MATH_REG = new RegExp(`^${NUM_REG.source}(?:[*\\/+-]${NUM_REG.source})*$`); // match a valid math expression

// Calculation functions
function calculate(mathExp) {

    // trim and check for syntax errors
    mathExp = mathExp.replace(/\s/g, "");
    if (mathExp === "") return "EMPTY!";
    if (!mathExp.match(MATH_REG)) return "SYNTAX ERROR!";

    // Match and evaluate all multiplications/divisions first
    mathExp = mathExp.replace(MUL_DIV_REG, multiplyDivide);

    // Evaluate additions/subtractions and return final value
    return Number(addSubtract(mathExp));
}

function multiplyDivide(mulDivExp) {
    return mulDivExp.split(/(?<=\d)(?=[*\/])/g) // Split into operator-number tokens, ex: 6*5.8/-7 => [6, *5.8, /-7]
            .reduce((n, opNum) => opNum[0] == "*" 
                                    ? +n * Number(opNum.slice(1)) 
                                    : +n / Number(opNum.slice(1)));
}

function addSubtract(addSubExp) {
    return addSubExp.split(/(?<=[^+-])(?=[+-])/g) // Split into operator-number tokens, ex: 6+5--7 => [6, +5, --7]
            .reduce((n, opNum) => opNum[0] == "+" 
                                    ? +n + Number(opNum.slice(1)) 
                                    : +n - Number(opNum.slice(1)));
}
