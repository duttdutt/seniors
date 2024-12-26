/**
 * @task Реализовать систему контроля доступа на основе ролей.
 * @description Создайте объект конфигурации с разными уровнями доступа.
 * Используйте Proxy для перехвата попыток чтения или изменения свойств объекта и:
 * * Разрешайте или запрещайте операции в зависимости от текущей роли.
 * * Блокируйте доступ к запрещенным свойствам, возвращая undefined или выбрасывая ошибку.
 * * Логируйте попытки несанкционированного доступа.
 */
const accessLevels = {
  admin: { canEdit: true, canDelete: true, canView: true },
  user: { canEdit: true, canDelete: false, canView: true },
  guest: { canEdit: false, canDelete: false, canView: true },
};

let role = "guest";

const handleAccess = {
  get(target, prop) {
    if (!(prop in target)) {
      throw new Error("Access denied #1.");
    }

    if (!target[role]) {
      throw new Error("Access denied #2.");
    }

    console.log(`Accessing '${prop}'...`);

    return Reflect.get(target, prop);
  },
  set(target, prop) {
    throw new Error(`Access denied: '${prop}' is readonly.`);
  },
};

const accessProxy = new Proxy(accessLevels, handleAccess);

try {
  console.log("--- Current Role: guest ---");
  console.log("Can guest view:", accessProxy.guest.canView); // true
  console.log("Can guest delete:", accessProxy.guest.canDelete); // undefined
  console.log("Can guest edit:", accessProxy.guest.canEdit); // undefined
} catch (e) {
  console.log(e.message);
}

/**
 * @task Динамическая валидация данных в форме
 * @description Создайте объект, представляющий данные формы (например, имя, возраст, email).
 * Настройте прокси, который будет перехватывать операции записи (set) и:
 * * проверять тип данных (например, возраст должен быть числом).
 * * ограничивать длину строк (например, имя не более 50 символов).
 * * форматировать данные (например, автоматически удалять пробелы в email).
 */
const user = {
  userName: "duttdutt",
  age: 54,
};

const handler = {
  set(target, prop, value) {
    if (prop === "userName" && value.length > 10)
      throw new RangeError("Your username is too long.");
    if (prop === "age" && !Number.isFinite(value))
      throw new TypeError("Use number for age.");

    return Reflect.set(target, prop, value);
  },
};

const proxy = new Proxy(user, handler);

proxy.userName = "yNk";
proxy.age = 10;

console.log(proxy); // { userName: "yNk", age: 10 }

try {
  proxy.userName = "sssssssssssss";
} catch (e) {
  console.log("'userName' error", e);
}

try {
  proxy.age = "string";
} catch (e) {
  console.log("'age' error", e);
}

/**
 * @task Создайте систему для отслеживания и анализа операций чтения и записи в объекте.
 * @description Создайте объект данных (например, информацию о пользователе).
 *  Используйте Proxy для перехвата операций чтения (get) и записи (set).
 *  Логируйте, какие свойства запрашиваются или изменяются, а также с какими значениями.
 *  Реализуйте возможность ограничения записи для определённых св-в(readonly для некоторых полей).
 */
const initialUser = {
  userId: 12345,
  username: "john_doe",
  email: "john.doe@example.com",
  firstName: "John",
  lastName: "Doe",
  dateOfBirth: "1990-01-15",
  phoneNumber: "+1234567890",
  registeredDate: "2022-05-20",
  lastLogin: "2024-12-25",
  status: "active",
};

const proxyForInitialUser = new Proxy(initialUser, {
  get(target, prop) {
    console.log(`Request for property '${prop}': '${target[prop]}'.`);

    return target[prop];
  },
  set(target, prop, value) {
    const readonlyProps = ["firstName", "lastName"];

    if (readonlyProps.includes(prop)) {
      throw new Error(`Property '${prop}' is readonly.`);
    }

    console.log(`Old value of '${prop}' is '${target[prop]}'.`);
    console.log(`New value of '${prop}' is '${value}'.`);

    target[prop] = value;

    return true;
  },
});

console.log("--- Get ---");
console.log("Request for property #1:", proxyForInitialUser.status);
console.log("Request for property #2:", proxyForInitialUser.userId);
console.log("--- Set ---");
console.log("Changing property #1:", (proxyForInitialUser.status = 1));
console.log("Changing property #2:", (proxyForInitialUser.userId = 2));
try {
  console.log(
    "Changing property #3:",
    (proxyForInitialUser.firstName = "Test"),
  );
} catch (e) {
  console.log(e);
}
