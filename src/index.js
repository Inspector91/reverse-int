module.exports = function reverse (n) {
if (n < 0) {
    n = n * -1;
}
let first = n % 10;
let third = Math.trunc(n / 100);
let second = Math.trunc((n - Math.trunc(n  / 100) * 100) / 10);
result = Number(`${first}${second}${third}`);
return result;
}
