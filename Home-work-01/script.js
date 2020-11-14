let prise_Bread = 15.678, prise_fish = 123.965, prise_water = 90.2345, sum;

//Зробив відразу шаблонні рядки щоб не копіювати одне й те ж;

document.writeln (` "<h3>", "Максимальна ціна - " ${Math.max (prise_bread, prise_fish, prise_water)} "</h3>" `);
document.writeln (` "<h3>", "Мінімальна ціна - " ${Math.min(prise_bread, prise_fish, prise_water)} "</h3>" ` );
sum = prise_bread + prise_fish + prise_water;
document.writeln (` "<h3>", "Сума всіх товарів - " ${sum} , "</h3>" `);
document.writeln (` "<h3>", "Сума цілих частин округлених до меншого - " ${Math.floor(prise_bread) + Math.floor(prise_fish) + Math.floor(prise_water)} "</h3>" `);
let sumRoundedToHundreds; //По-іншому не додумався як це зробити
sumRoundedToHundreds = (Math.ceil (prise_bread) + Math.ceil (prise_fish) + Math.ceil (prise_water)) / 100;
document.writeln (` "<h3>", "Cума товарів округлена до сотень - " ${Math.floor (sumRoundedToHundreds) * 100} "</h3>" `);
document.writeln (` "<h3>", "Булеве значення: чи є сума (округлена в меншу сторону) парним чи непарним числом? (true - парне, false - непарне) - " ${Math.floor(prise_bread + prise_fish + prise_water) %2 !== 0} "</h3>" `);
document.writeln (` "<h3>", "Cума решти, при оплаті всіх товарів сумою 500 грн - "  ${500 - sum.toFixed(2)} "</h3>" `);
document.writeln (` "<h3>", "Cереднє значення цін, округлене до другого знаку після коми - " ${(sum / 3).toFixed(2)} "</h3>" `);