class LetterCombinations {

    /**
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Time O(N * 4^N) | Space O(N)
 * @param {string} digits
 * @return {string[]}
 */
    letterCombinations = function (digits, combination = [], combinations = []) {

        const backTrack = (digits, char, combination, combinations) => {
            // TODO Add the letter to the combination, call the function recursively using the combination and slicing the first letter.
            // Then pop the combination since you already have the combination in the combinations array produced from that attempt..
            
        }

        const phoneButtons = ({
            2: ['a', 'b', 'c'],
            3: ['d', 'e', 'f'],
            4: ['g', 'h', 'i'],
            5: ['j', 'k', 'l'],
            6: ['m', 'n', 'o'],
            7: ['p', 'q', 'r', 's'],
            8: ['t', 'u', 'v'],
            9: ['w', 'x', 'y', 'z'],
        })
        const isBaseCase = !digits
        if (isBaseCase) {
            if (combination.length) combinations.push(combination.join(''))

            return combinations;
        }

        const letters = phoneButtons[digits[0]];

        for (const char of letters) {
            backTrack(digits, char, combination, combinations);
        }

        return combinations;
    };

    solve(digits) {
        return this.letterCombinations(digits);
    }
}


module.exports = { Problem: LetterCombinations };