package medium1262

import "math"

func maxSumDivThree(nums []int) int {
    NEG := math.Inf(-1)
	dp := []float64{0, NEG, NEG}

	for _, x := range nums {
		next := make([]float64, 3)
		copy(next, dp)
		for r := 0; r < 3; r++ {
			if (dp[r] == NEG) {
				continue
			}
			newSum := dp[r] + float64(x)
			newR := int(math.Mod(newSum, 3))
			if newSum > next[newR] {
				next[newR] = newSum
			}
		}
		dp = next
	}

	if dp[0] < 0 {
		return 0
	}
	return int(dp[0])
}