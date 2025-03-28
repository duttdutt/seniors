/** ========= sessionStorage ========= */
sessionStorage.setItem("username", "John Doe");
sessionStorage.setItem("theme", "dark");

const username = sessionStorage.getItem("username");
const nonExistent = sessionStorage.getItem("age");

sessionStorage.removeItem("theme");
sessionStorage.clear();

/** ========= localStorage ========= */
const user = { name: "John", level: 5 };
localStorage.setItem("user", JSON.stringify(user));

const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name);

let visits = localStorage.getItem("visits") || 0;
localStorage.removeItem("user");
localStorage.clear();

if (!localStorage.getItem("theme")) {
	localStorage.setItem("theme", "light");
}

/** ========= Other ========= */
console.log(Object.keys(localStorage));
console.log(Object.keys(sessionStorage));

for (let i = 0; i < localStorage.length; i++) {
	const key = localStorage.key(i);
	console.log(key, localStorage.getItem(key));
}

window.addEventListener("storage", (event) => {
	console.log("Changing storage:", event.key, event.newValue);
});
