const users = [
  {
    name: 'John',
    age: 58,
    skills: ['code', 'dance'],
  },
  {
    name: 'Max',
    age: 20,
    skills: ['code'],
  },
  {
    name: 'Violetta',
    age: 37,
    skills: ['sing', 'draw'],
  },
];

const myDatabase = new Promise((resolve, reject) => {
  /**
   * Создание соединения с бд через 'open'
   */
  const myDatabase = indexedDB.open(
    'users', // db name
    1 // version?
  );

  /**
   * Заполнение IndexedDB
   *
   * 'upgradeneeded' событие на обновление БД
   */
  myDatabase.addEventListener('upgradeneeded', (event) => {
    event.newVersion; // новая версия
    event.oldVersion; // старая версия

    const database = event.target.result;

    if (event.oldVersion === 0) {
      // Создание хранилища #1
      const usersStore = database.createObjectStore(
        'users', // имя бд
        {
          // дополнительные настройки
          keyPath: 'id',
          autoIncrement: true,
        }
      );
      // Создание хранилища #2
      const logStore = database.createObjectStore('log', {
        autoIncrement: true,
      });

      /**
       * Индексы дают возможность делать запросы по опредленным полям.
       * @param имя создаваемого индекса
       * @param путь создаваемого индекса
       */
      usersStore.createIndex('age', 'age');
      usersStore.createIndex('skills', 'skills', {
        multiEntry: true, // индекс строится по элементам массива
      });

      // Создание транзакций
      const transaction = event.target.transaction;
      console.log(transaction);

      for (const user of users) {
        transaction.objectStore('users').add(user);
        transaction.objectStore('log').add(`User ${user.name} added.`);
      }
    }
  });

  myDatabase.addEventListener('success', (event) => {
    resolve(myDatabase.result);
  });

  myDatabase.addEventListener('error', (event) => {
    reject(myDatabase.error);
  });
});

myDatabase
  .then((database) => {
    const transcation = database.transaction(['users', 'log']); // имена хранилищ

    const usersByAge = transcation
      .objectStore('users')
      .index('age')
      .getAll(IDBKeyRange.lowerBound(42));
    const logsByAge = transcation.objectStore('users').getAll(null);

    transcation.oncomplete = () => {
      console.log(usersByAge.result);
      console.log(logsByAge.result);
    };
  })
  .catch((error) => {
    console.error('Database error:', error);
  });
