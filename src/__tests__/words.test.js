const wordsFunction = require("../wordsTable");

describe("wordsFunction", () => {
    test("should return an empty array", () => {
        const result = wordsFunction([]);
        expect(result).toEqual([]);
    });
    test("should return an array of the elements i give ", () => {
        const array = ["hello", "world"];
        const result = wordsFunction(array);
        expect(result).toEqual(["hello", "world"]);
    });
});