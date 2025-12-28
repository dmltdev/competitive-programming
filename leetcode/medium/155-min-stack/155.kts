class MinStack {
    private data class Node(val value: Int, val min: Int)
    private val stack = mutableListOf<Node>()

    fun push(value: Int) {
        val min = if (stack.isEmpty()) {
            value
        } else {
            minOf(value, stack.last().min)
        }
        stack.add(Node(value, min))
    }

    fun pop() {
        stack.removeAt(stack.size - 1)
    }

    fun top(): Int {
        return stack.last().value
    }

    fun getMin(): Int {
        return stack.last().min
    }
}