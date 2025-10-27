package medium2125

func numberOfBeams(bank []string) int {
    beams := 0
	prev := 0

	for _, floor := range bank {
		curr := 0
		for _, ch := range floor {
			if ch == '1' {
				curr++
			}
		}

		
		if curr > 0 {
			beams += prev * curr
			prev = curr
		}
	}

	return beams
}