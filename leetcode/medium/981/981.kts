class TimeMap() {
    private val map: MutableMap<String, MutableList<Pair<Int, String>>> = mutableMapOf()
    fun set(key: String, value: String, timestamp: Int) {
        map.getOrPut(key) { mutableListOf() }.add(Pair(timestamp, value))
    }

    fun get(key: String, timestamp: Int): String {
        val list = map[key] ?: return ""

        val index = searchTimestampIndex(list, timestamp)

        return if (index != -1) {
            list[index].second
        } else {
            ""
        }
    }

    private fun searchTimestampIndex(arr: List<Pair<Int, String>>, target: Int): Int {
        var left = 0
        var right = arr.size - 1
        var result = -1

        while (left <= right) {
            val mid = (left + right) / 2

            when {
                arr[mid].first == target -> return mid
                arr[mid].first < target -> {
                    result = mid
                    left = mid + 1
                }
                else -> right = mid -1
            }
        }

        return result
    }
}