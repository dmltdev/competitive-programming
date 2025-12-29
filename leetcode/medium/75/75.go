package main

func sortColors(nums []int) {
	quickSort(nums)
}

func quickSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	quickSortHelper(arr, 0, len(arr)-1)
	return arr
}

func quickSortHelper(arr []int, left, right int) {
	if left >= right {
		return
	}

	pivotIndex := partition(arr, left, right)
	quickSortHelper(arr, left, pivotIndex-1)
	quickSortHelper(arr, pivotIndex+1, right)
}

func partition(arr []int, left, right int) int {
	pivot := arr[right]
	i := left

	for j := left; j < right; j++ {
		if arr[j] < pivot {
			arr[i], arr[j] = arr[j], arr[i]
			i++
		}
	}

	arr[i], arr[right] = arr[right], arr[i]
	return i
}