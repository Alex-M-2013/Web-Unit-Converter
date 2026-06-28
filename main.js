// Hide loading screen once page loads

const loading_screen = document.getElementById("loading-screen");
window.addEventListener('load', function () {
    loading_screen.style.display = 'none';
})

let selected_conversion = "";
let conversion_multiplier = null;

const miles_to_kilometers_multipler = 1.60934;
const kilometers_to_miles_multiplier = 0.621371;

const select_unit = document.getElementById('select-unit');
const user_input = document.getElementById('user-input');
const convert_button = document.getElementById('convert-button');
const output = document.getElementById('output');

function handle_select() {
    selected_conversion = select_unit.value; // Gets a string value

    if (selected_conversion === "Miles to Kilometers") {
        conversion_multiplier = miles_to_kilometers_multipler;
    }
    else if (selected_conversion === "Kilometers to Miles") {
        conversion_multiplier = kilometers_to_miles_multiplier;
    }
}

function convert() {
    const user_input_value = user_input.value.trim();
    
    output.style.color = "rgba(0, 0, 0, 1)";
    output.style.fontStyle = 'normal'

    if (selected_conversion === '') {
        output.innerText = "You need to enter a conversion first!";
        return;
    }
    else if (String(user_input_value) === '' || isNaN(user_input_value)) {
        output.innerText = "You need to enter a valid number!"
        return;
    }

    const converted_value = user_input_value * conversion_multiplier
    output.innerText = converted_value
}