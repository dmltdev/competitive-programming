class Solution {
    fun sortColors(nums: IntArray): Unit {
        quickSort(nums)
    }
}

fun quickSort(arr: IntArray) {
    if (arr.size <= 1) return

    quickSortHelper(arr, 0, arr.size - 1)
}

fun quickSortHelper(arr: IntArray, left: Int, right: Int) {
    if (left >= right) return

    val pivotIndex = partition(arr, left, right)
    quickSortHelper(arr, left, pivotIndex - 1)
    quickSortHelper(arr, pivotIndex + 1, right)
}

fun partition(arr: IntArray, left: Int, right: Int): Int {
    val pivot = arr[right]
    var i = left

    for (j in left until right) {
        if (arr[j] < pivot) {
            arr[i] = arr[j].also { arr[j] = arr[i]}
            i++
        }
    }

    arr[i] = arr[right].also { arr[right] = arr[i]}
    return i
}