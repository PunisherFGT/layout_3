let money=prompt("Ваш бюджет на месяц?", '');
let time=prompt("YYYY-MM-DD", '');
console.log(money);
console.log(time);
let appData={
    budget:money,
    timeData:time,
    expesnes:{},
    optionalExpenses:{},
    income:{},
    savings:false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let a2 = prompt("Во сколько обойдется?", '');
let a3 = prompt("Введите обязательную статью расходов в этом месяце", '');
let a4 = prompt("Во сколько обойдется?", '');

appData.expesnes.a1=a2;
appData.expesnes.a3=a4;

alert(appData.budget/30);