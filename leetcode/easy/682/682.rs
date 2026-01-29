impl Solution {
    pub fn cal_points(operations: Vec<String>) -> i32 {
        let mut stack: Vec<i32> = Vec::new();

        for op in operations.iter() {
            match op.as_str() {
                "C" => {
                    stack.pop();
                }
                "D" => {
                    if let Some(&last_score) = stack.last() {
                        stack.push(last_score * 2);
                    }
                }
                "+" => {
                    let len = stack.len();
                    if len >= 2 {
                        let sum = stack[len - 1] + stack[len - 2];
                        stack.push(sum);
                    }
                }
                _ => {
                    if let Ok(num) = op.parse::<i32>() {
                        stack.push(num);
                    }
                }
            }
        }

        stack.iter().sum()
    }
}