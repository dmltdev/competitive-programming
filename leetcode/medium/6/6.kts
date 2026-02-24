class Solution {
  fun convert(s: String, numRows: Int): String {
      if (numRows == 1 || numRows >= s.length) return s

      val rows = Array(numRows) { StringBuilder() }
      var currentRow = 0
      var direction = 1

      for (char in s) {
          rows[currentRow].append(char)
          if (currentRow == 0) direction = 1
          else if (currentRow == numRows - 1) direction = -1
          currentRow += direction
      }

      return rows.joinToString("") { it.toString() }
  }
}
