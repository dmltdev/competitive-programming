impl Solution {
    pub fn summary_ranges(nums: Vec<i32>) -> Vec<String> {
        if nums.is_empty() {
            return vec![];
        }

        let mut result: Vec<String> = Vec::new();

        let mut start = nums[0];
        let mut end = nums[0];

        for i in 1..nums.len() {
            if nums[i] == end + 1 {
                end = nums[i];
            } else {
                result.push(Self::format_range(start, end));
                start = nums[i];
                end = nums[i];
            }
        }

        result.push(Self::format_range(start, end));

        result
    }

    fn format_range(start: i32, end: i32) -> String {
        if start == end {
            start.to_string()
        } else {
            format!("{}->{}", start, end)
        }
    }
}
