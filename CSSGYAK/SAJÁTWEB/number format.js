let number = 1000000.5;
let options = { style: 'currency', currency: 'USD' };
console.log(new Intl.NumberFormat('en-US', options).format(number));
// $1,000,000.50
console.log(new Intl.NumberFormat('fr-FR', options).format(number));
// 1 000 000,50 $US
console.log(new Intl.NumberFormat('in-IN', options).format(number));
// US$1.000.000,50
options = { style: 'currency', currency: 'EUR' };
console.log(new Intl.NumberFormat('en-US', options).format(number));
// €1,000,000.50
console.log(new Intl.NumberFormat('fr-FR', options).format(number));
// 1 000 000,50 €
console.log(new Intl.NumberFormat('in-IN', options).format(number));
// €1.000.000,50