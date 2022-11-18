// Mathematical patterns
const NUM_REG = /\d+(?:\.\d+)*/;
const MUL_DIV_REG = new RegExp(`${NUM_REG.source}[*\\/]${NUM_REG.source}(?:[*\\/]${NUM_REG.source})*`, "g");
const ADD_SUB_REG = new RegExp(`${NUM_REG.source}[+-]${NUM_REG.source}(?:[+-]${NUM_REG.source})*`, "g");

console.log(temp.source);
console.log(MUL_DIV_REG.source);
console.log(temp.source === MUL_DIV_REG.source);

// /**
//  * Evaluate a mathematical expression
//  * @param {string} mathExp 
//  * @returns {number} 
//  */
function calculate(mathExp) {
    // check for syntax errors
    // check for overflow

    // math for multiplication and division
    let matchedExp = mathExp.match(/\d+(?:\.\d+)*[*\/]\d+(?:\.\d+)*(?:[*\/]\d+(?:\.\d+)*)*/g);
    return matchedExp;
}


const a = calculate("9342+3243*5242/6545-5454/4545/34/45");
console.log(a);