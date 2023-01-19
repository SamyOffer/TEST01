function wordsFunction(arrays){
    return arrays.filter((array) => !array.includes("x"));
};

module.exports = wordsFunction;