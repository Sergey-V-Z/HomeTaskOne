'use strict';


let appData = {
    budget: 0,
    timeData: '',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    cooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", "Бензин"),
                b = prompt("Во сколько обойдется?", "2000");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerData = (appData.budget / 30).toFixed(2);
        alert("Ваш бюджет на день: " + appData.moneyPerData);
    },
    detectLevel: function () {
        if (appData.moneyPerData < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerData > 100 && appData.moneyPerData < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerData > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
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
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {

            let temp = prompt("Статья необязательных расходов ?", "");
            if (temp != '' && temp != null) {
                appData.optionalExpenses[i] = temp;
                console.log("optional expenses add");
            } else {
                console.log("please add optional expenses ");
                i--;
            }
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислоте через запятую)", "");

        if ((typeof (items)) === 'string' && (typeof (items)) != null && items != '') {
            appData.income = items.split(', ');
            //appData.income.unshift(0);
            let item2 = prompt("Может что-то еще ?");
            if ((typeof (item2)) === 'string' && (typeof (item2)) != null && item2 != "") {
                appData.income.push(item2);
            }
            appData.income.sort();

            appData.income.forEach(function (itemmassive, i) {
                alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
            });

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

    let Money = +prompt("Ваш бюджет на месяц?", "32000"),
        Time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-30");

    while (isNaN(Money) || Money == '' || Money == null) {
        Money = +prompt("Ваш бюджет на месяц?", "32000");
    }
    appData.budget = Money;
    appData.timeData = Time;
}


start();
//appData.cooseExpenses();
appData.chooseIncome();

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
} // appData.chooseOptExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();