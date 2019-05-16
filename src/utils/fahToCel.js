
export default { 
    // To convert temperature from fahrenheit to celcius
    fahToCel(tempInFahrenheit) {
        var tempInCelcius = Math.round((5 / 9) * (tempInFahrenheit — 32));
        return tempInCelcius;
    }
}