let bread = 15.678, fish = 123.965, water = 90.2345, sum;
document.writeln ("Максимальна ціна - ", Math.max (bread, fish, water), "<br>", "<br>");
document.writeln ("Мінімальна ціна - ", Math.min(bread, fish, water), "<br>", "<br>");
sum = bread + fish + water;
document.writeln ("Сума всіх товарів - ", sum, "<br>", "<br>");
document.writeln ("Сума цілих частин округлених до меншого - ", Math.floor(bread) + Math.floor(fish) + Math.floor(water), "<br>", "<br>");
let sumRoundedToHundreds; //По-іншому не додумався як це зробити
sumRoundedToHundreds = (Math.ceil (bread) + Math.ceil (fish) + Math.ceil (water)) / 100;
document.writeln ("Cума товарів округлена до сотень - ",  Math.floor (sumRoundedToHundreds) * 100, "<br>", "<br>");
document.writeln ("Булеве значення: чи є сума (округлена в меншу сторону) парним чи непарним числом? (true - парне, false - непарне) - ", Math.floor(bread + fish + water) %2 !== 0 , "<br>", "<br>");
document.writeln ("Cума решти, при оплаті всіх товарів сумою 500 грн - " , 500 - sum.toFixed(2) , "<br>", "<br>");
document.writeln ("Cереднє значення цін, округлене до другого знаку після коми - ", (sum / 3).toFixed(2), "<br>", "<br>");