const displayElement = document.querySelector("#display");
const displayDefaultText = displayElement.textContent;
const inputElement = document.querySelector("#input-1");
const keyNumOpElements = document.querySelectorAll(".key-num, .key-op");

function displayResult() {
    let result = calculate(inputElement.value);

    // process result for syntax errors/ NaN/ infinity
    if (result === "") return;
    if (typeof result === "string" || !isFinite(result)) {
        displayElement.classList.add("display-error");
    } else {
        result = parseFloat(result.toFixed(10));
        displayElement.classList.remove("display-error");
    }

    displayElement.textContent = result;
}

inputElement.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        displayResult();
    }
});

keyNumOpElements.forEach(keyNum => keyNum.addEventListener("click", e => {
    inputElement.value += e.target.getAttribute("data-key");
}));

document.querySelector(".key-eq").addEventListener("click", displayResult);

document.querySelector(".key-c").addEventListener("click", () => {
    inputElement.value = inputElement.value.slice(0, -1);
});

document.querySelector(".key-ac").addEventListener("click", () => {
    inputElement.value = "";
    displayElement.textContent = displayDefaultText;
});