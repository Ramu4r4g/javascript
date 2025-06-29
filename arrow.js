var isOdd = (num) => {
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}
console.log(isOdd(13));
const num1 = [13, 15, 17, 19];
const res1 = num1.every(isOdd);
console.log(res1);
var result2 = [3, 5, 7, 9].every((n) => {
    return n % 2 !== 0;
});
console.log(result2);
var result3 = [3, 5, 7, 9].every((val) => (val % 2 !== 0));
console.log(result3);
