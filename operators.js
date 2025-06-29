let costPrice = 250;
let selPrice = 500;
console.log("ADDING TWO NUMBERS: " + (costPrice + selPrice));
console.log("SUBSTRACT TWO NUMBERS: " + (selPrice - costPrice));
console.log("MULIPLY TWO NUMBERS: " + (costPrice * selPrice));
let offer = ((selPrice - costPrice) / selPrice) * 100;
console.log("Dicount: " + offer);
let rounded = Math.round(offer);
console.log("Discount: " + rounded + "%");

let isProfit = selPrice > costPrice;
console.log("DATA TYPE: " + (typeof rounded));
console.log("DATA TYPE: " + (typeof offer));
console.log("DATA TYPE: " + (typeof "python"));
console.log("DATA TYPE: " + (typeof isProfit));
