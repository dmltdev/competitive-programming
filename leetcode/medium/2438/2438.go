package main

import "fmt"

func onesMinusZeros(grid [][]int) [][]int {
	onesRow := make([]int, len(grid))
	onesCol := make([]int, len(grid[0]))

	for i := range grid {
		for j := range grid[0] {
			onesRow[i] += grid[i][j]
			onesCol[j] += grid[i][j]
		}
	}

	diff := make([][]int, len(grid))
	for i := range diff {
		diff[i] = make([]int, len(grid[0]))
	}

	for i := range grid {
		for j := range grid[0] {
			zerosRowCount := len(grid[0]) - onesRow[i]
			zerosColCount := len(grid) - onesCol[j]
			diff[i][j] = onesRow[i] + onesCol[j] - zerosColCount - zerosRowCount
		}
	}

	return diff
}

func main() {
	grid := [][]int{{0, 1, 1}, {1, 0, 1}, {0, 0, 1}}
	result := onesMinusZeros(grid)
	fmt.Println("Result:", result)
}