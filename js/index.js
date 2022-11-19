const displayElement = document.querySelector("#display");
const inputElement = document.querySelector("#input-1");
const keyNumOpElements = document.querySelectorAll(".key-num, .key-op");

inputElement.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        let result = calculate(e.target.value);
        displayElement.textContent = result;
    }
});

keyNumOpElements.forEach(keyNum => keyNum.addEventListener("click", e => {
    console.log(e.target.getAttribute("data-key"));
    inputElement.value += e.target.getAttribute("data-key");
}));