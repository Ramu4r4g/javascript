var isOdd = (num) => {
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}
console.log(isOdd(13)); // true
const numbers1 = [13, 15, 17, 19];
const result1 = numbers1.every(isOdd);
console.log(result1);
var result2 = [3, 5, 7, 9].every((n) => {
    return n % 2 !== 0;
});
console.log(result2);
var result3 = [3, 5, 7, 9].every((val) => (val % 2 !== 0));
console.log(result3);
