const displayElement = document.querySelector("#display");
const inputElement = document.querySelector("#input-1");
const keyNumOpElements = document.querySelectorAll(".key-num, .key-op");
const keyEqElement = document.querySelector(".key-eq");

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

keyEqElement.addEventListener("click", e => {
    let result = calculate(inputElement.value);
    displayElement.textContent = result;
})