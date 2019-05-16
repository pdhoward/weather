

// To convert temperature from fahrenheit to celcius
const fahToCel = (tempInFahrenheit) => {
        var tempInCelcius = Math.round((5 / 9) * (tempInFahrenheit - 32) )
        return tempInCelcius;
    }

export default fahToCel