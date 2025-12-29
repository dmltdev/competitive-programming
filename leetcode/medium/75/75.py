class Solution:
    def sortColors(self, nums: List[int]) -> None:
        quick_sort(nums)

def quick_sort(arr: list) -> list:
    if len(arr) <= 1:
        return arr

    quick_sort_helper(arr, 0, len(arr) - 1)
    return arr

def quick_sort_helper(arr: list, left: int, right: int) -> None:
    if left >= right:
        return

    pivot_index = partition(arr, left, right)
    quick_sort_helper(arr, left, pivot_index - 1)
    quick_sort_helper(arr, pivot_index + 1, right)

def partition(arr: list, left: int, right: int) -> int:
    pivot = arr[right]
    i = left

    for j in range(left, right):
        if arr[j] < pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1

    arr[i], arr[right] = arr[right], arr[i]
    return i