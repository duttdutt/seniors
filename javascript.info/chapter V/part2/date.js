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
