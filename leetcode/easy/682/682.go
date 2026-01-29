package main

import "strconv"

func calPoints(operations []string) int {
	stack := []int{}

	for _, op := range operations {
		switch op {
		case "C":
			stack = stack[:len(stack)-1]
		
		case "D":
			lastScore := stack[len(stack)-1]
			stack = append(stack, lastScore*2)
		
		case "+":
			lastScore := stack[len(stack)-1]
			secondLastScore := stack[len(stack)-2]
			stack = append(stack, lastScore+secondLastScore)
		
		default:
			num, _ := strconv.Atoi(op)
			stack = append(stack, num)
		}
	}

	sum := 0
	for _, score := range stack {
		sum += score
	}

	return sum
}