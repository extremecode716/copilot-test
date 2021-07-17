// Recursive call example.
// maximum value of a recursive call.
// minimum value of a recursive call.
// euclid's algorithm.
// factorial.
// fibonacci.
// sum of recursive call.

var RecursiveCall = {};

RecursiveCall.max = function(n) {
    if (n === 0) {
        return 0;
    } else {
        return Math.max(n, RecursiveCall.max(n - 1));
    }
};

RecursiveCall.min = function(n) {
    if (n === 0) {
        return 0;
    } else {
        return Math.min(n, RecursiveCall.min(n - 1));
    }
};


RecursiveCall.euclid = function(a, b) {
    if (a === 0) {
        return b;
    } else {
        return RecursiveCall.euclid(b % a, a);
    }
};

RecursiveCall.factorial = function(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * RecursiveCall.factorial(n - 1);
    }
};

RecursiveCall.fibonacci = function(n) {
    if (n === 1 || n === 0) {
        return n;
    } else {
        return RecursiveCall.fibonacci(n - 1) + RecursiveCall.fibonacci(n - 2);
    }
};

RecursiveCall.sum = function(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + RecursiveCall.sum(n - 1);
    }
};

RecursiveCall.main = function() {
    var n = 10;
    console.log("max(n) = " + RecursiveCall.max(n));
    console.log("max(n) = " + RecursiveCall.max(n));
    console.log("factorial(n) = " + RecursiveCall.factorial(n));
    console.log("fibonacci(n) = " + RecursiveCall.fibonacci(n));
    console.log("sum(n) = " + RecursiveCall.sum(n));
    var n2 = 5;
    console.log("euclid(a, b) = " + RecursiveCall.euclid(n2, n));

};

RecursiveCall.main();

