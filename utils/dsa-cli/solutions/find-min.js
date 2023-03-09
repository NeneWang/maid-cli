class FindMin {
    /**
     * @param {number[]} nums
     * Time O(log(N)) | Space O(1)
     * @return {number}
     */
    findMin(nums) {
        let [left, right] = [0, nums.length - 1];

        while (left < right) {
            const mid = (left + right) >> 1;
            const guess = nums[mid];
            const [leftNum, rightNum] = [nums[left], nums[right]];

            const isTarget = leftNum < rightNum;
            if (isTarget) return leftNum;

            const isTargetGreater = leftNum <= guess;
            if (isTargetGreater) left = mid + 1;

            const isTargetLess = guess < leftNum;
            if (isTargetLess) right = mid;
        }

        return nums[left];
    }

    solve(nums) {
        this.findMin(nums);
    }
}


module.exports = { Problem: FindMin };