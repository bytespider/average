module.exports = function average(values) {
    'use strict';
    
    return values.reduce(sum) / values.length;
};

function sum(a, b) {
    return a + b;
}