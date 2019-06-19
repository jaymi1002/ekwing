/*
 * @Author: lifangfang
 * @Date:   2019-04-03 16:00:41
 * @Last Modified by:   lifangfang
 * @Last Modified time: 2019-06-12 12:07:23
 */
function judgeLeap(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    return false;
}

function getMonthDays(year, month) {
    let maxMonth = [1, 3, 5, 7, 8, 10, 12];
    let minMonth = [2];
    let middleMonth = [4, 6, 9, 11];
    if (maxMonth.indexOf(month) > -1) {
        return 31;
    }
    if (middleMonth.indexOf(month) > -1) {
        return 30;
    }
    if (minMonth.indexOf(month) > -1) {
        return judgeLeap(year) ? 29 : 28;
    }

}

function getMonthInfo(year, month) {
    let date = new Date();
    date.setFullYear(year);
    date.setMonth(month - 1);
    let days = getMonthDays(year, month);
    let dayTable = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
    };
    let i = 1,
        cols = 0,
        firstDay = 0,
        lastDay = 0;
    while (i < days + 1) {
        date.setDate(i);
        let day = date.getDay();
        if (day === 0 && i != 1) {
            cols++;
        }
        if (i === 1) {
            firstDay = day;
        }
        if (i === days) {
            lastDay = day;
        }
        dayTable[cols][day] = {
            year: year,
            month: month,
            date: i
        };
        i++;
    }

    //补充虚位
    //前补位
    let preMonth, preYear, preMonthFinalDate;
    if (month - 1 < 1) {
        preYear = year - 1;
        preMonth = month + 11;
    } else {
        preYear = year;
        preMonth = month - 1;
    }
    preMonthFinalDate = getMonthDays(preYear, preMonth);
    while (--firstDay >= 0) {
        dayTable[0][firstDay] = {
            year: preYear,
            month: preMonth,
            date: preMonthFinalDate--
        }
    }
    //后补位
    let nextMonth, nextYear, nextMonthFirstDate = 1;
    if (month + 1 > 12) {
        nextYear = year + 1;
        month = month - 11;
    } else {
        nextYear = year;
        nextMonth = month + 1;
    }
    while (cols < 6) {
        lastDay++;
        if (lastDay < 7) {
            dayTable[cols][lastDay] = {
                year: nextYear,
                month: nextMonth,
                date: nextMonthFirstDate++
            }
        } else {
            lastDay = -1;
            cols++;
        }
    }
    return dayTable;
}

function getNowYMDHM() {
    let date = new Date();
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        hour: date.getHours(),
        min: date.getMinutes()
    }
}

function formatDate({ year, month, date }) {
    return `${year}-${coverZore(month)}-${coverZore(date)}`;
}

function isNowDate(date) {
    return date === formatDate(getNowYMDHM());
}

function coverZore(number) {
    if (number < 10) {
        return '0' + number;
    }
    return number;
}

export {
    judgeLeap,
    getMonthDays,
    getMonthInfo,
    getNowYMDHM,
    formatDate,
    isNowDate,
    coverZore,
}
