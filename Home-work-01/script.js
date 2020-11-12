let bread = 15.678, fish = 123.965, water = 90.2345, sum;
document.writeln ("Максимальна ціна - ", Math.max (bread, fish, water), "<br>");
document.writeln ("Мінімальна ціна - ", Math.min(bread, fish, water), "<br>");
sum = bread + fish + water;
document.writeln ("Сума всіх товарів - ", sum, "<br>");
document.writeln ("Сума цілих частин округлених до меншого - ", Math.floor(bread) + Math.floor(fish) + Math.floor(water), "<br>");