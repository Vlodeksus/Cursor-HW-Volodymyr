//Знаходить найбільше число з чотирьох. 
function getMaxDigit (a,b, c, d) {
        return Math.max(a, b, c, d);
}
document.writeln (`<h3>Найбільше число з чотирьох введених: ${getMaxDigit (5, 6, 7 ,8 )}</h3><br>`);

//Генерація паролю
function getRandomPassword (length) {
    let password = "";
    let symbols = "0123456789";
    for (let i = 0; i < length; i ++ ) {
    password += symbols.charAt (Math.random () * symbols.length);
    }
return password;
}
document.writeln (`<h3> Пароль з 8 цифр: ${getRandomPassword(8)} </h3><br>`);

//Перша літера слова велика, решта малі: 
function firstBigLetter (word) {
let allLittleLetters = word.toLowerCase();
let firstLetter = word [0].toUpperCase();
return firstLetter + allLittleLetters.slice(1);
}
document.writeln (`<h3>Перша велика літера у слові: ${firstBigLetter("ВоЛоДИМир")}</h3><br>`);

//Випадкове число від значення1 до значення2
function getRandomNumber (digit1, digit2) {
let randomDigit = digit1 + Math.random() * (digit2 + 1 - digit1);
return Math.floor(randomDigit)
}
document.writeln (`<h3>Випадкове число від значення1 до значення2 становить - ${getRandomNumber(3, 9)}</h3><br>`);

//Зарплата-податок
function zarplataBezPodatku (zarplata) {
bezPodatku = zarplata - (zarplata * (19.5/100));
return bezPodatku;
} 
document.writeln (`<h3>Зарплата без податку (-19,5%) становить - ${zarplataBezPodatku(1000)}</h3>`)
