/** JavaScript Object Notation ==============================================
 * lightweight text-based data format
 * double quotes, trailing comma
 * key/value pairs, separated by commas, curly braces for objects square for arrays
 * @method JSON.stringify() JavaScript -> JSON
 * * Accepts: `value` for serialization, `replacer`{array of function},
 * * * `space`
 * * returns string(`typeof JSON.stringify(obj) === 'string'`)
 * @method JSON.parse(string) JSON -> JavaScript
 */
// JSON.stringify(obj)
const someData = {
  firstName: "Slava",
  lastName: "Kartashov",
  age: 34,
  isMarried: true,
  kids: null,
  skills: {
    hard: ["JavaScript", "TypeScript", "Vue"],
    soft: ["Good communication"],
  },
};
const jsonSomeData = JSON.stringify(someData); // serialized object
console.log(typeof jsonSomeData); // 'string'
// JSON.parse()
const jsSomeData = JSON.parse(jsonSomeData);
console.log(typeof jsSomeData); // 'object'

// Other types
typeof JSON.stringify(null); // 'string'
JSON.stringify(undefined); // undefined
JSON.stringify(Symbol("id")); // undefined

/* ============= Personal ============= */
// -------- Exclude `password` and `email` --------
const data = {
  id: 1,
  name: "Alice",
  password: "secret",
  email: "alice@example.com",
  settings: {
    theme: "dark",
    notifications: true,
  },
};

// Using array in `replacer`
console.log(
  JSON.stringify(data, ["id", "name", "settings", "theme", "notifications"], 2)
);

// Using function in `replacer`
console.log(
  JSON.stringify(
    data,
    function replacer(key, value) {
      if (key === "password" || key === "email") return undefined;
      return value;
    },
    2
  )
);

// Usings custom `toJSON`
data.toJSON = function () {
  const { password, email, ...rest } = this;
  return rest;
};
console.log(JSON.stringify(data, 2));

// -------- Exclude `password` and `email` in class --------
class User {
  constructor(id, name, password, email) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.toJSON = function () {
      const { password, email, ...rest } = this;
      return rest;
    };
  }
}
const user = new User(1, "John", "123456", "j@j.com");
console.log(JSON.stringify(user));

// -------- Parse string into Object, using reviver --------
const jsonData =
  '{"name":"Bob","birthDate":"1995-06-15T00:00:00Z","roles":["admin","user"]}';

const obj = JSON.parse(jsonData, function reviver(key, value) {
  switch (key) {
    case "birthDate":
      return new Date(value);
    case "roles":
      return new Set(value);
    default:
      return value;
  }
});


// -------- Delete cycle link --------
const node = { element: 1 };
node.self = node;

console.log(JSON.stringify(node, ['element']));

// --------- Serialize Map and Set -----------
const anyData = {
  setCollection: new Set([1, 2, 3]),
  mapCollection: new Map([[1, 'first'], [2, 'second']]),
}

const serializedAnyData = JSON.stringify(anyData, function replacer(k, v) {
  if (k === 'setCollection') return Array.from(v);
  if (k === 'mapCollection') return Object.fromEntries(v);

  return v;
}, 2)
console.log(serializedAnyData);
