package main

import "fmt"

func numTilings(n int) int {
	if n == 0 {
		return 0
	}
	if n == 1 { 
		return 1
	}
	if n == 2 {
		return 2
	}

	MOD := 1000000007

	dp := make([]int, n+1)
	dp[0] = 1
	dp[1] = 1
	dp[2] = 2

	for i := 3; i <= n; i++ {
		dp[i] = (dp[i-1]*2 + dp[i-3]) % MOD
	}

	return dp[n]
}

func main() {
	fmt.Println(numTilings(3))
}