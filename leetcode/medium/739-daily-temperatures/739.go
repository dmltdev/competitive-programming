package main

func dailyTemperatures(temperatures []int) []int {
    ans := make([]int, len(temperatures))
    stack := make([]int, 0)

    for i := 0; i < len(temperatures); i++ {
        for len(stack) > 0 && temperatures[i] > temperatures[stack[len(stack) -1]] {
            prevIndex := stack[len(stack)-1]
            stack = stack[:len(stack)-1]
            ans[prevIndex] = i - prevIndex
        }
        stack = append(stack, i)
    }

    return ans
}