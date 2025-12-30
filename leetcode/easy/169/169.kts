class Solution {
    fun majorityElement(nums: IntArray): Int {
        var count = 1
        var candidate = nums[0]

        for (i in 1 until nums.size) {
            if (count == 0) {
                candidate = nums[i]
                count = 1
            } else if (nums[i] == candidate) {
                count++
            } else {
                count--
            }
        }

        return candidate
    }
}