/* --- Пространство имен --- */
// Нужно написать функцию, которая создает пространство имен. 
// На вход строка "a.b.c.d.e", на выходе объект {a:{b:{c:{d:{e:{}}}}}}
type RecordType = Record<string, any>

// Мой вариант:
function getPath(path: string): RecordType {
  const normalPath: string[] = path.split(".");
  const resultObj: RecordType = {};
  let pointer: RecordType = resultObj; // указатель для сохранения пути
  
  for (const pathPart of normalPath) {
    pointer[pathPart] = {}; // по текущему пути указателя создаем новый объект
    pointer = pointer[pathPart]; // обновляем указатель, чтобы он "вошел" в новый объект
  }
  
  return resultObj;
}

const path: string = "a.b.c.d.e";
const newObj: RecordType = getPath(path);
console.log(newObj); // {a:{b:{c:{d:{e:{}}}}}}

// ChatGPT вариант:
function getPath2(path: string): RecordType {
  return path
  .split(".")
  .reduceRight((acc, key) => ({ [key]: acc }), {});
}
const newObj2: RecordType = getPath2(path);
console.log(newObj2);
