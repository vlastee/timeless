
/**
 * Returns time difference between 2 dates
 * @param {String} dateTimeEnd 
 * @param {String} dateTimeStart
 * @returns difference between 2 dates im milliseconds
 */
 function timeDifferenceBeetween(dateTimeEnd, dateTimeStart) {
   return (toJSDate(dateTimeEnd) - toJSDate(dateTimeStart));
}

/**
 * Converts date-time string to JS Date
 * @param {String} date 
 * @returns {Date} resulting JS Date
 */
 function toJSDate(date){
    return new Date(date);
}

/**
 * Returns total time difference from array of timeframes
 * @param {Array} timeframes - ex. [{start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 12:12:16'}]
 * @returns time in milliseconds
 */
 function returnTotalTimeFromArrayOfTimeframes(timeframes){
    let totalTime = 0;
    timeframes.map((timeframe)=>{
        totalTime+=timeDifferenceBeetween(timeframe.end_time, timeframe.start_time);
    });
    return (totalTime);
}

/**
 * Returns Total time difference ("0 d. 12:21")
 * @param {Array} timeframes - ex. [{start_time: '2021-08-14 07:07:14', end_time: '2021-08-14 12:12:16'}]
 * @returns {String} Total time difference 
 */
export function millisecondsToTime(timeframes){
    let time = returnTotalTimeFromArrayOfTimeframes(timeframes);
    let days = 0;
    let hours = 0;
    let minutes = 0;
    days = time/1000/60/60/24;
    
    if(days<1){
        days = 0; 
    }


    hours = Math.trunc(time/1000/60/60 - days*24);
    minutes = Math.trunc(time/1000/60 - hours*60);

    return (days+' d. '+hours+':'+minutes);
}

/**
 * 
 * @param {String} endDate 
 * @returns {String} 
 */
export function timeLeftInDays(endDate){
    console.log(endDate);
    let daysLeft = (Math.trunc((new Date(endDate) - new Date())/1000/60/60/24));
    console.log('DAYS LEFT: '+daysLeft);
    return daysLeft+` day${daysLeft>1?'s':''} left.`;
}

