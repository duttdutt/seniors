/* Tasks from 11.2 */
// 1
function delay(text, ms) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve(text);
            }, ms);
        }
    );
}
delay('hi', 3000).then((text) => console.log(text));
