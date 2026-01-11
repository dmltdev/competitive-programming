impl Solution {
    pub fn ship_within_days(weights: Vec<i32>, days: i32) -> i32 {
        let mut left = *weights.iter().max().unwrap();
        let mut right: i32 = weights.iter().sum();
        let mut result = right;

        let can_ship = |capacity: i32| -> bool {
            let mut ships = 1;
            let mut current_capacity = capacity;

            for &weight in &weights {
                if current_capacity - weight < 0 {
                    ships += 1;
                    current_capacity = capacity;
                }
                current_capacity -= weight;
            }

            ships <= days
        };

        while left <= right {
            let mid = (left + right) / 2;

            if can_ship(mid) {
                result = result.min(mid);
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        result
    }
    
}