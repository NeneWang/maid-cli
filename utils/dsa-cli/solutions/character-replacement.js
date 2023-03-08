class CharacterReplacement {
    solve(s, k) {

        const addRightFrequency = (s, right, map) => {
            const char = s[right];
            const index = getCode(char);

            map[index]++;

            return map[index];
        };

        const subtractLeftFrequency = (s, left, map) => {
            const char = s[left];
            const index = getCode(char);

            map[index]--;

            return map[index];
        };

        const getCode = (char) => char.charCodeAt(0) - 'A'.charCodeAt(0);
        let [left, right, longest, max] = new Array(4).fill(0);
        const frequencyMap = new Array(26).fill(0);

        while (right < s.length) {
            const count = addRightFrequency(s, right, frequencyMap);

            longest = Math.max(longest, count);

            let window = right - left + 1;
            const canSlide = k < window - longest;
            if (canSlide) {
                subtractLeftFrequency(s, left, frequencyMap);
                left++;
            }

            window = right - left + 1;
            max = Math.max(max, window);

            right++;
        }

        return max;
    }
}



module.exports = { Problem: CharacterReplacement };