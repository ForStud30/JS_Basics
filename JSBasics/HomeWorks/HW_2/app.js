// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
console.log((num1 <= 1) ? 'Первое число проходит условия' : 'Первое число не проходит условия');
console.log((num2 >= 3) ? 'Второе число проходит условия' : 'Второе число не проходит условия');

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

let test = true;
console.log((test === true) ? '+++' : '---');

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = +prompt('Введите число от 1 до 31')

if (day >= 1 && day <= 10){
    console.log(`${day} входит в первую декаду месяца`);
} else if (day > 10 && day <=20){
    console.log(`${day} входит во вторую декаду месяца`);
} else if(day > 20 && day <= 30){
    console.log(`${day} входит в третью декаду месяца`);
} else if (day === 31){
    console.log(`${day} входит в четвёртую декаду месяца`);
} else {
    console.log(`${day} не входит ни в одну декаду месяца`);
}

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"
// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"
// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"
// Уточнение: пользователь всегда вводит корректное положительное целое число.

let userEnterNum = +prompt('Enter number');

let units = userEnterNum % 10;

let tens = (userEnterNum % 100 - units) / 10;

let hundreds = (userEnterNum - userEnterNum % 100) / 100 % 10;

console.log(`В числе ${userEnterNum} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);