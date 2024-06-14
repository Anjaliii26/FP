document.addEventListener("DOMContentLoaded", () => {
    const inputBox = document.getElementById('inputBox');
    const buttons = document.querySelectorAll('.button');
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;

            switch (value) {
                case '=':
                    try {
                        currentInput = eval(currentInput) || "";
                    } catch {
                        currentInput = "Error";
                    }
                    inputBox.value = currentInput;
                    break;
                case 'AC':
                    currentInput = "";
                    inputBox.value = "0";
                    break;
                case 'DEL':
                    currentInput = currentInput.slice(0, -1);
                    inputBox.value = currentInput || "0";
                    break;
                default:
                    if (inputBox.value === "0" || inputBox.value === "Error") {
                        inputBox.value = value;
                    } else {
                        inputBox.value += value;
                    }
                    currentInput = inputBox.value;
            }
        });
    });

    inputBox.addEventListener('keydown', (e) => {
        e.preventDefault();
        const key = e.key;

        if (!isNaN(key) || ['+', '-', '*', '/', '%', '.', 'Enter', 'Backspace'].includes(key)) {
            switch (key) {
                case 'Enter':
                    try {
                        currentInput = eval(currentInput) || "";
                    } catch {
                        currentInput = "Error";
                    }
                    inputBox.value = currentInput;
                    break;
                case 'Backspace':
                    currentInput = currentInput.slice(0, -1);
                    inputBox.value = currentInput || "0";
                    break;
                default:
                    inputBox.value += key;
                    currentInput = inputBox.value;
            }
        }
    });
});
