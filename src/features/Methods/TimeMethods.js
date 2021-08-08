
/**
 * Returns time difference between 2 dates
 * @param {string} date1 
 * @param {string} date2
 * @returns hours and minutes
 */
export function timeDifferenceBeetween(date1, date2) {
    let t1 = date1.split(':'), t2 = date2.split(':');
    let d1 = new Date(t1[0], t1[1], t1[2], t1[3], t1[4]),
        d2 = new Date(t2[0], t2[1], t2[2], t2[3], t2[4]);
    let diff = new Date(d2 - d1);
    console.log("Time difference"+diff);
}