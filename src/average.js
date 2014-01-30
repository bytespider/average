module.exports = function average(values) {
    'use strict';
    
    return values.reduce(sum, 0) / values.length;
};

function sum(a, b) {
    return a + b;
}