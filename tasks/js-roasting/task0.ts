/* --- Бейджики --- */
// Наши сотрудники хотят бейджики, поэтому нужно написать функцию, которая поможет нам их создавать.
// На вход она ждет Имя и Фамилию, а возвращает объект вида: 
// { firstName, lastName, fullName }, где каждое свойство можно читать и менять.
// Если предметом изменений является firstName или lastName, то правим fullName.
// Если же это fullName, то заменяем firstName и lastName.
interface PersonBadgeObject {
  firstName: string;
  lastName: string;
  fullName: string;
}

function createBadge(firstName: string, lastName: string): PersonBadgeObject {
  const resultingObject: PersonBadgeObject = {
    firstName,
    lastName,
    get fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    set fullName(v) {
      if (
        !v ||
        typeof v !== "string" ||
        v.indexOf(" ") === -1
      ) {
          throw new Error('Please, provide full name: "John Doe"');
      }

      [this.firstName, this.lastName] = v.split(" ");
    }
  };


  resultingObject.fullName;

  return resultingObject;
}

const personJohn = createBadge("John", "Doe");
console.log(personJohn.fullName);

personJohn.fullName = "Anna Surovikina"
console.log(personJohn.fullName); // "Anna Surovikina"
console.log(personJohn.firstName); // "Anna"
console.log(personJohn.lastName); // "Surovikina"