#!/usr/bin/env kotlin

fun calPoints(operations: Array<String>): Int {
    val stack = mutableListOf<Int>()

    for (op in operations) {
        when (op) {
            "C" -> {
                stack.removeAt(stack.size - 1)
            }
            "D" -> {
                val lastScore = stack[stack.size - 1]
                stack.add(lastScore * 2)
            }
            "+" -> {
                val lastScore = stack[stack.size - 1]
                val secondLastScore = stack[stack.size - 2]
                stack.add(lastScore + secondLastScore)
            }
            else -> {
                stack.add(op.toInt())
            }
        }
    }

    return stack.sum()
}