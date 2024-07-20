// Solution 1
function helloUser(userName, userLastName, userAge) {
    alert(`Привет ${userName} ${userLastName} с возростом ${userAge}`);
}

helloUser('Иван','Петров', 17);

const sqr = (num) => num ** 2;

alert(sqr(5));

const check = (number) => {
    if (number > 0){
        console.log('+++')
    }else{
        console.log('---')
    }
}

check(6);

// Solution 2

const fNum = +prompt('1 number');
const sNum = +prompt('2 number');
const tNum = +prompt('3 number');

const numSum = (fNum, sNum, tNum) => fNum + sNum + tNum;

alert(numSum(fNum, sNum, tNum));

let param1 = '1';
let param2 = '2';
let param3 = '3';

const consoleNumSum = (param1, param2, param3) => param1 + param2 + param3;

console.log(consoleNumSum(param1, param2, param3));

func(2); // 4
func(3); // 9
func(); // 25

// Solution 3

const userEnterFirstNum = +prompt();
const userEnterSecondNum = +prompt();

const sqrSum = (userEnterFirstNum, userEnterSecondNum) => Math.sqrt(userEnterFirstNum) + Math.sqrt(userEnterSecondNum);

alert(sqrSum(userEnterFirstNum, userEnterSecondNum));

const min = (a, b) => (a < b) ? a : b;

alert(min(5, 6));

// Solution 4

const enterNum = +prompt();

const dayWeek = (enterNum) => {
    switch (enterNum) {
        case 1:
            return 'Понедельник';
            break;
        case 2:
            return 'Вторник';
            break;
        case 3:
            return 'Среда';
            break;
        case 4:
            return 'Четверг';
            break;
        case 5:
            return 'Пятница';
            break;
        case 6:
            return 'Суббота';
            break;
        case 7:
            return 'Воскресенье';
            break;
        default:
            return 'Такого дня недели нет';
            break;
    }
}

alert(dayWeek(enterNum));

let uName = prompt();
var time = new Date();
time = time.getHours()

const timeOfDay = (uName, time) => {
    if (time >= 4 && time < 12){
        return `Доброе утро ${uName}`
    } else if (time >= 12 && time < 23){
        return `Доброе вечер ${uName}`
    } else{
        return `Доброй ночи ${uName}`
    }
}

alert(timeOfDay(uName,time));

// Solution 5

function AskPuzzle(puzzle, answer) {
  let answerUser;

  do {
    answerUser = prompt(`${puzzle}`).toLowerCase();

    if (answerUser !== answer) {
      alert("Я даю подсказку.... Напряги мозги)");
      alert("Всегда пожалуйста");
    } else {
      alert("Молодец");
    }
  } while (answerUser !== answer);
}

AskPuzzle("Зимой и летом одним цветом", "елка");
