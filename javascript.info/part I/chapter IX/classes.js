/* ------ ChatGPT ------ */
// Task 1. Разработайте класс DataProcessor, который будет обрабатывать набор данных.
// Этот класс должен принимать массив объектов, содержащих информацию о пользователях.
class DataProcessor {
    #users;
    static totalProcessed = 0;

    constructor(users) {
        this.#users = users;
        DataProcessor.totalProcessed++;
    }

    _sortByAge() {
        return this.#users.sort((a, b) => a.age - b.age);
    }

    _filterByTag(tag) {
        return this.#users.filter(user => user.tags.includes(tag));
    }
}

class UserStatistics extends DataProcessor {
    getAverageAge() {
        const ages = this.#users.map(user => user.age);
        return ages.reduce((acc, age) => acc + age, 0) / ages.length;
    }

    getUniqueTags() {
        const tags = new Set(); 
        this.#users.forEach(user => user.tags.forEach(tag => tags.add(tag)));
        return Array.from(tags);
    }
}


const users = [
    { id: 1, name: "Alice", age: 25, registrationDate: "2023-01-10", tags: ["admin", "active"] },
    { id: 2, name: "Bob", age: 30, registrationDate: "2022-12-15", tags: ["editor"] },
    { id: 3, name: "Charlie", age: 28, registrationDate: "2023-01-05", tags: ["admin", "user"] },
    { id: 4, name: "David", age: 22, registrationDate: "2023-02-20", tags: ["user"] },
    { id: 5, name: "Eve", age: 30, registrationDate: "2022-11-30", tags: ["editor", "active"] }
  ];

const dataProcessor = new DataProcessor(users);
const userStats = new UserStatistics(users);

console.log(userStats.getAverageAge());
console.log(userStats.getUniqueTags());
console.log(dataProcessor._filterByTag("admin"));

/* ---------------------------------------------------------------------------------------------------------- */

// Task2. Создайте систему управления библиотекой, которая будет отслеживать книги, их авторов и жанры.
// Система должна позволять добавлять книги, удалять их, сортировать и фильтровать по различным критериям.
class Library {
    #books = [];
    static booksCount = 0;

    getBooks() {
        return this.#books;
    }

    addBook(book) {
        if (typeof book !== "object" || book === null) {
            throw new TypeError('Please, provide a valid book object!');
        }

        Library.booksCount++;
        this.#books.push(book);
        return 'Book is added!';
    }

    removeBook(bookTitle) {
        if (typeof bookTitle !== "string" || bookTitle.length === 0) {
            throw new TypeError('Please, provide a valid book title!');
        }

        Library.booksCount--;
        return this.#books.slice().sort((book1, book2) => book1.year - book2.year);
    }

    getBooksByGenre(genre) {
        return this.#books.filter(book => book.genre === genre);
    }

    getBooksSortedByYear() {
        return this.#books.sort((book1, book2) => book1.year - book2.year);
    }
}

class Book {
    constructor(title, author, genre, year) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    }
}

const library = new Library();

library.addBook({ title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960 });
library.addBook({ title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", year: 1932 });

/* ---------------------------------------------------------------------------------------------------------- */

// Task3. Создайте классы для управления университетом, включая студентов и курсы.
/* Класс Student:
 * Приватные свойства для хранения информации о студенте (имя, фамилия, ID).
 * Защищённые свойства для хранения списка курсов, на которые записан студент.
 * Статическое свойство, чтобы отслеживать общее количество студентов.
 * Методы для добавления и удаления курсов.
 * Метод для получения полной информации о студенте, включая курсы.
*/
/* Класс Course:
 * Приватные свойства для хранения информации о курсе (название, код, список студентов).
 * Защищённые свойства для хранения максимального количества студентов.
 * Статическое свойство для отслеживания общего количества курсов.
 * Методы для добавления и удаления студентов из курса.
 * Метод для получения информации о курсе, включая список студентов.
*/
/* Класс University:
 * Статические методы для получения общего количества студентов и курсов.
 * Метод для получения списка всех студентов, прошедших определённый курс.
 * Метод для получения информации о всех курсах.
*/
class Student {
    #firstName;
    #lastName;
    #id;
    _courses = [];

    static studentCount = 0;

    constructor(firstName, lastName, id) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#id = id;
        Student.studentCount++;
    }

    addCourse(course) {
        if (this._courses.includes(course)) {
            throw new Error("Student is already enrolled in this course.");
        }
        this._courses.push(course);
        course.addStudent(this);
    }

    removeCourse(course) {
        this._courses = this._courses.filter(c => c !== course);
        course.removeStudent(this);
    }

    getInfo() {
        return `${this.#firstName} ${this.#lastName} (ID: ${this.#id}), Courses: ${this._courses.map(c => c.name).join(", ")}`;
    }

    static getStudentCount() {
        return Student.studentCount;
    }
}

class Course {
    #name;
    #code;
    #students = [];
    _maxStudents;

    static courseCount = 0;

    constructor(name, code, maxStudents) {
        this.#name = name;
        this.#code = code;
        this._maxStudents = maxStudents;
        Course.courseCount++;
    }

    addStudent(student) {
        if (this.#students.length >= this._maxStudents) {
            throw new Error("Course is already at full capacity.");
        }
        if (!this.#students.includes(student)) {
            this.#students.push(student);
        }
    }

    removeStudent(student) {
        this.#students = this.#students.filter(s => s !== student);
    }

    getInfo() {
        return `Course: ${this.#name} (${this.#code}), Students: ${this.#students.map(s => s.getInfo()).join("; ")}`;
    }

    static getCourseCount() {
        return Course.courseCount;
    }

    get name() {
        return this.#name;
    }
}

class University {
    static getStudentCount() {
        return Student.getStudentCount();
    }

    static getCourseCount() {
        return Course.getCourseCount();
    }

    static getAllStudentsInCourse(course) {
        return course.getInfo();
    }
}

const student1 = new Student("John", "Doe", 1);
const student2 = new Student("Jane", "Smith", 2);

const course1 = new Course("Math 101", "MTH101", 2);
const course2 = new Course("History 101", "HIS101", 3);

student1.addCourse(course1);
student2.addCourse(course1);
student2.addCourse(course2);

console.log(University.getStudentCount()); // 2
console.log(University.getCourseCount()); // 2

console.log(course1.getInfo());