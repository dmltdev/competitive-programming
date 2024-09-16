package medium539

import (
	"strconv"
	"strings"
	"sort"
)

func findMinDifference(timePoints []string) int {
	totalMinutesInDay := 1440
	minDiff := totalMinutesInDay
	minutePoints := []int{}
	
	for _, time := range timePoints {
		parts := strings.Split(time, ":")
		hours, _ := strconv.Atoi(parts[0])
		minutes, _ := strconv.Atoi(parts[1])
		totalMinutes := hours * 60 + minutes

		minutePoints = append(minutePoints, totalMinutes)
	}

	sort.Ints(minutePoints)

	for i := 1; i < len(minutePoints); i++ {
		diff := minutePoints[i] - minutePoints[i-1]
		if diff < minDiff {
			minDiff = diff
		}
	}

	circularDiff := totalMinutesInDay - minutePoints[len(minutePoints) - 1] + minutePoints[0]
	if circularDiff < minDiff {
		minDiff = circularDiff
	}

	return minDiff
}