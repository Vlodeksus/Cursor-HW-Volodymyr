const price_Bread = 15.678; 
const price_fish = 123.965; 
const price_water = 90.2345;
let sum;

//Зробив відразу шаблонні рядки щоб не копіювати одне й те ж;

document.writeln (` "<h3>", "Максимальна ціна - " ${Math.max (price_bread, price_fish, price_water)} "</h3>" `);
document.writeln (` "<h3>", "Мінімальна ціна - " ${Math.min(price_bread, price_fish, price_water)} "</h3>" ` );
sum = price_bread + price_fish + price_water;
document.writeln (` "<h3>", "Сума всіх товарів - " ${sum} , "</h3>" `);
document.writeln (` "<h3>", "Сума цілих частин округлених до меншого - " ${Math.floor(price_bread) + Math.floor(price_fish) + Math.floor(price_water)} "</h3>" `);
let sumRoundedToHundreds; //По-іншому не додумався як це зробити
sumRoundedToHundreds = (Math.ceil (price_bread) + Math.ceil (price_fish) + Math.ceil (price_water)) / 100;
document.writeln (` "<h3>", "Cума товарів округлена до сотень - " ${Math.floor (sumRoundedToHundreds) * 100} "</h3>" `);
document.writeln (` "<h3>", "Булеве значення: чи є сума (округлена в меншу сторону) парним чи непарним числом? (true - парне, false - непарне) - " ${Math.floor(price_bread + price_fish + price_water) %2 !== 0} "</h3>" `);
document.writeln (` "<h3>", "Cума решти, при оплаті всіх товарів сумою 500 грн - "  ${500 - +sum.toFixed(2)} "</h3>" `);
document.writeln (` "<h3>", "Cереднє значення цін, округлене до другого знаку після коми - " ${(+sum / 3).toFixed(2)} "</h3>" `);