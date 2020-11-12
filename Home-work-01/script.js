let bread = 15.678, fish = 123.965, water = 90.2345, sum;
document.writeln ("<h3>", "Максимальна ціна - ", Math.max (bread, fish, water), "</h3>");
document.writeln ("<h3>", "Мінімальна ціна - ", Math.min(bread, fish, water), "</h3>");
sum = bread + fish + water;
document.writeln ("<h3>", "Сума всіх товарів - ", sum, "</h3>");
document.writeln ("<h3>", "Сума цілих частин округлених до меншого - ", Math.floor(bread) + Math.floor(fish) + Math.floor(water), "</h3>");
let sumRoundedToHundreds; //По-іншому не додумався як це зробити
sumRoundedToHundreds = (Math.ceil (bread) + Math.ceil (fish) + Math.ceil (water)) / 100;
document.writeln ("<h3>", "Cума товарів округлена до сотень - ",  Math.floor (sumRoundedToHundreds) * 100, "</h3>");
document.writeln ("<h3>", "Булеве значення: чи є сума (округлена в меншу сторону) парним чи непарним числом? (true - парне, false - непарне) - ", Math.floor(bread + fish + water) %2 !== 0 , "</h3>");
document.writeln ("<h3>", "Cума решти, при оплаті всіх товарів сумою 500 грн - " , 500 - sum.toFixed(2) , "</h3>");
document.writeln ("<h3>", "Cереднє значення цін, округлене до другого знаку після коми - ", (sum / 3).toFixed(2), "</h3>");