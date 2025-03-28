/* set */
function setCookie(name, value, daysToLive = 30) {
  const date = new Date();
  date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000)); // дни → мс
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/`;
}

setCookie("username", "John Doe", 7);
setCookie("theme", "dark");

/* get */
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

const username = getCookie("username");
const theme = getCookie("theme");
const nonExistent = getCookie("language");

function deleteCookie(name) {
  setCookie(name, "", -1);
}

deleteCookie("theme");