const displayElement = document.querySelector("#display");
const inputElement = document.querySelector("#input-1");

inputElement.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        displayElement.textContent = calculate(e.target.value);
    }
});