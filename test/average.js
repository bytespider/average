var average = require('../');
var test = require('tap').test;
var result;

test('average', function (t) {
    t.plan(2);

    result = average([10, 10, 10, 10]);
    t.ok(result === 10, 'average should be 10');

    result = average([2, 5, 0, 1, 25, 7, 3, 0, 0, 10]);
    t.ok(result === 5.3, 'average should be 5.3');
});