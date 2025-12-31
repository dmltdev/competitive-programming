class Solution {
    fun topKFrequent(nums: IntArray, k: Int): IntArray {
        val count = mutableMapOf<Int, Int>()
        for (num in nums) {
            count[num] = count.getOrDefault(num, 0) + 1
        }

        val buckets: Array<MutableList<Int>> = Array(nums.size + 1) { mutableListOf() }

        for ((num, freq) in count) {
            buckets[freq].add(num)
        }

        val result = mutableListOf<Int>()
        for (i in buckets.size - 1 downTo 1) {
            for (num in buckets[i]) {
                result.add(num)
                if (result.size == k) {
                    return result.toIntArray()
                }
            }
        }

        return result.toIntArray()
    }
}