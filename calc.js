const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.id;

        if (buttonValue === 'AC') {
            currentInput = '';
        } else if (buttonValue === 'DEL') {
            currentInput = currentInput.slice(0, -1);
        } else if (currentInput === '=') {
            try {
                currentInput = eval(currentInput);
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            currentInput += buttonValue;
        }

        display.value = currentInput;
    });
})