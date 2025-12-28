class Solution {
    fun dailyTemperatures(temperatures: IntArray): IntArray {
        val ans = IntArray(temperatures.size)
        val stack = mutableListOf<Int>()

        for (i in temperatures.indices) {
            while (stack.isNotEmpty() && temperatures[i] > temperatures[stack.last()]) {
                val prevIndex = stack.removeLast()
                ans[prevIndex] = i - prevIndex
            }
            stack.add(i)
        }

        return ans
    }
}