'use strict';

let Money = +prompt("Ваш бюджет на месяц?", "32000");
let Time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-30");

let ItemOfExpense = prompt("Введите обязательную статью расходов в этом месяце", "Бензин");
let HowMany = +prompt("Во сколько обойдется?", "2000");

let expenses = {
    "ItemOfExpense": HowMany
};

let OptionalExpenses = {

};

let income = [];

let appData = {
    budget: Money,
    timeData: Time,
    expenses: expenses,
    OptionalExpenses: OptionalExpenses,
    income: income,
    savings: false
};


let ForDay = (appData.budget-appData.expenses.ItemOfExpense)/30;

alert("Ваш бюджет на день: " + ForDay);