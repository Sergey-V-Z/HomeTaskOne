'use strict';

let Money = +prompt("Ваш бюджет на месяц?", "32000"),
    Time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-30");

let appData = {
    budget: Money,
    timeData: Time,
    expenses: {},
    OptionalExpenses: {},
    income: [],
    savings: false
};


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


// let i = 0;

// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "Бензин"),
//         b = prompt("Во сколько обойдется?", "2000");
     
//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50){
//             console.log("done");
//             appData.expenses[a] = b;
//             i++;
//         } else {
//         }    
// }while(i < 2);


// let i = 0;

// while(i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", "Бензин"),
//         b = prompt("Во сколько обойдется?", "2000");
     
//     if((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
//         && a != '' && b != '' && a.length < 50){
//             console.log("done");
//             appData.expenses[a] = b;
//             i++;
//         } else {
//         }    
// }

appData.moneyPerData = appData.budget/30;

alert("Ваш бюджет на день: " + appData.moneyPerData);

if(appData.moneyPerData < 100){
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerData > 100 && appData.moneyPerData < 2000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerData > 2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
