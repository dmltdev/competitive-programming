class Solution {
    fun shipWithinDays(weights: IntArray, days: Int): Int {
        var left = weights.maxOrNull() ?: 0
        var right = weights.sum()
        var result = right

        fun canShip(cap: Int): Boolean {
            var ships = 1
            var currCap = cap

            for (weight in weights) {
                if (currCap - weight < 0) {
                    ships++
                    currCap = cap
                }
                currCap -= weight
            }

            return ships <= days
        }

        while (left <= right) {
            val mid = (left + right) / 2

            if (canShip(mid)) {
                result = minOf(result, mid)
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return result
    }
}