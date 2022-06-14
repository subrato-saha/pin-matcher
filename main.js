let matched = document.getElementById("pin-matched");
matched.style.display = "none";
let mismatched = document.getElementById("pin-mismatched");
mismatched.style.display = "none";

function generatePin(){
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    document.getElementById("random-pin").value = randomNumber;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
        if (number == "<"){
            console.log("You Clicked on backspace");
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});

function verifyPin() {
    const pin = document.getElementById('random-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('pin-matched');
    const failError = document.getElementById('pin-mismatched');
    if (pin == typedNumbers) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }
}