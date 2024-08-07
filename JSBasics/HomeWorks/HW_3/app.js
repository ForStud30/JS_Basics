// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const intoACub = (firstNum, secondNum) => firstNum ** 3 + secondNum ** 3;
console.log(intoACub(2, 3));

// ВАЖНО: Чуть не понял задание, говориться про 1 переданное число, а в итоге просять вывести сумму двух разных чисел в кубе. 
// Чисто теоретически сделанно правильно 


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа
// и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const calculateSalary = (input) => !isNaN(parseFloat(input)) ? `Размер заработной платы за вычетом налогов равен ${input * 0.87}` 
                                                                : 'Вы ввели не число! Попробуйте еще раз.';
console.log(calculateSalary(prompt('Введите число')));


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

const fparam = +prompt('Введите первое число');
const sparam = +prompt('Введите второе число');
const tparam = +prompt('Введите третье число');

const maxNum = (fparam, sparam, tparam) => Math.max(fparam, sparam, tparam);

console.log(`Максимальное значение: ${maxNum(fparam, sparam, tparam)}`);

// ВАЖНО: Если нельзя пользоваться встроенными функциями по типу Math 

// const fparam = +prompt('Введите первое число');
// const sparam = +prompt('Введите второе число');
// const tparam = +prompt('Введите третье число');

// const maxNum = (a, b, c) => {
//     let max = a;
//     if (b > max) max = b;
//     if (c > max) max = c;
//     return max;
// };

// console.log(`Максимальное значение: ${maxNum(fparam, sparam, tparam)}`);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций 
// (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль 
// (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, 
// однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

const add = (a, b) => a + b;

const subtract = (a, b) => {
    if (a > b) return a - b;
    if (b > a) return b - a;
    return 0;
};

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

console.log(add(2, 6)); // 8
console.log(subtract(2, 6)); // 4
console.log(multiply(2, 6)); // 12
console.log(divide(12, 6)); // 2
