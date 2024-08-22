import { Toaster } from "./toaster.js";

/* Variables */
// Instance
const instanceOfToaster = new Toaster();
// Fields
export const text = document.getElementById("text");
const logs = document.getElementById("logs");
// Images
const toastsImg = document.getElementById("toasts");
const workingImg = document.getElementById("working");
// Methods
const insertBread = document.getElementById("insert-bread");
const ejectBread = document.getElementById("eject-bread");
const setPower = document.getElementById("set-power");
const setTimeLeft = document.getElementById("set-timeleft");
const changeTime = document.getElementById("change-time");
// Inputs
const setPowerInput = document.getElementById("set-power-input");
const setTimeLeftInput = document.getElementById("set-timeleft-input");
const changeTimeInput = document.getElementById("change-time-input");

/* Events */
insertBread.addEventListener("click", () => {
	console.log(instanceOfToaster.insertBread());
	changeLogs();
	changeStyle();
});

ejectBread.addEventListener("click", () => {
	console.log(instanceOfToaster.ejectBread());
	changeLogs();
});

setPower.addEventListener("click", () => {
	const powerValue = +setPowerInput.value;
	instanceOfToaster.setPower(powerValue);

	changeLogs();
	changeStyle();

	setPowerInput.value = "";
});

export let uiId; // for import in toaster.js

setTimeLeft.addEventListener("click", () => {
	// check for type and value
	checkForInput(+setTimeLeftInput.value);

	if (setTimeLeftInput.value === "") {
		throw new Error("Provide an argument.");
	}

	changeImage("working");

	const timeValue = +setTimeLeftInput.value;
	instanceOfToaster.setTimeLeft(timeValue);

	changeLogs();
	changeStyle();

	setTimeout(changeLogs, 1500);

	if (uiId) {
		clearInterval(uiId);
		text.innerHTML = "Waiting...";
	}

	// Interval for updating text field
	uiId = setInterval(() => {
		console.log(instanceOfToaster.restTime);
		text.innerHTML = `Left ${+instanceOfToaster.restTime} seconds...`;
		changeLogs();
	}, 1000);

	setTimeLeftInput.value = "";
});

changeTime.addEventListener("click", () => {
	const timeValue = +changeTimeInput.value;
	console.log(instanceOfToaster.changeTime(timeValue));

	text.innerHTML = "Changing time...";

	changeLogs();

	// setTimeout(changeLogs, 1500);

	changeTimeInput.value = "";
});

// On first launch(IIFE)
(function () {
	changeLogs();
})();

/* Help functions */
// Swap image
export function changeImage(check) {
	if (check === "working") {
		toastsImg.style.display = "none";
		workingImg.style.display = "inline";
	} else {
		workingImg.style.display = "none";
		toastsImg.style.display = "inline";
	}
}

// Correct input
function checkForInput(parameter, range2 = 90) {
	if (parameter < 0 || parameter > range2) {
		alert(`Parameter must be between 0 and ${range2}.`);
		throw new RangeError(`Parameter must be between 0 and ${range2}.`);
	}
	if (!Number.isInteger(parameter) || typeof parameter !== "number") {
		alert("Parameter must be a valid integer.");
		throw new TypeError("Parameter must be a valid integer.");
	}
}

// Update logs
export function changeLogs() {
	const info = instanceOfToaster.logStat();
	const formattedInfo = info.replaceAll("\n", "<br>");
	logs.innerHTML = formattedInfo;
	return "Logs are updated.";
}

export function changeStyle() {
	if (
		instanceOfToaster.power > 0 &&
		instanceOfToaster.breadInToasterStatus === true
	) {
		setTimeLeft.style.background = "#ACF780";
	} else {
		setTimeLeft.style.background = "#EFEFEF";
	}

	if (instanceOfToaster.intervalActivated) {
		changeTime.style.background = "#ACF780";
	} else {
		changeTime.style.background = "#EFEFEF";
	}
}
