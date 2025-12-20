#include <vector>
#include <iostream>

class Solution {
public:
    vector<int> buildArray(vector<int>& nums) {
        int n = nums.size();

        for (int i = 0; i < n; i++) {
            nums[i] = nums[i] + n * (nums[nums[i]] % n);
        }

        for (int i = 0; i < n; i++) {
            nums[i] = nums[i] / n;
        }

        return nums;
    }
};

int main() {
    Solution solution;
    vector<int> nums = {0, 2, 1, 5, 3, 4};
    vector<int> result = solution.buildArray(nums);
    for (int i = 0; i < result.size(); i++) {
        cout << result[i] << " ";
    }
    return 0;
}