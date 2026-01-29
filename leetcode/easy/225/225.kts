class MyStack() {
    private val queue = ArrayDeque<Int>()

    fun push(x: Int) {
        queue.addLast(x)
        repeat(queue.size - 1) {
            queue.addLast(queue.removeFirst())
        }
    }

    fun pop(): Int {
        return queue.removeFirst()
    }

    fun top(): Int {
        return queue.first()
    }

    fun empty(): Boolean {
        return queue.isEmpty()
    }
}