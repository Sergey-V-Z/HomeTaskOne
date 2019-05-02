'use strict';


let appData = {
    budget: 0,
    timeData: '',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function start(){

    let Money = +prompt("Ваш бюджет на месяц?", "32000"),
    Time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-30");

    while (isNaN(Money) || Money == '' || Money == null) {
        Money = +prompt("Ваш бюджет на месяц?", "32000");
    }
    appData.budget = Money;
    appData.timeData = Time;
}

function cooseExpenses(){
    for (let i = 0; i < 2; i++ ){
        let a = prompt("Введите обязательную статью расходов в этом месяце", "Бензин"),
            b = prompt("Во сколько обойдется?", "2000");
         
        if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50){
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i--;
            }    
    }  
}

function detectDayBudget(){
    appData.moneyPerData = (appData.budget/30).toFixed(2);
    alert("Ваш бюджет на день: " + appData.moneyPerData);
}

function detectLevel(){
    if(appData.moneyPerData < 100){
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerData > 100 && appData.moneyPerData < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerData > 2000){
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

function checkSavings(){
    let save, percent;
    if(appData.savings == true){
        save = +prompt("Какова сумма накоплений ?");
        percent = +prompt("Под какой процент ?");
    }

    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего дипозита: " + appData.monthIncome);
}

function chooseOptExpenses(){
    for(let i = 1; i < 4; i++){
        
        let temp = prompt("Статья необязательных расходов ?", "");
        if(temp != '' && temp != null){
            appData.optionalExpenses[i] = temp;
            console.log("optional expenses add");
        } else {
            console.log("please add optional expenses ");
            i--;
        }
    }
}

start();
cooseExpenses();
chooseOptExpenses();
detectDayBudget();
detectLevel();
checkSavings();
