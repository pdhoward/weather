
export default { 
    // To convert the air pressure reading from millibar to kilopascal
    milibarToKiloPascal(pressureInMilibar) {
        var pressureInKPA = pressureInMilibar * 0.1;
        return Math.round(pressureInKPA);
    }

}