const temperatureInput = document.getElementById('temperature');
const unitFromSelect = document.getElementById('unitFrom');
const convertButton = document.getElementById('convertButton');
const resultElement = document.getElementById('result');

convertButton.addEventListener('click', () => {
    const temperatureValue = parseFloat(temperatureInput.value);
    const unitFrom = unitFromSelect.value;
    
    if (!isNaN(temperatureValue)) {
        if (unitFrom === 'celsius') {
            const fahrenheitValue = temperatureValue * 9/5 + 32;
            const kelvinValue = temperatureValue + 273.15;
            resultElement.innerHTML = `
                Fahrenheit: ${fahrenheitValue.toFixed(2)}°F<br>
                Kelvin: ${kelvinValue.toFixed(2)} K
            `;
        } else if (unitFrom === 'fahrenheit') {
            const celsiusValue = (temperatureValue - 32) * 5/9;
            const kelvinValue = (temperatureValue - 32) * 5/9 + 273.15;
            resultElement.innerHTML = `
                Celsius: ${celsiusValue.toFixed(2)}°C<br>
                Kelvin: ${kelvinValue.toFixed(2)} K
            `;
        } else if (unitFrom === 'kelvin') {
            const celsiusValue = temperatureValue - 273.15;
            const fahrenheitValue = (temperatureValue - 273.15) * 9/5 + 32;
            resultElement.innerHTML = `
                Celsius: ${celsiusValue.toFixed(2)}°C<br>
                Fahrenheit: ${fahrenheitValue.toFixed(2)}°F
            `;
        }
    } else {
        resultElement.textContent = 'Please enter a valid temperature.';
    }
});
