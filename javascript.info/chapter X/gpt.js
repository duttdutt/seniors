// /* -------------- Task 1 -------------- */
// Напишите функцию, которая обрабатывает массив данных о пользователях, проверяя их на корректность.
// 1. Проверить, что email пользователя содержит символ @ и точку ., имя не пустое, возраст - не отрицательное число.
//    Если одно из условий не выполняется, выбросить стандартную ошибку, соответствующую типу ошибки:
//    - TypeError для некорректного email.
//    - RangeError для некорректного возраста.
//    - Error для некорректного имени.
// 2. В случае любой ошибки, вывести соответствующее сообщение об ошибке.
// 3. В любом случае, после завершения работы функции (независимо от того, произошла ли ошибка),
//    выводить сообщение, что обработка данных завершена.
// 4. Вернуть массив валидных пользователей.
const users2 = [
    { "id": 1, "name": "Alice", "email": "alice@example.com", "age": 25 },
    { "id": 2, "name": "Bob", "email": "bob@example", "age": 20 },
    { "id": 3, "name": "", "email": "charlie@example.com", "age": 30 },
    { "id": 4, "name": "Dave", "email": "dave@example.com", "age": -5 },
    { "id": 5, "name": "Eve", "email": "eveexample.com", "age": 35 }
];

function getData2(users) {
    const filteredUsers = [];

    users.forEach((user) => {
        try {
            if (!user.email.includes('@') && !user.email.includes('!')) {
                throw new TypeError(`Invalid email for ${user.name}: ${user.email}`);
            }
            if (user.age < 0) {
                throw new RangeError(`Invalid age for ${user.name}: ${user.age}`);
            }
            if (!user.name) {
                throw new Error(`Invalid name for User with id ${user.id}: ${user.name}`);
            }

            filteredUsers.push(user);
        } catch (error) {
            if (error instanceof TypeError) {
                console.log(`ERROR: ${error.message}.`);
            } else if (error instanceof RangeError) {
                console.log(`ERROR: ${error.message}.`);
            } else if (error instanceof Error) {
                console.log(`ERROR: ${error.message}.`);
            }
        }
    });

    return filteredUsers;
}

console.log(getData2(users2));
// [
//     { "id": 1, "name": "Alice", "email": "alice@example.com", "age": 25 },
//     { "id": 3, "name": "Unknown", "email": "charlie@example.com", "age": 30 }
// ]
// ERROR: Invalid email for Bob: bob@example.
// ERROR: Invalid name for User with id 3: .
// ERROR: Invalid age for Dave: -5.
// ERROR: Invalid email for Eve: eveexample.com.
// Finally: Data processing complete.

/* -------------- Task 2 -------------- */
// Создать функцию, которая будет обрабатывать этот массив и возвращать 
// новый массив с отфильтрованными и обработанными данными.
const users = [
    { "id": 1, "name": "Alice", "email": "alice@example.com", "age": 25 },
    { "id": 2, "name": "Bob", "email": "bob@example", "age": 20 },
    { "id": 3, "name": "", "email": "charlie@example.com", "age": 30 },
    { "id": 4, "name": "Dave", "email": "dave@example.com", "age": -5 },
    { "id": 4, "name": "Dave", "email": "daveexample.com", "age": 5 },
];

/* Custom Errors */
// Главный класс кастомной ошибки.
class InvalidError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

// Подкласс кастомной ошибки для некорректной почты.
class InvalidEmailError extends InvalidError {
    /**
     * @param why - объект причины(отсутствие '.' или '@').
     * @param userEmail - Полученная почта пользователя.
     * @param statusCode - Код статуса ошибки.
    */
    constructor(message, why, userEmail, statusCode) {
        super(message);
        this.why = why;
        this.userEmail = userEmail;
        this.statusCode = statusCode;
    }
} 

// Подкласс кастомной ошибки для некорректного имени пользователя.
class InvalidNameError extends InvalidError {
    /**
     * @param newName - Новое имя для информирования пользователя в сообщении об ошибке.
     * @param statusCode - Код статуса ошибки.
    */
    constructor(message, newName, statusCode) {
        super(message);
        this.newName = newName;
        this.statusCode = statusCode;
    }
} 

//  Класс кастомной ошибки для некорректного возраста.
class InvalidAgeError extends InvalidError {
    /**
     * @param inputAge - Полученный возраст пользователя.
     * @param statusCode - Код статуса ошибки.
    */
    constructor(message, inputAge, statusCode) {
        super(message);
        this.inputAge = inputAge;
        this.statusCode = statusCode;
    }
} 

/**
 * @param {Array} users — Массив объектов пользователей.
 */
function getData(users) {
    const filteredUsers = users.filter((user) => {
        try {
            if (!user.name) {
                user.name = 'Unknown';
                throw new InvalidNameError('Your name is invalid', user.name, 1000);
            }

            if (!user.email.includes('@'))
                throw new InvalidEmailError('Your email is invalid', '@', user.email, 5555);

            if (!user.email.includes('.'))
                throw new InvalidEmailError('Your email is invalid', '.', user.email, 5555);

            if (user.age < 0)
                throw new InvalidAgeError('Your age is invalid', user.age, 0);

            return true;
        } catch (error) {
            if (error instanceof InvalidNameError) {
                console.log(`Warning: ${error.statusCode} - ${error.name}: ${error.message}. Now ur name is '${error.newName}'.`);
                return true;
            } else if (error.why === '@') {
                console.log(`ERROR: ${error.statusCode} - ${error.name}: ${error.message}. Your email not includes '${error.why}'.`);
            } else if (error.why === '.') {
                console.log(`ERROR: ${error.statusCode} - ${error.name}: ${error.message}. Your email not includes '${error.why}'.`);
            } else if (error instanceof InvalidAgeError) {
                console.log(`ERROR: ${error.statusCode} - ${error.name}: ${error.message}. Your age - ${error.inputAge} is lower than 0.`);
            }
        }
    });

    return filteredUsers;
}

console.log(getData(users));
// [
//     { "id": 1, "name": "Alice", "email": "alice@example.com", "age": 25 },
//     { "id": 3, "name": "Charlie", "email": "charlie@example.com", "age": 30 }
// ]
