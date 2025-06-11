let currentDisplay = '0';

function updateDisplay() {
    document.getElementById('display').innerText = currentDisplay;
}

function appendToDisplay(value) {
    if (currentDisplay === '0' && value !== '.') {
        currentDisplay = value;
    } else {
        currentDisplay += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = '0';
    updateDisplay();
}

function backspace() {
    if (currentDisplay.length === 1) {
        currentDisplay = '0';
    } else {
        currentDisplay = currentDisplay.slice(0, -1);
    }
    updateDisplay();
}

function calculate() {
    try {
        currentDisplay = eval(currentDisplay).toString();
    } catch (error) {
        currentDisplay = 'Erro';
    }
    updateDisplay();
}

// Inicializa o display
updateDisplay();