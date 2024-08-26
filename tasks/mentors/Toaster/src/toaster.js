/*
- setPower() принимает число от 1 до 10, устанавливает мощность нагрева (по умолчанию мощность 5)
- setTimeLeft() принимает число от 0 до 90, устанавливает время в секундах сколько будет идти нагрев.
То есть если осталось 5 секунд до остановки работы, changeTime(30) должен сделать 30 сек, а если потом
сделать changeTime(0) то это должно остановить тостер. Установка значения в положительное запускает таймер
на это время, установка назад в 0 останавливает и само вызывает ejectBread(). Если мы поставим время на 10 сек,
через 10 сек тостер должен выключиться
- insertBread() кладет хлеб в тостер - но нельзя положить хлеб в тостер если там уже есть хлеб
- ejectBread() изъять хлеб из тостера, также метод может быть вызван автоматически при нагреве
- logStat() выводит всю информацию о тостере - мощность, время нагрева, есть ли сейчас нагрев, есть ли хлеб внутри,
сколько уже хлеб греется времени, сколько мощности ушло на хлебушек
- logPower() вывести сколько мощности ушло на хлеб за время его работы (например 20 сек работали с мощностью 5, а
потом 10 сек работали с мощностью 3 - получится 20 * 5 + 10 * 3 = 130). Нужна как общая сумма за все запуски так
и сумма за последний. при ejectBread() или insertBread() - то есть когда у нас новый хлебушек вставился - счетчик обнуляется

код должан правильно работать с точки зрения того что я могу вызвать любой метод в любое время и получить правильный результат.
Например я могу увеличить мощность во время рабоыт тостера или установить время в 40 сек, а через 20 сек установить время на 10 сек.
Суммарное время работы должно быть 30 сек в этом случае, а не 40, тк я поменял время а тостер не прекращал работу.
Код должен работать так что я могу действовать нерационально нелогично вызывая разные методы но все равно все будет работать каким либо образом
и выводить достоверные логи */
import { changeLogs, uiId, changeImage, text, changeStyle } from "./ui.js";

export class Toaster {
	constructor() {
		this.power = 0; // start power
		this.timeOfHeating = null;
		this.isHeating = false;
		// interval props
		this.intervalId = null;
		this.intervalActivated = false;
		// time
		this.startTime = new Date();
		this.endTime = 0;
		this.restTime = 0;
		this.elapsedTime = 0;
		// power
		this.totalPower = 0;
		this.currentPower = this.power;
		this.powerIsSetupped = false;
		// bread
		this.breadInToasterStatus = false;
	}

	/* Methods */
	setPower(power = 5) {
		// Error handling
		this.checkForInput(power, 10);

		if (power === 0) this.changeTime(0); // set power in 0 -> end

		// Body
		this.power = power;
		this.powerIsSetupped = true;
		this.currentPower = this.power;

		const message = `Power is setted to ${power}.`;
		console.log(message);
		return message;
	}

	setTimeLeft(timeOfHeating) {
		// Error handling
		this.checkForInput(timeOfHeating);
		if (!this.breadInToasterStatus) {
			changeImage();
			alert("Firstly, you need to put bread in.");
			throw new Error("Firstly, you need to put bread in.");
		}

		if (this.power === 0) {
			alert("Please, set the power to more, than 0!");
			throw new Error("Please, set the power to more, than 0!");
		}

		// Body
		const logTime = timeOfHeating * 1000;

		if (timeOfHeating === 0 && typeof timeOfHeating !== "number") {
			clearInterval(uiId);
			clearInterval(this.intervalId);
			this.intervalId = null;
			this.isHeating = false;
			text.innerHTML = "Waiting...";
			this.intervalActivated = false;
			this.powerIsSetupped = false;
			this.ejectBread();
			changeImage();
			changeLogs();
			changeStyle();
			console.log(`Stopped the timer!`);
		}
		if (this.isHeating) {
			alert("Please, change timer time through other method.");
			this.intervalId = null;
			this.isHeating = false;
			text.innerHTML = "Waiting...";
			this.intervalActivated = false;
			this.powerIsSetupped = false;
			this.ejectBread();
			changeImage();
			changeLogs();
			changeStyle();
			clearInterval(this.intervalId);
			clearInterval(uiId);
			console.log("Stopped!");

			this.power = 0;
			this.totalPower = 0;
			this.currentPower = 0;

			throw new Error("Please, change timer time through other method.");
		}
		if (this.isHeating || this.intervalActivated) {
			// Sum rest time and new time
			this.endTime = Date.now() + logTime;
		} else {
			this.isHeating = true;
			this.intervalActivated = true;
			this.powerIsSetupped = true;
			this.startTime = Date.now();
			this.endTime = this.startTime + logTime;
			changeStyle();

			const timer = () => {
				const currentTime = Date.now();
				if (currentTime > this.endTime || timeOfHeating === 0) {
					clearInterval(this.intervalId);
					clearInterval(uiId);
					this.isHeating = false;
					this.intervalActivated = false;
					this.powerIsSetupped = false;
					this.intervalId = null;
					text.innerHTML = "Waiting...";
					this.ejectBread();
					changeImage();
					this.totalPower += this.currentPower;
					this.currentPower = 0;
					changeStyle();
					changeLogs();
					console.log("COMPLETED!");
				} else {
					this.restTime = Math.ceil((this.endTime - new Date()) / 1000);
					this.currentPower += this.power;
					console.log(`Left ${this.restTime} seconds...`);
				}
			};

			this.intervalId = setInterval(timer, 1000);
		}
	}

	changeTime(timeOfHeating) {
		this.isHeating = false;
		// Error handling
		this.checkForInput(timeOfHeating);
		if (!this.intervalActivated && !this.powerIsSetupped)
			throw new Error("Please, start the timer first!");

		// Body
		this.totalPower += this.currentPower;
		this.currentPower = 0;
		this.setTimeLeft(timeOfHeating);

		return `Time changed to ${timeOfHeating} seconds!`;
	}

	insertBread() {
		if (this.breadInToasterStatus === false) {
			this.breadInToasterStatus = true;
			this.totalPower = 0;
			this.currentPower = 0;
			return "We putted bread in Toaster!✅";
		} else {
			return "Bread already in Toaster!🛑";
		}
	}

	ejectBread() {
		if (this.breadInToasterStatus === true) {
			this.breadInToasterStatus = false;
			console.log("Okay, we put out bread! Toaster is clear!✅");
		} else {
			console.log("Toaster is already clear!🛑");
			throw new Error("STOP");
		}
	}

	logStat() {
		return `Power: ${this.power === 0 ? "provide info" : this.power}\nBread: ${
			this.breadInToasterStatus
		}\nHeating now: ${this.isHeating}\nElaped time: ${
			this.elapsedTime
		} seconds\nRest time: ${
			this.elapsedTime === 0
				? 0
				: Math.ceil((Date.now() - this.startTime) / 1000)
		} seconds\nUsed power: ${this.totalPower}\nCurrent power: ${
			this.currentPower
		}`;
	}

	checkForInput(parameter, range2 = 90) {
		if (parameter < 0 || parameter > range2) {
			alert(`Parameter must be between 0 and ${range2}.`);
			throw new RangeError(`Parameter must be between 0 and ${range2}.`);
		}
		if (!Number.isInteger(parameter) || typeof parameter !== "number") {
			alert("Parameter must be a valid integer.");
			throw new TypeError("Parameter must be a valid integer.");
		}
	}
}
