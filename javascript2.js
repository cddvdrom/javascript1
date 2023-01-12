/*







======================================
Вам необходимо самостоятельно решить, для какого задания
какой цикл лучше использовать: WHILE, DO WHILE или FOR.
1. Подсчитать сумму всех чисел в заданном пользователем
диапазоне.
2. Запросить 2 числа и найти только наибольший общий
делитель.
3. Запросить у пользователя число и вывести все делители
этого числа.
4. Определить количество цифр в введенном числе.
5. Запросить у пользователя 10 чисел и подсчитать, сколько
он ввел положительных, отрицательных и нулей. При этом
также посчитать, сколько четных и нечетных. Вывести
статистику на экран. Учтите, что достаточно одной
переменной (не 10) для ввода чисел пользователем.
6. Зациклить калькулятор. Запросить у пользователя 2 числа
и знак, решить пример, вывести результат и спросить,
хочет ли он решить еще один пример. И так до тех пор, пока
пользователь не откажется.
7. Запросить у пользователя число и на сколько цифр его
сдвинуть. Сдвинуть цифры числа и вывести результат (если
число 123456 сдвинуть на 2 цифры, то получится 345612).
8. Зациклить вывод дней недели таким образом: «День недели.
Хотите увидеть следующий день?» и так до тех пор, пока
пользователь нажимает OK.
9. Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10.
10. Игра «Угадай число». Предложить пользователю загадать
число от 0 до 100 и отгадать его следующим способом:
каждую итерацию цикла делите диапазон чисел пополам,
записываете результат в N и спрашиваете у пользователя
«Ваше число > N, < N или == N?». В зависимости от того
что указал пользователь, уменьшаете диапазон. Начальный
диапазон от 0 до 100, поделили пополам и получили 50.
Если пользователь указал, что его число > 50, то изменили
диапазон на от 51 до 100. И так до тех пор, пока
пользователь не выберет == N.
=====================
1. Написать функцию, которая принимает 2 числа и
возвращает -1, если первое меньше, чем второе; 1 – если первое
больше, чем второе; и 0 – если числа равны.
2. Написать функцию, которая вычисляет
 факториал переданного ей числа.
3. Написать функцию, которая принимает три отдельные
цифры и превращает их в одно число. Например: цифры
1, 4, 9 превратятся в число 149.
4. Написать функцию, которая принимает длину и ширину
прямоугольника и вычисляет его площадь. Если в функцию
передали 1 параметр, то она вычисляет площадь квадрата.
5. Написать функцию, которая проверяет, является ли
переданное ей число совершенным. Совершенное число – это
число, равное сумме всех своих собственных делителей.
6. Написать функцию, которая принимает минимальное и
максимальное значения для диапазона, и выводит только
те числа из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать,
совершенное число или нет.
7. Написать функцию, которая принимает время (часы, минуты, секунды)
 и выводит его на экран в формате «чч:мм:

Если при вызове функции минуты и/или секунды не были
переданы, то выводить их как 00.
8. Написать функцию, которая принимает часы, минуты и
секунды и возвращает это время в секундах.
9. Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в
виде строки «чч:мм:сс».
10. Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2
даты, и возвращает результат в виде строки «чч:мм:сс». При
выполнении задания используйте функции из предыдущих 2-х заданий:
 сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите
обратно в «чч:мм:сс»
 */

'use strict'
/*
1. Запросить у пользователя его возраст и определить, кем он
является: ребенком (0–2), подростком (12–18), взрослым
(18_60) или пенсионером (60– ...).
 */

let age = +input('Введите Ваш возраст', '18');

if (age > 0 & age < 12) {
    alert('Вы еще ребенок');
} else if (age >= 12 & age < 18) {
    alert('Вы подросток');

} else if (age >= 18 & age < 60) {
    alert('Вы взрослый');

} else if (age >= 60) {
    alert('Вы пенсионер');
} else {
    alert('Некорректные данные');
}

/*
2. Запросить у пользователя число от 0 до 9 и вывести ему
спецсимвол, который расположен на этой клавише (1–!,
2–@, 3–# и т. д).
 */
let number = 1;
let symbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
while (true) {
    number = input('Введите число от 0 до 9', 0);
    if (number == undefined) {
        break;
    } else if (parseInt(number) >= 0 & parseInt(number) <= 9) alert(symbols[parseInt(number)]);
    else alert("Некорректный ввод")

}

/*
3. Запросить у пользователя трехзначное и число и проверить,
есть ли в нем одинаковые цифры.
 */
let n = input('Введите трехзначное число');
let numbers = [];
numbers = factor(parseInt(n));
if (numbers[0] == numbers[1] || numbers[0] == numbers[2] || numbers[1] == numbers[2]) {
    alert('В данном числе есть повторяющиеся цифры')
} else {
    alert('В данном числе нет повторяющихся цифр')
}
/*
4. Запросить у пользователя год и проверить, високосный он
или нет. Високосный год либо кратен 400, либо кратен 4 и
при этом не кратен 100.
 */
let year = +input('Введите год');
if (isYearLeap(year)) {
    alert(`Год ${year} високосный`)
} else {
    alert(`Год ${year} невисокосный`)
}
/*

5. Запросить у пользователя пятиразрядное число и
определить, является ли оно палиндромом.
 */
