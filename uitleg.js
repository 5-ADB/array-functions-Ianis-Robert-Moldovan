// 1. Array.at()
// Geeft het element op een opgegeven index, ondersteunt negatieve indexen.
let arr = [10, 20, 30, 40];
console.log(arr.at(-1));
console.log("-----------------");

// 2. Array.join()
// Zet alle elementen van een array om in een string
// gescheiden door een opgegeven teken
console.log(arr.join(" - ")); 
console.log("-----------------");

// 3. array.pop()
// Verwijdert het laatste element uit een array en retourneert het
console.log(arr.pop()); // 40 = laatste getal dus die wordt verwijderd en geretuurneerd
console.log("-----------------");
console.log(arr); // 10 20 30
console.log("-----------------");


// 4. array.push()
// voegt een of meerdere elementen toe aan het einde van een array
arr.push(50); // voegt 50 bij de array
console.log(arr);
console.log("-----------------");

// 5. array.shift()
// verwijdert het eerste element van een array en retourneert het
console.log(arr.shift()); // 10 = eerste getal dus die wordt verwijdert en geretuurneerd
console.log("-----------------");
console.log(arr);
console.log("-----------------");

// 6. array.unshift()
// voegt een of meerdere elementen toe aan het begin van een array
arr.unshift(5, 15);
console.log(arr);
console.log("-----------------");

// 7. array.delete ()
// verwijdert een element, maar laat een lege plek (undefined) achter.
delete arr[1]; // verwijdert index 1 dus het tweede getal
console.log(arr)
console.log("-----------------");

// 8. array.concat()
// voegt twee of meer arrays samen en retoutneert een nieuwe array
let arr2 = [60, 70] // 2 de array 
let samen = arr.concat(arr2)
console.log(samen);
console.log("-----------------");