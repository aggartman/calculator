const add = function(a, b) {
    return +a + +b;
}
const subtract = function(a, b) {
    return +a - +b;
}
const divide = function(a, b) {
    const c = +a / +b;
    return Math.round(c * 100) / 100;
}
const multiply = function(values) {
    const multi = (a, b) => a * b;
    const total = values.reduce(multi);
    return total;
}
const power = function(a, b) {
    const total = a ** b;
    return total;
}
const operate = function(a, operator, b) {
    if (operator == '+') {
        add(a, b);
    } if (operator == '-') {
        subtract(a, b);
    } if (operator == '/') {
        divide(a, b);
    } if (operator == '*') {
        multiply(a , b);
    } if (operator == '**') {
        power(a, b);
    }
}
const clear = document.getElementById('c').addEventListener('click', function() {
    document.getElementById('calcTxt').innerText = ' ';
});
const clearE = document.getElementById('ce').addEventListener('click', function(){
    document.getElementById('calcTxt').innerText = " ";
});
const numbers = document.getElementsByClassName('nums')
