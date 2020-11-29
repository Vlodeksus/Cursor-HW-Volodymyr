// //Знаходить найбільше число з чотирьох (Це я спочатку не знав як роздылити число на цифри, тому зробив числами) 
function getMaxDigit(a, b, c, d) {
    return Math.max(a, b, c, d);
}
document.writeln(`<h3>(Cпочатку зробив так бо, ну ніяк не виходило знайти цифру в числі)<br>
Найбільше число з чотирьох введених: ${getMaxDigit(5, 6, 7, 8)}</h3><br>`);

// // Цифра з найбільшим значенням в числі
function getMaxDigit2(digit) {
    splitedDigit = digit.toString().split('');
    maxDigit = 0;

    splitedDigit.forEach(elements => {
        if (+elements > maxDigit) {
            maxDigit = elements;
        }
    });
    return maxDigit;
}
document.writeln(`<h3>Цифра з найбільшим значенням в числі - ${getMaxDigit2(123457)}</h3><br>`);

//Степінь числа

function degreeOfNumber(digit, degree) {
    let digitDegree = 1;

    for (let i = 0; i < degree; i++) {

        digitDegree *= digit;

    }
    return digitDegree
}
document.writeln(`<h3>Число в степені n становить -  ${degreeOfNumber(3, 3)}</h3><br>`);

// //Генерація паролю
function getRandomPassword(length) {
    let password = "";
    let symbols = "0123456789";
    for (let i = 0; i < length; i++) {
        password += symbols.charAt(Math.random() * symbols.length);
    }
    return password;
}
document.writeln(`<h3> Пароль з 8 цифр: ${getRandomPassword(8)} </h3><br>`);

// //Перша літера слова велика, решта малі: 
function firstBigLetter(word) {
    let allLittleLetters = word.toLowerCase();
    let firstLetter = word[0].toUpperCase();
    return firstLetter + allLittleLetters.slice(1);
}
document.writeln(`<h3>Перша велика літера у слові: ${firstBigLetter("ВоЛоДИМир")}</h3><br>`);

// //Випадкове число від значення 1 до значення 2
function getRandomNumber(digit1, digit2) {
    let randomDigit = digit1 + Math.random() * (digit2 + 1 - digit1);
    return Math.floor(randomDigit)
}
document.writeln(`<h3>Випадкове число від значення 1 до значення 2 становить - ${getRandomNumber(3, 9)}</h3><br>`);

// //Зарплата-податок
function salaryWithoutTax(salary) {
    withoutTax = salary - (salary * (19.5 / 100));
    return withoutTax.toFixed(2);
}
document.writeln(`<h3>Зарплата без податку (-19,5%) становить - ${salaryWithoutTax(987.99)}</h3>`)
