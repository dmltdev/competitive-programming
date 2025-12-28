fun twoSum(nums: IntArray, target: Int): IntArray {
    val map = mutableMapOf<Int, Int>()
    for (i in nums.indices) {
        val complement = target - nums[i]
        if (map.containsKey(complement)) {
            return intArrayOf(map[complement]!!, i)
        }
        map[nums[i]] = i
    }
    return intArrayOf()
}

fun main() {
    val arr = intArrayOf(2, 7, 11, 15)
    val result = twoSum(arr, 9)
    println(result.contentToString())
}

main()