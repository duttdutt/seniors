/* -------------------------------------------------------------------------- */
/* ------------------------------ Первая ------------------------------------ */
/* -------------------------------------------------------------------------- */
/* Дан объект: { 1: 'a', 2: 'b', 3: 'c' }
Нужно поменять местами его ключи и значения чтобы получилось так: { a: 1, b: 2, c: 3 }
*/
const reverseObject = (obj) => {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    result[value] = key;
  }

  return result;
};
/* -------------------------------------------------------------------------- */
/* ------------------------------ Вторая ------------------------------------ */
/* -------------------------------------------------------------------------- */
/*
 * Описание: У вас есть JSON-файл с логами сервера. Каждый лог представляет собой
 * объект с полями timestamp (строка в формате ISO), event (строка, описывающая
 * событие), и details (объект с дополнительными данными).
 * Напишите функцию analyzeServerLogs, которая принимает JSON-строку с логами и
 * возвращает объект с анализом:

 * 'totalEvents': общее количество событий.
 * 'eventsByDate': объект, где ключи — это даты (в формате YYYY-MM-DD),
 * а значения — массивы событий, произошедших в этот день.
 * 'mostRecentEvent': самое последнее событие.
 *
// {
//   totalEvents: 3,
//   eventsByDate: {
//     "2023-10-01": [
//       {timestamp: "2023-10-01T12:00:00Z", event: "User Login", details: {userId: 123}},
//       {timestamp: "2023-10-01T14:00:00Z", event: "File Upload", details: {fileName: "report.pdf"}}
//     ],
//     "2023-10-02": [
//       {timestamp: "2023-10-02T09:00:00Z", event: "User Logout", details: {userId: 123}}
//     ]
//   },
//   mostRecentEvent: {timestamp: "2023-10-02T09:00:00Z", event: "User Logout", details: {userId: 123}}
// } */
//
/* -------------------------------------------------------------------------- */
const analyzeServerLogs = (serverLogs) => {
  // Работай, брат
};

var serverLogs = `[
  {"timestamp": "2023-10-01T12:00:00Z", "event": "User Login", "details": {"userId": 123}},
  {"timestamp": "2023-10-01T14:00:00Z", "event": "File Upload", "details": {"fileName": "report.pdf"}},
  {"timestamp": "2023-10-02T09:00:00Z", "event": "User Logout", "details": {"userId": 123}},
  {"timestamp": "2024-10-02T09:00:00Z", "event": "User Logout", "details": {"userId": 123}}
]`;

const analysis = analyzeServerLogs(serverLogs);
console.log(analysis);

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/* ------------------------------ Третья ------------------------------------ */
/* -------------------------------------------------------------------------- */
const removeStars = function (inputString) {
  const resultedStack = [];

  for (const character of inputString) {
    if (character === "*" && resultedStack.length) {
      resultedStack.pop();
    } else {
      resultedStack.push(character);
    }
  }

  return resultedStack.join("");
};

console.log(removeStars("leet**cod*e")); // 'lecoe'
console.log(removeStars("erase*****")); // ''
console.log(removeStars("1*vicww**ts*os*r")); // 'victor'

function analyzeServerLogs(serverLogs) {
  return JSON.parse(serverLogs).reduce(
    (acc, curr) => {
      acc.totalEvents++;

      // Getting 'eventByDate'
      const initialDate = new Date(curr.timestamp);
      const year = initialDate.getFullYear();
      let month = initialDate.getMonth();
      let date = initialDate.getDate();

      month = String(month).length === 1 ? `0${month}` : month;
      date = String(date).length === 1 ? `0${date}` : date;

      const resultedDate = `${year}-${month}-${date}`;

      if (typeof acc.eventsByDate[resultedDate] === "undefined") {
        acc.eventsByDate[resultedDate] = [];
      }
      acc.eventsByDate[resultedDate].push(curr);

      // Getting 'mostRecentEvent'
      if (
        acc.mostRecentEvent === null ||
        Date.parse(acc.mostRecentEvent) < Date.parse(curr.timestamp)
      ) {
        acc.mostRecentEvent = curr.timestamp;
      }

      return acc;
    },
    {
      totalEvents: 0,
      eventsByDate: {},
      mostRecentEvent: null,
    },
  );
}
