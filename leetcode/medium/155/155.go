package main

type MinStack struct {
    stack []struct {
		Val int
		Min int
	}
}


func Constructor() MinStack {
    return MinStack{
		stack: make([]struct{Val int; Min int}, 0),
	}
}


func (this *MinStack) Push(val int)  {
	var min int
	if len(this.stack) == 0 {
		min = val
	} else {
		prevMin := this.stack[len(this.stack)-1].Min
		if val < prevMin {
			min = val
		} else {
			min = prevMin
		}
	}

	this.stack = append(this.stack, struct{Val int; Min int}{
		Val: val,
		Min: min,
	})
}


func (this *MinStack) Pop()  {
	this.stack = this.stack[:len(this.stack)-1]
}


func (this *MinStack) Top() int {
	return this.stack[len(this.stack)-1].Val;
}


func (this *MinStack) GetMin() int {
	return this.stack[len(this.stack)-1].Min
}


/**
 * Your MinStack object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(val);
 * obj.Pop();
 * param_3 := obj.Top();
 * param_4 := obj.GetMin();
 */