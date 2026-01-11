package main

func max(nums []int) int {
	maxVal := nums[0]
	for _, num := range nums {
		if num > maxVal {
			maxVal = num
		}
	}
	return maxVal
}

func sum(nums []int) int {
	total := 0
	for _, num := range nums {
		total += num
	}
	return total
}

func shipWithinDays(weights []int, days int) int {
	left := max(weights)
	right := sum(weights)
	result := right

	canShip := func(cap int) bool {
		ships := 1
		currCap := cap

		for _, w := range weights {
			if currCap - w < 0 {
				ships++
				currCap = cap
			}
			currCap -= w
		}

		return ships <= days
	}

	for left <= right {
		mid := (left + right) / 2
		
		if canShip(mid) {
			if mid < result {
				result = mid
			}
			right = mid - 1
		} else {
			left = mid + 1
		}
	}

	return result
}