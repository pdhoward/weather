

    // To convert the air pressure reading from millibar to kilopascal
const milibarToKiloPascal = (pressureInMilibar) => {
    var pressureInKPA = pressureInMilibar * 0.1;
    return Math.round(pressureInKPA);
}

export default milibarToKiloPascal