let digitStart, digitFinish, skipEvenDigits, sum=0;

digitStart = +prompt ("Введіть перше ціле число!");
digitStart = +digitStart.toFixed(0);

while (isNaN(digitStart) || digitStart < 0) {
  digitStart = +prompt ("Спробуйте ще раз ввести число!");
}

digitFinish = +prompt ("Введіть друге ціле число!");
digitFinish = +digitFinish.toFixed(0);

while (isNaN(digitFinish)) {
    digitFinish = +prompt ("Спробуйте ще раз ввести число!");
  }

while (digitFinish < digitStart) {
    digitFinish = +prompt ("Друге число не може бути меншим за перше!");
  }
skipEvenDigits = confirm ("Чи потрібно пропускати парні числа?");

for ( i = digitStart; i <= digitFinish; i++ ) {
if (skipEvenDigits === false) {
    sum += i; 
  } 
    else {
      i %2 === 0 ? 0 : sum +=i;
    }
  }
    

document.writeln (` <h3> Ви ввели: Перше число - ${digitStart} Друге число - ${digitFinish}
Сума чисел від Першого до Другого - ${sum} </h3>`);