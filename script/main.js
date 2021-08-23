// Calculation Functions
const add = function(a, b) {
    return +a + +b;
}
const subtract = function(a, b) {
    return +a - +b;
}
const divide = function(a, b) {
    if (b == '0') {
        return 'ERR';
    } else {
        const c = +a / +b;
        return Math.round(c * 100) / 100;
    }
}
const multiply = function(a, b) {
    return +a * +b;
}
const power = function(a, b) {
    const total = a ** b;
    return total;
}
const operate = function(a, operator, b) {
    if (operator == '+') {
        return add(a, b);
    } if (operator == '-') {
        return subtract(a, b);
    } if (operator == '/') {
        return divide(a, b);
    } if (operator == '*') {
        return multiply(a , b);
    } if (operator == '**') {
        return power(a, b);
    }
}

// Clear calcTxt
const clear = document.getElementById('c').addEventListener('click', function() {
    document.getElementById('calcTxt').innerText = ' ';
});
const clearE = document.getElementById('ce').addEventListener('click', function(){
    document.getElementById('calcTxt').innerText = " ";
});

// Write numbers to calcTxt
const numbers = document.getElementsByClassName('nums');
let addTxt = function(){
    if (document.getElementById('calcTxt').innerText !== 'ERR') {
        let number = this.textContent;
        document.getElementById('calcTxt').innerText += number;
    } else {
        document.getElementById('calcTxt').innerText = this.textContent;
    }
};
for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', addTxt)
};

// Store numbers 
let x;
let y; 
let oper;
const operators = document.getElementsByClassName('operator');
let storeX = function() {
    x = document.getElementById('calcTxt').innerText
};
let storeY = function() {
    y = document.getElementById('calcTxt').innerText
};

// Operate 
let operator = function() {
    storeX();
    oper = this.textContent;
    document.getElementById('calcTxt').innerText = '';
};
for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', operator)
};
let equal = function() {
    if (x != null) {
        storeY();
        let result = operate(x, oper, y);
        document.getElementById('calcTxt').innerText = result;
    } else {
        document.getElementById('calcTxt').innerText = 'ERR'
    }
};
const equals = document.getElementById('equals').addEventListener('click', equal);

// Percent 
percentage = function() {
    let num = document.getElementById('calcTxt').innerText
    let per = (num / 100);
    document.getElementById('calcTxt').innerText = per;
};
percent = document.getElementById('percent').addEventListener('click', percentage)

// Decimal
let decimals = function() {
    let currentTxt = document.getElementById('calcTxt').innerText
    if (!currentTxt.includes('.')) {
        currentTxt += '.'
    }
}
decimal = document.getElementById('decimal').addEventListener('click', decimals)