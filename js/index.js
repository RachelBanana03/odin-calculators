const displayElement = document.querySelector("#display");
const inputElement = document.querySelector("#input-1");

inputElement.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        e.preventDefault();
        let result = calculate(e.target.value);
        displayElement.textContent = result;
    }
});