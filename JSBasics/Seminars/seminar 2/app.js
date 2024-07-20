// Solution 1 
let userAge = Number(prompt("Введите ваш возраст"));
let userName = prompt("Введите ваше имя");
alert(`Добро пожаловать на сайт ${userName}`);

if (userAge <= 0){
    alert('Вы ввели не правильное значение')
} else if (userAge === 1){
    alert(`Возраст пользователя ${userAge} год`)
} else if (userAge === 2 || userAge === 3 || userAge === 4){
    alert(`Возраст пользователя ${userAge} года`)
} else {
    alert(`Возраст пользователя ${userAge}`);
}

// Solution 2
let a = 13;
let b = 5;
alert(`Остатол = ${a % b}`);
let c;
alert(c); // undefined
alert('abc' * 3); // NaN
alert(1 / 0); // infinuty
alert(-1 / 0); // -infinuty
alert('2' * '3') // 6

// Solution 3
let a = 13;
let b = 5;
alert(`Остатол = ${a % b}`);

let c = '2';
let d = '3';
console.log(Number(c) + Number(d));

let firstNum = +prompt('Введите первое число')
let secondNum = Number(prompt('Введите второе число'))

console.log(`Сумма чисел равна ${firstNum + secondNum}`);
console.log(`Разность чисел равна ${firstNum - secondNum}`);
console.log(`Произведение чисел равно ${firstNum * secondNum}`);
console.log(`Частное чисел равно ${firstNum / secondNum}`);
console.log(`Остаток от деления равен ${firstNum % secondNum}`);

// Solution 4 
// 'true'
// atrue
// 1
// 2
// 2
// 0 
// true1

// Solution 5
let num = +prompt();
if (num > 5){
    console.log("Число больше 5");
}else if (num < 5){
    console.log("Число меньше 5");
}else{
    console.log("Число равно 5");
}

let test1 = prompt()
let test2 = prompt()

if (test1 == test2){
    console.log('Значения равны');
}else{
    console.log('Значения не равны');
}

let fNum = +prompt()
let sNum = +prompt()

console.log((fNum > sNum) ? `${fNum} больше ${sNum}` :`${fNum} меньше ${sNum}`);

let userNum = +prompt()

if (userNum > 0 && userNum < 15){
    console.log('Входит в диапазон');
}else{
    console.log('Не входит в диапазон');
}