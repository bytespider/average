var average = require('../');
var test = require('tap').test;
var result;

test('average', function (t) {
    t.plan(3);

    result = average([10, 10, 10, 10]);
    t.ok(result === 10, 'average should be 10');

    result = average([2, 5, 0, 1, 25, 7, 3, 0, 0, 10]);
    t.ok(result === 5.3, 'average should be 5.3');
    
    result = average(new Uint8Array([77, 77, 0,  42, 0, 12,  0, 8, 226, 137]));
    t.ok(result === 57.9, 'average on Uint8Array array should be 57.9');
});