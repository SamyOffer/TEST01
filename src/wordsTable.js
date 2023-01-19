function wordsFunction(arrays) {
    return arrays.filter((array) => {
        return !array.includes("x") && !array.includes("X");
    });
}

module.exports = wordsFunction;
