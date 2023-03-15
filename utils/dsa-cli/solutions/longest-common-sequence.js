
var initTabu = (text1) => new Array((text1.length + 1)).fill(0)

var search = (text1, text2, tabu) => {
    for (let col = (text2.length - 1); (0 <= col); col--) {/* Time O(N) */
        const temp = initTabu(text1);                               /* Space O(M) */

        for (let row = (text1.length - 1); (0 <= row); row--) {/* Time O(M) */
            const isEqual = (text1[row] == text2[col]);

            temp[row] = isEqual                                     /* Space O(M) */
                ? (tabu[(row + 1)] + 1)
                : Math.max(tabu[row], temp[(row + 1)]);
        }

        tabu = temp;                                                /* Space O(M) */
    }

    return tabu;
}

/**
 * DP - Bottom Up
 * Matrix - Tabulation
 * Time O(N * M) | Space O(M)
 * https://leetcode.com/problems/longest-common-subsequence/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = (text1, text2) => {
    const canSwap = (text2.length < text1.length);
    if (canSwap) [text1, text2] = [text2, text1];

    let tabu = initTabu(text1);       /* Time O(M)     | Space O(M) */

    tabu = search(text1, text2, tabu);/* Time O(N * M) | Space O(M) */

    return tabu[0];
};

class LongestCommonSubsequence {
    solve(text1, text2) {
        return longestCommonSubsequence(text1, text2);
    }
}

module.exports = { Problem: LongestCommonSubsequence };