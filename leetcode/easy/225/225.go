package main

type MyStack struct {
	queue []int
}

func Constructor() MyStack {
	return MyStack{queue: []int{}}
}

func (this *MyStack) Push (x int) {
	this.queue = append(this.queue, x)
	for i := 0; i < len(this.queue) - 1; i++ {
		this.queue = append(this.queue, this.queue[0])
		this.queue = this.queue[1:]
	}
}

func (this *MyStack) Pop() int {
	val := this.queue[0]
	this.queue = this.queue[1:]
	return val
}

func (this *MyStack) Top() int {
	return this.queue[0]
}

func (this *MyStack) Empty() bool {
	return len(this.queue) == 0
}