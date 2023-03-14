class MergeIntervals {
    /**
     * https://leetcode.com/problems/merge-intervals/
     * Time O(N * logN) | Space O(N)
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge = function (intervals) {


        const mergerInterval = (intervals, merged = []) => {
            let prev = intervals.shift();

            for (const curr of intervals) {
                const [prevStart, prevEnd] = prev;
                const [currStart, currEnd] = curr;

                const hasOverlap = currStart <= prevEnd;
                if (hasOverlap) {
                    prev[1] = Math.max(prev[1], curr[1]);
                    continue;
                }

                merged.push(prev);
                prev = curr;
            }

            return [...merged, prev];
        };

        intervals.sort(([aStart, aEnd], [bStart, bEnd]) =>
            aStart !== bStart ? aStart - bStart : aEnd - bEnd
        );

        return mergerInterval(intervals);
    };


    solve(intervals) {
        return this.merge(intervals);
    }
}


module.exports = { Problem: MergeIntervals };