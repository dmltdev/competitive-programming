package easy168

func convertToTitle(columnNumber int) string {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var result = ""
  var num = columnNumber

  for num > 0 {
	charIndex := (num - 1) % 26
	result = string(alphabet[charIndex]) + result
	num = (num - 1) / 26
  }

  return result
}