const conversionSelect = document.getElementById('conversion-select');

const buttonLength = document.getElementById('button-length');
const buttonWeight = document.getElementById('button-weight');
const buttonArea = document.getElementById('button-area');
const buttonTemperature = document.getElementById('button-temperature');
const numberInput = document.getElementById('numberInput');

conversionSelect.addEventListener('change', function() {
    buttonLength.style.display = 'none';
    buttonWeight.style.display = 'none';
    buttonArea.style.display = 'none';
    buttonTemperature.style.display = 'none';

    switch (conversionSelect.value) {
        case 'Length':
            buttonLength.style.display = 'block';
            break;
        case 'Weight':
            buttonWeight.style.display = 'block';
            break;
        case 'Area':
            buttonArea.style.display = 'block';
            break;
        case 'Temperature':
            buttonTemperature.style.display = 'block';
            break;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("myButton");

    submitButton.addEventListener("click", function () {
        const numberInput = parseFloat(document.getElementById("numberInput").value);
        const conversionSelect = document.getElementById("conversion-select").value;

        let fromUnit, toUnit;
        if (conversionSelect === "Length") {
            fromUnit = document.getElementById("length-select").value;
            toUnit = document.getElementById("length-select-to").value;
        } else if (conversionSelect === "Weight") {
            fromUnit = document.getElementById("weight-select").value;
            toUnit = document.getElementById("weight-select-to").value;
        } else if (conversionSelect === "Area") {
            fromUnit = document.getElementById("area-select").value;
            toUnit = document.getElementById("area-select-to").value;
        } else if (conversionSelect === "Temperature") {
            fromUnit = document.getElementById("temp-select").value;
            toUnit = document.getElementById("temp-select-to").value;
        }

        if (numberInput && conversionSelect && fromUnit && toUnit) {
            let result = calculateResult(numberInput, conversionSelect, fromUnit, toUnit);

            const resultContainer = document.getElementById("resultContainer");
            const resultText = document.getElementById("resultText");
            const resultParameter = document.getElementById("resultParameter");

            resultText.textContent = result;
            resultParameter.textContent = toUnit;
            resultContainer.style.display = "block";
            resultParameter
        } else {
            alert("Please fill in all fields.");
        }
    });
});

function calculateResult(value, conversionType, fromUnit, toUnit) {
    let result;
    switch (conversionType) {
        case "Length":
            switch (fromUnit) {
                case "Meter":
                    if (toUnit === "Centimeter") result = value * 100;
                    else if (toUnit === "Millimeter") result = value * 1000;
                    else result = value;
                    break;
                case "Centimeter":
                    if (toUnit === "Meter") result = value / 100;
                    else if (toUnit === "Millimeter") result = value * 10;
                    else result = value;
                    break;
                case "Millimeter":
                    if (toUnit === "Meter") result = value / 1000;
                    else if (toUnit === "Centimeter") result = value / 10;
                    else result = value;
                    break;
            }
            break;

        case "Weight":
            switch (fromUnit) {
                case "Kilogram":
                    if (toUnit === "Gram") result = value * 1000;
                    else if (toUnit === "Pound") result = value * 2.20462;
                    else result = value;
                    break;
                case "Gram":
                    if (toUnit === "Kilogram") result = value / 1000;
                    else if (toUnit === "Pound") result = value * 0.00220462;
                    else result = value;
                    break;
                case "Pound":
                    if (toUnit === "Kilogram") result = value / 2.20462;
                    else if (toUnit === "Gram") result = value * 453.592;
                    else result = value;
                    break;
            }
            break;

        case "Area":
            switch (fromUnit) {
                case "Square-Meter":
                    if (toUnit === "Square-Kilometer") result = value / 1000000;
                    else if (toUnit === "Square-Foot") result = value * 10.7639;
                    else result = value;
                    break;
                case "Square-Kilometer":
                    if (toUnit === "Square-Meter") result = value * 1000000;
                    else if (toUnit === "Square-Foot") result = value * 1.076e7;
                    else result = value;
                    break;
                case "Square-Foot":
                    if (toUnit === "Square-Meter") result = value / 10.7639;
                    else if (toUnit === "Square-Kilometer") result = value / 1.076e7;
                    else result = value;
                    break;
            }
            break;

        case "Temperature":
            if (fromUnit === "Celsius") {
                if (toUnit === "Fahrenheit") result = (value * 9/5) + 32;
                else if (toUnit === "Kelvin") result = value + 273.15;
                else result = value;
            } else if (fromUnit === "Fahrenheit") {
                if (toUnit === "Celsius") result = (value - 32) * 5/9;
                else if (toUnit === "Kelvin") result = (value + 459.67) * 5/9;
                else result = value;
            } else if (fromUnit === "Kelvin") {
                if (toUnit === "Celsius") result = value - 273.15;
                else if (toUnit === "Fahrenheit") result = (value * 9/5) - 459.67;
                else result = value;
            }
            break;

        default:
            result = "Unknown Conversion Type";
    }
    return result;
}
