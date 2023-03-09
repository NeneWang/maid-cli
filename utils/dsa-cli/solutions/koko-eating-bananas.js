class KokoEatingBananas {

    minEatingSpeed(piles, h) {
        let [left, right] = [1, Math.max(...piles)];

        while (left < right) {
            const mid = (left + right) >> 1;
            const hourSpent = getHourSpent(mid, piles);

            const isTargetGreater = h < hourSpent;
            if (isTargetGreater) left = mid + 1;

            const isTargetLess = hourSpent <= h;
            if (isTargetLess) right = mid;
        }

        return right;


        const getHourSpent = (mid, piles, hourSpent = 0) => {
            for (const pile of piles) {
                hourSpent += Math.ceil(pile / mid);
            }

            return hourSpent;
        };
    };

    solve(piles, h) {
        return this.minEatingSpeed(piles, h);
    }
}


module.exports = { Problem: KokoEatingBananas };