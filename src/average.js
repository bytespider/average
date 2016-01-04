module.exports = function average(values) {
    for (var i = 0, sum = 0; i < values.length; ++i) {
        sum += values[i];
    }
    return sum / values.length;
};
