use std::collections::VecDeque;

struct MyStack {
    queue: VecDeque<i32>,
}

impl MyStack {
    fn new() -> Self {
        MyStack {
            queue: VecDeque::new(),
        }
    }

    fn push(&mut self, x: i32) {
        self.queue.push_back(x);
        for _ in 0..self.queue.len() - 1 {
            let front = self.queue.pop_front().unwrap();
            self.queue.push_back(front);
        }
    }

    fn pop(&mut self) -> i32 {
        self.queue.pop_front().unwrap()
    }

    fn top(&self) -> i32 {
        *self.queue.front().unwrap()
    }

    fn empty(&self) -> bool {
        self.queue.is_empty()
    }
}