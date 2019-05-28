'use strict';

let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],


	expensesItem = document.getElementsByClassName('expenses-item'),
	expensesBtn = document.getElementsByTagName('button')[0],
	optionalExpensesBtn = document.getElementsByTagName('button')[1],
	countBtn = document.getElementsByTagName('button')[2],
	optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
	incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
	percentValue = document.querySelector('.choose-percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

let appData = {
	budget: 0,
	timeData: '',
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
	cooseExpenses: function () {
		let summ = 0;

		for (let i = 0; i < expensesItem.length; i++) {
			let a = expensesItem[i].value,
				b = expensesItem[++i].value;

			if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
				console.log("done");
				appData.expenses[a] = b;
				summ += +b;
			} else {
				console.log("please add expenses ");
			}
		}
		expensesValue.textContent = summ;
	},
	chooseOptExpenses: function () {
		//let summ = 0;

		for (let i = 0; i < optionalExpensesItem.length; i++) {

			let ItemVal = optionalExpensesItem[i].value;
			if (ItemVal != '' && ItemVal != null) {
				appData.optionalExpenses[i] = ItemVal;
				//summ += +ItemVal;
				optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
				console.log("optional expenses add");
			} else {
				console.log("please add optional expenses ");
			}
		}
	},
	detectDayBudget: function () {
		if (appData.budget != undefined) {


			if (expensesValue.textContent != '') {
				appData.moneyPerData = ((appData.budget - (+expensesValue.textContent)) / 30).toFixed(2);
			} else {
				appData.moneyPerData = (appData.budget / 30).toFixed(2);
			}
			dayBudgetValue.textContent = appData.moneyPerData;

			if (appData.moneyPerData < 100) {
				levelValue.textContent = "Минимальный уровень достатка";
			} else if (appData.moneyPerData > 100 && appData.moneyPerData < 2000) {
				levelValue.textContent = "Средний уровень достатка";
			} else if (appData.moneyPerData > 2000) {
				levelValue.textContent = "Высокий уровень достатка";
			} else {
				levelValue.textContent = "Произошла ошибка";
			}
		} else {
			dayBudgetValue.textContent = "Произошла ошибка";
		}
	},
	checkSavings: function () {

		let save, percent;
		if (appData.savings == true) {
			save = +prompt("Какова сумма накоплений ?");
			percent = +prompt("Под какой процент ?");
		}

		appData.monthIncome = save / 100 / 12 * percent;
		alert("Доход в месяц с вашего дипозита: " + appData.monthIncome);
	},
	chooseIncome: function () {
		let items = incomeItem.value;

		incomeValue.textContent = incomeItem.value;

		if ((typeof (items)) === 'string' && (typeof (items)) != null && items != '') {
			appData.income = items.split(', ');


			// let Str = "";
			// appData.income.forEach(function (item, i, arr) {
			//     if (item == 0) {} else {
			//         if ((arr.length - 1) == i) {
			//             Str += item;
			//         } else {
			//             Str += item + " - ";
			//         }
			//     }
			// });
			// alert("Способы доп. заработка: " + Str);
		}
	}
};

function start() {

	let Money = +prompt("Ваш бюджет на месяц?", "320000"),
		Time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-30");

	while (isNaN(Money) || Money == '' || Money == null) {
		Money = +prompt("Ваш бюджет ?", "320000");
	}
	appData.budget = Money;
	appData.timeData = Time;
	budgetValue.textContent = Money.toFixed(); // toFixed округляет до ближайшего целого

	let DateTime = new Date(Date.parse(Time));

	yearValue.value = DateTime.getFullYear();
	// Так как счет в JavaSckript начинается с 0 (дата не исключение) то нужно добавить 1
	monthValue.value = DateTime.getMonth() + 1;
	dayValue.value = DateTime.getDay();

	expensesBtn.disabled = false;
	optionalExpensesBtn.disabled = false;
	countBtn.disabled = false;


}

function CalckPersent() {
	appData.monthIncome = +sumValue.value / 100 / 12 * +percentValue.value;
	monthSavingsValue.textContent = (appData.monthIncome).toFixed(2);
	yearSavingsValue.textContent = (appData.monthIncome * 12).toFixed(2);

}
// привязываем функции к событиям
startBtn.addEventListener('click', start);
expensesBtn.addEventListener('click', appData.cooseExpenses);
optionalExpensesBtn.addEventListener('click', appData.chooseOptExpenses);
countBtn.addEventListener('click', appData.detectDayBudget);
incomeItem.addEventListener('input', appData.chooseIncome);
//incomeItem.addEventListener('change', appData.chooseIncome);
checkSavings.addEventListener('click', function () {
	appData.savings = !appData.savings;
	if (percentValue.value != '' && sumValue.value != '') {
		CalckPersent();
	}
});

sumValue.addEventListener('input', function () {
	if (appData.savings && percentValue.value != '') {
		CalckPersent();
	}
});

percentValue.addEventListener('input', function () {
	if (appData.savings && sumValue.value != '') {
		CalckPersent();
	}
});