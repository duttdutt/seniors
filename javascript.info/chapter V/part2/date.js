/** Dates
 *
 */
let date;
Date; // [Function: Date]
Date.toString(); // function Date() { [native code] }
new Date().toString(); // Sat Sep 14 2024 00:49:41 GMT+0300 (Moscow Standard Time)
Date.UTC(2024, 11, 30, 24, 60, 60, 0); // 1735606860000
date = new Date().toTimeString(); // 00:50:06 GMT+0300 (Moscow Standard Time)
date = new Date().toDateString(); // Sat Sep 14 2024
date = new Date().toISOString(); // 2024-09-13T21:50:33.443Z
date = new Date().toLocaleString(); // 9/14/2024, 12:50:57 AM
date = new Date().toLocaleTimeString(); // 9/14/2024, 12:50:57 AM

new Date(); // "2024-09-13T21:45:46.780Z"
Date.now(); // 1726263970204
+new Date(); // 1726263970204
new Date().getTime(); // 1726263970204















// Покажите день недели
function getWeekDay(date) {
    const day = date.getDay();

    switch (day) {
        case 1:
            return 'Понедельник'
        case 2:
            return 'Вторник'
        case 3:
            return 'Среда'
        case 4:
            return 'Четверг'
        case 5:
            return 'Пятница'
        case 6:
            return 'Суббота'
        case 7:
            return 'Воскресенье'
    }
}
getWeekDay(new Date(2012, 0, 3))


// День недели в европейской нумерации
function getLocalDay(date) {
    let day = date.getDay();

    if (day == 0) {
        day = 7;
    }

    return day;
}
console.log(getLocalDay(new Date(2012, 0, 8)));


// Какой день месяца был много дней назад?
function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

let date1 = new Date(2015, 0, 2);
console.log(getDateAgo(date1, 1));
console.log(getDateAgo(date1, 2));
console.log(getDateAgo(date1, 365));