let numb = input('Введите пятизначное число', '12345');
if (isPalindrom(numb)) {
    alert(`Число палиндром`)
} else {
    alert(`Число непалиндром`)
}
/*
6. Написать конвертор валют. Пользователь вводит
количество USD, выбирает, в какую валюту хочет перевести: EUR,
    UAN или AZN, и получает в ответ соответствующую сумму.
*/
let usd = +input('Введите сумму в USD', 0);
let change = +input('В какую валюту переводим ?\n1 - eur\n2 - uan\n3 - azn');
let money;
let currency;
switch (change) {
    case 1: {
        currency = 'eur';
        money = Math.round(usd * 0.95 * 100) / 100;
        break;
    }
    case 2: {
        currency = 'uan';
        money = Math.round(usd * 20.5 * 100) / 100;
        break;
    }
    case 3: {
        currency = 'azn';
        money = Math.round(usd * 1.3 * 100) / 100;
        break;
    }
}
alert(`Вы получили ${money} ${currency}`);
/*
7. Запросить у пользователя сумму покупки и вывести сумму
к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
до 500 – 5%, от 500 и выше – 7%.
 */
let sum = +input('Введите сумму покупки');
alert('Сумма со скидкой ' + discont(sum));

/*
8. Запросить у пользователя длину окружности и периметр
квадрата. Определить, может ли такая окружность помeститься в указанный квадрат.
 */
let circle = +input('Введите длину окружности', '0');
let square = +input('Введите длину периметра квадрата', '0');
if (circleInSquare(circle, square)) {
    alert('Окружность поместиться в квадрат')
} else {
    alert('Окружность не поместиться в квадрат')
}

/*
9. Задать пользователю 3 вопроса, в каждом вопросе
по 3 варианта ответа. За каждый правильный ответ начисляется 2
балла. После вопросов выведите пользователю количество
набранных баллов.
 */

let question1 = {
    "text": "Назовите последний фильм режиссера Гая Ритчи",
    questions: ["Операция Фортуна", "Король Артур", "Джентельмены"],
    answer: 1
};
let question2 = {
    "text": "Кто сыграл Рокки Бальбоа в фильмах про Рокки",
    questions: ["Арнольд Шварценеггер", "Сильвестр Сталлоне", "Жан Клодт Ван Дам"],
    answer: 2
};
let question3 = {
    "text": "Какой замечательный актер сыграл роль дьявола в фильме «Иствикские ведьмы»?",
    questions: ["Джек Николсон", "Джонни Депп", "Бред Питт",],
    answer: 1
};

let summ = 0;

summ = summ + checkAnwer(question1) + checkAnwer(question2) + checkAnwer(question3);
alert(`Вы набрали ${summ} баллов`);

/*
10. Запросить дату (день, месяц, год) и вывести следующую
за ней дату. Учтите возможность перехода на следующий
месяц, год, а также високосный год.
 */
let date;
let array1;
let day1;
let month1;
let year1;
let days_month;

while (true) {
    date = input('Введите дату в формате DD.MM.YYYY', '01.01.1900');
    if (date == undefined) {
        break;
    }
    array1 = date.split('.');
    day1 = +array1[0];
    month1 = +array1[1];
    year1 = +array1[2];

    if (isYearLeap(year)) {
        days_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    } else {
        days_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    }

    if(day1<1||day1>days_month[month1-1]||month1<1||month1>12||year1<1){
        alert('Неправильная дата');continue;
    }

    if (day1 < days_month[month1 - 1]) {
        day1++;
    } else if (day1 === days_month[month1 - 1]) {
        if (month1 + 1 > 12) {
            day1 = 1;
            month1 = 1;
            year1++;
        } else {
            day1 = 1;
            month1++;
        }
    }
    alert(`Следующее число ${day1}.${month1}.${year1}`);
}


function checkAnwer(question) {
    let ball = 0;
    let userAnswer = +input(`${question.text}\n\n1 : ${question.questions[0]}\n2 : ${question.questions[1]}\n3 : ${question.questions[2]}\n`);
    if (userAnswer === question.answer) {
        alert(`Правильный ответ`);
        ball += 2;
    } else {
        alert(`Неверный ответ,правильный ответ : ${question.questions[question.answer - 1]}`)
    }
    return ball;

}

function circleInSquare(circle, square) {
    let d = circle / Math.PI;
    let s = square / 4;
    return d < s;
}

function discont(sum) {
    if (sum >= 200 && sum <= 300) {
        sum = sum * 0.97;
    } else if (sum >= 300 && sum <= 500) {
        sum = sum * 0.95;
    } else if (sum > 500) {
        sum = sum * 0.93;
    }
    return sum;
}

function isPalindrom(numb) {
    return numb === numb.split('').reverse().join('');
}

function isYearLeap(year) {
    return ((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)));
}

function factor(number) {
    let numbers = [];
    let ed = +number % 10;
    let des = +(Math.trunc(number / 10)) % 10;
    let sotn = +Math.trunc(number / 100);
    numbers[0] = ed;
    numbers[1] = des;
    numbers[2] = sotn;
    return numbers;
}

function input(message, placeholder) {
    return prompt(message, placeholder);
}

function input(message) {
    return prompt(message);
}
