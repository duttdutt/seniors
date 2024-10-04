/* --- Getting Elements --- */
// Default Elements
const inputDefault = document.getElementById("input-default");
const buttonDefault = document.getElementById("button-default");
const outputDefault = document.getElementById("output-default");
// Debounce Elements
const inputDebounce = document.getElementById("input-debounce");
const buttonDebounce = document.getElementById("button-debounce");
const outputDebounce = document.getElementById("output-debounce");
// Throttle Elements
const inputThrottle = document.getElementById("input-throttle");
const buttonThrottle = document.getElementById("button-throttle");
const outputThrottle = document.getElementById("output-throttle");

/* --- 1. Default Event --- */
buttonDefault.addEventListener("click", () => {
  outputDefault.textContent = "";
  outputDefault.textContent = inputDefault.value;
});

/* --- 2. Debounce Function --- */
function debounce(func, duration) {
  let timeout;

  return function (...args) {
    const effect = () => {
      timeout = null;
      return func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(effect, duration);
  };
}

const debouncedEvent = debounce(() => {
  outputDebounce.textContent = "";
  outputDebounce.textContent = inputDebounce.value;
}, 1000);

buttonDebounce.addEventListener("click", debouncedEvent);

/* --- 3. Throttle Function --- */
function throttle(func, duration) {
  let shouldWait = false;

  return function (...args) {
    if (!shouldWait) {
      func.apply(this, args);
      shouldWait = true;

      setTimeout(function () {
        shouldWait = false;
      }, duration);
    }
  };
}

const throttledEvent = throttle(() => {
  outputThrottle.textContent = "";
  outputThrottle.textContent = inputThrottle.value;
}, 2000);

buttonThrottle.addEventListener("click", throttledEvent);
