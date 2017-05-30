module.exports = function average(values) {
    for (var i = 0, sum = 0, l = values.length; i < l; ++i) {
        sum += values[i];
    }
    return sum / l;
};
