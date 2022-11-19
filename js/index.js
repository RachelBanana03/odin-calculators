const displayElement = document.querySelector("#display");
const inputElement = document.querySelector("#input-1");
const keyNumOpElements = document.querySelectorAll(".key-num, .key-op");

function displayResult() {

}

inputElement.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        let result = calculate(e.target.value);
        displayElement.textContent = result;
    }
});

keyNumOpElements.forEach(keyNum => keyNum.addEventListener("click", e => {
    inputElement.value += e.target.getAttribute("data-key");
}));

document.querySelector(".key-eq").addEventListener("click", () => {
    let result = calculate(inputElement.value);
    displayElement.textContent = result;
});

document.querySelector(".key-c").addEventListener("click", () => {
    inputElement.value = inputElement.value.slice(0, -1);
});

document.querySelector(".key-ac").addEventListener("click", () => {
    inputElement.value = ""
});