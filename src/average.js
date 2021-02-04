module.exports = function average(values) {
    return values.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
    }) / values.length
};
