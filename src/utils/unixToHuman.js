

 const unixToHuman = (timezone, timestamp) => {
        /* READ THIS BEFORE JUDGING & DEBUGGING
        For any location beyond the arctic circle and the
        antarctic circle, the weather api does not return certain
        keys/values in each of this.rawWeatherData.daily.data[some_array_index].
        Due to this, console throws up an error.
        The code is correct, the problem is with the API.
        May be later on I will add some padding to tackle missing values.
        */
        var moment = require('moment-timezone'); // for handling date & time
        var decipher = new Date(timestamp * 1000);
        var human = moment(decipher)
          .tz(timezone)
          .format('llll');
        var timeArray = human.split(' ');
        var timeNumeral = timeArray[4];
        var timeSuffix = timeArray[5];
        var justTime = timeNumeral + ' ' + timeSuffix;
        var monthDateArray = human.split(',');
        var monthDate = monthDateArray[1].trim();
        return {
          fullTime: human,
          onlyTime: justTime,
          onlyMonthDate: monthDate
    };
  }
  
  export default {
    unixToHuman
  }